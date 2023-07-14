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

  const  chunli= {
    name: "Chun-Li",
    sLP: {
      name: "Standing Light Punch",
      startup: 4,
      onblock: -3,
      image: "/src/assets/chunli/sLP.png",
    },
    sMP: {
      name: "Standing Medium Punch",
      startup: 5,
      onblock: 1,
      image: "/src/assets/chunli/sMP.png",
    },
    sHP: {
      name: "Standing Heavy Punch",
      startup: 13,
      onblock: -4,
      image: "/src/assets/chunli/sHP.png",
    },
    sLK: {
      name: "Standing Light Kick",
      startup: 5,
      onblock: -2,
      image: "/src/assets/chunli/sLK.png",
    },
    sMK: {
      name: "Standing Medium Kick",
      startup: 7,
      onblock: -2,
      image: "/src/assets/chunli/sMK.png",
    },
    sHK: {
      name: "Standing Heavy Kick",
      startup: 14,
      onblock: 0,
      image: "/src/assets/chunli/sHK.png",
    },
    crLP: {
      name: "Crouching Light Punch",
      startup: 4,
      onblock: -2,
      image: "/src/assets/chunli/crLP.png",
    },
    crMP: {
      name: "Crouching Medium Punch",
      startup: 6,
      onblock: -2,
      image: "/src/assets/chunli/crMP.png",
    },
    crHP: {
      name: "Crouching Heavy Punch",
      startup: 11,
      onblock: -3,
      image: "/src/assets/chunli/crHP.png",
    },
    crLK: {
      name: "Crouching Light Kick",
      startup: 4,
      onblock: -2,
      image: "/src/assets/chunli/crLK.png",
    },
    crMK: {
      name: "Crouching Medium Kick",
      startup: 7,
      onblock: -6,
      image: "/src/assets/chunli/crMK.png",
    },
    crHK: {
      name: "Crouching Heavy Kick",
      startup: 9,
      onblock: -7,
      image: "/src/assets/chunli/crHK.png",
    },

    commands: {
	"bMP or fMP": {
		name: "Swift Thrust",
		startup: 7,
		onblock: -3,
		image: "src/assets/chunli/bMPorfMP.png",
	},
	"bHP": {
		name: "Hakkei",
		startup: 8,
		onblock: -1,
		image: "src/assets/chunli/bHP.png",
	},
	"dfHP": {
		name: "Water Lotus Fist",
		startup: 21,
		onblock: -2,
		image: "src/assets/chunli/dfHP.png",
	},
	"fHK": {
		name: "Yokusen Kick",
		startup: 16,
		onblock: -4,
		image: "src/assets/chunli/fHK.png",
	},
	"dfHK": {
		name: "Falling Crane",
		startup: 37,
		onblock: 5,
		image: "src/assets/chunli/dfHK.png",
	}
    },
	profile: "src/assets/chunli/profile.png"
  }

  const [newMove, setNewMove] = useState("sLP");
  const [attackChar, setAttackChar] = useState(ryu);
  const [blockChar, setBlockChar] = useState(ryu);
  const [newText, setNewText] = useState("");
  const characterList = [ryu, ken, chunli];
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
      const commandNormals = Object.keys(attackChar.commands)
      if (commandNormals.includes(command)) {
        attackerMove = attackChar.commands[command].onblock
      } else {
        attackerMove = attackChar.commands[commandNormals[0]].onblock
      }
      
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

  //find the first move in a child object in the character
  function firstMove(list) {
    const moves = Object.keys(list)
    return moves[0];
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
    let firstTargetCombo = ''
    let firstCommandNormal = ''
    if (currentAttacker.targets) {
      const targetCombos = Object.keys(currentAttacker.targets)
      firstTargetCombo = targetCombos[0]
    }

    if (currentAttacker.commands) {
      const commandNormals = Object.keys(currentAttacker.commands)
      firstCommandNormal = commandNormals[0]
    }

    if (attackChar.targets && attackChar.commands) {
      setNewCommand(attackChar.commands[firstCommandNormal])
      setNewTarget(attackChar.targets[firstTargetCombo])
    }

    if (attackingState === 'normals') {
      setNewImage(currentAttacker[newMove].image);
      if (currentAttacker.targets && currentAttacker.commands) {
        
      }
    } else if (attackingState === 'unique') {

      if (menuState === 'target combos' && currentAttacker.targets) {
        setNewTarget(currentAttacker.targets[firstTargetCombo])
        setNewImage(currentAttacker.targets[firstTargetCombo].image)
      } else if (menuState === 'target combos' && !currentAttacker.targets) {
        setNewMenuState('command normals')
        setNewCommand(currentAttacker.commands[firstCommandNormal])
        setNewImage(currentAttacker.commands[firstCommandNormal].image)
      } else if (menuState === 'command normals' && currentAttacker.commands) {
        setNewCommand(currentAttacker.commands[firstCommandNormal])
        setNewImage(currentAttacker.commands[firstCommandNormal].image)
      } else if (menuState === 'command normals' && !currentAttacker.commands) {
        setNewMenuState('target combos')
        setNewTarget(currentAttacker.targets[firstTargetCombo])
        setNewImage(currentAttacker.targets[firstTargetCombo].image)
      }
    }
      //find the appropriate character using their name
      lookUpCharacter(setAttackChar, e.target.value)
  }

  //update menu state to change the corresponding drop down
  function handleMenuChange(e) {
    const menuText = e.target.value.toLowerCase();
    setNewMenuState(menuText)
    setNewText("")
    if (menuText === 'command normals') {
      const commandNormals = Object.keys(attackChar.commands)
      if (!commandNormals.includes(command)) {
        setNewImage(attackChar.commands[commandNormals[0]].image)
      } else {
        setNewImage(attackChar.commands[command].image)
      }
    } else if (menuText === 'target combos') {
      //check here if target combo images are weird
      const targetCombos = Object.keys(attackChar.targets)
      if (!targetCombos.includes(target)) {
        setNewImage(attackChar.targets[targetCombos[0]].image)
      } else {
        setNewImage(attackChar.targets[target].image)
      }
    }
    
  }

  //Check if there needs to be target combos or command normals depending on the character
  function handleReset() {
    setNewAttackingState('unique')
    let commandNormals = []
    let targetCombos = []
    if (attackChar.commands) {
      commandNormals = Object.keys(attackChar.commands)
    }
    if (attackChar.targets) {
      targetCombos = Object.keys(attackChar.targets)
    }
    
    if (attackChar.targets && attackChar.commands) {
      if (menuState === 'target combos') {
        if (targetCombos.includes(target)) {
          setNewImage(attackChar.targets[target].image)
        } else {
          setNewImage(attackChar.targets[targetCombos[0]].image)
        }
      } else if (menuState === 'command normals') {
        if (commandNormals.includes(command)) {
          setNewImage(attackChar.commands[command].image)
        } else {
          setNewImage(attackChar.commands[commandNormals[0]].image)
        }
        
      }
    } else if (attackChar.targets) {
      setNewMenuState('target combos')
      const targetCombos = Object.keys(attackChar.targets)
      if (targetCombos.includes(target)) {
        setNewImage(attackChar.targets[target].image)
      } else {
        setNewTarget(attackChar.targets[targetCombos[0]])
        setNewImage(attackChar.targets[targetCombos[0]].image)
      }
    } else if (attackChar.commands) {
      setNewMenuState('command normals')
      const commandNormals = Object.keys(attackChar.commands)
      if (commandNormals.includes(command)) {
        setNewImage(attackChar.commands[command].image)
      } else {
        setNewCommand(attackChar.commands[commandNormals[0]])
        setNewImage(attackChar.commands[commandNormals[0]].image)
      }
    }
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
    } else if (attackingState + menuState === 'uniquetarget combos' && attackChar.targets) {
      const targetCombos = Object.keys(attackChar.targets)
      if (targetCombos.includes(target)) {
        return attackChar.targets[target][prop]
      } else {
        return attackChar.targets[targetCombos[0]][prop]
      }
      
    } else if (attackingState + menuState === 'uniquecommand normals' && attackChar.commands) {
      //IF THERE IS AN ISSUE WITH COMMAND NORMALS NOT MATCHING UP COME BACK HERE
      const commandNormals = Object.keys(attackChar.commands)
      if (commandNormals.includes(command)) {
        return attackChar.commands[command][prop]
      } else {
        return attackChar.commands[commandNormals[0]][prop]
      }
      
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
      <input type="radio" id="unique" name="direction" value='command' onChange={() => (handleReset())}/>
      <label htmlFor="unique">Unique</label>
      <br />
      <select name="move-options" id="move-options" hidden={(attackingState !== 'unique')} onChange={handleMenuChange}>
        <option value="target combos" hidden={(!attackChar.targets)} selected={(menuState === "target combos")}>Target Combos</option>
        <option value="command normals" hidden={(!attackChar.commands)} selected={(menuState === "command normals")}>Command Normals</option>
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
