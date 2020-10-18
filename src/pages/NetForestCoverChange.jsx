import React from "react";
import MixedChart from "../componentes/MixedChart.jsx";
import data from '../data/NetForestCoverChange1.json';
import {Container,Row,Col} from "react-bootstrap";

import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
//filter map
//nfch=NetForestCoverChange
const drawNfch = (props) => {
  



  let dataAux;

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_dos : data.combinacion_cuatro);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_uno : data.combinacion_tres);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_seis : data.combinacion_ocho);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_cinco : data.combinacion_siete);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_dies : data.combinacion_doce);
        break;
      case 'iteration_4':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_nueve : data.combinacion_once);

        break
    }
    break;
  }
  return <div style={{height: "100vh"}}>
<MixedChart data={dataAux}
  title="Net Forest Cover Change"
  aspectRatio={false}
  labelposition="bottom"/>
  </div>;
}


const convertir=(props)=> {

  
  var labels=[];
  

  

  var forest_target=[];
  var gfw_deforestation=[]; 
  var forest_loss=[]; 
  var aforestation=[]; 
  var net_forest_change=[]; 
   
   props.map((item) => {
    forest_target.push(item.forest_target);
    gfw_deforestation.push(item.GFW_deforestation);
    forest_loss.push(item.forest_loss);
    aforestation.push(item.aforestation);
    net_forest_change.push(item.net_forest_change);
    labels.push(item.Year);
    
  });
  const data = {
    labels: labels,  
    datasets: [{
      //net_forest_change <- ejemplo
            label: 'Net forest change',
            type:'scatter',
            data:net_forest_change,
            fill: false,
            backgroundColor: 'Green',
            borderColor: '#71B37C',
            hoverBackgroundColor: '#71B37C',
            hoverBorderColor: '#71B37C',
            yAxisID: 'y-axis-1'
          },{
            //net_forest_change <- ejemplo
                  label: 'forest_target',
                  type:'scatter',
                  data:forest_target,
                  fill: false,
                  borderColor: 'Red',
                  backgroundColor: 'Red',
                  pointBorderColor: 'Red',
                  pointBackgroundColor: 'Red',
                  pointHoverBackgroundColor: 'Red',
                  pointHoverBorderColor: 'Red',
                  yAxisID: 'y-axis-1'
                }
          ,
          {
            //GFW deforestation <- ejemplo
                  label: 'GWF deforestation',
                  type:'scatter',
                  data:gfw_deforestation,
                  fill: false,
                  borderColor: 'Black',
                  backgroundColor: 'Black',
                  pointBorderColor: 'Black',
                  pointBackgroundColor: 'Black',
                  pointHoverBackgroundColor: 'Black',
                  pointHoverBorderColor: 'Black',
                  yAxisID: 'y-axis-1'
                },{
            //Aforestation ejemplo
            type: 'bar',
            label: 'Aforestation',
            data: aforestation,
            fill: false,
            backgroundColor: '#81c784',
            borderColor: '#81c784',
            hoverBackgroundColor: 'darkgreen',
            hoverBorderColor: '#81c784',
            yAxisID: 'y-axis-1'
          },{
            type: 'bar',
            label: 'Forest loss',
            data: forest_loss,
            fill: false,
            borderColor: '#EC932F',
            backgroundColor: '#ffd54f',
            pointBorderColor: '#ffd54f',
            pointBackgroundColor: '#ffd54f',
            pointHoverBackgroundColor: '#ffd54f',
            pointHoverBorderColor: '#EC932F',
            yAxisID: 'y-axis-1'
          },
        
        ]
      };

 return data
} 

 

export default drawNfch;



