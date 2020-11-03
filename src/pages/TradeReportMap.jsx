import React, { Component } from 'react';
import { Map, GeoJSON, TileLayer} from 'react-leaflet';
import mapData from './../data/Countries.json';
import mapDataTest from './../data/CountriesTest.json';
import 'leaflet/dist/leaflet.css'; //This style is for the scroll and plus controls of the map
import '../css/LeafletMap.css';
import * as L from 'leaflet';
import { ThemeProvider } from 'styled-components';



class TradeReportMap extends Component {
    state = { color: '#b4b42d'} ;

    //This list is for the countries of Rest_of_Sub_Saharan_Africa
    //because in the data they do not come by individual countries
    name_countries_Rest_of_Sub_Saharan_Africa = [
        'Angola',
		'Benin',
		'Botswana',
		'Burkina Faso',
		'Burundi',
		'Cameroon',
		'Cape Verde',
		'Central African Republic',
		'Chad',
		'Comoros',
		'Democratic Republic of the Congo',
		'Republic of Congo',
    	'Ivory Coast',
		'Djibouti',
		'Equatorial Guinea',
		'Eritrea',
		'Ethiopia',
		'Gabon',
		'Gambia',
		'Ghana',
		'Guinea',
		'Guinea Bissau',
		'Kenya',
		'Lesotho',
		'Liberia',
		'Madagascar',
		'Malawi',
		'Mali',
		'Mauritania',
		'Mauritius',
		'Mozambique',
		'Namibia',
		'Niger',
		'Nigeria',
		'Reunion',
		'Rwanda',
		'Sao Tome',
		'Sao Tome and Principe',
		'Senegal',
		'Seychelles',
		'Sierra Leone',
		'Somalia',
		'South Africa',
		'Sudan',
		'Swaziland',
		'United Republic of Tanzania',
		'Togo',
		'Uganda',
		'Western Sahara',
		'Zambia',
        'Zimbabwe'];
        
    //This list is for the countries of Rest of Central and South America
    //because in the data they do not come by individual countries
    name_countries_Rest_of_Central_and_South_America = [
        'El salvador',
        'Costa Rica',
        'Belize',
        'Guatemala',
        'Honduras',
        'Nicaragua',
        'Panama',
        'Argentina',
        'Bolivia',
        'Brazil',
        'Chile',
        'Colombia',
        'Ecuador',
        'Guyana',
        'Paraguay',
        'Peru',
        'Suriname',
        'Trinidad and Tobago',
        'Uruguay',
        'Venezuela',
        'Guayana Francesa',
        'Falkland Islands',
        'Aruba',
        'Curaçao',
        'Bonaire'
    ];

    //This list is for the countries of Rest of North Africa Middle East and central Asia
    //because in the data they do not come by individual countries
    name_countries_Rest_of_North_Africa_Middle_East_and_central_Asia = [
        'Algeria',
        'Libya',
        'Morocco',
        'Egypt',
        'Tunisia',
        'Western Sahara',
        'Sudan',
        'Bahrain',
        'Iran',
        'Iraq',
        'Israel',
        'Israeli Controlled Territory',
        'Kuwait',
        'Lebanon',
        'Oman',
        'Qatar',
        'Saudi Arabia',
        'Syria',
        'Turkey',
        'United Arab Emirates',
        'Yemen',
        'Armenia',
        'Azerbaijan',
        'Kazakhstan',
        'Kyrgyzstan',
        'Tajikistan',
        'Turkmenistan',
        'Uzbekistan'
    ];

    name_countries_Rest_of_Europe_non_EU8 = ['Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Cyprus',
        'Czechia',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Ireland',
        'Italy',
        'Latvia',
        'Lithuania',
        'luxembourg',
        'Malta',
        'Netherlands',
        'Poland',
        'Portugal',
        'Romania',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden',
        'Switzerland'
        ];

    color = [];

    countriesName = [];

    years = [];

    data = [];

    propsAux = null ;

    isColored = false;

    paisesTest = []
    //

     constructor(props) {

        super(props);
        
        this.propsAux = props;

        this.years = props.countriesData.labels;

        this.paisesTest = props.countriesData.datasets;
//

        for (const country in this.paisesTest) {
            console.log(this.paisesTest[country].label)
            this.color.push(this.paisesTest[country].backgroundColor);
            this.countriesName.push(this.paisesTest[country].label);
            this.data.push(this.paisesTest[country].data);
        } 
        
    }
    

