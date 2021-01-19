    var onlyOnceWinner = [], numberOfButtons, index, element, name, previousButtonsNo=0;

    function generateButtons() {
        deletePreviousButtons();
        numberOfButtons = document.getElementById('numberOfButtons').value;
        previousButtonsNo = numberOfButtons;
        document.getElementById('paragraph').innerHTML = 'Select a button!';
        createButtons();
        
    }

    function replyClick(clickedId) {
        if (onlyOnceWinner.length < numberOfButtons) {
            var selected = Math.floor(Math.random() * numberOfButtons) + 1;
            while (onlyOnceWinner.indexOf(selected) !== -1) {
                selected = Math.floor(Math.random() * numberOfButtons) + 1;
            }
            onlyOnceWinner.push(selected);
            (clickedId == selected) ? (name='the winner') : (name='not the winner');
            alert(selected + ' ' + name);
        } else if (onlyOnceWinner.length == numberOfButtons) {
            alert ('Sorry, you must generate some buttons again!');
        }
    }


    function deletePreviousButtons() {
        for (index = 1; index <= previousButtonsNo; ++index) {
            element = document.getElementById(index);
            element.parentNode.removeChild(element);
        }
        onlyOnceWinner = [];
    }

    function createButtons() {
        var text;
        for (index = 1; index <= numberOfButtons; ++index) {
            element = document.createElement('button');
            element.setAttribute('id', index);
            element.setAttribute('onclick', 'replyClick(this.id)');
            text = document.createTextNode(index);
            element.appendChild(text);
            document.body.appendChild(element);
        }
    }