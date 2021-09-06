const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const board = document.querySelector('#board')

const handler = (event) => {
    const action = event.target.id
//    if (action == 'rock'){
//         // console.log('rock crushes scissors')
//         board.innerHTML = "rock crushes scissors"
//    }
//    else  if (action == 'paper'){
//     // console.log('paper wraps rock')
//     board.innerHTML = "paper wraps rock"
//    }else  if (action == 'scissor'){
//     // console.log('scissor cuts paper')
//     board.innerHTML = "scissor cuts paper"
//    }   
//    else{
//        console.log('click something')
//    }


   switch(action)
   {
       case 'rock':
        board.innerHTML = "rock crushes scissors"
        break

        case 'paper':
            board.innerHTML = "paper wraps rock"
            break

        case 'scissor':
            board.innerHTML = "scissor cuts paper"
            break

        default:
            console.log('click something')
   }
}

rock.addEventListener('click',handler)
paper.addEventListener('click',handler)
scissor.addEventListener('click',handler)
