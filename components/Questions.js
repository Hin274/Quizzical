import React from "react"
import { decode } from "html-entities"
import arrayShuffle from "array-shuffle"

export default function Questions(props) {



    const [allQuestions, setAllQuestions] = React.useState([])
    const [questionElements, setQuestionElements] = React.useState([])

    React.useEffect(() => {
        console.log("calling use effect")
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then((data) => {
                const results = data.results
                setAllQuestions(results)
                console.log("calling map method")
                const questions = results.map(item => {
                    const shuffled = arrayShuffle([(item.correct_answer), (item.incorrect_answers[0]), (item.incorrect_answers[1]), (item.incorrect_answers[2])])

                    return (
                        <div key={item.question}>
                            <h2>{decode(item.question)}</h2>
                            <Answers shuffled={shuffled} />
                        </div>
                    )
                }

                )
                    ;
                console.log(questions)
                setQuestionElements(questions)
            })
    }, [])







    const [score, setScore] = React.useState(0)
    const [finish, setFinish] = React.useState(false)

    function checkAnswers(selected) {
        setFinish(true)
        if (selected === item.correct_answer) {
            setScore(prevScore + 1)
        } else {
            score
        }

    }

    return (

        <section className="container">

            {questionElements}
            {finish && <p>You scored {score}/5 correct answers</p>}
            <button onClick={() => checkAnswers()}>Check answers</button>
        </section>

    )
}

function Answers(props) {
    const shuffled = props.shuffled;
    const [selected, setSelected] = React.useState(-1);

    function handleClick(selectedValue) {
        console.log("selected " + selectedValue)
        setSelected(selectedValue)
    }
    return (<React.Fragment>
        {(shuffled[0]) && <button onClick={() => { handleClick(0) }} className={"quizButtons" + (selected === 0 ? " active" : "")} >{decode(shuffled[0])}</button>}
        {(shuffled[1]) && <button onClick={() => { handleClick(1) }} className={"quizButtons" + (selected === 1 ? " active" : "")} >{decode(shuffled[1])}</button>}
        {(shuffled[2]) && <button onClick={() => { handleClick(2) }} className={"quizButtons" + (selected === 2 ? " active" : "")} >{decode(shuffled[2])}</button>}
        {(shuffled[3]) && <button onClick={() => { handleClick(3) }} className={"quizButtons" + (selected === 3 ? " active" : "")} >{decode(shuffled[3])}</button>}
    </React.Fragment>
    )


}
