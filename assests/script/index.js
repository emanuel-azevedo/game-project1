// 1. Apenas 1 player
// 2. O jogo terá 10 rodadas e 3 chances de erro
// 3. Cada rodada, uma sequência de 6 ou 7 clubes deverá ser sorteada entre os 20 disponíveis
// 4. A sequência deverá ser exibida individualmente
// 5. Cada sequência terá uma pergunta ao final questionando qual clube se encontrava na posição "X"
// 6. A resposta será objetiva, de simples escolha entre 5 alternativas
// 7. Cada rodada terá 10 segundos para resposta
// 8. Após a escolha ser feita, um placar deverá ser atualizado com a contabilização dos pontos (ou não)


/* const SELECTION_ENUM = {
    ajax: 'AJAX',
    atleticoDeMadrid: 'ATLETICO DE MADRID',
    barcelona: 'BARCELONA',
    bayernMunich: 'BAYERN MUNICH',
    benfica: 'BENFICA',
    borussiaDortmund: 'BORUSSIA DORTMUND',
    chelsea: 'CHELSEA',
    corinthians: 'CORINTHIANS',
    internazionale: 'INTERNAZIONALE',
    juventus: 'JUVENTUS',
    lyon: 'LYON',
    manchesterCity: 'MANCHESTER CITY',
    manchesterUnited: 'MANCHESTER UNITED',
    milan: 'MILAN',
    olympiqueMarseille: 'OLYMPIQUE MARSEILLE',
    porto: 'PORTO',
    psg: 'PARIS SAINT GERMAIN',
    psv: 'PSV',
    realMadrid: 'REAL MADRID',
    sporting: 'SPORTING',
}


class Game {
    constructor() {
        this.score = 0;
        this.round = 1;
        this.response = '';
    }

    checkResult () {

    }

    updateScore() {

    }
}



class Player {
    constructor() {
        this.wins = 0;
        this.currentPick = '';
    }
    // selection poderá ser: a, b, c ou d
    pick(selection) {
        this.currentPick = SELECTION_ENUM[selection];
    }
} */


/* console.log('Hello world');

const btnStartGame = document.getElementById('start-btn')

function loadPage () {

}

btnStartGame.addEventListener('click', () => ) */




const startBtnElement = document.querySelector('#btn-start')
const whiteBoardElement = document.querySelector('#white-board div')
const alternativesButtonsElement = document.querySelectorAll('.options')
const roundCounterElement = document.getElementById('round-counter')
const chancesCounterElement = document.getElementById('chances-counter')
const timeLeftElement = document.getElementById('time-left-counter')
let answer
let roundCounter = 0

function startGame() { 

    const displaySequence = getSequenceWithoutRepeating()
    const questionImgIndex = getRandomIndex(displaySequence.length)
    const question = getQuestion(questionImgIndex)
    answer = displaySequence[questionImgIndex]
    const alternatives = getAlternatives(displaySequence, answer)
    let count = 0

    const interval = setInterval(() => {
        const img = document.createElement('img')
        img.setAttribute('src', `./assests/images/${displaySequence[count]}.png`)
        img.setAttribute('class', 'escudo')
        whiteBoardElement.innerHTML = ''
        whiteBoardElement.appendChild(img)
        count ++
        if (count === displaySequence.length) {
            clearInterval(interval)
            whiteBoardElement.innerHTML = question

            let timeLeft = 11

            const timeLeftId = setInterval(() => {
            timeLeft--
            if (timeLeft === 0) {
                chancesCounter--
                clearInterval(timeLeftId)   
                chancesCounterElement.innerText = chancesCounter
                //startGame()
            }
            timeLeftElement.innerText = timeLeft
            },1000)
        }
    }, 1500)

    alternativesButtonsElement.forEach((element) => {
        element.classList.remove('hidden')
    })
    
    // Loop inserindo nome dos clubes nos botões
    for (let i = 0; i < alternatives.length; i++) {
        alternativesButtonsElement[i].innerHTML = alternatives[i]     
    }

    startBtnElement.innerHTML = 'NEXT'
    startBtnElement.classList.add('hidden'),

    roundCounter++
    roundCounterElement.innerText = roundCounter 
}


startBtnElement.addEventListener('click', startGame)

alternativesButtonsElement.forEach((alternativesButton) => {
    alternativesButton.addEventListener('click', (event) => {
      
        checkResult(event.target.innerText)

        chancesCounterElement.innerText = chancesCounter
        gameOver()
        startBtnElement.classList.remove('hidden')            

    })
})








/* if(startBtnElement.innerHTML === 'NEXT') {
    console.log('oi')
    const interval = setInterval(() => {
        whiteBoardElement.innerHTML = displaySequence[count]
        count ++
        if (count === displaySequence.length) {
            clearInterval(interval)
            whiteBoardElement.innerHTML = question
        }
    }, 1500)
    
    // Loop inserindo nome dos clubes nos botões
    for (let i = 0; i < alternatives.length; i++) {
        alternativesButtonsElement[i].innerHTML = alternatives[i]     
    }
} */






































