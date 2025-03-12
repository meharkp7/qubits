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

    setInterval(() => {
        let nextIndex = (currentIndex + 1) % slides.length;
        updateSlide(nextIndex);
    }, 3000);

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("collapsed");
        });
    }
});

const flashcards = [
    { question: "What is C++?", answer: "C++ is a general-purpose programming language that supports both procedural and object-oriented programming." },
    { question: "How do you declare a variable in C++?", answer: "Using a data type followed by the variable name, e.g., `int x;`" },
    { question: "What is the difference between `cin` and `cout`?", answer: "`cin` is used for input, while `cout` is used for output in C++." },
    { question: "What is a pointer in C++?", answer: "A pointer is a variable that stores the memory address of another variable." },
    { question: "How do you create an array in C++?", answer: "Using the syntax `dataType arrayName[size];` e.g., `int arr[5];`" },
    { question: "What is function overloading?", answer: "Defining multiple functions with the same name but different parameters." },
    { question: "What is the purpose of constructors in C++?", answer: "Constructors initialize objects when they are created." },
    { question: "What is the difference between a class and an object?", answer: "A class is a blueprint, while an object is an instance of a class." },
    { question: "How do you implement inheritance in C++?", answer: "Using the syntax `class Derived : public Base {}`" },
    { question: "What is the difference between `public`, `private`, and `protected` access specifiers?", answer: "`public` members are accessible everywhere, `private` only within the class, and `protected` within the class and its derived classes." },
    { question: "What is a virtual function?", answer: "A function that can be overridden in a derived class and supports runtime polymorphism." },
    { question: "What is `new` and `delete` used for?", answer: "`new` allocates memory dynamically, and `delete` deallocates it." },
    { question: "What is the use of `this` pointer?", answer: "It refers to the current instance of a class." },
    { question: "What is the purpose of `friend` function in C++?", answer: "A `friend` function can access private and protected members of a class." },
    { question: "What is the difference between `struct` and `class` in C++?", answer: "By default, `struct` members are public, while `class` members are private." }
];

let currentIndex = 0;

const flashcardEl = document.getElementById("flashcard");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("next-btn");

function loadFlashcard(index) {
    if (questionEl && answerEl && flashcardEl) {
        questionEl.textContent = flashcards[index].question;
        answerEl.textContent = flashcards[index].answer;
        flashcardEl.classList.remove("flipped");
    }
}

if (flashcardEl) {
    flashcardEl.addEventListener("click", () => {
        flashcardEl.classList.toggle("flipped");
    });
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % flashcards.length;
        loadFlashcard(currentIndex);
    });
}

window.onload = () => {
    loadFlashcard(currentIndex);
};