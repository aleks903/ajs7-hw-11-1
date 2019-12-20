/**
 * Функция создания персонажа Bowman, наследуется от Character,
 * принимает на вход имя и тип персонажа
 * @constructor Bowman
 * @param name имя персонажа
 * @param type тип персонажа
 */
import Character from './Character.js';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this._attack = 25;
    this._defence = 25;
  }
}
