import React from 'react';
import {Bar} from 'react-chartjs-2';




//draw triple style chart
const  drawSuperGraph=(props)=> {

    const data={
        labels:[2005,2010,2015,2020,2025,2030,2035,2040,2045,2050],
         datasets:[
           {
            label:"Testiri 1",
            data:[2,3,4,5,6,7,8,9,10],
            fill:false,
            type:"line",
            backgroundColor:"Red",
            borderColor:"Red",
            hoverBackgroundColor:"Red",
            hoverBorderColor:"Red",
            yAxisID:"y-axis-1"
           },{
            label:"Testiri 2",
            data:[2,5,7,3],
            fill:false,
            type:"scatter",
            backgroundColor:"Black",
            borderColor:"Black",
            hoverBackgroundColor:"Grey",
            hoverBorderColor:"Grey",
            yAxisID:"y-axis-1"
           }
           ,{
            label:"Testiri 3",
            data:[null,null,null,2,5,7,3,5],
            fill:false,
            type:"scatter",
            backgroundColor:"Blue",
            borderColor:"Blue",
            hoverBackgroundColor:"Blue",
            hoverBorderColor:"Blue",
            yAxisID:"y-axis-1"
           }
           ,
           {
            label:"Testiri 4",
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5],
            fill:false,
            type:"bar",
            backgroundColor:"#0072f0",
            borderColor:"#0072f0",
            hoverBackgroundColor:"#0072f0",
            hoverBorderColor:"#81c784",
            yAxisID:"y-axis-1"
           },
           {
            label:"Testiri 4",
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5],
            fill:false,
            type:"bar",
            backgroundColor:"#81f784",
            borderColor:"#81c784",
            hoverBackgroundColor:"darkgreen",
            hoverBorderColor:"#81c784",
            yAxisID:"y-axis-1"
           }, {
            label:"Testiri 5",
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5],
            fill:false,
            type:"bar",
            backgroundColor:"#51c784",
            borderColor:"#81c784",
            hoverBackgroundColor:"darkgreen",
            hoverBorderColor:"#81c784",
            yAxisID:"y-axis-1"
           }
           ,{
            label:"Testiri 6",
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5],
            fill:false,
            type:"bar",
            backgroundColor:"#51c834",
            borderColor:"#81c784",
            hoverBackgroundColor:"darkgreen",
            hoverBorderColor:"#81c784",
            yAxisID:"y-axis-1"
           },
           {
            label:"Testiri 7",
            data:[1,1,2,2,3,3,4,4,5,5,6,6,5],
            fill:false,
            type:"bar",
            backgroundColor:"darkblue",
            borderColor:"#81c784",
            hoverBackgroundColor:"darkblue",
            hoverBorderColor:"#81c784",
            yAxisID:"y-axis-1"
           },
         ]
      }
    const options = {
      responsive: true,
      maintainAspectRatio: props.aspectRatio===undefined?false:props.aspectRatio,
      title: {
        display: true,
        text: props.title
    },legend:{
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
    
  //  let data = props.data;
        
  
    return (
          <Bar data={props.data}
                options={options}/>
      );
  }
  export default drawSuperGraph;