let quotesArr = [];
let onQuote = 0;
const quoteContainer = document.querySelector('#quote-container');
const getQuoteBtn = document.querySelector('#new-quote');
const quoteTextEle = document.querySelector('#quote');
const quoteAuthorEle = document.querySelector('#author');
const getTwitterBtn = document.querySelector('#twitter');
const loader = document.querySelector('#loader');


// Get Quote from API
async function getQuote() { 
       loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        quotesArr = [...quotesArr, ...data];
        return quotesArr;   
    } catch (error) {
        // getQuote();   
        console.log('whoops, no quote', error);
    }
}  

getQuote().then(() => {
    setTimeout(complete, 2000)
});

// On Load
// getQuote();

console.log(getTwitterBtn);  

//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading 
function complete() { 
     console.log(!loader.hidden)
    if(!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

const twitterUrl = 'https://twitter.com/intent/tweet';
getTwitterBtn.href = `${twitterUrl}?text=${quoteTextEle.innerText}`

getQuoteBtn.addEventListener('click', async () => {
    console.log("clicekde");
    const quoteData = quotesArr[onQuote];
    onQuote++;
    quoteTextEle.textContent = quoteData.text;
    quoteAuthorEle.textContent = quoteData.author;
    getTwitterBtn.href = `${twitterUrl}?text=${quoteData.text}`
    console.log({quoteData});
})
