import{R as p,r as ie}from"./index-ClcD9ViR.js";import{a as ee}from"./cx-CYgzbKIn.js";import{a as N,L as z,m as C,i as B,C as F,A as oe,b as R,c as q,d as se,e as G,h as le,j as ue,G as ce,k as J,l as Q,n as K,D as fe,u as pe}from"./generateCategoricalChart-DR9uWRoX.js";var de=["layout","type","stroke","connectNulls","isRange","ref"],he=["key"],te;function I(e){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function re(e,t){if(e==null)return{};var n=ve(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function ve(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(r){E(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function me(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ae(r.key),r)}}function ye(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function be(e,t,n){return t=T(t),Ae(e,ne()?Reflect.construct(t,n||[],T(e).constructor):t.apply(e,n))}function Ae(e,t){if(t&&(I(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ge(e)}function ge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ne=function(){return!!e})()}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},T(e)}function xe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&H(e,t)}function H(e,t){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},H(e,t)}function E(e,t,n){return t=ae(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ae(e){var t=Pe(e,"string");return I(t)=="symbol"?t:t+""}function Pe(e,t){if(I(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var M=function(e){function t(){var n;me(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return n=be(this,t,[].concat(a)),E(n,"state",{isAnimationFinished:!0}),E(n,"id",pe("recharts-area-")),E(n,"handleAnimationEnd",function(){var o=n.props.onAnimationEnd;n.setState({isAnimationFinished:!0}),K(o)&&o()}),E(n,"handleAnimationStart",function(){var o=n.props.onAnimationStart;n.setState({isAnimationFinished:!1}),K(o)&&o()}),n}return xe(t,e),ye(t,[{key:"renderDots",value:function(r,a,i){var o=this.props.isAnimationActive,s=this.state.isAnimationFinished;if(o&&!s)return null;var u=this.props,l=u.dot,f=u.points,c=u.dataKey,d=N(this.props,!1),A=N(l,!0),g=f.map(function(m,O){var y=S(S(S({key:"dot-".concat(O),r:3},d),A),{},{index:O,cx:m.x,cy:m.y,dataKey:c,value:m.value,payload:m.payload,points:f});return t.renderDotItem(l,y)}),x={clipPath:r?"url(#clipPath-".concat(a?"":"dots-").concat(i,")"):null};return p.createElement(z,D({className:"recharts-area-dots"},x),g)}},{key:"renderHorizontalRect",value:function(r){var a=this.props,i=a.baseLine,o=a.points,s=a.strokeWidth,u=o[0].x,l=o[o.length-1].x,f=r*Math.abs(u-l),c=C(o.map(function(d){return d.y||0}));return B(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max(C(i.map(function(d){return d.y||0})),c)),B(c)?p.createElement("rect",{x:u<l?u:u-f,y:0,width:f,height:Math.floor(c+(s?parseInt("".concat(s),10):1))}):null}},{key:"renderVerticalRect",value:function(r){var a=this.props,i=a.baseLine,o=a.points,s=a.strokeWidth,u=o[0].y,l=o[o.length-1].y,f=r*Math.abs(u-l),c=C(o.map(function(d){return d.x||0}));return B(i)&&typeof i=="number"?c=Math.max(i,c):i&&Array.isArray(i)&&i.length&&(c=Math.max(C(i.map(function(d){return d.x||0})),c)),B(c)?p.createElement("rect",{x:0,y:u<l?u:u-f,width:c+(s?parseInt("".concat(s),10):1),height:Math.floor(f)}):null}},{key:"renderClipRect",value:function(r){var a=this.props.layout;return a==="vertical"?this.renderVerticalRect(r):this.renderHorizontalRect(r)}},{key:"renderAreaStatically",value:function(r,a,i,o){var s=this.props,u=s.layout,l=s.type,f=s.stroke,c=s.connectNulls,d=s.isRange;s.ref;var A=re(s,de);return p.createElement(z,{clipPath:i?"url(#clipPath-".concat(o,")"):null},p.createElement(F,D({},N(A,!0),{points:r,connectNulls:c,type:l,baseLine:a,layout:u,stroke:"none",className:"recharts-area-area"})),f!=="none"&&p.createElement(F,D({},N(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:r})),f!=="none"&&d&&p.createElement(F,D({},N(this.props,!1),{className:"recharts-area-curve",layout:u,type:l,connectNulls:c,fill:"none",points:a})))}},{key:"renderAreaWithAnimation",value:function(r,a){var i=this,o=this.props,s=o.points,u=o.baseLine,l=o.isAnimationActive,f=o.animationBegin,c=o.animationDuration,d=o.animationEasing,A=o.animationId,g=this.state,x=g.prevPoints,m=g.prevBaseLine;return p.createElement(oe,{begin:f,duration:c,isActive:l,easing:d,from:{t:0},to:{t:1},key:"area-".concat(A),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(O){var y=O.t;if(x){var _=x.length/s.length,h=s.map(function(P,L){var k=Math.floor(L*_);if(x[k]){var j=x[k],V=R(j.x,P.x),W=R(j.y,P.y);return S(S({},P),{},{x:V(y),y:W(y)})}return P}),v;if(B(u)&&typeof u=="number"){var b=R(m,u);v=b(y)}else if(q(u)||se(u)){var w=R(m,0);v=w(y)}else v=u.map(function(P,L){var k=Math.floor(L*_);if(m[k]){var j=m[k],V=R(j.x,P.x),W=R(j.y,P.y);return S(S({},P),{},{x:V(y),y:W(y)})}return P});return i.renderAreaStatically(h,v,r,a)}return p.createElement(z,null,p.createElement("defs",null,p.createElement("clipPath",{id:"animationClipPath-".concat(a)},i.renderClipRect(y))),p.createElement(z,{clipPath:"url(#animationClipPath-".concat(a,")")},i.renderAreaStatically(s,u,r,a)))})}},{key:"renderArea",value:function(r,a){var i=this.props,o=i.points,s=i.baseLine,u=i.isAnimationActive,l=this.state,f=l.prevPoints,c=l.prevBaseLine,d=l.totalLength;return u&&o&&o.length&&(!f&&d>0||!G(f,o)||!G(c,s))?this.renderAreaWithAnimation(r,a):this.renderAreaStatically(o,s,r,a)}},{key:"render",value:function(){var r,a=this.props,i=a.hide,o=a.dot,s=a.points,u=a.className,l=a.top,f=a.left,c=a.xAxis,d=a.yAxis,A=a.width,g=a.height,x=a.isAnimationActive,m=a.id;if(i||!s||!s.length)return null;var O=this.state.isAnimationFinished,y=s.length===1,_=ee("recharts-area",u),h=c&&c.allowDataOverflow,v=d&&d.allowDataOverflow,b=h||v,w=q(m)?this.id:m,P=(r=N(o,!1))!==null&&r!==void 0?r:{r:3,strokeWidth:2},L=P.r,k=L===void 0?3:L,j=P.strokeWidth,V=j===void 0?2:j,W=le(o)?o:{},X=W.clipDot,Y=X===void 0?!0:X,$=k*2+V;return p.createElement(z,{className:_},h||v?p.createElement("defs",null,p.createElement("clipPath",{id:"clipPath-".concat(w)},p.createElement("rect",{x:h?f:f-A/2,y:v?l:l-g/2,width:h?A:A*2,height:v?g:g*2})),!Y&&p.createElement("clipPath",{id:"clipPath-dots-".concat(w)},p.createElement("rect",{x:f-$/2,y:l-$/2,width:A+$,height:g+$}))):null,y?null:this.renderArea(b,w),(o||y)&&this.renderDots(b,Y,w),(!x||O)&&ue.renderCallByParent(this.props,s))}}],[{key:"getDerivedStateFromProps",value:function(r,a){return r.animationId!==a.prevAnimationId?{prevAnimationId:r.animationId,curPoints:r.points,curBaseLine:r.baseLine,prevPoints:a.curPoints,prevBaseLine:a.curBaseLine}:r.points!==a.curPoints||r.baseLine!==a.curBaseLine?{curPoints:r.points,curBaseLine:r.baseLine}:null}}])}(ie.PureComponent);te=M;E(M,"displayName","Area");E(M,"defaultProps",{stroke:"#3182bd",fill:"#3182bd",fillOpacity:.6,xAxisId:0,yAxisId:0,legendType:"line",connectNulls:!1,points:[],dot:!1,activeDot:!0,hide:!1,isAnimationActive:!ce.isSsr,animationBegin:0,animationDuration:1500,animationEasing:"ease"});E(M,"getBaseValue",function(e,t,n,r){var a=e.layout,i=e.baseValue,o=t.props.baseValue,s=o??i;if(B(s)&&typeof s=="number")return s;var u=a==="horizontal"?r:n,l=u.scale.domain();if(u.type==="number"){var f=Math.max(l[0],l[1]),c=Math.min(l[0],l[1]);return s==="dataMin"?c:s==="dataMax"||f<0?f:Math.max(Math.min(l[0],l[1]),0)}return s==="dataMin"?l[0]:s==="dataMax"?l[1]:l[0]});E(M,"getComposedData",function(e){var t=e.props,n=e.item,r=e.xAxis,a=e.yAxis,i=e.xAxisTicks,o=e.yAxisTicks,s=e.bandSize,u=e.dataKey,l=e.stackedData,f=e.dataStartIndex,c=e.displayedData,d=e.offset,A=t.layout,g=l&&l.length,x=te.getBaseValue(t,n,r,a),m=A==="horizontal",O=!1,y=c.map(function(h,v){var b;g?b=l[f+v]:(b=J(h,u),Array.isArray(b)?O=!0:b=[x,b]);var w=b[1]==null||g&&J(h,u)==null;return m?{x:Q({axis:r,ticks:i,bandSize:s,entry:h,index:v}),y:w?null:a.scale(b[1]),value:b,payload:h}:{x:w?null:r.scale(b[1]),y:Q({axis:a,ticks:o,bandSize:s,entry:h,index:v}),value:b,payload:h}}),_;return g||O?_=y.map(function(h){var v=Array.isArray(h.value)?h.value[0]:null;return m?{x:h.x,y:v!=null&&h.y!=null?a.scale(v):null}:{x:v!=null?r.scale(v):null,y:h.y}}):_=m?a.scale(x):r.scale(x),S({points:y,baseLine:_,layout:A,isRange:O},d)});E(M,"renderDotItem",function(e,t){var n;if(p.isValidElement(e))n=p.cloneElement(e,t);else if(K(e))n=e(t);else{var r=ee("recharts-area-dot",typeof e!="boolean"?e.className:""),a=t.key,i=re(t,he);n=p.createElement(fe,D({},i,{key:a,className:r}))}return n});export{M as A};
