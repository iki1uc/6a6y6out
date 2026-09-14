async function loadData() {
  const [axioms, welcome, run, room] = await Promise.all([
    fetch('data/axioms.json').then(r => r.json()),
    fetch('data/welcome.json').then(r => r.json()),
    fetch('data/run.json').then(r => r.json()),
    fetch('data/room.json').then(r => r.json())
  ]);
  S.data = { axioms, welcome, run, room };
}

