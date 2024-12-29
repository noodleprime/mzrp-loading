let slideIndex = 0;
showSlides(); // Start the slideshow immediately

function showSlides() {
    let slides = document.getElementsByClassName("fade");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");  // Remove the 'active' class to hide all images
    }

    slideIndex++;  // Increment slideIndex to show the next image

    // If the index exceeds the number of slides, reset it to 1 (looping)
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide by adding the 'active' class
    slides[slideIndex - 1].classList.add("active");

    // Change slide every 3 seconds (3000ms)
    setTimeout(showSlides, 3000);
}
