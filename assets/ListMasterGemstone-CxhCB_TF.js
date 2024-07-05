import{B as k,r as h,j as e}from"./index-BJo3Wz4H.js";import{M as E,d as D,a as T}from"./Close-CK-eaitj.js";import{d as H}from"./Search-VYxzNqLy.js";import{d as V}from"./MoreVert-Bb0On2pa.js";import{a as G}from"./instance-CBuQ1cLn.js";import{a as M}from"./AxiosConfigHeader-CNHt4vQr.js";import{I as R}from"./IconButton-v_TV2BUs.js";import{P as $,T as j}from"./TextField-DwvuUxNR.js";import{d as _}from"./CloudUpload-DD0xauRN.js";import{D as B,U as W}from"./DeleteImage-BvQNkwiF.js";import{s as K}from"./styled-CJA13E1M.js";import{m as L}from"./motion-DGG22rhv.js";import{B as z}from"./Button-BuZ00tsX.js";import{I as X}from"./InputAdornment-DxJxj5jD.js";import{S as q}from"./Stack-DGx3Hx4E.js";import{P as J}from"./Pagination-yucUtmAG.js";import"./ButtonBase-Bpx5dE4Z.js";import"./useIsFocusVisible-BCA3twK2.js";import"./createSvgIcon-ho_PURcI.js";import"./createSvgIcon-BuLzkb-N.js";import"./useId-DYJmAM81.js";import"./useControlled-Bs3ZyH6M.js";import"./mergeSlotProps-CKWnQtuB.js";import"./index-vBsn1U4B.js";import"./Grow-Bq5RsNA9.js";import"./Typography-B95WPqnO.js";const Q=async s=>{var c,o;try{const a=await G.delete("/MasterGemstone",{axiosConfigHeader:M,params:{id:s}});console.log(">>>Delete success",a),(a==null?void 0:a.status)==200&&k.success("Deleted successfully")}catch(a){console.log(">>>Api delete master gemstone: ",(c=a==null?void 0:a.response)==null?void 0:c.data),((o=a==null?void 0:a.response)==null?void 0:o.data)=="Cannot delete this item because it is referenced by another entity"&&k.error("Data in use cannot be deleted")}};function Y({data:s,setIsOpenUpdatePopup:c,setItemUpdate:o,isDelete:a,setIsDelete:i}){const[l,N]=h.useState(null),t=f=>{N(f.currentTarget)},x=()=>{N(null)},m=async()=>{let f=s==null?void 0:s.masterGemstoneId;await Q(f)},p=()=>{m(),x(),i(!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-8 gap-x-[1rem] py-[1rem] px-[2.25rem] border-t-[1px] border-solid border-[#e9eaf3] cursor-pointer",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.kind})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.size})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.clarity})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.cut})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.weight})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.shape})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[14px] font-medium tracking-[0.06em] leading-[1.167em]",children:s==null?void 0:s.price})}),e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(R,{onClick:t,children:e.jsx(V,{})})})]}),e.jsxs($,{open:!!l,anchorEl:l,onClose:x,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:[e.jsx(E,{onClick:()=>{c(!0),o(s),x()},children:"Update Price"}),e.jsx(E,{onClick:p,sx:{color:"error.main"},children:"Delete"})]})]})}const A=async({pageSize:s,page:c})=>{try{return(await G.get("/MasterGemstone",{axiosConfigHeader:M,params:{pageIndex:c,pageSize:s}})).data}catch(o){console.log(">>> ApiGetMasterGemstone Error: ",o)}},Z=async({formData:s})=>{try{return(await G.post("/MasterGemstone",s,M)).data}catch(c){console.log(">>> Api Create Master Gemstone Error: ",c)}};function ee({setIsOpenPopup:s}){const c="MasterGemstone",[o,a]=h.useState([]);h.useEffect(()=>{(async()=>{const d=await A({});a(d)})()},[]);const[i,l]=h.useState({kind:"",size:"",price:"",clarity:"",cut:"",weight:"",shape:"",image:""}),N=(n,d)=>d.some(r=>r.kind==n.kind&&r.size==n.size&&r.clarity==n.clarity&&r.cut==n.cut&&r.weight==n.weight&&r.shape==n.shape),[t,x]=h.useState({kind:"",size:"",price:"",clarity:"",cut:"",weight:"",shape:"",image:""}),m=n=>{const{name:d,value:r}=n.target;let w="",b=!0;try{if(d==="size"||d==="weight"||d==="price"){w="Input must be number greater than 0";const g=Number(r);(g>0&&!isNaN(g)||r==="")&&(b=!1)}else{w="This field cannot be blank";const g=Number(r);!isNaN(g)&&r!==""&&(w="This field cannot a number"),r!==""&&isNaN(g)&&(b=!1)}}catch{b=!0}l({...i,[d]:r}),x({...t,[d]:b?w:""})};console.log(i);const p=()=>{let n=!0,d={};console.log(t),Object.keys(t).forEach(r=>{t[r]!==""&&(n=!1)}),Object.keys(i).forEach(r=>{i[r]===""&&(d[r]="This field cannot be blank",n=!1)}),x(d),i.kind!==""&&i.size!==""&&i.price!==""&&i.clarity!==""&&i.cut!==""&&i.weight!==""&&i.shape!==""&&N(i,o)&&(n=!1,k.error("Master Gemstone Already Exists")),console.log(">>> Check success: ",n),n&&((async()=>await Z({formData:i}))(),k.success("Create Success"),s(!1))},f=K("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),v=async n=>{const d=n.target.files[0];if(d){i.image!==""&&await B(i.image);let r=await W(c,d);console.log(r),l({...i,image:r})}};return console.log(i),e.jsx(e.Fragment,{children:e.jsx("div",{onClick:()=>s(!1),className:"fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center",children:e.jsxs(L.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,transition:{duration:.5}},onClick:n=>n.stopPropagation(),className:"bg-[#fff] w-[40rem] rounded-[10px] min-h-[450px]",children:[e.jsxs("div",{className:"relative text-center border-b-[1px] border-solid border-[#333] px-[1rem] py-[1rem] ",children:[e.jsx("h1",{className:"font-bold leading-5 text-[1.5rem]",children:"Add New Gemstone"}),e.jsx("div",{onClick:()=>s(!1),className:"absolute top-[10px] right-[10px] cursor-pointer",children:e.jsx(D,{})})]}),e.jsxs("div",{className:"px-[1rem] py-[1rem]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Kind"}),e.jsx("div",{children:e.jsx(j,{name:"kind",onChange:m,error:!!t.kind,helperText:t==null?void 0:t.kind,style:{width:"100%"},placeholder:"Dimond",id:"outlined-basic",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]}),e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Size"}),e.jsx("div",{children:e.jsx(j,{name:"size",onChange:m,error:!!t.size,helperText:t==null?void 0:t.size,style:{width:"100%"},placeholder:"5",id:"outlined-basic",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Clarity"}),e.jsx("div",{children:e.jsx(j,{name:"clarity",onChange:m,error:!!t.clarity,helperText:t==null?void 0:t.clarity,style:{width:"100%"},placeholder:"IF",id:"outlined-basic",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]}),e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Cut"}),e.jsx("div",{children:e.jsx(j,{name:"cut",onChange:m,error:!!t.cut,helperText:t==null?void 0:t.cut,style:{width:"100%"},id:"outlined-basic",placeholder:"EX",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Weight"}),e.jsx("div",{children:e.jsx(j,{name:"weight",onChange:m,error:!!t.weight,helperText:t==null?void 0:t.weight,style:{width:"100%"},placeholder:"0.8",id:"outlined-basic",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]}),e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Shape"}),e.jsx("div",{children:e.jsx(j,{name:"shape",onChange:m,error:!!t.shape,helperText:t==null?void 0:t.shape,style:{width:"100%"},id:"outlined-basic",placeholder:"Round",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"w-[47%]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Price"}),e.jsx("div",{children:e.jsx(j,{name:"price",onChange:m,error:!!t.price,helperText:t==null?void 0:t.price,style:{width:"100%"},placeholder:"1000",id:"outlined-basic",variant:"outlined",size:"small",sx:{minHeight:"4rem"}})})]}),e.jsx("div",{className:"w-[47%]",children:e.jsxs(z,{component:"label",role:void 0,variant:"outlined",tabIndex:-1,startIcon:e.jsx(_,{}),sx:{border:"2px solid",color:`${i.image==""?"red":"green"}`},onChange:v,children:["Upload Gemstone Image",e.jsx(f,{type:"file"})]})})]}),e.jsx("div",{className:"mt-[1rem]",children:e.jsxs(z,{onClick:p,variant:"contained",sx:{minWidth:"6rem"},children:[e.jsx(T,{fontSize:"small",sx:{marginRight:"8px"}}),"Add"]})})]})]})})})}const se=async({id:s,formData:c})=>{try{return(await G.put(`/MasterGemstone/${s}`,c,M)).data}catch(o){console.log(">>> Api Update Master Gemstone ",o)}};function te({data:s,setIsOpenUpdatePopup:c}){console.log(s);const[o,a]=h.useState({kind:s==null?void 0:s.kind,size:s==null?void 0:s.size,price:"",clarity:s==null?void 0:s.clarity,cut:s==null?void 0:s.cut,weight:s==null?void 0:s.weight,shape:s==null?void 0:s.shape,image:s==null?void 0:s.image}),[i,l]=h.useState({kind:"",size:"",price:"",clarity:"",cut:"",weight:"",shape:"",image:""}),N=x=>{const{name:m,value:p}=x.target;let f="",v=!0;try{if(m==="price"){f="Input must be number greater than 0";const n=Number(p);n>0&&!isNaN(n)&&(v=!1)}}catch{v=!0}a({...o,[m]:p}),l({...i,[m]:v?f:""})},t=()=>{let x=!0,m={};if(Object.keys(i).forEach(p=>{i[p]!==""&&(x=!1)}),Object.keys(o).forEach(p=>{o[p]===""&&(m[p]="This field cannot be blank",x=!1)}),l(m),x){let p=s==null?void 0:s.masterGemstoneId;(async()=>{await se({id:p,formData:o})})(),k.success("Update Success"),c(!1)}};return e.jsx(e.Fragment,{children:e.jsx("div",{onClick:()=>c(!1),className:"fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center",children:e.jsxs(L.div,{initial:{opacity:0,scale:0},animate:{opacity:1,scale:1,transition:{duration:.5}},onClick:x=>x.stopPropagation(),className:"bg-[#fff] w-[30rem] rounded-[10px] min-h-[250px]",children:[e.jsxs("div",{className:"relative text-center border-b-[1px] border-solid border-[#333] px-[1rem] py-[1rem] ",children:[e.jsx("h1",{className:"font-bold leading-5 text-[1.5rem]",children:"Update Price"}),e.jsx("div",{onClick:()=>c(!1),className:"absolute top-[10px] right-[10px] cursor-pointer",children:e.jsx(D,{})})]}),e.jsxs("div",{className:"px-[1rem] py-[1rem]",children:[e.jsx("h2",{className:"text-[1.1rem] font-medium pb-[3px]",children:"Price"}),e.jsx("div",{children:e.jsx(j,{name:"price",onChange:N,error:!!i.price,helperText:i==null?void 0:i.price,style:{width:"100%"},placeholder:"Dimond",id:"outlined-basic",variant:"outlined",size:"small",sx:{minHeight:"5.5rem"}})}),e.jsx("div",{className:"mt-[1rem]",children:e.jsx(z,{onClick:t,variant:"contained",sx:{minWidth:"6rem"},children:"Update"})})]})]})})})}function Me(){const[c,o]=h.useState(!1),[a,i]=h.useState([]),[l,N]=h.useState(""),[t,x]=h.useState(!1),[m,p]=h.useState(),[f,v]=h.useState(!1),[n,d]=h.useState(1),[r,w]=h.useState(0),[b,g]=h.useState(1),I=async()=>{const u=await A({pageSize:6,page:b});i(u)},P=async()=>{const u=await A({});return w(u==null?void 0:u.length),u};h.useEffect(()=>{l===""&&I(),P()},[c,b,t,f]),h.useEffect(()=>{let u=[];l===""&&(g(1),I()),(async()=>{u=await P(),console.log(u);const S=u.filter(y=>y.kind.toLowerCase().includes(l.toLowerCase())||y.size.toString().toLowerCase().includes(l.toLowerCase())||y.price.toString().toLowerCase().includes(l.toLowerCase())||y.clarity.toLowerCase().includes(l.toLowerCase())||y.cut.toLowerCase().includes(l.toLowerCase())||y.weight.toString().toLowerCase().includes(l.toLowerCase())||y.shape.toLowerCase().includes(l.toLowerCase())),O=S.slice((n-1)*6,n*6);i(O),w(S==null?void 0:S.length)})()},[l,n,t,f]);const F=(u,C)=>{l===""?g(C):d(C)},U=u=>{N(u.target.value),d(1)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"min-h-[100vh] py-[3rem] px-[3rem] bg-[#f7f9fc]",children:[e.jsx("div",{className:"w-[100%] min-h-[600px]",children:e.jsxs("div",{className:"rounded-[30px] border-[1px] border-solid border-[#e9eaf3] bg-[white]",children:[e.jsxs("div",{className:"py-[1.75rem] px-[2.25rem] flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx("h2",{className:"mr-5 font-bold text-[1.5rem] leading-[1.125em]",children:"All Master Gemstone"}),e.jsx(j,{onChange:U,value:l,id:"outlined-basic",placeholder:"Search...",variant:"outlined",size:"small",sx:{"& .MuiOutlinedInput-root":{borderRadius:"30px"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"30px"}},InputProps:{startAdornment:e.jsx(X,{position:"start",children:e.jsx(H,{})})}})]}),e.jsx(z,{onClick:()=>o(!0),startIcon:e.jsx(T,{}),variant:"contained",children:"New Gemstone"})]}),e.jsxs("div",{className:"bg-[#f7f9fc] grid grid-cols-8 gap-x-[1rem] py-[1rem] px-[2.25rem] border-t-[1px] border-solid border-[#e9eaf3]",children:[e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Kind"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Size"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Clarity"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Cut"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Weight"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Shape"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]",children:"Price"})}),e.jsx("div",{className:"flex items-center",children:e.jsx("h2",{className:"text-[1rem] font-medium tracking-[0.06em] leading-[1.167em]"})})]}),a==null?void 0:a.map((u,C)=>e.jsx(Y,{data:u,setIsOpenUpdatePopup:x,setItemUpdate:p,isDelete:f,setIsDelete:v},C))]})}),e.jsx("div",{className:"flex justify-center items-center",children:e.jsx(q,{children:e.jsx(J,{count:Math.ceil(r/6)||0,page:l===""?b:n,onChange:F})})})]}),c&&e.jsx(ee,{setIsOpenPopup:o}),t&&e.jsx(te,{setIsOpenUpdatePopup:x,data:m})]})}export{Me as default};
