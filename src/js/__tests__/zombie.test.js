import Zombie from '../class/Zombie';

test('правильно создается объект', () => {
  const zombie = new Zombie('zombie');
  const correct = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(correct);
});