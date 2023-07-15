import { useState } from "react";
import { characterList } from "./CharacterList";

export default function App() {
  const [newMove, setNewMove] = useState("sLP");
  const [attackChar, setAttackChar] = useState(characterList[16]);
  const [blockChar, setBlockChar] = useState(characterList[16]);
  const [newText, setNewText] = useState("");
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
        if (current.name === "Ryu") {
          return <option key={current.name} selected>{current.name}</option>
        }
        return <option key={current.name}>{current.name}</option>;
      }
    });
  }

  //grab the keys of a child object for comparison and state adjustments
  function keyCheck(list, item) {
    const moves = Object.keys(list)
    if (moves.includes(item)) {
      setNewImage(list[item].image)
    } else {
      setNewImage(list[moves[0]].image)
      if (list === command) {
        setNewCommand(list[moves[0]])
      } else if (list === target) {
        setNewTarget(list[moves[0]])
      }
    }

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
      firstTargetCombo = firstMove(currentAttacker.targets)
    }

    if (currentAttacker.commands) {
      firstCommandNormal = firstMove(currentAttacker.commands)
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
      keyCheck(attackChar.commands, command)
    } else if (menuText === 'target combos') {
      keyCheck(attackChar.targets, target)
    }
    
  }

  //Check if there needs to be target combos or command normals depending on the character
  function handleReset() {
    setNewAttackingState('unique')

    if (attackChar.targets && attackChar.commands) {
      if (menuState === 'target combos') {
        keyCheck(attackChar.targets, target)
      } else if (menuState === 'command normals') {
        keyCheck(attackChar.commands, command)
      }
    } else if (attackChar.targets) {
      setNewMenuState('target combos')
      keyCheck(attackChar.targets, target)
    } else if (attackChar.commands) {
      setNewMenuState('command normals')
      keyCheck(attackChar.commands, command)
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
