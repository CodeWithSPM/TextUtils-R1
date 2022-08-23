
import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case", "success")
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case", "success")
    }
    const handleClrClick = () => {
        
        let newText = "";
        setText(newText)
        props.showAlert("Cleared the text", "success")
    }
    const handleOnChange = (event) => {
        // console.log("onChange handled");
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to clipboard', 'success');
    }

    const [text, setText] = useState('');
    // text = "new text";  // wrong way to change the state
    // setText("new text");  // correct way to change the state
    return (
        <>
            <div className="container" style ={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" style ={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'  }} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upper case</button>
                <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lower case</button>
                <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear text</button>
                <button disabled={text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            </div>
            <div className="container my-3" style ={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
                <p> {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text: "Nothing to preview!"}</p>
            </div>
        </>
    )
}
