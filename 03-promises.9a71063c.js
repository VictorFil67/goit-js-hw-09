!function(){function n(n,o){return new Promise((function(e,t){setTimeout((function(){Math.random()>.3?e({position:n,delay:o}):t({position:n,delay:o})}),o)}))}var o=document.querySelector(".form");o.addEventListener("input",(function(n){new FormData(o).forEach((function(n,o){e[o]=n}))}));var e={};o.addEventListener("submit",(function(o){o.preventDefault();for(var t=e.delay,i=e.step,a=e.amount,c=0;c<Number(a);c+=1){var r=Number(t)+c*Number(i);n(c,r).then((function(n){var o=n.position,e=n.delay;console.log("✅ Fulfilled promise ".concat(o+1," in ").concat(e,"ms"))})).catch((function(n){var o=n.position,e=n.delay;console.log("❌ Rejected promise ".concat(o+1," in ").concat(e,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.9a71063c.js.map
