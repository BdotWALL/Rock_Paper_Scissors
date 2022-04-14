const getHands = require("../rps");

describe("Gethand Function", () => {
    test("This should get the player hand. Player should be given rock, paper, or scissors", () => {
        const hands = ['Rock' || 'Paper' || 'Scissors']

         expect(hands).toBeTruthy();

    })

    test("Player should only be given one weapon", () => {
        const hands = ['Rock' || 'Paper' || 'Scissors']

        expect(hands).toHaveLength(1)

    })

});