const e={headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("userInfo")!=null?"Bearer "+localStorage.getItem("userInfo").slice(1,-1):""},withCredentials:!0};export{e as a};
