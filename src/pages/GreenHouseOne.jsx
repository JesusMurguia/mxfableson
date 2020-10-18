import React from "react";
import SuperGraph from "../componentes/SuperGraph";
import data from '../data/Greenhouse1.json';
import { Container, Row, Col } from "react-bootstrap";
const drawGreenhouse1 = (props) => {

  var dataGraphOne;
  var dataGraphTwo;
  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  //Cambiar por las combinaciones de los json falta ya que son dos graficas en el json 
  switch (GraficaType) {
    case 'group':
      switch (Iteration) {
        case 'iteration_3':
          if (Scenario === "Sustainaible") {
            dataGraphOne = data.graphOne_combinationTwo
            dataGraphTwo = data.graphTwo_combinationTwo
          } else {
            dataGraphOne = data.graphOne_combinationFour
            dataGraphTwo = data.graphTwo_combinationFour
          }
          var dataGraphOneAux = convertir(dataGraphOne);
          var dataGraphTwoAux = convertir_data(dataGraphTwo);

          break;
        case 'iteration_4':
          if (Scenario === "Sustainaible") {
            dataGraphOne = data.graphOne_combinationOne
            dataGraphTwo = data.graphTwo_combinationOne



          } else {
            dataGraphOne = data.graphOne_combinationThree
            dataGraphTwo = data.graphTwo_combinationThree
          }
          var dataGraphOneAux = convertir(dataGraphOne);
          var dataGraphTwoAux = convertir_data(dataGraphTwo);

          break;
      }
      break;
    case 'regions':
      switch (Iteration) {
        case 'iteration_3':
          if (Scenario === "Sustainaible") {
            dataGraphOne = data.graphOne_combinationSix
            dataGraphTwo = data.graphTwo_combinationSix
          } else {
            dataGraphOne = data.graphOne_combinationEight
            dataGraphTwo = data.graphTwo_combinationSeven
          }
          var dataGraphOneAux = convertir(dataGraphOne);
          var dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
        case 'iteration_4':
          if (Scenario === "Sustainaible") {
            dataGraphOne = data.graphOne_combinationFive
            dataGraphTwo = data.graphTwo_combinationEight
          } else {
            dataGraphOne = data.graphOne_combinationSeven
            dataGraphTwo = data.Greengraph_Two__combination_Seven
          }
          var dataGraphOneAux = convertir(dataGraphOne);
          var dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;

      }
      break;
    case 'countries':
      switch (Iteration) {
        case 'iteration_3':
          if (Scenario === "Sustainaible") {
            dataGraphOne = data.graphOne_combinationTen
            dataGraphTwo = data.graphTwo_combinationTen
          } else {
            dataGraphOne = data.graphOne_combinationTwelve
            dataGraphTwo = data.graphTwo_combinationTwelve
          }
          var dataGraphOneAux = convertir(dataGraphOne);
          var dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;

        case 'iteration_4':
          if (Scenario === "Sustainaible") {
            dataGraphOne = data.graphOne_combinationNine
            dataGraphTwo = data.graphTwo_combinationNine
          } else {
            dataGraphOne = data.graphOne_combinationEleven
            dataGraphTwo = data.graphTwo_combinationEleven
          }
          var dataGraphOneAux = convertir(dataGraphOne);
          var dataGraphTwoAux = convertir_data(dataGraphTwo);
          break;
      }
      break;
  }

  return (
    <Container fluid>
      <Row>
        <Col >
          <div style={{ height: "100vh" }}><SuperGraph data={dataGraphOneAux}
            title="Green House 1"
            aspectRatio={false} 
            labelposition="top"/> 
            </div></Col>
        <Col > <div style={{ height: "100vh" }}><SuperGraph data={dataGraphTwoAux}
          title="Green House 2"
          aspectRatio={false} 
            labelposition="top" /> </div></Col>
      </Row>
    </Container>
 ); 
}

