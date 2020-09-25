const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const archer = [new Unit("Archer", 100, 100, 10)];
const knight = [new Unit("Knight", 100, 100, 10)];
const cavalry = [new Unit("Cavalry", 100, 100, 10)];
const healer = [new Unit("Healer", 300, 1000, 0.5)];

const createNewUnit = (arr, index) => {
    document.getElementsByClassName('createUnit')[index].addEventListener('click', () => {
        arr.push(arr[0].clone());
        document.getElementsByClassName("state_health")[index].style.width = `${mathHealth(arr)}%`;
        document.getElementsByClassName("state_stamina")[index].style.width = `${mathDistance(arr)}%`;
    });
};
createNewUnit(archer, 0);
createNewUnit(knight, 1);
createNewUnit(cavalry, 2);
createNewUnit(healer, 3);

const archerSquad = new Squad(archer);
const knightSquad = new Squad(knight);
const cavalrySquad = new Squad(cavalry);
const healerSquad = new Squad(healer);
archerSquad.qwe();
console.log(archer, knight, cavalry, healer);

const stateHealthWidth = (arr, index) => {
    document.getElementsByClassName("state_health")[index].style.width = `${mathHealth(arr)}%`;
}
stateHealthWidth(archer, 0);
stateHealthWidth(knight, 1);
stateHealthWidth(cavalry, 2);
stateHealthWidth(healer, 3);

const stateStaminaWidth = (arr, index) => {
    document.getElementsByClassName("state_stamina")[index].style.width = `${mathDistance(arr)}%`;
}
stateStaminaWidth(archer, 0);
stateStaminaWidth(knight, 1);
stateStaminaWidth(cavalry, 2);
stateStaminaWidth(healer, 3);

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

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const archer = [new Unit("Archer", 100, 100, 10)];
const knight = [new Unit("Knight", 100, 100, 10)];
const cavalry = [new Unit("Cavalry", 100, 100, 10)];
const healer = [new Unit("Healer", 300, 1000, 0.5)];

const createNewUnit = (arr, index) => {
    document.getElementsByClassName('createUnit')[index].addEventListener('click', () => {
        arr.push(arr[0].clone());
        document.getElementsByClassName("state_health")[index].style.width = `${mathHealth(arr)}%`;
        document.getElementsByClassName("state_stamina")[index].style.width = `${mathDistance(arr)}%`;
    });
};
createNewUnit(archer, 0);
createNewUnit(knight, 1);
createNewUnit(cavalry, 2);
createNewUnit(healer, 3);