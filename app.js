let gameSeq=[];
let userSeq=[];
let btns =["yellow","red","green","purple"]

let start=false;
let level=0;

let h2 = document.querySelector("h2");
let high = document.querySelector("#high");

let max=0;

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("Game started");
        start = true;

        levelUp()
    }
});

function levelUp() {
    level++;
    h2.innerText=`Level ${level}`;
    userSeq=[];
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    btnFlash(randBtn);
  
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },300);
}


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}



function btnPress() {
    let btn=this;
    btnFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);

}

function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to start again`;
        if(max>level){
            high.innerHTML=`Highest score is <b>${max}</b>`;
        } else{
            max=level;
            high.innerHTML=`Highest score is <b>${max}</b>`;
        }
        document.querySelector("body").classList.add("pink");
        setTimeout(function(){
            document.querySelector("body").classList.remove("pink");
        },150);
        rest();
    }
    
}

function rest(){
    start = false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}

