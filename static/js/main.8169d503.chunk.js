(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{156:function(e,t,a){e.exports=a(308)},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),c=a.n(o),s=a(20),l=a(18),i=a(12),u=a.n(i),m=a(17),p=a(8),d=a(44),f=a.n(d),b=a(351),g=a(353),h=a(391),v=a(100),E=a(385),O=a(359),j=a(386),k=a(360),w=a(361),y=a(380),x=a(362),N=a(354),C=a(383),S=a(350),T=a(348),B=function(e){var t=e.Typography,a=e.Link;return r.a.createElement(t,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(a,{color:"inherit",href:"http://vhmblog102.000webhostapp.com",target:"_blank"},"VHM Blog")," "+(new Date).getFullYear()+".")},P=Object(T.a)((function(e){return{root:{padding:e.spacing(3,2)},card:{maxWidth:345},media:{height:140}}})),_=Object(T.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),D=Object(T.a)((function(e){return{paper:{padding:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},fab:{width:300,outline:"none !important"},btn:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},input:{width:300},mr:{marginRight:e.spacing(1)},ml:{marginLeft:e.spacing(1)},mt:{marginTop:e.spacing(1)},mb:{marginBottom:e.spacing(1)}}})),A=a(80),I=a(81),R=a(135),W=a.n(R),F=a(136),L=a.n(F),z=W.a.create({baseURL:"https://vnotepad.herokuapp.com",headers:{"Content-Type":"application/json"},responseType:"json",timeout:5e3,paramsSerializer:function(e){return L.a.stringify(e)}});z.interceptors.request.use(function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){throw e})),z.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var q=z,Y=function(){function e(t){Object(A.a)(this,e),q.defaults.headers.common.Authorization="Bearer ".concat(t)}return Object(I.a)(e,[{key:"getProfile",value:function(){return q.get("/users/profile")}},{key:"resetPassword",value:function(){return q.get("/users/reset-password")}},{key:"updatePassword",value:function(e){return q.post("/users/update-password",e)}},{key:"updateProfile",value:function(e){return q.post("/users/update-profile",e)}}],[{key:"refreshToken",value:function(e){return q.get("/users/refresh-token",{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"logout",value:function(e){return q.get("/users/logout",{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"logoutAll",value:function(e){return q.get("/users/logoutAll",{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"register",value:function(e){return q.post("/users/register",e)}},{key:"login",value:function(e){return q.post("/users/login",e)}}]),e}(),H=a(31),V=a.n(H),J=V.a.object({password:V.a.string().min(3).max(30).required(),email:V.a.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}})}),U=function(){var e=_(),t=Object(n.useState)(""),a=Object(p.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),i=Object(p.a)(l,2),d=i[0],T=i[1],P=Object(n.useState)(!1),D=Object(p.a)(P,2),A=D[0],I=D[1],R=Object(n.useState)(""),W=Object(p.a)(R,2),F=W[0],L=W[1],z=Object(S.a)(),q=Object(p.a)(z,2)[1];Object(n.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem("remember"));e&&(c(e.email),T(e.password),I(!0))}),[]);var H=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.validateAsync({email:o,password:d});case 3:return t=e.sent,e.next=6,Y.login(t);case 6:a=e.sent,n=a.msg,r=a.token,c=a.refreshToken,A?window.localStorage.setItem("remember",JSON.stringify({email:o,password:d})):localStorage.removeItem("remember"),f.a.fire({icon:"success",title:n,showConfirmButton:!1,timer:1500,allowOutsideClick:!1,backdrop:"rgba(85,85,85, .4)",timerProgressBar:!0}).then((function(){q("token",r),q("refreshToken",c)})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0.response?L(e.t0.response.data.msg):L(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar},r.a.createElement(N.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign In"),r.a.createElement("form",{className:e.form},r.a.createElement(E.a,{autoFocus:!0,variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",name:"email",autoComplete:"email",value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",value:d,onChange:function(e){return T(e.target.value)}}),r.a.createElement(O.a,{control:r.a.createElement(j.a,{color:"primary",value:A,checked:A,onChange:function(e){return I(!A)}}),label:"Remember me"}),F&&r.a.createElement(C.a,{severity:"error"},F),r.a.createElement(k.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:H},"Sign In"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0},r.a.createElement(s.b,{to:"/register"},"You don't have an account? Sign Up"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(B,{Typography:v.a,Link:x.a})))},K=V.a.object({username:V.a.string().alphanum().min(3).max(30).required(),password:V.a.string().min(3).max(30).required(),repass:V.a.ref("password"),email:V.a.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}})}),M=function(){var e=_(),t=Object(n.useState)(""),a=Object(p.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),d=Object(p.a)(i,2),O=d[0],j=d[1],S=Object(n.useState)(""),T=Object(p.a)(S,2),P=T[0],D=T[1],A=Object(n.useState)(""),I=Object(p.a)(A,2),R=I[0],W=I[1],F=Object(n.useState)(""),L=Object(p.a)(F,2),z=L[0],q=L[1],H=Object(l.g)(),V=function(){var e=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,K.validateAsync({username:o,email:O,password:P,repass:R});case 4:return a=e.sent,e.next=7,Y.register(a);case 7:f.a.fire({icon:"success",title:"Sign up successfully",showConfirmButton:!1,timer:2e3,allowOutsideClick:!1,backdrop:"rgba(85,85,85, .4)",timerProgressBar:!0}).then((function(){H.push("/login")})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response?q(e.t0.response.data.msg):q('"repass" must be [ref:password]'===e.t0.message?"Password is not matched":e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{component:"main",maxWidth:"xs"},r.a.createElement(g.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(h.a,{className:e.avatar},r.a.createElement(N.a,null)),r.a.createElement(v.a,{component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:e.form},r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Your name",autoFocus:!0,value:o,onChange:function(e){return c(e.target.value)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",value:O,onChange:function(e){return j(e.target.value)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Password",type:"password",value:P,onChange:function(e){return D(e.target.value)}}),r.a.createElement(E.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Re-password",type:"password",value:R,onChange:function(e){return W(e.target.value)}}),z&&r.a.createElement(C.a,{severity:"error"},z),r.a.createElement(k.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:V},"Sign Up"),r.a.createElement(w.a,{container:!0},r.a.createElement(w.a,{item:!0},r.a.createElement(s.b,{to:"/login"},"Have an account? Sign In"))))),r.a.createElement(y.a,{mt:8},r.a.createElement(B,{Typography:v.a,Link:x.a})))},G=function(e){return!(!e.token||!e.refreshToken)},Q=function(){var e=Object(S.a)(),t=Object(p.a)(e,3),a=t[0],o=t[2],c=function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(n=a.refreshToken)){e.next=8;break}return e.next=5,Y.logout(n);case 5:o("token"),o("refreshToken"),localStorage.removeItem("refreshToken");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Home"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse d-flex",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},G(a)?r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/notes",className:"nav-link"},"Notes")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/profile",className:"nav-link"},"Profile")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/",className:"nav-link",onClick:c},"Logout"))):r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/login",className:"nav-link"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/register",className:"nav-link"},"Register")))))))},X=a(28),Z=a(142),$=a(363),ee=a(364),te=a(365),ae=a(366),ne=a(389),re=a(137),oe=a.n(re),ce=r.a.createContext(),se=function(e){var t=e.children,a=r.a.useState({}),n=Object(p.a)(a,2),o=n[0],c=n[1],s=Object(S.a)(),l=Object(p.a)(s,3),i=l[0],d=l[1],f=l[2];return r.a.useEffect((function(){Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.token){e.next=12;break}return t=new Y(i.token),e.prev=2,e.next=5,t.getProfile();case 5:a=e.sent,c(a.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),Y.refreshToken(i.refreshToken).then((function(e){d("token",e.token)})).catch((function(){f("token"),f("refreshToken")}));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}),[i.token]),r.a.createElement(ce.Provider,{value:[o,c]},t)},le=function(){var e=P(),t=D(),a=Object(S.a)(),o=Object(p.a)(a,1)[0],c=Object(n.useContext)(ce),s=Object(p.a)(c,2),l=s[0],i=s[1],d=Object(n.useState)({}),f=Object(p.a)(d,2),b=f[0],g=f[1],h=Object(n.useState)(!1),O=Object(p.a)(h,2),j=O[0],w=O[1],y=Object(n.useState)(!1),x=Object(p.a)(y,2),N=x[0],T=x[1],B=Object(n.useState)({type:"",message:""}),_=Object(p.a)(B,2),A=_[0],I=_[1],R=new Y(o.token),W=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.updateProfile({username:b.username});case 3:t=e.sent,i((function(e){return Object(X.a)(Object(X.a)({},e),{},{username:b.username})})),I({type:"success",message:t.msg}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),I({type:"error",message:e.t0.response?e.t0.response.data.msg:e.t0.message});case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.resetPassword();case 3:t=e.sent,I({type:"success",message:t.msg}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0,e.t0.response,e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.logoutAll(o.refreshToken);case 3:T(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0,e.t0.response,e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,Object.keys(l).length>0?r.a.createElement(Z.a,{className:e.root+" d-flex"},r.a.createElement(v.a,{variant:"h5",component:"h3",className:"col-4"},r.a.createElement($.a,{className:e.card},r.a.createElement(ee.a,{className:"text-center"},r.a.createElement(oe.a,{style:{width:"100px",height:"100px"},avatarStyle:"Circle",topType:"WinterHat1",accessoriesType:"Blank",hatColor:"Red",hairColor:"BrownDark",facialHairType:"Blank",clotheType:"BlazerShirt",eyeType:"Default",eyebrowType:"Default",mouthType:"Default",skinColor:"Light"}),r.a.createElement(te.a,null,r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},l.username),r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p",className:"mb-2"},l.email))),r.a.createElement(ae.a,{className:"text-center"},r.a.createElement(k.a,{size:"large",color:"secondary",className:"btn-block",onClick:W,disabled:!j},"Save your profile")))),r.a.createElement(v.a,{component:"form",className:"col-6"},r.a.createElement("h3",null,"Infomation"),r.a.createElement(E.a,{className:"mb-3",label:"Your ID",defaultValue:l._id,InputLabelProps:{shrink:!0},fullWidth:!0,disabled:!0}),r.a.createElement(E.a,{className:"mb-3",label:"Email",defaultValue:l.email,InputLabelProps:{shrink:!0},fullWidth:!0,disabled:!0}),r.a.createElement(E.a,{fullWidth:!0,className:"mb-3",name:"name",label:"Name",autoComplete:"off",defaultValue:l.username,InputLabelProps:{shrink:!0},onChange:function(e){g((function(t){return Object(X.a)(Object(X.a)({},t),{},{username:e.target.value})})),j||w(!0)}}),r.a.createElement(k.a,{variant:"contained",className:"".concat(t.btn," float-left"),onClick:F},"Reset Password"),r.a.createElement(k.a,{variant:"contained",className:"".concat(t.btn," float-right"),disabled:N,onClick:L},"Logout All Device"))):r.a.createElement("div",null,"Nothing..."),r.a.createElement(ne.a,{open:!!A.message,autoHideDuration:5e3,onClose:function(e,t){"clickaway"!==t&&I({type:"",message:""})}},r.a.createElement(C.a,{severity:A.type?A.type:"info"},A.message)))},ie=a(367),ue=a(368),me=V.a.object({password:V.a.string().min(3).max(30).required(),repass:V.a.ref("password")}),pe=function(e){var t=Object.assign({},e),a=D(),o=Object(l.g)(),c=Object(n.useState)(""),s=Object(p.a)(c,2),i=s[0],d=s[1],b=Object(n.useState)(""),g=Object(p.a)(b,2),h=g[0],O=g[1],j=Object(n.useState)(""),k=Object(p.a)(j,2),w=k[0],y=k[1],x=Object(S.a)(),N=Object(p.a)(x,3),T=N[0],B=N[2],P=function(){var e=Object(m.a)(u.a.mark((function e(){var a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t.location.search.split("=")[1])||o.push("/login"),n=new Y(a),e.prev=3,e.next=6,me.validateAsync({password:i,repass:h});case 6:return r=e.sent,e.next=9,n.updatePassword(r);case 9:c=e.sent,f.a.fire({icon:"success",title:c.msg,text:"You need login again!!",showConfirmButton:!1,allowOutsideClick:!1,backdrop:"rgba(85,85,85, .4)",timerProgressBar:!0,timer:3e3}).then((function(){Y.logoutAll(T.refreshToken).then((function(){B("token"),B("refreshToken")})).catch((function(e){return console.error(e)}))})),e.next=19;break;case 13:if(e.prev=13,e.t0=e.catch(3),!e.t0.response){e.next=18;break}return y(e.t0.response.data.msg),e.abrupt("return");case 18:'"repass" must be [ref:password]'===e.t0.message?y("Password is not matched"):y(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Z.a,{className:a.paper},r.a.createElement(v.a,{variant:"h4",gutterBottom:!0},"Reset your password"),r.a.createElement(E.a,{type:"password",label:"New Password",className:"".concat(a.mb," ").concat(a.input),onChange:function(e){return d(e.target.value)}}),r.a.createElement(E.a,{type:"password",label:"Verify Password",className:"".concat(a.mb," ").concat(a.input),onChange:function(e){return O(e.target.value)}}),r.a.createElement(ie.a,{variant:"extended",color:"primary",className:"".concat(a.mt," ").concat(a.mb," ").concat(a.fab),onClick:P},r.a.createElement(ue.a,{className:a.mr}),"Reset Password"),w&&r.a.createElement(C.a,{severity:"error"},w))},de=a(381),fe=a(372),be=a(369),ge=a(371),he=a(394),ve=a(392),Ee=a(387),Oe=Object(T.a)((function(e){return{paper:{padding:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},fab:{width:300,outline:"none !important"},btn:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},input:{width:300},outlineNone:{outline:"none !important"},mr:{marginRight:e.spacing(1)},ml:{marginLeft:e.spacing(1)},mt:{marginTop:e.spacing(1)},mb:{marginBottom:e.spacing(1)}}})),je=a(89),ke=Object(T.a)((function(e){return{rootNote:{padding:e.spacing(2)},paper:{padding:e.spacing(3)},speedial:{marginBottom:e.spacing(3)},box:{padding:e.spacing(3),borderRadius:10},cardActionArea:{outline:"none !important"},btnProgress:{color:je.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},btnNote:{borderBottomRightRadius:10,borderTopRightRadius:10,border:1,outline:"none !important",height:"100%",padding:"0 30px"},btnWidth:{width:200,outline:"none !important"},btnDelete:{background:"#f50057"},btnFavorite:{}}})),we=function(e){return f.a.fire({icon:e.icon||"info",title:e.title||"",text:e.text||"",showConfirmButton:e.showConfirmButton||!0,showCancelButton:e.showCancelButton||!1,confirmButtonText:e.confirmText||"Ok",cancelButtonText:e.cancelText||"Cancel",backdrop:"rgba(85,85,85, .4)",allowOutsideClick:e.allowOutsideClick||!1})},ye=function(){function e(t){Object(A.a)(this,e),q.defaults.headers.common.Authorization="Bearer ".concat(t)}return Object(I.a)(e,[{key:"createNote",value:function(e){return q.post("/notes/create",e)}},{key:"getAll",value:function(e){return q.get("/notes/get-all",{params:e})}},{key:"updateNote",value:function(e){return q.patch("/notes/update-note",e)}},{key:"updateFavorite",value:function(e){return q.get("/notes/update-favorite",{params:e})}},{key:"deleteNote",value:function(e){return q.get("/notes/delete-note",{params:e})}}],[{key:"getNoteById",value:function(e){return q.get("/notes/note/".concat(e))}}]),e}(),xe=a(60),Ne=a(370),Ce=r.a.memo((function(e){var t=e.styles,a=e.action,n=e.api,o=e.setNotes,c=Object(xe.a)(e,["styles","action","api","setNotes"]),s=Object(l.g)(),i=r.a.useState(!1),d=Object(p.a)(i,2),f=d[0],b=d[1];r.a.useEffect((function(){b(c.isFavorite)}),[c.isFavorite]);var g=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.updateFavorite({isFavorite:!f,url_id:c.url_id});case 3:b((function(e){return!e})),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(w.a,{container:!0,direction:"row",className:t.rootNote},r.a.createElement(w.a,{item:!0,xs:!0},r.a.createElement(ee.a,{className:t.cardActionArea,onClick:function(){return s.push("/note/".concat(c.url_id))}},r.a.createElement(y.a,{boxShadow:5,className:t.box},r.a.createElement(v.a,{variant:"h5",gutterBottom:!0,color:"textSecondary"},c.title),r.a.createElement(v.a,{variant:"caption"},new Date(c.created).toLocaleDateString())))),"favorite"===a&&r.a.createElement(w.a,{item:!0},r.a.createElement(k.a,{variant:"contained",className:t.btnNote,onClick:g},f?r.a.createElement(be.a,{fontSize:"large"}):r.a.createElement(Ne.a,{fontSize:"large"}))),"delete"===a&&r.a.createElement(w.a,{item:!0},r.a.createElement(k.a,{color:"secondary",variant:"contained",className:t.btnNote,onClick:function(){try{we({title:"Do you want to delete it?",text:"You cannot recover it",icon:"question",showConfirmButton:!0,showCancelButton:!0,confirmText:"Yes",cancelText:"No",allowOutsideClick:!0}).then(function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=4;break}return e.next=3,n.deleteNote({url_id:c.url_id});case 3:o((function(e){return e.filter((function(e){return e.url_id!==c.url_id}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){console.error(e,e.response,e.message)}}},r.a.createElement(ge.a,{fontSize:"large"}))))})),Se=function(){var e=ke(),t=D(),a=Object(l.g)(),o=Object(S.a)(),c=Object(p.a)(o,1)[0],s=Object(n.useState)(!1),i=Object(p.a)(s,2),d=i[0],f=i[1],b=Object(n.useState)(""),g=Object(p.a)(b,2),h=g[0],v=g[1],E=Object(n.useState)([]),O=Object(p.a)(E,2),j=O[0],k=O[1],y=Object(n.useState)({_page:1,_limit:5,_totalRows:0}),x=Object(p.a)(y,2),N=x[0],C=x[1],T=new ye(c.token);r.a.useEffect((function(){Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.getAll(N);case 3:t=e.sent,C(t.pagination),k(t.notes),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(a=e.t0).response&&"Not authorized to access this resource"===a.response.data.msg&&we({title:"You need reload the page",icon:"info",showConfirmButton:!0,showCancelButton:!1}).then((function(e){e.isConfirmed&&window.location.reload()}));case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])})))()}),[N._page]);return r.a.createElement(Z.a,{className:e.paper},r.a.createElement(he.a,{ariaLabel:"SpeedDial handle notes",direction:"right",icon:r.a.createElement(ve.a,null),hidden:!1,open:d,className:"".concat(e.speedial," ").concat(t.mt),onOpen:function(){return f(!0)},onClose:function(){return f(!1)}},r.a.createElement(Ee.a,{icon:r.a.createElement(fe.a,null),tooltipTitle:"Add",onClick:function(){sessionStorage.removeItem("content"),a.push("/create/note")}}),r.a.createElement(Ee.a,{icon:r.a.createElement(be.a,null),tooltipTitle:"Favorite",onClick:function(){return v("favorite")}}),r.a.createElement(Ee.a,{icon:r.a.createElement(ge.a,null),tooltipTitle:"Delete",onClick:function(){return v("delete")}})),r.a.createElement(w.a,{container:!0,direction:"column"},j.length&&j.map((function(t){return r.a.createElement(Ce,Object.assign({key:t._id,api:T,styles:e,action:h,setNotes:k},t))})),r.a.createElement(de.a,{component:"div",count:N._totalRows,page:N._page-1,rowsPerPage:N._limit,rowsPerPageOptions:[5,10,25,50,{label:"All",value:N._totalRows}],onChangePage:function(e,t){return C((function(e){return Object(X.a)(Object(X.a)({},e),{},{_page:t+1})}))},onChangeRowsPerPage:function(e){return C((function(t){return Object(X.a)(Object(X.a)({},t),{},{_page:1,_limit:e.target.value})}))}})))},Te=a(139),Be=a.n(Te),Pe=a(140),_e="https://vnotepad.netlify.app",De=a(390),Ae=a(310),Ie=a(376),Re=a(357),We=a(377),Fe=a(378),Le=a(388),ze=a(373),qe=a(374),Ye=a(395),He=a(384),Ve=a(375),Je=r.a.memo((function(e){var t=e.open,a=e.permission,n=e.setPermission,o=e.handleClose,c=r.a.useState(""),s=Object(p.a)(c,2),l=s[0],i=s[1],u=function(){"password"!==a.access||a.protected?(i(""),o()):i("Your need enter password")};return r.a.createElement(Le.a,{open:t,onClose:u},r.a.createElement(ze.a,null,"Protect your note"),r.a.createElement(qe.a,null,r.a.createElement(Ye.a,{value:a.access,onChange:function(e){return n((function(t){return Object(X.a)(Object(X.a)({},t),{},{access:e.target.value})}))}},r.a.createElement(O.a,{label:"Public Note",control:r.a.createElement(He.a,{value:"public"})}),r.a.createElement(O.a,{label:"Private Note",control:r.a.createElement(He.a,{value:"private"})}),r.a.createElement(O.a,{label:"Protect with password",control:r.a.createElement(He.a,{value:"password"})})),r.a.createElement(E.a,{variant:"standard",error:!!l,helperText:l,disabled:"password"!==a.access,value:a.protected,onChange:function(e){e.persist(),n((function(t){return Object(X.a)(Object(X.a)({},t),{},{protected:e.target.value})}))}})),r.a.createElement(Ve.a,null,r.a.createElement(k.a,{onClick:u},"Close")))})),Ue=r.a.memo((function(e){var t=e.notify,a=e.handleClose;return r.a.createElement(ne.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!t.message,autoHideDuration:5e3,onClose:a},r.a.createElement(C.a,{severity:t.type?t.type:"info"},t.message))})),Ke={height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |              alignleft aligncenter alignright alignjustify |              bullist numlist outdent indent | removeformat | help"},Me=function(){var e=ke(),t=Oe(),a=Object(l.g)(),o=Object(l.h)().url_id,c=Object(n.useContext)(ce),i=Object(p.a)(c,1)[0],d=Object(S.a)(),f=Object(p.a)(d,1)[0],b=Object(n.useState)(!0),g=Object(p.a)(b,2),h=g[0],O=g[1],j=Object(n.useState)(!1),k=Object(p.a)(j,2),y=k[0],x=k[1],N=Object(n.useState)(!1),C=Object(p.a)(N,2),T=C[0],B=C[1],P=Object(n.useState)(""),_=Object(p.a)(P,2),D=_[0],A=_[1],I=Object(n.useState)(""),R=Object(p.a)(I,2),W=R[0],F=R[1],L=Object(n.useState)(""),z=Object(p.a)(L,2),q=z[0],Y=z[1],H=Object(n.useState)(null),V=Object(p.a)(H,2),J=V[0],U=V[1],K=Object(n.useState)({type:"",message:""}),M=Object(p.a)(K,2),G=M[0],Q=M[1],X=Object(n.useState)({access:"public",protected:""}),$=Object(p.a)(X,2),ee=$[0],te=$[1],ae=new ye(f.token);Object(n.useEffect)((function(){o&&Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye.getNoteById(o);case 2:if((t=e.sent).owner){e.next=5;break}return e.abrupt("return",a.push("/create/note"));case 5:A(t.title),F(t.content),Y("".concat(_e,"/note/").concat(t.url_id)),te({access:t.access,protected:t.protected}),sessionStorage.setItem("content",t.content);case 10:case"end":return e.stop()}}),e)})))()}),[o]),Object(n.useEffect)((function(){var e=sessionStorage.getItem("content");F(e)}),[h]);var ne=function(){var e=Object(m.a)(u.a.mark((function e(){var t,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B(!0),e.prev=1,t={url_id:o||Be.a.generate(),title:D,content:W,access:ee.access,owner:i.email,protected:"password"===ee.access?ee.protected:""},!o){e.next=10;break}return e.next=6,ae.updateNote(t);case 6:n=e.sent,Q({type:n.status?"success":"warning",message:n.msg}),e.next=14;break;case 10:return e.next=12,ae.createNote(t);case 12:r=e.sent,a.push("/note/".concat(r.url_id));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),e.t0.response?Q({type:"error",message:e.t0.response.data.msg}):Q({type:"error",message:e.t0.message});case 19:B(!1);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(Z.a,{className:e.paper},r.a.createElement(De.a,{className:t.mb},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/notes"},"Notes"),r.a.createElement(v.a,{color:"textPrimary"},"note")),r.a.createElement(E.a,{label:"Enter your title for note",variant:"filled",fullWidth:!0,className:t.mb,value:D,onChange:function(e){return A(e.target.value)}}),h?r.a.createElement(Ae.a,{style:{width:"100%",height:500},rows:1e3,defaultValue:W,onChange:function(e){F(e.target.value),sessionStorage.setItem("content",e.target.value)}}):r.a.createElement(Pe.a,{apiKey:"mnhe8mkhfadk24d7pbtvd880370fc3jyxr34fxx0csiks0gt",init:Ke,className:t.mb,value:W,onEditorChange:function(e,t){F(e),sessionStorage.setItem("content",e)}}),r.a.createElement(w.a,{container:!0,direction:"row",className:t.mt},r.a.createElement(ie.a,{variant:"extended",color:"primary",className:"".concat(e.btnWidth," ").concat(t.mr),disabled:T,onClick:ne},T?r.a.createElement(Ie.a,{size:24,className:t.mr}):r.a.createElement(We.a,{className:t.mr}),"Save"),r.a.createElement(ie.a,{variant:"extended",color:"primary",className:"".concat(e.btnWidth," ").concat(t.mr),onClick:function(){return x(!0)}},r.a.createElement(Fe.a,{className:t.mr}),"Protect"),r.a.createElement(ie.a,{variant:"extended",color:"primary",className:"".concat(e.btnWidth," ").concat(t.mr),onClick:function(){return O((function(e){return!e}))}},h?"Disable Rich Text Box":"Enable Rich Text Box"),r.a.createElement(ie.a,{variant:"extended",color:"primary",className:"".concat(e.btnWidth),onClick:function(e){return U(e.currentTarget)}},"Share Link")),r.a.createElement(Re.a,{open:!!J,anchorEl:J,anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},onClose:function(){return U(null)}},r.a.createElement(v.a,{style:{padding:15}},r.a.createElement("a",{href:q,target:"_blank",rel:"noopener noreferrer"},q))),r.a.createElement(Je,{open:y,permission:ee,setPermission:te,handleClose:function(){return x(!1)}}),r.a.createElement(Ue,{notify:G,handleClose:function(){return Q({type:"",message:""})}}))},Ge=function(e){var t=e.component,a=Object(xe.a)(e,["component"]),n=Object(S.a)(),o=Object(p.a)(n,1)[0];return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return G(o)?r.a.createElement(t,e):r.a.createElement(l.a,{to:"/login"})}}))},Qe=function(e){var t=e.component,a=Object(xe.a)(e,["component"]),n=Object(S.a)(),o=Object(p.a)(n,1)[0];return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return G(o)?r.a.createElement(l.a,{to:"/profile"}):r.a.createElement(t,e)}}))},Xe=function(){return r.a.createElement(se,null,r.a.createElement(b.a,null,r.a.createElement(s.a,null,r.a.createElement(Q,null),r.a.createElement(l.d,null,r.a.createElement(Qe,{path:"/login",component:U}),r.a.createElement(Qe,{path:"/register",component:M}),r.a.createElement(Ge,{path:"/profile",component:le}),r.a.createElement(Ge,{path:"/reset-password",component:pe}),r.a.createElement(Ge,{path:"/notes",component:Se}),r.a.createElement(Ge,{path:"/note/:url_id",component:Me}),r.a.createElement(Ge,{path:"/create/note",component:Me})))))},Ze=a(379);c.a.render(r.a.createElement(Ze.a,null,r.a.createElement(Xe,null)),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.8169d503.chunk.js.map