import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/FreshWaterUse1.json';



//filter map
//nfch=NetForestCoverChange
const drawFreshWaterUse= (props) => {
 
  let dataAux;

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_2 : data.combination_4);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_3);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_6 : data.combination_8);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_5 : data.combination_7);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combination_10 : data.combination_12);
        break;
      case 'iteration_4':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combination_9 : data.combination_11);

        break
    }
    break;
  }
  return <div style={{height: "100vh"}}><BarChart data={dataAux}
  aspectRatio={false}
  labelposition="top"
  title="Fresh Water use"/></div>;
}







const convertir=(props)=> {
 
    var dataUno=[]
   
    var labels=[]
      
     props.map((item) => {
      dataUno.push(item.million_cubic_metres);
     labels.push(item.Year);
      
    });
   
    const data={
      labels:labels,
       datasets:[
         {
          label:"million cubic metres",
          data:dataUno,
          fill:false,
          type:"bar",
          backgroundColor:"#81c784",
          borderColor:"#81c784",
          hoverBackgroundColor:"darkgreen",
          hoverBorderColor:"#81c784",
          yAxisID:"y-axis-1"
         }
       ]
    }
  
   return data
  } 









export default drawFreshWaterUse;
