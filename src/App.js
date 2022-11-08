import './App.css';
import logo from './assets/logo.png'
import Textarea from "./components/Textarea";
const btn = document.querySelector("#button")
btn.addEventListener("click", (where, element) =>{
    console.log("Button clicked");
    let text = document.querySelector("#textarea");
    let result = document.querySelector("#text")
    result.innerHTML = ceasar(text);
});
function ceasar(str){
    let solved = "";
    for (let i = 0; i < str.length; i++) {
        let asciiNum = str[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 90){
            solved += String.fromCharCode(asciiNum + 13)
        }
        else if(asciiNum >= 78 && asciiNum <=90){
            solved += String.fromCharCode(asciiNum - 13)
        }
        else {
            solved = str[i];
        }
    }
    return solved;
}
function App() {
    return (
        <div className="App">
            <body className="App-body">
            <div>
                <Textarea/>
            </div>
                <div>
                    <img className="App-logo" src={logo} alt="logo"/>
                </div>
            </body>
        </div>
    );
}

export default App;