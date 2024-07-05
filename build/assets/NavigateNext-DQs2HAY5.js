import{s as d,_ as l,w as I,d as P,a as z,g as E,u as T,e as $,i as A}from"./styled-CJA13E1M.js";import{j as s,r as p,c as q}from"./index-BJo3Wz4H.js";import"./mergeSlotProps-CKWnQtuB.js";import{c as L}from"./createSvgIcon-BuLzkb-N.js";import{B as U}from"./ButtonBase-Bpx5dE4Z.js";import{T as O}from"./Typography-B95WPqnO.js";import{u as D}from"./Grow-Bq5RsNA9.js";import{r as H}from"./createSvgIcon-ho_PURcI.js";const W=L(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),V=["slots","slotProps"],F=d(U)(({theme:e})=>l({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":l({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":l({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:I(e.palette.grey[200],.12)}:{backgroundColor:I(e.palette.grey[600],.12)})})),G=d(W)({width:24,height:16});function J(e){const{slots:r={},slotProps:n={}}=e,a=P(e,V),t=e;return s.jsx("li",{children:s.jsx(F,l({focusRipple:!0},a,{ownerState:t,children:s.jsx(G,l({as:r.CollapsedIcon,ownerState:t},n.collapsedIcon))}))})}function K(e){return E("MuiBreadcrumbs",e)}const Q=z("MuiBreadcrumbs",["root","ol","li","separator"]),X=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],Y=e=>{const{classes:r}=e;return $({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},K,r)},Z=d(O,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${Q.li}`]:r.li},r.root]})({}),ee=d("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),re=d("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function oe(e,r,n,a){return e.reduce((t,u,c)=>(c<e.length-1?t=t.concat(u,s.jsx(re,{"aria-hidden":!0,className:r,ownerState:a,children:n},`separator-${c}`)):t.push(u),t),[])}const ge=p.forwardRef(function(r,n){const a=T({props:r,name:"MuiBreadcrumbs"}),{children:t,className:u,component:c="nav",slots:y={},slotProps:_={},expandText:B="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:g=1,maxItems:x=8,separator:v="/"}=a,M=P(a,X),[S,w]=p.useState(!1),i=l({},a,{component:c,expanded:S,expandText:B,itemsAfterCollapse:f,itemsBeforeCollapse:g,maxItems:x,separator:v}),m=Y(i),N=D({elementType:y.CollapsedIcon,externalSlotProps:_.collapsedIcon,ownerState:i}),R=p.useRef(null),k=o=>{const h=()=>{w(!0);const j=R.current.querySelector("a[href],button,[tabindex]");j&&j.focus()};return g+f>=o.length?o:[...o.slice(0,g),s.jsx(J,{"aria-label":B,slots:{CollapsedIcon:y.CollapsedIcon},slotProps:{collapsedIcon:N},onClick:h},"ellipsis"),...o.slice(o.length-f,o.length)]},b=p.Children.toArray(t).filter(o=>p.isValidElement(o)).map((o,h)=>s.jsx("li",{className:m.li,children:o},`child-${h}`));return s.jsx(Z,l({ref:n,component:c,color:"text.secondary",className:q(m.root,u),ownerState:i},M,{children:s.jsx(ee,{className:m.ol,ref:R,ownerState:i,children:oe(S||x&&b.length<=x?b:k(b),m.separator,v,i)})}))});var C={},se=A;Object.defineProperty(C,"__esModule",{value:!0});var te=C.default=void 0,ae=se(H()),le=s;te=C.default=(0,ae.default)((0,le.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");export{ge as B,te as d};
