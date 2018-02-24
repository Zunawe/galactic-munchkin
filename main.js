var app = new PIXI.Application({
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
	antialias: true,
});
document.body.appendChild(app.view);

var hand = new PIXI.Container();

PIXI.loader.add('card_sprite.png').load(function (){
	var sprite;
	sprite = new PIXI.Sprite(PIXI.loader.resources['card_sprite.png'].texture);
	sprite.position.set(0, 0);
	hand.addChild(sprite);

	sprite = new PIXI.Sprite(PIXI.loader.resources['card_sprite.png'].texture);
	sprite.position.set(32, 0);
	hand.addChild(sprite);

	sprite = new PIXI.Sprite(PIXI.loader.resources['card_sprite.png'].texture);
	sprite.position.set(64, 0);
	hand.addChild(sprite);
});

app.ticker.add(gameLoop);

var state = play;
hand.y = 100;
var textStyle = new PIXI.TextStyle({
	fill: 'white'
});
var text = new PIXI.Text('Test Text', textStyle);

app.stage.addChild(hand);
app.stage.addChild(text);

function gameLoop(dt){
	state(dt);
}

function play(dt){
	hand ? hand.x += dt : undefined;
}
