const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const archer = [new Unit("Archer", 100, 100, 10)];
const knight = [new Unit("Knight", 100, 100, 10)];
const cavalry = [new Unit("Cavalry", 100, 100, 10)];
const healer = [new Unit("Healer", 300, 1000, 0.5)];

archer.push(archer[0].clone());
const archerSquad = new Squad(archer);
const knightSquad = new Squad(knight);
const cavalrySquad = new Squad(cavalry);
const healerSquad = new Squad(healer);
console.log(archer, knight, cavalry, healer);


const createNewUnit = (squad, unit, index) => {
    document.getElementsByClassName('createUnit')[index].addEventListener('click', () => {
        squad.pushNewUnit(unit);
        console.log(squad.mathHealth());
    });
}
createNewUnit(archerSquad, archer, 0)
createNewUnit(knightSquad, knight, 1)
createNewUnit(cavalrySquad, cavalry, 2)
createNewUnit(healerSquad, healer, 3)


let draw = () => {
    let posArcher = 0;
    let posKnight = 0;
    let posCavalry = 0;
    archer.forEach(element => {
        context.drawImage(archerImg, 20, (posArcher += 90) + 150, 80, 110);
    });
    knight.forEach(element => {
        context.drawImage(knightImg, 140, (posKnight += 90) + 150, 80, 110);
    });
    cavalry.forEach(element => {
        context.drawImage(cavalryImg, 240, (posCavalry += 80) + 160, 160, 150);
    });
    healer.forEach(element => {
        context.drawImage(healerImg, 90, 370, 70, 120);
    });
    requestAnimationFrame(draw);
};
draw();