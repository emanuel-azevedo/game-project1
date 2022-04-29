
// 1. Apenas 1 player
// 2. O jogo terá 10 rodadas e 3 chances de erro
// 3. Cada rodada, uma sequência de 6 ou 7 clubes deverá ser sorteada entre os 20 disponíveis
// 4. A sequência deverá ser exibida individualmente
// 5. Cada sequência terá uma pergunta ao final questionando qual clube se encontrava na posição "X"
// 6. A resposta será objetiva, de simples escolha entre 5 alternativas
// 7. Cada rodada terá 10 segundos para resposta
// 8. Após a escolha ser feita, um placar deverá ser atualizado com a contabilização dos pontos (ou não)


const SELECTION_ENUM = {
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
}





















