
const imgList = []

// 1. Esta função sortei um número aleatório entre 0 e comprimento da array passada como argumento:
function getRandomIndex (arr) {    
    let randomNum = Math.random() * arr.length;
    let randomIndex = Math.floor(randomNum);
    return randomIndex;
}


// Aqui, a função está gerando índices repetidos em vários sorteios
function getSequence (imgList) {
    let roundSequence = [];
    
    for (let i = 0; i < 6; i++) {
        let randomIndex = getRandomIndex(imgList);
        roundSequence.push(imgList[randomIndex])
    }
    
    return roundSequence;
};

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


















