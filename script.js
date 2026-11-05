
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "dashboard.html";
    }
}

function searchLocation() {
    const location = document.getElementById("locationSearch").value;
    const result = document.getElementById("searchResult");

    if (location.trim() === "") {
        result.textContent = "Please enter a location.";
        return;
    }

    result.innerHTML = `
        <h3>Location: ${location}</h3>
        <p>Sample flood hazard information is displayed for demonstration.</p>
        <p>Note: This is not verified real-time flood data.</p>
    `;
}

function submitFloodReport(event) {
    event.preventDefault();

    const location = document.getElementById("reportLocation").value;
    const date = document.getElementById("reportDate").value;
    const severity = document.getElementById("severity").value;
    const description = document.getElementById("description").value;

    const result = document.getElementById("reportResult");

    result.innerHTML = "";

    const message = document.createElement("div");
    message.className = "report-success";

    const heading = document.createElement("h3");
    heading.textContent = "Flood Report Submitted!";

    const locationText = document.createElement("p");
    locationText.textContent = "Location: " + location;

    const dateText = document.createElement("p");
    dateText.textContent = "Date: " + date;

    const severityText = document.createElement("p");
    severityText.textContent = "Severity: " + severity;

    const descriptionText = document.createElement("p");
    descriptionText.textContent = "Description: " + description;

    message.append(
        heading,
        locationText,
        dateText,
        severityText,
        descriptionText
    );

    result.appendChild(message);

    event.target.reset();
}
function findRoute(event) {
    event.preventDefault();

    const start = document.getElementById("startLocation").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const result = document.getElementById("routeResult");

    if (start === "" || destination === "") {
        result.innerHTML = "<p>Please enter both locations.</p>";
        return;
    }

    if (start.toLowerCase() === destination.toLowerCase()) {
        result.innerHTML = "<p>Starting location and destination must be different.</p>";
        return;
    }

    result.innerHTML = `
        <h3>Route Recommendation</h3>
        <p><strong>From:</strong> ${start}</p>
        <p><strong>To:</strong> ${destination}</p>
        <p>Route request successfully processed!</p>
        <p><strong>Reminder:</strong> This is a demonstration only.
        No actual road directions or real-time flood conditions are verified.</p>
    `;
}
function logoutUser() {
    window.location.href = "index.html";
}
function showLogin() {
    window.location.href = "login.html";
}