let svg = document.getElementById("segment");
let count = document.getElementById("count"); //total
let sucesses = document.getElementById("success");
let fails = document.getElementById("fail");

myStorage = window.localStorage;

let total = 0;
let correctCount = 0;

setTimeout(doSomething, 1);

function doSomething() {
    if (localStorage.getItem("total") !== null && localStorage.getItem("correct") !== null) {
        total = parseInt(myStorage.getItem('total'));
        correctCount = parseInt(myStorage.getItem('correct'));
    }

    update();
}


function update() {
    let percentage = correctCount * 100 / total
    let stringToSet = (100 - percentage).toString() + " " + percentage.toString()
    if (total == 0) {
        console.log("Was Zero")
        stringToSet = "100 0";
    }
    svg.setAttribute("stroke-dasharray", stringToSet)

    sucesses.innerText = correctCount + " correct";
    fails.innerText = total - correctCount + " incorrect";
    count.innerText = total + " predictions";

    myStorage.setItem('total', total.toString());
    myStorage.setItem('correct', correctCount.toString());
}
function add(op) {
    if (op) {
        correctCount += 1;
        total += 1;
    }
    else {
        total += 1;
    }
    update();
}
