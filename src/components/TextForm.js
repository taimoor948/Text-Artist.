import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Enter text here");
    const [isBold, setIsBold] = useState(false);

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!" , "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = " "
        setText(newText)
    }

    const handleloClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!" , "success");

    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text); // Make sure 'text' is defined
        window.speechSynthesis.speak(msg);
        const toggle = document.getElementById('toggle'); // Fixed the variable name to 'toggle'

        if (toggle.textContent === "Speak") {
            toggle.innerHTML = "Stop";
        } else {
            toggle.innerHTML = "Speak";
            window.speechSynthesis.cancel();
            props.showAlert("Speak mode is onn!" , "success");

        }
    }
    const handleBoldClick = () => {
        setIsBold(!isBold); // Set text to bold when clearing
        props.showAlert("Converted to bold case!" , "success");
    };

    const textStyle = {
        fontWeight: isBold ? 'bold' : 'normal',
    }
    const handleExtraSpaces = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces will be removed!" , "success");
    }


    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-1" onClick={handleloClick}>Convert to lowercase</button>
                <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2" id="toggle">Speak</button>
                <button className="btn btn-warning " onClick={handleBoldClick}>Make Bold</button>
                <button className="btn btn-dark mx-2 " onClick={handleExtraSpaces}>Remove Spaces</button>
                <div><p style={textStyle}>{text}</p></div>
                    








            </div >
            <div className="container my-2" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>Your text summary:</h1>
                <p>{text.split(" ").length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview:</h2>
                <p>{text.length>0?text:"Enter something to preview"}</p>
            </div>
        </>
    )
}

