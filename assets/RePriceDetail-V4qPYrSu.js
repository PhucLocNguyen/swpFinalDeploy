import{a as T,b as W,r as i,j as e}from"./index-BJo3Wz4H.js";import{d as F}from"./ArrowDropDown-C-CRM2LC.js";import{A as E,a as G}from"./ApiUpdateRequirement-C-UdA4-A.js";import{f as k}from"./FetchApiDesign-BR4Nlola.js";import{C as B}from"./Chip-DSpS3UJ-.js";import{A as M,a as S,b as A}from"./AccordionSummary-qBp1brCd.js";import{T as c}from"./Typography-B95WPqnO.js";import{T as O}from"./TextField-DwvuUxNR.js";import{B as J}from"./Button-BuZ00tsX.js";import"./styled-CJA13E1M.js";import"./createSvgIcon-ho_PURcI.js";import"./createSvgIcon-BuLzkb-N.js";import"./useId-DYJmAM81.js";import"./useIsFocusVisible-BCA3twK2.js";import"./useControlled-Bs3ZyH6M.js";import"./instance-CBuQ1cLn.js";import"./AxiosConfigHeader-CNHt4vQr.js";import"./ButtonBase-Bpx5dE4Z.js";import"./mergeSlotProps-CKWnQtuB.js";import"./index-vBsn1U4B.js";import"./Grow-Bq5RsNA9.js";function ie(){var b,j,f,N,y,g,u,v,w;const C=T(),{id:x}=W(),[s,D]=i.useState(),[r,z]=i.useState(),[m,p]=i.useState({weightOfMaterial:"",machiningFee:""}),[d,I]=i.useState({weightOfMaterial:"",machiningFee:""});i.useEffect(()=>{(async()=>{const a=await E(x);D(a),p();const o=a==null?void 0:a.designId,l=await k(o);z(l)})()},[]);const h=t=>{const{name:a,value:o}=t.target;let l=!0;try{const n=Number(o);(n>0&&!isNaN(n)||o==="")&&(console.log("check"),l=!1)}catch{l=!0}console.log(l),p({...m,[a]:o}),I({...d,[a]:l?"Input must be number greater than 0":""})},R=()=>{let t=!0;if(Object.keys(d).forEach(a=>{d[a]!==""&&(t=!1)}),Object.keys(m).forEach(a=>{(a=="weightOfMaterial"||a=="machiningFee")&&m[a]===""&&(t=!1)}),t){const a={...s,...m,status:"3"};(async()=>{await G({data:a,id:x})})(),C("/manager/re-price-quote",{replace:!0}),console.log("Upload price quote success")}};return e.jsx(e.Fragment,{children:(s==null?void 0:s.status)==-3?e.jsx("div",{className:"py-[3rem] px-[3rem] min-h-[100vh] bg-[#f7f9fc]",children:e.jsxs("div",{className:"grid grid-cols-3 gap-x-[1.5rem]",children:[e.jsxs("div",{className:"col-span-2 ",children:[e.jsxs("div",{className:"py-[2.5rem] px-[2.5rem] rounded-[30px] border-[1px] border-[#e9eaf3] border-solid bg-[white]",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-[32px] font-bold ",children:["Order #",x]}),e.jsx(B,{label:"Re-price quote",color:"warning",variant:"outlined",sx:{fontWeight:700}})]}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[22px] mb-[1rem] font-bold leading-[1.273em]",children:r==null?void 0:r.designName}),e.jsxs("div",{className:"flex ",children:[e.jsx("img",{className:"w-[15rem] h-[15rem]",src:r==null?void 0:r.image}),e.jsx("p",{className:"ml-[1rem] text-[#6f7182]",children:r==null?void 0:r.description})]})]}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[32px] mb-[1rem] font-bold leading-[1.273em]",children:"Customer Requirement"}),e.jsx("h2",{className:"text-[20px] mb-[1rem] font-bold leading-[1.273em]",children:"General Information"}),e.jsxs("table",{className:"table-fixed w-[100%] font-medium overflow-hidden border-collapse border-[1px] border-solid border-[#000]",children:[e.jsx("thead",{className:"bg-[#eccc68] border-[1px] border-solid border-[#000]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Jewelry Type"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Jewelry Size"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Jewelry Material"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(b=r==null?void 0:r.typeOfJewellery)==null?void 0:b.name}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:s==null?void 0:s.size}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(j=r==null?void 0:r.material)==null?void 0:j.name})]})})]}),e.jsx("div",{className:"my-[1rem]"}),e.jsx("h2",{className:"text-[20px] mb-[1rem] font-bold leading-[1.273em]",children:"Master Gemstone"}),e.jsxs("table",{className:"table-fixed w-[100%] font-medium overflow-hidden border-collapse border-[1px] border-solid border-[#000]",children:[e.jsx("thead",{className:"bg-[#eccc68] border-[1px] border-solid border-[#000]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Kind"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Size"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Weight"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Shape"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(f=r==null?void 0:r.masterGemstone)==null?void 0:f.kind}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(N=r==null?void 0:r.masterGemstone)==null?void 0:N.size}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(y=r==null?void 0:r.masterGemstone)==null?void 0:y.weight}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(g=r==null?void 0:r.masterGemstone)==null?void 0:g.shape})]})})]}),e.jsx("div",{className:"my-[1rem]"}),e.jsx("h2",{className:"text-[20px] mb-[1rem] font-bold leading-[1.273em]",children:"Stones"}),e.jsxs("table",{className:"table-fixed w-[100%] font-medium overflow-hidden border-collapse border-[1px] border-solid border-[#000]",children:[e.jsx("thead",{className:"bg-[#eccc68] border-[1px] border-solid border-[#000]",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Kind"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Size"}),e.jsx("th",{className:"px-[1rem] py-[0.5rem] text-left border-[1px] border-solid border-[#000]",children:"Quantity"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(u=r==null?void 0:r.stone)==null?void 0:u.kind}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(v=r==null?void 0:r.stone)==null?void 0:v.size}),e.jsx("td",{className:"px-[1rem] py-[1rem] border-[1px] border-solid border-[#000]",children:(w=r==null?void 0:r.stone)==null?void 0:w.quantity})]})})]})]})]}),e.jsxs("div",{className:" my-[1.5rem] py-[2.5rem] px-[2.5rem] rounded-[30px] border-[1px] border-[#e9eaf3] border-solid bg-[white]",children:[e.jsx("h2",{className:"text-[22px] mb-[1rem] font-bold leading-[1.273em]",children:"Customer Note"}),e.jsx("p",{className:"text-[#6f7182]",children:s==null?void 0:s.customerNote})]}),e.jsxs("div",{className:"py-[2.5rem] px-[2.5rem] rounded-[30px] border-[1px] border-[#e9eaf3] border-solid bg-[white]",children:[e.jsx("h2",{className:"text-[22px] mb-[1rem] font-bold leading-[1.273em]",children:"Sell Staff Note"}),e.jsx("p",{className:"text-[#6f7182]",children:s==null?void 0:s.staffNote})]})]}),e.jsxs("div",{className:"sticky top-[24px]  py-[2.5rem] px-[2rem] rounded-[30px] border-[1px] border-[#e9eaf3] border-solid bg-[white]",children:[e.jsx("h2",{className:"text-[22px] mb-[1rem] font-bold leading-[1.273em]",children:"Price Quotation"}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),e.jsxs(M,{children:[e.jsx(S,{expandIcon:e.jsx(F,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(c,{sx:{fontWeight:"bold"},children:"Weight of material"})}),e.jsx(A,{children:e.jsx(c,{children:s==null?void 0:s.weightOfMaterial})})]}),e.jsxs(M,{children:[e.jsx(S,{expandIcon:e.jsx(F,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e.jsx(c,{sx:{fontWeight:"bold"},children:"Machining fee"})}),e.jsx(A,{children:e.jsx(c,{children:s==null?void 0:s.machiningFee})})]}),e.jsx("div",{className:"h-[1.5px] bg-[#e9eaf3] my-[1.5rem]"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-[1rem] font-medium pb-[3px]",children:"Material Weight (g)"}),e.jsx("div",{children:e.jsx(O,{name:"weightOfMaterial",inputProps:{inputMode:"numeric"},onChange:h,error:!!d.weightOfMaterial,helperText:d.weightOfMaterial,variant:"outlined",style:{width:"100%"},size:"small"})}),e.jsx("h2",{className:"mt-[1rem] text-[1rem] font-medium pb-[3px]",children:"Machining Fee  (VND)"}),e.jsx("div",{children:e.jsx(O,{name:"machiningFee",onChange:h,error:!!d.machiningFee,helperText:d.machiningFee,variant:"outlined",style:{width:"100%"},size:"small"})}),e.jsx("div",{className:"my-[1rem]"})]}),e.jsx("div",{className:"mt-[1rem]",children:e.jsx(J,{onClick:R,variant:"contained",sx:{minWidth:"6rem"},children:"Add"})})]})]})}):e.jsx("div",{})})}export{ie as default};
