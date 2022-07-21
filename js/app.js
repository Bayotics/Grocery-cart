var cartInfo = document.getElementById("cart-info");
var cart = document.getElementById("cart");
var cartInner = document.getElementById("cartInner");
var cartTotal = document.getElementById("cart-total");
var itemCount = document.getElementById("item-count");
var itemTotal = document.querySelector(".item-total");

cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
})

var clearCart = document.getElementById("clear-cart");
clearCart.addEventListener("click", function (e) {
    var cartItem = document.querySelectorAll(".cart-item");
    cartItem.forEach(function (itemsInCart) {
        itemsInCart.remove();
    })
    cartTotal.innerText = 0;
    itemCount.innerText = 0;
    itemTotal.innerText = 0;

})

var shoppingCart = document.querySelectorAll(".fa-shopping-cart");
var cartItem = document.querySelector(".cart-item");

shoppingCart.forEach(function (singleCart) {
    singleCart.addEventListener("click", function (e) {
        var imgSrc = e.target.parentElement.previousElementSibling.src
        var name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].innerText
        var price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].children[0].innerText
        var pos = imgSrc.indexOf("img") + 3;
        var appliedSrc = imgSrc.slice(pos);

        cartInner.innerHTML +=
            `
        <div class="cart-item d-flex justify-content-between text-capitalize my-3">
              <img src="${`img-cart${appliedSrc}`}" class="img-fluid rounded-circle" id="item-img" alt="">
              <div class="item-text">

                <p id="cart-item-title" class="font-weight-bold mb-0">${name}</p>
                <span>$</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${price}</span>
              </div>
              <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
              </a>
            </div>
        `

        const arr = [];
        const items = document.querySelectorAll(".cart-item-price");
        items.forEach(function (item) {
            arr.push(Number(item.textContent))
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            cartTotal.innerText = sum;
            itemCount.innerText = arr.length;
            itemTotal.innerText = sum;


            var deleteButton = document.querySelectorAll(".fa-trash");
            deleteButton.forEach(function (deleteStuff) {
                deleteStuff.addEventListener("click", function (e) {
                    var num = e.target.parentElement.previousElementSibling.children[2].innerText
                    console.log(num)
                    this.parentNode.parentNode.remove();
                    cartTotal.innerText = sum - Number(num);
                    itemCount.innerText = arr.length;
                })
            })
        })

    })
})


