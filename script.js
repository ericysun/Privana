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

const appData = new Map([
  ["ChatGPT", { developer: "OpenAI", description: "Introducing ChatGPT for iOS: OpenAI’s latest advancements at your fingertips.", filename: "./App Icons/ChatGPT.webp"}],
  ["Threads", { developer: "Instagram Inc.", description: "Say more with Threads — Instagram’s text-based conversation app.", filename: "Threads.webp"}],
  ["Google", { developer: "Google", description: "Download the Google app to stay in the know about things that matter to you. ", filename: "Google.webp" }],
  ["Google Maps", { developer: "Google", description: "Explore and navigate the world with confidence using Google Maps. " , filename: "Google Maps.webp"}],
  ["Microsoft Teams", { developer: "Microsoft Corporation", description: "Whether you’re connecting with your community for an upcoming activity or working with teammates on a project, Microsoft Teams helps bring people together so that they can get things done.", filename: "Microsoft Teams.webp" }],
  ["WhatsApp Messenger", { developer: "WhatsApp Inc.", description: "Message privately, make calls and share files with your friends, family and colleagues.", filename: "Whatsapp Messenger.webp" }],
  ["CapCut - Video Editor", { developer: "Bytedance Pte. Ltd", description: "CapCut offers easy-to-use video editing functions, free in-APP fonts and effects, free advanced features such as keyframe animation, smooth slow-motion, chroma key, and stabilization, to help you capture and snip moments.", filename: "CapCut - Video Editor.webp"}],
  ["TikTok", { developer: "TikTok Ltd.", description: "TikTok is THE destination for mobile videos. On TikTok, short-form videos are exciting, spontaneous, and genuine. Whether you’re a sports fanatic, a pet enthusiast, or just looking for a laugh, there’s something for everyone on TikTok. ", filename: "TikTok.webp"}],
  ["Shop: All your favorite brands", { developer: "Shopify Inc.", description: "Shop, track, and explore the latest trends in an all-in-one shopping app" , filename: "Shop - All your favorite brands .webp"}],
  ["Indeed Job Search", { developer: "Indeed Inc.", description: "Discover your next job opportunity on Indeed, the free job search app designed to connect you with better work anytime, anywhere.", filename: "Indeed Job Search.webp"}],
  ["Gmail - Email by Google", { developer: "Google", description: "Secure, smart, and easy to use email Get more done with Gmail. Now integrated with Google Chat, Google Meet, and more, all in one place.", filename: "Gmail - Email by Google.webp" }],
  ["Whatnot: Shop, Sell, Connect", { developer: "Whatnot Inc.", description: "Whatnot is the largest live shopping platform in the US, UK, and Europe - we’re a marketplace bringing millions together to shop, sell, and connect around the things they love. ", filename:"Whatnot - Shop, Sell, Connect.webp" }],
  ["Instagram", { developer: "Instagram, Inc.", description: "Little moments lead to big friendships. Share yours on Instagram. — From Meta", filename: "Instagram.webp"}],
  ["Telegram Messenger", { developer: "Telegram FZ-LLC", description: "Pure instant messaging — simple, fast, secure, and synced across all your devices.",filename:"Telegram.webp" }],
  ["Gauth: AI Study Companion", { developer: "GAUTHTECH PTE. LTD.", description: "Gauth is the #1 AI study companion powered by newest AI model! Trusted by millions of users, Gauth offers unlimited answers for all subjects. Try Gauth for all your learning needs!",filename:"Gauth.webp" }],
  ["Canva: AI Photo & Video Editor", { developer: "Canva", description: "Canva is an all-in-one visual communication platform that empowers the world to design",filename:"Canva.webp"}],
  ["Microsoft Authenticator", { developer: "Microsoft Corporation", description: "Use Microsoft Authenticator for easy, secure sign-ins for all your online accounts using multi-factor authentication, passwordless, or password autofill.",filename:"MicrosoftAuthenticator.webp" }],
  ["Google Chrome", { developer: "Google", description: "Now more simple, secure and faster than ever. Get the best of Google Search, and easily sync your bookmarks and passwords with Chrome on your laptop. ",filename:"Google Chrome.webp" }],
  ["Max: Stream HBO, TV, & Movies", { developer: "WarnerMedia Global Digital Services, LLC", description: "The most talked about shows and movies featuring the worlds of HBO, the DC Universe, Adult Swim, A24, and beyond — plus live sports, breaking news, and more on Max.",filename:"Max.webp"}],
  ["Facebook", { developer: "Meta Platforms, Inc.", description: "Where real people propel your curiosity. Whether you’re thrifting gear, showing a reel to that group who gets it, or sharing laughs over fun images reimagined by AI, Facebook helps you make things happen like no other social network.",filename:"Facebook.webp" }],
  ["Spotify: Music and Podcasts", { developer: "Spotify", description: "With the Spotify app, you can explore an extensive library of music and podcasts for free. Curate the best playlists and stream millions of free songs, albums, and original podcasts on your phone or tablet. ",filename:"Spotify.webp"}],
  ["Walmart: Shopping & Savings", { developer: "Walmart", description: "The Walmart app is the easiest way to shop for everything on your list, including fresh groceries, household essentials, the latest tech and a lot more. ",filename:"Walmart.webp"}],
  ["Capital One Shopping: Save Now", { developer: "Wikibuy, LLC", description: "100% Free for everyone - no Capital One account required! Get free automatic coupons and exclusive savings on the go. Plus, get a free rewards bonus when you download the app and add the free tool to Safari.",filename:"CapitalOne Shopping.webp" }],
  ["YouTube", { developer: "Google", description: "Get the official YouTube app on iPhones and iPads. See what the world is watching -- from the hottest music videos to what’s popular in gaming, fashion, beauty, news, learning and more. ",filename:"YouTube.webp" }],
  ["Uber - Request a ride", { developer: "Uber Technologies, Inc.", description: "Join the millions of riders who trust Uber for their everyday travel needs. Whether you’re running an errand across town or exploring a city far from home, getting there should be easy.",filename:"Uber.webp" }],
  ["Microsoft Outlook", { developer: "Microsoft Corporation", description: "Outlook lets you bring all your email accounts and calendars in one convenient spot. Whether it’s staying on top of your inbox or scheduling the next big thing, we make it easy to be your most productive, organised and connected self.",filename:"Microsoft Outlook.webp" }],
  ["DoorDash - Food Delivery", { developer: "DoorDash, Inc.", description: "With more than 310,000 menus and 55,000+ grocery, convenience and retail stores across 4,000+ cities in the U.S., Canada, and Australia, DoorDash offers the greatest online selection of your favorite restaurants and stores, delivered wherever you are.",filename:"Doordash.webp" }],
  ["McDonald's", { developer: "McDonald's USA", description: "Get the app now to join MyMcDonald's Rewards and start earning points on your faves for free McDonald's. Plus, get exclusive deals and save time by ordering ahead in the app.",filename:"McDonalds.webp" }],
  ["Meta AI", { developer: "Meta Platforms, Inc.", description: "Meet the new Meta AI app, your personal AI assistant that understands you. Get tailored answers, advice and inspiration as you go about your day.", filename:"Meta AI.webp" }],
  ["Cash App: Mobile Banking", { developer: "Block, Inc.", description: "Cash App is the easy way to spend, save, and invest your money.* Pay anyone in cash or bitcoin* instantly and enjoy Cash App's free Lightning Network transfers with compatible wallets. Start saving by rounding up your spare change to the nearest dollar or invest in stocks, ETFs, or bitcoin." ,filename:"Cash App.webp"}]
]);

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

    // Dismiss the mobile keyboard by blurring the input field
    event.target.blur();

    if (searchTerm) {
      displayResults(searchTerm);
    }
  }
});

