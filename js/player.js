class Player{
    constructor(){
    this.name=null
    this.distance=0
    this.index=null
    }
 GetCount(){
    var PlayerCountRef=database.ref("PlayerCount")
    PlayerCountRef.on("value",(data)=>{
    PlayerCount=data.val();
 })
 }

 UpdateCount(Count){
    database.ref('/').update({
    PlayerCount:Count
})
 }

 Update(){
    var PlayerIndex="Players/Player"+this.index
    database.ref(PlayerIndex).set({
        Name:this.name,
        Distance:this.distance
     
 })
 }
static GetPlayerInfo(){
    var PlayerInfoRef = database.ref('Players')
    PlayerInfoRef.on("value", (data)=> {
        AllPlayers = data.val();
    })

}

 
    
}