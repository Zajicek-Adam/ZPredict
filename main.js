let svg = document.getElementById("segment");
let count = document.getElementById("count"); //total
let sucesses = document.getElementById("success");
let fails = document.getElementById("fail");
let log = document.getElementById("log");

myStorage = window.localStorage;

let total = 0;
let correctCount = 0;
let predicts = [];

setTimeout(doSomething, 1);

function doSomething() {
    if (localStorage.getItem("total") !== null && localStorage.getItem("correct") !== null) {
        total = parseInt(myStorage.getItem('total'));
        correctCount = parseInt(myStorage.getItem('correct'));
        predicts.push(myStorage.getItem('predicts'));
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
function add() {
    if (correct && selectedWinner && selectedloser && selectedRegion) {
        if(correct == 'yes'){
            correctCount++;
            total++;
        }
        else{
            total++;
        }
        predicts.push(`${selectedRegion} | ${selectedWinner} vs ${selectedloser} | ${correct}`);

        myStorage.setItem('predicts', predicts);

        container[0].innerHTML = "select" + backupRegion;
        container[1].innerHTML = "select" + backupCorrect;
        container[2].innerHTML = "select" + backupWinner;
        container[3].innerHTML = "select" + backupLoser;

        update();
    }
}
