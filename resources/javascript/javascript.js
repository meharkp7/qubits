const flashcards = [
    { question: "What is JavaScript?", answer: "JavaScript is a scripting language used to create dynamic website content." },
    { question: "How do you declare a variable in JavaScript?", answer: "Using `var`, `let`, or `const`. Example: `let x = 10;`" },
    { question: "What is the difference between `let`, `var`, and `const`?", answer: "`var` has function scope, `let` and `const` have block scope, and `const` cannot be reassigned." },
    { question: "What is a function in JavaScript?", answer: "A block of reusable code defined using `function` keyword or arrow functions `()=>{}`." },
    { question: "What is an arrow function?", answer: "A shorter function syntax: `(param) => expression`." },
    { question: "What are JavaScript data types?", answer: "String, Number, Boolean, Object, Undefined, Null, Symbol, and BigInt." },
    { question: "What is the difference between `==` and `===`?", answer: "`==` checks for value equality (type coercion allowed), while `===` checks for both value and type equality." },
    { question: "What is an array in JavaScript?", answer: "A collection of values stored in a single variable, e.g., `[1, 2, 3]`." },
    { question: "What is an object in JavaScript?", answer: "A collection of key-value pairs, e.g., `{name: 'Alice', age: 25}`." },
    { question: "What is the DOM?", answer: "The Document Object Model represents the structure of an HTML document and allows JavaScript to interact with it." },
    { question: "What is `localStorage` in JavaScript?", answer: "A way to store key-value pairs in the browser with no expiration time." },
    { question: "What is `JSON`?", answer: "JavaScript Object Notation, a lightweight data format used for data exchange." },
    { question: "What is an event in JavaScript?", answer: "An interaction like a click or keypress that triggers event handlers." },
    { question: "What is asynchronous JavaScript?", answer: "Code execution that doesn’t block the main thread, using callbacks, promises, or async/await." },
    { question: "What is `setTimeout()`?", answer: "A function that executes a task after a specified delay, e.g., `setTimeout(() => console.log('Hello'), 2000);`" }
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