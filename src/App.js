import './App.css';
import logo from './assets/logo.png'
import Textarea from "./components/Textarea";
import React from "react";
function ceasar(str){
    let lowerCase = str.toLowerCase().replace(/[0-9]/g, ' ');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';

    for (let i = 0; i < lowerCase.length; i++) {
        let currentLetter = lowerCase[i];
        if (currentLetter === ' '){
            newStr += currentLetter;
            continue;
        }
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + 4;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = newIndex + 26;
        if (str[i] === str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
    }
    return newStr;
}
function App() {
    return (
        <div className="App">
            <body className="App-body">
            <div id="text" >Click it to encrypt your text</div>
            <div>
                <Textarea/>
            </div>
            <div>
                <button onClick={buttonClicked}>Encrypt</button>
            </div>
                <div>
                    <img className="App-logo" src={logo} alt="logo"/>
                </div>
            </body>
        </div>
    );
}

export default App;

function buttonClicked(){
    let text = document.getElementById("textarea");
    let result = document.getElementById("text")
    console.log("Button clicked");
    console.log(text.value);
    result.innerHTML = ceasar(text.value);
}
