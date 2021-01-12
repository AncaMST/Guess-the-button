function generateButtons() {
    var numberButtons=document.getElementById('numberOfButtons').value;
    document.getElementById("sel").innerHTML = "Select a button!";
    var index, element, text;
    for (index=1; index<=numberButtons; ++index) {
        element = document.createElement("button");
        element.setAttribute("id", index);
        element.setAttribute("onclick", "replyClick(this.id)");
        text=document.createTextNode(index);
        element.appendChild(text);
        document.body.appendChild(element);
    }       
}

function replyClick(clickedId) {
    var name;
    var max=document.getElementById('numberOfButtons').value;
    var selected=Math.floor(Math.random()*max)+1;
    name = (clickedId==selected) ? ("winner") : ("not the winner");
    alert(name);
}