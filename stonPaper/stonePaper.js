function calculateScore(userPick,machinePick){
    if (userPick==machinePick){
        tiesCount = tiesCount+1

    // combination 1 : stone and paper 
    }else if (userPick=="Stone" & machinePick=="Paper"){
        machinePoint = machinePoint+1 
    }else if (userPick=="Paper" & machinePick=="Stone"){
        userPoint = userPoint+1 

    // combination 2 : stone and scissor 
    }else if (userPick=="Stone" & machinePick=="Scissor"){
        userPoint = userPoint+1 
    }else if (userPick=="Scissor" & machinePick=="Stone"){
        machinePoint = machinePoint+1 
    }
    // combination 3 : paper and scissor
    else if (userPick=="Paper" & machinePick=="Scissor"){
        machinePoint = machinePoint+1 
    }else if (userPick=="Scissor" & machinePick=="Paper"){
        userPoint = userPoint+1 
    }
}

// userPicks = ['Stone','Scissor','Stone','Paper','Paper']
// machinePicks = ['Paper','Stone','Stone','Stone','Scissor']

/*
for (let i = 0 ; i<userPicks.length; i++){
    calculateScore(userPicks[i],machinePicks[i])
}; 
*/

//console.log(`userPoint: ${userPoint}, machinePoint: ${machinePoint}, tiesCount:${tiesCount}`);

let userPoint = 0 
let machinePoint = 0
let tiesCount = 0 

function updateScores(){
    document.getElementById("userPoint").innerText=userPoint ; 
    document.getElementById("machinePoint").innerText=machinePoint ; 
}

function makeSelection(userPick){
    // creating a random selection by machine 
    const options = ['Paper','Scissor','Stone']
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * options.length);
    // Retrieve the random item
    const machinePick = options[randomIndex];

    console.log(`machine : ${machinePick} , user : ${userPick}`)
    
    if (userPick==machinePick){
        tiesCount = tiesCount+1

    // combination 1 : stone and paper 
    }else if (userPick=="Stone" & machinePick=="Paper"){
        machinePoint = machinePoint+1 
    }else if (userPick=="Paper" & machinePick=="Stone"){
        userPoint = userPoint+1 

    // combination 2 : stone and scissor 
    }else if (userPick=="Stone" & machinePick=="Scissor"){
        userPoint = userPoint+1 
    }else if (userPick=="Scissor" & machinePick=="Stone"){
        machinePoint = machinePoint+1 
    }
    // combination 3 : paper and scissor
    else if (userPick=="Paper" & machinePick=="Scissor"){
        machinePoint = machinePoint+1 
    }else if (userPick=="Scissor" & machinePick=="Paper"){
        userPoint = userPoint+1 
    }

    updateScores(); 

}; 

function resetGame() {
    userPoint = 0;
    machinePoint = 0;
    updateScores();
}
