import{a as e}from"./index.0d11574f.js";import{j as c,z as u,k as i,l as m,H as _,B as t,I as d,F as s,M as h,A as f}from"./framework.b3e0f3f4.js";const C=s("Show message"),k=s("VNode"),S=c({setup(p){const o=()=>{e("this is a message.")},r=()=>{e({message:h("p",null,[h("span",null,"Message can be "),h("i",{style:"color: teal"},"VNode")])})};return(l,n)=>{const g=u("el-button");return i(),m(d,null,[_(g,{plain:!0,onClick:o},{default:t(()=>[C]),_:1}),_(g,{plain:!0,onClick:r},{default:t(()=>[k]),_:1})],64)}}});var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const w=s("Centered text"),y=c({setup(p){const o=()=>{e({showClose:!0,message:"Centered text",center:!0})};return(r,l)=>{const n=u("el-button");return i(),f(n,{plain:"",onClick:o},{default:t(()=>[w]),_:1})}}});var A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:y});const $=s("message"),M=s("success"),T=s("warning"),x=s("error"),j=c({setup(p){const o=()=>{e({showClose:!0,message:"This is a message."})},r=()=>{e({showClose:!0,message:"Congrats, this is a success message.",type:"success"})},l=()=>{e({showClose:!0,message:"Warning, this is a warning message.",type:"warning"})},n=()=>{e({showClose:!0,message:"Oops, this is a error message.",type:"error"})};return(g,b)=>{const a=u("el-button");return i(),m(d,null,[_(a,{plain:!0,onClick:o},{default:t(()=>[$]),_:1}),_(a,{plain:!0,onClick:r},{default:t(()=>[M]),_:1}),_(a,{plain:!0,onClick:l},{default:t(()=>[T]),_:1}),_(a,{plain:!0,onClick:n},{default:t(()=>[x]),_:1})],64)}}});var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const O=s("success"),v=s("warning"),z=s("message"),H=s("error"),V=c({setup(p){const o=()=>{e("this is a message.")},r=()=>{e({message:"Congrats, this is a success message.",type:"success"})},l=()=>{e({message:"Warning, this is a warning message.",type:"warning"})},n=()=>{e.error("Oops, this is a error message.")};return(g,b)=>{const a=u("el-button");return i(),m(d,null,[_(a,{plain:!0,onClick:r},{default:t(()=>[O]),_:1}),_(a,{plain:!0,onClick:l},{default:t(()=>[v]),_:1}),_(a,{plain:!0,onClick:o},{default:t(()=>[z]),_:1}),_(a,{plain:!0,onClick:n},{default:t(()=>[H]),_:1})],64)}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V});const B=s("Show message"),L=c({setup(p){const o=()=>{e({message:"this is a message.",grouping:!0,type:"success"})};return(r,l)=>{const n=u("el-button");return i(),f(n,{plain:!0,onClick:o},{default:t(()=>[B]),_:1})}}});var D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:L});const N=s("Use HTML String"),E=c({setup(p){const o=()=>{e({dangerouslyUseHTMLString:!0,message:"<strong>This is <i>HTML</i> string</strong>"})};return(r,l)=>{const n=u("el-button");return i(),f(n,{plain:!0,onClick:o},{default:t(()=>[N]),_:1})}}});var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:E});export{W as _,A as a,I as b,q as c,D as d,G as e};