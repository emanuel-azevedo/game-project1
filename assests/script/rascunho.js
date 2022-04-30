
const imgList = []

/*1. Esta função sortei um número aleatório entre 0 e comprimento da array passada como argumento: */
function getRandomIndex(n) {    
  return Math.floor(Math.random() * n);
}

/*2. A função "compare" auxilia a função seguinte "getSequenceWithoutRepeating" a
gerar uma sequência de exatamente 6 elementos aleatoriamente.*/

function compare() {
  return Math.random() - 0.5  
}

function getSequenceWithoutRepeating () {
  /* Array vazia declarada em variável para
  obtenção futura da sequência sem repetição. */
  let roundSequence = [];
  /* Reorganiza a array de clubes usando o método ".sort()"
  e passo como parâmetro a função "compare()". */
  imgList.sort(compare)
  /* Neste loop, a ideia é fazê-lo percorrer a array "imgList"
  já reorganizada pelo .sort(compare) e adicionar o índice onde estiver na
  array declarada inicialmente, até então vazia. */
  for (let i = 0; i < 6; i++) {    
    roundSequence.push(imgList[i])
  }
  /* Retorna a array declarada na variável
  anterior com 6 elementos sortidos. */
  return roundSequence
}

/* 3. A const "displaySequence" guarda a array
gerada pela função "getSequenceWithoutRepeating()".*/
const displaySequence = getSequenceWithoutRepeating()

// 4. Obtendo a questão charada do game
// 4.1 "questionImgIndex" guarda um índice aleatório da Array  "displaySequence".
const questionImgIndex = getRandomIndex(displaySequence.length)

/* 4.2 A função "getQuestion" invoca a questão que o player deve responder escolhendo uma das alternativas que lhe serão ofertadas posteriormente */
function getQuestion() {
  /* 4.2.1 "questionImgIndex + 1" indica uma posição entre 1 e a posição do ultimo elemento da array "displaySequence". */
  return`Qual foi o ${questionImgIndex + 1}º clube apresentado na sequência?`;  
}
// 4.3 A variável "question" guarda a pergunta gerada na função getQuestion.
const question = getQuestion(.)

/* 5. A variável "answer" salva o valor da resposta a partir da questão gerada pela função "getQuestion()". */
const answer = displaySequence[questionImgIndex]

/* 6. Cria 3 alternativas aleatórias entre as 6 da displaySequence em um array e adiciona a reposta "answer" em um índice aleatório. */
function getAlternatives() {
 
  let alternatives = [];
  // 6.1 Operador "spread: ..." => Cria "deep clones"
  let displayNoAnswer = [...displaySequence]
  let indexAnswer = displayNoAnswer.indexOf(answer)  
  displayNoAnswer.splice(indexAnswer, 1)  
  displayNoAnswer.sort(compare)
    
  for (let i = 0; i < 3; i++) {    
    alternatives.push(displayNoAnswer[i])    
  } 
  alternatives.splice(getRandomIndex(4), 0, answer)
  
  return alternatives 
}

const alternatives = getAlternatives()

/* function getRound () {
    let roundSequence = getSequence(imgList);
    let imgIndex = getRandomIndex(roundSequence);
    let question = `Qual foi o ${imgIndex + 1}º clube apresentado na sequência?`;
    let alternatives = getAlternative(roundSequence);
    let answer = roundSequence[imgIndex];

}

function getCheck 




// Qual foi o ${ }º clube?

//      5 7 10 11 16 18

//      5 10 11 16 18 */


















