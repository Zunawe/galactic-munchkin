var app = new PIXI.Application({
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
	antialias: true,
});
document.body.appendChild(app.view);

var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
var hand = new PIXI.Container();

PIXI.loader.add('images/monster_card.png').load(function (){
	var sprite;
	var title;

	sprite = new PIXI.Sprite(PIXI.loader.resources['images/monster_card.png'].texture);
	sprite.position.set(0, 0);
	sprite.interactive = true;
	sprite.on('click', function (){
		console.log('clicked');
	});

	sprite.on('mouseover', function (){
		hand.y -= 100;
	});

	sprite.on('mouseout', function (){
		hand.y += 100;
	});
	hand.addChild(sprite);

	title = new PIXI.Text('Text Title', cardTextStyle);
	title.position.set(11, 7);
	hand.addChild(title);
});

app.ticker.add(gameLoop);

var state = play;
hand.y = renderer.height - 100;
hand.x = renderer.width / 2;

app.stage.addChild(hand);

function gameLoop(dt){
	state(dt);
}

function play(dt){
	// hand ? hand.x += dt : undefined;
}
