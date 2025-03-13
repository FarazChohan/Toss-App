let heads = document.querySelector("#heads")
let tails = document.querySelector("#tails")
var result = document.querySelector("#result")
var img = document.querySelector("#img")




const headsImg = "img/toss coin heads.png"
const tailsImg = "img/toss coin tails.png"


function toss(userVal) {
    var randomNum = Math.ceil(Math.random()*2)
    console.log(userVal , randomNum);

    if (randomNum === userVal) {
        result.innerHTML = "You Won the Toss";        

    } else {
        result.innerHTML = "You Lost the Toss";
    }

    if (randomNum === 1) {
        img.src = headsImg
    } else{
        img.src = tailsImg
    }
}






























// const cleanestCities = ["karachi", "larkana", "sukkur", "tando allah yar", "mirpurkhas"];

// function meraIncludes(arr, val) {
//     let includesInArr = false;
//     for (let i = 0; i < cleanestCities.length; i++) {
//         // console.log(cleanestCities[i]);

//         if (cleanestCities[i] === val) {
//             includesInArr = true
//         }
//     }

//     return includesInArr


// }

// console.log(meraIncludes(cleanestCities, "mirpurkhas"));




// const username = "Abdullah";
// console.log(username.toUpperCase());
// console.log(username.length);
// console.log(username[3]);

// const copyStr = username.slice(1 , 6)
// console.log(copyStr);