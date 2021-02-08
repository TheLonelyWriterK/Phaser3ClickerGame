class UpgradeScreen extends Phaser.Scene
{
    constructor()
    {
        super("UpgradeScreen")

        // Upgrade Button
        this.upgradeButton = null;
        this.upgradeText = null;


        // Coins Per Second
        this.coinsPerSecondButton = null;
        this.coinsPerSecond = 0;
        this.coinsPerSecondAmount = 0;


        // Creates a variable that allows to access variables from the main menu
        this.menu = null;


        // Upgrade Screen Exit Button
        this.upgradeExitButton = null;
        this.upgradeExitButtonText = null;




    }

    init()
    {
        // allows to access variables from MainMenu.js
        this.menu = this.scene.get("MainMenu");

    }

    preload()
    {

    }

    create()
    {
        // Upgrade Button
            // Creates the button that will upgrade amount of money added
            this.upgradeButton = this.add.rectangle(800,300,100,50,0xff0000)
            // Sets button as interactive
            this.upgradeButton.setInteractive()

            // Turns the button into an on state of interaction
            this.upgradeButton.on("pointerdown",this.onClickUpgrade,this)


        // Coins Per Second Upgrade
            // Creates a button that will add a coins per second upgrade
            this.coinsPerSecondButton = this.add.rectangle(800,600,100,50,0xff0000)

            // Sets button as interactive
            this.coinsPerSecondButton.setInteractive()

            // Turns the button into an on state of interaction
            this.coinsPerSecondButton.on("pointerdown",this.onClickClickPerSecUpgrade,this)


        // Exits the upgrade screen
            // Creates the button for exiting the upgrade screen
            this.upgradeExitButton = this.add.rectangle(1600,900,50,50,0xff0000)

            // Sets up button as interactive
            this.upgradeExitButton.setInteractive()

            // turns the button into an on state of interaction
            this.upgradeExitButton.on("pointerdown",this.onClickBackToMainMenu,this)
           

        // Money Display
            // Displays the money at the top
            this.moneyText = this.add.text(800,50,"Money: " + this.menu.money)

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

    onClickBackToMainMenu()
    {
        this.scene.switch ("MainMenu")

    onClickClickPerSecUpgrade()
    {
        console.log("test")
        this.coinsPerSecond += 1;
        this.coinsPerSecondText.setText("Coins Per Second:" + this.menu.coinsPerSecond)

    }
}
}