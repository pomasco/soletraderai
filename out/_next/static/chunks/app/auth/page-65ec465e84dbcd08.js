(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[235],{1861:function(e,i,s){Promise.resolve().then(s.bind(s,4482))},4482:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return w}});var t=s(7437),r=s(2265),n=s(1393),a=s(1565),l=s(268),o=s(1865),d=s(8110),c=s(4578),u=s(3023),x=s(9311);let f=r.forwardRef((e,i)=>{let{className:s,type:r,...n}=e;return(0,t.jsx)("input",{type:r,className:(0,x.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:i,...n})});f.displayName="Input";var m=s(6672),h=s(3715),p=s(1798);let g={spinner:h.Z,facebook:p.Z,google:e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:[(0,t.jsx)("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),(0,t.jsx)("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),(0,t.jsx)("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),(0,t.jsx)("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]})},v=c.Ry({name:c.Z_().min(2).max(50).optional(),email:c.Z_().email(),password:c.Z_().min(8)});function j(e){let{mode:i,className:s,...n}=e,[a,l]=(0,r.useState)(!1),c=(0,o.cI)({resolver:(0,d.F)(v),defaultValues:{name:"",email:"",password:""}});async function h(e){l(!0);try{console.log(e)}catch(e){console.error(e)}finally{l(!1)}}return(0,t.jsxs)("div",{className:(0,x.cn)("grid gap-6",s),...n,children:[(0,t.jsxs)("div",{className:"flex justify-center space-x-4",children:[(0,t.jsx)(u.z,{variant:"outline",size:"icon",className:"w-10 h-10 rounded-full",children:(0,t.jsx)(g.google,{className:"h-5 w-5"})}),(0,t.jsx)(u.z,{variant:"outline",size:"icon",className:"w-10 h-10 rounded-full",children:(0,t.jsx)(g.facebook,{className:"h-5 w-5"})})]}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)("div",{className:"absolute inset-0 flex items-center",children:(0,t.jsx)("span",{className:"w-full border-t"})}),(0,t.jsx)("div",{className:"relative flex justify-center text-xs uppercase",children:(0,t.jsx)("span",{className:"bg-background px-2 text-muted-foreground",children:"Or continue with email"})})]}),(0,t.jsx)("form",{onSubmit:c.handleSubmit(h),className:"space-y-4",children:(0,t.jsxs)("div",{className:"grid gap-4",children:["register"===i&&(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(m._,{htmlFor:"name",children:"Name"}),(0,t.jsx)(f,{id:"name",placeholder:"Enter your name",type:"text",autoCapitalize:"none",autoCorrect:"off",disabled:a,...c.register("name")})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(m._,{htmlFor:"email",children:"Email"}),(0,t.jsx)(f,{id:"email",placeholder:"Enter your email",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:a,...c.register("email")})]}),(0,t.jsxs)("div",{className:"grid gap-2",children:[(0,t.jsx)(m._,{htmlFor:"password",children:"Password"}),(0,t.jsx)(f,{id:"password",placeholder:"Enter your password",type:"password",autoComplete:"login"===i?"current-password":"new-password",disabled:a,...c.register("password")})]}),"login"===i&&(0,t.jsx)("div",{className:"text-sm text-right",children:(0,t.jsx)(u.z,{variant:"link",className:"p-0 h-auto font-normal",children:"Forgot your password?"})}),(0,t.jsxs)(u.z,{disabled:a,className:"w-full",children:[a&&(0,t.jsx)(g.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"login"===i?"Sign In":"Sign Up"]})]})})]})}function b(){let[e,i]=(0,r.useState)(!0);return(0,t.jsx)("div",{id:"auth-wrapper",className:"container relative h-[800px] flex items-center justify-center overflow-hidden",children:(0,t.jsxs)("div",{id:"auth-container",className:"relative w-full max-w-[800px] h-[600px] rounded-2xl shadow-2xl",children:[(0,t.jsxs)("div",{id:"forms-container",className:"absolute inset-0 grid grid-cols-2 bg-background",children:[(0,t.jsx)("div",{id:"left-panel",className:"relative",children:(0,t.jsx)(n.M,{mode:"wait",initial:!1,children:!e&&(0,t.jsxs)(a.E.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3},className:"p-8 h-full flex flex-col justify-center",children:[(0,t.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,t.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Create Account"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"or continue with these social profiles"})]}),(0,t.jsx)(j,{mode:"register"})]},"register-form")})}),(0,t.jsx)("div",{id:"right-panel",className:"relative",children:(0,t.jsx)(n.M,{mode:"wait",initial:!1,children:e&&(0,t.jsxs)(a.E.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.3},className:"p-8 h-full flex flex-col justify-center",children:[(0,t.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,t.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:"Sign in to Account"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:"or continue with these social profiles"})]}),(0,t.jsx)(j,{mode:"login"})]},"login-form")})})]}),(0,t.jsx)(a.E.div,{id:"sliding-panel",className:"absolute inset-0 bg-primary rounded-2xl z-50",initial:!1,animate:{x:e?"0%":"100%",width:"50%",transformOrigin:e?"left":"right"},transition:{duration:.5,ease:"easeInOut"},children:(0,t.jsxs)("div",{id:"sliding-content",className:"absolute inset-0 flex flex-col justify-between p-12 text-white",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 text-lg font-medium",children:[(0,t.jsx)(l.Z,{className:"h-6 w-6"}),(0,t.jsx)("span",{children:"Sole Trader AI"})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h2",{className:"text-4xl font-bold",children:e?"Hello, Friend!":"Welcome Back!"}),(0,t.jsx)("p",{className:"text-primary-foreground/80",children:e?"Enter your personal details and start your journey with us":"To keep connected with us please login with your personal info"}),(0,t.jsx)("button",{onClick:()=>{i(!e)},className:"rounded-full border-2 border-white px-8 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-primary",children:e?"Sign Up":"Sign In"})]}),(0,t.jsx)("div",{className:"relative"})]})})]})})}function w(){return(0,t.jsx)(b,{})}},3023:function(e,i,s){"use strict";s.d(i,{z:function(){return d}});var t=s(7437),r=s(2265),n=s(7256),a=s(9213),l=s(9311);let o=(0,a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,i)=>{let{className:s,variant:r,size:a,asChild:d=!1,...c}=e,u=d?n.g7:"button";return(0,t.jsx)(u,{className:(0,l.cn)(o({variant:r,size:a,className:s})),ref:i,...c})});d.displayName="Button"},6672:function(e,i,s){"use strict";s.d(i,{_:function(){return d}});var t=s(7437),r=s(2265),n=s(6743),a=s(9213),l=s(9311);let o=(0,a.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=r.forwardRef((e,i)=>{let{className:s,...r}=e;return(0,t.jsx)(n.f,{ref:i,className:(0,l.cn)(o(),s),...r})});d.displayName=n.f.displayName},9311:function(e,i,s){"use strict";s.d(i,{cn:function(){return n}});var t=s(7042),r=s(4769);function n(){for(var e=arguments.length,i=Array(e),s=0;s<e;s++)i[s]=arguments[s];return(0,r.m6)((0,t.W)(i))}}},function(e){e.O(0,[533,334,971,864,744],function(){return e(e.s=1861)}),_N_E=e.O()}]);