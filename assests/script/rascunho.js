
const imgList = []

// 1. Esta função sortei um número aleatório entre 0 e comprimento da array passada como argumento:
function getRandomIndex (arr) {    
    let randomNum = Math.random() * arr.length;
    let randomIndex = Math.floor(randomNum);
    return randomIndex;
}


/*A função "compare" auxilia a segunda função "getSequenceWithoutRepeating" a
gerar uma sequência de exatamente 6 elementos aleatóriamente.*/

function compare() {
  return Math.random() - 0.5  
}

function getSequenceWithoutRepeating () {
  /* Array vazia declarada em variável
  para obtenção futura da sequência */
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

function getAlternative (roundSequence) {
    let alternatives = [];
    
    for (let i = 0; i < 5; i++) {
        let randomIndex = getRandomIndex(roundSequence);
        alternatives.push(roundSequence[randomIndex])
    }

    return alternatives;    
};

function getRound () {
    let roundSequence = getSequence(imgList);
    let imgIndex = getRandomIndex(roundSequence);
    let question = `Qual foi o ${imgIndex + 1}º clube apresentado na sequência?`
    let alternatives = getAlternative(roundSequence);
    let answer = roundSequence[imgIndex];

};

function getCheck 




// Qual foi o ${ }º clube?

//      5 7 10 11 16 18

//      5 10 11 16 18


















