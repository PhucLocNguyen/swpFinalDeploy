import{a}from"./instance-CBuQ1cLn.js";const n=async()=>{try{let e=await a.get("/Design");return console.log("Fetch API Design log"),e.data}catch(e){console.log(e)}},r=async e=>{try{return(await a.get(`/Design/${e}`)).data}catch(t){console.log(t)}};export{n as a,r as f};
