import React from "react"
import { decode } from "html-entities"
import arrayShuffle from "array-shuffle"

export default function Questions(props) {



    const [allQuestions, setAllQuestions] = React.useState([])

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setAllQuestions(data.results))
    }, [])

    const questions = allQuestions.map(item => {


        const shuffled = arrayShuffle([(item.correct_answer), (item.incorrect_answers[0]), (item.incorrect_answers[1]), (item.incorrect_answers[2])])

        return (
            <div key={item.question}>
                <h2>{decode(item.question)}</h2>
                <Answers shuffled={shuffled} />
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