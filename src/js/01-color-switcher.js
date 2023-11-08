const ref = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  ref.startBtn.addEventListener('click', onStartBtnClick);
    ref.stopBtn.addEventListener('click', onStopBtnClick);

    function onStartBtnClick() {
        colorSwith.start();
    }
    function onStopBtnClick() {
        colorSwith.stop();
    }

  const colorSwith = {
      setIntervalId: null,
      isActive: false,
      start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        ref.startBtn.style.opacity = 0.4;
        ref.stopBtn.style.opacity = 1;
          this.setIntervalId = setInterval(() => {
              ref.body.style.backgroundColor = getRandomHexColor();
            }, 1000);
            console.log(this.isActive);
        },
        stop() {
clearInterval(this.setIntervalId);
this.isActive = false;
ref.stopBtn.style.opacity = 0.4;
ref.startBtn.style.opacity = 1;
        }
    }

    
// colorSwith.start();