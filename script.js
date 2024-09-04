const apiKey = 'AwFFCKeyXE+vxASiGx9ssQ==NZJngENv5QEOVZsu';
const url = 'https://api.api-ninjas.com/v1/quotes';

const newQuoteButton = document.querySelector('.new-quote-btn');
const quoteElement = document.querySelector('.quote p');
const authorName = document.querySelector('.quote span');

const getQuote = async () => {

    quoteElement.textContent = 'Loading...'; // Show loading text

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey
        }
    });

    const data = await response.json();
    const quote = data[0].quote; // Extract the quote text
    const author = data[0].author; // Extract the author

    quoteElement.innerHTML = `"${quote}"`
    authorName.innerHTML = `<strong>${author}</strong>`
}

newQuoteButton.addEventListener('click', getQuote);

function tweet() {
    window.open('https://twitter.com/intent/tweet?text=' + quoteElement.innerHTML, 'Tweet Window', 'width=600,height=300')
};

getQuote()

