"use strict";

const S = {
  kammer: 0,
  breathOk: 0,
  breathMiss: 0,
  welcomeCorrect: 0,
  welcomeWrong: 0,
  userFound: 0,
  userMissed: 0,
  pactChosen: null,
  balanceOk: 0,
  started: false,
  finished: false
};

function say(html) {
  document.getElementById("stage").innerHTML = `<div class="narr">${html}</div>`;
}

function sayWithButtons(html, buttons) {
  const stage = document.getElementById("stage");
  stage.innerHTML = `<div class="narr">${html}</div><div class="btnrow"></div>`;
  const row = stage.querySelector(".btnrow");

  buttons.forEach(b => {
    const btn = document.createElement("button");
    btn.className = "btn " + (b.cls || "");
    btn.textContent = b.label;
    btn.onclick = b.onClick;
    row.appendChild(btn);
  });
}

function updateHud() {
  document.getElementById("sBreath").textContent = `${S.breathOk}/${S.breathOk + S.breathMiss}`;
  document.getElementById("sSee").textContent = S.welcomeCorrect;
  document.getElementById("sFeel").textContent = S.userFound;
  document.getElementById("sNum").textContent = S.balanceOk;
}

function boot() {
  const lines = [
    "▸ BIOS ok",
    "▸ ATEM geladen",
    "▸ WELCOME bereit",
    "▸ LÄUFER aktiv",
    "▸ ZAM GATE offen",
    "▸ REAL.WORK stabil",
    "▸ BEREIT"
  ];

  const el = document.getElementById("bootLines");
  let i = 0;

  function next() {
    if (i >= lines.length) {
      document.getElementById("bootHint").style.display = "block";
      window.addEventListener("keydown", startGame, {once:true});
      return;
    }
    const div = document.createElement("div");
    div.className = "line";
    div.textContent = lines[i++];
    el.appendChild(div);
    setTimeout(next, 200);
  }

  next();
}

function startGame() {
  if (S.started) return;
  S.started = true;

  const boot = document.getElementById("boot");
  boot.classList.add("done");
  setTimeout(() => {
    boot.style.display = "none";
    kammer1();
  }, 800);
}

boot();

