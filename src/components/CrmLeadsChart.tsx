import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Lead } from "../types";

interface CrmLeadsChartProps {
  data: Lead[];
}

const CrmLeadsChart: React.FC<CrmLeadsChartProps> = ({ data }) => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom align="center">
          CRM Leads
        </Typography>
        <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
          <Table
            sx={{
              "@media (max-width: 600px)": { display: "block" },
            }}
            aria-label="leads table"
          >
            <TableHead
              sx={{
                display: { xs: "none", sm: "table-header-group" },
              }}
            ></TableHead>
            <TableBody
              sx={{
                "@media (max-width: 600px)": { display: "block" },
              }}
            >
              {data.map((lead, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "@media (max-width: 600px)": {
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 2,
                      marginBottom: 2,
                      padding: 2,
                      border: "1px solid #e0e0e0",
                      borderRadius: 2,
                      boxShadow: 1,
                      backgroundColor: "#f9f9f9",
                    },
                    alignItems: "center",
                  }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{
                      "@media (max-width: 600px)": {
                        gridColumn: "1 / 2",
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        padding: "8px 0",
                        color: "#333",
                      },
                    }}
                  >
                    <strong>Nombre:</strong> {lead.nombre}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "@media (max-width: 600px)": {
                        gridColumn: "1 / 2",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        color: "#555",
                      },
                    }}
                  >
                    <strong>Costo de Adquisición:</strong>{" "}
                    {lead.costoAdquisición}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      "@media (max-width: 600px)": {
                        gridColumn: "1 / 2",
                        textAlign: "center",
                        fontSize: "0.9rem",
                        color: "#555",
                      },
                    }}
                  >
                    <strong>Valor de Vida:</strong> {lead.valorDeVida}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default CrmLeadsChart;
