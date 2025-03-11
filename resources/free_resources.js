document.addEventListener("DOMContentLoaded", function () {
    const topicBoxes = document.querySelectorAll(".topic-box");

    topicBoxes.forEach(box => {
        box.addEventListener("click", function () {
            const topic = this.getAttribute("data-topic");
            alert("Opening " + topic + " resources!");
        });
    });
    
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            sidebar.classList.toggle("collapsed");
        });
    }
});