import{j as t,r as o}from"./index-BJo3Wz4H.js";import{F as w,I as V,O as I}from"./TextField-DwvuUxNR.js";import{I as j}from"./InputAdornment-DxJxj5jD.js";import{I as C}from"./IconButton-v_TV2BUs.js";import{c as d}from"./createSvgIcon-BuLzkb-N.js";const y=d(t.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),M=d(t.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");function z({label:e,pattern:$,refInput:b,inputCase:u}){const[l,m]=o.useState(!1),p=()=>m(n=>!n),f=n=>{n.preventDefault()},[i,a]=o.useState({isValid:!1,message:""});function c(n){const s=n.target.value.trim();if(s.length===0){a({isValid:!0,message:`${e} field can't be empty!`});return}if(u=="register"){if(!/[A-Z]/.test(s)){a({isValid:!0,message:`${e} must contain at least one uppercase letter!`});return}if(!/[a-z]/.test(s)){a({isValid:!0,message:`${e} must contain at least one lowercase letter!`});return}if(!/\d/.test(s)){a({isValid:!0,message:`${e} must contain at least one number!`});return}if(!/[!@#$%^&*()]/.test(s)){a({isValid:!0,message:`${e} must contain at least one special character!`});return}if(s.length<12){a({isValid:!0,message:`${e} must be at least 12 characters long!`});return}}a(!1)}const x=(n,s)=>{let r;return(...h)=>{r&&clearTimeout(r),r=setTimeout(()=>{n(...h)},s)}},g=o.useCallback(x(c,1e3),[c]);return t.jsxs(w,{sx:{my:"8px",width:"100%"},variant:"outlined",error:i.isValid,children:[t.jsx(V,{htmlFor:"outlined-adornment-password",children:"Password"}),t.jsx(I,{id:"outlined-adornment-password",type:l?"text":"password",onChange:g,name:e,endAdornment:t.jsx(j,{position:"start",children:t.jsx(C,{"aria-label":"toggle password visibility",onClick:p,onMouseDown:f,edge:"end",children:l?t.jsx(M,{}):t.jsx(y,{})})}),label:e}),i.isValid?t.jsx("p",{className:" text-sm tracking-tighter text-left mt-[3px] mr-[14px] ml-[14px] text-[#d32f2f]",children:i.message}):null]})}export{z as I,M as V,y as a};
