import React, {Component} from "react";

function show_input(event) {
    console.log(event.target.value);
    document.body.style.background = event.target.value;

}

export class Textarea extends Component {
    render() {
        return (
            <textarea className="textarea" name="textarea" id="textarea" cols="25" rows="5" onInput={show_input}
                      placeholder={"Enter something..."}/>
        )
    }
}

export default Textarea;