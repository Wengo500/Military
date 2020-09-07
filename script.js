const units = [new Unit("Virus", 200, 500)];

units.push(units[0].clone());

const squad = new Squad(units);
const squad1 = new Squad(units);

console.log(squad);