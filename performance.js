document.addEventListener("DOMContentLoaded", () => {
    const ctxBar = document.getElementById("barChart").getContext("2d");
    new Chart(ctxBar, {
        type: "bar",
        data: {
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
            datasets: [
                { label: "Last 6 days", backgroundColor: "#5A6ACF", data: [5, 10, 7, 12, 9, 8, 14, 10, 11, 15, 9, 13] },
                { label: "Last Week", backgroundColor: "#D8D9DB", data: [3, 8, 5, 10, 7, 6, 12, 8, 9, 13, 7, 11] }
            ]
        }
    });

    const ctxDoughnut = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctxDoughnut, {
        type: "doughnut",
        data: {
            labels: ["Afternoon", "Evening", "Morning"],
            datasets: [{ backgroundColor: ["#5A6ACF", "#A78BFA", "#D8D9DB"], data: [40, 32, 28] }]
        }
    });
});