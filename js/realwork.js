function kammer5() {
  S.kammer = 5;
  S.balanceOk = 0;

  document.getElementById("kammerLbl").textContent = "KAMMER 5 · REAL.WORK";
  updateHud();

  say("Balance. 30 Sekunden.");

  setTimeout(startBalance, 1500);
}

function startBalance() {
  const b = {o2:0.5, co2:0.5, h2o:0.5, atom:0.5};
  const start = performance.now();

  const timer = setInterval(() => {
    const t = performance.now() - start;
    if (t >= 30000) {
      clearInterval(timer);
      return kammer5End();
    }

    for (let k in b) {
      b[k] = Math.max(0, Math.min(1, b[k] + (Math.random()-0.5)*0.05));
    }

    const ok = Object.values(b).every(v => v>0.5 && v<0.95);
    if (ok) S.balanceOk++;

    updateHud();
  }, 100);
}

function kammer5End() {
  sayWithButtons("Balance beendet.", [{label:"Epilog", onClick: epilog}]);
}

