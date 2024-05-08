cart=[]
cartbtn=document.querySelectorAll('#cartbtn')

cartbtn.forEach(button => {
    button.addEventListener('click',function(e){
        e.preventDefault()

       card= button.parentElement.parentElement

       let product={
        productTitle:card.querySelectorAll('.card-title').innerHTML,
        productText:card.querySelectorAll('.card-text').innerText,
        productPrice:parseFloat(card.querySelectorAll('.itemprice').innerText),
        quantity: 1
    
       }
       cart.push(product)

       canvasbody=document.querySelector('.offcanvas-body')

       cartItem=document.createElement('div');
       cartItem.textContent=`${product.productTitle,product.productText,product.productPrice*product.quantity}`

       canvasbody.appendChild(cartItem)
       console.log(cart);

    })
});