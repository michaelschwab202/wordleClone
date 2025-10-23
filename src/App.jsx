import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import WordleBlock from './components/WordleBlock'
import './App.css'
import WordleTextBox from './components/WordleTextBox'
import WordleBoard from './components/WordleBoard'
import wordsRaw from './data/wordsFiveLetters.txt?raw'
import Header from './components/Header'

function App() 
{
  let words = wordsRaw.split(/\s+/).filter(word => word.length > 0);
  let word = words[Math.floor(Math.random()*words.length)];
  console.log(word);
  return (
    <>
      <div className="mainContainer">
        <Header />
        
        <WordleBoard word={word} wordList={words}/>
      </div>
    </>
  );
}

export default App
