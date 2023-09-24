import React,{useState} from "react";


export default function Textforms(props) {
    const handleUpCase=()=>{
        let upCase=text.toUpperCase();
        setText(upCase);
        props.showAlert(" Changed into UpperCase","success");
    }
    const handleLoCase=()=>{
        let lowCase=text.toLowerCase();
        setText(lowCase);
        props.showAlert(" Changed into LowerCase ","success");
    }
    const handleSentenceCase=()=>{
      let lower=text.toLowerCase();
      let sentCase= text.charAt(0).toUpperCase()+lower.slice(1);
      setText(sentCase);
      props.showAlert(" Changed into SentenceCase","success");
    }
    const handleclear=()=>{
      // console.log("IT clear the text when clicked");
      let clear="";
      setText(clear);
      props.showAlert(" Changed into clear","success");
    }
    const handleUndo=()=>{
        let Undo=text.slice(0,-1);
        setText(Undo);
        props.showAlert(" Undo Done ","success");
    }
    const handleOnChange=(event)=>{
       // console.log("on click");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!","success");
    }
    const[text,setText]=useState("");
    //text="new text"; it is the worng way to change its value
    //setText("new text"); this is the wirte way to do so
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="mb-3"  >
        <h1>{props.heading}</h1>
        <textarea className="form-control"value={text}onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#000d3b':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder="Enter Your text here"></textarea>
      </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleUpCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleLoCase}>Convert to Lowrecase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleclear}>Clear</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleSentenceCase}>Convert to sentencecase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleCopy}>Copy to clipboard</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-1" onClick={handleUndo}>Undo</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summery</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text in the textbox to preview"}</p>
    </div>
    </>
  );
}
