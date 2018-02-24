var app = new PIXI.Application({
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
	antialias: true
});
document.body.appendChild(app.view);

var Card = (function (){
	var cardPath = 'images/regular_card.png';
	var cardTextStyle = new PIXI.TextStyle({
		fontSize: 22,
		fill: 'white'
	});

	return function Constructor(fields){
		var _this = this;
		_this.title = fields.title;

		_this.pixiObject = new PIXI.Container();
		_this.pixiObject.addChild(new PIXI.Sprite.fromImage(cardPath));
	};
})();

var testCard = new Card({title: 'asdf'});
app.stage.addChild(testCard.pixiObject);

function play(dt){
	// Empty
}

var state = play;
function gameLoop(dt){
	state(dt);
}
app.ticker.add(gameLoop);
