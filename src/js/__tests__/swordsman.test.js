import Swordsman from '../class/Swordsman';

test('правильно создается объект', () => {
  const swordsman = new Swordsman('swordsman');
  const correct = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(correct);
});