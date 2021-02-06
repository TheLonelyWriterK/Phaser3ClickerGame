class StartScreen extends Phaser.Scene
{
    constructor()
    {
        // Creates the name for the level
        super("StartScreen")

        // Variables
        this.startButton = null;
        this.startButtonText = null;
    }

    preload()
    {

    }

    create()
    {
        // Calls Main Menu in console
        console.log("Scene: Start Screen")

        // Creates rectangle
        this.startButton = this.add.rectangle(750,450,300,150,0xffffff)

        // Makes rectangle interactive
        this.startButton.setInteractive()

        // Makes start button work
        this.startButton.on("pointerdown",this.onClickStart,this)

        // Adds the start button text
        this.startButtonText = this.add.text(50,50,"Press To Start",)

    }

    update()
    {

    }

    
    onClickStart()
    {
        this.scene.switch("MainMenu")
    }
}