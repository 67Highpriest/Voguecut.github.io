function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

document.getElementById("bookAppointmentBtn").addEventListener("click", function() {
    document.getElementById("bookingFormContainer").style.display = "flex";
});

document.getElementById("closeFormBtn").addEventListener("click", function() {
    document.getElementById("bookingFormContainer").style.display = "none";
});

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = function() {
    let backToTopBtn = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};



let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}