export function BlockingCharacter( {newText, menuState, command, target, setNewText, newMove, attackingState, attackChar, blockChar, setBlockChar, lookUpCharacter, characterFill} ) {

    //change the blocker and update blocker movelist
    function handleBlockerChange(e) {
    lookUpCharacter(setBlockChar, e.target.value)
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

    return (
        <>
            <div className="block float">
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
        </>
    )
}