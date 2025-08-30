document.getElementById("js").addEventListener('keypress', (e)=>{
    // if(e.key === "<"){
    //     document.getElementById("js").setRangeText('>', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    // }
    console.log(e.key)
    
    if(e.key === "("){
        document.getElementById("js").setRangeText(')', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
        console.log("hjdaa")
    }
    if(e.key ===  "<"){
        document.getElementById("js").setRangeText('>', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
        console.log("hjhhhhhdaa")
    }
    if(e.key ===  "\""){
        document.getElementById("js").setRangeText('\"', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    }
    if(e.key ===  "\'"){
        document.getElementById("js").setRangeText('\'', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    }
    if(e.key ===  "["){
        document.getElementById("js").setRangeText(']', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
        console.log("hjdaffgfa")
    }
    if(e.key === "{"){
        document.getElementById("js").setRangeText('\n  \n}', document.getElementById("js").selectionStart, document.getElementById("js").selectionEnd)
    }
        

    
    
})

