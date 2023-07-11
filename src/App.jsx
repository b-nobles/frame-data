import { useState } from "react";

export default function App() {
  const ryu = {
    name: "Ryu",
    sLP: {
      name: "Standing Light Punch",
      startup: 4,
      onblock: -1,
      image: "/src/assets/ryu/sLP.png",
    },
    sMP: {
      name: "Standing Medium Punch",
      startup: 6,
      onblock: -1,
      image: "/src/assets/ryu/sMP.png",
    },
    sHP: {
      name: "Standing Heavy Punch",
      startup: 10,
      onblock: -2,
      image: "/src/assets/ryu/sHP.png",
    },
    sLK: {
      name: "Standing Light Kick",
      startup: 5,
      onblock: -4,
      image: "/src/assets/ryu/sLK.png",
    },
    sMK: {
      name: "Standing Medium Kick",
      startup: 9,
      onblock: -4,
      image: "/src/assets/ryu/sMK.png",
    },
    sHK: {
      name: "Standing Heavy Kick",
      startup: 12,
      onblock: 1,
      image: "/src/assets/ryu/sHK.png",
    },
    crLP: {
      name: "Crouching Light Punch",
      startup: 4,
      onblock: -1,
      image: "/src/assets/ryu/crLP.png",
    },
    crMP: {
      name: "Crouching Medium Punch",
      startup: 6,
      onblock: 0,
      image: "/src/assets/ryu/crMP.png",
    },
    crHP: {
      name: "Crouching Heavy Punch",
      startup: 9,
      onblock: -7,
      image: "/src/assets/ryu/crHP.png",
    },
    crLK: {
      name: "Crouching Light Kick",
      startup: 5,
      onblock: -3,
      image: "/src/assets/ryu/crLK.png",
    },
    crMK: {
      name: "Crouching Medium Kick",
      startup: 8,
      onblock: -6,
      image: "/src/assets/ryu/crMK.png",
    },
    crHK: {
      name: "Crouching Heavy Kick",
      startup: 9,
      onblock: -12,
      image: "/src/assets/ryu/crHK.png",
    },
    commands: {
      fMP: {
      name: "Collarbone Breaker",
      startup: 20,
      onblock: -3,
      image: "/src/assets/ryu/fMP.png",
    },
     fHP: {
      name: "Solar Plexus Strike",
      startup: 20,
      onblock: 1,
      image: "src/assets/ryu/fHP.png",
    },
     bHP: {
      name: "Short Uppercut",
      startup: 7,
      onblock: -13,
      image: "src/assets/ryu/bHP.png",
    },
     fHK: {
      name: "Whirlwind Kick",
      startup: 16,
      onblock: -4,
      image: "src/assets/ryu/fHK.png",
    },
     bHK: {
      name: "Axe Kick",
      startup: 10,
      onblock: -4,
      image: "src/assets/ryu/bHK.png",
    }
  },
    profile: "src/assets/ryu/profile.png"
  };

  const ken = {
    name: "Ken",
    sLP: {
      name: "Standing Light Punch",
      startup: 4,
      onblock: -1,
      image: "/src/assets/ken/sLP.png",
    },
    sMP: {
      name: "Standing Medium Punch",
      startup: 5,
      onblock: -2,
      image: "/src/assets/ken/sMP.png",
    },
    sHP: {
      name: "Standing Heavy Punch",
      startup: 10,
      onblock: -2,
      image: "/src/assets/ken/sHP.png",
    },
    sLK: {
      name: "Standing Light Kick",
      startup: 5,
      onblock: -2,
      image: "/src/assets/ken/sLK.png",
    },
    sMK: {
      name: "Standing Medium Kick",
      startup: 8,
      onblock: -5,
      image: "/src/assets/ken/sMK.png",
    },
    sHK: {
      name: "Standing Heavy Kick",
      startup: 12,
      onblock: -5,
      image: "/src/assets/ken/sHK.png",
    },
    crLP: {
      name: "Crouching Light Punch",
      startup: 4,
      onblock: -1,
      image: "/src/assets/ken/crLP.png",
    },
    crMP: {
      name: "Crouching Medium Punch",
      startup: 6,
      onblock: 0,
      image: "/src/assets/ken/crMP.png",
    },
    crHP: {
      name: "Crouching Heavy Punch",
      startup: 8,
      onblock: -10,
      image: "/src/assets/ken/crHP.png",
    },
    crLK: {
      name: "Crouching Light Kick",
      startup: 5,
      onblock: -3,
      image: "/src/assets/ken/crLK.png",
    },
    crMK: {
      name: "Crouching Medium Kick",
      startup: 7,
      onblock: -6,
      image: "/src/assets/ken/crMK.png",
    },
    crHK: {
      name: "Crouching Heavy Kick",
      startup: 8,
      onblock: -10,
      image: "/src/assets/ken/crHK.png",
    },
    profile: "/src/assets/ken/profile.png"
  };

  const [newMove, setNewMove] = useState("sLP");
  const [attackChar, setAttackChar] = useState(ryu);
  const [blockChar, setBlockChar] = useState(ryu);
  const [newText, setNewText] = useState("");
  const characterList = [ryu, ken];
  const attackButtons = ["LP", "MP", "HP", "LK", "MK", "HK"]
  const [activeButton, setActiveButton] = useState("LP")
  let pressedButton = "LP"
  const [buttonPrefix, setButtonPrefix] = useState("s")
  const [command, setNewCommand] = useState("fMP")
  const [attackingState, setNewAttackingState] = useState("normals")

  //handle the radio option for direction for an input
  function directionSelect(e) {
    setButtonPrefix(e.target.value);
  }

  //button state, pos 1 is for radio buttons, pos 2 is for attack buttons
  function activeState(val, pos) {
    if (val === buttonPrefix && pos === 1) {
      return 'checked'
    } else if (val === activeButton && pos === 2) {
      return 'active'
    } else if (pos === 2) {
      return 'attack-button'
    }
  }

  //function for switching between radio options
  function switchState(state) {
    setNewMove(state + activeButton)
    setNewAttackingState('normals')
    setNewText("")
  }

  //create the attack button functions
  function handleButton(e) {
    setActiveButton(e.target.innerText)
    pressedButton = e.target.innerText
    setNewMove(buttonPrefix + pressedButton)
    setNewText("")
  }

  //proper dynamic attack image loader to handle different states
  function imageLoader(prop) {
    if (attackingState === "normals") {
      return attackChar[newMove][prop]
    } else if (attackingState === "command normals") {
      return attackChar.commands[command][prop]
    }

  }

  //create the buttons and give them the correct properties
  function createButtons(buttons) {
    return buttons.map((button) => {
      return <button key={button} className={activeState(button, 2)} onClick={handleButton}>{button}</button>
    })
  }

  //formula used to compare a move's frame data against the blocking character's entire moveset to find appropriate moves
  function frameChecker(attack, blocker) {
    const blockerMoves = Object.keys(blocker);
    let attackerMove = ''
    if (attackingState === 'normals') {
      attackerMove = attackChar[attack].onblock
    } else if (attackingState === 'command normals') {
      attackerMove = attackChar.commands[attack].onblock
    }
    const moveList = [];
    blockerMoves.forEach((move) => {
      if (blocker[move].startup <= attackerMove * -1) {
        moveList.push(`${blocker[move].name} `);
      }
    });
    if (moveList.length === 0) {
      setNewText("Cannot be punished")
    } else {
      setNewText(moveList.join("/ "));
    }
    
  }

  //function used to check for command normals
  function commandNormal(e) {
    setNewCommand(e.target.value)
  }

  //stop the form from refreshing the page, execute frameChecker function
  function handleSubmit(e) {
    e.preventDefault();
    frameChecker(newMove, blockChar);
  }

  //map the characters' names into a drop down to be selected
  function characterFill() {
    return characterList.map((current) => {
      {
        return <option key={current.name}>{current.name}</option>;
      }
    });
  }

  //map moves into a dropdown
  function attacksFill(items) {
    if (items) {
    const list = Object.keys(items);
    return list.map((attack) => {
      return <option key={items[attack].name}>{attack}</option>
      })
    } else {
      return <option key='N/A'>N/A</option>
    }
    
  }

  //character lookup function
  function lookUpCharacter(func, val) {
    setNewText("");
    for (const select in characterList) {
      if (characterList[select].name === val)
        return func(characterList[select]);
    }
  }

  //change the attack character's moves when new character is selected
  function handleAttackerChange(e) {
    //find the appropriate character using their name
    lookUpCharacter(setAttackChar, e.target.value)
    if (!attackChar.hasOwnProperty(buttonPrefix + activeButton)) {
      setNewMove("sLP")
    }
  }

  //change the blocker and update blocker movelist
  function handleBlockerChange(e) {
    lookUpCharacter(setBlockChar, e.target.value)
  }

  return (
    <>
      <div className="character-container">
      <div className="attack float">
      <h2>Attacker: {attackChar.name}</h2>
      <div className="attack-box">
        <img
          src={`${imageLoader('image')}`}
          alt={`${attackChar.name} using ${imageLoader('name')}`}
          className="attacking-character"
        />
      </div>
      <h3>
        {imageLoader('name')} is {imageLoader('onblock')} on block
      </h3>
      <label htmlFor="attackselect">Attacking Character: </label>
      <select
        name="attackselect"
        id="attackselect"
        onChange={handleAttackerChange}
      >
        {characterFill()}
      </select>
      <br />
      <input type="radio" id="standing" name="direction" value="s" defaultChecked onClick={directionSelect} onChange={() => (activeState("s", 1), switchState('s'))} />
      <label htmlFor="standing">Standing</label>
      <input type="radio" id="crouching" name="direction" value="cr" onClick={directionSelect} onChange={() => (activeState("cr", 1), switchState('cr'))}/>
      <label htmlFor="crouching">Crouching</label>
      <input type="radio" id="command-moves" name="direction" value='command' onChange={() => {setNewAttackingState('command normals')}}/>
      <label htmlFor="command-moves">Command Normals</label>
      <br />
      <label htmlFor="commands" hidden={(attackingState !== 'command normals')}>Command Normals: </label>
      <select name="commands" id="commands" hidden={(attackingState !== 'command normals')} onChange={commandNormal}>
        {attacksFill(attackChar.commands)}
      </select>
      <div className="button-layout" hidden={(attackingState !== 'normals')}>{createButtons(attackButtons)}</div>
      </div>
      <div claseName="block float">
      <h2>Blocker: {blockChar.name}</h2>
      <div className="block-box">
      <img
          src={blockChar.profile}
          alt={`${blockChar.name}`}
          className="blocking-character"
        />
      </div>
      <label htmlFor="blockselect">Blocking Character: </label>
      <select
        name="blockselect"
        id="blockselect"
        onChange={handleBlockerChange}
      >
        {characterFill()}
      </select>
      <br />
      <button onClick={handleSubmit}>Check Moves</button>
      <p>{newText}</p>
      </div>
      </div>
    </>
  );
}
