const doWork = () => {
    const inputElement = document.querySelector('.keyboard-input');
    const allButtons = document.getElementsByClassName('keyboard__key');
    const btns = document.getElementsByClassName('keyboard__key_btn');
    let capsLock = true;

    for (let act in btns){
        if (btns[act].id === "backspace") {
            btns[act].addEventListener('click', function () {
                inputElement.textContent = inputElement.textContent.substring(0, inputElement.textContent.length - 1);
            });
        }

        if (btns[act].id === "caps-lock") {
                   btns[act].addEventListener('click', function () {
                for (let keys in allButtons) {
                    allButtons[keys].innerHTML = capsLock
                        ? allButtons[keys].innerHTML.toUpperCase()
                        : allButtons[keys].innerHTML.toLowerCase();

                    allButtons[keys].value = capsLock
                        ? allButtons[keys].value.toUpperCase()
                        : allButtons[keys].value.toLowerCase();
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
