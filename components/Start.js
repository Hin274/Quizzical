import React from "react"

export default function Start(props) {
  
    return (       
        <section className="container">
            <h1>Quizzical</h1>
            <p>Can you answer all the questions correctly?</p>
            <button onClick={props.startQuiz}>Start quiz</button>
        </section>
    )
}