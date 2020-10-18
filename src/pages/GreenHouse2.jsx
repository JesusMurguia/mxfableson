import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/Greenhouse2.json';
import { Container, Row, Col } from "react-bootstrap";
//nfch=NetForestCoverChange
const greenHouse = (props) => {
 
 
   var dataGraphOne;
   var dataGraphTwo;

 

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          if(Scenario === "Sustainaible")
          {
            dataGraphOne= data.Greengraph_One__combination_Two
            dataGraphTwo=data.Greengraph_Two__combination_Two
          }else{
            dataGraphOne=data.Greengraph_One__combination_Four
            dataGraphTwo=data.Greengraph_Two__combination_Four
          }
          var dataGraphOneAux= convertir(dataGraphOne);
          var dataGraphTwoAux= convertir(dataGraphTwo);
          
          break;
        case 'iteration_4':
          if(Scenario === "Sustainaible")
          {
            dataGraphOne= data.Greengraph_One__combination_One
            dataGraphTwo=data.Greengraph_Two__combination_One
            console.log(dataGraphTwo)
            
          }else{
            dataGraphOne= data.Greengraph_One__combination_Three
            dataGraphTwo=data.Greengraph_Two__combination_Three
          }
          var dataGraphOneAux= convertir(dataGraphOne);
          var dataGraphTwoAux= convertir(dataGraphTwo);
          console.log(dataGraphTwoAux)
          break;
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          if(Scenario === "Sustainaible")
          {
            dataGraphOne= data.Greengraph_One__combination_Six
            dataGraphTwo=data.Greengraph_Two__combination_Six
          }else{
            dataGraphOne= data.Greengraph_One__combination_Eight
            dataGraphTwo=data.Greengraph_Two__combination_Eight
          }
          var dataGraphOneAux= convertir(dataGraphOne);
          var dataGraphTwoAux= convertir(dataGraphTwo);
          break;
        case 'iteration_4':
          if(Scenario === "Sustainaible")
          {
            dataGraphOne=data.Greengraph_One__combination_Five
            dataGraphTwo=data.Greengraph_Two__combination_Five
          }else{
            dataGraphOne=data.Greengraph_One__combination_Seven
            dataGraphTwo=data.Greengraph_Two__combination_Seven
          }
          var dataGraphOneAux= convertir(dataGraphOne);
          var dataGraphTwoAux= convertir(dataGraphTwo);
          break;
         
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        if(Scenario === "Sustainaible")
        {
          dataGraphOne=data.Greengraph_One__combination_Ten
          dataGraphTwo=data.Greengraph_Two__combination_Ten
        }else{
          dataGraphOne=data.Greengraph_One__combination_Twelve
          dataGraphTwo=data.Greengraph_Two__combination_Twelve
        }
        var dataGraphOneAux= convertir(dataGraphOne);
        var dataGraphTwoAux= convertir(dataGraphTwo);
        break;
       
      case 'iteration_4':
        if(Scenario === "Sustainaible")
        {
          dataGraphOne=data.Greengraph_One__combination_Nine
          dataGraphTwo=data.Greengraph_Two__combination_Nine
        }else{
          dataGraphOne=data.Greengraph_One__combination_Eleven
          dataGraphTwo=data.Greengraph_Two__combination_Eleven
        }
        var dataGraphOneAux= convertir(dataGraphOne);
        var dataGraphTwoAux= convertir(dataGraphTwo);
        break;
    }
    break;
  }
  


return (
  <Container fluid>
    <Row>
      <Col><div style={{ height: "100vh" }}>
      <BarChart data={dataGraphOneAux}
title="Green House 2" aspectRatio={false} 
labelposition="bottom"/> 
      </div>
      </Col>
      <Col><div style={{ height: "100vh" }}>
      <BarChart data={dataGraphTwoAux}
title="Green House 2" aspectRatio={false} 
labelposition="bottom"/> 
      </div>
      </Col>
    </Row>
  </Container>);
  
}


