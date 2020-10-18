import React from 'react';
import {Bar} from 'react-chartjs-2';



  
  const  drawMixedChart=(props)=> {


    const options = {
      responsive: true,
      maintainAspectRatio: props.aspectRatio===undefined?true:props.aspectRatio,
      title: {
        display: true,
        text: props.title
    },legend:{
      display:true,
      labels:{
        boxWidth:props.labelWidth===undefined?20:props.labelWidth,
      fontSize:props.labelSize===undefined?12:props.labelSize
      },
      position:props.labelposition===undefined?'right':props.labelposition
    },tooltips: {
        mode: 'label'
      },
      elements: {
        line: {
          fill: false
        }
      },
      scales: {
        xAxes: [
          {
              stacked: true,
  
            display: true,
            gridLines: {
              display: true
            },
            
            
          }
        ],
        yAxes: [
          {
              stacked: true,
  
            type: 'linear',
            display: true,    
            position: 'left',
            id: 'y-axis-1',
            gridLines: {
              display: true,
            },
  
            labels: {
              show: true
            }
          },
          {
            type: 'linear',
            display: false,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
              display: false
            }
          ,
            labels: {
              show: true
            }
          }
        ]
      }
    };
    
    let data = props.data;
        
  
    return (
          <Bar data={data}
                options={options}/>
      );
  }
  export default drawMixedChart;