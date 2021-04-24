class Form{
    constructor(){
        this.heading = createElement('h1');
        this.heading2 = createElement('h1');
        this.input = createInput("Name");
        this.button1 = createButton("Play");
        this.button2 = createButton("Reset");
    }
    hide(){
        this.button1.hide();
        this.input.hide();
    }

    display(){
        this.heading.html("Ship Racing Game");
        this.heading.position(displayWidth/2, displayHeight-800);
        this.input.position(displayWidth/2,displayHeight-600);
        this.button1.position(displayWidth/2,displayHeight-500);
        this.button2.position(displayWidth-100,20);
        this.button1.mousePressed(()=>{
                this.input.hide();
                this.button1.hide();
                player.name = this.input.value();
                player.distance=0;
                
                console.log('player details',player);
                //console.log('adding player',playerCount);
                playerCount+=1;
                player.index=playerCount;
                player.updatePlayerCount(playerCount);
                //console.log(playerCount)
                player.updateName();
                this.heading2.html("Waiting for players...")
                this.heading2.position(displayWidth/2, displayHeight-600);
            });

        this.button2.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            //Player.updateCarsAtEnd(0);
          });
      
    }
}