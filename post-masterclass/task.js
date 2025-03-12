document.addEventListener("DOMContentLoaded", async function () {
    const taskContent = document.getElementById("task-content");
    const generateTaskBtn = document.getElementById("generate-task-btn");

    async function fetchTask() {
        taskContent.textContent = "Generating task...";
        const response = await fetch("http://localhost:5000/generate-task", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ summary: "CSS Selectors, Flexbox, Grid, Animations, Responsive Design" })
        });

        const data = await response.json();
        taskContent.textContent = data.task;
    }

    generateTaskBtn.addEventListener("click", fetchTask);

    fetchTask(); // Fetch task on load
});
