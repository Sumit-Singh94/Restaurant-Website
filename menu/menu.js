
cart=[]

offcanvasbody=document.querySelector(".offcanvas-body")


// var logo=element.closest(".card").querySelectorAll(".card-img-top").innerHTML;
// var cardtitle=element.closest(".card").querySelectorAll(".card-title").textContent;
// var cardtext=element.closest(".card").querySelectorAll('.card-text').textContent;
// var itemprice=element.closest(".card").querySelectorAll('.itemprice').textContent;



 var cartbutton=document.querySelectorAll("#cartbtn")

let x=0;  //defining the valueof item initially 0
document.getElementById('counter').innerText=x;

let y="Add item"
document.getElementById('subtotal').innerText=y;


cartbutton.forEach((element)=> {
   element.addEventListener('click',()=>{
       
      const logo=element.closest(".card").querySelector(".card-img-top").innerHTML;
      const cardtitle=element.closest('.card').querySelector('.card-title').textContent;
      const cardtext=element.closest(".card").querySelector('.card-text').textContent;
      const itemprice=parseFloat(element.closest(".card").querySelector('.itemprice').textContent);
      
   
        const product={
         logo: logo,
         cardtitle: cardtitle,
         cardtext:cardtext,
         itemprice:parseFloat(itemprice),
     };
     cart.push(product);
       
     let newul = document.createElement("ul")
     newul.className = "productul";

     let deletebtn = document.createElement("button");
     deletebtn.className = "deletebtn";
     deletebtn.innerHTML = "<span class='material-symbols-rounded'>delete</span>";

     newul.innerHTML = `${product.logo}${product.cardtitle}<br>${product.cardtext}<br>${product.itemprice.toFixed(2)}`;
     newul.appendChild(deletebtn);

     offcanvasbody.appendChild(newul);

totalprice=cart.map(item=>
   item.itemprice).reduce((acc,price)=>{
       return acc+price
   },0)

document.querySelector('#subtotal').innerText=totalprice.toFixed(2);

x++ // incrementing the initial value when button is clicked 
document.getElementById("counter").innerText=x;

deletebtn.addEventListener('click',()=>{

  const card=deletebtn.closest('.productul');
   if(card){
      card.remove();
      x=x-1;
      document.getElementById('counter').innerText=x;

      newindex=cart.findIndex(item=>item.itemprice==product.itemprice);
      if(newindex!=-1){
         cart.splice(newindex,1)
      }
     const updatedTotal=cart.map((item)=>item.itemprice).reduce((acc,itemprice)=>acc+itemprice,0)
      document.getElementById("subtotal").innerText=updatedTotal.toFixed(2);
   }

})


   }) 
});











