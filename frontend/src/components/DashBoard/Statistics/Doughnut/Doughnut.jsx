import React from 'react'
import { Col } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const DoughnutComponent = () => {

    return (
        <>
            <h4 style={{marginTop: "40px", textAlign: "center"}}>Doughnut</h4>
            <Doughnut data={data} />
        </>
    )
}

export default DoughnutComponent
