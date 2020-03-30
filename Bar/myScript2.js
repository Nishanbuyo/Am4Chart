am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);


var chart = am4core.create("chartdiv", "XYChart")
chart.dataSource.url ="https://api.myjson.com/bins/9z2as"

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Day";
categoryAxis.title.text = "Day of week";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 10;

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Total sales of items";

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryX = "Day";
series.dataFields.valueY ="Momo";
series.name= "Momo"
series.tooltipText = "{name} : {valueY}";
series.stroke = am4core.color("#C8C4B8");
series.strokeWidth = 2;
// series.columns.template.fill = "red"

var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "Chowmin";
series2.dataFields.categoryX = "Day";
series2.name = "Chowmin";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.stacked = true;


chart.cursor= new am4charts.XYCursor();
legendpos = chart.legend = new am4charts.Legend();
legendpos.position= "right top";
