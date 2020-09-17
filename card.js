const knightBg = "img/knight.jpg";
const archerBg = "img/arrow.jpg";
const cavalryBg = "img/cavalry.jpg";

let panel = document.createElement("div");
panel.className = 'panel';
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

document.getElementsByClassName('createUnit')[0].addEventListener('click', () => {
    archer.push(archer[0].clone());
});
document.getElementsByClassName('createUnit')[1].addEventListener('click', () => {
    knight.push(knight[0].clone());
});
document.getElementsByClassName('createUnit')[2].addEventListener('click', () => {
    cavalry.push(cavalry[0].clone());
});

const mathHealth = (array, res = 0) => {
    array.forEach(element => {
        res += element.health;
        console.log(res);
    });
}
mathHealth(archer);

const stateHealthFnc = (a = 100, b = 100, c = 100) => {

    document.getElementsByClassName('squad_health')[0].addEventListener('click', () => {
        document.getElementsByClassName("state_health")[0].style.width = `${a -=10}%`;
    });
    document.getElementsByClassName('squad_health')[1].addEventListener('click', () => {
        document.getElementsByClassName("state_health")[1].style.width = `${b -= 20}%`;
    });
    document.getElementsByClassName('squad_health')[2].addEventListener('click', () => {
        document.getElementsByClassName("state_health")[2].style.width = `${c -= 10}%`;
    });
};
stateHealthFnc();

const stateStaminaFnc = (a = 100, b = 100, c = 100) => {

    document.getElementsByClassName('squad_stamina')[0].addEventListener('click', () => {
        document.getElementsByClassName("state_stamina")[0].style.width = `${a -= 20}%`;
    });
    document.getElementsByClassName('squad_stamina')[1].addEventListener('click', () => {
        document.getElementsByClassName("state_stamina")[1].style.width = `${b -= 10}%`;
    });
    document.getElementsByClassName('squad_stamina')[2].addEventListener('click', () => {
        document.getElementsByClassName("state_stamina")[2].style.width = `${c -= 5}%`;
    });
};
stateStaminaFnc();