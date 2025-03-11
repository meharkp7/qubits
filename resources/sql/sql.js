const flashcards = [
    { question: "What is SQL?", answer: "SQL (Structured Query Language) is used to manage and manipulate relational databases." },
    { question: "What are the different types of SQL commands?", answer: "SQL commands are classified into DDL, DML, DCL, and TCL." },
    { question: "What is the difference between DDL and DML?", answer: "DDL (Data Definition Language) modifies the structure of a database, while DML (Data Manipulation Language) modifies the data within tables." },
    { question: "What is the purpose of the SELECT statement?", answer: "The SELECT statement retrieves data from a database." },
    { question: "What is a primary key?", answer: "A primary key uniquely identifies each record in a table and cannot be NULL." },
    { question: "What is a foreign key?", answer: "A foreign key is a column that creates a relationship between two tables." },
    { question: "What is the difference between INNER JOIN and OUTER JOIN?", answer: "INNER JOIN returns matching rows from both tables, while OUTER JOIN returns all rows from one table and matching rows from another." },
    { question: "What is the difference between WHERE and HAVING?", answer: "WHERE filters rows before aggregation, while HAVING filters aggregated results." },
    { question: "What is normalization?", answer: "Normalization is the process of organizing data to reduce redundancy and improve consistency." },
    { question: "What is the purpose of an index in SQL?", answer: "Indexes improve the speed of data retrieval operations in a database." },
    { question: "What is a stored procedure?", answer: "A stored procedure is a set of SQL statements stored in the database and executed as a single unit." },
    { question: "What is a view in SQL?", answer: "A view is a virtual table based on a query that provides a simplified way to access data." },
    { question: "What is ACID in databases?", answer: "ACID (Atomicity, Consistency, Isolation, Durability) ensures reliable transactions in a database." },
    { question: "What is the difference between UNION and UNION ALL?", answer: "UNION removes duplicate rows, while UNION ALL includes all rows, including duplicates." },
    { question: "What is the difference between DELETE and TRUNCATE?", answer: "DELETE removes specific rows and can be rolled back, while TRUNCATE removes all rows and cannot be rolled back." }
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