//These are the values of graph one
const convertir_data = (props) => {

  var graphTwo_Total_GHG_land = [];
  var graphTwo_Target_GHG_lu = [];
  var graphTwo_FAO_LU_global = [];
  var graphTwo_sequestration = [];
  var graphTwo_other_luc = [];
  var graphTwo_peat = [];
  var graphTwo_deforestation = [];

  var labels = [];

  if (props != undefined) {

    props.map((item) => {
      graphTwo_Total_GHG_land.push(item.total_GHG_land);
      graphTwo_Target_GHG_lu.push(item.Target_GHG_LU);
      graphTwo_FAO_LU_global.push(item.FAO_LU_global);
      graphTwo_sequestration.push(item.sequestration);
      graphTwo_other_luc.push(item.other_LUC);
      graphTwo_peat.push(item.peat);
      graphTwo_deforestation.push(item.deforestation);

      labels.push(item.Year);

    });

  }

  const data = {

    labels: labels,
    datasets: [
      {
        type: 'scatter',
        label: 'Target GHG LU',
        data: graphTwo_Target_GHG_lu,
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
        pointBorderColor: 'red',
        pointBackgroundColor: 'red',
        pointHoverBackgroundColor: 'crimson',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'scatter',
        label: 'FAO LU global',
        data: graphTwo_FAO_LU_global,
        fill: false,
        borderColor: 'black',
        backgroundColor: 'black',
        pointBorderColor: 'black',
        pointBackgroundColor: 'black',
        pointHoverBackgroundColor: 'grey',
        pointHoverBorderColor: 'grey',
        yAxisID: 'y-axis-1'
      },
      {
        //Aforestation ejemplo
        type: 'line',
        label: 'Total GHG land',
        data: graphTwo_Total_GHG_land,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      },
      //asd
      {
        type: 'bar',
        label: 'sequestration',
        data: graphTwo_sequestration,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: 'purple',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'other LUC',
        data: graphTwo_other_luc,
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
        label: 'peat',
        data: graphTwo_peat,
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
        label: 'deforestation',
        data: graphTwo_deforestation,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#00b6cb',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }


    ]

  };

  return data

}

//These are the values of graph TWO
const convertir = (props) => {

  var total_GHG_agri = [];
  var target_GHG_agri = [];
  var FAO_LU_global = [];
  var livestock_N2O = [];
  var livestock_CH4 = [];
  var crop_CH4 = [];
  var crop_N2O = [];
  var crop_CO2 = [];
  var labels = [];

  if (props != undefined) {

    props.map((item) => {
      total_GHG_agri.push(item.Total_GHG_agric);
      target_GHG_agri.push(item.Target_GHG_agri);
      FAO_LU_global.push(item.FAO_Agric_global);
      livestock_N2O.push(item.livestock_N2O);
      livestock_CH4.push(item.livestock_CH4);
      crop_CH4.push(item.crop_CH4);
      crop_N2O.push(item.crop_N2O);
      crop_CO2.push(item.crop_CO2);

      labels.push(item.Year);

    });

  }

  const data = {

    labels: labels,
    datasets: [
      {
        type: 'scatter',
        label: 'Target GHG agri',
        data: target_GHG_agri,
        fill: false,
        borderColor: 'red',
        backgroundColor: 'red',
        pointBorderColor: 'red',
        pointBackgroundColor: 'red',
        pointHoverBackgroundColor: 'crimson',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'scatter',
        label: 'FAO Agric global',
        data: FAO_LU_global,
        fill: false,
        borderColor: 'black',
        backgroundColor: 'black',
        pointBorderColor: 'black',
        pointBackgroundColor: 'black',
        pointHoverBackgroundColor: 'grey',
        pointHoverBorderColor: 'grey',
        yAxisID: 'y-axis-1'
      },
      {
        //Aforestation ejemplo
        type: 'line',
        label: 'Total GHG agric',
        data: total_GHG_agri,
        fill: false,
        backgroundColor: '#faa75a',
        borderColor: '#71B37C',
        hoverBackgroundColor: '#71B37C',
        hoverBorderColor: '#71B37C',
        yAxisID: 'y-axis-1'
      },
      //asd
      {
        type: 'bar',
        label: 'livestock N2O',
        data: livestock_N2O,


        fill: false,
        borderColor: '#EC932F',
        backgroundColor: 'purple',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      },
      {
        type: 'bar',
        label: 'livestock CH4',
        data: livestock_CH4,

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
        label: 'crop CH4',
        data: crop_CH4,
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
        label: 'crop N2O',
        data: crop_N2O,
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
        label: 'crop CO2',
        data: crop_CO2,
        fill: false,
        borderColor: '#EC932F',
        backgroundColor: '#0072f0',
        pointBorderColor: '#EC932F',
        pointBackgroundColor: '#EC932F',
        pointHoverBackgroundColor: '#EC932F',
        pointHoverBorderColor: '#EC932F',
        yAxisID: 'y-axis-1'
      }

    ]

  };

  return data

}

export default drawGreenhouse1