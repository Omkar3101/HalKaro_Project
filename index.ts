const nums = document.querySelectorAll<HTMLDivElement>(".num-box");
const ops = document.querySelectorAll<HTMLDivElement>(".op-box");
const display = document.querySelector<HTMLDivElement>(".display-container");
const clear = document.getElementById("clear") as HTMLDivElement;
const total = document.getElementById("total") as HTMLDivElement;
const back = document.getElementById("back") as HTMLDivElement;
const mode = document.getElementById("mode") as HTMLImageElement;
const themeAudio = new Audio("Audio/day_singing.wav") as HTMLAudioElement;
const buttonAudio = new Audio("Audio/button_singing.wav") as HTMLAudioElement;
const volumeControl = document.getElementById(
  "volume-control"
) as HTMLImageElement;
const container = document.querySelector(".container") as HTMLDivElement;
const displayContainer = document.querySelector(
  ".display-container"
) as HTMLDivElement;
const birdFly = document.getElementById('fly-bird') as HTMLImageElement;

let isMuted = true;

if (volumeControl) {
  volumeControl.addEventListener("click", (event: Event) => {
    if (themeAudio.paused) {
      isMuted = false;
      volumeControl.src = "Images/unmute.svg";
      themeAudio.volume = 0.5;
      themeAudio.loop = true;
      themeAudio.play();
    } else {
      isMuted = true;
      volumeControl.src = "Images/mute.svg";
      themeAudio.pause();
    }
  });
}

//Display Numbers
if (nums) {
  nums.forEach((num) => {
    num?.addEventListener("click", (event: MouseEvent) => {
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
  ops.forEach((op) => {
    op.addEventListener("click", (event: MouseEvent) => {
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
  clear.addEventListener("click", (event: MouseEvent) => {
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
  back.addEventListener("click", (event: MouseEvent) => {
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
  total.addEventListener("click", (event: MouseEvent) => {
    if (display) {
      //convert x into *
      const safeExpr = display.innerText.replace(/x/gi, "*");
      //evaluate eval() string expression
      const total = eval(safeExpr);
      display.innerText = total;
      if (!isMuted) {
        buttonAudio.volume = 0.3;
        buttonAudio.play();
      }
    }
  });
}

//Dark-Light Mode Button
mode?.addEventListener("click", () => {
  //Light Mode
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.body.style.backgroundImage = "url('Images/day.png')";
    mode.setAttribute(
      "src",
      "https://www.pngmart.com/files/23/Sun-Logo-PNG-HD-Isolated.png"
    );
    mode.setAttribute("height", "50px");
      themeAudio.src = "Audio/day_singing.wav";
      if(!isMuted){
        themeAudio.play();
      }
    volumeControl.style.filter = "invert()";
    container.style.border = "2px solid black";
    displayContainer.style.border = "2px solid black";
    nums.forEach((num) => (num.style.border = "2px solid black"));
    ops.forEach((op) => (op.style.border = "2px solid black"));
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
    mode.setAttribute(
      "src",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnpADgm8d5lFNN_1dbC1n33oXbcH4G6q8dQ&s"
    );
    mode.setAttribute("height", "40px");
    themeAudio.src = "Audio/night_singing.wav";
    if(!isMuted){
      themeAudio.play();
    }
    volumeControl.style.filter = "none";
    container.style.border = "2px solid white";
    displayContainer.style.border = "2px solid white";
    nums.forEach((num) => (num.style.border = "2px solid white"));
    ops.forEach((op) => (op.style.border = "2px solid white"));
    clear.style.border = "2px solid white";
    total.style.border = "2px solid white";
    back.style.border = "2px solid white";
    birdFly.style.display = 'none';
  }
});
