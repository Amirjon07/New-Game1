class Form {

  constructor() {
  /*  this.input = createInput("Type Here");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2')*/
  }
 /* hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  this.title.hide()
  }*/

  display(){
    var title=createElement('h2')
  title.html("Welcome to Castle Siege!");
  title.position(displayWidth/2-50, 0);
var input=createInput("Type Here")
    input.position(displayWidth/2-40, displayHeight/2-80);
    var button = createButton('Play');
    button.position(displayWidth/2+30, displayHeight/2);
    button.mousePressed(function(){
    input.hide();
    button.hide();
     var name = this.input.value();
     // playerCount+=1;
     // player.index = playerCount;
     // player.update();
      //player.updateCount(playerCount);
      var greeting = createElement('h2');
      greeting.html("Hello " + name)
      greeting.position(displayWidth/2-70, displayHeight/4);
    });

  }
}