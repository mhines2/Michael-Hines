(this.webpackJsonpreactniceresume=this.webpackJsonpreactniceresume||[]).push([[0],{19:function(e,s,t){},22:function(e,s,t){},34:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(8),n=t.n(a),i=(t(19),t(9)),r=t(12),l=t.n(r),o=(t(22),t(13)),d=t(5),j=t.n(d),h=t(1);class m extends c.Component{render(){if(!this.props.data)return null;this.props.data.project,this.props.data.github;const e=this.props.data.name,s=this.props.data.description;return Object(h.jsxs)("header",{id:"home",children:[Object(h.jsx)(o.a,{type:"circle",bg:!0}),Object(h.jsxs)("nav",{id:"nav-wrap",children:[Object(h.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(h.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(h.jsxs)("ul",{id:"nav",className:"nav",children:[Object(h.jsx)("li",{className:"current",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(h.jsx)("div",{className:"row banner",children:Object(h.jsxs)("div",{className:"banner-text",children:[Object(h.jsx)(j.a,{bottom:!0,children:Object(h.jsx)("h1",{className:"responsive-headline",children:e})}),Object(h.jsx)(j.a,{bottom:!0,duration:1200,children:Object(h.jsx)("h3",{children:s})}),Object(h.jsx)("hr",{})]})}),Object(h.jsx)("p",{className:"scrolldown",children:Object(h.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(h.jsx)("i",{className:"icon-down-circle"})})})]})}}var b=m;class p extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.social.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.url,children:Object(h.jsx)("i",{className:e.className})})},e.name)}));return Object(h.jsx)("footer",{children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(j.a,{bottom:!0,children:Object(h.jsxs)("div",{className:"twelve columns",children:[Object(h.jsx)("ul",{className:"social-links",children:e}),Object(h.jsx)("ul",{className:"copyright",children:Object(h.jsxs)("li",{children:["\xa9 ",(new Date).getFullYear()," Michael Hines"]})})]})}),Object(h.jsx)("div",{id:"go-top",children:Object(h.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(h.jsx)("i",{className:"icon-up-open"})})})]})})}}var x=p;class u extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=(this.props.data.address.street,this.props.data.address.city),a=this.props.data.address.state,n=(this.props.data.address.zip,this.props.data.phone,this.props.data.email),i=this.props.data.resumedownload;return Object(h.jsx)("section",{id:"about",children:Object(h.jsx)(j.a,{duration:1e3,children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"three columns",children:Object(h.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("h2",{children:"About Me"}),Object(h.jsx)("p",{children:t}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"columns contact-details",children:[Object(h.jsx)("h2",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[Object(h.jsx)("span",{children:e}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:[c,", ",a]}),Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:n})]})]}),Object(h.jsx)("div",{className:"columns download",children:Object(h.jsx)("p",{children:Object(h.jsxs)("a",{href:i,className:"button",children:[Object(h.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}var O=u;class g extends c.Component{getRandomColor(){let e="#";for(let s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}render(){if(!this.props.data)return null;const e=this.props.data.skillmessage,s=this.props.data.education.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.school}),Object(h.jsxs)("p",{className:"info",children:[e.degree," ",Object(h.jsx)("span",{children:"\u2022"}),Object(h.jsx)("em",{className:"date",children:e.graduated})]}),Object(h.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:e.company}),Object(h.jsxs)("p",{className:"info",children:[e.title,Object(h.jsx)("span",{children:"\u2022"})," ",Object(h.jsx)("em",{className:"date",children:e.years})]}),Object(h.jsx)("p",{children:e.description})]},e.company)})),c=this.props.data.skills.map((e=>{const s=this.getRandomColor(),t="bar-expand "+e.name.toLowerCase(),c=e.level;return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{style:{width:c,backgroundColor:s},className:t}),Object(h.jsx)("em",{children:e.name})]},e.name)}));return Object(h.jsxs)("section",{id:"resume",children:[Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row education",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Education"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:Object(h.jsx)("div",{className:"row item",children:Object(h.jsx)("div",{className:"twelve columns",children:s})})})]})}),Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row work",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Work"})})}),Object(h.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(h.jsx)(j.a,{left:!0,duration:1300,children:Object(h.jsxs)("div",{className:"row skill",children:[Object(h.jsx)("div",{className:"three columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Skills"})})}),Object(h.jsxs)("div",{className:"nine columns main-col",children:[Object(h.jsx)("p",{children:e}),Object(h.jsx)("div",{className:"bars",children:Object(h.jsx)("ul",{className:"skills",children:c})})]})]})})]})}}var f=g;class N extends c.Component{constructor(e){super(e),this.handleSubmit=async e=>{e.preventDefault(),console.log("Form submission started"),this.setState({loading:!0,success:!1,error:!1});try{const s=e.target;console.log("Submitting to:",s.action);const t=await fetch(s.action,{method:s.method,body:new FormData(s),headers:{Accept:"application/json"}});console.log("Response status:",t.status);const c=await t.json();console.log("Response data:",c),t.ok?(console.log("Submission successful"),this.setState({loading:!1,success:!0}),s.reset()):(console.log("Submission failed"),this.setState({loading:!1,error:!0}))}catch(s){console.error("Submission error:",s),this.setState({loading:!1,error:!0})}},this.state={loading:!1,success:!1,error:!1}}render(){if(!this.props.data)return null;const e=this.props.data.name,s=(this.props.data.address.street,this.props.data.address.city),t=this.props.data.address.state,c=this.props.data.address.zip,a=(this.props.data.phone,this.props.data.contactmessage);return Object(h.jsxs)("section",{id:"contact",children:[Object(h.jsx)(d.Fade,{bottom:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"row section-head",children:[Object(h.jsx)("div",{className:"two columns header-col",children:Object(h.jsx)("h1",{children:Object(h.jsx)("span",{children:"Get In Touch."})})}),Object(h.jsx)("div",{className:"ten columns",children:Object(h.jsx)("p",{className:"lead",children:a})})]})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(d.Slide,{left:!0,duration:1e3,children:Object(h.jsxs)("div",{className:"eight columns",children:[Object(h.jsx)("form",{action:"https://formspree.io/f/xldjperb",method:"POST",id:"contactForm",name:"contactForm",onSubmit:this.handleSubmit,children:Object(h.jsxs)("fieldset",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"name",required:!0})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("input",{type:"email",defaultValue:"",size:"35",id:"contactEmail",name:"_replyto",required:!0})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(h.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"subject"})]}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(h.jsx)("span",{className:"required",children:"*"})]}),Object(h.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message",required:!0})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"submit",className:"submit",disabled:this.state.loading,children:this.state.loading?"Sending...":"Submit"}),this.state.loading&&Object(h.jsx)("span",{id:"image-loader",children:Object(h.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),this.state.error&&Object(h.jsx)("div",{id:"message-warning",children:"Something went wrong. Please try again."}),this.state.success&&Object(h.jsxs)("div",{id:"message-success",children:[Object(h.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(h.jsx)("br",{})]})]})}),Object(h.jsx)(d.Slide,{right:!0,duration:1e3,children:Object(h.jsx)("aside",{className:"four columns footer-widgets",children:Object(h.jsxs)("div",{className:"widget widget_contact",children:[Object(h.jsx)("h4",{children:"Contact Details"}),Object(h.jsxs)("p",{className:"address",children:[e,Object(h.jsx)("br",{}),s,", ",t," ",c,Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"Email: mthines2003@gmail.com"})]})]})})})]})]})}}var v=N,w=t(14),k=t.n(w);t(34);let y=0;class S extends c.Component{render(){if(!this.props.data)return null;const e=this.props.data.projects.map((function(e){let s="images/portfolio/"+e.image;return Object(h.jsx)("div",{className:"columns portfolio-item",children:Object(h.jsxs)("div",{className:"item-wrap",children:[Object(h.jsxs)("div",{className:"portfolio-image-container",children:[Object(h.jsx)(k.a,{alt:e.title,src:s}),Object(h.jsx)("div",{className:"overlay",children:Object(h.jsxs)("div",{className:"portfolio-item-meta",children:[Object(h.jsx)("h5",{children:e.title}),Object(h.jsx)("p",{children:e.category}),Object(h.jsxs)("div",{className:"project-links",children:[Object(h.jsxs)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"project-link github-link",children:[Object(h.jsx)("i",{className:"fa fa-github"})," GitHub"]}),Object(h.jsxs)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"project-link demo-link",children:[Object(h.jsx)("i",{className:"fa fa-external-link"})," Live Demo"]})]})]})})]}),Object(h.jsx)("div",{className:"project-title",children:e.title})]})},y++)}));return Object(h.jsxs)("section",{id:"portfolio",children:[Object(h.jsx)("style",{jsx:!0,children:"\n          .portfolio-image-container {\n            position: relative;\n            overflow: hidden;\n          }\n\n          .overlay {\n            position: absolute;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.8);\n            opacity: 0;\n            transition: all 0.3s ease-in-out;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n          }\n\n          .portfolio-image-container:hover .overlay {\n            opacity: 1;\n          }\n\n          .portfolio-item-meta {\n            padding: 20px;\n            text-align: center;\n            color: white;\n          }\n\n          .portfolio-item-meta h5 {\n            font-size: 18px;\n            margin-bottom: 8px;\n            color: #fff;\n          }\n\n          .portfolio-item-meta p {\n            font-size: 14px;\n            line-height: 1.6;\n            color: #ccc;\n            margin-bottom: 15px;\n          }\n\n          .project-links {\n            display: flex;\n            gap: 15px;\n            justify-content: center;\n            margin-top: 15px;\n          }\n\n          .project-link {\n            display: inline-flex;\n            align-items: center;\n            padding: 8px 15px;\n            border-radius: 4px;\n            color: #fff;\n            text-decoration: none;\n            font-size: 14px;\n            transition: all 0.3s ease;\n          }\n\n          .project-link i {\n            margin-right: 5px;\n          }\n\n          .github-link {\n            background-color: #333;\n          }\n\n          .github-link:hover {\n            background-color: #24292e;\n          }\n\n          .demo-link {\n            background-color: #0762f9;\n          }\n\n          .demo-link:hover {\n            background-color: #0056b3;\n          }\n\n          .project-title {\n            text-align: center;\n            margin-top: 10px;\n            font-weight: bold;\n            color: #333;\n          }\n        "}),Object(h.jsx)(j.a,{left:!0,duration:1e3,distance:"40px",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"twelve columns collapsed",children:[Object(h.jsx)("h1",{children:"Check Out Some of My Works:"}),Object(h.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})]})}}var D=S;class C extends c.Component{constructor(e){super(e),this.state={foo:"bar",resumeData:{}},i.a.initialize("UA-110570651-1"),i.a.pageview(window.location.pathname)}getResumeData(){l.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}componentDidMount(){this.getResumeData()}render(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{data:this.state.resumeData.main}),Object(h.jsx)(O,{data:this.state.resumeData.main}),Object(h.jsx)(f,{data:this.state.resumeData.resume}),Object(h.jsx)(D,{data:this.state.resumeData.portfolio}),Object(h.jsx)(v,{data:this.state.resumeData.main}),Object(h.jsx)(x,{data:this.state.resumeData.main})]})}}var F=C;var z=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,36)).then((s=>{let{getCLS:t,getFID:c,getFCP:a,getLCP:n,getTTFB:i}=s;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(h.jsx)(F,{}),document.getElementById("root")),z()}},[[35,1,2]]]);
//# sourceMappingURL=main.fec9c97f.chunk.js.map