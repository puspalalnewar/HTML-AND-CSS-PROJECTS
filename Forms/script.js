document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Form submitted successfully!";
});