(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(10),o=n.n(r),c=(n(23),n(24),n(11)),i=n(12),m=n(16),s=n(13),u=n(17),E=(n(25),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("tetris"),t=e.getContext("2d");function n(e,t){for(var n=[t.matrix,t.pos],a=n[0],l=n[1],r=0;r<a.length;++r)for(var o=0;o<a[r].length;++o)if(0!==a[r][o]&&0!==(e[r+l.y]&&e[r+l.y][o+l.x]))return!0;return!1}function a(e,n){e.forEach(function(e,a){e.forEach(function(e,l){0!==e&&(t.fillStyle=E[e],t.fillRect(l+n.x,a+n.y,1,1))})})}function l(){h.pos.y++,n(d,h)&&(h.pos.y--,function(e,t){t.matrix.forEach(function(n,a){n.forEach(function(n,l){0!==n&&(e[a+t.pos.y][l+t.pos.x]=n)})})}(d,h),o(),function(){var e=1;e:for(var t=d.length-1;t>0;--t){for(var n=0;n<d[t].length;++n)if(0===d[t][n])continue e;var a=d.splice(t,1)[0].fill(0);d.unshift(a),++t,h.score+=10*e,e*=2}}(),u()),i=0}function r(e){h.pos.x+=e,n(d,h)&&(h.pos.x-=e)}function o(){var e;h.matrix="T"===(e="ILJOTSZ"["ILJOTSZ".length*Math.random()|0])?[[0,0,0],[1,1,1],[0,1,0]]:"O"===e?[[2,2],[2,2]]:"L"===e?[[0,3,0],[0,3,0],[0,3,3]]:"J"===e?[[0,4,0],[0,4,0],[4,4,0]]:"I"===e?[[0,5,0,0],[0,5,0,0],[0,5,0,0],[0,5,0,0]]:"S"===e?[[0,6,6],[6,6,0],[0,0,0]]:"Z"===e?[[7,7,0],[0,7,7],[0,0,0]]:void 0,h.pos.y=0,h.pos.x=(d[0].length/2|0)-(h.matrix[0].length/2|0),n(d,h)&&(d.forEach(function(e){return e.fill(0)}),h.score=0,u())}function c(e,t){for(var n=0;n<e.length;++n)for(var a=0;a<n;++a){var l=[e[n][a],e[a][n]];e[a][n]=l[0],e[n][a]=l[1]}t>0?e.forEach(function(e){return e.reverse()}):e.reverse()}t.scale(20,20);var i=0,m=1e3,s=0;function u(){document.getElementById("score").innerText=h.score}var E=[null,"#FF0D72","#0DC2FF","#0DFF72","#F538FF","#FF8E0D","#FFE138","#3877FF"],d=function(e,t){for(var n=[];t--;)n.push(new Array(e).fill(0));return n}(12,20),h={pos:{x:0,y:0},matrix:null,score:0};document.addEventListener("keydown",function(e){65===e.keyCode?r(-1):68===e.keyCode?r(1):83===e.keyCode?l():87===e.keyCode&&function(e){var t=h.pos.x,a=1;for(c(h.matrix,e);n(d,h);)if(h.pos.x+=a,(a=-(a+(a>0?1:-1)))>h.matrix[0].length)return c(h.matrix,-e),void(h.pos.x=t)}(-1)}),o(),u(),function n(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,o=r-s;s=r,(i+=o)>m&&l(),t.fillStyle="#000",t.fillRect(0,0,e.width,e.height),a(d,{x:0,y:0}),a(h.matrix,h.pos),requestAnimationFrame(n)}()}},{key:"render",value:function(){return l.a.createElement("div",{className:"game"},l.a.createElement("div",null,l.a.createElement("h1",null,l.a.createElement("i",null,"Score:")),l.a.createElement("div",{id:"score"})),l.a.createElement("p",null,l.a.createElement("canvas",{id:"tetris",width:"240",height:"400"})),l.a.createElement("p",null,l.a.createElement("h1",null,l.a.createElement("i",null,"Controls:"),l.a.createElement("p",null,"W =rotate"),l.a.createElement("p",null,"A =left"),l.a.createElement("p",null,"S =move down"),l.a.createElement("p",null,"D =right"))))}}]),t}(l.a.Component)),d=n(2),h=n(4);var v=function(){return l.a.createElement(h.BrowserRouter,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"navBar"},l.a.createElement(d.NavHashLink,{to:"/#Bio"},l.a.createElement("h1",null,"MyBio")),l.a.createElement(d.NavHashLink,{to:"/#Skill"},l.a.createElement("h1",null,"Skills")),l.a.createElement(d.NavHashLink,{to:"/#Contact"},l.a.createElement("h1",null,"Contact")),l.a.createElement(d.NavHashLink,{to:"/#Projects"},l.a.createElement("h1",null,"Projects"))),l.a.createElement("div",{className:"footer"},l.a.createElement("h1",null,"Welcome to my profile")),l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"My name? Ewan Thomas"),l.a.createElement("div",{className:"Emptyspace"},l.a.createElement("h2",null,"this is a practice example in development"))),l.a.createElement("div",null,l.a.createElement("div",{className:"catAnim"})),l.a.createElement("div",{className:"textblock",id:"Bio"},l.a.createElement("h3",null,l.a.createElement("p",null,"MyBio"),l.a.createElement("p",null,"Junior developer, currently studying  Business Information Technology BSc at London Metropolitan University (LMU)."))),l.a.createElement("div",{className:"textblock",id:"Projects"},l.a.createElement("h3",null,l.a.createElement("p",null,"Projects"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/Ewan5536"}," (Github Projects)"))),l.a.createElement("div",null)),l.a.createElement("div",{className:"textblock",id:"Skill"},l.a.createElement("h3",null,l.a.createElement("p",null,"A Quick Skills Overveiw"),l.a.createElement("p",null,"I have extensive knowledge of HTML, CSS, and JavaScript. I previous projects and app\u2019s I have used modern CSS frameworks such as bootstrap as well as API calls, also React. I have built app\u2019s in NodeJS and PHP, whilst implemented CRUD capabilities and SQL database design and implementation.")),l.a.createElement("br",null)),l.a.createElement("i",null,l.a.createElement("div",{className:"textblock",id:"Contact"},l.a.createElement("h3",null,"Call me on: 07544654467",l.a.createElement("br",null),"or contact me via linkedin",l.a.createElement("a",{href:"https://www.linkedin.com/in/ewan-thomas-9a00974a/"},"(Ewan Thomas)")))),l.a.createElement("br",null),l.a.createElement("div",{className:"tetris"},l.a.createElement(E,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.5065545b.chunk.js.map