const flashcards = [
    { question: "What is Data Science?", answer: "Data Science is an interdisciplinary field that uses statistics, algorithms, and machine learning to extract insights from data." },
    { question: "What are the key steps in a Data Science project?", answer: "1. Data Collection, 2. Data Cleaning, 3. Exploratory Data Analysis, 4. Feature Engineering, 5. Model Building, 6. Model Evaluation, 7. Deployment." },
    { question: "What is supervised learning?", answer: "A type of machine learning where the model is trained using labeled data." },
    { question: "What is unsupervised learning?", answer: "A type of machine learning where the model finds patterns in unlabeled data." },
    { question: "What is overfitting?", answer: "Overfitting occurs when a model learns noise instead of the actual pattern, performing well on training data but poorly on new data." },
    { question: "What is underfitting?", answer: "Underfitting occurs when a model is too simple and fails to capture the underlying pattern in the data." },
    { question: "What is the difference between classification and regression?", answer: "Classification predicts discrete labels, while regression predicts continuous values." },
    { question: "What is the purpose of feature scaling?", answer: "Feature scaling standardizes or normalizes data to ensure all features contribute equally to the model." },
    { question: "What is principal component analysis (PCA)?", answer: "PCA is a dimensionality reduction technique that transforms features into fewer uncorrelated components while retaining most variance." },
    { question: "What is cross-validation?", answer: "Cross-validation is a technique to evaluate model performance by splitting data into multiple training and testing subsets." },
    { question: "What is a confusion matrix?", answer: "A confusion matrix is a table used to evaluate classification models by displaying true positives, false positives, true negatives, and false negatives." },
    { question: "What is recall and precision?", answer: "Recall measures the ability to find all relevant instances, while precision measures how many predicted positives are actually correct." },
    { question: "What is the difference between bagging and boosting?", answer: "Bagging reduces variance by training multiple independent models, while boosting reduces bias by training sequential models that correct previous errors." },
    { question: "What is an outlier?", answer: "An outlier is a data point that significantly deviates from the rest of the dataset." },
    { question: "What is the difference between parametric and non-parametric models?", answer: "Parametric models have a fixed number of parameters (e.g., linear regression), while non-parametric models adapt to data complexity (e.g., decision trees)." }
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