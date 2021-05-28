class Game{
    constructor(){


    }

    GetState(){
        var GameStateRef=database.ref("GameState")
        GameStateRef.on("value",(data)=>{
         GameState=data.val();
        })
    }

    Update(State){
        database.ref('/').update({
            GameState:State
        })   
    }
    
    async Start(){
        if(GameState===0){
            text("Please wait while others join !" , 100,300)
            player=new Player()
            var PlayerCountRef=await database.ref('PlayerCount').once("value")
                if(PlayerCountRef.exists()){
                    
                    PlayerCount=PlayerCountRef.val()
                    player.GetCount()

                }
            form=new Form()
            form.display()
        }
    }

Play(){
form.hide()
Player.GetPlayerInfo()
if(AllPlayers !== undefined){
    var display_position=150;
    for(var plr in AllPlayers){
        if(plr==="Player"+player.index)
        fill("red")
        else
        fill("black")
        display_position+=20
//Player 1 ---> 3500
        textSize(20)
        text(AllPlayers[plr].name+"="+AllPlayers[plr].distance,200,display_position)
    }

}
if(keyIsDown(UP_ARROW)&& player.index!==null){ //small p
    player.distance+=40
    player.update()
}

}


}