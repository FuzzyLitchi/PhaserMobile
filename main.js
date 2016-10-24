var game = new Phaser.Game(1300, 700, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

}

function create() {

  game.input.addPointer();
  game.input.addPointer();
  rect1 =  new Phaser.Rectangle(100, 100, 100, 100)
  rect2 =  new Phaser.Rectangle(100, 100, 100, 100)
}

function update() {

  if (game.input.pointer1.isDown) {
    rect1.x = game.input.pointer1.x*2
    rect1.y = game.input.pointer1.y
  }
  if (game.input.pointer2.isDown) {
    rect2.x = game.input.pointer2.x
    rect2.y = game.input.pointer2.y
  }

  game.debug.geom(rect1,'#0fffff');
  game.debug.geom(rect2,'#0fffff');
}
