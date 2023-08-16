import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick=()=>{
      let newText=text.toUpperCase();
      setText(newText)
    }
    const handleLwClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)
    }
    const handleChange=(event)=>{
      setText(event.target.value)
    }
   

    const toggleCopy=()=>{
      var text=document.getElementById("MyBox");
      text.select();
      navigator.clipboard.writeText(text.value)
    }
    
    const [myStyle, setStyle] = useState({
      color:"black",
      backgroundColor:"white"
    } )
    const [buttonText, setButtonText] = useState("Dark mode")
    const toggleClick=()=>{
          if(myStyle.color === "white"){
               setStyle({
                  color:"black",
                  backgroundColor:"white"
                })
                setButtonText("Dark mode");  
          }
          else{
            setStyle({
              color:"white",
              backgroundColor:"black" 
            })
            setButtonText("white mode");
          }
    }
   
    const toggleClear=()=>
    {
    //  document.getElementById("MyBox").value='';
    //  window.location.reload();
    window.location.reload(false);
  }

    return (
      <>
        <div className="container " style={{color:props.mode==='dark'?'white':'black' }}>
          <h1 >{props.BoxHeading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="MyBox" rows="8" ></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
          <button className="btn btn-primary mx-3 " onClick={handleLwClick}>Convert to Lowecase</button>
          <button className="btn btn-warning my-2 mx-3 " onClick={toggleCopy}>Copy Text</button>
          <button className="btn btn-secondary my-2 " onClick={toggleClear}>Clear Text</button>

        </div>
        <div className="container2 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1 >Your Text summery</h1>
          <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview </h2>
        <p>{text.length >0 ? text : "Enter text to preview here"}</p>
        </div>
        </>
      );
  }
