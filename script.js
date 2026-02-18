const Profilebtn=document.getElementById("Profile")
const Gallerybtn=document.getElementById("Gallery")
const Timerbtn=document.getElementById("Timer")
const Thoughtsbtn=document.getElementById("Thoughts")
const player=document.getElementById("invertedspear")

let music=document.getElementById("audioPlayer")
let sword=document.getElementById("invertedspear")


sword.addEventListener('click',function(){
    music.play();
})

