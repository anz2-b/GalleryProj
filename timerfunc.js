
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
    if (btn_id_val==="oneplus"){
        theTime.innerText="plus1"
    }
    if (btn_id_val==="fiveplus"){
        theTime.innerText="plus5"
    }
}
fiveMinusBtn.addEventListener("click",timechanger)
oneMinusBtn.addEventListener("click",timechanger)
onePlusBtn.addEventListener("click",timechanger)
fivePlusBtn.addEventListener("click",timechanger)

