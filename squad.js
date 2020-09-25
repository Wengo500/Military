class Squad {
    constructor(defaultResurces) {
        this._squad = [];
        this.addResources(defaultResurces);
        this.maxUnits = 4;
    }
    qwe(res = 0) {
        this._squad.forEach(element => res += element.distance);
        return res /= 4;
    }

    addResources(defaultResurces) {
        this._squad = [...this._squad, ...defaultResurces];
    }
    isReadyToMove() {
        return this._squad.some((unit) => unit.isReadyToMove());
    }
    isReadyToFight() {
        return this._squad.some((unit) => unit.isReadyToFight());
    }
    restore() {
        this._squad.forEach((unit) => unit.restore());
    }
    getReadyToFight() {
        return this._squad.fill((unit) => unit.isReadyToFight());
    }
    clone() {
        return this._squad.map((unit) => unit.clone());
    }
};


const mathDistance = (array, res = 0) => {
    array.forEach(element => res += element.distance);
    return res /= 4;
}
const mathHealth = (array, res = 0) => {
    array.forEach(element => res += element.health);
    return res /= 4;
}

const unitDead = (arr) => {
    arr[0].health <= 0 ? arr.splice(0, 1) : arr[0].health -= 10;
}
const unitStamina = (arr) => {
    mathDistance(arr) <= 0 ? console.log('Squad is not ready to move') : arr.forEach(element => element.distance -= 10);
}

const stateHealthFnc = () => {
    document.getElementsByClassName('squad_health')[0].addEventListener('click', () => {
        unitDead(archer);
        squodDead(archer, 0, archerDeadBg)
        document.getElementsByClassName("state_health")[0].style.width = `${mathHealth(archer)}%`;
    });
    document.getElementsByClassName('squad_health')[1].addEventListener('click', () => {
        unitDead(knight)
        squodDead(knight, 1, knightDeadBg)
        document.getElementsByClassName("state_health")[1].style.width = `${mathHealth(knight)}%`;
    });
    document.getElementsByClassName('squad_health')[2].addEventListener('click', () => {
        unitDead(cavalry)
        squodDead(cavalry, 2, cavalryDeadBg)
        document.getElementsByClassName("state_health")[2].style.width = `${mathHealth(cavalry)}%`;
    });
};
stateHealthFnc();


const stateStaminaFnc = () => {
    document.getElementsByClassName('squad_stamina')[0].addEventListener('click', () => {
        unitStamina(archer)
        document.getElementsByClassName("state_stamina")[0].style.width = `${mathDistance(archer)}%`;
    });
    document.getElementsByClassName('squad_stamina')[1].addEventListener('click', () => {
        unitStamina(knight)
        document.getElementsByClassName("state_stamina")[1].style.width = `${mathDistance(knight)}%`;
    });
    document.getElementsByClassName('squad_stamina')[2].addEventListener('click', () => {
        unitStamina(cavalry)
        document.getElementsByClassName("state_stamina")[2].style.width = `${mathDistance(cavalry)}%`;
    });
};
stateStaminaFnc();

const squodDead = (squad, index, img) => {
    if (squad <= 0) {
        document.getElementsByClassName('squad')[index].style = `background: url(${img}) no-repeat 1%; background-size: 100%;`;
        document.getElementsByClassName('squad_health')[index].style = `border: solid gray 1px; box-shadow: gray 0 0 7px`;
        document.getElementsByClassName('squad_stamina')[index].style = `border: solid gray 1px; box-shadow: gray 0 0 7px`;
        document.getElementsByClassName('state_stamina')[index].style = `background:  gray;`;
        document.getElementsByClassName('squad_character')[index].style = `color:  gray; text-shadow: 0 0 3px black, 0 0 1em gray, 0 0 2em gray`;
    }
}