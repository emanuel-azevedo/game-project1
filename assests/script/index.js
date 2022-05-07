const startBtnElement = document.querySelector('#btn-start')
const whiteBoardElement = document.querySelector('#white-board div')
const alternativesButtonsElement = document.querySelectorAll('.options')
const roundCounterElement = document.getElementById('round-counter')
const chancesCounterElement = document.getElementById('chances-counter')
const timeLeftElement = document.getElementById('time-left-counter')
let answer
let roundCounter = 0
let timeLeft = 11

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

            alternativesButtonsElement.forEach((element) => {
                element.classList.remove('hidden')
            })

            const timeLeftId = setInterval(() => {
            timeLeft--
            if (timeLeft === 0) {
                chancesCounter--
                clearInterval(timeLeftId)   
                /* chancesCounterElement.innerText = chancesCounter */                          
                                
            }

            timeLeftElement.innerText = timeLeft

            alternativesButtonsElement.forEach((alternativesButton) => {
                alternativesButton.addEventListener('click', (event) => {
                        
                    checkResult(event.target.innerText)
            
                    chancesCounterElement.innerText = chancesCounter
                    gameOver()
                    startBtnElement.classList.remove('hidden')
                                
                })
            })
            },1000)
        }
    }, 1500)

   
    
    // Loop inserindo nome dos clubes nos botões
    for (let i = 0; i < alternatives.length; i++) {
        alternativesButtonsElement[i].innerHTML = alternatives[i]     
    }

    startBtnElement.innerHTML = 'NEXT'
    startBtnElement.classList.add('hidden')

    alternativesButtonsElement.forEach((element) => {
        element.classList.add('hidden')
    })

    roundCounter++
    roundCounterElement.innerText = roundCounter 
}


startBtnElement.addEventListener('click', startGame)
