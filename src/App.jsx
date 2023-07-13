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
    targets: {
      "sHP>HK": {
        name: "High Double Strike",
        startup: 19,
        onblock: -8,
        image: "/src/assets/ryu/sHPHK.png"
      },
      "sMP>LK": {
        name: "Fuwa Double Strike",
        startup: 11,
        onblock: -7,
        image: "/src/assets/ryu/sMPLK.png"
      },
      "sMP>LK>HK": {
        name: "Fuwa Triple Strike",
        startup: 27,
        onblock: -8,
        image: "/src/assets/ryu/sMPLKHK.png"
      }
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
    profile: "/src/assets/ken/profile.png",
    targets: {
      "sMP>HP": {
        name: "Chin Buster",
        startup: 16,
        onblock: -14,
        image: "/src/assets/ken/sMPHP.png"
      },
      "sMK>MK": {
        name: "Triple Flash Kicks 1",
        startup: 19,
        onblock: -12,
        image: "/src/assets/ken/sMKMK.png"
      },
      "sMK>MK>HK": {
        name: "Triple Flash Kicks 2",
        startup: 32,
        onblock: -11,
        image: "/src/assets/ken/sMKMKHK.png"
      }
    }
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
  const [target, setNewTarget] = useState("sHP>HK")
  const [attackingState, setNewAttackingState] = useState("normals")
  const [menuState, setNewMenuState] = useState("target combos")
  const [newImage, setNewImage] = useState('/src/assets/ryu/sLP.png')

  //handle the radio option for direction for an input
  function directionSelect(e) {
    setButtonPrefix(e.target.value);
    setNewImage(attackChar[e.target.value + activeButton].image)
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
    setNewImage(attackChar[buttonPrefix + pressedButton].image)
    setNewText("")
  }

  //create the buttons and give them the correct properties
  function createButtons(buttons) {
    return buttons.map((button) => {
      return <button key={button} className={activeState(button, 2)} onClick={handleButton}>{button}</button>
    })
  }

  //formula used to compare a move's frame data against the blocking character's entire moveset to find appropriate moves
  function frameChecker(attack, blocker) {
    //Grab the necessary moves
    const blockerMoves = Object.keys(blocker);
    let blockerCommands = ""
    if (blocker.commands) {
      blockerCommands = Object.keys(blocker.commands)
    }
    let attackerMove = ''
    if (attackingState === 'normals') {
      attackerMove = attackChar[attack].onblock
    } else if (attackingState + menuState === 'uniquecommand normals') {
      attackerMove = attackChar.commands[command].onblock
    } else if (attackingState + menuState === 'uniquetarget combos') {
      const targetCombos = Object.keys(attackChar.targets)
      if (targetCombos.includes(target)) {
        attackerMove = attackChar.targets[target].onblock
      } else {
        attackerMove = attackChar.targets[targetCombos[0]].onblock
      }
      
    }
    const moveList = [];
    blockerMoves.forEach((move) => {
      if (blocker[move].startup <= attackerMove * -1) {
        moveList.push(`${blocker[move].name} `);
      }
    });
    if (blockerCommands) {
      blockerCommands.forEach((move) => {
        if (blocker.commands[move].startup <= attackerMove * -1) {
          moveList.push(`${blocker.commands[move].name} (${move})`)
        }
      })
    }
    if (moveList.length === 0) {
      setNewText("Cannot be punished")
    } else {
      setNewText(moveList.join("/ "));
    }
    
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

  //Check if a character has target combos or command normals
  function attackMenu(attacker) {
    const list = Object.keys(attacker);
    const results = []
    if (list.includes('targets')) {
      results.push('Target Combos')
    }
    if (list.includes('commands')) {
      results.push('Command Normals')
    }
    return results.map((name) => {
      return <option key={name}>{name}</option>
    })
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
    let currentAttacker = {};
    //find the current character and assign their target combo to be first
    for (const check in characterList) {
      if (characterList[check].name === e.target.value) {
        currentAttacker = characterList[check]
      }
    }
    if (attackingState === 'normals') {
      setNewImage(currentAttacker[newMove].image);
    } else if (attackingState === 'unique') {
      setNewMenuState('target combos')
      const targetCombos = Object.keys(currentAttacker.targets)
      setNewImage(currentAttacker.targets[targetCombos[0]].image)
    }
      //find the appropriate character using their name
      lookUpCharacter(setAttackChar, e.target.value)
      console.log(target + ' ' + command)
  }

  //update menu state to change the corresponding drop down
  function handleMenuChange(e) {
    const menuText = e.target.value.toLowerCase();
    console.log(menuText)
    setNewMenuState(menuText)
    setNewText("")
    if (menuText === 'command normals') {
      setNewImage(attackChar.commands[command].image)
    } else if (menuText === 'target combos') {
      const targetCombos = Object.keys(attackChar.targets)
      if (!targetCombos.includes(target)) {
        setNewImage(attackChar.targets[targetCombos[0]].image)
      } else {
        setNewImage(attackChar.targets[target].image)
      }
    }
  }

  //image resetting function to account for faulty target combos
  function imageReset() {
    const targetCombos = Object.keys(attackChar.targets)
    if (!targetCombos.includes(target)) {
      setNewTarget(targetCombos[0])
      setNewImage(attackChar.targets[targetCombos[0]].image)
    } else {
      setNewImage(attackChar.targets[target].image)
    }
      setNewMenuState('target combos')
      setNewText("");
  }

  //change the blocker and update blocker movelist
  function handleBlockerChange(e) {
    lookUpCharacter(setBlockChar, e.target.value)
  }

  //handle unique move changes and update appropriately
  function handleUniqueChange(e) {
    const listItem = e.target.value
    setNewText("")
    if (attackingState + menuState === 'uniquecommand normals') {
      setNewCommand(listItem)
      setNewImage(attackChar.commands[listItem].image)
    } else if (attackingState + menuState === 'uniquetarget combos') {
      setNewTarget(listItem)
      setNewImage(attackChar.targets[listItem].image)
    }
  }

  //grab appropriate text information
  function textLoad(prop) {
    if (attackingState === 'normals') {
      return attackChar[newMove][prop];
    } else if (attackingState + menuState === 'uniquetarget combos') {
      const targetCombos = Object.keys(attackChar.targets)
      if (targetCombos.includes(target)) {
        return attackChar.targets[target][prop]
      } else {
        return attackChar.targets[targetCombos[0]][prop]
      }
      
    } else if (attackingState + menuState === 'uniquecommand normals') {
      //IF THERE IS AN ISSUE WITH COMMAND NORMALS NOT MATCHING UP COME BACK HERE
      return attackChar.commands[command][prop]
    }
  }

  return (
    <>
      <div className="character-container">
      <div className="attack float">
      <h2>Attacker: {attackChar.name}</h2>
      <div className="attack-box">
        <img src={`${newImage}`} alt="" className="attacking-character"/>
      </div>
      <h3>
      {`${textLoad('name')} is ${textLoad('onblock')} on block`}
      </h3>
      <label htmlFor="attackselect">Attacking Character: </label>
      <select
        name="attackselect"
        id="attackselect"
        onChange={(handleAttackerChange)}
      >
        {characterFill()}
      </select>
      <br />
      <input type="radio" id="standing" name="direction" value="s" defaultChecked onClick={directionSelect} onChange={() => (activeState("s", 1), switchState('s'))} />
      <label htmlFor="standing">Standing</label>
      <input type="radio" id="crouching" name="direction" value="cr" onClick={directionSelect} onChange={() => (activeState("cr", 1), switchState('cr'))}/>
      <label htmlFor="crouching">Crouching</label>
      <input type="radio" id="unique" name="direction" value='command' onChange={() => (setNewAttackingState('unique'), imageReset())}/>
      <label htmlFor="unique">Unique</label>
      <br />
      <select name="move-options" id="move-options" hidden={(attackingState !== 'unique')} onChange={handleMenuChange}>
        {attackMenu(attackChar)}
      </select>
      <select name="commands" id="commands" hidden={(attackingState + menuState !== 'uniquecommand normals')} onChange={handleUniqueChange}>
        {attacksFill(attackChar.commands)}
      </select>
      <select name="targets" id="targets" hidden={(attackingState + menuState !== 'uniquetarget combos')} onChange={handleUniqueChange}>
        {attacksFill(attackChar.targets)}
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
