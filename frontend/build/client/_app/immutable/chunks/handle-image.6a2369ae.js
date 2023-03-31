function n(){const e=new FileReader,a=this.files,t=this.parentElement;e.readAsDataURL(a[0]),e.addEventListener("load",()=>{t.style.backgroundImage=`url(${e.result})`},!1)}export{n as h};
