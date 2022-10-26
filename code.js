var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a2770139-1438-47a0-8a67-0619ca988cc7","cd40f1ab-0e3e-4147-9ed7-ed4f36fdee3c"],"propsByKey":{"a2770139-1438-47a0-8a67-0619ca988cc7":{"name":"ship02_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2sZDbppCK.VfNIa0DrTRDKafNL9dC.YG/category_vehicles/ship02.png","frameSize":{"x":400,"y":244},"frameCount":1,"looping":true,"frameDelay":2,"version":"2sZDbppCK.VfNIa0DrTRDKafNL9dC.YG","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":244},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2sZDbppCK.VfNIa0DrTRDKafNL9dC.YG/category_vehicles/ship02.png"},"cd40f1ab-0e3e-4147-9ed7-ed4f36fdee3c":{"name":"ship16_1","sourceUrl":null,"frameSize":{"x":296,"y":396},"frameCount":1,"looping":true,"frameDelay":12,"version":"7PIsrMZx1pU3g9Z73Mu6JhSbU7a_9zFu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":296,"y":396},"rootRelativePath":"assets/cd40f1ab-0e3e-4147-9ed7-ed4f36fdee3c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var spaceship = createSprite(40,200,50,50)
spaceship.setAnimation("ship02_1")
spaceship.scale=0.15
var gameState="start"
var alien1 = createSprite(450,200,20,20)
alien1.setAnimation("ship16_1")
alien1.scale=0.2
var alien2 = createSprite(550,50,20,20)
alien2.setAnimation("ship16_1")
alien2.scale=0.2
var alien3 = createSprite(850,100,20,20)
alien3.setAnimation("ship16_1")
alien3.scale=0.2
var alien4 = createSprite(750,150,20,20)
alien4.setAnimation("ship16_1")
alien4.scale=0.2
var alien5 = createSprite(650,350,20,20)
alien5.setAnimation("ship16_1")
alien5.scale=0.2
var alien6 = createSprite(950,200,20,20)
alien6.setAnimation("ship16_1")
alien6.scale=0.2
var alien7 = createSprite(1050,250,20,20)
alien7.setAnimation("ship16_1")
alien7.scale=0.2
var lives=3
var points=0
createEdgeSprites()
function draw() {
 background("https://wallpaperaccess.com/full/1219623.jpg") 
 drawSprites()
 if(gameState=="start"){
   spaceship.y=200
   alien1.x=950
  alien2.x=550
  alien3.x=850
  alien4.x=750
  alien5.x=650
  alien6.x=1050
  alien7.x=450
  textSize(30)
fill("red")
text("Press SPACE to start",75,200)
text("GET 30 POINTS TO WIN",25,250)
if(keyDown("space")){
  gameState="play"
}
}
if(gameState=="play"){
  alien1.velocityX=-7
  alien2.velocityX=-7
  alien3.velocityX=-7
  alien4.velocityX=-7
  alien5.velocityX=-7
  alien6.velocityX=-7
  alien7.velocityX=-7
  if(spaceship.isTouching(alien1)||spaceship.isTouching(alien2)||spaceship.isTouching(alien3)||spaceship.isTouching(alien4)||spaceship.isTouching(alien5)||spaceship.isTouching(alien6)||spaceship.isTouching(alien7)){
  playSound("assets/category_digital/failure.mp3", false);
 lives=lives-1
 gameState="start"
}
}

if(gameState=="end"){
  spaceship.y=200
  alien1.velocityX=0
  alien2.velocityX=0
  alien3.velocityX=0
  alien4.velocityX=0
  alien5.velocityX=0
  alien6.velocityX=0
  alien7.velocityX=0
  textSize(20)
  fill("red")
  text("GAME OVER Lives:"+lives,100,330)
  text("SCORE: "+points,150,350 )
}
if(lives==0){

  gameState="end"
}
textSize(15)
text("LIVES remaining: "+lives,260,25)
textSize(15)
text("POINTS "+points,40,25)
if(alien1.isTouching(leftEdge)){
alien1.x=950
points=points+1 
}
if(alien2.isTouching(leftEdge)){
alien2.x=550
points=points+1  
}
if(alien3.isTouching(leftEdge)){
alien3.x=850
points=points+1  
}
if(alien4.isTouching(leftEdge)){
alien4.x=750
points=points+1  
}
if(alien5.isTouching(leftEdge)){
alien5.x=650
points=points+1  
}
if(alien6.isTouching(leftEdge)){
alien6.x=1050
points=points+1  
}
if(alien7.isTouching(leftEdge)){
alien7.x=450
points=points+1  
}
if(points==30){
    playSound("assets/category_achievements/melodic_win_1.mp3", false);
  gameState="end"
}
if(keyDown("down")){
  spaceship.y=spaceship.y+6
}
if(keyDown("up")){
  spaceship.y=spaceship.y-6
}
spaceship.collide(edges)
}










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
