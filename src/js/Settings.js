/**
 * Функция настроек пользователя
 * @constructor Character
 */
export default class Settings {
  constructor() {
    this.default = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.allSetings = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };

    this.userSettings = new Map();
  }

  get settings() {
    for (const item of this.userSettings) {
      this.default.set(...item);
    }
    return this.default;
  }
}
