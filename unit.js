const archerImg = new Image();
const knightImg = new Image();
const cavalryImg = new Image();

archerImg.src = "img/archer.png";
knightImg.src = "img/knightImg.png";
cavalryImg.src = "img/cavalryImg.png";

class Unit {
    constructor(type, health, distance, damage) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        this.damage = damage;
    }
    isReadyToMuve() {
        return this.distance > 0;
    }
    isReadyToFight() {
        return this.health > 0;
    }
    restore() {
        this.health = this.maxHealth;
        this.distance = this.maxDistance;
    }
    clone() {
        return new Unit(this.type, this.maxHealth, this.maxDistance, this.damage);
    }
};