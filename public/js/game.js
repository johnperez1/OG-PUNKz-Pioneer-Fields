const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 600,
    physics: { default: 'arcade', arcade: { debug: false } },
    scene: { preload, create, update }
};

const game = new Phaser.Game(config);
let player, socket;

function preload() {
    this.load.image('ground', 'assets/punk_ground.png');
    this.load.spritesheet('punk', 'assets/punk_character.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
    socket = io();
    player = this.physics.add.sprite(400, 300, 'punk');
    this.cursors = this.input.keyboard.createCursorKeys();
    
    // Initial Sector Join
    socket.emit('join-sector', 'sector_0_0');
}

function update() {
    // Movement and Proximity logic...
}
