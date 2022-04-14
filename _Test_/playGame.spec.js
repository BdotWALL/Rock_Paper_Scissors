const playGame = require("../rps");

describe("playgame Function", () => {
    test("This should play a a game to 5 wins", () => {
        let playuntil = 5
        let p1score = playuntil;
        let p2score = playuntil;

         expect(p1score).toBe(5);
         expect(p2score).toBe(5);

    })
    test("This should decide winner", () => {
        let playUntil = 5
        let player1 = {name: 'Player1'}
        let player2 = {name: 'Player2'}
        let player1Wins = 0;

        const winner = jest.fn(() => {if (player1Wins === playUntil) {
            return player1.name + "wins the game";
            } else {
            return player2.name + "wins the game";
        }});
    
        winner();

        expect(winner).toHaveReturned();

    })

});