// preload
document.getElementById('textf.txt').onchange = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};
// Card Function def:

function Card(fields)
{
	_this = this;
	_this.name = fields.name;
	_this.type = fields.type;
	_this.description = fields.description;
	_this.affect = fields.affects;
	_this.power = fields.power;
	_this.badstuff = fields.badstuff;
}
