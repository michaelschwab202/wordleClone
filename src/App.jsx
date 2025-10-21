import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WordleBlock from './components/WordleBlock'
import './App.css'
import WordleTextBox from './components/WordleTextBox'
import WordleBoard from './components/WordleBoard'
import wordsRaw from './data/wordsFiveLetters.txt?raw'

function App() 
{
  let words = wordsRaw.split(/\s+/).filter(word => word.length > 0);
  let word = words[Math.floor(Math.random()*words.length)];
  console.log(word);
  return (
    <>
      <WordleBoard word={word} wordList={words}/>
    </>
  );
}

export default App
