import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Anuncio } from '../types';

interface MetaAdsChartProps {
  data: Anuncio[];
}

const MetaAdsChart: React.FC<MetaAdsChartProps> = ({ data }) => {
  return (
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Meta Ads
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="meta ads table">
              <TableHead>
                <TableRow>
                  <TableCell><strong>Nombre</strong></TableCell>
                  <TableCell align="right"><strong>Alcance</strong></TableCell>
                  <TableCell align="right"><strong>Participación</strong></TableCell>
                  <TableCell align="right"><strong>Gasto Publicidad</strong></TableCell>
                  <TableCell align="right"><strong>Conversiones</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((ad, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {ad.nombre}
                    </TableCell>
                    <TableCell align="right">{ad.alcance}</TableCell>
                    <TableCell align="right">{ad.participación}</TableCell>
                    <TableCell align="right">{ad.gastoPublicidad}</TableCell>
                    <TableCell align="right">{ad.conversiones}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
  );
};

export default MetaAdsChart;
