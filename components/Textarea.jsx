import React, { useState } from "react";

function Textarea(props) {
    const toUpper = () => {
        setText(text.toUpperCase());
    };

    const toLower = () => {
        setText(text.toLowerCase());
    };

    const handleOnChange = () => {
        setText(event.target.value);
    };

    const copy = () => {
        let text = document.getElementById("textArea")
        navigator.clipboard.writeText(text.value)
        props.displayAlert("Copied to Clipboard!")
    };

    const remexspaces = () => {
        setText(text.split(/[ ]+/).join(" "))
    };

    const clear = () => {
        setText("");
        props.displayAlert("Text area cleared!")
    };

    const [text, setText] = useState("")


    return (
        <>
            <div className={`mb-3 p-3 container`}>
                <h1>Enter your text below : </h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="5"></textarea>

                <div className="buttons">
                    <button className="btn btn-primary me-2 my-2" onClick={toUpper} type="submit"> Change to UpperCase </button>
                    <button className="btn btn-primary me-2 my-2" onClick={toLower} type="submit">Change to LowerCase </button>
                    <button className="btn btn-primary me-2 my-2" onClick={copy} type="copy">Copy text </button>
                    <button className="btn btn-primary me-2 my-2" onClick={remexspaces} type="copy">Remove Extra Spaces </button>
                    <button className="btn btn-danger me-2 my-2" onClick={clear} type="reset"> Clear </button>
                </div>

                <div className="summary">
                    <h3 className="my-2">Text Summary</h3>
                    <p style={{
                        backgroundColor: "lightgrey",
                        padding: "10px 10px",
                        borderRadius: "7px",
                        color: "black",
                    }} >
                        {text.length} characters, {text.split(" ").length} words
                    </p>
                    <h3 className="my-2">Preview</h3>
                    <p style={{
                        backgroundColor: "lightgrey",
                        padding: "10px 10px",
                        borderRadius: "7px",
                        color: "black",
                    }}
                    > {text} </p>
                </div>
            </div>
        </>
    );
}

export default Textarea;
