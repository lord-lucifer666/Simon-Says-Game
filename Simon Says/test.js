let gameseq = [];
let userseq = [];
let level = 0;
let highmarks = 0;
let allbutton = document.querySelectorAll(".button");
let stored = ["yellow", "red", "blue", "green"];
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let started = false;
document.body.addEventListener("keypress", () => {
    if (started == false) {
        console.log("started");
        started = true;
        levelup();
    }
})
function levelup() {
    level++;
    h2.innerText = `Level ${level}`;
    randomflash();
    userseq = [];
}
function flashgame(btn) {
    btn.classList.add("gameFlash")
    setTimeout(function () {
        btn.classList.remove("gameFlash")
    }, 105);
}
function randomflash() {
    let randidx = Math.floor(Math.random() * 4);
    // console.log(randidx);
    let randclr = stored[randidx];
    let buttonselected = document.getElementById(randclr);
    flashgame(buttonselected);
    gameseq.push(`${randclr}`);
    console.log(gameseq);
}

for (let btn of allbutton) {
    btn.addEventListener("click", function () {
        if (!started){
            return;
        }
        let colorid = this.getAttribute("id");
        userseq.push(colorid);
        btn.classList.add("userFlash");
        setTimeout(() => {
            btn.classList.remove("userFlash")
        }, 105);
        console.log(userseq)
        if (userseq[userseq.length - 1] === gameseq[userseq.length - 1]) {
            if (userseq.length == gameseq.length) {
                setTimeout(levelup, 1000);
            }
        }
        else {
            h2.innerText = "Game Over ! Press any key to restart !";
            if(level>=highmarks){
                highmarks=level;
            }
            let h2new=document.createElement("h2");
            document.body.appendChild(h2new);
            h2new.innerText=`Highest Score : ${highmarks} !`
            document.body.style.backgroundColor = "red";
            setTimeout(function () {
                document.body.style.backgroundColor = "rgb(228, 225, 191)";
            }, 50)
            setTimeout(function () {
                document.body.style.backgroundColor = "red";
            }, 100)
            setTimeout(function () {
                document.body.style.backgroundColor = "rgb(228, 225, 191)";
            }, 150)
            reset();
        }
    })
}
function reset() {
    gameseq = [];
    userseq = [];
    level = 0;
    started = false;
}
