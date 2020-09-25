class Squad {
    constructor(defaultResurces) {
        this._squad = [];
        this.addResources(defaultResurces);
        this.maxUnits = 4;
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
    mathHealth(res = 0) {
        this._squad.forEach(element => {
            res += element.health;
        });
        return res /= 4;
    }

    pushNewUnit(unit) {
        unit.push(unit[0].clone());
    }

};