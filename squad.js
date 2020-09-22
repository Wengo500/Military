class Squad extends Unit {
    constructor(defaultResurces) {
        super()
        this._squad = [];
        this.addResources(defaultResurces);
        this.maxUnits = 4;
        this.squadHealth = this.maxHealth * this.maxUnits;
    }
    squadHealth() {
        return this._squad.forEach((unit) => unit.maxHealth * this.maxUnits)
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
    array.forEach(element => {
        res += element.distance;
    });
    return res /= 4;
}
const mathHealth = (array, res = 0) => {
    array.forEach(element => {
        res += element.health;
    });
    return res /= 4;
}
const squodDead = (squad, index, img) => {
    if (squad <= 0) {
        document.getElementsByClassName('squad')[index].style = `background: url(${img}) no-repeat 1%; background-size: 100%;`;
        document.getElementsByClassName('squad_health')[index].style = `border: solid gray 1px; box-shadow: gray 0 0 7px`;
        document.getElementsByClassName('squad_stamina')[index].style = `border: solid gray 1px; box-shadow: gray 0 0 7px`;
        document.getElementsByClassName('state_stamina')[index].style = `background:  gray;`;
        document.getElementsByClassName('squad_character')[index].style = `color:  gray; text-shadow: 0 0 3px black, 0 0 1em gray, 0 0 2em gray`;
    }
}