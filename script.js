
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById("audioPlayer");
    const sword = document.getElementById("invertedspear");
    
    if (sword && music) {
            music.play();
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


//Timer

const startBtn = document.getElementById('start_bt');
const pauseBtn = document.getElementById('pause_bt');
const resetBtn = document.getElementById('reset_bt');
const breakworkBtn = document.getElementById('breakwork_bt');

const fiveMinusBtn = document.getElementById('fiveminus');
const oneMinusBtn = document.getElementById('oneminus');
const onePlusBtn = document.getElementById('oneplus');
const fivePlusBtn = document.getElementById('fiveplus');

const theTime = document.getElementById('the_time');

function timechanger(event){
    const btn_id_val=event.target.id

    if (btn_id_val==="fiveminus"){
        theTime.innerText="minus5"
    }
    if (btn_id_val==="oneminus"){
        theTime.innerText="minus1"
    }
}
fiveMinusBtn.addEventListener("click",timechanger)
oneMinusBtn.addEventListener("click",timechanger)