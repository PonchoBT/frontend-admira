import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { VistasPagina } from '../types'; 

interface AnalyticsChartProps {
  data: VistasPagina[]; 
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ data }) => {
  return (

      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Vistas y Sesiones
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="fecha" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vistas" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="sesiones" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

  );
};

export default AnalyticsChart;
