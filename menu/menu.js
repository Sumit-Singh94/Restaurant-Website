
cart=[]

offcanvasbody=document.querySelector(".offcanvas-body")


var logo=document.querySelector(".card-img-top").textContent;
var cardtitle=document.querySelector(".card-title").textContent;
var cardtext=document.querySelector('.card-text').textContent;
var itemprice=document.querySelector('.itemprice').innerHTML;



product={
    logo: logo,
    cardtitle: cardtitle,
    cardtext:cardtext,
    itemprice:itemprice,
};
cart.push(product);

cartbutton=document.querySelectorAll("#cartbtn")

cartbutton.forEach(element => {
   element.addEventListener('click',()=>{

    console.log(`logo:${product.logo}`);
        console.log(`cardtitle:${product.cardtitle}`);
        console.log(`cardtext:${product.cardtext}`);
        console.log(`price:${product.itemprice}`);
    newul=document.createElement('ul')

newul.innerHTML = `${cart.map(item => `<li>${item.cardtitle}-${item.cardtext}-${item.itemprice}</li>`).join('')}`;

   })
});
 

// cartbutton.addEventListener('click',()=>{
//     console.log(`logo:${product.logo}`);
//     console.log(`cardtitle:${product.cardtitle}`);
//     console.log(`cardtext:${product.cardtext}`);
//     console.log(`price:${product.itemprice}`);
// })




newul=document.createElement('ul')

// newul.innerHTML = `${cart.map(item => `<li>${item.cardtitle}-${item.cardtext}-${item.itemprice}</li>`).join('')}`;



offcanvasbody.appendChild(newul);
