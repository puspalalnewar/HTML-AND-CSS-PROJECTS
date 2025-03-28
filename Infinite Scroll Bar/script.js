const contentDiv = document.getElementById("content");
const loader = document.getElementById("loader");
let loading = false; // Prevent multiple loads at the same time

// Function to generate dummy content
function loadContent(count = 5) {
  for (let i = 0; i < count; i++) {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = "Item " + (contentDiv.children.length + 1);
    contentDiv.appendChild(div);
  }
}

// Load initial content
loadContent(10);

// Infinite Scroll Logic
window.addEventListener("scroll", () => {
  if (loading) return; // Prevent multiple triggers

  // Check if user is near the bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loading = true;
    loader.style.display = "block";

    setTimeout(() => {
      loadContent(5);
      loader.style.display = "none";
      loading = false;
    }, 1000);
  }
});
