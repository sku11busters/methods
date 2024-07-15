import Character from '../class/character';

test('правильно создается объект', () => {
  const character = new Character('character', 'Bowman');
  const correct = {
    name: 'character',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: null,
    defence: null,
  };
  expect(character).toEqual(correct);
});

test('Ошибка при некорректном имени (меньше 2 символов)', () => {
  expect(() => new Character('a', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Ошибка при некорректном имени (больше 10 символов)', () => {
  expect(() => new Character('longcharactername', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Ошибка при некорректном типе', () => {
  expect(() => new Character('character', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('levelUp повышает уровень, атаку, защиту и здоровье', () => {
  const character = new Character('character', 'Bowman');
  character.attack = 10;
  character.defence = 10;
  character.levelUp();
  const expected = {
    name: 'character',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 12,
    defence: 12,
  };
  expect(character).toEqual(expected);
});

test('levelUp выбрасывает ошибку, если здоровье равно 0', () => {
  const character = new Character('character', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('damage уменьшает здоровье персонажа', () => {
  const character = new Character('character', 'Bowman');
  character.defence = 50;
  character.damage(20);
  const expected = {
    name: 'character',
    type: 'Bowman',
    health: 90,
    level: 1,
    attack: null,
    defence: 50,
  };
  expect(character).toEqual(expected);
});

test('damage не уменьшает здоровье ниже 0', () => {
  const character = new Character('character', 'Bowman');
  character.defence = 0;
  character.damage(200);
  const expected = {
    name: 'character',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: null,
    defence: 0,
  };
  expect(character).toEqual(expected);
});