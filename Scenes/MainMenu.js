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

            // Upgrade Button
            this.upgradeButton = null;
            this.upgradeText = null;

            // Coins Per Second
            this.coinsPerSecondButton = null;
            this.coinsPerSecond = null;
            this.coinsPerSecondText = null;
            this.coinsPerSecondAmount = 0;

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
        
        // Upgrade Button
            // Creates the button that will upgrade amount of money added
            this.upgradeButton = this.add.rectangle(800,300,50,50,0x123456)

            // Sets button as interactive
            this.upgradeButton.setInteractive()

            // Turns the button into an on state of interaction
            this.upgradeButton.on("pointerdown",this.onClickUpgrade,this)

        // Coins Per Second Upgrade
            // Creates a button that will add a coins per second upgrade
            this.coinsPerSecondButton = this.add.rectangle(800,600,50,50,0xff0000)

            // Sets button as interactive
            this.coinsPerSecondButton.setInteractive()

            // Turns the button into an on state of interaction


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

    onClickUpgrade()
    {
        this.moneyAmount +=1
    }

    onClickClickPerSecUpgrade()
    {

    }


}