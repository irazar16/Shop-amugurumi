// Menu

// Cart

// Login form toggle
let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active');
    //cart.classList.remove('active');
    nav_list.classList.remove('active');
   // menubar.classList.remove('active');
};

// Cart Open Close
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
}
// Close Cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
}