const doWork = () => {
    const inputElement = document.querySelector('.keyboard-input');
    const allButtons = document.getElementsByClassName('keyboard__key');

    for (let number in allButtons) {
        if (allButtons[number].id !== "backspace") {
            allButtons[number].addEventListener('click', function () {
                let symbol = allButtons[number].value;
                inputElement.textContent += symbol;
            });
        } else {
            allButtons[number].addEventListener('click', function () {
                inputElement.textContent = inputElement.textContent.substring(0, inputElement.textContent.length - 1);
            });
        }
    }
};

doWork();

