// const rock = document.querySelector('#rock')
// const paper = document.querySelector('#paper')
// const scissor = document.querySelector('#scissor')

// var Name

// console.log(Name)

function logName(Name = "John Doe", age = 18) {
    // console.log("Nishta")
    console.log(Name + " You are " + age)
}

// Never Misspell the function keyword
// a function can have multiple parameters
// You can set default values for the parameters
// Any variable you define inside a function's body is local to that function

function add(a = 0, b = 0) {
    return a + b
}

const add = (a = 0, b = 0) => {
    return a + b
}


const result = add()

console.log(result)
