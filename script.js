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
  textElement.classList.remove("sliding-text");
  void textElement.offsetWidth;
  textElement.textContent = messages[index];
  textElement.classList.add("sliding-text");
}

setInterval(() => {
  index = (index + 1) % messages.length;
  updateText();
}, 2000); 

document.getElementById('search').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const searchTerm = event.target.value.trim();
    if (searchTerm) {
      localStorage.setItem('lastSearch', searchTerm);
      displayResults(searchTerm);
    }
  }
});

function displayResults(searchTerm) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    const tile = document.createElement('div');
    tile.className = 'result-tile';

    const title = document.createElement('div');
    title.className = 'result-title';
    title.textContent = `${searchTerm} Result ${i}`;

    const description = document.createElement('div');
    description.className = 'result-description';
    description.textContent = `This is a detailed description for ${searchTerm} Result ${i}.`;

    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.textContent = 'X';

    // Add click event to expand the tile
    tile.addEventListener('click', function () {
      tile.classList.add('expanded');
    });

    // Add click event to close the expanded tile
    closeButton.addEventListener('click', function (event) {
      event.stopPropagation();
      tile.classList.remove('expanded');
    });

    tile.appendChild(closeButton);
    tile.appendChild(title);
    tile.appendChild(description);

    resultsContainer.appendChild(tile);
  }
}
