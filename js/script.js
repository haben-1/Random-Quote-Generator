/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Many that live deserve death. And some that died deserve life. Can you give it to them, Frodo? Do not be too eager to deal out death in judgment. Even the very wise cannot see all ends.",
    source: "Gandalf",
    citation: "Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    genre: "Fantasy"
  },
  {
    quote: "You don't know about real loss, cause it only occurs when you've loved something more than you love yourself. And I doubt you've ever dared to love anybody that much.",
    source: "Sean Maguire",
    citation: "Good Will Hunting",
    year: 1997,
    genre: "Drama"
  },
  {
    quote: "You have great wisdom, Anakin. Know the power of the dark side. The power to save Padme",
    source: "Palpatine",
    citation: "Star Wars Episode III: Revenage of the Sith",
    year: 2005,
    genre: "Space opera"
  },
  {
    quote: "Then we shall fight in the shade",
    source: "Dienekes",
    citation: "300",
    year: 2006,
    genre: "War"
  },
  {
    quote: "Get to the chopper",
    source: "Arnold Schwarzenegger",
    citation: "Predator",
    year: 1987,
    genre: "Horror"
  }
];


/***
 * This function returns a random quote from the quotes array
***/
function getRandomQuote() {
  let randomNumber = Math.floor( Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * This function returns a random hexdeciaml code
***/
function changeBackgroundColor() {
  // Obtained randomColor code from ---> https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  return randomColor;
}

/***
 * This function takes a random quote and inserts the details
 * of that quote into HTML tags that will then be inseted in the body 
 * section of index.html. While also generating a random background
 * color for the index.html page 
***/
function printQuote() {
  let randomQoute = getRandomQuote();
  let html = `<p class="quote">${randomQoute.quote}</p>
              <p class="source">${randomQoute.source}
              `;
  if (randomQoute.citation) {
    html += `<span class="citation">${randomQoute.citation}</span>`;
  }
  if (randomQoute.year) {
    html += `<span class="year">${randomQoute.year}</span>`;
  }
  if (randomQoute.genre) {
    html += `<span class="genre">${randomQoute.genre}</span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  document.body.style.backgroundColor = changeBackgroundColor(); 
}

/***
 * Refreshes the page every 10 seconds and calls the 
 * printQuote() function at the same time
***/
setInterval(function () {
  printQuote();
}, 10000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);