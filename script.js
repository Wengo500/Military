const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const archer = [new Unit("Archer", 100, 100, 10)];
const knight = [new Unit("Knight", 100, 100, 10)];
const cavalry = [new Unit("Cavalry", 100, 100, 10)];
const healer = [new Unit("Healer", 300, 1000, 0.5)];

document.getElementsByClassName('createUnit')[0].addEventListener('click', () => {
    archer.push(archer[0].clone());
    document.getElementsByClassName("state_health")[0].style.width = `${mathHealth(archer)}%`;
    document.getElementsByClassName("state_stamina")[0].style.width = `${mathDistance(archer)}%`;
});
document.getElementsByClassName('createUnit')[1].addEventListener('click', () => {
    knight.push(knight[0].clone());
    document.getElementsByClassName("state_health")[1].style.width = `${mathHealth(knight)}%`;
    document.getElementsByClassName("state_stamina")[1].style.width = `${mathDistance(knight)}%`;
});
document.getElementsByClassName('createUnit')[2].addEventListener('click', () => {
    cavalry.push(cavalry[0].clone());
    document.getElementsByClassName("state_health")[2].style.width = `${mathHealth(cavalry)}%`;
    document.getElementsByClassName("state_stamina")[2].style.width = `${mathDistance(cavalry)}%`;
});
document.getElementsByClassName('createUnit')[3].addEventListener('click', () => {
    healer.push(healer[0].clone());
    document.getElementsByClassName("state_health")[3].style.width = `${mathHealth(healer)}%`;
    document.getElementsByClassName("state_stamina")[3].style.width = `${mathDistance(healer)}%`;
});

const archerSquad = new Squad(archer);
const knightSquad = new Squad(knight);
const cavalrySquad = new Squad(cavalry);
const healerSquad = new Squad(healer);

console.log(archer, knight, cavalry, healer);

document.getElementsByClassName("state_health")[0].style.width = `${mathHealth(archer)}%`;
document.getElementsByClassName("state_health")[1].style.width = `${mathHealth(knight)}%`;
document.getElementsByClassName("state_health")[2].style.width = `${mathHealth(cavalry)}%`;
document.getElementsByClassName("state_health")[3].style.width = `${mathHealth(healer)}%`;

document.getElementsByClassName("state_stamina")[0].style.width = `${mathDistance(archer)}%`;
document.getElementsByClassName("state_stamina")[1].style.width = `${mathDistance(knight)}%`;
document.getElementsByClassName("state_stamina")[2].style.width = `${mathDistance(cavalry)}%`;
document.getElementsByClassName("state_stamina")[3].style.width = `${mathDistance(healer)}%`;

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