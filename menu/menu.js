
cart=[]

offcanvasbody=document.querySelector(".offcanvas-body")


// var logo=element.closest(".card").querySelectorAll(".card-img-top").innerHTML;
// var cardtitle=element.closest(".card").querySelectorAll(".card-title").textContent;
// var cardtext=element.closest(".card").querySelectorAll('.card-text').textContent;
// var itemprice=element.closest(".card").querySelectorAll('.itemprice').textContent;



 var cartbutton=document.querySelectorAll("#cartbtn")

var x=0;  //defining the valueof item initially 0
counter=document.getElementById('counter').innerText=x;

var y="Add item "
subcounter=document.getElementById('subcounter').innerText=y;


cartbutton.forEach((element,index)=> {
   element.addEventListener('click',()=>{
       
      var logo=element.closest(".card").querySelector(".card-img-top").innerHTML;
      var cardtitle=element.closest(".card").querySelector(".card-title").textContent;
      var cardtext=element.closest(".card").querySelector('.card-text').textContent;
      var itemprice=element.closest(".card").querySelector('.itemprice').textContent;
      
   
        var product={
         logo: logo,
         cardtitle: cardtitle,
         cardtext:cardtext,
         itemprice:itemprice,
     };

     console.log(`logo:${product.logo}`);
     console.log(`cardtitle:${product.cardtitle}`);
     console.log(`cardtext:${product.cardtext}`);
      console.log(`price:${product.itemprice}`);

     cart.push(product);
       
        newul=document.createElement('ul')
        newul.className="productul";

newul.innerHTML=`${product.logo}${product.cardtitle}<span class="material-symbols-rounded">delete</span><br>${product.cardtext}<br>${product.itemprice}`


offcanvasbody.appendChild(newul);

subcounter+=parseFloat(product.itemprice);
document.getElementById('subcounter').innerText=subcounter;

x=++x // incrementing the initial value when button is clicked 
document.getElementById("counter").innerText=x;


   })
});











