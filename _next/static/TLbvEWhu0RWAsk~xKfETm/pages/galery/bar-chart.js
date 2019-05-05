(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{252:function(e,t,a){__NEXT_REGISTER_PAGE("/galery/bar-chart",function(){return e.exports=a(286),{page:e.exports.default}})},286:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(3),i=a.n(o),l=a(4),c=a(5),u=a(303),p=a(304),h=a(6);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e){function t(){var e,a,r,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=this,n=(e=m(t)).call.apply(e,[this].concat(i)),a=!n||"object"!==s(n)&&"function"!=typeof n?b(r):n,f(b(b(a)),"componentDidMount",function(){console.log("componentDidMount:StepChart"),a.initialize()}),f(b(b(a)),"initialize",function(){var e={config:{title:"Bar Chart",chartType:"bar",printEnable:!0},data:[{chartColor:"#00d554",dataLabel:"Data set 1",datapoints:[{label:"January",y:40},{label:"Feburary",y:160},{label:"March",y:80},{label:"April",y:200},{label:"May",y:140},{label:"June",y:240},{label:"July",y:120},{label:"Aug",y:80}]}]};Object(h.a)({id:"chartbar",data:e})}),a}var a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),a=t,(o=[{key:"render",value:function(){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"chartDiv"},n.a.createElement("div",{id:"chartbar",style:{height:"350px",width:"100%"}})))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement(u.a,{defaultActiveKey:1,id:"example-code"},n.a.createElement(p.a,{eventKey:1,title:"HTML"},n.a.createElement("pre",null,n.a.createElement("xmp",null,'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Document</title>\n  </head>\n  <body>\n    <kakarChart id="chartbar" style="height:350px; width:100%;"></kakarChart>\n    <script type="text/javascript" src="gk-chart.min.js"><\/script>\n  </body>\n</html>'))),n.a.createElement(p.a,{eventKey:2,title:"JavaScript"},n.a.createElement("pre",null,n.a.createElement("code",null,'\n    let datapoints = [\n      {\n        label: "January",\n        y: 40\n      },\n      {\n        label: "Feburary",\n        y: 180\n      },\n      {\n        label: "March",\n        y: 60\n      },\n      {\n        label: "April",\n        y: 300\n      },\n      {\n        label: "May",\n        y: 140\n      },\n      {\n        label: "June",\n        y: 240\n      }\n    ];\n\n    var chartbar = {\n      "config": {\n        "title": "Bar Chart",\n        "chartType": \'bar\'\n      },\n      "data": [{\n        "chartColor": "#00d554",\n        "dataLabel" : "Data set 1",\n        "datapoints": datapoints\n      }]\n    };\n\n    new GKChart({id: "chartbar", data: chartbar}) ;\n\n')))))))}}])&&y(a.prototype,o),i&&y(a,i),t}();t.default=function(){return n.a.createElement("div",null,n.a.createElement(i.a,null,n.a.createElement("title",null,"Open Source Chart library : Gk-Chart - Bar Chart"),n.a.createElement("meta",{name:"keywords",content:"Gk-Chart, gkchart, gk-chart, chart library, charts, javascript chart library, javascript chart, javascript library, line chart, bar cahrt, pie chart, meter cahrt, doughnut chart, bar cahrt comparision, line chart comparision"}),n.a.createElement("meta",{name:"author",content:"Ganpat Kakar"}),n.a.createElement("meta",{name:"og:Open Source Chart library : Gk-Chart - Bar Chart",property:"og:Open Source Chart library : Gk-Chart - Bar Chart",content:"Open Source Chart library : Gk-Chart - Bar Chart"}),n.a.createElement("meta",{name:"description",content:"Bar Chart provided an easy way of comparing one data set in visual view. With GKCharts it is easy to setup Bar chart."})),n.a.createElement(l.a,null,n.a.createElement(c.a,null,n.a.createElement("h1",null,"JavaScript Bar Chart & Graph"),n.a.createElement("p",null,"Bar cahrt is created by providing one data set. Bar chart provide a compared view of business data for a period of time. For example with Bar chart it is easy to compare one years month wise progress and income. Below is an example of simple bar chart with HTML and JavaScript source code for intergration. Download our chart library and and use the provided source code. Print the generated chart functionality is provide for the User to print the chart for any hard copy presentation."),n.a.createElement(v,null))))}}},[[252,1,0]]]);