var app = new PIXI.Application({
	width: window.innerWidth,
	height: window.innerHeight,
	antialias: true,
	backgroundColor: 0x262c3f
});
var renderer = PIXI.autoDetectRenderer();
document.body.appendChild(app.view);

function play(dt){
	// Empty
}

var state = play;
function gameLoop(dt){
	state(dt);
}
app.ticker.add(gameLoop);

var players = [];

function boardSetup() {
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
	var PLevel = players[currentPlayerIndex].level;
	var PPower = players[currentPlayerIndex].power;
	var PlayerScoreText = new Text('Current Player: '+(currentPlayerIndex+1)+'\nLevel:'+PLevel+'		Power:'+PPower, {fontSize: 36 , color: 'white', align: 'center'});
	PlayerScoreText.anchor.x = 0.5;
	PlayerScoreText.x = app.screen.width/2;
	app.stage.addChild(PlayerScoreText);

	//-------------Player Info Cards-------------
	var rectWidth = 300;
	var rectHeight = 430;
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
		PlayerInfoCard.removeChild(PlayerInfoCardTitle);
	});
	PlayerInfoCard.on('mouseout', function() {
		PlayerInfoCard.y -= (rectHeight-70);
		PlayerInfoCard.addChild(PlayerInfoCardTitle);
	});

	function writePlayerInfo(player, y, name) {
		var playerName = new Text(name, {fontSize: 24 , color: 'black'});
		var playerLevel = new Text('Level: '+player.level, {fontSize: 14 , color: 'black'});
		var playerPower = new Text('Power: '+player.power, {fontSize: 14 , color: 'black'});
		var playerRace = new Text(player.race ? ('Race: '+player.race.title) : "Race: Human", {fontSize: 14 , color: 'black'});
		var playerClass = new Text(player.class ? ('Class: '+player.class.title) : "Class: No Class", {fontSize: 14 , color: 'black'});

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

	writePlayerInfo(players[0],90*0+30, 'Player 1');
	writePlayerInfo(players[1],90*1+30, 'Player 2');
	writePlayerInfo(players[2],90*2+30, 'Player 3');
	writePlayerInfo(players[3],90*3+30, 'Player 4');


	app.stage.addChild(PlayerInfoCard);
	PlayerInfoCard.addChild(PlayerInfoCardTitle);

	//-------------Played Cards Placement-------------
	var cardPlace1 = new PIXI.Graphics().beginFill(0x646464,0.5).drawRect(0,0,200,300);
	var cardPlace1Title = new Text("Player Card", {fontSize: 24, color: 'black'});
	cardPlace1Title.anchor.x = 0.5;
	cardPlace1Title.anchor.y = 0.5;
	cardPlace1.x = app.screen.width/2 + 100;
	cardPlace1.y = app.screen.height/2-150;
	cardPlace1Title.position.set(100,150);

	cardPlace1.interactive = true;
	cardPlace1.on('click', function (){
		switch (selectedCard.type) {
			case 'Class': 
				players[currentPlayerIndex].class = selectedCard;
				break;
			case 'Race':
				players[currentPlayerIndex].race = selectedCard;
				break;
			case 'level modifier':
				players[currentPlayerIndex].level += 1;
				break;
		}
		selectedCard.addTo(cardPlace1);
		selectedCard.pixiObject.position.set(0, 0);
		players[currentPlayerIndex].hand.removeCard(selectedCard);
		selectedCard = null;
	});

	var cardPlace2 = new PIXI.Graphics().beginFill(0x646464,0.5).drawRect(0,0,200,300);
	var cardPlace2Title = new Text("Drawn Card", {fontSize: 24, color: 'black'});
	cardPlace2Title.anchor.x = 0.5;
	cardPlace2Title.anchor.y = 0.5;
	cardPlace2.x = app.screen.width/2 - 300;
	cardPlace2.y = app.screen.height/2 - 150;
	cardPlace2Title.position.set(100,150);

	var cardPlace3 = new PIXI.Graphics().beginFill(0x646464,0.5).drawRect(0,0,200,300);
	var cardPlace3Title = new Text("Discard Pile", {fontSize: 24, color: 'black'});
	cardPlace3Title.anchor.x = 0.5;
	cardPlace3Title.anchor.y = 0.5;
	cardPlace3.x = 10;
	cardPlace3.y = app.screen.height/2 - 150;
	cardPlace3Title.position.set(100,150);
	cardPlace3.interactive = true;

	cardPlace3.on('click', function (){
		selectedCard.addTo(cardPlace3);
		selectedCard.pixiObject.position.set(0, 0);
		players[currentPlayerIndex].hand.removeCard(selectedCard);
		selectedCard = null;
	});

	app.stage.addChild(cardPlace1);
	cardPlace1.addChild(cardPlace1Title);
	app.stage.addChild(cardPlace2);
	cardPlace2.addChild(cardPlace2Title);
	app.stage.addChild(cardPlace3);
	cardPlace3.addChild(cardPlace3Title);

//-------------Played Cards Placement-------------
	discard = function(card) {
		cardPlace3.addChild(card.pixiObject);
		if (card.isDoor) {
			discardsDoor.push(card);
		}
		else {
			discardsTreas.push(card);
		}
	}

	var door_deck_button = new Sprite.fromImage("images/door.jpg");
	door_deck_button.x = 10;
	door_deck_button.y = 10;
	door_deck_button.buttonMode = true;
	door_deck_button.interactive = true;
	app.stage.addChild(door_deck_button);

	var treas_deck_button = new Sprite.fromImage("images/treasure.jpg");
	treas_deck_button.x = 158;
	treas_deck_button.y = 10;
	treas_deck_button.scale.set(0.5,0.5);
	treas_deck_button.buttonMode = true;
	treas_deck_button.interactive = true;
	app.stage.addChild(treas_deck_button);

	door_deck_button.on('click',function() {
		var drawnCardDoor = doorDeck.pop();
		if (drawnCardDoor.type === 'MONSTER') {
			battlePhase = !battlePhase;
		}
		if (battlePhase) {
			drawnCardDoor.addTo(cardPlace2);
			currentMonster = drawnCardDoor;
		}
		else {
			players[currentPlayerIndex].hand.addCard(drawnCardDoor);
		}
	});
	treas_deck_button.on('click',function() {
		var drawCardTreas = treasureDeck.pop();
		players[currentPlayerIndex].hand.addCard(drawCardTreas);
	});

	var resolveCombatButton = new PIXI.Graphics().beginFill(0x646464).drawRoundedRect(0, 0, 120, 40, 5);
	resolveCombatButton.x = 10;
	resolveCombatButton.y = 158;
	resolveCombatButton.buttonMode = true;
	resolveCombatButton.interactive = true;
	resolveCombatButton.on('click', function (){
		if(currentMonster.power >= players[currentPlayerIndex].power){
			--players[currentPlayerIndex].level;
		}
		else{
			++players[currentPlayerIndex].level;
		}
		discard(currentMonster);
		currentMonster = null;
	});
	app.stage.addChild(resolveCombatButton);
	var resolveCombatText = new Text('Resolve');
	resolveCombatText.x = 20;
	resolveCombatText.y = 163;
	app.stage.addChild(resolveCombatText);

	var endTurn = new PIXI.Graphics().beginFill(0x646464).drawRoundedRect(0, 0, 120, 40, 5);
	endTurn.x = 10;
	endTurn.y = 230;
	endTurn.buttonMode = true;
	endTurn.interactive = true;
	endTurn.on('click', function (){
		console.log(players[currentPlayerIndex]);
		startNewTurn();
	});
	app.stage.addChild(endTurn);
	var endTurn = new Text('End Turn');
	endTurn.x = 20;
	endTurn.y = 235;
	app.stage.addChild(endTurn);
}

function init(){
	shuffle(doorDeck);
	shuffle(treasureDeck);
	for (let i = 0; i < 4; ++i) {
		players.push(new Player()); 
	}

	for(let i = 0; i < players.length; ++i){
		for(let j = 0; j < 4; ++j){
			players[i].hand.addCard(doorDeck.pop());
			players[i].hand.addCard(treasureDeck.pop());
		}
	}
	currentPlayerIndex = players.length-1;
}

init();

function startNewTurn(){
	//app.stage.removeChild(players[currentPlayerIndex].hand.pixiObject);
	app.stage = new Container();
	currentPlayerIndex = (currentPlayerIndex + 1)%players.length
	players[currentPlayerIndex].hand.addTo(app.stage);
	players[currentPlayerIndex].hand.pixiObject.position.set(0, document.documentElement.clientHeight - 100);
	boardSetup();
}
startNewTurn();
