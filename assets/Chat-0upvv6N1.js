import{j as e,u as F,r as t}from"./index-VGU-9NUU.js";import{d as T}from"./Search-DMxefNFZ.js";import{i as U}from"./styled-C3jJ_e4t.js";import{r as J}from"./createSvgIcon-Bust3YDQ.js";import{F as q,a as H}from"./FetchConversation-BnqMLloD.js";import{a as A}from"./instance-DZS3_tzi.js";import{a as K}from"./AxiosConfigHeader-CNHt4vQr.js";import{T as y}from"./TextField-BbW75Pm-.js";import{T as w}from"./Tooltip-DHGOYSf9.js";import{I}from"./IconButton-DWvNdrqB.js";import{H as P}from"./HubConnectionBuilder-DGuc_0gU.js";function z({item:a,setCurrentConversationId:r}){var o,l;return console.log(a),e.jsxs("div",{className:"flex items-center gap-3 border pl-3 cursor-pointer py-3",onClick:()=>{r(a.conversationId)},children:[e.jsx("div",{className:"w-max h-[65px]",children:e.jsx("img",{src:((o=a.user)==null?void 0:o.image)!==null?(l=a.user)==null?void 0:l.image:"https://cdn4.iconfinder.com/data/icons/gray-business-1/512/xxx010-512.png",alt:"",className:"h-[65px] rounded-full"})}),e.jsx("div",{className:"flex flex-col",children:e.jsx("h4",{children:a.user.name})})]})}function G({conversation:a,messages:r}){var d,u,f;const{role:o,UserId:l}=F(),x=t.useRef(null);return t.useEffect(()=>{x.current&&x.current.scrollIntoView({behavior:"smooth"})},[r]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative max-h-screen overflow-hidden mb-[75px]",children:[e.jsx("div",{className:"border-b h-[70px] bg-white",children:e.jsxs("div",{className:"pl-4 py-2 h-full flex gap-4",children:[e.jsx("img",{src:((d=a.user)==null?void 0:d.image)!==null?(u=a.user)==null?void 0:u.image:"https://cdn4.iconfinder.com/data/icons/gray-business-1/512/xxx010-512.png",alt:"",className:"h-full rounded-full"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-[20px]",children:a.user.name}),e.jsx("span",{className:"border rounded-full px-3 bg-slate-200 text-[red]",children:(f=a.user.role)==null?void 0:f.name})]})]})}),e.jsxs("div",{className:"border h-[calc(100vh-250px)] overflow-y-scroll",children:[r.map(c=>e.jsx("div",{className:`p-2 my-2 ${c.senderId==l?"text-right":"text-left"}`,children:e.jsx("div",{className:`inline-block p-2 rounded ${c.senderId===l?"bg-blue-500 text-white":"bg-gray-200 text-black"}`,children:c.content})},c.messageId)),e.jsx("div",{ref:x})]})]})})}var j={},O=U;Object.defineProperty(j,"__esModule",{value:!0});var S=j.default=void 0,V=O(J()),Y=e;S=j.default=(0,V.default)((0,Y.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");const Q=async a=>{try{const o=(await A.get(`/Chat/${a}/messages`,K)).data;return console.log(o),o}catch(r){console.error("Error during Fetch chat by conversation ID:",r)}};function ie(){const{role:a,UserId:r}=F(),[o,l]=t.useState(null),[x,d]=t.useState([]),[u,f]=t.useState(""),c=t.useRef(null),[m,E]=t.useState(""),[C,L]=t.useState([]),[R,v]=t.useState([]),[n,M]=t.useState(null),[p,k]=t.useState({conversationId:null}),i=new P().withUrl("https://localhost:7103/Chat").withAutomaticReconnect().build(),B=async()=>{const s=await q(r);v(s),L(s)};t.useEffect(()=>{B()},[]),t.useEffect(()=>(i.start().then(()=>{console.log("Connected!"),n&&i.invoke("JoinConversation",n).then(()=>console.log("Joined conversation",n)).catch(s=>console.error("Failed to join conversation",s))}).catch(s=>console.log("Connection failed: ",s)),i.on("ReceiveMessage",s=>{console.log("Received message:",s),d(h=>[...h,s])}),l(i),()=>{i.stop()}),[n]),t.useEffect(()=>{if(o&&n!==null)return(async()=>{console.log("Joined conversation"),await o.invoke("JoinConversation",n),d([])})(),()=>{(async()=>{console.log("Leave conversation"),await o.invoke("LeaveConversation",n)})()}},[o,n]),t.useEffect(()=>{n!==null&&(async()=>{const h=await Q(n);d(h);const g=await H(n,r);k(g)})()},[n]);const b=async()=>{if(u.trim().length>0&&o)try{i.start().then(()=>{n!=null&&i.invoke("SendMessage",n,Number(r),p.user.userId,u).then(()=>console.log("Send success",n)).catch(s=>console.error("Failed to send conversation",s))}).catch(s=>console.log("Connection failed: ",s)),c.current.value="",f("")}catch(s){console.log("Error sending message:",s)}},D=s=>{E(s.target.value.trim())},_=s=>{s.key==="Enter"&&b()};t.useEffect(()=>{if(m!=""){const s=C.filter(h=>{var N;const g=m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return((N=h.user)==null?void 0:N.name).toLocaleLowerCase().match(g.toLocaleLowerCase())});v(s)}else v(C)},[m]);const $=s=>{f(s.target.value)};return e.jsx("div",{className:"h-[100vh-100px] mx-10 border overflow-hidden fixingLayout",children:e.jsxs("div",{className:"grid grid-cols-5 h-max w-full",children:[e.jsxs("div",{className:"col-span-1 bg-slate-50 border-r h-full",children:[e.jsxs("div",{className:"border-b p-2",children:[e.jsx("h3",{className:"text-[24px] text-center mb-2",children:"Your chat"}),e.jsxs("div",{className:"relative w-full px-2 mb-3",children:[e.jsx(y,{className:"w-full",placeholder:"Enter the username to filter chat",onChange:D}),e.jsx("span",{className:"absolute right-4 top-1/2 -translate-y-1/2",children:e.jsx(w,{title:"Search",children:e.jsx(I,{children:e.jsx(T,{})})})})]})]}),e.jsx("div",{className:"overflow-y-scroll h-[calc(100vh-250px)]",children:R.map(s=>e.jsx(z,{item:s,setCurrentConversationId:M},s.conversationId))})]}),e.jsx("div",{className:"relative col-span-4",children:p.conversationId!==null?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bg-slate-500 h-full",children:e.jsx(G,{conversation:p,messages:x})}),e.jsx("div",{className:"absolute bottom-0 bg-white w-full left-1/2 -translate-x-1/2 h-[75px]",children:e.jsxs("div",{className:"flex items-center justify-center gap-3 h-full px-3",children:[e.jsx(y,{placeholder:"Enter your message...",className:"w-[calc(100%-250px)]",onChange:$,ref:c,value:u,onKeyDown:_,autoComplete:"off"}),e.jsx(w,{title:"Send",className:"w-max px-3",onClick:b,children:e.jsx(I,{children:e.jsx(S,{})})})]})})]}):e.jsx(e.Fragment,{})})]})})}export{ie as C};
