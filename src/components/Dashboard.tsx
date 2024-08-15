import React, { Suspense, useState, useEffect } from "react";
import { Typography, Grid, Container, CircularProgress, Alert } from "@mui/material";
import googleAnalyticsData from "../data/googleAnalytics.json";
import googleAdsData from "../data/googleAds.json";
import metaAdsData from "../data/metaAds.json";
import crmData from "../data/crm.json";
import {
  GoogleAnalyticsData,
  MetaAdsData,
  GoogleAdsData,
  CrmData,
} from "../types";

const AnalyticsChart = React.lazy(() => import("../components/AnalyticsChart"));
const CampaignChart = React.lazy(() => import("../components/CampaignChart"));
const DemographicsPie = React.lazy(() => import("../components/DemographicsPie"));
const MetaAdsChart = React.lazy(() => import("../components/MetaAdsChart"));
const CrmLeadsChart = React.lazy(() => import("../components/CrmLeadsChart"));

const googleAnalyticsDataTyped: GoogleAnalyticsData = googleAnalyticsData;
const metaAdsDataTyped: MetaAdsData = metaAdsData;
const googleAdsDataTyped: GoogleAdsData = googleAdsData;
const crmDataTyped: CrmData = crmData;

const combinedAnalyticsData = googleAnalyticsDataTyped.vistasPagina.map(
  (vistasData) => {
    const sesionesData =
      googleAnalyticsDataTyped.sesiones.find(
        (sesion) => sesion.fecha === vistasData.fecha
      ) || {};
    return {
      ...vistasData,
      ...sesionesData,
    };
  }
);


class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Alert severity="error">Hubo un problema al cargar esta sección. Por favor, intenta nuevamente más tarde.</Alert>;
    }
    return this.props.children;
  }
}

const Dashboard: React.FC = () => {
  const [hasDataError, setHasDataError] = useState(false);

  useEffect(() => {
    if (!googleAnalyticsDataTyped || !metaAdsDataTyped || !googleAdsDataTyped || !crmDataTyped) {
      setHasDataError(true);
    }
  }, []);

  if (hasDataError) {
    return (
      <Container style={{ marginTop: "2rem" }}>
        <Alert severity="error">Hubo un problema al cargar los datos. Por favor, intenta nuevamente más tarde.</Alert>
      </Container>
    );
  }

  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Admira Analytics Dashboard
        </Typography>
        <Suspense fallback={<CircularProgress />}>
          <ErrorBoundary>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <CampaignChart data={googleAdsDataTyped.campañas} />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <AnalyticsChart data={combinedAnalyticsData} />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <DemographicsPie data={googleAnalyticsDataTyped.demografía} />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <MetaAdsChart data={metaAdsDataTyped.anuncios} />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <CrmLeadsChart data={crmDataTyped.leads} />
              </Grid>
            </Grid>
          </ErrorBoundary>
        </Suspense>
      </Container>
    </div>
  );
};

export default Dashboard;
