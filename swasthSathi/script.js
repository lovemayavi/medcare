let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// health card
// Function to redirect to a link
function redirectToLink() {
    window.location.href = "https://6628aedfedcdc884681e2fc5--sprightly-blancmange-859ff4.netlify.app/"; // Replace with your desired link
}
