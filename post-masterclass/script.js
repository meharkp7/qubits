document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.getElementById("menu-toggle");
    const containerRight = document.querySelector(".container-right");

    if (!menuToggle || !sidebar || !containerRight) {
        console.error("Sidebar or menu toggle button not found.");
        return;
    }

    menuToggle.addEventListener("click", function () {
        console.log("Menu button clicked!"); 
        sidebar.classList.toggle("collapsed");

        if (sidebar.classList.contains("collapsed")) {
            containerRight.style.marginLeft = "80px"; 
        } else {
            containerRight.style.marginLeft = "250px"; 
        }
    });
});