window.onscroll = function() {makeSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function makeSticky() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function dropdown() {
    var x = document.getElementById("navbar");
    if(x.className == "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
}

function eventMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

function emailSent() {
    document.getElementById("emailSent").innerHTML = "Thank you for your message. Your query will be received after completing the email and we will be in touch."
}

// ---------------------------------------------
// event slide show js
var slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("event-slide");
    var dots = document.getElementsByClassName("event-slide-dot");
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace(" active", "");
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// ---------------------------------------------
// event slide adder
function slideAdder(name, n) {
    for(var i = 0; i < n; i++) {
        var html =
            '<div class="event-slide event-slide-fade">' +
            '<div class="event-slide-number">' + (i+1) + ' / ' + n + '</div>' +
            '<img src="' + name + (i < 10 ? '/0' : '/') + i + '.jpg"style="max-width: 100%">' +
            '</div>';
        document.getElementById('event-container').innerHTML += html;
    }
}
function dotAdder(n) {
    for(var i = 0; i < n; i++) {
        document.getElementById('event-dot').innerHTML += 
            '<span class="event-slide-dot" onclick="currentSlide(' + (i+1) + ')"></span>';
    }
}