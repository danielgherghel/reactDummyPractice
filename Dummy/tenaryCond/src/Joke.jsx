import { useState } from "react"

export default function Joke(props){
    const [isShown, setIsShown] = useState(false)

    function toggleShown(){
        setIsShown(prev => !prev)
    }

    return(
        <div>
            {props.setup ? <h3>{props.setup}</h3> : null}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>{isShown ? "Hide punchline" : "Show punchline"}</button>
            <hr></hr>
        </div>
    )
}