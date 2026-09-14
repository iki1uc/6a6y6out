function kammer4() {
  S.kammer = 4;
  document.getElementById("kammerLbl").textContent = "KAMMER 4 · ZAM";
  updateHud();

  sayWithButtons(
    "Der Pakt. Wähle.",
    [
      {label:"JA", onClick:()=>{S.pactChosen="yes"; kammer5();}},
      {label:"NEIN", onClick:()=>{S.pactChosen="no"; kammer5();}},
      {label:"FRAGE", onClick:()=>{S.pactChosen="ask"; kammer5();}}
    ]
  );
}

