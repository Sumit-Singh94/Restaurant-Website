loginForm=document.getElementById("loginForm")
loginForm.style.display="none";


let formTime=setTimeout(()=>{
   loginForm.style.display="inline-block"
   console.log("LoginFormDisplayed!!");
},7000);

cancel=document.getElementById('cancel')

cancel.addEventListener('click',event=>{
   loginForm.style.display="none";
   clearTimeout(formTime)
   console.log("LoginFormRemoved!!");
})


arrow=document.querySelector(".arrow")
arrow.addEventListener('click',()=>{
   window.scrollBy(0,500)  
})


