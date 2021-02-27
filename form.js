class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Next');
    this.play = createButton('Play')
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.instructions = createElement('h3')
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      var name = this.input.value();
      
      this.greeting.html("Hello " + name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      this.instructions.html("How To play: You can move the head of the cannon with your mouse and you can press SPACE to shoot from cannon. ")
      this.instructions.position(displayWidth/2,displayHeight/2)
      this.play.position(displayWidth/2+50,displayHeight/2)
     
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
display2(){
  this.play.mousePressed(()=>{
    this.greeting.hide()
    this.instructions.hide()
this.play.hide()
flyingMan.display()
cannon.display()
   })
}
}