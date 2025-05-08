const messages = [
  "See what apps know",
  "Your data. Your choice.",
  "Find out what’s shared",
  "Privacy starts here",
  "Understand app access",
  "Discover app behavior",
  "See who uses your data",
  "Know before you download",
  "Take control of your info",
  "Clarity. On every app"
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
