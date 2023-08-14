import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Pi_chart.css'

const Pi_chart = ({ numberOfUsers }) => {
  const data = {
    labels: ['Active Users', 'Inactive Users'],
    datasets: [
      {
        data: [numberOfUsers, 100 - numberOfUsers], // Assuming total users are 100
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
      <div className='label'>
        <div className='labelbox' style={{ backgroundColor: '#36A2EB' }}></div>
        <span>Active Users</span>
      </div>
      <div className='label'>
        <div className='labelbox' style={{ backgroundColor: '#FF6384' }}></div>
        <span>Inactive Users</span>
      </div>
    </div>
  );
};

export default Pi_chart;
