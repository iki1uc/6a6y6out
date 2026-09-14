function kammer1() {
  S.kammer = 1;
  document.getElementById("kammerLbl").textContent = "KAMMER 1 · ATEM";
  updateHud();

  say("Atme. Klicke im EIN‑Moment.");

  setTimeout(() => startBreathRound(), 1500);
}

function startBreathRound() {
  const stage = document.getElementById("stage");
  stage.innerHTML = `
    <div id="breathWrap" style="cursor:pointer;font-size:40px;text-align:center;">
      EIN / AUS
    </div>
  `;

  const wrap = document.getElementById("breathWrap");
  let phase = 0;

  const timer = setInterval(() => {
    phase = (phase + 1) % 4;
    wrap.textContent = phase < 2 ? "EIN" : "AUS";
  }, 1000);

  wrap.onclick = () => {
    if (wrap.textContent === "EIN") S.breathOk++;
    else S.breathMiss++;

    updateHud();

    if (S.breathOk + S.breathMiss >= 8) {
      clearInterval(timer);
      kammer1End();
    }
  };
}

function kammer1End() {
  sayWithButtons("Atem erkannt.", [{label:"Weiter", onClick: kammer2}]);
}

