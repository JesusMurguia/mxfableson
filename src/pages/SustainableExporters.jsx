import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/SustainableExporters.json';
//nfch=NetForestCoverChange
const SustainableExporters = (props) => {

  /*const { GraficaType, Iteration, Scenario } = props.combinacion.select;
  let dataAux;
  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_1);
          console.log(dataAux);
          break;
        case 'Iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_1);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'Iteration_3':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_1);
          break;
        case 'Iteration_4':
          dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_1);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'Iteration_3':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_1);
        break;
      case 'Iteration_4':
        dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_1);

        break
    }
    break;
  }*/
  var dataAux = convertir(data.combination_1);
console.log(dataAux)
return( <div style={{height:"75vh"}}><BarChart data={dataAux}
title="Sustainable - net exporters"
aspectRatio={false}
/></div> );
}


const convertir=(props)=>{
    var CHN=[];
    var R_OEU=[];
    var R_CSA=[];
    var R_NEU=[];
    var ARG=[];
    var ZAF=[]; 
    var BRA=[];
    var IND=[];
    var CAN=[];
    var USA=[]
    var AUS=[];
    var R_SSA=[];
    var DEU=[];
    var NOR=[]; 
    var MEX=[];
    var COL=[]; 
    var FIN=[];
    var MYS = [];
    var R_NMC = [];
    var labels = [];


    if (props != undefined) {
        props.map((item) => {
          //export quantity (unit 1000 tons) was replace to export_quantity 
          console.log(item.alpha2)
            if (item.alpha2 === "CHN") {
              CHN.push(item.export_quantity );
            }else if (item.alpha2 === "R_OEU") {
              R_OEU.push(item.export_quantity );
            }else if (item.alpha2 === "R_CSA") {
              R_CSA.push(item.export_quantity );
            }else if (item.alpha2 === "R_NEU") {
              R_NEU.push(item.export_quantity );
            }
            else if (item.alpha2 === "ARG") {
              ARG.push(item.export_quantity );
            }else if (item.alpha2 === "ZAF") {
              ZAF.push(item.export_quantity );
            }else if (item.alpha2 === "BRA") {
              BRA.push(item.export_quantity );
            }else if (item.alpha2 === "IND") {
              IND.push(item.export_quantity );
            }else if (item.alpha2 === "CAN") {
              CAN.push(item.export_quantity );
            }else if (item.alpha2 === "USA") {
              USA.push(item.export_quantity );
            }else if (item.alpha2 === "AUS") {
              AUS.push(item.export_quantity );
            }else if (item.alpha2 === "R_SSA") {
              R_SSA.push(item.export_quantity );
            }else if (item.alpha2 === "DEU") {
              DEU.push(item.export_quantity );
            }else if (item.alpha2 === "NOR") {
              NOR.push(item.export_quantity );
            }else if (item.alpha2 === "MEX") {
              MEX.push(item.export_quantity );
            }else if (item.alpha2 === "COL") {
              COL.push(item.export_quantity );
            }else if (item.alpha2 === "FIN") {
              FIN.push(item.export_quantity );
            }else if (item.alpha2 === "MYS") {
              MYS.push(item.export_quantity );
            }else if (item.alpha2 === "R_NMC") {
              R_NMC.push(item.export_quantity );
            }

            if(!labels.includes(item.year))
    {
       labels.push(item.year);
    }
        }
      

        );}

        const data = {
          labels:  labels,
           datasets: [
                {
                  //Aforestation ejemplo
                  type: 'bar',
                  label: 'CHN',
                  data: CHN,
                  fill: false,
                  backgroundColor: '#faa75a',
                  borderColor: '#71B37C',
                  hoverBackgroundColor: '#71B37C',
                  hoverBorderColor: '#71B37C',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'R_OEU',
                  data: R_OEU,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#7cb342',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'R_CSA',
                  data: R_CSA,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#5a9bd4',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'R_NEU',
                  data:R_NEU,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#5e35b1',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'ARG',
                  data: ARG,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#00b6cb',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                }
                ,
                {
                  type: 'bar',
                  label: 'ZAF',
                  data: ZAF,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#5e35b1',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'BRA',
                  data: BRA,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#00b6cb',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'IND',
                  data: IND,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#0072f0',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },  {
                  type: 'bar',
                  label: 'CAN',
                  data: CAN,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#9e67ab',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },  {
                  type: 'bar',
                  label: 'USA',
                  data: USA,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#0072f0',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'AUS',
                  data: AUS,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '##ce7058',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'R_SSA',
                  data: R_SSA,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#ffa800',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                }, {
                  type: 'bar',
                  label: 'DEU',
                  data: DEU,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#ec407a',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'NOR',
                  data: NOR,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#7ac36a',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'MEX',
                  data: MEX,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#f10096',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'COL',
                  data: COL,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#ffa800',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },
                {
                  type: 'bar',
                  label: 'FIN',
                  data: FIN,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#5e35b1',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'MYS',
                  data: MYS,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#0390d0',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'R_NMC',
                  data: R_NMC,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#f10096',
                  pointBorderColor: '#EC932F',
                  pointBackgroundColor: '#EC932F',
                  pointHoverBackgroundColor: '#EC932F',
                  pointHoverBorderColor: '#EC932F',
                  yAxisID: 'y-axis-1'
                }                
              ]
            };

            console.log(data)
       return data
}

export default SustainableExporters;