(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),o=c(2),s=c(3),i=c(5),l=c(4),r=c(1),u=c.n(r),m=(c(12),c(13),c(0)),h=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={currentTime:(new Date).toLocaleTimeString()},e.timerId=setInterval((function(){}),0),e}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){e.setState({currentTime:(new Date).toLocaleTimeString()}),console.log(e.state.currentTime)}),1e3)}},{key:"componentDidUpdate",value:function(e){var t=this.props;e!==t&&console.log("The Clock was renamed from ".concat(e.clocksName," to ").concat(t.clocksName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.currentTime,t=this.props.clocksName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("h2",{className:"Clock__name",children:"<<< ".concat(t," >>>")}),Object(m.jsx)("div",{"data-cy":"time",className:"Clock__time",children:e})]})}}]),c}(u.a.Component),b=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isClockVisible:!0,clocksName:1},e.showClock=function(){e.setState({isClockVisible:!0})},e.hideClock=function(){e.setState({isClockVisible:!1})},e.changeName=function(){e.setState({clocksName:Math.floor(100*Math.random())})},e}return Object(s.a)(c,[{key:"render",value:function(){var e=this.state,t=e.isClockVisible,c=e.clocksName;return Object(m.jsxs)("div",{className:"App",children:[t&&Object(m.jsx)(h,{clocksName:c}),Object(m.jsx)("h1",{className:"App__title",children:"React clock"}),Object(m.jsxs)("div",{className:"App__buttons",children:[Object(m.jsx)("button",{className:"App__button",type:"button",onClick:this.showClock,disabled:t,children:"Show clock"}),Object(m.jsx)("button",{className:"App__button",type:"button",onClick:this.changeName,disabled:!t,children:"Rename clock"}),Object(m.jsx)("button",{className:"App__button",type:"button",onClick:this.hideClock,disabled:!t,children:"Hide Clock"})]})]})}}]),c}(u.a.Component),d=b;a.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bdc607ca.chunk.js.map