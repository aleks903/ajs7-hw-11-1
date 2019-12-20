/**
 * Функция создания персонажа Swordsman, наследуется от Character,
 * принимает на вход имя и тип персонажа
 * @constructor Swordsman
 * @param name имя персонажа
 * @param type тип персонажа
 */
import Character from './Character.js';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this._attack = 40;
    this._defence = 10;
  }
}
