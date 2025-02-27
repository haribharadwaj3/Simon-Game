let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let btn=["yellow","red","blue","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random()*4);
    let randColor=btn[rand];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    buttonFlash(randbtn);
}
function checkAns(){
    let idx=userseq.length-1;
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length===gameseq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML=`Game Over, Your score was <b>${level}</b> <br>Press any key to Start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }
        , 175);
        reset();
    }
}
function btnPress(){
    let btn=this;
    buttonFlash(btn);
    let userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userColor);
    checkAns();
}
let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
