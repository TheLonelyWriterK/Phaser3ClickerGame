/** @type Phaser.Types.Core.GameConfig */
var config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 900,
    scaleMode: Phaser.Scale.FIT,
    backgroundColor: 0x123456,

    scene: [StartScreen,MainMenu,UpgradeScreen]

}

new Phaser.Game(config)
