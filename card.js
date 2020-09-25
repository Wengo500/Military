const knightBg = "img/knight.jpg";
const archerBg = "img/arrow.jpg";
const cavalryBg = "img/cavalry.jpg";
const healerBg = "img/healer.jpg";

const archerDeadBg = "img/arrowDead.jpg";
const knightDeadBg = "img/knightDead.jpg";
const cavalryDeadBg = "img/cavalryDead.jpg";

let panel = document.createElement("div");
panel.className = 'panel';
panel.style = `background: url(img/panelBg1.png) no-repeat 100%; background-size: 100%;`;
document.body.appendChild(panel);

let createCard = (img, type) => {

    let squad = document.createElement("div");
    squad.className = 'squad';
    squad.style = `background: url(${img}) no-repeat 1%; background-size: 100%;`;
    panel.appendChild(squad);

    let squadItems = document.createElement("div");
    squadItems.className = 'squad_items';
    squad.appendChild(squadItems);

    let btn = document.createElement("button");
    btn.className = 'btn createUnit';
    squadItems.appendChild(btn);

    let squadType = document.createElement("p");
    squadType.className = 'squad_character';
    squadType.innerHTML = type;
    squadItems.appendChild(squadType);

    let squadHealth = document.createElement("div");
    squadHealth.className = 'squad_health';
    squadItems.appendChild(squadHealth);

    let stateHealth = document.createElement("div");
    stateHealth.className = 'state_health';
    squadHealth.appendChild(stateHealth);

    let squadStamina = document.createElement("div");
    squadStamina.className = 'squad_stamina';
    squadItems.appendChild(squadStamina);

    let stateStamina = document.createElement("div");
    stateStamina.className = 'state_stamina';
    squadStamina.appendChild(stateStamina);
};
createCard(archerBg, 'archer');
createCard(knightBg, 'knight');
createCard(cavalryBg, 'cavalry');
createCard(healerBg, 'healer');