class UpgradeScreen extends Phaser.Scene
{
    constructor()
    {
        super("UpgradeScreen")

        // Upgrade Background
        this.upgradeBackground = null;

        // Upgrade Button
        this.upgradeButton = null;
        this.upgradeText = null;

        // Coins Per Second
        this.coinsPerSecondButton = null;
        this.coinsPerSecond = 0;
        this.coinsPerSecondText = null;
        this.coinsPerSecondAmount = 0;
    }

    preload()
    {

    }

    create()
    {
        // Creates the upgrade background
            // Creates the background for the upgrade menu
            this.upgradeBackground = this.add.rectangle(800,450,800,450,0x123456) 

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
            this.coinsPerSecondButton.on("pointerdown",this.onClickClickPerSecUpgrade,this)

            // Creates the coins per second text
            this.coinsPerSecondText = this.add.text(800,80,"Coins Per Second:" + this.coinsPerSecond)
    }

    update()
    {

    }

    onClickUpgrade()
    {
        this.moneyAmount +=1
    }

    onClickClickPerSecUpgrade()
    {
        this.coinsPerSecond += 1;
        this.coinsPerSecondText.setText("Coins Per Second:" + this.coinsPerSecond)

    }
}