// PIXI Aliases
const Sprite = PIXI.Sprite;
const Text = PIXI.Text;
const Container = PIXI.Container;

var app = new PIXI.Application({
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight,
	antialias: true,
	backgroundColor: 0xFFC380
});
document.body.appendChild(app.view);

var Card = (function (){
	var cardPath = 'images/regular_card.png';
	var titleTextStyle = new PIXI.TextStyle({
		fontSize: 22,
		fill: 'white'
	});

	return function Constructor(fields){
		var _this = this;
		_this.title = fields.title;
		_this.type = fields.type;
		_this.description = fields.description;
		_this.effect = fields.effect;
		_this.power = fields.power;
		_this.badstuff = fields.badstuff;

		var bgSprite = new Sprite.fromImage(cardPath);
		var pixiTitle = new Text(_this.title, titleTextStyle);
		pixiTitle.position.set(11, 7);

		_this.pixiObject = new Container();
		_this.pixiObject.addChild(bgSprite);
		_this.pixiObject.addChild(pixiTitle);

		_this.addTo = function (parent){
			parent.addChild(_this.pixiObject);
		}
	};
})();

function Hand(){
	var _this = this;

	_this.pixiObject = new Container();
	_this.cards = [];

	_this.addCard = function (card){
		card.addTo(_this.pixiObject);
		card.pixiObject.position.set(200 * _this.cards.length, 0);
		_this.cards.push(card);
	}

	_this.addTo = function (parent){
		parent.addChild(_this.pixiObject);
	}
}

var hand = new Hand();
hand.pixiObject.position.set(32, 32);

for(let i = 0; i < 3; ++i){
	hand.addCard(new Card({title: i + ''}));
}
hand.addTo(app.stage);
var testCard = new Card({title: 'asdf'});

function play(dt){
	// Empty
}

var state = play;
function gameLoop(dt){
	state(dt);
}
app.ticker.add(gameLoop);

//-------------Die Roll---------------
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  app.stage.addChild(new PIXI.Sprite.fromImage("images/die-" + result + ".png"));
};
//------------------------------------










