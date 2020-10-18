import React from "react";
import BarChart from "../componentes/BarChart.jsx";
import data from '../data/Protected.json';
import {Container,Row,Col} from "react-bootstrap";
const drawProtected = (props) => {

    const convertir=(props)=> {
 
        var dataUno=[]
        var dataDos=[]
        var dataTres=[]
        var labels=[]
      
          
         props.map((item) => {
          dataUno.push(item.ProtectedAreasOther);
          dataDos.push(item.ProtectedAreasForest);
          dataTres.push(item.ProtectedAreasOtherNat);
          labels.push(item.Year);
          
        });
       
        const data={
          labels:labels,
           datasets:[
             {
              label:"Protected Areas Forest",
              data:dataDos,
              fill:false,
              type:"bar",
              backgroundColor:"Green",
              borderColor:"Green",
              hoverBackgroundColor:"Green",
              hoverBorderColor:"Green",
              yAxisID:"y-axis-1"
             },
             {
              label:"Protected Areas Other",
              data:dataUno,
              fill:false,
              type:"bar",
              backgroundColor:"Red",
              borderColor:"Red",
              hoverBackgroundColor:"Red",
              hoverBorderColor:"#Red",
              yAxisID:"y-axis-1"
             },{
                label:"Protected Areas OtherNat",
                data:dataTres,
                fill:false,
                type:"bar",
                backgroundColor:"Yellow",
                borderColor:"Yellow",
                hoverBackgroundColor:"Yellow",
                hoverBorderColor:"Yellow",
                yAxisID:"y-axis-1"
               }
           ]
        }
      
       return data
      } 




    let dataAux;

    const { GraficaType, Iteration, Scenario } = props.combinacion.select;
  
    switch(GraficaType){
      case 'group':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_two : data.combination_four);
            break;
          case 'iteration_4':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_one : data.combination_three);
            break
        }
        break;
      case 'regions':
        switch(Iteration){
          case 'iteration_3':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_six : data.combination_eight);
            break;
          case 'iteration_4':
            dataAux= convertir(Scenario === "Sustainaible" ? data.combination_five : data.combination_seven);
            break
        }
        break;
      case 'countries':
        switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_ten : data.combination_twelve);
          break;
        case 'iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_nine : data.combination_eleven);
  
          break
      }
      break;
    }
    return <div style={{height: "100vh"}}>
<BarChart data={dataAux}
labelposition='top'
aspectRatio={false}
    title="Protected Areas By Type"/>
  </div>;
  }
  export default drawProtected;