import React ,{useState}from 'react'

function Text(props) {

  const handleUpClick = () => {
    console.log("uppercase was cliked" + text); 
     let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upperCase", "success")
  }

  const handleLowClick = () => {
    console.log("Lowercase was cliked" + text); 
     let newText = text.toLowerCase();
    setText(newText)
     props.showAlert("Converted to LowerCase" , "success")
  }
  
   const handleClearClick = () => {
    setText(" ");
      props.showAlert("Clicked to clear text" , "success")
  }


  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value)
  }

  const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Clicked to copy Text" , "success")
  }

  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
       props.showAlert("Converted to remove Extraspace" , "success")
  }
  
  const[text, setText] = useState('');
  return (
    <>
   <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
  <h1 className='mb-3'>{props.heading}</h1>
  <div className="mb-3" >
    <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#808080a8':'white', color:props.mode ==='dark'?'white' :'black', caretColor: props.mode ==='dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert to LowerCase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Click to Clear</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy text </button>
  <button disabled={text.length===0}  className="btn btn-primary  mx-1 my-1" onClick={handleExtraSpaces}> Remove extra spaces </button>
    </div>
    <div className='container my-3'  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1> Your Text Summary </h1>
      <p> {text.trim()==="" ? 0 :text.trim().split(/\s+/).length} words and {text.length} character</p>
      <p> {text.trim()==="" ? 0 :((0.005 * text.trim().split(/\s+/).length) ).toFixed(3)} minutes to read </p>

      <h2> Preview </h2>
      <p> {text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

export default Text 