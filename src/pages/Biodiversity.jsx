import React from "react";
import BarChart from "../componentes/BarChart";
import data from '../data/Biodiversity.json';
import {Container,Row,Col} from "react-bootstrap";
//nfch=NetForestCoverChange
const drawBiodiversity = (props) => 
{
 
 
  
 

  const { GraficaType, Iteration, Scenario } = props.combinacion.select;

  switch(GraficaType){
    case 'group':
      switch(Iteration){
        case 'iteration_3':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_dos : data.combinacion_cuatro);
          break;
        case 'iteration_4':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_uno : data.combinacion_tres);
          break
      }
      break;
    case 'regions':
      switch(Iteration){
        case 'iteration_3':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_seis : data.combinacion_ocho);
          break;
        case 'iteration_4':
          var dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_cinco : data.combinacion_siete);
          break
      }
      break;
    case 'countries':
      switch(Iteration){
      case 'iteration_3':
        var dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_diez : data.combinacion_doce);
        break;
      case 'iteration_4':
        var dataAux= convertir(Scenario === "Sustainaible" ? data.combinacion_nueve : data.combinacion_once);

        break
    }
    break;
  }
  


return (
<Container fluid>
            <Row  >
              <Col >
              <div style={{height: "100vh"}}>
                  <BarChart data={dataAux} title="Biodiversity"
                    aspectRatio={false}
                    labelposition="bottom"/> 
              </div>
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

                                                          


const convertir=(props)=> 

{
  var labels=[];
   var Protected_land_Mexico=[]; 
   var Protected_land_Colombia=[]; 
   var Protected_land_Argentina=[];
   var Protected_land_Alemania=[];
   var Protected_land_Canada=[];
   var Protected_land_Indonesia=[]; 
   var Protected_land_China=[]; 
   var Protected_land_Ethiopia=[]; 
   var Protected_land_Russia=[]; 
   var Protected_land_Australia=[];
   var Protected_land_Brazil=[];
   var Protected_land_Rest_of_European_Union=[];
   var Protected_land_Sweden=[];
   var Protected_land_USA=[];
   var Protected_land_Rest_of_Europe_non_EU28=[];

   var Protected_land_Rest_of_Central_and_South_America=[];
   var Rest_of_North_Africa_Middle_East_and_central_Asia=[];
   var Protected_land_Rest_of_Asia_and_Pacific=[];
   var Protected_land_Germany=[];
   var Protected_land_South_Africa=[];
   var Rest_of_Sub_Saharan_Africa=[];
   var Protected_land_Otros=[];
   if(props!=undefined){
   props.map((item) => {
   
    if(item.c_country_t==="Mexico"){
     Protected_land_Mexico.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Colombia"){
       Protected_land_Colombia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Argentina")
    {
     Protected_land_Argentina.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Alemania")
    {
       Protected_land_Alemania.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Canada")
    {
       Protected_land_Canada.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Indonesia")
    {
       Protected_land_Indonesia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Ethiopia")
    {
       Protected_land_Ethiopia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Russia")
    {
       Protected_land_Russia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Australia")
    {
       Protected_land_Australia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Brazil")
    {
       Protected_land_Brazil.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="Rest of European Union")
    {
       Protected_land_Rest_of_European_Union.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="Sweden")
    {
       Protected_land_Sweden.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="USA")
    {
       Protected_land_USA.push(item.Protected_land*100); 
    }
    else if(item.c_country_t==="China")
    {
       Protected_land_China.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Central and South America")
    {
       Protected_land_Rest_of_Central_and_South_America.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of North Africa Middle East and central Asia")
    {
       Rest_of_North_Africa_Middle_East_and_central_Asia.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Asia and Pacific")
    {
       Protected_land_Rest_of_Asia_and_Pacific.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Germany")
    {
       Protected_land_Germany.push(item.Protected_land*100); 
    }else if(item.c_country_t==="South Africa")
    {
       Protected_land_South_Africa.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Sub-Saharan Africa")
    {
       Rest_of_Sub_Saharan_Africa.push(item.Protected_land*100); 
    }else if(item.c_country_t==="Rest of Europe non EU28")
    {
       Protected_land_Rest_of_Europe_non_EU28.push(item.Protected_land*100); 
    }else if(item.c_country_t==="otros")
    {
       Protected_land_Otros.push(item.Protected_land*100); 
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
            data: Rest_of_Sub_Saharan_Africa,
            fill: false,
            backgroundColor: '#faa75a',
            borderColor: '#71B37C',
            hoverBackgroundColor: '#71B37C',
            hoverBorderColor: '#71B37C',
            yAxisID: 'y-axis-1'
          },{
            type: 'bar',
            label: 'Brazil',
            data: Protected_land_Brazil,
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
            data: Protected_land_USA,
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
            data: Protected_land_Canada,
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
            data: Protected_land_Australia,
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
            data: Protected_land_Russia,
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
            data: Protected_land_Rest_of_Central_and_South_America,
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
            data: Protected_land_China,
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
            data: Rest_of_North_Africa_Middle_East_and_central_Asia,
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
            data: Protected_land_Rest_of_Asia_and_Pacific,
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
            data: Protected_land_Rest_of_European_Union,
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
            data: Protected_land_Mexico,
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
            data: Protected_land_Argentina,
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
            data: Protected_land_Indonesia,
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
            data: Protected_land_Ethiopia,
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
            data: Protected_land_Colombia,
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
            data: Protected_land_Germany,
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
            data: Protected_land_South_Africa,
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
            data: Protected_land_Sweden,
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
            data: Protected_land_Otros,
            fill: false,
            borderColor: '#EC932F',
            backgroundColor: '#f66d00',
            pointBorderColor: '#EC932F',
            pointBackgroundColor: '#EC932F',
            pointHoverBackgroundColor: '#EC932F',
            pointHoverBorderColor: '#EC932F',
            yAxisID: 'y-axis-1'
          },{
            type: 'bar',
            label: 'Rest of Europe non EU28',
            data: Protected_land_Rest_of_Europe_non_EU28,
            fill: false,
            borderColor: 'pink',
            backgroundColor: 'pink',
            pointBorderColor: 'pink',
            pointBackgroundColor: 'pink',
            pointHoverBackgroundColor: 'pink',
            pointHoverBorderColor: 'pink',
            yAxisID: 'y-axis-1'
          }
          
        ]
      };
 return data
} 
  






export default drawBiodiversity;



