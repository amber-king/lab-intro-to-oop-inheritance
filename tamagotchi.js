// Create class below
class Tamagotchi {
  constructor(
    name,
    energy = 9,
    full = 8,
    mood = 6,
    sick = false,
    rehomed = false
  ) {
    this.name = name;
    this.energy = energy;
    this.full = full;
    this.mood = mood;
    this.sick = sick;
    this.rehomed = rehomed;
  }
  greet() {}
  status() {}
  eat() {}
  medicate() {}
  play() {}
  sleep() {}
  timePasses() {}
  badGuardian() {}
}
// Do not edit below this line
module.exports = Tamagotchi;
