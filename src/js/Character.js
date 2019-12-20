/**
 * Функция создания персонажей, принимает на вход имя и тип персонажа
 * @constructor Character
 * @param name имя персонажа
 * @param type тип персонажа
 */
export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._health = 100;
    this.level = 1;
    this._attack = 0;
    this._defence = 0;
    this.distanceAttack = 1;
    this._powerMod = false;
    this.onPowerMod = false;
    this._stoned = false;
  }
  /**
  * Метод повышающий уровень персонажа
  */

  levelUp() {
    if (this.health < 1) throw new Error('Нельзя повысить левел умершего');
    this.level += 1;
    this._attack += this.attack * 0.2;
    this._defence += this.defence * 0.2;
    this._health = 100;
  }

  set powerMod(value) {
    if (value === true) {
      this._powerMod = this.onPowerMod === false;
      this.onPowerMod = true;
    } else {
      this._powerMod = false;
    }
  }

  get powerMod() {
    return this._powerMod;
  }

  get attack() {
    return this._powerMod === true ? (this._attack * 2) : this._attack;
  }

  set attack(value) {
    this._attack = value;
  }

  get defence() {
    return this._powerMod === true ? (this._defence * 2) : this._defence;
  }

  set defence(value) {
    this._defence = value;
  }

  get health() {
    return this._powerMod === true ? (this._health * 2) : this._health;
  }

  set health(value) {
    this._health = value;
  }
}
