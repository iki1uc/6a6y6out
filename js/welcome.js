let WELCOME_CASES = [];

fetch("data/welcome.json")
  .then(r => r.json())
  .then(d => WELCOME_CASES = d);

let welcomeIdx = 0;

function kammer2() {
  S.kammer = 2;
  welcomeIdx = 0;
  S.welcomeCorrect = 0;
  S.welcomeWrong = 0;

  document.getElementById("kammerLbl").textContent = "KAMMER 2 · WELCOME";
  updateHud();
  showWelcomeScene();
}

function showWelcomeScene() {
  if (welcomeIdx >= WELCOME_CASES.length) return kammer2End();

  const c = WELCOME_CASES[welcomeIdx];
  const stage = document.getElementById("stage");

  stage.innerHTML = `
    <div class="narr">${c.scene}<br><br>Welche Farbe?</div>
    <div class="btnrow">
      <button class="btn" data-c="red">ROT</button>
      <button class="btn" data-c="blue">BLAU</button>
      <button class="btn" data-c="yellow">GELB</button>
      <button class="btn" data-c="green">GRÜN</button>
    </div>
  `;

  stage.querySelectorAll(".btn").forEach(btn => {
    btn.onclick = () => {
      const picked = btn.dataset.c;
      if (picked === c.correct) S.welcomeCorrect++;
      else S.welcomeWrong++;

      updateHud();
      welcomeIdx++;
      showWelcomeScene();
    };
  });
}

function kammer2End() {
  sayWithButtons("Farben gelesen.", [{label:"Weiter", onClick: kammer3}]);
}

