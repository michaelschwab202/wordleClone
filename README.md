# Wordle Clone
This is source code for a React+Vite webpage that imitates the popular [Wordle](https://www.nytimes.com/games/wordle/index.html) game.
It was written as an exercise.

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
