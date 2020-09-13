class Squad {
    constructor(defaultResurces) {
        this._squad = [];
        this.addResources(defaultResurces);
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
}