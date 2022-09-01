import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import './Form.styles.css'

import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow"
import * as am4core from "@amcharts/amcharts4/core";

import Chartdiv from "../Chartdiv/Chartdiv";

const StepOne = ({ nextStep, handleFormData, values, user, setUser }) => {


  const [userData, setUserData] = useState();
  // const [error, setError] = useState(false)

  // console.log(am4maps)

  function thiswasClicked(e) {
    console.log(e.srcElement.ariaLabel)
  }
  useEffect(() => {
    
   // Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_usaLow;

// Set projection
chart.projection = new am4maps.projections.AlbersUsa();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.calculateVisualCenter = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#74B266");
polygonTemplate.propertyFields.id = "id";

// Configure label series
    var labelSeries = chart.series.push(new am4maps.MapImageSeries());
    console.log('yppppp', chart)
var labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
labelTemplate.horizontalCenter = "middle";
labelTemplate.verticalCenter = "middle";
labelTemplate.fontSize = 10;
labelTemplate.interactionsEnabled = false;
labelTemplate.nonScaling = false;

var ids = ["US-AZ", "US-TX", "US-CO"];

// Set up label series to populate
polygonSeries.events.on("inited", function () {
  for(var i = 0; i < ids.length; i++){
  	var polygon = polygonSeries.getPolygonById(ids[i]);
  	if(polygon){
	    var label = labelSeries.mapImages.create();
	    var state = polygon.dataItem.dataContext.id.split("-").pop();
	    label.latitude = polygon.visualLatitude;
	    label.longitude = polygon.visualLongitude;
	    label.children.getIndex(0).text = state;
	}
  }
});
      
    console.log('from step one', chart)


    document.getElementById("chartdiv").addEventListener("click", thiswasClicked);

  }, [])


  const options = ['All', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  const [selected, setSelected] = useState(options[0]);

  const handleMapClick = (e) => {
    console.log(e)
  }

//   const config = {
//     "type": "map",
//     "theme": "light",
//     "colorSteps": 10,
//     "dataProvider": {
//         "map": "usaLow",
//         "areas": [{
//             "id": "US-AL",
//             "value": 4447100
//         },{//..all areas mentioned in question}]
//     },
//     "areasSettings": {
//         "autoZoom": true
//     },
//     "valueLegend": {
//         "right": 10,
//         "minValue": "little",
//         "maxValue": "a lot!"
//     },
//     "listeners": [{
//         "event": "descriptionClosed",
//         "method": function(ev) {
//             ev.chart.selectObject();
//         }
//     }]
// };

  const submitFormData = (e) => {
    e.preventDefault()
    values.zipcode=selected
    handleFormData("zipcode") 
    nextStep()
  }

  return (
    <div className="mainWrapper">
      <Chartdiv userData={userData} handleMapClick={handleMapClick}  />
        {/* <form
        onSubmit={submitFormData}
        style={{ width: '35%' }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", position: "relative", bottom: "10px" }}>
          <h3>Which state are you in?</h3>
          <div>
            <select htmlFor="zipcode" 
              value={selected}
              name="zipcode"
              onChange={e => { setSelected(e.target.value); }}>
            
              {options.map((value) => (
                <option className="optionO" value={value} key={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form> */}
    </div>
  )
}

export default StepOne