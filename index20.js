console.log("MERGED CLASS 2 ES6");

let ranks = [1, 2, 3, 4, 5 ,6];

console.log(
  ranks.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks.forEach((e, index) => {
    console.log(e*100);
    return e * 100;
  })
);

let newmaparr = ranks.map((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newmaparr);

let newfilterarr = ranks.filter((e, index) => {
    console.log(e)
    if(e%2===0)
        return e
})
console.log(newfilterarr);

let concert = true;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 2000);
});

// let attendConcert = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (concert) {
//             resolve("BOB ATTENDED THE CONCERT");
//         }
//         else {
//             reject("BOB FAILED TO ATTEND THE CONCERT");
//         }
//     }, 2000);
// });

// console.log(attendConcert)
console.log(attendConcert)

// attendConcert.then((data)=>console.log(data));

// attendConcert.catch((error)=>console.log(error));

attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));

console.log("HI, I WON'T WAIT FOR ANYONE")

console.log("HI, I AM DYNING, I DON'T WANT TO WAIT")