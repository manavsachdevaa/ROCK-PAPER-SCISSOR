let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice")
let msg=document.querySelector("#mess");
let userupdate=document.querySelector("#your-chance")
let compupdate=document.querySelector("#comp-chance")
choices.forEach((choice)=>{
    // console.log(choice);
    let userchoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playgame(userchoice);
    })

})
const playgame=(userchoice)=>{
    let compchoice=gencompchoice();
    if(userchoice==compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice=="paper"?false:true;

        }
        else if(userchoice=="paper"){
            userwin=compchoice=="scissor"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}
const gencompchoice=()=>{
    let options=["rock","paper","scissor"];
    let randidx= Math.floor((Math.random()*3));
    return options[randidx];
}
const draw=()=>{
    console.log("match Draw");
    msg.innerText="Draw.Play again"
     msg.style.backgroundColor="orange"

}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++
        userupdate.innerText=userscore
        msg.innerText=`You win.Your ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"

    }
    else{
        compscore++
        compupdate.innerText=compscore
        msg.innerText= msg.innerText=`You lose.${compchoice} beats your ${userchoice}`
         msg.style.backgroundColor="red"
    
    }
}