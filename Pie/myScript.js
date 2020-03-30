// var chart = am4core.createFromConfig({

//     // Add data
//     "data": [{
//         "country": "Lithuania",
//         "litres": 501.9
//     }, {
//         "country": "Czech Republic",
//         "litres": 301.9
//     }, {
//         "country": "Ireland",
//         "litres": 201.1
//     }, {
//         "country": "Germany",
//         "litres": 165.8
//     }, {
//         "country": "Australia",
//         "litres": 139.9
//     }, {
//         "country": "Austria",
//         "litres": 128.3
//     }, {
//         "country": "UK",
//         "litres": 99
//     }, {
//         "country": "Belgium",
//         "litres": 60
//     }, {
//         "country": "The Netherlands",
//         "litres": 50
//     }],

//     // Create and configure Series
//     "series": [{
//         "type": "PieSeries",
//         "dataFields": {
//             "value": "litres",
//             "category": "country"
//         },


//     }]
// }, "chartdiv", am4charts.PieChart);
// chart.innerRadius = am4core.percent(40);


// ################################################################################




// am4core.useTheme(am4themes_animated);
// var chart = am4core.createFromConfig({
//     "innerRadius": "40%",

//     "legend":
//         {
//             "type": "Legend",
//             "position": "right"
//         },

//     // Add data
//     "dataSource": {
//         "url": "https://api.myjson.com/bins/18lmuc",
//         // "parser" : "JSONParser"
//       },
        

//     // Create and configure Series
//     "series": [{
//         "type": "PieSeries",
//         "labels":
//         {
//             "disabled": true
//         },
//         "ticks":
//         {
//             "disabled": true
//         },
//         "dataFields": {
//             "value": "price",
//             "category": "items"
//         },
//         "slices": {
//             "stroke": "#4a2abb",
//             "strokeWidth": 1,
//             "strokeOpacity": 1,
//             // "tooltipText": "",               disable the name when hover on
//             "propertyFields":{
//                 "fill": "color"
//             }
//           }

//     }]
// }, "chartdiv", am4charts.PieChart);

// // chart.legend = new am4charts.Legend();
// // chart.dataSource.url = "data.json";

// ###################################################################

am4core.useTheme(am4themes_animated);
var chart= am4core.create("chartdiv", am4charts.PieChart);
chart.innerRadius = am4core.percent(40);
chart.legend = new am4charts.Legend();
chart.legend.position = "right";
chart.dataSource.url = "https://api.myjson.com/bins/18lmuc";

var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "price";
pieSeries.dataFields.category = "item";
pieSeries.slices.template.propertyFields.fill = "color";
pieSeries.labels.template.disabled=true;

pieSeries.slices.template.stroke = am4core.color("#4a2abb");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;






