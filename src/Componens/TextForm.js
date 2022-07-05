import React, { useState } from 'react'



export default function TextForm(props) {


    const [text, settext] = useState('');

    const styles = 'btn btn-danger'

    let upper = () => {
        if(text === ""){
            props.showalert("Enter yout text first","danger")
            
            return
        }
        props.showalert("Converted to UpperCase","success")
        settext(text.toUpperCase())
        // console.log(text);
    }
    let lower = () => {
        if(text === ""){
            props.showalert("Enter yout text first","danger")

            return
        }
        settext(text.toLowerCase())
        props.showalert("Converted to LowerCase","success")
        // console.log(text);
    }

    let copy = () => {

        if(text === ""){
            
            return
        }
        let copy1 = document.getElementById('copy');
        copy1.innerText = "Copied !"
        copy1.style.border = "3px solid green"


        navigator.clipboard.writeText(copy1.value)

        setTimeout(() => {
            copy1.innerText = "Copy"
            copy1.style.border = "none"
        }, 2000);
        props.showalert("Text Copied","success")

    }
    let handleonchange = (e) => {

        settext(e.target.value)
        console.log(text);
    }
    let clear = () => {
        settext("")
    }

    let handleExtraSpaces = () => {
        if(text === ""){
            props.showalert("Enter yout text first","danger")

            return
        }

        let newtxt = text.split(/[ ]+/);
        settext(newtxt.join(" "))
        props.showalert("Extra spaces removed","success")

    }
    function saveTextAsFile(textToWrite, fileNameToSaveAs) {
        var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
        var downloadLink = document.createElement("a");
        downloadLink.download = fileNameToSaveAs;
        downloadLink.innerHTML = "Download File";
        if (window.webkitURL != null) {
            // Chrome allows the link to be clicked
            // without actually adding it to the DOM.
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }

        if (text !== "") {

            downloadLink.click();
            props.showalert("Downloading started..","success")

        }
    }



    return (


        <div className='cont'>
            <div style={{ marginTop: "3rem" }}>
                <h2 style={{textAlign:"center"}}>{props.heading}</h2>
                <textarea value={text} id='ta' onChange={handleonchange} className="form-control" rows={8}></textarea>

                <div style={{textAlign:"center"}}>

                <div onClick={upper} className="btn btn-primary">Convert to UpperCase</div>
                <div onClick={lower} className="btn  btn-primary">Convert to lowerCase</div>
                <div onClick={handleExtraSpaces} className="btn btn-primary">Remove Extra Spaces</div>
                <div className=" dnld btn btn-primary" onClick={() => saveTextAsFile(text, 'download.txt')}> <div>Download Text</div> </div>


                <div onClick={copy} id="copy" className={styles}>Copy</div>
                <div onClick={clear} className='btn btn-success'>Clear</div>

                </div>

            </div>
            <hr />
            <div className="count">


                <h4 id='calc' style={{textAlign:"center"}} >
                    {text.split(" ").length - 1} words ,  {text.length} characters , {(0.008 * text.split(" ").length).toFixed(2)} Minutes to read
                </h4>



            </div>



        </div>

    )
}
