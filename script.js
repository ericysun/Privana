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
  ["ChatGPT", { developer: "OpenAI", description: "Introducing ChatGPT for iOS: OpenAI’s latest advancements at your fingertips.", filename: "ChatGPT.webp"}],
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
  ["Cash App: Mobile Banking", { developer: "Block, Inc.", description: "Cash App is the easy way to spend, save, and invest your money.* Pay anyone in cash or bitcoin* instantly and enjoy Cash App's free Lightning Network transfers with compatible wallets. Start saving by rounding up your spare change to the nearest dollar or invest in stocks, ETFs, or bitcoin." ,filename:"Cash App.webp"}],
  ["Google Gemini", { developer: "Google", description: "The Google Gemini app is an AI assistant that can help supercharge your creativity and productivity.", filename:"Google Gemini.webp" }],
  ["Amazon Shopping", { developer: "AMZN Mobile LLC", description: "Amazon Shopping offers app-only benefits to help make shopping on Amazon faster and easier. Browse, view product details, read reviews, and purchase millions of products. Amazon delivers to 100+ countries in as quickly as 3-5 days.", filename:"Amazon.webp" }],
  ["Bible Chat: Daily Devotional", { developer: "Bookvitals APP SRL", description: "", filename:"Bible Chat.webp" }],
  ["PayPal - Pay, Send, Save", { developer: "PayPal, Inc.", description: "PayPal is a smart and secure way to shop in-store and online, earn cash back on brands you love, send money to friends and much more. Get started in the app.", filename:"Paypal.webp" }],
  ["Ticketmaster－Buy, Sell Tickets", { developer: "Ticketmaster", description: "The Ticketmaster app makes it easier to buy, sell, and get into the very best of live entertainment - so you can get on with making memories that last. We give you unparalleled access to thousands of venues, artists, theater and sports events.", filename:"Ticketmaster.webp" }],
  ["Zoom Workplace", { developer: "Zoom Communications, Inc.", description: "Reimagine teamwork with Zoom Workplace, an AI-first, open collaboration platform that combines team chat, meetings, phone*, whiteboard, calendar, mail, docs, and more. Use Zoom Workplace for iOS with any free or paid Zoom license.", filename:"Zoom.webp" }],
  ["Google Meet", { developer: "Google", description: "Google Meet is a high-quality video calling app designed to help you have meaningful and fun interactions with your friends, family, colleagues, and classmates, wherever they are. Meet lets you connect in whatever way works for you: Call someone spontaneously, schedule time together, or send a video message that they can watch and respond to later.", filename:"Google Meet.webp" }],
  ["Google Drive", { developer: "Google", description: "Google Drive, part of Google Workspace, lets you securely store, intelligently organize and collaborate on files and folders from anywhere, on any device.", filename:"Google Drive.webp" }],
  ["Google Docs ", { developer: "Google", description: "Create, edit, and collaborate on online documents with the Google Docs app. Work together in real time. Share documents with your team. Edit, comment, and add action items in real time. Never lose changes or previous versions of your document with version history.", filename:"Google Docs.webp" }],
  ["Life360: Stay Connected & Safe", { developer: "Life360", description: "Loving someone means worrying constantly. Life360 helps you know they’re safe, no horror-movie plot twists required. Stay connected and secure with Life360, the ultimate friend and family locator and location-tracking app.", filename:"Life360.webp" }],
  ["Best Buy: Tech drops & deals", { developer: "Best Buy Co., Inc.", description: "Get the best deals on appliances, electronics and more at Best Buy. We’ve simplified tech shopping, with warp-speed checkout, Curbside Pickup, limited runs, and can't-miss deals. Whether you’re in the market for the latest gadgets, electronics or essential appliances, Best Buy provides everything you need at your fingertips.", filename:"Best Buy.webp" }],
  ["Expedia: Hotels, Flights, Cars", { developer: "Expedia, Inc.", description: "TRAVEL PLANNING MADE EASY IN ONE APP Plan, collaborate, book and manage your whole trip, from flights, vacation packages, hotels, car rentals, activities, and more. Find inspiration for your next destination, expert tips and personalized recommendations. Book your flight, hotel and more together to save.*", filename:"Expedia.webp" }],
  ["Airbnb", { developer: "Airbnb, Inc.", description: "THE FASTEST, EASIEST WAY TO AIRBNB Find inspiration, plan a trip with your group, book it, and go. You’ll always have access to important trip information. And you’ll never miss a beat with instant notifications about your travel plans and messages from your host.", filename:"Airbnb.webp" }],
  ["Discord - Talk, Play, Hang Out", { developer: "Discord, Inc.", description: "Discord is designed for gaming and great for just chilling with friends or building a community. Customize your own space and gather your friends to talk while playing your favorite games, or just hang out.", filename:"Discord.webp" }],
  ["Venmo", { developer: "Venmo", description: "Venmo is the fast, safe, social way to pay and get paid. Join over 83 million people who use the Venmo app today.", filename:"Venmo.webp" }],
  ["Pinterest", { developer: "Pinterest", description: "Pinterest is a place of endless possibilities. You can: - Discover everyday inspiration - Shop styles you love - Try and learn something new Create boards, save Pins and make collages of all your inspiration. Unlock billions of ideas, from fashion tips and easy recipes to DIY projects and fresh ways to redo your space. Creating the life you love? It's Possible.", filename:"Pinterest.webp" }],
  ["T-Life", { developer: "T-Mobile", description: "ONE APP. ALL THE THINGS. Get the latest exclusive perks from T-Mobile Tuesdays, and take advantage of all your Magenta Status benefits. You can also pay your bill, add a line to your account, and track orders straight from the app. And you can manage your account, configure your T-Mobile Home Internet gateway, and more. If you need help with anything, customer care is available at the tap of a button.", filename:"T-Life.webp" }],
  ["Amazon Prime Video", { developer: "AMZN Mobile LLC", description: "Watch movies, TV, and sports, including Amazon Originals like The Boys, The Marvelous Mrs. Maisel, and Tom Clancy’s Jack Ryan as well as recommendations just for you.", filename:"AmazonPrimeVideo.webp" }],
  ["Intuit Credit Karma", { developer: "Credit Karma, Inc.", description: "Navigate your unique financial path confidently with help from Credit Karma and make the most of your money.", filename:"Credit Karma.webp" }],
  ["Duolingo - Language Lessons", { developer: "Duolingo", description: "Learn a new language with the world’s most-downloaded education app! Duolingo is the fun, free app for learning 40+ languages through quick, bite-sized lessons. Practice speaking, reading, listening, and writing to build your vocabulary and grammar skills.", filename:"Duolingo.webp" }],
  ["", { developer: "M", description: "", filename:".webp" }],
  ["", { developer: "M", description: "", filename:".webp" }],
  ["", { developer: "M", description: "", filename:".webp" }],
  ["", { developer: "M", description: "", filename:".webp" }],
  ["", { developer: "M", description: "", filename:".webp" }],
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

  if (!foundResults) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.textContent = 'No apps found matching your search.';
    resultsContainer.appendChild(noResults);
  }
}
