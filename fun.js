function input(){
    let html = document.getElementById("html-c").value
    let css = document.getElementById("css-c").value
    let js = document.getElementById("js-c").value
    let output = document.getElementById("output")
    console.log("called");

    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>"
    output.contentWindow.eval(js) 
}
