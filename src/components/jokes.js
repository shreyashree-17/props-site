
function Joke({setup, punchline}){
   return( 
        <li className="joke">
        <h3>{setup}</h3>
        <p>{punchline}</p>
        </li>
    )
}

export default Joke