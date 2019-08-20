
var video = document.getElementById("bannerVid");

video.playbackRate = 0.75;

function openSideNav() {
    document.getElementById("slideNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("slideNav").style.height = "0%";
}

var slideIndex = 1;
showSlides(slideIndex);

// next or previous
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// thumbsnail control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("opacity");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
