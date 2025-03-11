let currentIndex = 0;
const slides = document.querySelectorAll(".hero-card");
const dots = document.querySelectorAll(".dot");

function changeSlide(index) {
    currentIndex = index;
    document.querySelector(".hero-slider").style.transform = `translateX(-${index * 100}%)`;
    
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => changeSlide(index));
});
