"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[676],{1676:(e,a,r)=>{r.r(a),r.d(a,{default:()=>E});var n=r(1319),t=r(4647),s=r(9281),i=r(4019),l=r(5043),o=r(6545);const d={name:"",email:"",message:"",numero:""};function m(e){let a={};return e.name||(a.name="Nome \xe9 obrigat\xf3rio"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Formato inv\xe1lido do endere\xe7o de email"):a.email="Endere\xe7o de email \xe9 obrigat\xf3rio",e.message||(a.message="Mensagem \xe9 obrigat\xf3ria"),e.numero||(a.message="N\xfamero \xe9 obrigat\xf3rio"),a}var c=r(5639),h=r(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,g=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var u=r(579);const y=(0,s.C)()((e=>{let{title:a,content:r,t:n}=e;return(0,u.jsxs)(x,{children:[(0,u.jsx)("h6",{children:n(a)}),(0,u.jsx)(g,{children:(0,u.jsx)(p,{children:n(r)})})]})})),j=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,A=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,C=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,f=(0,s.C)()((e=>{let{name:a,placeholder:r,onChange:n,t:t}=e;return(0,u.jsxs)(j,{children:[(0,u.jsx)(C,{htmlFor:a,children:t(a)}),(0,u.jsx)(v,{placeholder:t(r),name:a,id:a,onChange:n})]})})),w=(0,s.C)()((e=>{let{name:a,placeholder:r,onChange:n,t:t}=e;return(0,u.jsxs)(b,{children:[(0,u.jsx)(C,{htmlFor:a,children:t(a)}),(0,u.jsx)(A,{placeholder:t(r),id:a,name:a,onChange:n})]})})),S=(0,h.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,h.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,O=(0,h.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,z=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,E=(0,s.C)()((e=>{let{title:a,content:r,id:s,t:h}=e;const{values:p,errors:x,handleChange:g,handleSubmit:j}=(e=>{const[a,r]=(0,l.useState)({values:{...d},errors:{...d}});return{handleChange:e=>{e.persist();const{name:a,value:n}=e.target;r((e=>({...e,values:{...e.values,[a]:n},errors:{...e.errors,[a]:""}})))},handleSubmit:async n=>{n.preventDefault();const t=a.values,s=e(t);r((e=>({...e,errors:s})));try{Object.values(s).every((e=>""===e))&&((await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(n.target.reset(),r((()=>({values:{...d},errors:{...d}}))),o.A.success({message:"Success",description:"Your message has been sent!"})):o.A.error({message:"Error",description:"There was an error sending your message, please try again later."}))}catch(i){o.A.error({message:"Error",description:"Failed to submit form. Please try again later."})}},values:a.values,errors:a.errors}})(m),v=e=>{let{type:a}=e;const r=x[a];return(0,u.jsx)(O,{children:r})};return(0,u.jsx)(S,{id:s,children:(0,u.jsxs)(n.A,{justify:"space-between",align:"middle",children:[(0,u.jsx)(t.A,{lg:12,md:11,sm:24,xs:24,children:(0,u.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,u.jsx)(y,{title:a,content:r})})}),(0,u.jsx)(t.A,{lg:12,md:12,sm:24,xs:24,children:(0,u.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,u.jsxs)(k,{autoComplete:"off",onSubmit:j,children:[(0,u.jsxs)(t.A,{span:24,children:[(0,u.jsx)(f,{type:"text",name:"name",placeholder:"Seu nome",value:p.name||"",onChange:g}),(0,u.jsx)(v,{type:"name"})]}),(0,u.jsxs)(t.A,{span:24,children:[(0,u.jsx)(f,{type:"text",name:"email",placeholder:"Seu E-mail",value:p.email||"",onChange:g}),(0,u.jsx)(v,{type:"email"})]}),(0,u.jsxs)(t.A,{span:24,children:[(0,u.jsx)(f,{type:"text",name:"WhatsApp",placeholder:"N\xfamero de Contato",value:p.numero||"",onChange:g}),(0,u.jsx)(v,{type:"email"})]}),(0,u.jsxs)(t.A,{span:24,children:[(0,u.jsx)(w,{placeholder:"Descreva Sua Situa\xe7\xe3o",value:p.message||"",name:"Mensagem",onChange:g}),(0,u.jsx)(v,{type:"message"})]}),(0,u.jsx)(z,{children:(0,u.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.3f1873f9.chunk.js.map