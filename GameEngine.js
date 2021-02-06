var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    // scaleMode: Phaser.Scale.FIT,
    scene: [StartScreen,MainMenu]

}

new Phaser.Game(config)
