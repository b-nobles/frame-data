export function AttackingCharacter( {activeButton, setActiveButton, attackButtons, pressedButton, buttonPrefix, setButtonPrefix, setNewText, newMove, setNewMove, attackChar, setAttackChar, command, setNewCommand, target, setNewTarget, menuState, setNewMenuState, attackingState, setNewAttackingState, newImage, setNewImage, lookUpCharacter, characterFill, characterList} ) {
    //map moves into a dropdown
    function attacksFill(items) {
        if (items) {
        const list = Object.keys(items);
        return list.map((attack) => {
        return <option key={items[attack].name}>{attack}</option>
        })
        }     
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
    //create the attack button functions
    function handleButton(e) {
        setActiveButton(e.target.innerText)
        pressedButton = e.target.innerText
        setNewMove(buttonPrefix + pressedButton)
        setNewImage(attackChar[buttonPrefix + pressedButton].image)
        setNewText("")
    }
    //handle updating text for the attacking character
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
      const commandNormals = Object.keys(attackChar.commands)
      if (commandNormals.includes(command)) {
        return attackChar.commands[command][prop]
      } else {
        return attackChar.commands[commandNormals[0]][prop]
      }
      
    }
  }
    //function for switching between radio options
    function switchState(state) {
        setNewMove(state + activeButton)
        setNewAttackingState('normals')
        setNewText("")
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
    //find the first move in a child object in the character
    function firstMove(list) {
        const moves = Object.keys(list)
        return moves[0];
    }
    //handle the radio option for direction for an input
    function directionSelect(e) {
        setButtonPrefix(e.target.value);
        setNewImage(attackChar[e.target.value + activeButton].image)
    }
    //create the buttons and give them the correct properties
    function createButtons(buttons) {
        return buttons.map((button) => {
        return <button key={button} className={activeState(button, 2)} onClick={handleButton}>{button}</button>
        })
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
    //check the menuState to determine the defaultValue for dropdown
    function checkMenuState() {
        if (menuState === 'target combos') {
            return 'target combos'
        } else {
            return 'command normals'
        }
    }
    return (
        <>
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
      <select name="move-options" id="move-options" hidden={(attackingState !== 'unique')} onChange={handleMenuChange} value={checkMenuState}>
        <option value="target combos" hidden={(!attackChar.targets)} >Target Combos</option>
        <option value="command normals" hidden={(!attackChar.commands)} >Command Normals</option>
      </select>
      <select name="commands" id="commands" hidden={(attackingState + menuState !== 'uniquecommand normals')} onChange={handleUniqueChange}>
        {attacksFill(attackChar.commands)}
      </select>
      <select name="targets" id="targets" hidden={(attackingState + menuState !== 'uniquetarget combos')} onChange={handleUniqueChange}>
        {attacksFill(attackChar.targets)}
      </select>
      <div className="button-layout" hidden={(attackingState !== 'normals')}>{createButtons(attackButtons)}</div>
    </>
    )
}