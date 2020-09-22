const archerImg = new Image();
const knightImg = new Image();
const cavalryImg = new Image();
const healerImg = new Image();

archerImg.src = "img/archer.png";
knightImg.src = "img/knightImg.png";
cavalryImg.src = "img/cavalryImg.png";
healerImg.src = "img/healer.png";

class Unit {
    constructor(type, health, distance, damage) {
        this.type = type;
        this.health = this.maxHealth = health;
        this.distance = this.maxDistance = distance;
        this.damage = damage;
    }

    unitDead1 = () => {
        if (this.health <= 0) {
            console.log('Dead');
        }
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

const unitHealth = (arr) => {
    return arr[0].health <= 0 ? arr.splice(0, 1) : arr[0].health -= 10;
}