class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val();
        });
        return gameState
    }
    updateState(data){
        database.ref('/').update({
            gameState:data,
        });
    }
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getPlayerCount();
          }
          form = new Form();
          form.display();
        }
        ship1 = createSprite(200,100);
        ship2 = createSprite(200,300);
        ship3 = createSprite(200,500);
        ships = [ship1,ship2,ship3];
    }

play(){
    //form.hidee();
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("");
      //image(sea,0,-displayHeight*4,displayWidth,displayHeight*5)
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x=50;
      var y=50;

      for(var plr in allPlayers){

        index = index + 1 ;
        y = y + 100;

        x = displayWidth - allPlayers[plr].xPos;
        ships[index-1].x = x;
        ships[index-1].y = y;

        if (index === player.index){
          fill("red");
          strokeWeight(3);
          ellipse(ships[index-1].x,ships[index-1].y,60,60);
          camera.position.x = ships[index-1].y;
          camera.position.y = displayWidth/2; 
        }
      }
    }
    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.distance +=10
        player.updateName();
      }

      //if(player.xPos>3900){
      //  gameState = 2;
      //}
  
      drawSprites();
    }
    end(){
      alert("Game Over");
    }
  }