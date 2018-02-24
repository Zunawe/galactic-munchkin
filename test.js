function Card(){
	var _this = this;

	_this.type = 'race';

	_this.myMethod = function (){
		console.log('method stuff');
	}
}

var newCard = new Card();
console.log(newCard);

newCard.myMethod();
