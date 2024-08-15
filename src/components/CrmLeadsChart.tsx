import React from 'react';
import { Card, CardContent, Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Lead } from '../types'; 

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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="leads table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Nombre</strong></TableCell>
                  <TableCell align="right"><strong>Costo de Adquisición</strong></TableCell>
                  <TableCell align="right"><strong>Valor de Vida</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((lead, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {lead.nombre}
                    </TableCell>
                    <TableCell align="right">{lead.costoAdquisición}</TableCell>
                    <TableCell align="right">{lead.valorDeVida}</TableCell>
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
