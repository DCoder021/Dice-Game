import styled from "styled-components";
import { TotalScore } from "./TotalScore";
import { NumberSelector } from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {

  const [score, setScore]= useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);}
  
  
    const roleDice = ()=> {
      if(!selectNum) {
        setError("You have not selected any number")
        return;
      }
     
      const randomNum = getRandomIntInclusive(1,6);
      setCurrentDice(randomNum);

      if(selectNum==randomNum){
        setScore(prev => prev + randomNum);
      }
      else{
        setScore(prev => prev - 1);
      }

      setSelectNum(undefined);
    }

    const resetScore = () => {
      setScore(0);
    }

  return (
    <MainContainer >
    <div className="topSection">
    <TotalScore score={score}/>
    <NumberSelector setError={setError} error={error} selectNum={selectNum} setSelectNum={setSelectNum}/>
    </div>
    <RollDice currentDice={currentDice} roleDice={roleDice}/>
    <div className="btns">
      <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
      <Button onClick={()=>setShowRules(prev => !prev)}>{showRules? "Hide" : "Show"} Rules</Button>
    </div>

    {showRules && <Rules/>}

    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    padding-top: 25px;
    .topSection{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      align-items: center;
      margin-top: 30px ;
    }
`
const Button = styled.button`
padding: 10px, 18px, 10px, 18px;
color: white;

min-width: 220px;
height: 44px;
font-size:16px ;

border-radius: 5px;
background: #000000;
transition: 0.4s background ease-in;

&:hover {
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.3s background ease-out;
    cursor: pointer;
}
`


const OutlineButton = styled(Button)`
background-color: white;
border-color: 1px solid black;
color: black;
&:hover {
    background-color: black;
    border-color: 1px solid transparent;
    color: white;
}
`
