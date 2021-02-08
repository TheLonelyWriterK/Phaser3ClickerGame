class StartScreen extends Phaser.Scene
{
    constructor()
    {
        // Names the level StartScreen
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
        this.startButton = this.add.rectangle(800,450,300,150,0xffffff)

        // Makes rectangle interactive
        this.startButton.setInteractive()
    
        // Makes start button work
        this.startButton.on("pointerdown",this.onClickStart,this)

        // Adds the start button text
        this.startButtonText = this.add.text(800,450,"Press To Start",{color: 'blue',align: 'TOP_CENTER'})

    }

    update()
    {

    }

    
    onClickStart()
    {
        this.scene.switch("MainMenu")
    }
}