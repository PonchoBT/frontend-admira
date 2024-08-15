import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Demografia } from "../types";

interface DemographicsPieProps {
  data: Demografia;
}

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DemographicsPie: React.FC<DemographicsPieProps> = ({ data }) => {
  const ageData = data.edad.map((item) => ({
    name: item.rango,
    value: item.porcentaje,
  }));
  const genderData = data.género.map((item) => ({
    name: item.tipo,
    value: item.porcentaje,
  }));

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          Demografía
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                align="center"
              >
                Distribución por Edad
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={ageData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {ageData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ marginTop: 2 }}
              >
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography sx={{ color: "#0088fe" }}>18-24</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography sx={{ color: "#82ca9d" }}>25-34</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                align="center"
              >
                Distribución por Género
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={genderData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#82ca9d"
                    label
                  >
                    {genderData.map((_entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ marginTop: 2 }}
              >
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography sx={{ color: "#0088fe" }}>Hombre</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container alignItems="center" spacing={1}>
                    <Grid item>
                      <Typography sx={{ color: "#82ca9d" }}>Mujer</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DemographicsPie;
