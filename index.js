var nums = document.querySelectorAll(".num-box");
var ops = document.querySelectorAll(".op-box");
var display = document.querySelector(".display-container");
var clear = document.getElementById("clear");
var total = document.getElementById("total");
var back = document.getElementById("back");
var mode = document.getElementById("mode");
var themeAudio = new Audio("Audio/day_singing.wav");
var buttonAudio = new Audio("Audio/button_singing.wav");
var volumeControl = document.getElementById("volume-control");
var container = document.querySelector(".container");
var displayContainer = document.querySelector(".display-container");
var birdFly = document.getElementById('fly-bird');
var isMuted = true;
if (volumeControl) {
    volumeControl.addEventListener("click", function (event) {
        if (themeAudio.paused) {
            isMuted = false;
            volumeControl.src = "Images/unmute.svg";
            themeAudio.volume = 0.5;
            themeAudio.loop = true;
            themeAudio.play();
        }
        else {
            isMuted = true;
            volumeControl.src = "Images/mute.svg";
            themeAudio.pause();
        }
    });
}
//Display Numbers
if (nums) {
    nums.forEach(function (num) {
        num === null || num === void 0 ? void 0 : num.addEventListener("click", function (event) {
            if (display) {
                display.innerText += num.innerText;
                if (!isMuted) {
                    buttonAudio.volume = 0.3;
                    buttonAudio.play();
                }
            }
        });
    });
}
//Display Operators
if (ops) {
    ops.forEach(function (op) {
        op.addEventListener("click", function (event) {
            if (display) {
                //Prevent consecutive operators.
                if (!/[\+\-\*\/x]$/.test(display.innerText)) {
                    display.innerText += op.innerText;
                }
                if (!isMuted) {
                    buttonAudio.volume = 0.3;
                    buttonAudio.play();
                }
            }
        });
    });
}
//Clear Funtionality
if (clear) {
    clear.addEventListener("click", function (event) {
        if (display) {
            display.innerText = "";
            if (!isMuted) {
                buttonAudio.volume = 0.3;
                buttonAudio.play();
            }
        }
    });
}
//Back Funtionality
if (back) {
    back.addEventListener("click", function (event) {
        if (display) {
            //slice string to remove last charac.
            display.innerText = display.innerText.slice(0, -1);
            if (!isMuted) {
                buttonAudio.volume = 0.3;
                buttonAudio.play();
            }
        }
    });
}
//Total Funtionality
if (total) {
    total.addEventListener("click", function (event) {
        if (display) {
            //convert x into *
            var safeExpr = display.innerText.replace(/x/gi, "*");
            //evaluate eval() string expression
            var total_1 = eval(safeExpr);
            display.innerText = total_1;
            if (!isMuted) {
                buttonAudio.volume = 0.3;
                buttonAudio.play();
            }
        }
    });
}
//Dark-Light Mode Button
mode === null || mode === void 0 ? void 0 : mode.addEventListener("click", function () {
    //Light Mode
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        document.body.style.backgroundImage = "url('Images/day.png')";
        mode.setAttribute("src", "https://www.pngmart.com/files/23/Sun-Logo-PNG-HD-Isolated.png");
        mode.setAttribute("height", "50px");
        if (themeAudio.paused) {
            themeAudio.autoplay = false;
        }
        else {
            themeAudio.src = "Audio/day_singing.wav";
            themeAudio.autoplay = true;
        }
        volumeControl.style.filter = "invert()";
        container.style.border = "2px solid black";
        displayContainer.style.border = "2px solid black";
        nums.forEach(function (num) { return (num.style.border = "2px solid black"); });
        ops.forEach(function (op) { return (op.style.border = "2px solid black"); });
        clear.style.border = "2px solid black";
        total.style.border = "2px solid black";
        back.style.border = "2px solid black";
        birdFly.style.display = 'block';
    }
    //Dark Mode
    else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        document.body.style.backgroundImage = "url('Images/night.png')";
        mode.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnpADgm8d5lFNN_1dbC1n33oXbcH4G6q8dQ&s");
        mode.setAttribute("height", "40px");
        if (themeAudio.paused) {
            themeAudio.autoplay = false;
        }
        else {
            themeAudio.src = "Audio/night_singing.wav";
            themeAudio.autoplay = true;
        }
        volumeControl.style.filter = "none";
        container.style.border = "2px solid white";
        displayContainer.style.border = "2px solid white";
        nums.forEach(function (num) { return (num.style.border = "2px solid white"); });
        ops.forEach(function (op) { return (op.style.border = "2px solid white"); });
        clear.style.border = "2px solid white";
        total.style.border = "2px solid white";
        back.style.border = "2px solid white";
        birdFly.style.display = 'none';
    }
});
