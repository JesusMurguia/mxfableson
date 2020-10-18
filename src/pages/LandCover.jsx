import React from "react";
import BarChart from "../componentes/BarChart.jsx";
import data from '../data/LandCover.json';

const drawLandCover = (props) => {

    const convertir=(props)=> {
 
        var dataUno=[]
        var dataDos=[]
        var dataTres=[]
        var dataCuatro=[]
        var dataCinco=[]
        var dataSeis=[]
        var labels=[]
      
          
         props.map((item) => {
          dataUno.push(item.Pasture);
          dataDos.push(item.Crop_land);
          dataTres.push(item.Forest);
          dataCuatro.push(item.New_forest);
          dataCinco.push(item.Other_land);
          dataSeis.push(item.Urban);
          labels.push(item.Year);
          
        });
       
        const data={
          labels:labels,
           datasets:[
             {
              label:"Pasture",
              data:dataUno,
              fill:false,
              type:"bar",
              backgroundColor:"Green",
              borderColor:"Green",
              hoverBackgroundColor:"Green",
              hoverBorderColor:"Green",
              yAxisID:"y-axis-1"
             },
             {
              label:"Crop Land",
              data:dataDos,
              fill:false,
              type:"bar",
              backgroundColor:"Red",
              borderColor:"Red",
              hoverBackgroundColor:"Red",
              hoverBorderColor:"#Red",
              yAxisID:"y-axis-1"
             },{
                label:"Forest",
                data:dataTres,
                fill:false,
                type:"bar",
                backgroundColor:"Yellow",
                borderColor:"Yellow",
                hoverBackgroundColor:"Yellow",
                hoverBorderColor:"Yellow",
                yAxisID:"y-axis-1"
               },{
                label:"New Forest",
                data:dataCuatro,
                fill:false,
                type:"bar",
                backgroundColor:"Orange",
                borderColor:"Orange",
                hoverBackgroundColor:"Orange",
                hoverBorderColor:"Orange",
                yAxisID:"y-axis-1"
               },{
                label:"Other Land",
                data:dataCinco,
                fill:false,
                type:"bar",
                backgroundColor:"Blue",
                borderColor:"Blue",
                hoverBackgroundColor:"Blue",
                hoverBorderColor:"Blue",
                yAxisID:"y-axis-1"
               },{
                label:"Urban",
                data:dataSeis,
                fill:false,
                type:"bar",
                backgroundColor:"purple",
                borderColor:"purple",
                hoverBackgroundColor:"purple",
                hoverBorderColor:"purple",
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

    return (
    <div style={{height: "100vh"}}>
<BarChart data={dataAux}
    title="Land Cover"
labelposition='top'
aspectRatio={false}/>
  </div>
    );
  }
  export default drawLandCover;