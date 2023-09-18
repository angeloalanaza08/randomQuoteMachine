//Random Quote Generated as the page loads
window.onload = init;
function init() {
  generateQuote();
}

const QUOTEBANK = [
  {
    quote: "There is nothing impossible to they who will try.",
    author: "Alexander the Great",
    image: "./authorImages/alexander-the-great.jpg",
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot.",
    author: "Michael Altshuler",
    image: "./authorImages/michael-altshuler.jpg",
  },
  {
    quote:
      "Keep your face always toward the sunshine, and shadows will fall behind you.",
    author: "Aristotle",
    image: "./authorImages/aristoutle.jpg",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Marie Forleo",
    image: "./authorImages/marie-forleo.jpg",
  },
  {
    quote:
      "Not having the best situation, but seeing the best in your situation is the key to happiness.",
    author: "Marie Forleo",
    image: "./authorImages/alexander-the-great.jpg",
  },
  {
    quote: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou",
    image: "./authorImages/maya-angelou.jpg",
  },
];
//Generate Random Quote at first Load

function generateQuote() {
  let quoteSize = QUOTEBANK.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTEBANK[randomIndex];
  let tweetLink = "https://twitter.com/intent/tweet?hashtags=DailyQuotes&text=";

  let quoteFormat = randomQuoteData.quote.replace(/ /g, "%20");
  tweetLink += quoteFormat;

  let authorFormat = randomQuoteData.author.replace(/ /g, "%20");
  tweetLink += " -" + authorFormat;

  document.getElementById("tweet-quote").href = tweetLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
  let authorImage = document.getElementById("author-image");
  authorImage.src = randomQuoteData.image;
}
