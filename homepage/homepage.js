loginForm=document.getElementById("loginForm")
loginForm.style.display="none";


let formTime=setTimeout(()=>{
   loginForm.style.display="block";
   console.log("diplayed!");
},5000);

setTimeout(()=>{
   loginForm.style.display="none";
   clearTimeout(formTime)

},10000)

arrow=document.querySelector(".arrow")
arrow.addEventListener('click',()=>{
   window.scrollBy(0,500)  
})


