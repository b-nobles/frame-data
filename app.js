//Formula to check which moves can be used as a punish
function frameChecker(button, blocker) {
  console.log(`${button.name} is ${button.onblock} on block`);
  const blockerMoves = Object.keys(blocker);
  blockerMoves.forEach((move) => {
    if (blocker[move].startup <= button.onblock * -1) {
      console.log(
        `${blocker[move].name} startup is ${blocker[move].startup} frames and will punish.`
      );
    }
  });
}

const ryu = {
  sLP: { name: "sLP", startup: 4, onblock: -1 },
  sMP: { name: "sMP", startup: 6, onblock: -1 },
  sHP: { name: "sHP", startup: 10, onblock: -2 },
  sLK: { name: "sLK", startup: 5, onblock: -4 },
  sMK: { name: "sMK", startup: 9, onblock: -4 },
  sHK: { name: "sHK", startup: 12, onblock: 1 },
  crLP: { name: "crLP", startup: 4, onblock: -1 },
  crMP: { name: "crMP", startup: 6, onblock: 0 },
  crHP: { name: "crHP", startup: 9, onblock: -7 },
  crLK: { name: "crLK", startup: 5, onblock: -3 },
  crMK: { name: "crMK", startup: 8, onblock: -6 },
  crHK: { name: "crHK", startup: 9, onblock: -12 },
};

frameChecker(ryu.crHP, ryu);
