const messages = [
  "Search for books",
  "Find your favorite movies",
  "Explore new recipes",
  "Discover destinations"
];

let index = 0;
const textElement = document.getElementById("slidingText");

function updateText() {
  // Remove and re-add animation to re-trigger it
  textElement.classList.remove("sliding-text");
  void textElement.offsetWidth; // Force reflow
  textElement.textContent = messages[index];
  textElement.classList.add("sliding-text");
}

setInterval(() => {
  index = (index + 1) % messages.length;
  updateText();
}, 4000); // Change time here if needed
