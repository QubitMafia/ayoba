(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/africa.349c77b7.svg"},17:function(e,t,n){e.exports=n(38)},22:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),s=n.n(r),i=(n(22),n(3)),l=n(10),u=n(11),c=n(12),d=n(15),m=n(13),h=n(16),p=n(1),w=[{question:"What is your biggest strength?",answers:[{type:"Microsoft",content:"I know my work"},{type:"Nintendo",content:"I am a very lucky person"},{type:"Sony",content:"I am a hardworker"}]},{question:"Why do you deserve this job?",answers:[{type:"Microsoft",content:"I need a job"},{type:"Nintendo",content:"It is my passion"},{type:"Sony",content:"I can make the company money"}]},{question:" How would you spice up meetings to boost creativity?",answers:[{type:"Microsoft",content:"Meetings don't need creativity"},{type:"Nintendo",content:"We play games"},{type:"Sony",content:"We let everyone speak their mind"}]},{question:"Where do you see yourself in 10 years time?",answers:[{type:"Microsoft",content:"Still here"},{type:"Nintendo",content:"Started my own business"},{type:"Sony",content:"I don't know"}]},{question:"What is your dream role in a company?",answers:[{type:"Microsoft",content:"CEO"},{type:"Nintendo",content:"Any job is fine"},{type:"Sony",content:"The next logical promotion"}]},{question:"Tell me how you would overcome a situation where a team is doing badly because members aren\u2019t getting along.",answers:[{type:"Microsoft",content:"I raise my voice and shout"},{type:"Nintendo",content:"I do my own thing"},{type:"Sony",content:"We talk it out as a team and resolve the issue"}]},{question:"How do you go about rearranging your schedule if something unplanned occurs?",answers:[{type:"Microsoft",content:"I write everything down in my diary and update my calendar"},{type:"Nintendo",content:"I go with the flow"},{type:"Sony",content:"I don't. My day is set in stone."}]},{question:"Which one better describes you: \u2018done is better than perfect\u2019 or \u2018everything has to look perfect\u2019?",answers:[{type:"Microsoft",content:"done is better than perfect"},{type:"Nintendo",content:"I go with the flow"},{type:"Sony",content:"everything has to look perfect"}]}],y=n(4);var f=function(e){return a.a.createElement("h2",{className:"question"},e.content)};var v=function(e){return a.a.createElement("div",{className:"questionCount"},"Question ",a.a.createElement("span",null,e.counter)," of ",a.a.createElement("span",null,e.total))};var b=function(e){return a.a.createElement("li",{className:"answerOption"},a.a.createElement("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),a.a.createElement("label",{className:"radioCustomLabel",htmlFor:e.answerType},e.answerContent))};var g=function(e){return a.a.createElement(y.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},a.a.createElement("div",{key:e.questionId},a.a.createElement(v,{counter:e.questionId,total:e.questionTotal}),a.a.createElement(f,{content:e.question}),a.a.createElement("ul",{className:"answerOptions"},e.answerOptions.map(function(t){return a.a.createElement(b,{key:t.content,answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected})}))))};var E=function(e){return a.a.createElement(y.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500},a.a.createElement("div",null,a.a.createElement("p",null,"According to your results these are the job recomendations that best match your soft skills. You wil be able to generate a custom CV for each job post. ")),a.a.createElement("div",null,a.a.createElement("h1",null,"Gift of the Gab"),"Congrats for taking parting part in our questions from the way you answered the questions we realized you have a very good way of communicating your message. and feel you are now",a.a.createElement("strong",null," ready to apply for the job below"),"!",a.a.createElement("p",null,"Here is a link to a few jobs that are in need or people with your skills. ",a.a.createElement("a",{href:"https://www.pnet.co.za/jobs--Marker-Grader-Clothing-Durban-Talented-Recruitment--3127159-inline.html"}," Job Recommendation "))),a.a.createElement("div",null,a.a.createElement("h1",null,"Always on time"),"Congrats for taking parting part in our questions from the way you answered the questions we realized you have very good take pride in your punctuality, therefore we have matched you with companies that seek individuals with high time management skills. You are now",a.a.createElement("strong",null,"ready to apply for the job below"),"!",a.a.createElement("p",null,"Here is a link to a few jobs that are in need or people with your skills. ",a.a.createElement("a",{href:"https://www.olx.co.za/item/bussiness-developer-cape-town-iid-1062195165"}," Job Recommendation "))),a.a.createElement("div",null,a.a.createElement("h1",null,"Natural born leader"),"Wow, we know a leader when we see one with the way in which you chose to answer those questions we couldn't help but realize you have the attributes of a leader. and feel you are now",a.a.createElement("strong",null," ready to apply for the job below"),"!",a.a.createElement("p",null,"Here is a link to a few jobs that are in need or people with your skills. ",a.a.createElement("a",{href:"https://www.pnet.co.za/jobs--Patternmaker-Clothing-Durban-Talented-Recruitment--3127053-inline.html"}," Job Recommendation "))),a.a.createElement("div",null,a.a.createElement("button",null,"Generate CV")))},k=n(14),q=n.n(k),S=(n(36),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},n.handleAnswerSelected=n.handleAnswerSelected.bind(Object(p.a)(Object(p.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=w.map(function(t){return e.shuffleArray(t.answers)});this.setState({question:w[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,o=e.length;0!==o;)n=Math.floor(Math.random()*o),t=e[o-=1],e[o]=e[n],e[n]=t;return e}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<w.length?setTimeout(function(){return t.setNextQuestion()},300):setTimeout(function(){return t.setResults(t.getResults())},300)}},{key:"setUserAnswer",value:function(e){this.setState(function(t,n){return{answersCount:Object(l.a)({},t.answersCount,Object(i.a)({},e,(t.answersCount[e]||0)+1)),answer:e}})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:w[e].question,answerOptions:w[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map(function(t){return e[t]}),o=Math.max.apply(null,n);return t.filter(function(t){return e[t]===o})}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return a.a.createElement(g,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:w.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return a.a.createElement(E,{quizResult:this.state.result})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-header"},a.a.createElement("img",{src:q.a,className:"App-logo",alt:"logo"}),a.a.createElement("h2",null,"Sign Me Up")),this.state.result?this.renderResult():this.renderQuiz())}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.655962d8.chunk.js.map