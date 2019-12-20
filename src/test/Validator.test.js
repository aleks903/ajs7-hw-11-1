import Validator from '../js/Validator.js';

test('Проверка валидации = 1asdwd', () => {
  const received = new Validator();
  expect(received.validateUsername('1asdwd')).toBe(false);
});

test('Проверка валидации = asdwd1', () => {
  const received = new Validator();
  expect(received.validateUsername('asdwd1')).toBe(false);
});

test('Проверка валидации только латинские буквы фвdwd', () => {
  const received = new Validator();
  expect(received.validateUsername('фвdwd')).toBe(false);
});

test('Проверка валидации более трёх цифр asda1234wd', () => {
  const received = new Validator();
  expect(received.validateUsername('asda1234wd')).toBe(false);
});

test('Проверка валидации = dwd1-dsad', () => {
  const received = new Validator();
  expect(received.validateUsername('dwd123-ds_ad')).toBe(true);
});
