
    var array =[];

    function generateButtons() {
        for (i=1; i<= array.length; ++i) {
            var elem = document.getElementById(i);
            elem.parentNode.removeChild(elem);
        }
        array = [];
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
        if (array.length<max) {
            var selected = Math.floor(Math.random()*max)+1;
            while (array.indexOf(selected) != -1) {
                selected = Math.floor(Math.random()*max)+1;
            }
            array.push(selected);
            name = (clickedId==selected) ? ("the winner") : ("not the winner");
            alert(selected+" "+name);
        } else if (array.length == max) {
            alert ('Sorry, you must generate some buttons again!');
        }
    }