const hands = ['Rock', 'Paper', 'Scissors']

function gethand(){
    return hands[parseInt(Math.random()*10)%3];
}


let player1 = {name:'P1', choice1: gethand()}
let player2 = {name:'P2', choice2: gethand()}


function playround(p1,p2){
    let p1hand = p1.choice1;
    let p2hand = p2.choice2;

    console.log(p1.name + " threw " + p1hand);
    console.log(p2.name + " threw " + p2hand);

    if (player1.choice1 === player2.choice2){
        console.log("Its a tie")
    return null;}
    if (player1.choice1 === hands[0] && player2.choice2 === hands[1]){
        console.log(p2.name + ' wins');
        return p1;}
    if (player1.choice1 === hands[0] && player2.choice2 === hands[2]){
        console.log(p1.name + ' wins');
        return p2;}
    if (player1.choice1 === hands[1] && player2.choice2 === hands[0]){
        console.log(p1.name + ' wins');
        return p1;}
    if (player1.choice1 === hands[1] && player2.choice2 === hands[2]){
        console.log(p2.name + ' wins');
        return p2;} 
    if (player1.choice1 === hands[2] && player2.choice2 === hands[0]){
        console.log(p2.name + ' wins');
        return p2;}
    if (player1.choice1 === hands[2] && player2.choice2 === hands[1]){
        console.log(p1.name + ' wins');
        return p1;}
    }
playround(player1,player2)

console.log(playround(player1,player2))

function playgame(player1, player2, playuntil) {
let p1score = 0;
let p2score = 0;


while (p1score < playuntil && p2score < playuntil)
  
if (!playround(player1,player2)){

} else if (playround(player1,player2) === player1){
   p1score++;}
else {
   p2score++;
}

if (p1score === playuntil){
   return player1;
} else {
   return player2;



}}

console.log(playgame(player1,player2,5))


// function playGame(player1, player2, playUntil) {
    // let numWins1 = 0;
    // let numWins2 = 0;
    // let winner;
    // playUntil = 5;
  
//     while (p1score < playUntil || p2score < playUntil) {
//       winner = playround(player1, player2);
//       if (winner == player1) {
//         numWins1++;
//       } else if (winner == player2) {
//         numWins2++;
//       }
//     }
//     console.log(winner.name + " is the game's winner.");
//     return winner;
// }
// console.log(playGame(player1, player2))
// function playuntil(p1Score,p2Score) {
//     if (p1Score !=5 || p2Score != 5) {
//       return [player1,player2, playround(player1,player2),score(player1,player2)];
//     }
//     else {
        
//     } null;
//   }
// playuntil(p1score,p2score);
// console.log(playuntil(p1score,p2score))

