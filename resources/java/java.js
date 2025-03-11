const flashcards = [
    { question: "What is Java?", answer: "Java is a high-level, object-oriented programming language." },
    { question: "How do you define a method in Java?", answer: "Using the `returnType methodName(parameters) {}` syntax." },
    { question: "What is an array in Java?", answer: "A collection of fixed-size, same-type elements." },
    { question: "What is the difference between `==` and `.equals()`?", answer: "`==` checks reference equality, while `.equals()` checks value equality." },
    { question: "How do you create an object in Java?", answer: "Using `ClassName obj = new ClassName();`" },
    { question: "What is the purpose of the `final` keyword?", answer: "It makes variables constants, prevents method overriding, and stops class inheritance." },
    { question: "How do you write a loop in Java?", answer: "Using `for`, `while`, or `do-while` loops." },
    { question: "What is the main method in Java?", answer: "`public static void main(String[] args) {}` is the entry point of a Java program." },
    { question: "What is method overloading?", answer: "Defining multiple methods with the same name but different parameters." },
    { question: "What is method overriding?", answer: "Redefining a method in a subclass that already exists in the parent class." },
    { question: "What is the difference between `static` and instance methods?", answer: "Static methods belong to the class, while instance methods belong to objects." },
    { question: "What is the `super` keyword used for?", answer: "It refers to the parent class and is used to call parent methods or constructors." },
    { question: "How do you handle exceptions in Java?", answer: "Using `try-catch-finally` blocks." },
    { question: "What is a constructor?", answer: "A special method used to initialize objects, having the same name as the class." },
    { question: "What is inheritance in Java?", answer: "A mechanism where a subclass inherits properties and behavior from a parent class." }
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
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("collapsed");
        });
    }
});