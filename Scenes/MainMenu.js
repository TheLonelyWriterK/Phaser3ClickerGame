class MainMenu extends Phaser.Scene
{
    constructor()
    {
        // Names the level MainMenu
        super("MainMenu")

        // Variables
            // Money Button
            this.moneyButton = null;
            this.moneyText = null;
            this.money = 0;
            this.moneyAmount = 1;

            // Upgrade Menu Button
            this.upgradeMenuButton = null;
            this.upgradeMenuButtonText = null;

    }

    preload()
    {

    }

    create()
    {   
        // Money Button
            // Creates the button that will add money
            this.moneyButton = this.add.rectangle(800,450,50,50,0xff0000)

            // Sets button as interactive
            this.moneyButton.setInteractive()

            // Turns the button into an on state of interaction
            this.moneyButton.on("pointerdown",this.onClickAddMoney,this)

            // Creates the text that displays the money
            this.moneyText = this.add.text(800,50,"Money: " + this.money)


        // Upgrade Menu Button
            // Creates the button that opens the upgrade menu
            this.upgradeMenuButton = this.add.rectangle(800,100,100,50,0xff0000)

            // Sets upgradeMenuButton as interactive
            this.upgradeMenuButton.setInteractive()

            // Turns the upgradeMenuButton into an on state of interaction
            this.upgradeMenuButton.on("pointerdown",this.onClickUpgradeMenuOpen,this)
    }

    update()
    {
        
    }

    // Creates a function for clicking the red square and adding money
    onClickAddMoney()
    {
        // Adds money amount to money
        this.money += this.moneyAmount;

        // Changes the active display text for the money amount
        this.moneyText.setText("Money: " + this.money)
    }

    onClickUpgradeMenuOpen()
    {
        // launches the upgrade screen
        this.scene.launch("UpgradeScreen")
    }
}