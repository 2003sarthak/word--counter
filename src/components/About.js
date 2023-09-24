import React from 'react'

export default function About(props) {
    let myStyle={
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor :props.mode==='dark'?'rgb(36 74 104)':'white',
    }
    /*const [myStyle,setMyStyle]=useState({
        color:"black",
        backgroundColor:"white",
        border:"1px solid black"
    })
    const[btnTxt,newbtnTxt]=useState("Enable Dark Mode")
    const darkMode=()=>{
        if(myStyle.color==="black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black",border:"1px solid white"
            })
            newbtnTxt("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white",
                border:"1px solid black"  
            })
            newbtnTxt("Enable Dark Mode");
        }*/

  return (
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample"style={myStyle}>
            <div className="accordion-item"style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils gives you a way to analyse your text quickly and efficiently .Be it word count character count .
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    TextUtils id a free character counter tool that provides instant character counter & words counter statistics for a given text. TextUtils reports the number of words and characters. Thus it is a suitable for writing text with words /characters limit.  
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser Compatible </strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    This word counter software works in any web browser such as chrome, firefox, intenet explorer,safari, opera . It suits to count characters in facebook ,blog ,excel document, pdf document, essay etc.
                </div>
                </div>
            </div>
        </div>
        {/*<div className="container my-3">
        <button type="button" onClick={darkMode}className="btn btn-primary">{btnTxt}</button>
  </div>*/}
    </div>
  )
}
