document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".hero-card");
    const dots = document.querySelectorAll(".dot");
    const slider = document.querySelector(".hero-slider");

    function updateSlide(index) {
        currentIndex = index;
        slider.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    dots.forEach(dot => {
        dot.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("data-index"));
            updateSlide(index);
        });
    });

    // Auto-slide every 3 seconds
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
    }, 3000);
});