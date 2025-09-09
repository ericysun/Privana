// Supabase configuration
const supabaseUrl = 'https://rdcpxabkgamgamtlkymw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkY3B4YWJrZ2FtZ2FtdGxreW13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxODQ1NTUsImV4cCI6MjA3MTc2MDU1NX0.U9psyEJp-JEFN30MlETa9Y9mAm6SUqoCN2YkXMRIlNQ';
const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

const messages = [
  "See what apps know.",
  "We read the fine print.",
  "You get the real story.",
  "No jargon. Just facts.",
  "Summarized for real people.",
  "Simple answers. No surprises."
  ];

// Function to search apps from Supabase
async function searchApps(searchTerm) {
  console.log('Searching for:', searchTerm);
  
  const { data, error } = await supabase
    .from('PrivanaAppData')
    .select('*')
    .ilike('AppName', `%${searchTerm}%`);
  
  console.log('Supabase response:', { data, error });
  
  if (error) {
    console.error('Error fetching apps:', error);
    return [];
  }
  return data;
}

let index = 0;
const textElement = document.getElementById("slidingText");

function updateText() {
  textElement.classList.remove("sliding-text");
  void textElement.offsetWidth;
  textElement.textContent = messages[index];
  textElement.classList.add("sliding-text");
  index = (index + 1) % messages.length;
}

setInterval(updateText, 3000);
updateText();

// Search functionality
async function displayResults(searchTerm) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; // Clear previous results

  // Don't search for empty terms
  if (!searchTerm.trim()) {
    return; 
  }

  try {
    resultsContainer.innerHTML = '<div class="loading">Searching...</div>';
      const apps = await searchApps(searchTerm);
      resultsContainer.innerHTML = '';
    
    if (apps.length === 0) {
      resultsContainer.innerHTML = '<div class="no-results">No apps found matching your search. Suggest an app to add <a href="https://forms.gle/mhHYBYPjpE2DfhuJ8" target="_blank">here</a>!</div>';
      return;
    }

    apps.forEach(app => {
      const tile = document.createElement('div');
      tile.className = 'result-tile';

      const icon = document.createElement('img');
      icon.className = 'app-icon';
      icon.src = `./App Icons/${app.logoFileName}`;
      icon.alt = `${app.AppName} icon`;

      const content = document.createElement('div');
      content.className = 'result-content';

      const title = document.createElement('div');
      title.className = 'result-title';
      title.textContent = app.AppName;

      const developer = document.createElement('div');
      developer.className = 'result-developer';
      developer.textContent = `Developer: ${app.Developer}`;

      const description = document.createElement('div');
      description.className = 'result-description';
      description.textContent = app.Description;

      const detailedInfo = document.createElement('div');
      detailedInfo.className = 'result-detailed-info';

      const detailedInfoTitle = document.createElement('div');
      detailedInfoTitle.className = 'detailed-info-title';
      detailedInfoTitle.textContent = 'Privacy Information';

      const detailedInfoText = document.createElement('div');
      detailedInfoText.className = 'detailed-info-text';
      detailedInfoText.innerHTML = app.detailedInfo || "Privacy info not yet available.";

      const disclaimerSection = document.createElement('div');
      disclaimerSection.className = 'disclaimer-section';
      disclaimerSection.innerHTML = `
        <div class="disclaimer-header">
          <span class="disclaimer-icon">ⓘ</span>
          <span class="disclaimer-text">Privana summaries may contain mistakes.</span>
        </div>
        <div class="disclaimer-explanation">
          <p>While we strive for accuracy, our summaries may not reflect the most current privacy policies. App privacy practices are summarized with a LLM, which may make mistakes or misrepresentations. We recommend checking the official privacy policy of any app for the most up-to-date information.</p>
        </div>
      `;

      detailedInfo.appendChild(detailedInfoTitle);
      detailedInfo.appendChild(disclaimerSection);
      detailedInfo.appendChild(detailedInfoText);

      detailedInfo.style.display = 'none';

      content.appendChild(title);
      content.appendChild(developer);
      content.appendChild(description);

      const closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.textContent = 'X';

      tile.addEventListener('click', function () {
        tile.classList.add('expanded');
        detailedInfo.style.display = 'block';
        
        initializeDisclaimerForTile(disclaimerSection);
      });

      closeButton.addEventListener('click', function (event) {
        event.stopPropagation();
        tile.classList.remove('expanded');
        detailedInfo.style.display = 'none';
      });

      tile.appendChild(icon);
      tile.appendChild(content);
      tile.appendChild(detailedInfo); 
      tile.appendChild(closeButton);

      resultsContainer.appendChild(tile);
    });

  } catch (error) {
    console.error('Error searching apps:', error);
    resultsContainer.innerHTML = '<div class="error">Error searching apps. Please try again.</div>';
  }
}

function initializeDisclaimerForTile(disclaimerSection) {
  const disclaimerHeader = disclaimerSection.querySelector('.disclaimer-header');
  const disclaimerIcon = disclaimerSection.querySelector('.disclaimer-icon');
  const disclaimerExplanation = disclaimerSection.querySelector('.disclaimer-explanation');
  
  if (disclaimerHeader && disclaimerIcon && disclaimerExplanation) {
    disclaimerHeader.removeEventListener('click', disclaimerHeader.clickHandler);
    
    disclaimerHeader.clickHandler = function() {
      const isExpanded = disclaimerExplanation.classList.contains('expanded');
      
      if (isExpanded) {// Collapse
        disclaimerExplanation.classList.remove('expanded');
        disclaimerIcon.classList.remove('expanded');
      } else {// Expand
        disclaimerExplanation.classList.add('expanded');
        disclaimerIcon.classList.add('expanded');
      }
    };
    
    disclaimerHeader.addEventListener('click', disclaimerHeader.clickHandler);
  }
}

document.getElementById('search').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    const searchTerm = event.target.value.trim();

    // Dismiss the mobile keyboard by blurring the input field
    event.target.blur();

    if (searchTerm) {
      displayResults(searchTerm);
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const welcomeOverlay = document.getElementById('welcome-overlay');
  const continueBtn = document.getElementById('continue-btn');
  
  const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
  
  if (!hasSeenWelcome) {
    welcomeOverlay.style.display = 'flex';
  } else {
    welcomeOverlay.style.display = 'none';
  }
  
  continueBtn.addEventListener('click', function() {
    welcomeOverlay.style.display = 'none';
    localStorage.setItem('hasSeenWelcome', 'true');
  });
});