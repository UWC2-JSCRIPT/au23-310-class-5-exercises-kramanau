// When a user clicks the + element, the count should increase by 1 on screen.
const plusEl = document.getElementById('plus');

plusEl.addEventListener('click', (e) => {
    let currentNum = Number(document.getElementById('count').innerText);
    currentNum++;
    document.getElementById('count').innerText = currentNum;
});
// When a user clicks the – element, the count should decrease by 1 on screen.
const minusEl = document.getElementById('minus');

minusEl.addEventListener('click', (e) => {
    let currentNum = Number(document.getElementById('count').innerText);
    currentNum--;
    document.getElementById('count').innerText = currentNum;
});