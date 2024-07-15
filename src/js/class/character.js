export default class Character {
    constructor(name, type) {
      const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Имя должно быть строкой от 2 до 10 символов');
      }
      if (!types.includes(type)) {
        throw new Error('Некорректный тип персонажа');
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = null;
      this.defence = null;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить левел умершего');
      }
      this.level += 1;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health > 0) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
          this.health = 0;
        }
      }
    }
}