const convertir=(props)=>{
    var usa=[];
    var UK=[];
    var sweden=[];
    var south_Africa=[];
    var rwanda=[];
    var russia=[]; 
    var Rest_of_Sub_Saharan_Africa=[];
    var Rest_of_North_Africa_Middle_East_and_central_Asia=[];
    var Rest_of_European_Union=[];
    var Rest_of_Europe_non_EU28=[]
    var Rest_of_Central_and_South_America=[];
    var Rest_of_Asia_and_Pacific=[];
    var norway=[];
    var mexico=[]; 
    var malaysia=[];
    var indonesia=[]; 
    var india=[];
    var germany = [];
    var finland = [];
    var otros = [];
    var labels = [];

    if (props != undefined) {
        props.map((item) => {
          
            if (item.c_country_t === "USA") {
              usa.push(item.total_GHG );
            }else if (item.c_country_t === "UK") {
              UK.push(item.total_GHG );
            }else if (item.c_country_t === "Sweden") {
              sweden.push(item.total_GHG );
            }else if (item.c_country_t === "South Africa") {
              south_Africa.push(item.total_GHG );
            }
            else if (item.c_country_t === "Rwanda") {
              rwanda.push(item.total_GHG );
            }else if (item.c_country_t === "Russia") {
              russia.push(item.total_GHG );
            }else if (item.c_country_t === "Rest of Sub-Saharan Africa") {
              Rest_of_Sub_Saharan_Africa.push(item.total_GHG );
            }else if (item.c_country_t === "Rest of North Africa Middle East and central Asia") {
              Rest_of_North_Africa_Middle_East_and_central_Asia.push(item.total_GHG );
            }else if (item.c_country_t === "Rest of European Union") {
              Rest_of_European_Union.push(item.total_GHG );
            }else if (item.c_country_t === "Rest of Europe non EU28") {
              Rest_of_Europe_non_EU28.push(item.total_GHG );
            }else if (item.c_country_t === "Rest of Central and South America") {
              Rest_of_Central_and_South_America.push(item.total_GHG );
            }else if (item.c_country_t === "Rest of Asia and Pacific") {
              Rest_of_Asia_and_Pacific.push(item.total_GHG );
            }else if (item.c_country_t === "Norway") {
              norway.push(item.total_GHG );
            }else if (item.c_country_t === "Mexico") {
              mexico.push(item.total_GHG );
            }else if (item.c_country_t === "Malaysia") {
              malaysia.push(item.total_GHG );
            }else if (item.c_country_t === "Indonesia") {
              indonesia.push(item.total_GHG );
            }else if (item.c_country_t === "India") {
              india.push(item.total_GHG );
            }else if (item.c_country_t === "Germany") {
              germany.push(item.total_GHG );
            }else if (item.c_country_t === "Finland") {
              finland.push(item.total_GHG );
            }else if (item.c_country_t === "otros") {
              otros.push(item.total_GHG );
            }

            if(!labels.includes(item.Year))
    {
       labels.push(item.Year);
    }
        }
      

        );}

        const data = {
          labels:  labels,
           datasets: [
                {
                  //Aforestation ejemplo
                  type: 'bar',
                  label: 'Usa',
                  data: usa,
                  fill: false,
                  backgroundColor: '#faa75a',
                  borderColor: '#71B37C',
                  hoverBackgroundColor: '#71B37C',
                  hoverBorderColor: '#71B37C',
                  yAxisID: 'y-axis-1'
                },{
                  type: 'bar',
                  label: 'Uk',
                  data: UK,
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
                  label: 'Sweden',
                  data: sweden,
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
                  label: 'South Africa',
                  data:south_Africa,
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
                  label: 'Rwanda',
                  data: rwanda,
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
                  label: 'Russia',
                  data: russia,
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
                  label: 'Rest of Sub Saharan Africa',
                  data: Rest_of_Sub_Saharan_Africa,
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
                  label: 'Rest of North Africa Middle East andcentral Asia',
                  data: Rest_of_North_Africa_Middle_East_and_central_Asia,
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
                  label: 'Rest of European Union',
                  data: Rest_of_European_Union,
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
                  label: 'Rest of Europe non EU28',
                  data: Rest_of_Europe_non_EU28,
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
                  label: 'Rest of Central and South America',
                  data: Rest_of_Central_and_South_America,
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
                  label: 'Rest of Asia and Pacific',
                  data: Rest_of_Asia_and_Pacific,
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
                  label: 'Norway',
                  data: norway,
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
                  label: 'Mexico',
                  data: mexico,
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
                  label: 'Malaysia',
                  data: malaysia,
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
                  label: 'Indonesia',
                  data: indonesia,
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
                  label: 'India',
                  data: india,
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
                  label: 'Germany',
                  data: germany,
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
                  label: 'Finland',
                  data: finland,
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
                  label: 'Otros',
                  data: otros,
                  fill: false,
                  borderColor: '#EC932F',
                  backgroundColor: '#f66d00',
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


export default greenHouse;