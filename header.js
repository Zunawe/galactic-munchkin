// PIXI Aliases
const Sprite = PIXI.Sprite;
const Text = PIXI.Text;
const Container = PIXI.Container;

// Global Variables
var selectedCard = null;
var currentMonster = null;
var currentPlayerIndex = -1;
var battlePhase = false;
var players = [];
var discardsDoor = [];
var discardsTreas = [];

function shuffle(array){
    for (let i = array.length - 1; i > 0; --i) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

var Card = (function (){
	var cardPath = 'images/regular_card.png';
	var nameTextStyle = new PIXI.TextStyle({
		fontSize: 22,
		fill: 'white'
	});
	var descTextStyle = new PIXI.TextStyle({
		fontSize: 14,
		fill: 'white',
		wordWrap: true,
		wordWrapWidth: 180
	});

	return function Constructor(fields){
		var _this = this;
		_this.name = fields.name;
		_this.type = fields.type;
		_this.description = fields.description;
		_this.effect = fields.effect;
		_this.power = fields.power;
		_this.badstuff = fields.badstuff;
		_this.temp = fields.tempcolumn === 'Temp';

		_this.isHeld = false;

		var dragging = false;

		_this.pixiObject = new Sprite.fromImage(cardPath);
		_this.pixiObject.interactive = true;
		
		var pixiName = new Text(_this.name, nameTextStyle);
		pixiName.position.set(11, 7);
		_this.pixiObject.addChild(pixiName);

		var pixiDescription = new Text(_this.description, descTextStyle);
		pixiDescription.position.set(11, 190);
		_this.pixiObject.addChild(pixiDescription);

		_this.addTo = function (parent){
			parent.addChild(_this.pixiObject);
		};

		_this.pixiObject.on('mouseover', function (){
			if(_this.isHeld){
				_this.pixiObject.position.y -= 200;
			}
		});

		_this.pixiObject.on('mouseout', function (){
			if(_this.isHeld){
				_this.pixiObject.position.y += 200;
			}
		});

		_this.pixiObject.on('click', function (){
			selectedCard = _this;
		});

		var lastMousePos = {x: 0, y: 0};
		_this.pixiObject.on('mousemove', function (e){
			if(dragging){
				var mousePos = e.data.global;
				_this.pixiObject.position.x += (mousePos.x - lastMousePos.x);
				_this.pixiObject.position.y += (mousePos.y - lastMousePos.y);
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
		card.isHeld = true;
		_this.cards.push(card);
		_this.recalculateCardPositions();
	};

	_this.removeCard = function (card){
		_this.cards.splice(_this.cards.indexOf(card), 1);
		card.isHeld = false;
		_this.recalculateCardPositions();
	}

	_this.addTo = function (parent){
		parent.addChild(_this.pixiObject);
	};

	_this.recalculateCardPositions = function (){
		for(let i = 0; i < _this.cards.length; ++i){
			cards[i].pixiObject.position.set(i * 200, 0);
		}
	};
}

function Player() {
	var _this = this;

	_this.hand = new Hand();
	_this.level = 1;
	_this.power = 1;
	_this.race = undefined;
	_this.class = undefined;
}

var treasureDeck = loadCards(treasureListTSV);
var doorDeck = loadCards(doorListTSV);
treasureDeck.forEach((card) => card.isDoor = false);
doorDeck.forEach((card) => card.isDoor = true);
function loadCards(string){
	var deck = [];
	var lines = string.split('\n');
	var columnNames = lines[0].split('\t').map((s) => s.toLowerCase().replace(/ /g,''));
	for(let i = 1; i < lines.length; ++i){
		if(lines[i].length === 0){
			continue;
		}
		let tokens = lines[i].split('\t');
		let newFields = {};
		for(let j = 0; j < columnNames.length; ++j){
			newFields[columnNames[j]] = tokens[j];
		}
		deck.push(new Card(newFields));
	}
	return deck;
}

//-------------Die Stuff-------------
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}