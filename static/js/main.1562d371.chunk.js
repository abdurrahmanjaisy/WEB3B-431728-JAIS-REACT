(this["webpackJsonpweb-3"]=this["webpackJsonpweb-3"]||[]).push([[0],{128:function(e,a,t){e.exports=t(216)},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},197:function(e,a,t){},198:function(e,a,t){},201:function(e,a,t){e.exports=t.p+"static/media/picture.ff7d11c8.svg"},212:function(e,a,t){},213:function(e,a,t){e.exports=t.p+"static/media/ternakAyam.b20198a8.jpg"},214:function(e,a,t){e.exports=t.p+"static/media/ternakSapi.b1a13f08.jpg"},215:function(e,a,t){e.exports=t.p+"static/media/panenSayur.23f06eaa.jpg"},216:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),l=t.n(r),c=(t(133),t(7)),o=t(8),s=t(9),m=t(10),u=(t(134),t(220)),d=(t(135),t(223)),b=t(224),h=t(34),p=(u.a.SubMenu,function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={current:"mail"},e.handleClick=function(a){console.log("click ",a),e.setState({current:a.key})},e}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"menuBar"},i.a.createElement(u.a,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},i.a.createElement(u.a.Item,{key:"mail"},i.a.createElement(d.a,null),i.a.createElement(h.b,{to:"/"},"Profile")),i.a.createElement(u.a.Item,{key:"app"},i.a.createElement(b.a,null),i.a.createElement(h.b,{to:"/portofolio"},"Portofolio")),i.a.createElement(u.a.Item,{key:"alipay"},i.a.createElement("a",{href:"https://github.com/abdurrahmanjaisy",target:"_blank",rel:"noopener noreferrer"},"Github"))))}}]),t}(n.Component)),g=t(29),f=t(218),k=t(221),E=t(222),y=t(219),v=(t(197),t(54));t(198);var w=function(e){var a=e.type,t=e.text,n=e.disabled,r=e.borderRadius,l=void 0===r?25:r,c=e.background,o=void 0===c?"#639a67":c,s=e.textColor,m=void 0===s?"white":s,u=e.border,d=void 0===u?"none":u,b=e.margin,h=void 0===b?"0px":b,p=e.marginLeft,g=e.marginRight,f=e.marginTop,k=e.marginBottom,E=e.className,y=e.onClick;return i.a.createElement(v.a,{type:a,className:E,disabled:n,style:{backgroundColor:o,color:m,borderRadius:l,border:d,margin:h,marginLeft:p,marginRight:g,marginTop:f,marginBottom:k},onClick:y},t)},j=f.a.Content,O=function(e){Object(m.a)(n,e);var a=Object(s.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=t(201),a=this.props,n=a.initialData,r=a.showModal,l=a.handleOk,c=a.handleCancel;return i.a.createElement(f.a,{className:"landing-container"},i.a.createElement(j,{style:{overflow:"hidden"}}," ",i.a.createElement(k.a,{className:"section-container"},i.a.createElement(E.a,{lg:12,md:12,sm:12},i.a.createElement("div",{className:"image-big-container"},i.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"80%"}}))),i.a.createElement(E.a,{lg:12,md:12,sm:12},i.a.createElement(k.a,null,i.a.createElement(E.a,{span:24},i.a.createElement("div",{className:"title-container"},i.a.createElement("span",{className:"text-soft-blue title-biggest bold"},"Welcome!"),i.a.createElement("br",null),i.a.createElement("span",{className:"text-soft-blue title-big bold"},"Abdurrahman Jaisy"))),i.a.createElement(E.a,{span:24},i.a.createElement("div",{className:"image-hidden"},i.a.createElement("img",{src:e,alt:"Home 1",style:{maxWidth:"100%"}})),i.a.createElement("div",{className:"description-container desc-medium"},"Mens Sana in Corpore Sano")),i.a.createElement(E.a,{span:24},i.a.createElement("div",{className:"button-section-1-container"},i.a.createElement("a",{href:"mailto:abdurrahmanjaisy@mail.ugm.ac.id?Subject=Halo%20Jais"},i.a.createElement(w,{text:"Text Me",className:"button-participate"})),i.a.createElement(w,{text:"Another Information",background:"white",textColor:"#639a67",border:"1px solid #639a67",marginLeft:16,className:"button-participate",onClick:r}))),i.a.createElement(y.a,{title:"Contact",visible:n.visible,onOk:l,onCancel:c,className:"modal-notif"},i.a.createElement("p",{className:"text-notif"},"Pebisnis - Business Inquiries abdurrahmanjaisy@mail.ugm.ac.id")))))))}}]),n}(n.Component),C=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(a){console.log(a),e.setState({visible:!1})},e.handleCancel=function(a){console.log(a),e.setState({visible:!1})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(O,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),t}(n.Component),N=(t(212),f.a.Content),x=[{image:t(213),title:"Ternak Ayam",link:"https://www.youtube.com/watch?v=3pJlsAYD1nE",description:"Peternakan unggas adalah usaha membudidayakan unggas seperti ayam, kalkun, bebek, dan angsa dengan tujuan untuk mendapatkan daging dan telur, atau juga bulu dan kotoran. Lebih dari 50 miliar ayam dipelihara setiap tahunnya sebagai sumber daging dan telur."},{image:t(214),title:"Ternak Sapi",link:"https://www.youtube.com/watch?v=8RPp5c2WIuE",description:"Sapi adalah hewan ternak anggota suku Bovidae dan anak suku Bovinae. Sapi yang telah dikebiri dan biasanya digunakan untuk membajak sawah dinamakan lembu. Sapi dipelihara terutama untuk dimanfaatkan susu dan dagingnya sebagai pangan manusia."},{image:t(215),title:"Kebun Sayur",link:"https://www.youtube.com/watch?v=UE0qoss0S50",description:"Sayur dan buah yang dijual di pasar swalayan biasanya mengandung pestisida, pupuk kimia dan aneka zat kimia lainnya. Ketika menanam sayur dan buah, pestisida sering digunakan untuk menyingkirkan hama tanaman yang mampu menyebabkan petani gagal panen."}],S=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(f.a,{className:"landing-container"},i.a.createElement(N,{style:{overflow:"hidden"}},i.a.createElement(k.a,{className:"section-container"},i.a.createElement(E.a,{lg:24},i.a.createElement("div",{className:"text-soft-blue title-big bold discover-container"},"This is My Portofolio")),i.a.createElement(E.a,{lg:24},i.a.createElement("div",{className:"text-black description-discover"},"Know me better!")),i.a.createElement(E.a,{lg:24},i.a.createElement("hr",{style:{minHeight:8,backgroundColor:"#639a67",border:"none",maxWidth:150,borderRadius:26}})),i.a.createElement(E.a,{lg:24,className:"mt-20"},i.a.createElement(k.a,{type:"flex",justify:"center",className:"card-why-container"},x.map((function(e){return i.a.createElement(E.a,{lg:8,md:12,sm:12,className:""},i.a.createElement("div",{className:"card-why-content"},i.a.createElement("img",{src:e.image,className:"card-why-image"}),i.a.createElement("div",{className:"text-soft-blue semi-bold mt-10"},e.title),i.a.createElement("div",{className:"mt-10",style:{maxWidth:"260px"}},e.description,i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:e.link,className:"btn btn-primary"}),i.a.createElement("a",{href:e.link,target:"_blank"},i.a.createElement(w,{text:"More",background:"#639a67",textColor:"#fff",className:"button-participate",onClick:e.link})))))})))))))}}]),t}(n.Component),M=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={visible:!1},e.showModal=function(){e.setState({visible:!0})},e.handleOk=function(a){console.log(a),e.setState({visible:!1})},e.handleCancel=function(a){console.log(a),e.setState({visible:!1})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(S,{initialData:this.state,showModal:this.showModal,handleCancel:this.handleCancel,handleOk:this.handleOk})}}]),t}(n.Component),A=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(g.c,null,i.a.createElement(g.a,{exact:!0,path:"/",component:C}),i.a.createElement(g.a,{path:"/portofolio",component:M}))}}]),t}(n.Component),B=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p,null),i.a.createElement(A,null))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(h.a,{basename:"/WEB3B-431728-JAIS-REACT"},i.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.1562d371.chunk.js.map