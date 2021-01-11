function generateButtons()
{
    var max=document.getElementById('numberOfButtons').value;
    document.getElementById("sel").innerHTML = "Select a button!";
    var i, element, text;
    for (i=1; i<=max; ++i) {
        element = document.createElement("BUTTON");
        element.setAttribute("id", i);
        element.setAttribute("onclick", "reply_click(this.id)");
        text=document.createTextNode(i);
        element.appendChild(text);
        document.body.appendChild(element);
        }       
}

function reply_click(clicked_id)
{
    var max=document.getElementById('numberOfButtons').value;
    var selected=Math.floor(Math.random()*max)+1;
    if (clicked_id==selected)
        name="the winner";
    else
        name="not the winner";
    alert("the selected button, number "+clicked_id+" is:"+name+". The winner is:"+selected);
}