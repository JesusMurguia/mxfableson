import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/NetForestCoverChange2.json';
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import {Container,Row,Col,Jumbotron} from "react-bootstrap";
import GridLayout from 'react-grid-layout';
//nfch=NetForestCoverChange
const drawNfch2 = (props) => {
 
 console.log("entre")
  
 

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_3 : data.combination_4);
          break;
        case 'iteration_4':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_1 : data.combination_2);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_6 : data.combination_8);
        break;
      case 'iteration_4':
        var dataAux= convertir(Scenario === "Sustainaible" ? data.combination_5 : data.combination_7);

        break
    }
    break;
    default: var dataAux= convertir(data.combination_1); break;
  }
  
  
return(


          <Container fluid>
            <Row  >
              <Col >
              <div style={{height: "100vh"}}>
                <BarChart data={dataAux}
                  title="Net Forest Cover Change 2"
                  labelposition="bottom"
                  aspectRatio={false}/></div>
              </Col>
              <Col>
              <div style={{borderStyle:'solid', textAlign:'center', height: "75vh"}}>
              MAPA
              </div>
              </Col>
            </Row>
          </Container>
          );
}

const convertir=(props)=> {
  
    var labels=[];
     var mexico=[]; 
     var colombia=[]; 
      var norway=[];
     var germany=[];
     var rwanda=[];
     var indonesia=[]; 
     var china=[]; 
     var ethiopia=[]; 
     var russia=[]; 
     var australia=[];
     var brazil=[];
     var UK=[];
     var sweden=[];
     var usa=[];
     var malaysia=[];
     var south_Africa=[];
     var canada=[];
     var finland=[];
     var india=[];

     var rest_of_European_Union=[];
     var rest_of_North_Africa_Middle_East_and_central_Asia=[];
     var rest_of_Sub_Saharan_Africa=[];
     var rest_of_Europe_non_EU28=[]
     var rest_of_Asia_and_Pacific=[];
     var rest_of_Central_and_South_America=[];
     var otros=[];

     
     if(props!=undefined){
     props.map((item) => {
     
      if(item.c_country_t==="Mexico"){
       mexico.push(item.ha_per_year); 
      }else if(item.c_country_t==="Colombia"){
         colombia.push(item.ha_per_year); 
      }else if(item.c_country_t==="Norway")
      {
        norway.push(item.ha_per_year); 
      }else if(item.c_country_t==="Canada")
      {
        canada.push(item.ha_per_year); 
      }else if(item.c_country_t==="Indonesia")
      {
         indonesia.push(item.ha_per_year); 
      }else if(item.c_country_t==="Ethiopia")
      {
         ethiopia.push(item.ha_per_year); 
      }else if(item.c_country_t==="Russia")
      {
         russia.push(item.ha_per_year); 
      }else if(item.c_country_t==="Australia")
      {
         australia.push(item.ha_per_year); 
      }else if(item.c_country_t==="Brazil")
      {
         brazil.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="Rwanda")
      {
        rwanda.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="Sweden")
      {
         sweden.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="USA")
      {
         usa.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="China")
      {
         china.push(item.ha_per_year); 
      }else if(item.c_country_t==="UK")
      {
        UK.push(item.ha_per_year); 
      }else if(item.c_country_t==="Malaysia")
      {
        malaysia.push(item.ha_per_year); 
      }else if(item.c_country_t==="South Africa")
      {
        south_Africa.push(item.ha_per_year); 
      }else if(item.c_country_t==="Germany")
      {
         germany.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="Finland")
      {
        finland.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="India")
      {
        india.push(item.ha_per_year); 
      }else if(item.c_country_t==="otros")
      {
         otros.push(item.ha_per_year); 
      }else if(item.c_country_t==="Rest of European Union")
      {
        rest_of_European_Union.push(item.ha_per_year); 
      }else if(item.c_country_t==="Rest of North Africa Middle East and central Asia")
      {
        rest_of_North_Africa_Middle_East_and_central_Asia.push(item.ha_per_year); 
      }else if(item.c_country_t==="Rest of Sub-Saharan Africa")
      {
        rest_of_Sub_Saharan_Africa.push(item.ha_per_year); 
      }
      else if(item.c_country_t==="Rest of Europe non EU28")
      {
        rest_of_Europe_non_EU28.push(item.ha_per_year); 
      }else if(item.c_country_t==="Rest of Asia and Pacific")
      {
        rest_of_Asia_and_Pacific.push(item.ha_per_year); 
      }else if(item.c_country_t==="Rest of Central and South America")
      {
        rest_of_Central_and_South_America.push(item.ha_per_year); 
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
              label: 'Rest of Sub-Saharan Africa',
              data: rest_of_Sub_Saharan_Africa,
              fill: false,
              backgroundColor: '#faa75a',
              borderColor: '#71B37C',
              hoverBackgroundColor: '#71B37C',
              hoverBorderColor: '#71B37C',
              yAxisID: 'y-axis-1'
            },{
              type: 'bar',
              label: 'Brazil',
              data: brazil,
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
              label: 'USA',
              data: usa,
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
              label: 'Canada',
              data:canada,
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
              label: 'Australia',
              data: australia,
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
              label: 'Rest of Central and South America',
              data: rest_of_Central_and_South_America,
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
              label: 'China',
              data: china,
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
              label: 'Rest of North Africa Middle East and central Asia',
              data: rest_of_North_Africa_Middle_East_and_central_Asia,
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
              label: 'Rest of Asia and Pacific',
              data: rest_of_Asia_and_Pacific,
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
              label: 'Rest of European Union ',
              data: rest_of_European_Union,
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
              label: 'Mexico',
              data: mexico,
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
              label: 'Argentina',
              data: rest_of_Europe_non_EU28,
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
              label: 'Indonesia',
              data: indonesia,
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
              label: 'Ethiopia',
              data: ethiopia,
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
              label: 'Colombia',
              data: colombia,
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
              label: 'Germany',
              data: germany,
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
              label: 'South Africa',
              data: south_Africa,
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
              label: 'Sweden',
              data: sweden,
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
    




export default drawNfch2;