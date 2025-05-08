const messages = [
  "Search for books",
  "Find your favorite movies",
  "Explore new recipes",
  "Discover destinations"
];

let index = 0;
const textElement = document.getElementById("slidingText");

setInterval(() => {
  index = (index + 1) % messages.length;
  textElement.textContent = messages[index];
}, 4000);
