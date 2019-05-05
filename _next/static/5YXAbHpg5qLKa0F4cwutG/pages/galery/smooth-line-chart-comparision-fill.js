(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{264:function(e,t,a){__NEXT_REGISTER_PAGE("/galery/smooth-line-chart-comparision-fill",function(){return e.exports=a(294),{page:e.exports.default}})},294:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),i=a.n(o),l=a(4),c=a(5),p=a(303),s=a(304),h=a(6);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return n=this,r=(e=y(t)).call.apply(e,[this].concat(i)),a=!r||"object"!==m(r)&&"function"!=typeof r?d(n):r,f(d(d(a)),"componentDidMount",function(){console.log("componentDidMount:SmoothlineChartComparision"),a.initialize()}),f(d(d(a)),"initialize",function(){var e={config:{title:"Multi Smooth Line Comparision Chart",chartType:"spline",printEnable:!0},data:[{chartColor:"#00d554",dataLabel:"Data Set 1",datapoints:[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120}],fill:!0},{chartColor:"#ff0000",dataLabel:"Data Set 2",ydataname:"Days",datapoints:[{label:"January",y:20},{label:"Feb",y:120},{label:"Mar",y:210},{label:"Apr",y:246},{label:"May",y:96},{label:"Jun",y:15},{label:"July",y:70}],fill:!0}]};Object(h.g)({id:"smoothLineComparisionFill",data:e})}),a}var a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n["Component"]),a=t,(o=[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"chartDiv"},r.a.createElement("div",{id:"smoothLineComparisionFill",style:{height:"350px",width:"100%"}})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(p.a,{defaultActiveKey:1,id:"example-code"},r.a.createElement(s.a,{eventKey:1,title:"HTML"},r.a.createElement("pre",null,r.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="smoothLineComparisionFill" style="height:350px; width:100%;"></div>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),r.a.createElement(s.a,{eventKey:2,title:"JavaScript"},r.a.createElement("pre",null,r.a.createElement("code",null,'\nlet datapoints = [\n  {\n    label: "January",\n    y: 40\n  },\n  {\n    label: "Feburary",\n    y: 180\n  },\n  {\n    label: "March",\n    y: 60\n  },\n  {\n    label: "April",\n    y: 300\n  },\n  {\n    label: "May",\n    y: 140\n  },\n  {\n    label: "June",\n    y: 240\n  }\n];\n\nlet datapoints1 = [\n  {\n    "label": "January",\n    "y": 20\n  },\n  {\n    "label": "Feb",\n    "y": 120\n  },\n  {\n    "label": "Mar",\n    "y": 210\n  },\n  {\n    "label": "Apr",\n    "y": 246\n  },\n  {\n    "label": "May",\n    "y": 96\n  },\n  {\n    "label": "Jun",\n    "y": 15\n  }\n];\n\nvar smoothLineComparisionFill = {\n  "config": {\n    "title": "Multi Smooth Line Comparision Chart",\n    "chartType": "spline"\n  },\n  "data": [{\n    "chartColor": "#00d554",\n    "dataLabel" : "Data Set 1",\n    "datapoints": datapoints,\n    "fill": true\n  }, {\n    "chartColor": "#ff0000",\n    "dataLabel" : "Data Set 2",\n    "ydataname": "Days",\n    "datapoints": datapoints1,\n    "fill": true\n  }\n  ]\n};\n\nnew GKChart({id: "smoothLineComparisionFill", data: smoothLineComparisionFill}) ;\n\n')))))))}}])&&u(a.prototype,o),i&&u(a,i),t}();t.default=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Smooth Line Area comparison Chart, Spline Area comparison Chart, Smooth Line Chart Fill, Spline Chart Fill - GkCharts"),r.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),r.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),r.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Spline Chart",property:"og:Open Source Chart Library : Gk-Chart - Spline Chart",content:"Open Source Chart Library : Gk-Chart - Spline Chart"}),r.a.createElement("meta",{name:"description",content:"Gk-Chart is an open source chart library provides charts as Spline chart, smooth line area chart comparison, line chart comparison, bar chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript"})),r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement("h1",null,"JavaScript Smooth Line Area Chart, Spline Area Chart, Smooth Line Chart Fill, Spline Area Chart & Graph"),r.a.createElement("p",null,"Spline Area Comparison Chart is consrtucted by the two or more points connecting. For example with Spline Area comparison Chart, it is easy to compare year's, month wise progress and income. Below is an example of Spline Area comparison Chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),r.a.createElement(C,null))))}}},[[264,1,0]]]);