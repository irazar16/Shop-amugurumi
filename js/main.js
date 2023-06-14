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


