(this["webpackJsonpcnode-zuoye"]=this["webpackJsonpcnode-zuoye"]||[]).push([[0],{19:function(e,t,a){},23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),l=(a(28),a(3)),i=a(4),s=a(6),m=a(5),u=a(7),p=a(1);function h(){return c.a.createElement("div",{className:"headerwrap"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}),c.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},c.a.createElement(p.b,{to:"/home"},"\u9996\u9875"),c.a.createElement(p.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(p.b,{to:"/api"},"API"),c.a.createElement(p.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(p.b,{to:"/set"},"\u6ce8\u518c"),c.a.createElement(p.b,{to:"/login"},"\u767b\u5f55"))))}var b=a(11),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",{className:"main_context_h3"},"\u5173\u4e8e\u6211\u4eec"))}}]),t}(n.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u65b0\u624b\u5165\u95e8")}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h3",{className:"main_context_h3"},"API"))}}]),t}(n.Component),j=(a(19),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this))).getPage=function(e){var t=e.target.innerHTML;console.log(t),a.setState({pages:t})},a.state={mList:[],pages:1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.tab;console.log(t),fetch("https://cnodejs.org/api/v1/topics?tab="+t+"&page=1").then((function(e){return e.json()})).then((function(t){e.setState({mList:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.tab!==this.props.match.params.tab||e.pages!==this.state.pages){var n=this.props.match.params.tab;console.log(n),fetch("https://cnodejs.org/api/v1/topics?tab="+n+"&page="+this.state.pages).then((function(e){return e.json()})).then((function(e){a.setState({mList:e.data})}))}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.mList.map((function(e,t){return c.a.createElement("div",{key:t,className:"eveList"},c.a.createElement("a",{className:"headPic",href:"/user/atian25"},c.a.createElement("img",{src:e.author.avatar_url,title:e.author.loginname,alt:""})),c.a.createElement("div",{className:"num"},c.a.createElement("span",{className:"replynum",title:"\u56de\u590d\u6570"},e.reply_count),c.a.createElement("span",{className:"count_seperator"},"/"),c.a.createElement("span",{className:"visitnum",title:"\u70b9\u51fb\u6570"},e.visit_count)),c.a.createElement("button",{className:"btab"},e.tab),c.a.createElement("div",{className:"artTitle"},c.a.createElement(p.b,{to:"/topic/"+e.id},e.title)),c.a.createElement("div",{className:"right"},c.a.createElement("span",null,"9\u5929\u524d")))})),c.a.createElement("div",{className:"nvaButton"},[1,2,3,4,5,6,7,8,9,10].map((function(t){return c.a.createElement("button",{className:"page",onClick:function(t){return e.getPage(t)},key:t},t)}))))}}]),t}(n.Component)),f=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement(p.b,{to:"/home/all"},"\u5168\u90e8"),c.a.createElement(p.b,{to:"/home/good"},"\u7cbe\u534e"),c.a.createElement(p.b,{to:"/home/share"},"\u5206\u4eab"),c.a.createElement(p.b,{to:"/home/ask"},"\u95ee\u7b54"),c.a.createElement(p.b,{to:"/home/job"},"\u62db\u8058")),c.a.createElement("div",null,c.a.createElement(b.a,{path:"/home/:tab",component:j})))}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"loginpage"},c.a.createElement("div",null,c.a.createElement("span",null,"\u7528\u6237\u540d\uff1a"),c.a.createElement("input",{type:"text"})),c.a.createElement("div",null,c.a.createElement("span",null,"\xa0\xa0\xa0\u5bc6\u7801\uff1a"),c.a.createElement("input",{type:"text"})),c.a.createElement("div",null,c.a.createElement(p.b,{to:"/home"},c.a.createElement("button",null,"\u767b\u5f55"))))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(this.props),fetch("https://cnodejs.org/api/v1/topic/"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(console.log(e.match.params.id),console.log(this.props.match.params.id),e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1/topic/"+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return c.a.createElement("div",{className:"artical"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,"\u6ce8\u518c")}}]),t}(n.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,null,c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"content"},c.a.createElement(b.a,{path:"/home",component:f}),c.a.createElement(b.a,{path:"/api",component:v}),c.a.createElement(b.a,{path:"/start",component:E}),c.a.createElement(b.a,{path:"/about",component:d}),c.a.createElement(b.a,{path:"/set",component:y}),c.a.createElement(b.a,{path:"/login",component:O}),c.a.createElement(b.a,{path:"/topic/:id",component:g})),c.a.createElement("div",{className:"sider"},c.a.createElement("p",null,"CNode: Node.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("p",null,"\u60a8\u53ef\u4ee5\u767b\u9646\u6216\u6ce8\u518c")))))}}]),t}(n.Component);o.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.8d3dfc5e.chunk.js.map