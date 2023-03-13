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
            {isStart ? <Start startQuiz={startQuiz}/> : <Questions />}
        </main>
    )
}