const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


const archer = [new Unit("Archer", 25, 100, 10)];
const knight = [new Unit("Knight", 25, 100, 10)];
const cavalry = [new Unit("Cavalry", 25, 300, 10)];


archer.push(archer[0].clone());
archer.push(archer[0].clone());
archer.push(archer[0].clone());

knight.push(knight[0].clone());
knight.push(knight[0].clone());
knight.push(knight[0].clone());

cavalry.push(cavalry[0].clone());
cavalry.push(cavalry[0].clone());
cavalry.push(cavalry[0].clone());

const archerSqud = new Squad(archer);
const knightSquad = new Squad(knight);
const cavalrySquad = new Squad(cavalry);

console.log(archer, knight, cavalry)

let draw = () => {
    let posArcher = 0;
    let posKnight = 0;
    let posCavalry = 0;
    archer.forEach(element => {
        context.drawImage(archerImg, 10, posArcher += 100, 70, 100);
    });
    knight.forEach(element => {
        context.drawImage(knightImg, 100, posKnight += 100, 70, 100);
    });
    cavalry.forEach(element => {
        context.drawImage(cavalryImg, 200, posCavalry += 90, 140, 150);
    });
    requestAnimationFrame(draw);
};
draw();