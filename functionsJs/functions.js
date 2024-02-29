

// function declaration 
function sayMyName(){
    console.log("thomaskutty")
}
//sayMyName()


// function expression 
let shoutMyName = function(){
    console.log("shout thomas")
}

//shoutMyName()

// arrow function 
let shoutMyNameArr = () =>console.log("arrow thomas")
//shoutMyNameArr()


function summation(n){
    let total = 0 
    for (let i =0 ; i<=n; i++){
        total+=i
    }
    return total
}

let summationOutput = summation(100)
console.log(summationOutput)