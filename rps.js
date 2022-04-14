const hands = ['rock' , 'paper', 'scissors'];

let getHands = () => {
    return hands[parseInt(Math.random()*10)%3];
}

let play1 = {name: 'Player1', getHands: getHands}

let play2 = {name: 'Player2', getHands: getHands}


const winConditions = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

let playRound = (p1, p2) => {

    let p1Hand = p1.getHands();
    let p2Hand = p2.getHands();

    console.log(p1.name, 'threw', p1Hand);
    console.log(p2.name, 'threw', p2Hand);

    if (p1Hand === p2Hand) {
        // tie
        console.log("it's a tie");
        return null;
    } else if (winConditions[p1Hand] === p2Hand) {
        // p1 wins or p2 loses
        console.log(p1.name, 'wins!');
        return p1;
    } else {
        // p2 wins or p1 loses
        console.log(p2.name, 'wins!');
        return p2;
    }
}

let playGame = (player1, player2, playUntil) => {
    
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        console.log('Current Score: ', player1.name, ':' ,player1Wins)
        console.log('Current Score: ', player2.name, ':' ,player2Wins)
        if (!playRound(player1, player2)) {

        } else if (playRound(player1, player2) === player1) {
            player1Wins++;
        } else {
            player2Wins++;
        }
    }  

    if (player1Wins === playUntil) {
        return player1.name + "wins the game";
    } else {
        return player2.name + "wins the game";
    }
}

console.log(playGame(play1,play2,5))


module.exports = getHands;

module.exports = playRound;

// module.exports = playgame;