function displayResults(searchTerm) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = ''; 

  let foundResults = false;
  appData.forEach((value, appName) => {
    if (appName.toLowerCase().includes(searchTerm.toLowerCase())) {
      foundResults = true;

      // Create a result tile
      const tile = document.createElement('div');
      tile.className = 'result-tile';

      const icon = document.createElement('img');
      icon.className = 'app-icon';
      icon.src = `./app icons/${value.filename}`;
      icon.alt = `${appName} icon`;

      const content = document.createElement('div');
      content.className = 'result-content';

      const title = document.createElement('div');
      title.className = 'result-title';
      title.textContent = appName;

      const developer = document.createElement('div');
      developer.className = 'result-developer';
      developer.textContent = `Developer: ${value.developer}`;

      const description = document.createElement('div');
      description.className = 'result-description';
      description.textContent = value.description;

      content.appendChild(title);
      content.appendChild(developer);
      content.appendChild(description);

      const closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.textContent = 'X';

      tile.addEventListener('click', function () {
        tile.classList.add('expanded');
      });

      closeButton.addEventListener('click', function (event) {
        event.stopPropagation();
        tile.classList.remove('expanded');
      });

      tile.appendChild(icon);
      tile.appendChild(content);
      tile.appendChild(closeButton);

      resultsContainer.appendChild(tile);
    }
  });

  // If no results are found
  if (!foundResults) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No apps found matching your search.';
    resultsContainer.appendChild(noResults);
  }
}
