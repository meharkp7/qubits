const flashcards = [
    { question: "What is Python?", answer: "Python is a high-level programming language." },
    { question: "How do you define a function in Python?", answer: "Using the `def` keyword." },
    { question: "What is a list in Python?", answer: "A collection of ordered, mutable items." },
    { question: "What is the difference between a list and a tuple?", answer: "Lists are mutable (can be changed), while tuples are immutable (cannot be changed). Lists use `[]`, while tuples use `()`." },
    { question: "How do you create a dictionary?", answer: "Using curly braces `{}` with key-value pairs." },
    { question: "What is the purpose of the `len()` function?", answer: "It returns the number of items in an iterable like a list, string, or tuple." },
    { question: "How do you write a loop in Python?", answer: "Using `for` or `while` loops." },
    { question: "What does `if __name__ == '__main__':` do?", answer: "Ensures the script runs only when executed directly." },
    { question: "What is a lambda function?", answer: "An anonymous function defined with `lambda`." },
    { question: "What is list comprehension?", answer: "A concise way to create lists in a single line." },
    { question: "How do you swap two variables in Python without using a temporary variable?", answer: "a, b = 5, 10 → a, b = b, a → print(a, b)" },
    { question: "What is the difference between `is` and `==` in Python?", answer: "`==` checks for value equality, while `is` checks for object identity (whether they refer to the same memory location)." },
    { question: "How do you check if a key exists in a dictionary?", answer: "my_dict = {\"name\": \"Mehar\", \"age\": 17} → print(\"age\" in my_dict)" }
];

let currentIndex = 0;

const flashcardEl = document.getElementById("flashcard");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const nextBtn = document.getElementById("next-btn");

function loadFlashcard(index) {
    questionEl.textContent = flashcards[index].question;
    answerEl.textContent = flashcards[index].answer;
    flashcardEl.classList.remove("flipped");
}

flashcardEl.addEventListener("click", () => {
    flashcardEl.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadFlashcard(currentIndex);
});

window.onload = () => {
    loadFlashcard(currentIndex);
};

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
