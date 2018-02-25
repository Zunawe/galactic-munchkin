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

//-------------Die Stuff-------------
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

var button = new Sprite.fromImage("images/die-5.png");
button.anchor.x = 1;
button.anchor.y = 1;
button.x = app.screen.width-10;
button.y = app.screen.height-10;
button.buttonMode = true;
button.interactive = true;
app.stage.addChild(button);

button.on('click',function() {
  var result = dice.roll();
  var die = new Sprite.fromImage("images/die-" + result + ".png");
  die.anchor.x = 0.5;
  die.anchor.y = 0.5;
  die.x = app.screen.width/2;
  die.y = app.screen.height/2;
  die.scale.x = 3;
  die.scale.y = 3;
  app.stage.addChild(die);
  setTimeout(function() {app.stage.removeChild(die)}, 2000);
});
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

//-------------Player Score-------------
var currentPlayer = '????????';
var PLevel = '??';
var PPower = '??';
var PlayerScoreText = new Text('Current Player: '+currentPlayer+'\nLevel:'+PLevel+'		Power:'+PPower, {fontSize: 36 , color: 'black', align: 'center'});
PlayerScoreText.anchor.x = 0.5;
PlayerScoreText.x = app.screen.width/2;
app.stage.addChild(PlayerScoreText);

//-------------Player Info Cards-------------
var rectWidth = 300;
var rectHeight = 700;
var PlayerInfoCard = new PIXI.Graphics().beginFill(0x646464).drawRoundedRect(0,0,rectWidth,rectHeight,20);
var PlayerInfoCardTitle = new Text("Player Info", {fontSize: 30 , color: 'black'});
PlayerInfoCardTitle.position.set(rectWidth/2, rectHeight-5);
PlayerInfoCardTitle.anchor.x = 0.5;
PlayerInfoCardTitle.anchor.y = 1;
PlayerInfoCard.x = app.screen.width-(rectWidth-20);
PlayerInfoCard.y = 50 - rectHeight;
PlayerInfoCard.interactive = true;

PlayerInfoCard.on('mouseover', function() {
	PlayerInfoCard.y += (rectHeight-70);
});
PlayerInfoCard.on('mouseout', function() {
	PlayerInfoCard.y -= (rectHeight-70);
});

function playerInfo(name,level,power,race,clas) {
	this.name = name;
	this.level = level;
	this.power = power;
	this.race = race;
	this.clas = clas;
}

var player1 = new playerInfo('Chewie',3,8,'Wookie','Jedi');
var player2 = new playerInfo('Clara',5,6,'Human','Companion');
var player3 = new playerInfo('Scottie',6,6,'Human','Red Shirt');
var player4 = new playerInfo('The Doctor',4,11,'Timelord','No Class');

function writePlayerInfo(player, y) {
	var playerName = new Text(player.name, {fontSize: 24 , color: 'black'});
	var playerLevel = new Text('Level: '+player.level, {fontSize: 14 , color: 'black'});
	var playerPower = new Text('Power: '+player.power, {fontSize: 14 , color: 'black'});
	var playerRace = new Text('Race: '+player.race, {fontSize: 14 , color: 'black'});
	var playerClass = new Text('Class: '+player.clas, {fontSize: 14 , color: 'black'});

	playerName.position.set(10, y);
	playerLevel.position.set(10, y+30);
	playerPower.position.set(rectWidth/2, y+30);
	playerRace.position.set(10, y+60);
	playerClass.position.set(rectWidth/2, y+60);

	PlayerInfoCard.addChild(playerName);
	PlayerInfoCard.addChild(playerLevel);
	PlayerInfoCard.addChild(playerPower);
	PlayerInfoCard.addChild(playerRace);
	PlayerInfoCard.addChild(playerClass);
}

writePlayerInfo(player1,30);
writePlayerInfo(player2,120);
writePlayerInfo(player3,210);
writePlayerInfo(player4,300);




app.stage.addChild(PlayerInfoCard);
PlayerInfoCard.addChild(PlayerInfoCardTitle);






















