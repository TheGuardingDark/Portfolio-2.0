
var video = document.getElementById("bannerVid");
var modal = document.getElementById("portModal");
var span = document.getElementsByClassName("modalClose")[0];
var slideIndex = 1;
showSlides(slideIndex);

video.playbackRate = 0.75;

function openModal() {
modal.style.display = "block";

}

span.onclick = function() {
    modal.style.display = "none";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += "active";
    }


function openSideNav() {
    document.getElementById("slideNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("slideNav").style.height = "0%";
}





