const bgColor = [230, 230, 250]
const dropColor = [138, 43, 226]

class Drop {
  x = random(width)
  y = random(-500, 1000)
  z = random(0, 20)
  len = map(this.z, 0, 20, 10, 20)
  yspeed = map(this.z, 0, 20, 1, 20)

  fall() {
    this.y = this.y + this.yspeed
    var grav = map(this.z, 0, 20, 0, 0.2)
    this.yspeed = this.yspeed + grav

    if (this.y > height) {
      this.y = random(-200, -100)
      this.yspeed = map(this.z, 0, 20, 4, 10)
    }
  }

  show() {
    var thick = map(this.z, 0, 20, 1, 2)
    strokeWeight(thick)
    stroke(...dropColor)
    line(this.x, this.y, this.x, this.y + this.len)
  }
}

var drops = [];

function setup() {
  createCanvas(640, 660);
  for (var i = 0; i < 600; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  background(...bgColor);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
