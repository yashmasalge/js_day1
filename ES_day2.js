console.log("MERGED CLASS 2 ES6");

let ranks = [1, 2, 3, 4, 5, 6];

console.log(
  ranks.map((e, index) => {
    return e * 100;
  })
);

console.log(
  ranks.forEach((e, index) => {
    return e * 100;
  })
);










// Map is a Array Method
let newarr = ranks.map((e, index) => {
    if(e%2===0)
        return e
})
console.log(newarr);


let filter = ranks.filter((e, index) => {
  if(e%2===0)
      return e
})
console.log(filter);















// Promeise

let concert = false

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

console.log(attendConcert)

attendConcert.then((data)=>console.log(data)).catch((error) => {return console.log(error)})
