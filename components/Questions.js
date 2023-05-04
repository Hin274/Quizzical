import React from "react"
import { decode } from "html-entities"
import arrayShuffle from "array-shuffle"

export default function Questions(props) {

    const [allQuestions, setAllQuestions] = React.useState([])
    const [questionElements, setQuestionElements] = React.useState([])
    const [selectedAnswers, setSelectAnswers] = React.useState({});

    const pressButton = (key, selectedStringValue) => {

        // console.log("pressed button: " + selectedStringValue)

        selectedAnswers[key] = selectedStringValue;

        setSelectAnswers(selectedAnswers);
    }

    React.useEffect(() => {
        // console.log("calling use effect")
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then((data) => {
                const results = data.results
                setAllQuestions(results);

                const defaultAnswers = {};

                // console.log("calling map method")
                const questions = results.map(item => {
                    const shuffled = arrayShuffle([(item.correct_answer), (item.incorrect_answers[0]), (item.incorrect_answers[1]), (item.incorrect_answers[2])])

                    defaultAnswers[item.question] = "";

                    return (
                        <div key={item.question}>
                            <h2>{decode(item.question)}</h2>
                            <Answers shuffled={shuffled} question={item.question} pressButton={pressButton} />
                        </div>
                    )
                })
                    ;
                // console.log(questions)
                setQuestionElements(questions)
                setSelectAnswers(defaultAnswers);
            })
    }, [])

    const [score, setScore] = React.useState(0)
    const [finish, setFinish] = React.useState(false)

    function checkAnswers() {
        setFinish(true)


        // console.log('my data:', allQuestions)
        // console.log('my selected answer:', selectedAnswers);

        let newScore = 0;

        // TODO - some code that checks my selected answers if they are correct
        for (let key in selectedAnswers) { // iterating through an object with keys
            const anSelectedAnswer = selectedAnswers[key];
            // console.log('Key is: ' + key)
            // console.log('Value is: ' + anSelectedAnswer);
            for (let i = 0; i < allQuestions.length; i++) {
                if (key == allQuestions[i].question) {
                    console.log('Key is: ' + key)
                    console.log(allQuestions[i].question)
                    if (anSelectedAnswer == allQuestions[i].correct_answer) {
                        console.log(anSelectedAnswer)
                        console.log(anSelectedAnswer == allQuestions[i].correct_answer)
                        setScore(score + 1)

                    }
                }
            }
        }
        console.log(score)
        setScore(score)


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

    const { shuffled, question } = props;

    const [selected, setSelected] = React.useState(-1);

    function handleClick(selectedIndex) {
        setSelected(selectedIndex)
    }

    let buttonElements = [];
    for (let i = 0; i < 4; i++) {
        if (shuffled[i]) {
            buttonElements.push(<button
                key={i + '_' + selected}
                onClick={() => { handleClick(i); props.pressButton(question, shuffled[i]) }}
                className={"quizButtons" + (selected === i ? " active" : "")} >
                {decode(shuffled[i])}
            </button>)
        }
    }

    return (<React.Fragment>
        {buttonElements}
    </React.Fragment>
    )


}
