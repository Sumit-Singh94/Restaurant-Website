loginForm=document.getElementById("loginForm")
loginForm.style.display="none";


let formTime=setTimeout(()=>{
   loginForm.style.display="inline-block"
  loginForm.style.position="fixed";
   console.log("LoginFormDisplayed!!");
},3000);

cancel=document.getElementById('cancel')
cancel.addEventListener('click',event=>{
   loginForm.style.display="none";
   clearTimeout(formTime)
   formTime=null;
   console.log("LoginFormRemoved!!");
   
})


function signinbtn() {
    const signbtn=document.querySelector('.sign')
    signbtn.addEventListener('click',(event)=>{
    event.preventDefault()
      loginForm.style.display="none";
      if(formTime!=null){
         clearTimeout(formTime)
         formTime=null;
         console.log("LoginFormRemoved!!");
      }
     
    })
}
signinbtn()




arrow=document.querySelector(".arrow")
arrow.addEventListener('click',()=>{
   window.scrollBy(0,500)  
})


