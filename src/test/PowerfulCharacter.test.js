import Daemon from '../js/Daemon.js';

test('Проверка атаки Daemon: distance=1, attack=100, stoned=false', () => {
  const received = new Daemon();
  received.distanceAttack = 1;
  received.attack = 100;

  expect(received.attack).toBe(100);
});

test('Проверка атаки Daemon: distance=2, attack=100, stoned=false', () => {
  const received = new Daemon();
  received.distanceAttack = 2;
  received.attack = 100;

  expect(received.attack).toBe(90);
});

test('Проверка атаки Daemon: distance=3, attack=100, stoned=false', () => {
  const received = new Daemon();
  received.distanceAttack = 3;
  received.attack = 100;

  expect(received.attack).toBe(80);
});

test('Проверка атаки Daemon: distance=4, attack=100, stoned=false', () => {
  const received = new Daemon();
  received.distanceAttack = 4;
  received.attack = 100;

  expect(received.attack).toBe(70);
});

test('Проверка атаки Daemon: distance=5, attack=100, stoned=false', () => {
  const received = new Daemon();
  received.distanceAttack = 5;
  received.attack = 100;

  expect(received.attack).toBe(60);
});

test('Проверка атаки Daemon: distance=2, attack=100, stoned=true', () => {
  const received = new Daemon();
  received.distanceAttack = 2;
  received.stoned = true;
  received.attack = 100;

  expect(received.attack).toBe(85);
});

test('Проверка установки, stoned=true', () => {
  const received = new Daemon();
  received.stoned = true;

  expect(received.stoned).toBe(true);
});
