import React, { Component } from 'react'
import { Chart, Line } from 'react-chartjs-2';
Chart.defaults.font.family = 'Poppins';
const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#16a085',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

export default class LinesChartComponent extends Component {
    render() {
        return (
        <div>
            <Line
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Average Rainfall per month',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right',
                    }
                }}
            />
        </div>
        );
    }
}
