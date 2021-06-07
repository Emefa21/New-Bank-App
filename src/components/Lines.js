import React, {Component, useState} from 'react'
import Chart from "react-apexcharts"

const Lines = () => {
    const [options, setObject] = useState ({
        chart: {
            id: "apexchart-example"
        },
        xaxis: {
            categories: [ 0, "15 MAR", "30 MAR", "15APR", "30 APR", "15 MAR" ]
          }
    })
    const [series, setSeries] = useState ([{
        name: 'series-1',
        data: [20, 40, 60, 80]
    }])
    return (
        <div>
           <Chart options={options} series={series} type="line" width={450} height={320} /> 
        </div>
    )
}

export default Lines
