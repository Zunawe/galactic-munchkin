var cardListTSV = 
`Name	Type	Description	Effect	Power	Bad Stuff	Temp Column
Jedi	Class	Through the force, a jedi can use an extra hand’s worth of item(s). Jedi may discard 3 cards to force persuade a monster to not fight & just gain its treasure. This effect only works on one monster in combat	hand: +1	0	none	none
Companion	Class	On rolls of a 2 or less, companions may discard 1 card & re-roll the die. (can do this action as long as there is a card to discard. Companions can discard 3 cards to force someone to help you in combat (this can’t be used to gain the final level) 	none	0	none	none
Redshirt	Class	Redshirts may discard a card to try and steal a small item carried by another player. Roll a die and if the roll is greater than a 4 you steal the item, otherwise get ejected and lose a level. Redshirts may discard a card and roll to attempt to combine 2 1-handed items into a single handed item.	none	0	none	none
Trooper	Class	Troopers may discard a card to give a +2 in battle (only once).Troopers have the ability to hold 6 cards in their hand. 	none	0	none	none
Time Lord	Race	If you kick down the door and find a trap card, the trap has no effect (because of time reasons) and Time Lords may kick down the door again.Time Lords have the ability to have 2 followers.	followers max: +1	0	none	none
Wookie	Race	Wookies have the ability to win ties. Wookies can carry multiple big items.	none	0	none	none
Vulcan	Race	Vulcans start at level 2 and can not go below level 2. Vulcans gain an additional treasure for helping someone in combat.	level min: 2	0	none	none
Lose 2 Cards	Curse	Starting with the player on the victim's left, take a card from the victim’s hand. Then the person on the victim’s right 	cards in hand: -2	0	none	none
Change Sex	Curse	-5 to the victim’s next combat and sex is permanently changed	power: -5	0	none	none
Lose Your Race 	Curse	If you have a class, you lose that race. If you have two lose 1 	current race: 0 	0	none	none
Lose Your Class	Curse	If you have a class, you lose that class. If you have two lose 1 	current class: 0 	0	none	none
Time Rift	Trap	Every player loses 2 levels	level: -2	0	none	none
Sucked Into Space	Trap	lose a level	level: -1	0	none	none
An Uncool Fez	Trap	-1 to die rolls 	escape roll: -1	0	none	none
Insult Khan	Trap	Lose a level	player level: -1	0	none	none
Frozen in Carbonite	Trap	Victim fights the next battle with only their level	combat affect: power	0	none	none
Stuck In Your Time Stream	Trap	skip the rest of your current turn  this card can be played on another player before the door is kicked down 	end your turn	0	none	none
Shot By Ray Gun	Trap	lose a small item	item(s) total: -1	0	none	none
Bad Hair Day	Trap	lose 1 small item	item(s) total: -1	0	none	none
Intergalactic IRS	Trap	discard 1 item and all other players must match the value of that item or lose a level	item(s) total: -1	0	none	none
Lose 1 Big Item	Trap	lose an item of victims choice	item(s) total: -1	0	none	none
Lose you class(es)	Trap	lose your class or classes if you have more than one	max class: -1 	0	none	none
Lose your race(s)	Trap	lose your race or races if you have more than one	max race: -1 	0	none	none
Lose your footgear	Trap	lose footgear	footgear: 0	0	none	none 
Lose your headgear	Trap	lose headgear	headgear: 0	0	none	none
Lose your armor 	Trap	lose armor	armor: 0	0	none	none
Shrink Ray	Monster Modifier	monster power: -5	monster power: -5	0	none	temp
Noble Being	Monster Modifier	monster power: +10	monster power: +10	0	none	temp
Pissed Off	Monster Modifier	moster power: +5	moster power: +5	0	none	temp
Cute But Deadly	Monster Modifier	moster power: +5	moster power: +5	0	none	temp
Cell Division	Monster Modifier	Moster is double (all attributes are doubled)	monster power: *2	0	none	temp
Intelligent	Monster Modifier	monster power: +10	monster power: +10	0	none	temp
Cheat	Special Card 	Play any itesm that would normally not be playable and gain its bonus	item(s) total: +1, power total: +?	0	none	none
Hail an Ally	Special Card 	Take 1 players item and that item must make the difference in the battle	item(s) total: +1, power total: +?	0	none	none
Fight Your Father	Character change	lose a hand	hand: -1	0	none	none
Half Breed	character change	You can have 2 race cards	race max: +1	0	none	none
Half Breed	character change	You can have 2 race cards	race max: +1	0	none	none
Super Munchkin	character change	You can have 2 class cards	class max: +1	0	none	none
Super Munchkin	character change	You can have 2 class cards	class max: +1	0	none	none
Wandering Alien	Wandering Alien	__description__	none	0	none	none
Wandering Alien	Wandering Alien	__description__	none	0	none	none
Wandering Alien	Wandering Alien	__description__	none	0	none	none
Force Deception	Special Card 	Discard a monster and its modifiers and replace this monster with a monster from your hand	monster power: update	0	none	none
Force Epiphany	Special Card 	This card must be played immediatly. All jedi gain a level (and can gain the winning level)	level: jedi: +1	0	none	none
Stormtrooper	MONSTER	_description_	none	1	none	none
Wamp Rat	MONSTER	_description_	none	1	none	none
The oode	MONSTER	_description_	none	1	none	none
Monster: level 1	MONSTER	_description_	none	1	none	none
Jar Jar Binks	MONSTER	_description_	none	2	none	none
Boba Fett	MONSTER	_description_	none	2	none	none
Monster: level 2	MONSTER	_description_	none	2	none	none
Monster: level 2	MONSTER	_description_	none	2	none	none
An Enemy Fleet	MONSTER	_description_	none	2	none	none
Monster: level 4	MONSTER	_description_	none	4	none	none
Monster: level 4	MONSTER	_description_	none	4	none	none
A Mad Man In A Box	MONSTER	_description_	none	4	none	none
Jango Fett	MONSTER	_description_	none	4	none	none
An Alternate Universe's Version of You	MONSTER	_description_	none	player_power	none	none
Monster: level 6	MONSTER	_description_	none	6	none	none
Wampa	MONSTER	_description_	none	6	none	none
Monster: level 8	MONSTER	_description_	none	8	none	none
A Single Dalek	MONSTER	_description_	none	8	none	none
1 Weaping Angel	MONSTER	_description_	none	8	none	none
Darth Maul	MONSTER	_description_	none	8	none	none
Monster: level 10	MONSTER	_description_	none	10	none	none
Klingons	MONSTER	_description_	none	10	none	none
The Entire Centauren Empire	MONSTER	_description_	none	10	none	none
Monster: level 12	MONSTER	_description_	none	12	none	none
The Silence	MONSTER	_description_	none	12	none	none
Count Dooku	MONSTER	_description_	none	12	none	none
Cybermen	MONSTER	_description_	none	14	none	none
Borg	MONSTER	_description_	none	14	none	none
Darth Vader	MONSTER	_description_	none	14	none	none
A Dalek Army	MONSTER	_description_	none	16	none	none
Emperor Palpetine	MONSTER	_description_	none	16	none	none
Kaaaaahhhhhhnnn	MONSTER	_description_	none	18	none	none
The Master	MONSTER	_description_	none	18	none	none
The Death Star	MONSTER	_description_	none	20	none	none
TREASURE CARDS	Type 	Desciption	Effect	Power	Bad Stuff	Temp Column
Flamethrower	Battle Bonus	bonus to either side: +5	power: +5	0	none	Temp
Freeze Ray	Battle Bonus	bonus to either side: +3	power: +3	0	none	Temp
Lower Gravity	Battle Bonus	bonus to either side: +2	power: +2	0	none	Temp
Stray Missile	Battle Bonus	bonus to either side: +5	power: +5	0	none	Temp
Lighting Storm In Space	Battle Bonus	bonus to either side: +5	power: +5	0	none	Temp
Alien Alcohol	Battle Bonus	bonus to either side: +3	power: +3	0	none	Temp
Man Up	Battle Bonus	bonus to either side: +2	power: +2	0	none	Temp
Ray Shield	Battle Bonus	bonus to either side: +3	power: +3	0	none	Temp
Solar Flare	Battle Bonus	bonus to either side: +2	power: +2	0	none	Temp
Vulcan Wisdom	Battle Bonus	bonus to any vulcan in the current fight: +2	power: +2	0	none	Temp
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level	level: +1	0	none	none
GO UP A LEVEL	level modifier	go up a level ONLY after combat (doesnt have to be your combat)	level: +1	0	none	none
GO UP A LEVEL	level modifier	stab a follower	level: +1	0	none	none
r2d2	FOLLOWER	teamed with you in your battles and can carry an item	item(s) total: +1	0	none	none
scottie	FOLLOWER	teamed with you in your battles and can carry an item	item(s) total: +1	0	none	none
STEAL A LEVEL	level modifier	pick one player and steal a level from them. You go up one and they go down one	level: +1	0	none	none
PARADOX	special card	cancels any trap or curse. play at any time, useable only once	draw card: skip	0	none	none
PARADOX	special card	cancels any trap or curse. play at any time, useable only once	draw card: skip	0	none	none
REACH THROUGH TIME	special card	Go through the discards to find any card that you want and take that card and discard this one. Usable only once. 	current user card(s): +1	0	none	none
ALIEN TREASURE STASH	special card	draw three more teasure cards immediately. They are face down if you drew this card face down; otherwise, they are face-up	current user card(s): +3	0	none	none
SPACE GORILLA GLUE	special card	Use when someone sucessfully escapes a combat for any reason. They must reroll their escape (even if it was automatic)	escape roll: redo	0	none	none
CLONE	special card	Summons your exact duplicate who fights beside you. You double your total strength. You may use this when you are the only player in combat.	battle power (temp): *2	0	none	none
Invisibility Ray	battle bonus'	Use when your run away roll fails. You escape automatically. Usable only worse	escape roll: pass	0	none	none
Portal Collapse	battle bonus	Allows automatic escape, for one or two players, from any fight	escape roll: pass	0	none	none
Mind control	battle bonus	No player with a level higher than yours may refuse your request for help in a fight, or even ask for a reward. You cannot gain the winning level through compelling someone to fight with you.	battle power (temp): +_player_	0	none	none
Redirect	battle bonus	Play durring any combat. Any player (of your choice) now fights the monster, may ask for help normally, and gets the treasure and levels if he/she wins the fight. The original player then resumes their turn and may loot the room.	player vs monster: _player_	0	none	none
Mind wipe	battle bonus	Discard all monsters in combat. No treasure is gained but the player may loot the room. Usable only once.	combat: _end_, 	0	none	none
Actual God	battle bonus	you may encounter an actual god only on your turn. The god steps in and renders the battle finished as the monster is now a puff of smoke. Even if you had failed a run away , you may now take the monsters treasure but no level is gained. Usable only once.	combat: _end_, 	0	none	none
Trans-Modifier	monster alteration	Use during any combat. Turns any one monster into anv Tauntaun, which runs away, leaving its treasure behind. Usable only once.  	combat: _draw treasures_ 	0	none	none
Mind Trick	special card	Allows you to change the victim of a curse you receive. Usable only once	player affected: _player_	0	none	none
item for left hand	Equipable	power increase through item	lhand: +1	0	none	none
item for right hand	Equipable	power increase through item	rhand: +1	0	none	none
item for left hand	Equipable	power increase through item	lhand: +2	0	none	none
item for right hand	Equipable	power increase through item	rhand +2	0	none	none
item for left hand	Equipable	power increase through item	lhand: +3	0	none	none
item for right hand	Equipable	power increase through item	rhand: +3	0	none	none
item for left hand	Equipable	power increase through item	lhand: +4	0	none	none
item for right hand	Equipable	power increase through item	rhand: +4	0	none	none
item for left hand	Equipable	power increase through item	lhand: +5	0	none	none
item for right hand	Equipable	power increase through item	rhand: +5	0	none	none
item for head	Equipable	power increase through item	head: +1	0	none	none
item for head	Equipable	power increase through item	head: +2	0	none	none
item for head	Equipable	power increase through item	head: +3	0	none	none
item for head	Equipable	power increase through item	head: +4	0	none	none
item for head	Equipable	power increase through item	head: +5	0	none	none
item for foot	Equipable	power increase through item	foot: +1	0	none	none
item for foot	Equipable	power increase through item	foot: +2	0	none	none
item for foot	Equipable	power increase through item	foot: +3	0	none	none
item for foot	Equipable	power increase through item	foot: +4	0	none	none
item for foot	Equipable	power increase through item	foot: +5	0	none	none
armor	Equipable	power increase through item	armor: +1 	0	none	none
armor	Equipable	power increase through item	armor: +2 	0	none	none
armor	Equipable	power increase through item	armor: +3	0	none	none
armor	Equipable	power increase through item	armor: +4	0	none	none
armor	Equipable	power increase through item	armor: +5	0	none	none
`;
