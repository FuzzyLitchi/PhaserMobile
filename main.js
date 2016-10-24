var game = new Phaser.Game(1300, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var radius = 100;
var radius_squared;
var joy_x = 1300-120;
var joy_y = 700-120;

function preload() {

}

function create() {

  var style = { font: "65px Arial", fill: "#52bace", align: "center" };
  text = game.add.text(game.world.centerX, 100, "decoding", style);
  text.anchor.set(0.5);
  text.text = "a"

  radius_squared = radius * radius

  game.input.addPointer();
  rect =  new Phaser.Rectangle(100, 100, 10, 10)

}

function update() {

  if (game.input.pointer1.isDown) {

    var temp_dist_squared = dist_squared(game.input.pointer1.x, game.input.pointer1.y, joy_x, joy_y);
    if (temp_dist_squared<radius_squared) {

      rect.x = game.input.pointer1.x
      rect.y = game.input.pointer1.y

    }else{

      var dist = Math.sqrt(temp_dist_squared);
      rect.x = radius * (game.input.pointer1.x - joy_x) / dist + joy_x;
      rect.y = radius * (game.input.pointer1.y - joy_y) / dist + joy_y;

    }
  }

  text.text = "" + dist_squared(game.input.pointer1.x, game.input.pointer1.y, joy_x, joy_y)<radius_squared

  game.debug.geom(rect,'#0fffff');

}

function dist_squared(x1, y1, x2, y2) {

  var x = x2 - x1
  var y = y2 - y1
  return x*x+y*y

}
