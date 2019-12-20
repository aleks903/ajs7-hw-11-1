import Bowman from './Bowman.js';
import Swordsman from './Swordsman.js';
import Magician from './Magician.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';
import Deamon from './Daemon.js';
import Team from './Team.js';

const heroesD = new Bowman('Bowman', 'Bowman');
const heroesB = new Swordsman('Swordsman', 'Swordsman');
const heroesM = new Magician('Magician', 'Magician');
const heroesU = new Undead('Undead', 'Undead');
const heroesZ = new Zombie('Zombie', 'Zombie');
const heroesDe = new Deamon('Deamon', 'Deamon');

const team = new Team();
team.addAll(heroesD, heroesB, heroesM, heroesU, heroesZ, heroesDe);
for (const itemsT of team) {
  console.log(itemsT);
}
