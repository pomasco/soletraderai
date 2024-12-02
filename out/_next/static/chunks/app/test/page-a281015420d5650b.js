(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{5531:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(2265);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(...e)=>e.filter((e,r,t)=>!!e&&t.indexOf(e)===r).join(" ");/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.forwardRef)(({color:e="currentColor",size:r=24,strokeWidth:t=2,absoluteStrokeWidth:a,className:o="",children:l,iconNode:c,...u},d)=>(0,n.createElement)("svg",{ref:d,...i,width:r,height:r,stroke:e,strokeWidth:a?24*Number(t)/Number(r):t,className:s("lucide",o),...u},[...c.map(([e,r])=>(0,n.createElement)(e,r)),...Array.isArray(l)?l:[l]])),l=(e,r)=>{let t=(0,n.forwardRef)(({className:t,...i},l)=>(0,n.createElement)(o,{ref:l,iconNode:r,className:s(`lucide-${a(e)}`,t),...i}));return t.displayName=`${e}`,t}},1798:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]])},7983:function(e,r,t){Promise.resolve().then(t.bind(t,1344))},1344:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return H}});var n=t(7437),a=t(2265),s=t(3023),i=t(5744),o=t(2210),l=t(6989),c=t(9381),u=t(2278),d=t(3763),f=t(5400),v=t(1030),m=t(5606),h="Radio",[p,b]=(0,l.b)(h),[x,y]=p(h),g=a.forwardRef((e,r)=>{let{__scopeRadio:t,name:s,checked:l=!1,required:u,disabled:d,value:f="on",onCheck:v,form:m,...h}=e,[p,b]=a.useState(null),y=(0,o.e)(r,e=>b(e)),g=a.useRef(!1),w=!p||m||!!p.closest("form");return(0,n.jsxs)(x,{scope:t,checked:l,disabled:d,children:[(0,n.jsx)(c.WV.button,{type:"button",role:"radio","aria-checked":l,"data-state":N(l),"data-disabled":d?"":void 0,disabled:d,value:f,...h,ref:y,onClick:(0,i.M)(e.onClick,e=>{l||v?.(),w&&(g.current=e.isPropagationStopped(),g.current||e.stopPropagation())})}),w&&(0,n.jsx)(k,{control:p,bubbles:!g.current,name:s,value:f,checked:l,required:u,disabled:d,form:m,style:{transform:"translateX(-100%)"}})]})});g.displayName=h;var w="RadioIndicator",j=a.forwardRef((e,r)=>{let{__scopeRadio:t,forceMount:a,...s}=e,i=y(w,t);return(0,n.jsx)(m.z,{present:a||i.checked,children:(0,n.jsx)(c.WV.span,{"data-state":N(i.checked),"data-disabled":i.disabled?"":void 0,...s,ref:r})})});j.displayName=w;var k=e=>{let{control:r,checked:t,bubbles:s=!0,...i}=e,o=a.useRef(null),l=function(e){let r=a.useRef({value:e,previous:e});return a.useMemo(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}(t),c=function(e){let[r,t]=a.useState(void 0);return(0,v.b)(()=>{if(e){t({width:e.offsetWidth,height:e.offsetHeight});let r=new ResizeObserver(r=>{let n,a;if(!Array.isArray(r)||!r.length)return;let s=r[0];if("borderBoxSize"in s){let e=s.borderBoxSize,r=Array.isArray(e)?e[0]:e;n=r.inlineSize,a=r.blockSize}else n=e.offsetWidth,a=e.offsetHeight;t({width:n,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}t(void 0)},[e]),r}(r);return a.useEffect(()=>{let e=o.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"checked"),a=n.set;if(l!==t&&a){let r=new Event("click",{bubbles:s});a.call(e,t),e.dispatchEvent(r)}},[l,t,s]),(0,n.jsx)("input",{type:"radio","aria-hidden":!0,defaultChecked:t,...i,tabIndex:-1,ref:o,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function N(e){return e?"checked":"unchecked"}var R=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],C="RadioGroup",[E,A]=(0,l.b)(C,[u.Pc,b]),z=(0,u.Pc)(),L=b(),[P,V]=E(C),W=a.forwardRef((e,r)=>{let{__scopeRadioGroup:t,name:a,defaultValue:s,value:i,required:o=!1,disabled:l=!1,orientation:v,dir:m,loop:h=!0,onValueChange:p,...b}=e,x=z(t),y=(0,f.gm)(m),[g,w]=(0,d.T)({prop:i,defaultProp:s,onChange:p});return(0,n.jsx)(P,{scope:t,name:a,required:o,disabled:l,value:g,onValueChange:w,children:(0,n.jsx)(u.fC,{asChild:!0,...x,orientation:v,dir:y,loop:h,children:(0,n.jsx)(c.WV.div,{role:"radiogroup","aria-required":o,"aria-orientation":v,"data-disabled":l?"":void 0,dir:y,...b,ref:r})})})});W.displayName=C;var F="RadioGroupItem",O=a.forwardRef((e,r)=>{let{__scopeRadioGroup:t,disabled:s,...l}=e,c=V(F,t),d=c.disabled||s,f=z(t),v=L(t),m=a.useRef(null),h=(0,o.e)(r,m),p=c.value===l.value,b=a.useRef(!1);return a.useEffect(()=>{let e=e=>{R.includes(e.key)&&(b.current=!0)},r=()=>b.current=!1;return document.addEventListener("keydown",e),document.addEventListener("keyup",r),()=>{document.removeEventListener("keydown",e),document.removeEventListener("keyup",r)}},[]),(0,n.jsx)(u.ck,{asChild:!0,...f,focusable:!d,active:p,children:(0,n.jsx)(g,{disabled:d,required:c.required,checked:p,...v,...l,name:c.name,ref:h,onCheck:()=>c.onValueChange(l.value),onKeyDown:(0,i.M)(e=>{"Enter"===e.key&&e.preventDefault()}),onFocus:(0,i.M)(l.onFocus,()=>{b.current&&m.current?.click()})})})});O.displayName=F;var _=a.forwardRef((e,r)=>{let{__scopeRadioGroup:t,...a}=e,s=L(t);return(0,n.jsx)(j,{...s,...a,ref:r})});_.displayName="RadioGroupIndicator";var M=t(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let S=(0,M.Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);var D=t(9311);let Z=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(W,{className:(0,D.cn)("grid gap-2",t),...a,ref:r})});Z.displayName=W.displayName;let I=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(O,{ref:r,className:(0,D.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...a,children:(0,n.jsx)(_,{className:"flex items-center justify-center",children:(0,n.jsx)(S,{className:"h-2.5 w-2.5 fill-current text-current"})})})});I.displayName=O.displayName;var q=t(6672),B=t(1798);function H(){let[e,r]=(0,a.useState)();return(0,n.jsx)("div",{className:"container mx-auto max-w-2xl py-12",children:(0,n.jsxs)("div",{className:"space-y-8",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("h1",{className:"text-3xl font-bold tracking-tight mb-4",children:"Facebook Pages Test"}),(0,n.jsx)("p",{className:"text-muted-foreground",children:"Connect with Facebook to manage your pages"})]}),(0,n.jsx)("div",{className:"card",children:(0,n.jsxs)("div",{className:"space-y-6",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Would you like to view a list of your Facebook Pages?"}),(0,n.jsxs)(Z,{value:e,onValueChange:r,className:"flex flex-col space-y-3",children:[(0,n.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,n.jsx)(I,{value:"yes",id:"yes"}),(0,n.jsx)(q._,{htmlFor:"yes",children:"Yes"})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,n.jsx)(I,{value:"no",id:"no"}),(0,n.jsx)(q._,{htmlFor:"no",children:"No"})]})]})]}),(0,n.jsxs)(s.z,{className:"w-full",size:"lg",children:[(0,n.jsx)(B.Z,{className:"w-5 h-5 mr-2"}),"Login with Facebook"]})]})})]})})}},3023:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),a=t(2265),s=t(7256),i=t(9213),o=t(9311);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,r)=>{let{className:t,variant:a,size:i,asChild:c=!1,...u}=e,d=c?s.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(l({variant:a,size:i,className:t})),ref:r,...u})});c.displayName="Button"},6672:function(e,r,t){"use strict";t.d(r,{_:function(){return c}});var n=t(7437),a=t(2265),s=t(6743),i=t(9213),o=t(9311);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(s.f,{ref:r,className:(0,o.cn)(l(),t),...a})});c.displayName=s.f.displayName},9311:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(7042),a=t(4769);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}},6743:function(e,r,t){"use strict";t.d(r,{f:function(){return o}});var n=t(2265),a=t(9381),s=t(7437),i=n.forwardRef((e,r)=>(0,s.jsx)(a.WV.label,{...e,ref:r,onMouseDown:r=>{let t=r.target;t.closest("button, input, select, textarea")||(e.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));i.displayName="Label";var o=i},9213:function(e,r,t){"use strict";t.d(r,{j:function(){return s}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,a="";if("string"==typeof r||"number"==typeof r)a+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(a&&(a+=" "),a+=n);else for(t in r)r[t]&&(a&&(a+=" "),a+=t)}return a}(e))&&(n&&(n+=" "),n+=r);return n},s=(e,r)=>t=>{var s;if((null==r?void 0:r.variants)==null)return a(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:o}=r,l=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],a=null==o?void 0:o[e];if(null===r)return null;let s=n(r)||n(a);return i[e][s]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{}),u=null==r?void 0:null===(s=r.compoundVariants)||void 0===s?void 0:s.reduce((e,r)=>{let{class:t,className:n,...a}=r;return Object.entries(a).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...o,...c}[r]):({...o,...c})[r]===t})?[...e,t,n]:e},[]);return a(e,l,u,null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[533,813,971,864,744],function(){return e(e.s=7983)}),_N_E=e.O()}]);