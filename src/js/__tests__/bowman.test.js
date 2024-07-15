import Bowman from '../class/Bowman';

test('правильно создается объект', () => {
  const bowman = new Bowman('bowman');
  const correct = {
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(correct);
});