// PIXI Aliases
const Sprite = PIXI.Sprite;
const Text = PIXI.Text;
const Container = PIXI.Container;

var app = new PIXI.Application({
	width: window.innerWidth,
	height: window.innerHeight,
	antialias: true,
	backgroundColor: 0xFFC380
});
var renderer = PIXI.autoDetectRenderer();
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

		var dragging = false;

		_this.pixiObject = new Sprite.fromImage(cardPath);
		_this.pixiObject.interactive = true;
		var pixiTitle = new Text(_this.title, titleTextStyle);
		pixiTitle.position.set(11, 7);
		_this.pixiObject.addChild(pixiTitle);

		_this.addTo = function (parent){
			parent.addChild(_this.pixiObject);
		};

		_this.pixiObject.on('mouseover', function (){
			_this.pixiObject.position.y -= 100;
		});

		_this.pixiObject.on('mouseout', function (){
			_this.pixiObject.position.y += 100;
		});

		_this.pixiObject.on('mousedown', function (){
			dragging = true;
		});

		_this.pixiObject.on('mouseup', function (){
			dragging = false;
		});

		var lastMousePos = {x: 0, y: 0};
		_this.pixiObject.on('mousemove', function (e){
			if(dragging){
				var mousePos = e.data.global;
				_this.pixiObject.position.x += (mousePos.x - lastMousePos.x);
				_this.pixiObject.position.y += (mousePos.y - lastMousePos.y);
				console.log(mousePos.x - lastMousePos.x);
			}
			lastMousePos.x = e.data.global.x;
			lastMousePos.y = e.data.global.y;
		});
	};
})();

function Hand(){
	var _this = this;

	_this.pixiObject = new Container();
	var pixiObject = _this.pixiObject;
	_this.cards = [];
	var cards = _this.cards;

	_this.addCard = function (card){
		card.addTo(pixiObject);
		card.pixiObject.position.set(200 * _this.cards.length, 0);
		_this.cards.push(card);
	}

	_this.addTo = function (parent){
		parent.addChild(_this.pixiObject);
	}
}

var hand = new Hand();
hand.pixiObject.position.set(0, document.documentElement.clientHeight - 100);

for(let i = 0; i < 6; ++i){
	hand.addCard(new Card({title: i + ''}));
}
hand.addTo(app.stage);

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
function drawCrossAt(x, y){
	var vert = new PIXI.Graphics();
	var horiz = new PIXI.Graphics();

	vert.beginFill(0x0);
	vert.drawRect(x, 0, 1, 100000);
	horiz.beginFill(0x0);
	horiz.drawRect(0, y, 100000, 1);

	app.stage.addChild(vert);
	app.stage.addChild(horiz);
}