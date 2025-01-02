let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let winnerWindow = document.querySelector(".winner-window")
let msg = document.querySelector("#winner-msg");

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

let turnO = true;

winnerWindow.classList.add("hide");


newGameBtn.addEventListener("click",()=>{
    btnEnabled();
    turnO = true;
    winnerWindow.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText="";
    })
})
resetBtn.addEventListener("click",()=>{
    btnEnabled();
    turnO = true;
    winnerWindow.classList.add("hide");
    boxes.forEach((box)=>{
        box.innerText="";
    })
})


const btnDisabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const btnEnabled = () => {
    for (box of boxes) {
        box.disabled = false;
    }
}

const winnerMsg = (pos) => {
    msg.innerText=`The Winner is ${pos}`;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked!");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // any of this value can't be null to show winner
        if (pos1Val != "" && pos2Val != "" && pos3val != "") {
            if (pos1Val == pos2Val && pos2Val == pos3val) {
                btnDisabled();
                winnerMsg(pos1Val);
                winnerWindow.classList.remove("hide");
            }
        }
    }
}