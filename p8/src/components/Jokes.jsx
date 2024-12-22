import './joke.css'

export default function Jokes({setup, joke, isPun}){

    

    return(
    <>
        {(setup && isPun) && <h3>Pun: Setup: {setup}</h3>}
        <i><span>Punchline: {joke}</span></i>
    </>)
}