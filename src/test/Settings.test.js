import Settings from '../js/Settings.js';

test('Проверка значений default', () => {
  const received = new Settings();
  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(Object.fromEntries(received.settings)).toEqual(Object.fromEntries(expected));
});

test('Проверка значений пользователя', () => {
  const received = new Settings();
  received.userSettings.set('theme', 'light');
  const expected = new Map([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);
  expect(Object.fromEntries(received.settings)).toEqual(Object.fromEntries(expected));
});
