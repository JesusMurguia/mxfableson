import React from "react";
import MixedChart from "../componentes/MixedChart.jsx";
import data from '../data/GlobalTargets.json';

const drawFoodEnergyIntakePerCapita = (props) => {





    const convertir=(props)=> {
 
        var dataUno=[]
        var dataDos=[]
        var labels=[]
          
         props.map((item) => {
          dataUno.push(item.Kcal_feasible);
          dataDos.push(item.Target_MDER);
         labels.push(item.c_country_t);
          
        });
       
        const data={
          labels:labels,
           datasets:[
             {
              label:"Target (MDER)",
              data:dataDos,
              fill:false,
              type:"scatter",
              backgroundColor:"Red",
              borderColor:"Red",
              hoverBackgroundColor:"Red",
              hoverBorderColor:"Red",
              yAxisID:"y-axis-1"
             },
             {
              label:"Kcal feasible",
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



    let dataAux;

    const { GraficaType, Iteration, Scenario, Year } = props.combinacion.select;
  
    switch(GraficaType){
      case 'group':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionDos : data.targetCinco_combinacionCuatro);
            break;
          case 'iteration_4':
            dataAux= convertir(Year === "2030" ? data.targetCinco_combinacionUno : data.targetCinco_combinacionTres);
            break
        }
        break;
      case 'regions':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionSeis : data.targetCinco_combinacionOcho);
            break;
          case 'iteration_4':
            dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionCinco : data.targetCinco_combinacionSiete);
            break
        }
        break;
      case 'countries':
        switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionDies : data.targetCinco_combinacionDoce);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.targetCinco_combinacionNueve : data.targetCinco_combinacionOnce);
  
          break
      }
      break;
    }
    return <div style={{height:'75vh'}}><MixedChart data={dataAux}
    aspectRatio={false}
    labelposition="top"
    title="Food energy intake per capita"/></div>;
  }
  export default drawFoodEnergyIntakePerCapita;

