const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const archer = [new Unit("Archer", 25, 100, 10)];
const knight = [new Unit("Knight", 25, 100, 10)];
const cavalry = [new Unit("Cavalry", 25, 300, 10)];

archer.push(archer[0].clone());

document.getElementsByClassName('createUnit')[0].addEventListener('click', () => {
    archer.push(archer[0].clone());
});
document.getElementsByClassName('createUnit')[1].addEventListener('click', () => {
    knight.push(knight[0].clone());
});
document.getElementsByClassName('createUnit')[2].addEventListener('click', () => {
    cavalry.push(cavalry[0].clone());
});

const archerSqud = new Squad(archer);
const knightSquad = new Squad(knight);
const cavalrySquad = new Squad(cavalry);

console.log(archer, knight, cavalry);

let draw = () => {
    let posArcher = 0;
    let posKnight = 0;
    let posCavalry = 0;
    archer.forEach(element => {
        context.drawImage(archerImg, 10, (posArcher += 90) + 100, 70, 100);
    });
    knight.forEach(element => {
        context.drawImage(knightImg, 100, (posKnight += 100) + 100, 70, 100);
    });
    cavalry.forEach(element => {
        context.drawImage(cavalryImg, 200, (posCavalry += 90) + 100, 160, 150);
    });
    requestAnimationFrame(draw);
};
draw();

const mathHealth = (array, res = 0) => {
    array.forEach(element => {
        res += element.health;
    });
    return res;
}
console.log(mathHealth(archer));