!function(){var t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(function(){e.start()})),t.stopBtn.addEventListener("click",(function(){e.stop()}));var e={setIntervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,t.startBtn.style.opacity=.4,t.stopBtn.style.opacity=1,this.setIntervalId=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),console.log(this.isActive))},stop:function(){clearInterval(this.setIntervalId),this.isActive=!1,t.stopBtn.style.opacity=.4,t.startBtn.style.opacity=1}}}();
//# sourceMappingURL=01-color-switcher.66015916.js.map
