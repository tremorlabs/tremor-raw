import{R as d,r as B}from"./index-ClcD9ViR.js";import{r as M,s as K,t as X,i as g,v as Y,w as q,n as F,x as W,y as V,z as D,a as J}from"./generateCategoricalChart-DR9uWRoX.js";import{a as L,C as p}from"./getYAxisDomain-G3OsYyu1.js";var Q=["x1","y1","x2","y2","key"],U=["offset"];function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,i)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?I(Object(r),!0).forEach(function(i){Z(t,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(r,i))})}return t}function Z(t,e,r){return e=R(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function R(t){var e=tt(t,"string");return b(e)=="symbol"?e:e+""}function tt(t,e){if(b(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var i=r.call(t,e||"default");if(b(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function w(){return w=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},w.apply(this,arguments)}function H(t,e){if(t==null)return{};var r=et(t,e),i,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)i=l[a],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function et(t,e){if(t==null)return{};var r={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(e.indexOf(i)>=0)continue;r[i]=t[i]}return r}var it=function(e){var r=e.fill;if(!r||r==="none")return null;var i=e.fillOpacity,a=e.x,l=e.y,o=e.width,u=e.height,h=e.ry;return d.createElement("rect",{x:a,y:l,ry:h,width:o,height:u,stroke:"none",fill:r,fillOpacity:i,className:"recharts-cartesian-grid-bg"})};function T(t,e){var r;if(d.isValidElement(t))r=d.cloneElement(t,e);else if(F(t))r=t(e);else{var i=e.x1,a=e.y1,l=e.x2,o=e.y2,u=e.key,h=H(e,Q),c=J(h,!1);c.offset;var n=H(c,U);r=d.createElement("line",w({},n,{x1:i,y1:a,x2:l,y2:o,fill:"none",key:u}))}return r}function rt(t){var e=t.x,r=t.width,i=t.horizontal,a=i===void 0?!0:i,l=t.horizontalPoints;if(!a||!l||!l.length)return null;var o=l.map(function(u,h){var c=v(v({},t),{},{x1:e,y1:u,x2:e+r,y2:u,key:"line-".concat(h),index:h});return T(a,c)});return d.createElement("g",{className:"recharts-cartesian-grid-horizontal"},o)}function nt(t){var e=t.y,r=t.height,i=t.vertical,a=i===void 0?!0:i,l=t.verticalPoints;if(!a||!l||!l.length)return null;var o=l.map(function(u,h){var c=v(v({},t),{},{x1:u,y1:e,x2:u,y2:e+r,key:"line-".concat(h),index:h});return T(a,c)});return d.createElement("g",{className:"recharts-cartesian-grid-vertical"},o)}function at(t){var e=t.horizontalFill,r=t.fillOpacity,i=t.x,a=t.y,l=t.width,o=t.height,u=t.horizontalPoints,h=t.horizontal,c=h===void 0?!0:h;if(!c||!e||!e.length)return null;var n=u.map(function(s){return Math.round(s+a-a)}).sort(function(s,f){return s-f});a!==n[0]&&n.unshift(0);var m=n.map(function(s,f){var O=!n[f+1],y=O?a+o-s:n[f+1]-s;if(y<=0)return null;var x=f%e.length;return d.createElement("rect",{key:"react-".concat(f),y:s,x:i,height:y,width:l,stroke:"none",fill:e[x],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return d.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},m)}function lt(t){var e=t.vertical,r=e===void 0?!0:e,i=t.verticalFill,a=t.fillOpacity,l=t.x,o=t.y,u=t.width,h=t.height,c=t.verticalPoints;if(!r||!i||!i.length)return null;var n=c.map(function(s){return Math.round(s+l-l)}).sort(function(s,f){return s-f});l!==n[0]&&n.unshift(0);var m=n.map(function(s,f){var O=!n[f+1],y=O?l+u-s:n[f+1]-s;if(y<=0)return null;var x=f%i.length;return d.createElement("rect",{key:"react-".concat(f),x:s,y:o,width:y,height:h,stroke:"none",fill:i[x],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return d.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},m)}var ot=function(e,r){var i=e.xAxis,a=e.width,l=e.height,o=e.offset;return V(L(v(v(v({},p.defaultProps),i),{},{ticks:D(i,!0),viewBox:{x:0,y:0,width:a,height:l}})),o.left,o.left+o.width,r)},ct=function(e,r){var i=e.yAxis,a=e.width,l=e.height,o=e.offset;return V(L(v(v(v({},p.defaultProps),i),{},{ticks:D(i,!0),viewBox:{x:0,y:0,width:a,height:l}})),o.top,o.top+o.height,r)},P={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function st(t){var e,r,i,a,l,o,u=M(),h=K(),c=X(),n=v(v({},t),{},{stroke:(e=t.stroke)!==null&&e!==void 0?e:P.stroke,fill:(r=t.fill)!==null&&r!==void 0?r:P.fill,horizontal:(i=t.horizontal)!==null&&i!==void 0?i:P.horizontal,horizontalFill:(a=t.horizontalFill)!==null&&a!==void 0?a:P.horizontalFill,vertical:(l=t.vertical)!==null&&l!==void 0?l:P.vertical,verticalFill:(o=t.verticalFill)!==null&&o!==void 0?o:P.verticalFill,x:g(t.x)?t.x:c.left,y:g(t.y)?t.y:c.top,width:g(t.width)?t.width:c.width,height:g(t.height)?t.height:c.height}),m=n.x,s=n.y,f=n.width,O=n.height,y=n.syncWithTicks,x=n.horizontalValues,S=n.verticalValues,z=Y(),A=q();if(!g(f)||f<=0||!g(O)||O<=0||!g(m)||m!==+m||!g(s)||s!==+s)return null;var G=n.verticalCoordinatesGenerator||ot,N=n.horizontalCoordinatesGenerator||ct,E=n.horizontalPoints,j=n.verticalPoints;if((!E||!E.length)&&F(N)){var _=x&&x.length,k=N({yAxis:A?v(v({},A),{},{ticks:_?x:A.ticks}):void 0,width:u,height:h,offset:c},_?!0:y);W(Array.isArray(k),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(b(k),"]")),Array.isArray(k)&&(E=k)}if((!j||!j.length)&&F(G)){var $=S&&S.length,C=G({xAxis:z?v(v({},z),{},{ticks:$?S:z.ticks}):void 0,width:u,height:h,offset:c},$?!0:y);W(Array.isArray(C),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(b(C),"]")),Array.isArray(C)&&(j=C)}return d.createElement("g",{className:"recharts-cartesian-grid"},d.createElement(it,{fill:n.fill,fillOpacity:n.fillOpacity,x:n.x,y:n.y,width:n.width,height:n.height,ry:n.ry}),d.createElement(rt,w({},n,{offset:c,horizontalPoints:E,xAxis:z,yAxis:A})),d.createElement(nt,w({},n,{offset:c,verticalPoints:j,xAxis:z,yAxis:A})),d.createElement(at,w({},n,{horizontalPoints:E})),d.createElement(lt,w({},n,{verticalPoints:j})))}st.displayName="CartesianGrid";const dt=t=>{B.useEffect(()=>{const e=()=>{t()};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t])};export{st as C,dt as u};
