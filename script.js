let quotesArr = [];
let onQuote = 0;
// Get Quote from API
async function getQuote() {
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

getQuote();

// On Load
// getQuote();

const getQuoteBtn = document.querySelector('#new-quote');
const quoteTextEle = document.querySelector('#quote');
const quoteAuthorEle = document.querySelector('#author');
const getTwitterBtn = document.querySelector('#twitter');
console.log(getTwitterBtn);  

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