    //This function is for the style of countries in the GeoJson
    countryStyle = {
        fillColor: '#dddddd', //Color countries
        fillOpacity: 1, //This number is between cero to one. For example 0 0.1 0.2 0.3 .. 0.9 1
        color: 'white', //The border color of the countries 
        weight: 1, //The weight of the countries border
        //dashArray: 5

    };

    printMessageToConsole = (event) => {
        console.log('This is a console message');
    }

    changeTheCountryColor = ( event ) => {
        
        event.target.setStyle({
            color: 'grey',
            //fillColor: '#b4b42d' this is the fable color
            fillColor: this.state.color,
            fillOpacity: 1
        });
        
    }


    //htmlCode = ''

    createListInfoCountry = (index, countryName) => {
        this.htmlCode = '<p style="text-align:center;"><strong>'+ countryName + '</strong></p>'
        
        this.htmlCode = this.htmlCode + '<ul>'

        var i = 0
        for (const currentValue in this.years) {

                this.htmlCode = this.htmlCode + '<li>' +'<strong>' + this.years[i] + '</strong>' +': '+ this.data[index][i] + '</li>'
            
            i ++ ;
        }

        this.htmlCode = this.htmlCode + '</ul>'

        return this.htmlCode ;
        
    }

    onEachCountry = (country, layer) => {

       const countryName = country.id; //The name of the countries
       
       var indexAux = -1;
 
       if (this.name_countries_Rest_of_Sub_Saharan_Africa.includes(countryName)){
        indexAux = this.countriesName.indexOf( 'Rest of Sub-Saharan Africa' );
        
        layer.options.fillColor = this.color[indexAux];
        //console.log('Se llamo con ', indexAux );
        var popup = L.popup().setContent(this.createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)
       }
       if (this.name_countries_Rest_of_North_Africa_Middle_East_and_central_Asia.includes(countryName)){
        indexAux = this.countriesName.indexOf( 'Rest of North Africa Middle East and central Asia' );
        layer.options.fillColor = this.color[indexAux];
        //console.log('Se llamo con ', indexAux );
        var popup = L.popup().setContent(this.createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)        
       }
       if (this.name_countries_Rest_of_Central_and_South_America.includes(countryName)){
        indexAux = this.countriesName.indexOf( 'Rest of Central and South America' );
        layer.options.fillColor = this.color[indexAux];
        //console.log('Se llamo con ', indexAux );
        var popup = L.popup().setContent(this.createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)
       }
       if (this.name_countries_Rest_of_Europe_non_EU8.includes(countryName)){
        indexAux = this.countriesName.indexOf( 'Rest of European Union' );
        layer.options.fillColor = this.color[indexAux];
        
        var popup = L.popup().setContent(this.createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)
       }

       indexAux = this.countriesName.indexOf(countryName);

       /**
        * If the value of indexAux is less than 1 
        * it means that it did not find the country 
        * and therefore it does not overwrite the color
        */
       
       if(indexAux != -1){
            layer.options.fillColor = this.color[indexAux];
            
            var popup = L.popup().setContent(this.createListInfoCountry (indexAux, countryName));
            layer.bindPopup(popup)
            this.isColored = true;
       }

    }

    //This function change the value color of the state 
    //This value comes from input color in the render
    colorChange = (event) => {
        this.setState({color: event.target.value});
    }

    corner1 = L.latLng(-90, -200)
    corner2 = L.latLng(90, 200)
    bounds = L.latLngBounds(this.corner1, this.corner2)

    render () {
        return (
            <div>
                
                <Map  style={{height: '80vh'}} zoom={2} center={[20, 100]} maxBoundsViscosity = {1.0} maxBounds = {this.bounds}>
                    
                    <GeoJSON style={this.countryStyle} 
                        
                        data={mapDataTest.features}
                        onEachFeature={this.onEachCountry}
                    >
                        {console.log('Esta dentro de la etiqueta Geo')}
                        {console.log(this.props)}
                    </GeoJSON>
                        {//<TileLayer
                        /*url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                        attribution='<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
                        id="mapbox.streets"
                        noWrap='true'
                        */
                        /*/>*/}
                </Map>
                
            </div>
        );
    } 
}

export default TradeReportMap;