// Array of quote objects 
const quotes = [
  {
    text: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu'
  },
  {
    text: 'You miss 100% of the shots you don't take.',
    author: 'Wayne Gretzky'
  },
  {
    text: 'Believe you can and you're halfway there.',
    author: 'Theodore Roosevelt'
  }  
];

// Get random index
const index = Math.floor(Math.random() * quotes.length);

// Get random quote object
const quote = quotes[index]; 

// Display quote in widget
document.getElementById('quote-text').innerText = quote.text; 
document.getElementById('quote-author').innerText = quote.author;
