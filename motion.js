class Robot {
  constructor(name) {
    this.name = name;
    this.x = 0;
    this.y = 0;
    this.direction = "N";
  }

  turnRight() {
    const order = ["N", "E", "S", "W"];
    this.direction = order[(order.indexOf(this.direction) + 1) % 4];
  }

  turnLeft() {
    const order = ["N", "E", "S", "W"];
    this.direction = order[(order.indexOf(this.direction) + 3) % 4];
  }

  move() {
    if (this.direction === "N") this.y++;
    if (this.direction === "S") this.y--;
    if (this.direction === "E") this.x++;
    if (this.direction === "W") this.x--;
  }

  run(commands) {
    for (const c of commands) {
      if (c === "F") this.move();
      if (c === "R") this.turnRight();
      if (c === "L") this.turnLeft();
    }
    console.log(`${this.name} is at (${this.x}, ${this.y}) facing ${this.direction}`);
  }
}

const bot = new Robot("R2-JS");
bot.run("FFRFFLF"); // F = forward, R = turn right, L = turn left
// Output: R2-JS is at (2, 3) facing N