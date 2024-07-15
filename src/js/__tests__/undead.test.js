import Undead from '../class/Undead';

test('правильно создается объект', () => {
  const undead = new Undead('undead');
  const correct = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(correct);
});