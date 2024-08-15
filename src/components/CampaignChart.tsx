import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Campaña } from '../types'; 

interface CampaignChartProps {
  data: Campaña[]; 
}

const CampaignChart: React.FC<CampaignChartProps> = ({ data }) => {
  return (

      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Campañas
          </Typography>
          <ResponsiveContainer height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="1 5" />
              <XAxis dataKey="nombre" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="impresiones" fill="#8884d8" />
              <Bar dataKey="clics" fill="#82ca9d" />
              <Bar dataKey="conversiones" fill="#ff8042" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

  );
};

export default CampaignChart;
