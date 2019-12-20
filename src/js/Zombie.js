/**
 * Функция создания персонажа Zombie, наследуется от Character,
 * принимает на вход имя и тип персонажа
 * @constructor Zombie
 * @param name имя персонажа
 * @param type тип персонажа
 */
import Character from './Character.js';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this._attack = 40;
    this._defence = 10;
  }
}
