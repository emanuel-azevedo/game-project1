
const imgList = []

/*1. Esta função sortei um número aleatório entre 0 e comprimento da array passada como argumento: */
function getRandomIndex (arr) {    
    let randomNum = Math.random() * arr.length;
    let randomIndex = Math.floor(randomNum);
    return randomIndex;
}

/*2. A função "compare" auxilia a segunda função "getSequenceWithoutRepeating" a
gerar uma sequência de exatamente 6 elementos aleatóriamente.*/

function compare() {
  return Math.random() - 0.5  
}

function getSequenceWithoutRepeating () {
  /* Array vazia declarada em variável para
  obtenção futura da sequência sem repetição*/
  let roundSequence = [];
  /* Reorganizo a array de clubes usando o método ".sort()"
  e passo como parâmetro a função "compare()"  */
  imgList.sort(compare)
  /* Neste loop, a ideia é fazê-lo percorrer a array "imgList"
  já reorganizada pelo .sort(compare) e adicionar o índice onde estiver na
  array declarada inicialmente até então vazia*/
  for( let i = 0; i < 6; i++) {    
    roundSequence.push(imgList[i])
  }
  /* Retorna a array declarada na variável
  anterior com 6 elementos sortidos*/
  return roundSequence
}

/* 3. A const "displaySequence" guarda a array
gerada pela função "getSequenceWithoutRepeating()"*/
const displaySequence = getSequenceWithoutRepeating()

/* 4. A função getAnswer obtém a resposta entre os 6 elementos gerados na função "getSequenceWithoutRepeating()" guardada na const "displaySequence" */
function getAnswer(arr) {
    let answerIndex = getRandomIndex(6)
    return arr[answerIndex]  
}

/* 5. Guarda o valor (resposta) da função "getAnswer" na variável "answer" */
const answer = getAnswer(displaySequence)

/* 6. Cria as alternativas INCOMPLETA
OBS: O retorno tem gerado arrays com repetição*/
function getAlternatives () {
 
    let alternatives = [];    
    displaySequence.sort(compare)
    
    for (let i = 0; i < 3; i++) {    
      alternatives.push(displaySequence[i])    
    }     
    alternatives.splice(getRandomIndex(4), 0, answer)
    // if (alternatives[i] = answer){
    //   alternatives[i].splice(imgList[getRandomIndex(imgList.length)])
    // }   
     
    return alternatives   
}

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


















