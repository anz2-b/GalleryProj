document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById("audioPlayer");
    const sword = document.getElementById("invertedspear");

    if (sword && music) {
        music.play();
    }

    const quote = document.getElementById("quote");
    const newQuoteBtn = document.getElementById("newQuoteBtn");

    if (quote && newQuoteBtn) {
        function newQuote() {
            fetch('https://api.quotable.io/random')
                .then(response => response.json())
                .then(data => {
                    quote.textContent = `"${data.content}" -${data.author}`;
                })
                .catch(error => {
                    console.error("Error fetching quote:", error);
                });
        }
        newQuote();
        newQuoteBtn.addEventListener("click", newQuote);
    }
});
