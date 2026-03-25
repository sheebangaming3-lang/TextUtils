import React from 'react'

export default function About(props) {
  let myStyle ={
    color: props.mode ==='dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'rgb(49 17 153)':'white'
  }

  
  return (
           <div className='container' style={myStyle}>
             <h1 className='my-2'>About Us</h1>
             <div className="accordion" id="accordionExample">
         <div className="accordion-item" >
           <h2 className="accordion-header" >
             <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong>  Analyze Your Text </strong> 
             </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse show"   style={myStyle} data-bs-parent="#accordionExample">
             <div className="accordion-body"  style={myStyle}>
                   TextUtils give you a way to analyze your text
             </div>
           </div>
         </div>
         <div className="accordion-item"  >
           <h2 className="accordion-header">
             <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong> Free To Use </strong> 
             </button>
           </h2>
           <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                      Texturils is a free character counter tools that provides instant character count & word count statics of a give text
              </div>
           </div> 
         </div>
         <div className="accordion-item" >
           <h2 className="accordion-header">
             <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
             <strong>  Browser Capatible </strong> 
             </button>
           </h2>
           <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={myStyle} >
                 This word counter work in any browser such as a chrome , firebox , enternet explorer, etc.
                </div>
           </div>
         </div>
       </div>
     </div>
    )       
}
