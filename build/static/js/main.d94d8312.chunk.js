(this["webpackJsonpr-practice"]=this["webpackJsonpr-practice"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),o=(a(12),a(3)),i=a(4),s=a(5),u=a(6),d=function(e){return e.datalist.map((function(e,t){var a=e.title,n=e.url,c=e.author,l=e.created_at,o=e.created_at_i;return r.a.createElement("tr",{key:o},r.a.createElement("td",null,a),r.a.createElement("td",null,n),r.a.createElement("td",null,c),r.a.createElement("td",null,l))}))},h=(a(13),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getData=function(){fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0").then((function(e){return e.json()})).then((function(t){return e.setState({datalist:t.hits})}))},e.state={datalist:[],header:[{title:"Header",url:"",author:"Apoorva",created_at:"YYYY-MM-DD 00:00:00"}],searchField:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getData(),setInterval(this.getData,1e4)}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.header[0]).map((function(e,t){return r.a.createElement("th",{key:t},e.toUpperCase)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.datalist,n=t.searchField,c=a.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{id:"title"},"Assignment for React JS"),r.a.createElement("input",{type:"search",placeholder:"Search",onClick:function(t){return e.setState({searchField:t.target.value})}}),r.a.createElement("table",{id:"students"},r.a.createElement("tbody",null,r.a.createElement("tr",null,this.renderTableHeader()),r.a.createElement(d,{datalist:c}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d94d8312.chunk.js.map