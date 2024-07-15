import Magician from '../class/Magician';

test('правильно создается объект', () => {
  const magician = new Magician('magician');
  const correct = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(correct);
});