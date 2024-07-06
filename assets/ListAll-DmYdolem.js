import{r as d,j as n,c as R,L as A,d as L}from"./index-DWozRySs.js";import{f,c as S,g as _,a as M,k as y,s as E,_ as c,b as x,u as I,d as O,e as U}from"./styled-BUrYsluB.js";import{m as F}from"./motion-CV68TVvv.js";import"./instance-DZS3_tzi.js";import{a as P}from"./FetchApiDesign-0YxtH5qw.js";function T(e,t=0,i=1){return S(e,t,i)}function X(e){e=e.slice(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let i=e.match(t);return i&&i[0].length===1&&(i=i.map(a=>a+a)),i?`rgb${i.length===4?"a":""}(${i.map((a,s)=>s<3?parseInt(a,16):Math.round(parseInt(a,16)/255*1e3)/1e3).join(", ")})`:""}function j(e){if(e.type)return e;if(e.charAt(0)==="#")return j(X(e));const t=e.indexOf("("),i=e.substring(0,t);if(["rgb","rgba","hsl","hsla","color"].indexOf(i)===-1)throw new Error(f(9,e));let a=e.substring(t+1,e.length-1),s;if(i==="color"){if(a=a.split(" "),s=a.shift(),a.length===4&&a[3].charAt(0)==="/"&&(a[3]=a[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(s)===-1)throw new Error(f(10,s))}else a=a.split(",");return a=a.map(r=>parseFloat(r)),{type:i,values:a,colorSpace:s}}function B(e){const{type:t,colorSpace:i}=e;let{values:a}=e;return t.indexOf("rgb")!==-1?a=a.map((s,r)=>r<3?parseInt(s,10):s):t.indexOf("hsl")!==-1&&(a[1]=`${a[1]}%`,a[2]=`${a[2]}%`),t.indexOf("color")!==-1?a=`${i} ${a.join(" ")}`:a=`${a.join(", ")}`,`${t}(${a})`}function D(e,t){return e=j(e),t=T(t),(e.type==="rgb"||e.type==="hsl")&&(e.type+="a"),e.type==="color"?e.values[3]=`/${t}`:e.values[3]=t,B(e)}function W(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function K(e){return parseFloat(e)}function H(e){return _("MuiSkeleton",e)}M("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const J=["animation","className","component","height","style","variant","width"];let h=e=>e,v,b,w,C;const V=e=>{const{classes:t,variant:i,animation:a,hasChildren:s,width:r,height:o}=e;return U({root:["root",i,a,s&&"withChildren",s&&!r&&"fitContent",s&&!o&&"heightAuto"]},H,t)},Z=y(v||(v=h`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),q=y(b||(b=h`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),z=E("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:i}=e;return[t.root,t[i.variant],i.animation!==!1&&t[i.animation],i.hasChildren&&t.withChildren,i.hasChildren&&!i.width&&t.fitContent,i.hasChildren&&!i.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const i=W(e.shape.borderRadius)||"px",a=K(e.shape.borderRadius);return c({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:D(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${a}${i}/${Math.round(a/.6*10)/10}${i}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&x(w||(w=h`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Z),({ownerState:e,theme:t})=>e.animation==="wave"&&x(C||(C=h`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),q,(t.vars||t).palette.action.hover)),m=d.forwardRef(function(t,i){const a=I({props:t,name:"MuiSkeleton"}),{animation:s="pulse",className:r,component:o="span",height:l,style:p,variant:k="text",width:$}=a,u=O(a,J),g=c({},a,{animation:s,component:o,variant:k,hasChildren:!!u.children}),N=V(g);return n.jsx(z,c({as:o,ref:i,className:R(N.root,r),ownerState:g},u,{style:c({width:$,height:l},p)}))}),G="data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M6.5692%202.43659C6.62597%202.38116%206.69342%202.33718%206.76767%202.30717C6.84192%202.27717%206.92152%202.26172%207.00191%202.26172C7.0823%202.26172%207.1619%202.27717%207.23615%202.30717C7.3104%202.33718%207.37784%202.38116%207.43461%202.43659L14.7686%209.57945C14.8255%209.63474%2014.8707%209.70043%2014.9015%209.77274C14.9323%209.84506%2014.9482%209.92258%2014.9482%2010.0009C14.9482%2010.0792%2014.9323%2010.1567%2014.9015%2010.229C14.8707%2010.3013%2014.8255%2010.367%2014.7686%2010.4223L7.43461%2017.5652C7.31985%2017.6769%207.1642%2017.7397%207.00191%2017.7397C6.83961%2017.7397%206.68396%2017.6769%206.5692%2017.5652C6.45444%2017.4534%206.38997%2017.3018%206.38997%2017.1437C6.38997%2016.9857%206.45444%2016.8341%206.5692%2016.7223L13.4717%2010.0009L6.5692%203.27945C6.51229%203.22416%206.46713%203.15847%206.43632%203.08616C6.40551%203.01384%206.38965%202.93632%206.38965%202.85802C6.38965%202.77973%206.40551%202.7022%206.43632%202.62989C6.46713%202.55757%206.51229%202.49188%206.5692%202.43659Z'%20fill='black'/%3e%3c/svg%3e";function Q({design:e={}}){const[t,i]=d.useState(!0);return d.useEffect(()=>{const a=new Image;a.src=e.image,a.onload=()=>i(!1)},[e.image]),n.jsx(n.Fragment,{children:n.jsx("div",{className:"text-[1rem] leading-[1.3em] font-normal",children:n.jsxs(A,{to:`/design/${e.designId}`,className:"max-w-[100%] inline-block cursor-pointer",children:[t?n.jsx(m,{animation:"wave",sx:{borderRadius:"10px"},variant:"rectangular",width:"300px",height:"300px"}):n.jsx("div",{div:!0,className:"overflow-hidden mb-[0.94rem] rounded-[10px] w-[100%] h-[300px]",children:n.jsx(F.img,{whileHover:{scale:1.1},transition:{duration:.7},className:"rounded-[10px] inline-block w-[100%] h-[100%] object-cover",src:e.image})}),n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsx("div",{children:t?n.jsx(m,{animation:"wave",variant:"text",width:"150px"}):n.jsx("h6",{className:"text-[1.5rem] font-normal ",children:e.designName})}),n.jsx("div",{children:t?n.jsx(m,{animation:"wave",sx:{marginTop:"5px"},variant:"circular",width:"40px",height:"40px"}):n.jsx("div",{className:"flex w-[40px] h-[40px] justify-center items-center	border-solid border-[1px] border-[#000] rounded-[50%]",children:n.jsx("img",{className:"max-w-[100% inline-block",src:G})})})]})]})})})}d.createContext();function ne(){const[e,t]=d.useState([]),i=L();d.useEffect(()=>{(async()=>{const l=await P();t(l)})()},[i.pathname]);const a=o=>{const l=o.split("/").filter(p=>p!=="");return l[l.length-1]},s=a(i.pathname)==="design"?"all":a(i.pathname);let r=s==="all"?e:e.filter(o=>o.typeOfJewellery.name.toLowerCase()===s);return r===void 0&&(r=[]),n.jsx("div",{className:"px-[6.25rem] pb-[3rem]",children:n.jsx("div",{className:"text-[1rem] leading-[1.3em] font-normal",children:n.jsx("div",{className:"grid gap-x-[2.5rem] gap-y-[2.5rem] grid-cols-4",children:r.map((o,l)=>n.jsx(Q,{design:o},l))})})})}export{ne as default};
