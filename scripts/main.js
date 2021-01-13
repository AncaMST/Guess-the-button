    var array = [];

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
        if (array.indexOf(selected)===-1) {
            array.push(selected);
        } else if (array.length<=max) {
            while (array.indexOf(selected)!==-1) {
                selected=Math.floor(Math.random()*max)+1;
            }
            array.push(selected);
        }
        name = (clickedId==selected) ? ("the winner") : ("not the winner");
        alert(selected+" "+name);
    }

