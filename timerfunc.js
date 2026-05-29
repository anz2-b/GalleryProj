const fiveMinusBtn = document.getElementById('fiveminus');
const oneMinusBtn = document.getElementById('oneminus');
const onePlusBtn = document.getElementById('oneplus');
const fivePlusBtn = document.getElementById('fiveplus');

const theTime = document.getElementById('the_time');

const timeLabels = {
    fiveminus: 'minus5',
    oneminus:  'minus1',
    oneplus:   'plus1',
    fiveplus:  'plus5'
};

function timechanger(event) {
    theTime.innerText = timeLabels[event.target.id];
}

fiveMinusBtn.addEventListener('click', timechanger);
oneMinusBtn.addEventListener('click', timechanger);
onePlusBtn.addEventListener('click', timechanger);
fivePlusBtn.addEventListener('click', timechanger);
