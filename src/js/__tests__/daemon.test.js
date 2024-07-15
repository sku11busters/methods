import Daemon from '../class/Daemon';

test('правильно создается объект', () => {
  const daemon = new Daemon('daemon');
  const correct = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(correct);
});