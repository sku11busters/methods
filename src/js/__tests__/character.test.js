import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../character';

test('Создание персонажа с некорректным именем', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
    expect(() => new Character('ОченьДлинноеИмя', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
});

test('Создание персонажа с некорректным типом', () => {
    expect(() => new Character('Robin', 'Archer')).toThrow('Некорректный тип персонажа');
});

test('Создание персонажа Bowman', () => {
    const bowman = new Bowman('Robin');
    expect(bowman.name).toBe('Robin');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
});

test('Метод levelUp', () => {
    const swordsman = new Swordsman('Arthur');
    swordsman.levelUp();
    expect(swordsman.level).toBe(2);
    expect(swordsman.attack).toBe(48); // 40 * 1.2
    expect(swordsman.defence).toBe(12); // 10 * 1.2
    expect(swordsman.health).toBe(100);
});

test('Метод levelUp для мертвого персонажа', () => {
    const magician = new Magician('Merlin');
    magician.health = 0;
    expect(() => magician.levelUp()).toThrow('Нельзя повысить левел умершего');
});

test('Метод damage', () => {
    const daemon = new Daemon('Azazel');
    daemon.damage(50);
    expect(daemon.health).toBeCloseTo(70); // 100 - 50 * (1 - 40 / 100)
});

test('Метод damage с отрицательным здоровьем', () => {
    const undead = new Undead('Zombie');
    undead.damage(200);
    expect(undead.health).toBe(0);
});
