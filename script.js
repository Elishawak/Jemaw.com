    let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

function currentSlide(n) {
    clearTimeout();
    slideIndex = n - 1;
    showSlides();
}

// Initialize slider
showSlides();                        

