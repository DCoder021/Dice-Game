import HomePage from "./Components/HomePage";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";




function App() {

  const [isStarted, setIsStarted] = useState(false)

  const toggleGame = () => {
    setIsStarted((prev) => !prev);
  }


  return (
    <>
      {isStarted ? <GamePlay/> : <HomePage toggle ={toggleGame} />}
      
      
    </>
  )
}

export default App
