const images = [
    "offer.jpeg",
    "summer sale.jpeg",
    "festive1.jpeg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("heroImage").src =
        images[index];

}, 5000);


const bannerImage = document.getElementById("bannerImage");

const bannerImages = [
    "idependence.jpeg",
    "discount.jpeg"
];

let currentImage = 0;

setInterval(() => {

    // Fade out
    bannerImage.style.opacity = 0;

    setTimeout(() => {

        // Change image
        currentImage++;

        if(currentImage >= bannerImages.length){
            currentImage = 0;
        }

        bannerImage.src = bannerImages[currentImage];

        // Fade in
        bannerImage.style.opacity = 1;

    }, 500);

}, 5000);

const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

searchInput.addEventListener("input", () => {

    if (searchInput.value.trim() !== "") {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }

});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();
});

// Set countdown to 24 hours from now
let countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

let timer = setInterval(function () {

    let now = new Date().getTime();
    let distance = countdownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML =
        hours.toString().padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        minutes.toString().padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        seconds.toString().padStart(2, "0");

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".deal-timer").innerHTML =
            "Offer Expired";
    }

}, 1000);