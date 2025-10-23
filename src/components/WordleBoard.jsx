import {useState, useEffect, useRef} from 'react'
import WordleTextBox from './WordleTextBox';
export default function WordleBoard({word, wordList})
{
    const dictionary = {};
    for(let i = 0; i < wordList.length; i++)
    {
        dictionary[wordList[i].toUpperCase()] = true;
    }
    const maxGuesses = 6;
    
    const correctWord = word.toUpperCase();
    const [numberGuesses, setNumberGuesses] = useState(0);
    const [boxes, setBoxes] = useState(Array(1).fill(<WordleTextBox key={0} correctWord={correctWord} onGuess={handleGuess} validate={isValidWord}/>));

    const guessesRef = useRef(numberGuesses);
    const [gameStatus, setGameStatus] = useState(0);
    const [message, setMessage] = useState("Start typing to guess a word. Hit enter to confirm your guess.");
    useEffect( () => 
    {
        guessesRef.current = numberGuesses
    }, [numberGuesses]);

    function isValidWord(word)
    {
        let ans = word in dictionary;
        if(!ans) setMessage("Word not in dictionary.");
        return ans;
    }

    function handleGuess(isWin)
    {
        setMessage("");
        const newGuessCount = guessesRef.current +1;
        setNumberGuesses(prev => prev+1);
        if(isWin)
        {
            console.log("WIN");
            setMessage("");
            return;
        }
        if(newGuessCount >= maxGuesses)
        {
            console.log("LOSE");
            setMessage(`You lose. The correct word was ${word}.`);
            return;
        }
        
        setBoxes(prev => [...prev, <WordleTextBox key={prev.length} correctWord={correctWord} onGuess={handleGuess} validate={isValidWord}/>]);
    }
    return(
        <>
        <p className="message">{message}</p>
        <div className='wordleBoard'>
            
            {boxes}
        </div>
        </>
    );
}