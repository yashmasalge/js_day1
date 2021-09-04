// const element = document.getElementById("selectme")
// const element = document.getElementsByClassName('heading')
// const element = document.getElementsByTagName('h2')
// const element = document.querySelectorAll('.heading')

 const element = document.querySelector('#selectme')
// element.innerHTML = 'This is abcde'
// element.style.color = 'cyan'
// element.style = 'display : none'


// console.log(element.classList)
// element.classList.add('five')
// console.log(element.classList)
// element.classList.remove('one')
// console.log(element.classList)

// const body = document.querySelector('body')
// console.log(body.classList.toggle('dark'))

const value = element.classList.contains('one')

console.log(value)