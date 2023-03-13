import React from "react"
import {decode} from "html-entities"

export default function Questions(props) {



    const [allQuestions, setAllQuestions] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))
    }, [])

    

    const questions = allQuestions.map(item => {
        return (
            <div key={item.question}>
             <h2>{decode(item.question)}</h2>
                <button className="quizButtons" >{decode(item.correct_answer)}</button>
                <button className="quizButtons" >{decode(item.incorrect_answers[0])}</button>
                <button className="quizButtons" >{decode(item.incorrect_answers[1])}</button>
                <button className="quizButtons" >{decode(item.incorrect_answers[2])}</button>
            </div>
        )
    })

    return (
        <div>
            <img src="../images/questions-blob-top-right.png" className="positionTopRight" />
        <section>
            <div className="container">
                {questions}
            </div>
        </section>
        <img src="../images/questions-blob-bottom-left.png" className="positionBottomLeft" />
        </div>
    )
}