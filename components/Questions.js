import React from "react"

export default function Questions(props) {

    const [allQuestions, setAllQuestions] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))
    }, [])

    

    const questions = allQuestions.map(item => {
        return (
            <div>
             <h2 key={item.question}>{item.question}</h2>
                <button className="quizButtons" >{item.correct_answer}</button>
                <button className="quizButtons" >{item.incorrect_answers[0]}</button>
                <button className="quizButtons" >{item.incorrect_answers[1]}</button>
                <button className="quizButtons" >{item.incorrect_answers[2]}</button>
            </div>
        )
    })

    return (
        <section>
            <div className="container">
                {questions}
            </div>
        </section>
    )
}