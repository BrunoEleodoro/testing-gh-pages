(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},35:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(21),r=n.n(i),c=(n(34),n(35),n(36),n(22)),s=n(23),l=n(12),u=n(26),d=n(24),h=n(27),p=n(59),m=n(60),v=n(61),f=(n(37),n(58)),b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).getUserInfo=function(t){void 0!=t?fetch("https://api.github.com/user",{method:"GET",headers:{Authorization:"token "+t,"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({user:JSON.parse(t)})}):window.location="https://github.com/login/oauth/authorize?client_id=Iv1.bc3e680d4058764d"},e.state={nome:"",user:{}},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(window.location.search.length>0){if(void 0!=window.location.search.split("?")[1].split("code=")[1]){var t=window.location.search.split("?")[1].split("code=")[1];fetch("https://brunoeleodoro.api.stdlib.com/MyFirstServelessApp@dev/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({my_code:t})}).then(function(e){return e.json()}).then(function(t){console.log(JSON.parse(t.body));var n=JSON.parse(t.body).access_token;e.getUserInfo(n)})}}else window.location="https://github.com/login/oauth/authorize?client_id=Iv1.bc3e680d4058764d"}},{key:"render",value:function(){var e="";return void 0!=this.state.user.avatar_url&&(e=a.a.createElement("div",null,a.a.createElement(f.a,{alt:"Img",src:this.state.user.avatar_url}),a.a.createElement("br",null),a.a.createElement(p.a,{variant:"body1"},this.state.user.name," "),a.a.createElement("br",null),a.a.createElement(p.a,{variant:"body1"},this.state.user.bio," "))),a.a.createElement(m.a,Object(c.a)({maxWidth:"lg",style:{backgroundColor:"red"}},"maxWidth","lg"),a.a.createElement(v.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},e))}}]),t}(o.Component);var w=function(){return a.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.27f7c539.chunk.js.map