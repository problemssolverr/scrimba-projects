let displayCount = document.getElementById("display-count");
let displayEl = document.getElementById("display-el");
let countEl = document.getElementById("count-el");

let count = 0

function increment(){
    count = count + 1;
    displayCount.textContent = count; 
}
function save(){
    displayEl.textContent += count + " - " + " ";
    count = 0;
    displayCount.textContent = 0;
    
}
