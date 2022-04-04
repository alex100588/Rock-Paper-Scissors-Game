
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div =document.getElementById('r')
const paper_div =document.getElementById('p')
const scissor_div =document.getElementById('s')
const cho = document.querySelectorAll('.choice')

let userScore = 0
let computerScore = 0
const choices = ['r', 'p', 's']

function getComputerChoice(){
    const randomNumber = Math.round(Math.random() * 3)
    return choices[randomNumber]
}

function convertToWord(letter){
    if(letter === "r") return 'Rock'
    if(letter === "p") return 'Paper'
    return "Scissors"
}

function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".sub()
    const smallCompWord = "comp".sub()
    result_p.innerHTML =`${convertToWord(userChoice)} ${smallUserWord}  beats  ${convertToWord(computerChoice)} ${smallCompWord}  You win!`
    cho.forEach(c => c.style.backgroundColor = 'green')
}

function lose(userChoice, computerChoice){
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    const smallUserWord = "user".sub()
    const smallCompWord = "comp".sub()
    result_p.innerHTML =`${convertToWord(userChoice)} ${smallUserWord}  loses to ${convertToWord(computerChoice)} ${smallCompWord}  You lost!`
    
    cho.forEach(c => c.style.backgroundColor = 'red')
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".sub()
    const smallCompWord = "comp".sub()
    result_p.innerHTML =`${convertToWord(userChoice)} ${smallUserWord}  equals  ${convertToWord(computerChoice)} ${smallCompWord}  It's a draw.`
    cho.forEach(c => c.style.backgroundColor = 'blue')
}


function game(userChoice){
    const computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "rr":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }   

}

main()
function main(){
    rock_div.addEventListener('click', ()=>{
        game('r')
    })

    paper_div.addEventListener('click', ()=>{
        game('p')
    })

    scissor_div.addEventListener('click', ()=>{
        game('s')
    })
}
