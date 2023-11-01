


document.getElementById("mybutton").addEventListener("click", function(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if (name && phone && email) {
        alert("Hi, " + name + 
        " we will be in touch with you very shortly. " );
    } else {
        alert("Please enter all your details before submitting.");
    }
});
const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {

    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click", ()  => toggleNavbar());
