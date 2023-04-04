// function randInt(r) {
//   const rnd = Math.floor(Math.random() * r + 1);
//   return rnd;
// }

// export function rps(s) {
//   //regular rock paper scissors function
//   var opp = "null";
//   const rand = randInt(3);

//   switch (rand) {
//     case 1:
//       var opp = "rock";
//       break;
//     case 2:
//       var opp = "paper";
//       break;
//     case 3:
//       var opp = "scissors";
//       break;
//     default:
//       console.log("Unexpected input!");
//       console.log(rand);
//       return 0;
//   }
//   if (s == "none") {
//     var val = { player: opp };
//     return val;
//   }

//   let lcHand = s.toLowerCase();
//   var res = check(lcHand, opp);
//   var val = { player: lcHand, opponent: opp, result: res };
//   return val;
// }

// export function rpsls(s) {
//   var opp = "null";
//   const rand = randInt(5);
//   switch (rand) {
//     case 1:
//       var opp = "rock";
//       break;
//     case 2:
//       var opp = "paper";
//       break;
//     case 3:
//       var opp = "scissors";
//       break;
//     case 4:
//       var opp = "lizard";
//       break;
//     case 5:
//       var opp = "spock";
//       break;
//     default:
//       console.log("Unexpected input!");
//       console.log(rand);
//       return 0;
//   }

//   if (s == "none") {
//     var val = { player: opp };
//     return val;
//   }

//   let lcHand = s.toLowerCase();
//   var res = check(lcHand, opp);
//   var val = { player: lcHand, opponent: opp, result: res };
//   return val;
// }

// function check(player, opp) {
//   if (player == opponent) var res = "tie";

//   if (player == "rock" && opp == "scissors") var res = "win";
//   if (player == "rock" && opp == "paper") var res = "lose";
//   if (player == "rock" && opp == "lizard") var res = "win";
//   if (player == "rock" && opp == "spock") var res = "los";

//   if (player == "scissors" && opp == "rock") var res = "lose";
//   if (player == "scissors" && opp == "paper") var res = "win";
//   if (player == "scissors" && opp == "lizard") var res = "win";
//   if (player == "scissors" && opp == "spock") var res = "lose";

//   if (player == "paper" && opp == "scissors") var res = "lose";
//   if (player == "paper" && opp == "rock") var res = "win";
//   if (player == "paper" && opp == "lizard") var res = "lose";
//   if (player == "paper" && opp == "spock") var res = "win";

//   if (player == "lizard" && opp == "rock") var res = "lose";
//   if (player == "lizard" && opp == "scissors") var res = "lose";
//   if (player == "lizard" && opp == "paper") var res = "win";
//   if (player == "lizard" && opp == "spock") var res = "win";

//   if (player == "spock" && opp == "rock") var res = "win";
//   if (player == "spock" && opp == "paper") var res = "lose";
//   if (player == "spock" && opp == "scissors") var res = "win";
//   if (player == "spock" && opp == "lizard") var res = "lose";

//   return res;
// }
export { rps, rpsls };

let result = {
  rock: {
    rock: "tie",
    paper: "win",
    scissors: "lose",
    lizard: "lose",
    spock: "win",
  },
  paper: {
    rock: "lose",
    paper: "tie",
    scissors: "win",
    lizard: "win",
    spock: "lose",
  },
  scissors: {
    rock: "win",
    paper: "lose",
    scissors: "tie",
    lizard: "lose",
    spock: "win",
  },
  lizard: {
    rock: "win",
    paper: "lose",
    scissors: "win",
    lizard: "tie",
    spock: "lose",
  },
  spock: {
    rock: "lose",
    paper: "win",
    scissors: "lose",
    lizard: "win",
    spock: "tie",
  },
};

function rps(play) {
  let hands = ["rock", "paper", "scissors"];
  let rand_play = hands[Math.floor(Math.random() * 3)];

  if (play == undefined) {
    return { player: rand_play };
  }
  play = play.toLowerCase();

  if (!hands.includes(play)) {
    console.error(`${play} is not an option`);
    throw new RangeError();
  }

  return { player: play, opponent: rand_play, result: result[rand_play][play] };
}

function rpsls(play) {
  let hands = ["rock", "paper", "scissors", "lizard", "spock"];
  let rand_play = hands[Math.floor(Math.random() * 5)];

  if (play == undefined) {
    return { player: rand_play };
  }

  play = play.toLowerCase();

  if (!hands.includes(play)) {
    throw new RangeError();
  }

  return { player: play, opponent: rand_play, result: result[rand_play][play] };
}
