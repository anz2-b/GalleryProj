
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById("audioPlayer");
    const sword = document.getElementById("invertedspear");
    
    if (sword && music) {
        sword.addEventListener('click', function(){
            music.play();
        });
    }
    const quote = document.getElementById("quote");
    function newQuote(){
    fetch(`https://api.quotable.io/random`)
    .then(response => response.json())
        .then(data => {
            quote.textContent =`"${data.content}" -${data.author}`
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
    }
    newQuote();
    const newQuoteBtn = document.getElementById("newQuoteBtn");
    newQuoteBtn.addEventListener("click", newQuote);
});