const doWork = () => {
    const inputElement = document.querySelector('.keyboard-input');
    const allButtons = document.getElementsByClassName('keyboard__key');
    const btns = document.getElementsByClassName('keyboard__key_btn');

    for (let act in btns) {
        if (btns[act].id === "space") {
            btns[act].addEventListener('click', function () {
                let symbol = " ";
                inputElement.textContent += symbol;
            });
        } else if (btns[act].id === "tab") {
            btns[act].addEventListener('click', function () {
                let symbol = "    ";
                inputElement.textContent += symbol;
            });
        } else if (btns[act].id === "backspace") {
            btns[act].addEventListener('click', function () {
                inputElement.textContent = inputElement.textContent.substring(0, inputElement.textContent.length - 1);
            });
        } else if (btns[act].id === "caps-lock") {
            btns[act].addEventListener('click', function () {
                if(allButtons[20].value == allButtons[20].value.toLowerCase()){
                    for (let keys in allButtons) {
                        allButtons[keys].innerHTML = allButtons[keys].innerHTML.toUpperCase();
                        allButtons[keys].value = allButtons[keys].value.toUpperCase();
                    }
                }else {
                    for (let keys in allButtons) {
                        allButtons[keys].innerHTML = allButtons[keys].innerHTML.toLowerCase();
                        allButtons[keys].value = allButtons[keys].value.toLowerCase();
                    }
                }

            });
        }
    }

    for (let number in allButtons) {
        allButtons[number].addEventListener('click', function () {
            let symbol = allButtons[number].value;
            inputElement.textContent += symbol;
        });
    }

};

doWork();

