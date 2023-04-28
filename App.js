import React from "react"
import Start from "./components/Start"
import Questions from "./components/Questions"


export default function App() {
    const [isStart, setIsStart] = React.useState(true)
    function startQuiz() {
        setIsStart(prevStart => !prevStart)
    }

    return (
        <main>
          {isStart ? <img src="../images/blob-top-right.png" className="positionTopRight" /> :  <img src="../images/questions-blob-top-right.png" className="positionTopRight" />}  
            {isStart ? <Start startQuiz={startQuiz} /> : <Questions />}
            {isStart ? <img src="../images/blob-bottom-left.png" className="positionBottomLeft" /> :  <img src="../images/questions-blob-bottom-left.png" className="positionBottomLeft" />}  
        </main>
    )
}