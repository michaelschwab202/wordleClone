import {useEffect, useState, useRef} from 'react'
import WordleBlock from './WordleBlock';
import './Components.css';

export default function WordleTextBox({correctWord, onGuess, validate})
{
    const [word, setWord] = useState("");
    const [active, setActive] = useState(true);
    const [bulls, setBulls] = useState(Array(5).fill(false));
    const [cows, setCows] = useState(Array(5).fill(false));

    const activeRef = useRef(active);
    const wordRef = useRef(word);
    useEffect( () => 
    {
        activeRef.current = active;
        wordRef.current = word;
    },[active,word]);
    useEffect(() => {
        function handleKeyDown(e)
        {
            if(!activeRef.current) return;
            if(e.key === 'Backspace' && wordRef.current.length > 0)
            {
                setWord(prev => prev.slice(0, prev.length-1))
            }
            else if(/^[a-zA-Z]$/.test(e.key) && wordRef.current.length < 5)
            {
                setWord(prev => prev + e.key.toUpperCase())
            }
            else if(e.key === 'Enter' && wordRef.current.length == 5)
            {
                if(!validate(wordRef.current)) return;
                setActive(false);
                onGuess(evaluateGuess());
            }
        }
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }
    , [word]);
    function render()
    {
        const boxes = [];
        for(let i = 0; i < 5; i++)
        {
            if(i < word.length)
            {
                let color;
                if(bulls[i]) color = "green";
                else if(cows[i]) color = "orange";
                else color = "white";
                boxes.push(< WordleBlock key={i} value={word[i]} color={color} />);
            }
            else
            {
                boxes.push(< WordleBlock key={i} value={" "} color="white"/>)
            }
        }
        return boxes;
    }
    function evaluateGuess()
    {
        const count = {};
        let correctLetters = 0;
        for(let letter of correctWord)
        {
            if(letter in count)
            {
                count[letter]++;
            }
            else
            {
                count[letter] = 1;
            }
        }

        //checking for letters that are in correctWord in the correct position
        let bulls = Array(5).fill(false);
        for(let i = 0; i < correctWord.length; i++)
        {
            if(wordRef.current[i] === correctWord[i] && count[correctWord[i]] > 0)
            {
                bulls[i] = true;
                count[correctWord[i]]--;
                correctLetters++;
            }
        }
        //checking for cows
        let cows = Array(5).fill(false);
        for(let i = 0; i < wordRef.current.length; i++)
        {
            if(count[wordRef.current[i]] > 0  && !bulls[i])
            {
                cows[i] = true;
                count[wordRef.current[i]]--;
            }
        }
        setBulls(bulls);
        setCows(cows);
        return correctLetters == correctWord.length;
    }
    return(
        <div className="wordleTextBox">
            {render()}
        </div>
    );
}