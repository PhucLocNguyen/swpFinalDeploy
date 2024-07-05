import{r as d,j as e,b as Q,a as X}from"./index-BJo3Wz4H.js";import{d as Z}from"./ArrowDropDown-C-CRM2LC.js";import{d as F,M,a as ee}from"./Close-CK-eaitj.js";import{A as $,a as re}from"./ApiUpdateRequirement-C-UdA4-A.js";import{f as ae}from"./FetchApiDesign-BR4Nlola.js";import{a as te}from"./instance-CBuQ1cLn.js";import{a as se}from"./AxiosConfigHeader-CNHt4vQr.js";import{D as q,a as V,b as H,c as J,A as _,d as oe}from"./ApiChangeWarranty-Crf05KEa.js";import{s as K}from"./styled-CJA13E1M.js";import{m as de}from"./motion-DGG22rhv.js";import{F as le,S as ie,a as ne,T as O}from"./TextField-DwvuUxNR.js";import{B as N}from"./Button-BuZ00tsX.js";import{I as L}from"./IconButton-v_TV2BUs.js";import{T as b}from"./Typography-B95WPqnO.js";import{A as ce,a as pe,b as me}from"./AccordionSummary-qBp1brCd.js";import"./createSvgIcon-ho_PURcI.js";import"./createSvgIcon-BuLzkb-N.js";import"./useId-DYJmAM81.js";import"./useIsFocusVisible-BCA3twK2.js";import"./useControlled-Bs3ZyH6M.js";import"./ButtonBase-Bpx5dE4Z.js";import"./mergeSlotProps-CKWnQtuB.js";import"./Grow-Bq5RsNA9.js";import"./index-vBsn1U4B.js";const xe=async()=>{try{return(await te.get("/WarrantyCard",se)).data}catch(n){console.log(">>> Api Get All Type Warranty Error : ",n)}};function he({setIsOpenPopup:n,requirementId:f}){const[t,S]=d.useState([]),[p,W]=d.useState({}),[j,w]=d.useState(),[x,y]=d.useState(!1),k=K(q)(({theme:a})=>({"& .MuiDialogContent-root":{padding:a.spacing(2)},"& .MuiDialogActions-root":{padding:a.spacing(1)}})),[l,I]=d.useState({warrantyCardId:"",requirementId:f,dateCreated:"",expirationDate:""}),[o,P]=d.useState({warrantyCardId:"",requirementId:"",dateCreated:"",expirationDate:""}),z=async()=>{const a=await xe(),s=await T();console.log(">> ",a),console.log(">>> ",s);let i=B(a,s);S(i)},D=async()=>{const a=await $(f);return W(a),w(a==null?void 0:a.createdDate),a},T=async()=>await _(f),B=(a,s)=>{let i=a;return i=i.filter(c=>!s.some(r=>(r==null?void 0:r.warrantyCardId)==(c==null?void 0:c.warrantyCardId))),console.log(">>>",i),i};d.useEffect(()=>{z(),D()},[]);const u=(a,s)=>new Date(a)>=new Date(s),h=a=>{const{name:s,value:i}=a.target;let c="",r=!0;try{s==="dateCreated"?(c=`Date create must be greater than ${j}`,u(i,j)&&(r=!1)):s==="expirationDate"?(c=`Date create must be greater than ${l.dateCreated}`,u(i,l.dateCreated)&&(r=!1)):s==="warrantyCardId"&&(c="This field cannot be blank",i!==""&&(r=!1))}catch{r=!0}I({...l,[s]:i}),P({...o,[s]:r?c:""})},v=()=>{let a=!0;Object.keys(o).forEach(s=>{o[s]!==""&&(a=!1)}),Object.keys(l).forEach(s=>{(s=="warrantyCardId"||s=="dateCreated"||s=="expirationDate")&&l[s]===""&&(a=!1)}),a&&y(!0)},A=async a=>{a.stopPropagation(),await oe({formData:l}),y(!1),n(!1)},g=a=>{a.stopPropagation(),y(!1)};return console.log(l),console.log(t),e.jsx(e.Fragment,{children:e.jsxs("div",{onClick:()=>n(!1),className:"fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center",children:[e.jsxs(de.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,transition:{duration:.5}},onClick:a=>a.stopPropagation(),className:"bg-[#fff] w-[45rem] rounded-[10px] min-h-[300px]",children:[e.jsxs("div",{className:"relative text-center border-b-[1px] border-solid border-[#333] px-[1rem] py-[1rem] ",children:[e.jsx("h1",{className:"font-bold leading-5 text-[1.5rem]",children:"Add Warranty"}),e.jsx("div",{onClick:()=>n(!1),className:"absolute top-[10px] right-[10px] cursor-pointer",children:e.jsx(F,{})})]}),e.jsxs("div",{className:"px-[1rem] py-[1rem]",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"w-[100%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Type Warranty"}),e.jsxs(le,{sx:{minWidth:120,width:"100%",minHeight:"4rem"},size:"small",error:!!o.warrantyCardId,children:[e.jsxs(ie,{value:l.warrantyCardId,name:"warrantyCardId",onChange:h,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[e.jsx(M,{value:"",children:e.jsx("em",{children:"None"})}),t==null?void 0:t.map((a,s)=>e.jsx(M,{value:a==null?void 0:a.warrantyCardId,children:a==null?void 0:a.title},s))]}),o.warrantyCardId&&e.jsx(ne,{children:o.warrantyCardId})]})]})}),e.jsxs("div",{className:"flex items-center justify-between mt-[1rem]",children:[e.jsx("div",{className:"w-[47%]",children:e.jsx(O,{id:"date",label:"Date Created",name:"dateCreated",value:l.dateCreated,onChange:h,type:"date",size:"small",InputLabelProps:{shrink:!0,style:{fontWeight:"bold"}},sx:{width:"100%",minHeight:"5rem"},error:!!o.dateCreated,helperText:o==null?void 0:o.dateCreated})}),e.jsx("div",{className:"w-[47%]",children:e.jsx(O,{id:"date",label:"Expiration Date",name:"expirationDate",value:l.expirationDate,onChange:h,type:"date",size:"small",InputLabelProps:{shrink:!0,style:{fontWeight:"bold"}},sx:{width:"100%",minHeight:"5rem"},disabled:!l.dateCreated,error:!!o.expirationDate,helperText:o==null?void 0:o.expirationDate})})]}),e.jsx("div",{className:"mt-[1rem]",children:e.jsxs(N,{onClick:v,variant:"contained",sx:{minWidth:"6rem"},children:[e.jsx(ee,{fontSize:"small",sx:{marginRight:"8px"}}),"Add"]})})]})]}),e.jsxs(k,{onClose:g,"aria-labelledby":"customized-dialog-title",open:x,children:[e.jsx(V,{sx:{m:0,p:2},id:"customized-dialog-title",onClick:a=>a.stopPropagation(),children:"Warranty Confirmation"}),e.jsx(L,{"aria-label":"close",onClick:g,sx:{position:"absolute",right:8,top:8,color:a=>a.palette.grey[500]},children:e.jsx(F,{})}),e.jsx(H,{dividers:!0,onClick:a=>a.stopPropagation(),children:e.jsx(b,{gutterBottom:!0,children:"After adding warranty to the product, you will not be able to change any information. Please confirm the information before clicking the save changes button."})}),e.jsx(J,{onClick:a=>a.stopPropagation(),children:e.jsx(N,{autoFocus:!0,onClick:A,children:"Save changes"})})]})]})})}function Me(){var u,h,v,A,g,a,s,i,c;const{id:n}=Q(),f=X(),[t,S]=d.useState(),[p,W]=d.useState(),[j,w]=d.useState(!1),[x,y]=d.useState(),[k,l]=d.useState(!1);d.useState({});const I=async()=>{const r=await $(n);W(r);const m=r==null?void 0:r.designId,C=await ae(m);S(C)},o=async()=>{const r=await _(n);y(r)};d.useEffect(()=>{I()},[]),d.useEffect(()=>{o()},[j]);const P=K(q)(({theme:r})=>({"& .MuiDialogContent-root":{padding:r.spacing(2)},"& .MuiDialogActions-root":{padding:r.spacing(1)}})),z=r=>{r.stopPropagation(),l(!0)},D=r=>{r.stopPropagation(),l(!1)},T=async(r,m)=>{await re({data:r,id:m})},B=()=>{let r={...p,status:"12"};T(r,n),f("/staff/warranty",{replace:!0}),window.location.reload()};return console.log(x),e.jsxs(e.Fragment,{children:[(p==null?void 0:p.status)==11?e.jsxs("div",{className:"py-[3rem] px-[3rem] min-h-[100vh] bg-[#f7f9fc]",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-x-[1.5rem]",children:[e.jsx("div",{className:"col-span-2 ",children:e.jsxs("div",{className:"py-[2.5rem] px-[2.5rem] rounded-[30px] border-[1px] border-[#e9eaf3] border-solid bg-[white]",children:[e.jsx("div",{children:e.jsxs("h2",{className:"text-[32px] font-bold ",children:["Order #",n]})}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[22px] mb-[1rem] font-bold leading-[1.273em]",children:t==null?void 0:t.designName}),e.jsxs("div",{className:"flex ",children:[e.jsx("img",{className:"w-[15rem] h-[15rem]",src:t==null?void 0:t.image}),e.jsx("p",{className:"ml-[1rem] text-[#6f7182]",children:t==null?void 0:t.description})]})]}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[32px] mb-[1rem] font-bold leading-[1.273em]",children:"Customer Requirement"}),e.jsx("h2",{className:"text-[20px] mb-[1rem] font-bold leading-[1.273em]",children:"General Information"}),e.jsxs("table",{className:"table-fixed w-[100%] font-medium overflow-hidden border-collapse border-[1px] border-solid border-[#000]",children:[e.jsx("thead",{className:"bg-[#eccc68] border-[1px] border-solid border-[#000]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Jewelry Type"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Jewelry Size"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Jewelry Material"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(u=t==null?void 0:t.typeOfJewellery)==null?void 0:u.name}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:p==null?void 0:p.size}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(h=t==null?void 0:t.material)==null?void 0:h.name})]})})]}),e.jsx("div",{className:"my-[1rem]"}),e.jsx("h2",{className:"text-[20px] mb-[1rem] font-bold leading-[1.273em]",children:"Master Gemstone"}),e.jsxs("table",{className:"table-fixed w-[100%] font-medium overflow-hidden border-collapse border-[1px] border-solid border-[#000]",children:[e.jsx("thead",{className:"bg-[#eccc68] border-[1px] border-solid border-[#000]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Kind"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Size"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Weight"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Shape"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(v=t==null?void 0:t.masterGemstone)==null?void 0:v.kind}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(A=t==null?void 0:t.masterGemstone)==null?void 0:A.size}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(g=t==null?void 0:t.masterGemstone)==null?void 0:g.weight}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(a=t==null?void 0:t.masterGemstone)==null?void 0:a.shape})]})})]}),e.jsx("div",{className:"my-[1rem]"}),e.jsx("h2",{className:"text-[20px] mb-[1rem] font-bold leading-[1.273em]",children:"Stones"}),e.jsxs("table",{className:"table-fixed w-[100%] font-medium overflow-hidden border-collapse border-[1px] border-solid border-[#000]",children:[e.jsx("thead",{className:"bg-[#eccc68] border-[1px] border-solid border-[#000]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Kind"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Size"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Quantity"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(s=t==null?void 0:t.stone)==null?void 0:s.kind}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(i=t==null?void 0:t.stone)==null?void 0:i.size}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(c=t==null?void 0:t.stone)==null?void 0:c.quantity})]})})]})]})]})}),e.jsxs("div",{className:"sticky top-[24px]  py-[2.5rem] px-[2rem] rounded-[30px] border-[1px] border-[#e9eaf3] border-solid bg-[white]",children:[e.jsxs("div",{className:"flex item justify-between items-center",children:[e.jsx("h2",{className:"text-[22px] font-bold leading-[1.273em]",children:"Warranty"}),e.jsx(N,{onClick:()=>w(!0),size:"small",variant:"contained",sx:{minWidth:"6rem"},children:"Add Warranty"})]}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),x==null?void 0:x.map((r,m)=>{var R,G;let C=new Date(r==null?void 0:r.dateCreated),E=new Date(r==null?void 0:r.expirationDate),U=`${C.getFullYear()}-${String(C.getMonth()+1).padStart(2,"0")}-${String(C.getDate()).padStart(2,"0")}`,Y=`${E.getFullYear()}-${String(E.getMonth()+1).padStart(2,"0")}-${String(E.getDate()).padStart(2,"0")}`;return e.jsxs(ce,{children:[e.jsx(pe,{expandIcon:e.jsx(Z,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(b,{sx:{fontWeight:"bold"},children:(R=r==null?void 0:r.warrantyCard)==null?void 0:R.title})}),e.jsxs(me,{children:[e.jsx(b,{children:(G=r==null?void 0:r.warrantyCard)==null?void 0:G.description}),e.jsxs(b,{children:["Date Created: ",U]}),e.jsxs(b,{children:["Expiration Date: ",Y]})]})]},m)}),e.jsx("div",{className:"mt-[2rem]",children:e.jsx(N,{onClick:z,size:"small",variant:"contained",sx:{minWidth:"6rem"},children:"Warranty Complete"})})]})]}),e.jsxs(P,{onClose:D,"aria-labelledby":"customized-dialog-title",open:k,children:[e.jsx(V,{sx:{m:0,p:2},id:"customized-dialog-title",onClick:r=>r.stopPropagation(),children:"Confirmed completion"}),e.jsx(L,{"aria-label":"close",onClick:D,sx:{position:"absolute",right:8,top:8,color:r=>r.palette.grey[500]},children:e.jsx(F,{})}),e.jsx(H,{dividers:!0,onClick:r=>r.stopPropagation(),children:e.jsx(b,{gutterBottom:!0,children:"After clicking the complete button, the order will not be able to add any warranty."})}),e.jsx(J,{onClick:r=>r.stopPropagation(),children:e.jsx(N,{onClick:B,autoFocus:!0,children:"Complete"})})]})]}):e.jsx("div",{}),j&&e.jsx(he,{setIsOpenPopup:w,requirementId:n})]})}export{Me as default};
