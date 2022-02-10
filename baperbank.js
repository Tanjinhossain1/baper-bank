
// diposit sector 
document.getElementById('diposit-button').addEventListener('click',function(){
    const dipositInput = document.getElementById('diposit-input');
    const dipositValue = dipositInput.value;
    const dipositBox = document.getElementById('diposit-box');
  
const newvalue = dipositBox.innerText;
const total = parseFloat(newvalue) + parseFloat(dipositValue);
dipositBox.innerText = total
    dipositInput.value = '';

    // its balance sector 
    const balanceBox = document.getElementById('balanced');
const oldvalue = balanceBox.innerText;
const balanceTotal = parseFloat(oldvalue) + parseFloat(dipositValue);
balanceBox.innerText = balanceTotal;
dipositInput.value = '';
})