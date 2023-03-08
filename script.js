let count = 0;
let roundCount;
let reminder;
let r;
let g;
let b;
let color;

function counter(){
    count++;
    roundCount = Math.floor(count / 108);
    reminder  = count%108;
    document.getElementById('counter-text').innerHTML = count;
    document.getElementById('round-count').innerHTML = "Rounds: "+roundCount+" Reminder: "+ reminder;

    //random color
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
        color = `rgb(${r},${g},${b})`

    document.body.style.backgroundColor = color;
}