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
  ["Netflix", { developer: "Netflix, Inc.", description: "Looking for the most talked about TV shows and movies from around the world? They’re all on Netflix. We’ve got award-winning series, movies, documentaries, and stand-up specials. And with the mobile app, you get Netflix while you travel, commute, or just take a break.", filename:"Netflix.webp" }],
  ["Yuka - Food & Cosmetic Scanner", { developer: "Yuca", description: "Yuka is a free mobile app that allows you to scan the barcodes of food and personal care products and instantly see their impact on your health. A rating and detailed information help you understand the analysis of each product.", filename:"Yuka.webp" }],
  ["Snapchat", { developer: "Snap, Inc.", description: "Snapchat is a fast and fun way to share the moment with your friends and family SNAP. Snapchat opens right to the Camera — just tap to take a photo, or press and hold for video. Express yourself with Lenses, Filters, Bitmoji and more! Try out new Lenses daily created by the Snapchat community!", filename:"Snapchat.webp" }],
  ["MyChart", { developer: "Epic", description: "MyChart puts your health information in the palm of your hand and helps you conveniently manage care for yourself and your family members.", filename:"MyChart.webp" }],
  ["Capital One Mobile", { developer: "Capital One", description: "What’s on the Capital One Mobile app? All of your accounts, and so much more. Whether you’re out in the world or feeling right at home, you can manage your money with ease: - View balances and export statements - Pay bills and take care of loans - Check in on your credit with CreditWise - Activate a credit or debit card when you need it - Redeem rewards on the go - Send and receive money with friends and family using Zelle.", filename:"Capital One Mobile.webp" }],
  ["DramaBox - Stream Drama Shorts", { developer: "STORYMATRIX PTE. LTD.", description: "Looking for something to watch during your daily commute, lunch break, or just to unwind after a long day? Look no further than our Dramabox! With our app, you can access a huge selection of high-quality content from some of the best creators out there. From indie films to award-winning TV series, we've got something for everyone. And with new content added regularly, you'll always have something fresh to watch.", filename:"DramaBox.webp" }],
  ["Grok", { developer: "xAI", description: "Grok is an AI-powered assistant, developed by xAI, designed to be maximally truthful, useful, and curious. Get answers to any question, generate striking images, and upload pictures to gain a deeper understanding of your world. With Grok, the universe is in your hands!", filename:"Grok.webp" }],
  ["Tubi: Movies & Live TV", { developer: "Tubi, Inc", description: "Nice to meet you, we’re Tubi. We’re more than a completely fee-free streamer with the largest library in the entire streaming universe. We’re entertainment fiends and collectors, and never judgers. So, get comfy and settle into whatever you’re feeling. It’s about to get good.", filename:"Tubi.webp" }],
  ["LinkedIn: Network & Job Finder", { developer: "LinkedIn Corporation", description: "Welcome professionals! The key to getting in is getting started. Begin your career journey with LinkedIn today. Are you searching for the right job opportunities to advance your career? LinkedIn is one of the largest social networking apps for online job searches that also provides content that can help you grow.", filename:"LinkedIn.webp" }],
  ["X", { developer: "X Corp.", description: "The X app is the trusted global digital town square for everyone.", filename:"X.webp" }],
  ["Cleanup: Phone Storage Cleaner", { developer: "Codeway Dijital Hizmetler Anonim Sirketi", description: "LET’S FACE IT: CLEANING UP YOUR PHOTO LIBRARY IS SO BORING! Cleanup is here to make this process easy, fun & safe. CLEAN UP YOUR GALLERY IN NO TIME Swipe left — to get rid of unwanted photos/duplicates Swipe right — to keep the memories that actually matter to you You’ll be surprised to see how many unnecessary photos you’ve been keeping in your gallery!", filename:"CleanUp.webp" }],
  ["Reddit", { developer: "Reddit", description: "Welcome to Reddit, the heart of the internet. Reddit is a social network with something for everyone: trending topics, diverse discussions, and engaging communities and comment threads. Redditors have authentic and interesting conversations around all sorts of curated content. You’ll find gaming communities, bloggers, meme-makers, fandoms, travel enthusiasts, support groups, AI forums, news junkies, artists, and creators of all types.", filename:"Reddit.webp" }],
  ["The Roku App (Official)", { developer: "ROKU INC", description: "Get to know the must-have app for streamers Use the free Roku® mobile app to: Control your Roku devices with a convenient remote, Use your voice or keyboard to quickly search for entertainment, Enjoy private listening with headphones, Stream free movies, live TV, and more on the go with The Roku Channel, Cast media files from your phone, like videos and photos, to your TV, Add and launch channels on your Roku devices, Enter text on your Roku device easier with your mobile keyboard", filename:"Roku.webp" }],
  ["Lyft", { developer: "Lyft, Inc.", description: "Get where you’re going with Lyft. Whether you’re catching a flight, going out for the night, commuting to the office, or running errands in a rush, the Lyft app offers you multiple ways to get there.", filename:"Lyft.webp" }],
  ["Flip: Watch, Create, Shop", { developer: "Humans Inc.", description: "Welcome to the Flip Side. Where social meets shopping, and trust takes center stage. Flip isn’t just an app - it’s a community-powered platform where creativity thrives and trust fuels every interaction. Real people share their honest stories about experiences and products they love (or don’t). Here, you don’t just scroll; you get rewarded for it, you create, connect, and earn. And when you’re ready, you can shop the products you love, right when you love them - all in a community you trust.", filename:"Flip.webp" }],
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
