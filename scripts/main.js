    var numberOfButtons, index, element, name, previousButtonsNo=0;

    function generateButtons() {
        deletePreviousButtons();
        numberOfButtons = document.getElementById('numberOfButtons').value;
        previousButtonsNo = numberOfButtons;
        document.getElementById('paragraph').innerHTML = 'Select a button!';
        createButtons();
        
    }

    function replyClick(clickedId) {
        var selected = Math.floor(Math.random() * numberOfButtons) + 1;
        (clickedId == selected) ? (name='the winner') : (name='not the winner');
        alert(name);
    }


    function deletePreviousButtons() {
        for (index = 1; index <= previousButtonsNo; ++index) {
            element = document.getElementById(index);
            element.parentNode.removeChild(element);
        }
    }

    function createButtons() {
        var text;
        for (index = 1; index <= numberOfButtons; ++index) {
            element = document.createElement('button');
            element.setAttribute('id', index);
            element.setAttribute('onclick', 'replyClick(this.id)');
            element.innerHTML = index;
            document.getElementById('div').appendChild(element);
        }
    }