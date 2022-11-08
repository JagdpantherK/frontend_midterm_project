import './App.css';
import logo from './assets/logo.png'
import Textarea from "./components/Textarea";
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