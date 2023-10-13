import React, { useState } from 'react'
export default function Textform() {

    const handleOnChange=(event)=>{
        //console.log("On change:");
        setText(event.target.value);
        
    };
    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3 border">
                <h1 className='text-dark text-center'>Responsive Paragraph Word Counter</h1>
                <div className="my-4">
                    <textarea
                        className="form-control"
                        rows="10"
                        value={text}
                        placeholder='Enter the text here:'
                        onChange={handleOnChange}
                        id="mybox"
                    ></textarea>
                </div>
              
            </div>
            <div className="container my-3">
                <h1>Text summary</h1>
                <p>Text Contains: {text.split(" ").length} words and {text.length} characters</p>
                
            </div>
        </>
    );
}