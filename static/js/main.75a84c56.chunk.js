(this.webpackJsonppsite3=this.webpackJsonppsite3||[]).push([[0],{31:function(e,t,n){},43:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var i=n(1),A=n.n(i),a=n(10),s=n.n(a),o=n(2),r=n(11),c=n(12),d=n(16),g=n(15),l=(n(43),n(37)),C=n(22),b=n.n(C),B=n(6),u=n(32),E=n.n(u),h=(n(67),n(0));function I(e){var t,n=null===(t=null===e||void 0===e?void 0:e.focusable)||void 0===t||t;return Object(h.jsx)(E.a,Object(o.a)(Object(o.a)({onMouseDown:n?function(e){for(var t=document.getElementsByClassName("focusable"),n=0;n<t.length;n++)"9"===t[n].style.zIndex&&(t[n].style.zIndex=1),e.currentTarget.style.zIndex=9}:void 0},e),{},{onDrag:function(e){if(e.clientY<=0||e.clientX<=0||e.clientX>=window.innerWidth||e.clientY>=window.innerHeight)return!1},children:Object(h.jsx)("div",{className:n?"focusable":"unfocusable",children:e.children})}))}var w=n(33);function m(e){return document.addEventListener("keydown",e.onClickBoot),Object(h.jsx)("div",{className:"bootWrap",onClick:e.onClickBoot,children:Object(h.jsx)("div",{className:"initButton",children:"PRESS ANY KEY TO BOOT FROM CD OR DVD...."})})}function f(){return Object(h.jsx)(w.a,{options:{speed:0},getBeforeInit:function(e){return e.type("COMPBIO (C) 1991 MOTHERBOARD. INC.").break().type("BIOS DATE 09/29/91 15:43:29 VER: 08.00.15").break().type("CPU: INTEL(R) CPU 330 @40MHZ").break().type("SPEED: 40MHZ").break().type("THIS VGA/PCI BIOS IS RELEASED UNDER THE GNU LGPL").break().type("64-1001-100001010100-12995-1AE23EV003-Y30C").break().type("BOOTING FROM HARD DISK").type(". . .",{speed:5}),e}})}n(69),n(31),n(70);var p=n(79),Q=new p.a,j=new p.a,v=new p.a,O=new p.a,D=new p.a;function k(e){var t=[{label:"File",options:[{option:"New",disabled:!0},{option:"Open",disabled:!0},{option:"Get Info",disabled:!0},{option:"Close",onClick:function(){D.next()}}]},{label:"Edit",options:[{option:"Cut",disabled:!0},{option:"Copy",disabled:!0},{option:"Paste",disabled:!0},{option:"Clear",disabled:!0},{option:"Select All",disabled:!0}]},{label:"View",options:[{option:"Toggle Video",onClick:function(){v.next()}}]},{label:"Special",options:[{option:"Clean Up",onClick:function(){O.next()}},{option:"Erase Disk",disabled:!0},{option:"Show Hidden Folders",disabled:!0}]}].map((function(e,t){return Object(o.a)(Object(o.a)({},e),{},{id:t,options:e.options.map((function(e,t){var n,i;return Object(o.a)(Object(o.a)({},e),{},{id:t,disabled:null!==(n=e.disabled)&&void 0!==n&&n,onClick:null!==(i=e.onClick)&&void 0!==i?i:void 0})}))})})),n=Object(i.useState)(t.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{opened:!1})}))),A=Object(B.a)(n,2),a=A[0],s=A[1],r=function(e,t){s(a.map((function(n){return n.id===e?Object(o.a)(Object(o.a)({},n),{},{opened:"enter"===t}):n})))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"link img",children:Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{src:"data:image/png;base64,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ICCAC9CVJECAAAECAtgMECBAgACBAgEBXICuJAECBAgQEMBmgAABAgQIFAgI4AJ0JQkQIECAgAA2AwQIECBAoEBAABegK0mAAAECBASwGSBAgAABAgUCArgAXUkCBAgQICCAzQABAgQIECgQEMAF6EoSIECAAAEBbAYIECBAgECBgAAuQBlk2kQAAAFuSURBVFeSAAECBAgIYDNAgAABAgQKBARwAbqSBAgQIEBAAJsBAgQIECBQICCAC9CVJECAAAECAtgMECBAgACBAgEBXICuJAECBAgQEMBmgAABAgQIFAgI4AJ0JQkQIECAgAA2AwQIECBAoEBAABegK0mAAAECBASwGSBAgAABAgUCArgAXUkCBAgQICCAzQABAgQIECgQEMAF6EoSIECAAAEBbAYIECBAgECBgAAuQFeSAAECBAgIYDNAgAABAgQKBARwAbqSBAgQIEBAAJsBAgQIECBQICCAC9CVJECAAAECAtgMECBAgACBAgEBXICuJAECBAgQEMBmgAABAgQIFAgI4AJ0JQkQIECAgAA2AwQIECBAoEBAABegK0mAAAECBASwGSBAgAABAgUCArgAXUkCBAgQICCAzQABAgQIECgQEMAF6EoSIECAAAEBbAYIECBAgECBgAAuQFeSAAECBAgIYDNAgAABAgQKBP4H4AnOBKtRF5EAAAAASUVORK5CYII=",alt:"apple logo"})})}),a.map((function(e){return Object(h.jsxs)("div",{className:"link",onMouseOver:function(t){return r(e.id,"enter")},onMouseLeave:function(t){return r(e.id,"leave")},children:[e.label,function(){if(e.opened)return Object(h.jsx)(x,{label:e})}()]},e.id)}))]})}function x(e){return Object(h.jsx)("div",{className:"panelwrap",children:Object(h.jsx)("div",{className:"panel",children:e.label.options.map((function(e){return e.disabled?Object(h.jsx)("div",{className:"option disabled",children:e.option},e.id):Object(h.jsx)("div",{className:"option",onClick:e.onClick,children:e.option},e.id)}))})})}var S={paragraph:["Hi!, My name is Jefferson Li. <br><br>","I am a <b>Full Stack Developer</b> specializing in Angular, with a focus on building scalable and responsive software ( try to break this site \ud83d\ude09 ). <br> <br> ","Previously at <a href='https://temerityanalytics.com/' target='_blank'><b>Temerity Analytics</b></a>.<br>","Currently pursuing a specialist in <b>Software Engineering</b> and a minor in <b>Statistics</b> at the ","<a href='https://www.utoronto.ca' target='_blank'><b> University of Toronto </b></a>(2023)<br><br>","I love going to the <b>gym</b>, <b>badminton</b>, and <b>photography</b>, I also love to create and bring <b>user friendly</b> and <b>responsive designs</b> to life!"],qualifications:{"Technical Skills":{Web:{"HTML/CSS/JS":"Created several sites using HTML/CSS/JS, including this one!",Angular:"Worked with an Angular frontend during my time as a full-stack developer at Termerity Analytics",React:"Learned independently using official documentation and developed this personal portfolio using React","Django/Django REST framwork/Django ORM":"Worked with the Django REST framework backend during my time as a full-stack developer at Termerity Analytics",Flask:"Used Flask to create numerous REST APIs as well as server-side rendered web apps","SQL/PostgreSQL/SQLite":"Utilized PostgreSQL during my time as a full-stack developer at Termerity Analytics",RxJS:"Experienced with writing involved asynchronous pipes using the RxJS library to handle backend data","Redux/NgRx":"Used the Redux/NgRx architecture in numerous projects to handle local state.<br>Achieved optimal data fetching with the Action/Reducer/Effects architecture"},General:{C:"Achived 93% in C based programming course at UofT","Python/NumPy":"4+ years of python writing numerous scripts<br>Developed numerous machine learning algorithms in school, used NumPy for matrix algebra","JS/Typescript":"8 Month proffessional experience building numerous features using JS/TS during my time as at Termerity Analytics",Java:"Built numerous android apps and REST apis using Java",GIT:"Used during my work as a fullstack developer, as well as all of my personal projects.<br>Profficient in resolving conflicts and researching solutions to complex issues regarding git",Agile:"Followed an Agile development process during my work at Termerity Analytics"},Testing:{"Jasmine/Karma":"Used to test front end Angular code duing my time as a fullstack developer for Termerity Analytics ",Postman:"Used to test back end APIs duing my time as a fullstack developer for Termerity Analytics",Swagger:"Used to Document APIs duing my time as a fullstack developer for Termerity Analytics"},Tools:{"Windows/MacOS/Linux":"","Android Studio":"Used to create numerous Android apps","Microsoft Office Suite":"Profficient in Word, Excel, Powerpoint",Sourcetree:"My prefered Git GUI",Jira:"Collaborated using Jira for a 6 person group project"}},Education:{"University of Toronto":"Class of 2023","Software Engineering Specialist, Statistics Minor":"GPA: 3.82/4.0"},"Interests and Hobbies":["Badminton","Swimming","Weight Training","<a href='https://www.instagram.com/jeffersonlii/' target='_blank'><b>Photography</b></a>"]},projects:{Pathfinder:{desc:"Easy to use visualizer for pathfinding algorithms",link:"",time:"02/2021",modal_details:{What:["Visualize pathfinding algorithms such as Dijkstra's with customizable maps and waypoints ","Implemented using 0 libraries and vanilla JS to minimize overhead"],Links:["<a href='https://jeffersonlii.github.io/Pathfinder/' target='_blank'><b>App</b></a>","<a href='https://github.com/Jeffersonlii/Pathfinder' target='_blank'><b>Repo</b></a>"]},images:[{url:"/projects-and-work/pathfinder/work.gif",desc:"Demo"}]},TheCafe:{desc:"React Webapp that matches random users to rooms based on perferences",link:"",time:"02/2021",modal_details:{Goal:["To created an omegle like platform with a smart matching system"],"My Tasks":["Utilized socket.io and PeerJs to implement video chatting, as well as screen sharing","Deployed using Docker, Docker Compose, and NGINX on a DigitalOcean VM","Used the Certbot container to set up an autorenewing certificate for HTTPS"],Links:["<a href='https://www.youtube.com/watch?v=vsuU0TGqF4k' target='_blank'><b>Video Showcase</b></a>"]},images:[{url:"/projects-and-work/cafe/1.png",desc:"Dashboard"},{url:"/projects-and-work/cafe/2.PNG",desc:"Room"}]},SportsCred:{desc:"Large Angular web app for debating/betting on sports",link:"",time:"01/2021",modal_details:{Goal:["With a team of 6, to create a large platform for competitive debates and trivia on sports league related topics"],"My Tasks":["<b>Main designer</b> and developer of the Angular based frontend","Linked up backend and frontend using Axios and RxJS observables","Utilized the redux action effect reducer architecture to manage application state","Implemented session-based authentification, as well as salting and hashing passwords","Used<b> media queries</b> to ensure a smooth experience on all platforms"],Result:["Ranked as the best project in the class of 30 groups, received work offers from the client"]},images:[{url:"/projects-and-work/lilypad/debates.PNG",desc:"Debates Page"},{url:"/projects-and-work/lilypad/login.PNG",desc:"Login Page"},{url:"/projects-and-work/lilypad/myprofile.PNG",desc:"My Profile Page"},{url:"/projects-and-work/lilypad/registration.PNG",desc:"Registration Page"}]},"Personal Website":{desc:"You're looking at it!",link:"",time:"01/2021",modal_details:{Goal:["To develop an extendable and responsive website showcasing my achievements  and experiences"],"My Tasks":["Rehauled my portfolio website using new technologies and frameworks I've learned during my 8-month work term as a full stack developer","Insured <b>high extensibility</b> by centralizing all strings in <b>strings.json</b>. This allows easy addition of new entries and internationalisation"]},images:[{url:"/projects-and-work/Personal-website/strings.PNG",desc:"strings.json"}]},Gold:{desc:"Android Shopping App",link:"",time:"11/2019",modal_details:{Goal:["To develop a shopping android app with a 3 person team for a software design class","To utilize <b>SOLID principles</b>, <b>design patterns</b>, and the <b>Scrum Methodology</b> during development."],"My Tasks":["Made use of <b>abstraction and interfaces</b> to design highly flexible and object-oriented codebase","Planned around <b>Model View Controller</b> to attain an organized architecture","Designed and implemented a visually pleasing design that received <b>direct praise</b> from the TA","Organized <b>Scrum meetings</b> 2 times per week to discuss progress"],Result:["Advanced my skills as an Android developer","Scored a <b>100%</b> grade worth 40% of the final mark"]},images:[{url:"/projects-and-work/Gold/moe.PNG",desc:"TA comments after grading"},{url:"/projects-and-work/Gold/login.jpg",desc:"Login and Cart Page"}]},"Where Am I?":{desc:"Location Sharing Web App",link:"https://github.com/Jeffersonlii/Where-Am-I-",time:"08/2019",modal_details:{Goal:["To allow instant location sharing via a link"],"My Tasks":["Used Python (flask) for backend, to update and retrieve user coordinates using a SQL database","Implemented unique link generation for every use instance","Used Ajax to pass coordinate data from Python to JS and vice versa"]},images:[{url:"/projects-and-work/whereami/1st.PNG",desc:"Shared link page"},{url:"/projects-and-work/whereami/2nd.PNG",desc:"Map Page"}]}},"work exp":{"Temerity Analytics":{desc:"Full-Stack Developer Intern",link:"https://temerityanalytics.com/",time:"01/2020 - 08/2020",modal_details:{Role:["Fullstack developer, developing all aspects of Merln, our cloud-based marketing analysis software"],Achivements:["Rearchetected the client-facing admin interface, which significantly improved the overall usability and stability of the software, and resulted in a final performance evaluation of \u2019Excellent\u2019","Drove a unit testing effort, getting API test coverage from 0% -> 40%, and speeding up some endpoints by more than 80%"],Tech:["(Angular, Django ORM/ REST framework, RxJS, Redux, NgRx, npm, PostgreSQL)"]},images:[{url:"/projects-and-work/temerity/many.jpg",desc:"Recruiting Event at UTSC"},{url:"/projects-and-work/temerity/eval.jpg",desc:"Final CO-OP Evaluation"}]}},credits:["Developed with \ud83c\udf2e by Jefferson Li <br/><br/>","Built using React with <a href='https://www.npmjs.com/package/react-draggable' target='_blank'><b>react-draggable</b></a><br/><br/>","Best Viewed On Chrome<br/>","\xa9".concat((new Date).getFullYear()," Jefferson Li. All rights reserved."),"<br/><br/><a href='https://github.com/Jeffersonlii/psite-v3' target='_blank'><b>Source Code</b></a>"],socials:[{name:"LinkedIn",link:"https://www.linkedin.com/in/jeffersonlii/",desc:"See My Experience"},{name:"Github",link:"https://github.com/Jeffersonlii",desc:"See My Projects"},{name:"Instagram",link:"https://www.instagram.com/jeffersonlii/",desc:"See My Photography"}]},G=(n(71),n(72),n(23));function J(e){return Object(h.jsx)(h.Fragment,{children:[{key:"work exp",name:"Work Experience"},{key:"projects",name:"Personal Projects"}].map((function(e){var t=e.key,n=e.name;return Object(h.jsxs)(h.Fragment,{children:[n,Object(h.jsx)("ul",{children:Object.entries(S[t]).map((function(e){var t=Object(B.a)(e,2),n=t[0],i=t[1];return Object(h.jsx)("li",{onClick:function(){var e,t;e=n,t=i,Q.next({child:Object(h.jsx)(M,{name:e,info:t}),params:{header:"".concat(e.replace(/ /g,"_"),".HTML"),width:"60rem",height:"30rem"}})},children:Object(h.jsxs)("div",{id:"link",children:[n," : ",i.time]})})}))})]})}))})}function M(e){var t;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h1",{children:[e.name," - ",e.info.time]}),Object(h.jsx)("section",{children:e.info.desc}),Object.keys(e.info.modal_details).map((function(t){return Object(h.jsx)("ul",{children:Object(h.jsxs)("li",{children:[t,Object(h.jsx)("ul",{children:e.info.modal_details[t].map((function(e){return Object(h.jsx)("li",{dangerouslySetInnerHTML:{__html:e}})}))})]})})})),Object(h.jsx)("section",{children:e.info.images?"Relevant Media":""}),Object(h.jsx)("div",{className:"img-grid",children:null===(t=e.info.images)||void 0===t?void 0:t.map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"."+e.url,alt:"",className:"img-btn",onClick:function(){var t;t=e,Q.next({child:Object(h.jsx)("div",{id:"expanded-img",children:Object(h.jsx)(G.b,{children:Object(h.jsx)(G.a,{children:Object(h.jsx)("img",{src:"."+t.url,alt:""})})})}),params:{header:t.url.split("/").pop().toUpperCase(),disableExpand:!0}})}}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{style:{width:"15rem"},children:e.desc})})]})}))})]})}function y(e){var t=[{filename:Object(h.jsxs)(h.Fragment,{children:["JEFFERSON_LI",Object(h.jsx)("br",{}),"_INTRO.TXT"]}),onclick:function(){Q.next({child:Object(h.jsx)(F,{}),params:{header:"JEFFERSON_LI_INTRO.TXT",width:"38rem",height:"18rem"}})},id:"me"},{filename:Object(h.jsxs)(h.Fragment,{children:["EXPERIENCES",Object(h.jsx)("br",{}),".HTML"]}),onclick:function(){Q.next({child:Object(h.jsx)(J,{openWindow:e.openWindow}),params:{header:"EXPERIENCES.HTML",width:"38rem",height:"18rem"}})},id:"exp"},{filename:Object(h.jsx)(h.Fragment,{children:"MILK.GIF"}),onclick:function(){Q.next({child:Object(h.jsx)(Y,{}),params:{header:"MILK.GIF",width:"30rem",height:"20rem"}})},id:"rand"},{filename:Object(h.jsx)(h.Fragment,{children:"RESUME.PDF"}),onclick:function(){return window.open("pdfs/resume.pdf","_blank")},id:"res"},{filename:Object(h.jsx)(h.Fragment,{children:"SOCIALS.HTML"}),onclick:function(){Q.next({child:Object(h.jsx)(T,{}),params:{header:"SOCIALS.HTML",width:"25rem",height:"25rem"}})},id:"creds"}];return Object(h.jsx)("div",{className:"desktop-files",children:t.map((function(e){return Object(h.jsxs)("div",{className:"file",id:e.id,onClick:e.onclick,children:[Object(h.jsx)("img",{src:".fileicon.png",alt:"",style:{width:"50px"}}),e.filename]})}))})}function F(){return Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:S.paragraph.join("")}})}function Y(){return Object(h.jsx)("img",{src:"gifs/funny_cow.gif",id:"rand-gif",alt:"funny cow gif"})}function T(){return Object(h.jsxs)(h.Fragment,{children:[S.socials.map((function(e){return Object(h.jsxs)(h.Fragment,{children:[e.name,Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:e.link,target:"_blank",children:Object(h.jsx)("b",{children:e.desc})})})})]})})),Object(h.jsx)("div",{dangerouslySetInnerHTML:{__html:S.credits.join("")}})]})}function N(e){var t=Object(i.useState)(Object(h.jsx)(m,{onClickBoot:function(){j.next(),a(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"fadein",children:Object(h.jsx)("div",{className:"initText",children:Object(h.jsx)(f,{})})}),Object(h.jsxs)("div",{className:"OSheader",children:[Object(h.jsx)(k,{}),Object(h.jsx)("div",{style:{flexGrow:9}})]}),Object(h.jsx)("div",{id:"desktop",children:Object(h.jsx)(y,{})})]}))}})),n=Object(B.a)(t,2),A=n[0],a=n[1];return Object(h.jsx)(I,{handle:".OSheader",defaultClassName:"mainOS react-draggable",focusable:!1,children:Object(h.jsx)("div",{className:"OSbackground",children:A})})}var P,H,L,R=n(17),K=n(18);n(73);function U(e){var t,n,i,A,a,s,o,r=null!==(t=null===e||void 0===e?void 0:e.width)&&void 0!==t?t:"fit-content",c=null!==(n=null===e||void 0===e?void 0:e.height)&&void 0!==n?n:"fit-content",d=function(){e.onCloseWindow(e.windowID)},g=Object(K.c)(P||(P=Object(R.a)(["\n        from {\n            height: 1rem;\n            min-height: 1rem;\n        }\n        to {\n            width: ",";\n            height: ",";\n        }\n    "])),r,c),l=K.b.div(H||(H=Object(R.a)(["\n        width: ",";\n        min-width: 20rem;\n        height: ",";\n        min-height: 5rem;\n        animation: ",";\n    "])),r,c,e.disableExpand?"":Object(K.a)(L||(L=Object(R.a)(["\n                  0.3s "," ease-out;\n              "])),g)),C=(s=80,o=100,Math.floor(Math.random()*(o-s+1)+s)),b=null===(i=document)||void 0===i||null===(A=i.getElementById("desktop"))||void 0===A?void 0:A.getBoundingClientRect();return Object(h.jsx)(I,{handle:".header",defaultPosition:{x:-window.innerWidth/2+(null===b||void 0===b?void 0:b.left)+C,y:-window.innerHeight/2+(null===b||void 0===b?void 0:b.top)+C},children:Object(h.jsxs)("div",{className:"window",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)(X,{}),Object(h.jsx)("div",{className:"title",children:null!==(a=null===e||void 0===e?void 0:e.header)&&void 0!==a?a:"UNDEFINED_HEADER"}),Object(h.jsx)("button",{className:"close",onClick:d,onPointerUp:d}),Object(h.jsx)(X,{})]}),Object(h.jsx)("div",{className:"infoHeader"}),Object(h.jsx)(l,{className:"contents",children:Object(h.jsx)("div",{children:e.children})})]})})}function X(){var e=Array(4).fill(0);return e=e.map((function(e,t){return Object(h.jsx)("div",{className:"line"},t)})),Object(h.jsx)("div",{className:"lineWrap",children:e})}n(76);var W=n(5),z=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).subs=new W.a,i.onCloseWindow=function(e){i.setState({activeWindows:i.state.activeWindows.filter((function(t){return t.props.windowID!==e}))})},i.state={activeWindows:[],windowID:0,openOS:!0,openVideo:!0,audioOptions:{init:!1,vol:0}},i}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.subs.add(j.subscribe((function(){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{audioOptions:{init:!0,vol:0===e.state.audioOptions.vol?.2:0}}))}))),this.subs.add(v.subscribe((function(){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{openVideo:!e.state.openVideo}))}))),this.subs.add(O.subscribe((function(){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{activeWindows:[],windowID:1}))}))),this.subs.add(Q.subscribe((function(t){e.setState(Object(o.a)(Object(o.a)({},e.state),{},{activeWindows:[].concat(Object(l.a)(e.state.activeWindows),[Object(i.createElement)(U,Object(o.a)(Object(o.a)({},t.params),{},{key:e.state.windowID,windowID:e.state.windowID,onCloseWindow:e.onCloseWindow}),Object(h.jsx)("div",{className:"selectable",children:t.child}))]),windowID:e.state.windowID+1}))}))),this.subs.add(D.subscribe((function(){e.setState(Object(o.a)(Object(o.a)({},e.setState),{},{openOS:!e.state.openOS}))})))}},{key:"componentWillUnmount",value:function(){this.subs.unsubscribe()}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"background",children:[this.state.audioOptions.init&&Object(h.jsx)(b.a,{className:"bgaudio",url:[{src:"wn2.mp3",type:"audio/mpeg"}],loop:!1,playing:!0,volume:this.state.audioOptions.vol,config:{file:{forceAudio:!0}}}),this.state.openVideo&&Object(h.jsx)(b.a,{className:"video",style:{position:"absolute",top:0,left:0},url:[{src:"bg.mp4",type:"video/webm"}],loop:!0,volume:0,muted:!0,playing:!0,width:"100%",height:"100%",config:{file:{forceVideo:!0}}}),this.state.openOS&&Object(h.jsx)(N,{}),this.state.activeWindows]})}}]),n}(A.a.Component),Z=function(e){Object(d.a)(n,e);var t=Object(g.a)(n);function n(e){var i;Object(r.a)(this,n),i=t.call(this,e);var A=function(e){return e?Object(h.jsx)("div",{id:"warning",children:" Best Experienced on Desktop !"}):Object(h.jsx)(h.Fragment,{})};i.state={mobile:A(window.matchMedia("(max-width: 800px)").matches)};return window.matchMedia("(max-width: 800px)").addEventListener("change",(function(e){i.setState(Object(o.a)(Object(o.a)({},n),{},{mobile:A(e.matches)}))})),i}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[this.state.mobile,Object(h.jsx)(z,{})]})}}]),n}(A.a.Component),V=(n(77),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,i=t.getFID,A=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),A(e),a(e),s(e)}))});s.a.render(Object(h.jsx)(A.a.StrictMode,{children:Object(h.jsx)(Z,{})}),document.getElementById("root")),V()}},[[78,1,2]]]);
//# sourceMappingURL=main.75a84c56.chunk.js.map