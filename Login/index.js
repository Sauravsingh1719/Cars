const LSbtn = document.getElementById("LS");
const SSbtn = document.getElementById("SS");
const loginswap = document.getElementById("login-swap");
const signupswap = document.getElementById("signup-swap");

LSbtn.addEventListener("click", () => {
        signupswap.style.display = "none";
        loginswap.style.display = "block";
})

SSbtn.addEventListener("click", () => {
    signupswap.style.display = "block";
    loginswap.style.display = "none";
})
var details= 

document.getElementById("Signup-Submit").addEventListener("click", function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    if(name && email && phone){
        var message = " Hi " + name + " \nWelcome on Board!\n ";
        message += " Your details are\n ";
        message += " Email: " + email + " \n ";
        message += " Phone: " + phone + " \n ";
        message += " Please Confirm. ";

        alert(message);}
        else{
            alert("Please fill all the fields");
        }
});

document.getElementById("login-button").addEventListener("click", function(){
    var username = document.getElementById("username").value;
    if (username && password){
        alert("This section is still in Progress!");
    }
    else{
        alert("Please fill in all the details.");
    }
})
const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {

    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click", ()  => toggleNavbar());
