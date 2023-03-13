import React from "react"

export default function Start(props) {
  
    return (
        <div>
        <img src="../images/blob-top-right.png" className="positionTopRight" />
        
        <section>
        <div className="container">
            <h1>Quizzical</h1>
            <p>Can you answer all the questions correctly?</p>
            <button onClick={props.startQuiz}>Start quiz</button>
        </div>
        </section>
        <img src="../images/blob-bottom-left.png" className="positionBottomLeft" />
        </div>
    )
}