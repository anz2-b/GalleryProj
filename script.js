
document.addEventListener('DOMContentLoaded', function() {
    const Profilebtn = document.getElementById("Profile");
    const Gallerybtn = document.getElementById("Gallery");
    const Timerbtn = document.getElementById("Timer");
    const Thoughtsbtn = document.getElementById("Thoughts");
    
    const music = document.getElementById("audioPlayer");
    const sword = document.getElementById("invertedspear");
    
    if (sword && music) {
        sword.addEventListener('click', function(){
            music.play();
        });
    }
    
    const quote = document.getElementById("quote");

    fetch(`https://api.quotable.io/random?content`)
    .then(response => response.json())
    .then(data => {
        quote.textContent = data.content + " -" + data.author;
    })
    .catch(error => {
        console.error("Error fetching quote:", error);
    });
});