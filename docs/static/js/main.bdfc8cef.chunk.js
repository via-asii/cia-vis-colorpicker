(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),o=a.n(c),r=(a(17),a(5)),i=a(6),s=a(9),u=a(7),m=a(10),d=a(2),p=a(1);function h(e){var t,a;return e<50?(t=255,a=Math.round(5.1*e)):(a=255,t=Math.round(510-5.1*e)),"#"+("000000"+(65536*t+256*a+0).toString(16)).slice(-6)}a(19);var f=a(8),E=a.n(f),v=(a(23),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={nColors:6,diyScale0:"#FD7F0B",diyScale1:"#18A3FF"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"copyToClipboard",value:function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),E.a.success("Copied to clipboard","",{timeOut:1500})}},{key:"render",value:function(){for(var e=this,t=Object(d.g)(d.i),a=Object(d.h)(d.c).domain([1,this.state.nColors]),n=Object(d.h)(d.a).domain([1,this.state.nColors]),c=Object(d.h)(d.d).domain([1,this.state.nColors]),o=Object(d.h)(d.e).domain([1,this.state.nColors]),r=Object(d.f)().domain([1,this.state.nColors]).interpolate(d.b).range([this.state.diyScale0,this.state.diyScale1]),i=[],s=1;s<=this.state.nColors;s++)i.push(s);return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("p",null,"CIA Vis Color Generator")),l.a.createElement("main",null,l.a.createElement("div",null,l.a.createElement("h3",null,"Pick Amount of Colors"),l.a.createElement("input",{min:"1",type:"number",value:this.state.nColors,onInput:function(t){return e.setState({nColors:t.target.value})}})),l.a.createElement("div",null,l.a.createElement("h3",null,"Sequential"),l.a.createElement("div",null,l.a.createElement("div",{className:"flex f-center scale"},i.map(function(t){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:h(100-100/i.length*t)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(h(t))}},h(t)))})),l.a.createElement("div",{className:"flex f-center scale"},i.map(function(t){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:o(t)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(o(t))}},o(t)))})),l.a.createElement("div",{className:"flex f-center scale"},i.map(function(t){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:a(t)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(a(t))}},a(t)))})))),l.a.createElement("div",null,l.a.createElement("h3",null,"Diverging"),l.a.createElement("div",null,l.a.createElement("div",{className:"flex f-center scale"},i.map(function(t){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:n(t)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(n(t))}},Object(p.a)(n(t)).hex()))})),l.a.createElement("div",{className:"flex f-center scale"},i.map(function(t){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:c(t)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(Object(p.a)(c(t)).hex())}},Object(p.a)(c(t)).hex()))})),l.a.createElement("div",{className:""},l.a.createElement("p",null,"Pick your own colors:"),l.a.createElement("div",{className:"scale flex f-center"},l.a.createElement("input",{type:"color",id:"html5colorpicker",onChange:function(t){e.setState({diyScale0:t.target.value})},value:this.state.diyScale0}),l.a.createElement("div",{className:"flex"},i.map(function(t){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:r(t)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(Object(p.a)(r(t)).hex())}},Object(p.a)(r(t)).hex()))})),l.a.createElement("input",{type:"color",id:"html5colorpicker",onChange:function(t){e.setState({diyScale1:t.target.value})},value:this.state.diyScale1}))))),l.a.createElement("div",null,l.a.createElement("h3",null,"Categorical"),l.a.createElement("div",null,l.a.createElement("p",null,"Category 10"),l.a.createElement("div",{className:"flex f-center scale"},i.map(function(a){return l.a.createElement("div",{style:{height:"70px",width:"100px",backgroundColor:t(a)}},l.a.createElement("p",{onClick:function(){e.copyToClipboard(t(a))}},t(a)))}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.bdfc8cef.chunk.js.map