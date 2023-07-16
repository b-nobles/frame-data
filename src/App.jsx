import { useState } from "react";
import { characterList } from "./CharacterList";
import { AttackingCharacter } from "../components/AttackingCharacter"
import { BlockingCharacter } from "../components/BlockingCharacter";

export default function App() {
  const [activeButton, setActiveButton] = useState("LP")
  const attackButtons = ["LP", "MP", "HP", "LK", "MK", "HK"]
  let pressedButton = "LP"
  const [buttonPrefix, setButtonPrefix] = useState("s")
  const [newMove, setNewMove] = useState("sLP");
  const [attackChar, setAttackChar] = useState(characterList[16]);
  const [blockChar, setBlockChar] = useState(characterList[16]);
  const [newText, setNewText] = useState("");
  const [command, setNewCommand] = useState("fMP")
  const [target, setNewTarget] = useState("sHP>HK")
  const [attackingState, setNewAttackingState] = useState("normals")
  const [menuState, setNewMenuState] = useState("target combos")
  const [newImage, setNewImage] = useState('./src/assets/ryu/sLP.png')

  //character lookup function
  function lookUpCharacter(func, val) {
    setNewText("");
    for (const select in characterList) {
    if (characterList[select].name === val)
        return func(characterList[select]);
    }
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

  return (
    <>
      <div className="character-container">
      <div className="attack float">
      <AttackingCharacter activeButton={activeButton} setActiveButton={setActiveButton} attackButtons={attackButtons} pressedButton={pressedButton} buttonPrefix={buttonPrefix} setButtonPrefix={setButtonPrefix} setNewText={setNewText} newMove={newMove} setNewMove={setNewMove} attackChar={attackChar} setAttackChar={setAttackChar} command={command} setNewCommand={setNewCommand} target={target} setNewTarget={setNewTarget} menuState={menuState} setNewMenuState={setNewMenuState} attackingState={attackingState} setNewAttackingState={setNewAttackingState} newImage={newImage} setNewImage={setNewImage} lookUpCharacter={lookUpCharacter} characterFill={characterFill} characterList={characterList}/>
      </div>
      <BlockingCharacter newText={newText} setNewText={setNewText} newMove={newMove} menuState={menuState} command={command} target={target} attackingState={attackingState} attackChar={attackChar} blockChar={blockChar} setBlockChar={setBlockChar} lookUpCharacter={lookUpCharacter} characterFill={characterFill} />
      </div>
    </>
  );
}
