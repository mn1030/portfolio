
//STICKY NAVBAR
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//PARALLAX HEADER

document.addEventListener("mousemove", parallax);

var mouseX;

function parallax(e) {

    // Get the mouse position
    mouseX = e.clientX;

    var parallaxFactor = 0.04;

    // Get all elements with the 'parallax' class within 'myCanvas'; starting from back with lowest to highest factor
    var parallaxElements = document.querySelectorAll("#myCanvas .lowest-parallax");
    setParallax(parallaxElements,parallaxFactor);

    parallaxFactor = 0.04;
    var parallaxElements = document.querySelectorAll("#myCanvas .lower-parallax");
    setParallax(parallaxElements,parallaxFactor);

    parallaxFactor = 0.05;
    var parallaxElements = document.querySelectorAll("#myCanvas .low-parallax");
    setParallax(parallaxElements,parallaxFactor);

    parallaxFactor = 0.1;
    var parallaxElements = document.querySelectorAll("#myCanvas .mid-parallax");
    setParallax(parallaxElements,parallaxFactor);

    parallaxFactor = 0.1;
    var parallaxElements = document.querySelectorAll("#myCanvas .high-parallax");
    setParallax(parallaxElements,parallaxFactor);

    parallaxFactor = 0.14;
    var parallaxElements = document.querySelectorAll("#myCanvas .highest-parallax");
    setParallax(parallaxElements,parallaxFactor);
    
}

function setParallax(parallaxElements, parallaxFactor){
    parallaxElements.forEach(function (element) {
        var elementRect = element.getBoundingClientRect();
        var elementCenterX = elementRect.left + elementRect.width / 2;
        var parallaxValue = (mouseX - elementCenterX) * parallaxFactor;

        // Update the element's position
        element.style.transform = "translateX(" + parallaxValue + "px)";
    });
}
