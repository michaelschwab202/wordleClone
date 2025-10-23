# Wordle Clone
This is source code for a React+Vite webpage that imitates the popular [Wordle](https://www.nytimes.com/games/wordle/index.html) game.
It was written as an exercise in creating React pages.

# Credits
This project uses Luke William's list of [3103 common 5-letter words](https://gist.github.com/shmookey/b28e342e1b1756c4700f42f17102c2ff). His GitHub page is [here](https://github.com/shmookey).

# How It Works
When the page loads, a random 5-letter word is chosen (from src/data/wordsFiveLetters.txt) which the user has to guess by entering a 5-letter word. Upon entering a word, the user will be told which letters from that word are correct and in the correct position in the word, which letters are correct but in the incorrect position, and which letters are not correct at all. Correct letter, correct position are highlighted in green, Correct letter, wrong position are highlighted in orange, and wrong letters aren't highlighted at all. If the user does not guess the word in 6 guesses, they lose. If they can guess the correct word in 6 guesses or less, they win.

# File Structure
Folder layout follows standard React + Vite conventions
(public/, src/main.jsx, vite.config.js, etc.), so only the src folder (which is unique to this project) is highlighted below.

```text
src/  
├─ App.css  
├─ App.jsx  
├─ index.css  
├─ main.jsx                 #renders root component  
├─ assets/  
│  └─ react.svg  
├─ components/
│  ├─ Components.css        #contains style for most of the components
│  ├─ Header.css            #style for the header
│  ├─ Header.jsx           
│  ├─ WordleBlock.jsx
│  ├─ WordleBoard.jsx       #Contains WordleTextBoxes and handles game logic
│  └─ WordleTextBox.jsx     #Gets and contains input from user
└─ data/
   └─ wordsFiveLetters.txt  #The list of words chosen for the game
```
