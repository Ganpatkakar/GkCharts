(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(e,t,a){__NEXT_REGISTER_PAGE("/galery/line-chart-comparision",function(){return e.exports=a(290),{page:e.exports.default}})},290:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(2),a(3)),o=a.n(i),l=a(4),c=a(5),p=a(303),s=a(304),u=a(6);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e){function t(){var e,a,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return n=this,r=(e=y(t)).call.apply(e,[this].concat(o)),a=!r||"object"!==h(r)&&"function"!=typeof r?d(n):r,f(d(d(a)),"componentDidMount",function(){console.log("componentDidMount:Chart"),a.initialize()}),f(d(d(a)),"initialize",function(){var e={config:{title:"Multi Line Comparision Chart",chartType:"line",printEnable:!0},data:[{chartColor:"#00d554",fill:!1,dataLabel:"Data Set 1",datapoints:[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120}]},{chartColor:"#ff0000",fill:!1,dataLabel:"Data Set 2",datapoints:[{label:"January",y:20},{label:"Feb",y:120},{label:"Mar",y:210},{label:"Apr",y:246},{label:"May",y:96},{label:"Jun",y:15},{label:"July",y:70}]}]};Object(u.d)({id:"chartlineComparision",data:e})}),a}var a,i,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,n["Component"]),a=t,(i=[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"chartDiv"},r.a.createElement("div",{id:"chartlineComparision",style:{height:"350px",width:"100%"}}," ")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement(p.a,{defaultActiveKey:1,id:"example-code"},r.a.createElement(s.a,{eventKey:1,title:"HTML"},r.a.createElement("pre",null,r.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id="chartlineComparision" style="height:350px; width:100%;"></kakarChart>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),r.a.createElement(s.a,{eventKey:2,title:"JavaScript"},r.a.createElement("pre",null,r.a.createElement("code",null,'\n    let datapoints = [\n      {\n        label: "January",\n        y: 40\n      },\n      {\n        label: "Feburary",\n        y: 180\n      },\n      {\n        label: "March",\n        y: 60\n      },\n      {\n        label: "April",\n        y: 300\n      },\n      {\n        label: "May",\n        y: 140\n      },\n      {\n        label: "June",\n        y: 240\n      }\n    ];\n    let datapoints1 = [\n      {\n        label: "January",\n        y: 20\n      },\n      {\n        label: "Feb",\n        y: 120\n      },\n      {\n        label: "Mar",\n        y: 210\n      },\n      {\n        label: "Apr",\n        y: 246\n      },\n      {\n        label: "May",\n        y: 96\n      },\n      {\n        label: "Jun",\n        y: 15\n      }\n    ];\n\n    var chartlineComparision = {\n      config: {\n        title: "Multi Line Comparision Chart",\n        chartType: "line",\n        printEnable: true\n      },\n      data: [\n        {\n          chartColor: "#00d554",\n          fill: false,\n          dataLabel: "Data Set 1",\n          datapoints: datapoints\n        },\n        {\n          chartColor: "#ff0000",\n          fill: false,\n          dataLabel: "Data Set 2",\n          datapoints: datapoints1\n        }\n      ]\n    };\n\n    new GKChart({\n      id: "chartlineComparision",\n      data: chartlineComparision\n    }) ;\n')))))))}}])&&m(a.prototype,i),o&&m(a,o),t}();t.default=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement("title",null,"Open Source Chart Library : Gk-Chart - Line Comparision Chart"),r.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),r.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),r.a.createElement("meta",{name:"og:Open Source Chart Library : Gk-Chart - Line Comparision Chart",property:"og:Open Source Chart Library : Gk-Chart - Line Comparision Chart",content:"Open Source Chart Library : Gk-Chart - Line Comparision Chart"}),r.a.createElement("meta",{name:"description",content:"Gk-Chart is an open source chart library provides charts as line comparision chart, bar chart , pie chart, line chart comparison, bar and line chart comparison and 20 plus more charts with the business data presentation in chart view, integrate is easy with javascript"})),r.a.createElement(l.a,null,r.a.createElement(c.a,null,r.a.createElement("h1",null,"JavaScript Line Comparison Chart & Graph"),r.a.createElement("p",null,"Line Comparison Chart is consrtucted by the two or more points connecting and providing two or more data set. For example with Line Comparison chart, it is easy to compare tow or more year's, month wise progress and income. Below is an example of Line Comparison chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the user to print the chart for any hard copy presentation."),r.a.createElement(C,null))))}}},[[258,1,0]]]);