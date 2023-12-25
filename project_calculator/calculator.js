let dlt = document.getElementById('delete');
let display = document.getElementById('display');


let equalTo = document.getElementById('equalTo');

equalTo.onclick = function() {
    let displayValue = display.value;
    try {
        let ans = eval(displayValue);
        display.value = ans;
    } catch {
        alert('correct format')
    }
}