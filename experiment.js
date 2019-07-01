function copyFunc() {
    let copyText = document.getElementById("input");

    if (copyText.value.length !== 0) {
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }
}

function youtubeFunc() {
    let search = document.getElementById('youtubeID');
    let text = document.getElementById("input");
    search.setAttribute('href', `https://www.youtube.com/results?search_query=${text.value}`);
}

function googleFunc() {
    let search = document.getElementById('googleID');
    let text = document.getElementById("input");
    search.setAttribute('href', `https://www.google.com/search?hl=en&source=hp&ei=jj4aXZaxPIj76QTRgquwBQ&q=${text.value}&oq=${text.value}&gs_l=psy-ab.3..0j0i203j0i10i203l2j0j0i10i203j0i203j0i10i203j0i203l2.5088.8146..8365...11.0..0.142.1489.7j7......0....1..gws-wiz.....10..35i39j0i67j0i20i263j0i10.VnIFWmfSB64`);
}

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

    let copyText = document.getElementById("input").value;

};

doWork();