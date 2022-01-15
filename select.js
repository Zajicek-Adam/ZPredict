let active = document.getElementsByClassName("active");
let inactiveRegion = document.getElementsByClassName("inactive region");
let container = document.getElementsByClassName("cselect");

let region = ["LCK", "LEC", "LPL", "LCS"];
let LECteams = ["RGE", "MAD", "G2", "FNC", "AST", "BDS", "SK", "XL", "VIT", "MSF"];
let LCKteams = ["T1", "GEN", "HLE", "DK", "LSB", "NS", "BRO", "KT", "KDF", "DRX"];
let LPLteams = ["OMG", "FPX", "EDG", "RA", "IG", "LNG", "WBG", "RNG", "AL", "V5", "BLG", "WE", "TES", "TT", "LGD", "JDG", "UP"];
let LCSteams = ["TSM", "C9", "FLY", "GG", "100", "EG", "IMT", "DIG", "TL", "CLG"];

let selectedRegion;
let correct;
let selectedWinner;
let selectedloser;

for (let index = 0; index < 17; index++) {
    let spanElm = document.createElement("span");
    container[2].firstElementChild.appendChild(spanElm);
}
for (let index = 0; index < 17; index++) {
    let spanElm = document.createElement("span");
    container[3].firstElementChild.appendChild(spanElm);
}

let backupRegion = container[0].innerHTML;
let backupCorrect = container[1].innerHTML;
let backupWinner = container[2].innerHTML;
let backupLoser = container[3].innerHTML;

function handleRegion(e) {
    switch (selectedRegion) {
        case "LEC":
            for (let index = 0; index < 10; index++) {
                const element = container[e].firstElementChild.children[index];
                element.textContent = LECteams[index];
            }
            break;
        case "LCS":
            for (let index = 0; index < 10; index++) {
                const element = container[e].firstElementChild.children[index];
                element.textContent = LCSteams[index];
            }
            break;
        case "LCK":
            for (let index = 0; index < 10; index++) {
                const element = container[e].firstElementChild.children[index];
                element.textContent = LCKteams[index];
            }
            break;
        case "LPL":
            for (let index = 0; index < 17; index++) {
                const element = container[e].firstElementChild.children[index];
                element.textContent = LPLteams[index];
            }
            break;
    }
}

container[0].innerHTML = "select" + container[0].innerHTML;
container[0].addEventListener('click', e => {
    container[0].firstElementChild.classList.toggle('inactive');
    for (let index = 0; index < container[0].firstElementChild.children.length; index++) {
        const element = container[0].firstElementChild.children[index];
        element.addEventListener('click', function () {
            container[0].innerHTML = element.textContent + backupRegion;
            container[0].firstElementChild.classList.toggle('inactive');
            selectedRegion = element.textContent;
            selectedWinner = undefined;
            selectedloser = undefined;
            container[2].innerHTML = "select" + backupWinner;
            container[3].innerHTML = "select" + backupLoser;
       //     localStorage.setItem("region", selectedRegion);

            console.log(selectedRegion)
        })
    }
})

container[1].innerHTML = "select" + container[1].innerHTML;
container[1].addEventListener('click', e => {
    container[1].firstElementChild.classList.toggle('inactive');
    for (let index = 0; index < container[1].firstElementChild.children.length; index++) {
        const element = container[1].firstElementChild.children[index];
        element.addEventListener('click', function () {
            container[1].innerHTML = element.textContent + backupCorrect;
            container[1].firstElementChild.classList.toggle('inactive');
            correct = element.textContent;
         //   localStorage.setItem("correct", correct);

        })
    }
})

container[2].innerHTML = "select" + container[2].innerHTML;
container[2].addEventListener('click', e => {
    if (selectedRegion != undefined) {
        container[2].firstElementChild.classList.toggle('inactive');
        handleRegion(2);
        for (let index = 0; index < container[2].firstElementChild.children.length; index++) {
            const element = container[2].firstElementChild.children[index];
            element.addEventListener('click', function () {
                container[2].innerHTML = element.textContent + backupWinner;
                container[2].firstElementChild.classList.toggle('inactive');
                selectedWinner = element.textContent;
           //     localStorage.setItem("winner", selectedWinner);

            })
        }
    }
})

container[3].innerHTML = "select" + container[3].innerHTML;
container[3].addEventListener('click', e => {
    if (selectedRegion != undefined) {
        container[3].firstElementChild.classList.toggle('inactive');
        handleRegion(3);
        for (let index = 0; index < container[3].firstElementChild.children.length; index++) {
            const element = container[3].firstElementChild.children[index];
            element.addEventListener('click', function () {
                container[3].innerHTML = element.textContent + backupLoser;
                container[3].firstElementChild.classList.toggle('inactive');
                selectedloser = element.textContent;
             //   localStorage.setItem("loser", selectedloser);

            })
        }
    }
})