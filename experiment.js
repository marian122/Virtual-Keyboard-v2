const doWork = () => {
    const inputElement = document.querySelector('.keyboard-input');
    const allButtons = document.getElementsByClassName('keyboard__key');

    for (let number in allButtons) {
        allButtons[number].addEventListener('click', function () {
            let symbol = allButtons[number].value;
            inputElement.textContent += symbol;
        });

        if (allButtons[number].id === "backspace") {
            allButtons[number].addEventListener('click', function () {
                inputElement.textContent = inputElement.textContent.substring(0, inputElement.textContent.length - 1);
            });
        } else if (allButtons[number].id === "caps-lock") {
            allButtons[number].addEventListener('click', function () {
                if (allButtons[number].className === 'keyboard__key') {
                    allButtons[number].value.toUpperCase();
                    inputElement.textContent = inputElement.textContent.toUpperCase();
                }
            });
        }

    }
};

doWork();

