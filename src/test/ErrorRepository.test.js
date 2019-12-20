import ErrorRepository from '../js/ErrorRepository.js';

test('Проверка добавить ошибку', () => {
  const received = new ErrorRepository();
  received.errSet('test', 'test1');
  expect(received.translate('test')).toBe('test1');
});

test('Проверка ошибки нет', () => {
  const received = new ErrorRepository();
  received.errSet('test1', 'test1');
  expect(received.translate('test')).toBe('Unknown error');
});
