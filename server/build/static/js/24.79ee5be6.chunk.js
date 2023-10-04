"use strict";(self.webpackChunkecom_admin=self.webpackChunkecom_admin||[]).push([[24],{75523:function(e,a,r){r.d(a,{kS:function(){return c},pH:function(){return l}});var n=r(74165),t=r(15861),s=r(78690),o=r(31243),l=(0,s.hg)("loginUser",function(){var e=(0,t.Z)((0,n.Z)().mark((function e(a){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("http://localhost:8000/api/auth/login",a,{headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()),c=(0,s.hg)("logout",function(){var e=(0,t.Z)((0,n.Z)().mark((function e(a){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("http://localhost:8000/api/auth/logout",a,{headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}());(0,s.oM)({name:"users",initialState:{users:[],loading:!1,error:null},reducers:{},extraReducers:function(e){e.addCase(l.pending,(function(e){e.loading=!0,e.error=null})).addCase(l.fulfilled,(function(e,a){e.loading=!1,console.log(a),e.users=a.payload.data})).addCase(l.rejected,(function(e,a){e.loading=!1,console.log(a.payload),e.users=a.payload.data})).addCase(c.pending,(function(e){e.loading=!0,e.error=null})).addCase(c.fulfilled,(function(e,a){e.loading=!1,console.log(a),e.users=a.payload.data})).addCase(c.rejected,(function(e,a){e.loading=!1,console.log(a.payload),e.users=a.payload.data}))}}).reducer},23024:function(e,a,r){r.r(a);var n=r(74165),t=r(15861),s=r(4942),o=r(1413),l=r(29439),c=r(72791),i=r(57689),u=r(59434),d=r(78983),p=r(24846),h=r(99161),m=r(93647),f=r(75523),x=r(80184);a.default=function(){var e=(0,c.useState)(!1),a=(0,l.Z)(e,2),r=a[0],g=a[1],j=(0,i.s0)(),y=(0,u.I0)(),v=(0,c.useState)({username:"",password:""}),Z=(0,l.Z)(v,2),w=Z[0],b=Z[1];function C(e,a){b((function(r){return(0,o.Z)((0,o.Z)({},r),{},(0,s.Z)({},e,a))}))}function k(){return(k=(0,t.Z)((0,n.Z)().mark((function e(){var a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={username:w.username,password:w.password},e.next=3,y((0,f.pH)(a));case 3:(r=e.sent)&&("Done"===r.payload.result?(localStorage.setItem("login",!0),localStorage.setItem("username",r.payload.data.username),localStorage.setItem("name",r.payload.data.name),localStorage.setItem("role",r.payload.data.role),localStorage.setItem("userid",r.payload.data._id),localStorage.setItem("token",r.payload.token),r&&r.payload&&r.payload.data&&"Admin"===r.payload.data.role?j("/dashboard"):j("/")):g(!0));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,x.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,x.jsx)(d.KB,{children:(0,x.jsx)(d.rb,{className:"justify-content-center",children:(0,x.jsx)(d.b7,{md:8,children:(0,x.jsx)(d.dL,{children:(0,x.jsx)(d.xH,{className:"p-4",children:(0,x.jsx)(d.sl,{children:(0,x.jsxs)(d.lx,{children:[(0,x.jsx)("h1",{children:"Login"}),(0,x.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,x.jsxs)(d.YR,{className:"mb-3",children:[(0,x.jsx)(d.wV,{children:(0,x.jsx)(p.Z,{icon:h.E})}),(0,x.jsx)(d.jO,{placeholder:"Username",name:"username",autoComplete:"username",onChange:function(e){C(e.target.name,e.target.value)}})]}),(0,x.jsxs)(d.YR,{className:"mb-4",children:[(0,x.jsx)(d.wV,{children:(0,x.jsx)(p.Z,{icon:m.U})}),(0,x.jsx)(d.jO,{type:"password",name:"password",placeholder:"Password",autoComplete:"current-password",onChange:function(e){C(e.target.name,e.target.value)}})]}),(0,x.jsx)(d.rb,{children:(0,x.jsx)(d.b7,{xs:12,children:r?(0,x.jsx)("p",{className:"text-danger fw-bold",children:"Invalid Username or Password"}):null})}),(0,x.jsxs)(d.rb,{children:[(0,x.jsx)(d.b7,{xs:6,children:(0,x.jsx)(d.u5,{color:"primary",className:"px-4",onClick:function(){return k.apply(this,arguments)},children:"Login"})}),(0,x.jsx)(d.b7,{xs:6,className:"text-right",children:(0,x.jsx)(d.u5,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})})})})})})})}},93647:function(e,a,r){r.d(a,{U:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},99161:function(e,a,r){r.d(a,{E:function(){return n}});var n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=24.79ee5be6.chunk.js.map