am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);


var chart = am4core.create("chartdiv", "XYChart")
chart.dataSource.url ="https://api.myjson.com/bins/g5yzo"

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "item";
categoryAxis.title.text = "Food Items";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 10;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Total sales of items";

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "item";
series.dataFields.valueY ="price";
series.name= "Sales"
series.tooltipText = "{name} : {valueY}";
series.stroke = am4core.color("#C8C4B8");
series.strokeWidth = 2;
// series.columns.template.fill = "red"

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "unit";
series2.dataFields.categoryX = "item";
series2.name = "Units";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;


chart.cursor= new am4charts.XYCursor();
chart.legend = new am4charts.Legend();
