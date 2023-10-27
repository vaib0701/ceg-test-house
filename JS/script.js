document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll(".slider-item");
    let currentItem = 0;

    function updateSlider() {
        sliderItems.forEach((item, index) => {
            if (index === currentItem) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentItem = (currentItem + 1) % sliderItems.length;
        updateSlider();
    }

    // Initial update
    updateSlider();

    // Set a timer to advance the slider
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});



