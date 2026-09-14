function kammer3() {
  S.kammer = 3;
  S.userFound = 0;
  S.userMissed = 0;

  document.getElementById("kammerLbl").textContent = "KAMMER 3 · LÄUFER";
  updateHud();

  say("Finde den Menschen. 8 Klicks.");

  setTimeout(showLaufGrid, 1500);
}

function showLaufGrid() {
  const stage = document.getElementById("stage");
  const userSlot = Math.floor(Math.random() * 100);
  let clicks = 0;

  stage.innerHTML = `<div id="laufGrid" style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px;"></div>`;
  const grid = document.getElementById("laufGrid");

  for (let i=0;i<100;i++) {
    const cell = document.createElement("div");
    cell.textContent = i;
    cell.style.padding = "8px";
    cell.style.background = "#222";
    cell.style.textAlign = "center";
    cell.style.cursor = "pointer";

    cell.onclick = () => {
      if (clicks >= 8) return;
      clicks++;

      if (i === userSlot) {
        S.userFound = 1;
        updateHud();
        cell.style.background = "green";
        return kammer3End(true);
      } else {
        cell.style.background = "red";
      }

      if (clicks >= 8) {
        S.userMissed = 1;
        updateHud();
        kammer3End(false);
      }
    };

    grid.appendChild(cell);
  }
}

function kammer3End(found) {
  sayWithButtons(
    found ? "Du hast den Menschen gefunden." : "Du hast ihn nicht gefunden.",
    [{label:"Weiter", onClick: kammer4}]
  );
}
