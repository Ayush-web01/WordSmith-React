import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpclick =()=>{
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!","success")
  }
  
  const handleLowclick =()=>{
    let newText= text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!","success")
  }
  const handleClearclick =()=>{
    let newText= '';
    setText(newText)
    props.showAlert("Text Cleared!","success")
  }

  const handleOnchange =(event)=>{
    setText(event.target.value)
  }

  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to clipboard!","success");
  }

  const handleExtraSpaces=()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success") 
  }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color:props.Mode==='dark'?'white':'black'}}>
        <h1 className='mb-'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.Mode==='dark'?'rgb(12,4,65)':'white',color:props.Mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowclick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
  </div>
  <div className="container mb-3" style={{color:props.Mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview!"}</p>
  </div>
  </>
  )
}
