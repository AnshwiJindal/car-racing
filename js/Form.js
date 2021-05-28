class Form{
   constructor() {
   this.input=createInput("Enter Your Name")
   this.button=createButton("Play")
   this.greeting=createElement("h3")
   }
   hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
   }
   display(){
    var title=createElement("h2")
    title.html("Car Racing Game")
    title.position(200,100)

    
    this.button.position(350,300)
    this.input.position(200,200)
    this.greeting.position(200,350)

    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
    player.Name=this.input.value();
    PlayerCount+=1
    player.Update()
    player.UpdateCount(PlayerCount)
    this.greeting.html("hello"+ player.Name)
    })
   }
}