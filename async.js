let concert = false;

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("BOB ATTENDED THE CONCERT");
        }
        else {
            reject("BOB FAILED TO ATTEND THE CONCERT");
        }
    }, 5000);
});

// attendConcert.then((data)=>console.log(data)).catch((error)=>console.log(error));

let func = async() => {
    try{
        console.log(await attendConcert)
    }
    catch(e){
        console.log(e)
    }
}

func()