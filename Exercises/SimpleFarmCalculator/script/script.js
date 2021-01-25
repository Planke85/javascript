var chickenNumbers = parseInt(prompt("Please enter chickens number"));
var cowsNumbers = parseInt(prompt("Please enter cows numbers"));
var pigsNumbers = parseInt(prompt("Please enter pigs numbers"));
var chickenLegs = chickenNumbers * 2;
var cowLegs = cowsNumbers * 4;
var pigLegs = pigsNumbers * 4;
var totalAnimals = chickenNumbers + cowsNumbers + pigsNumbers;
var totalLegs = chickenLegs + cowLegs + pigLegs

document.write("Total animals is: " + totalAnimals + ", total chicken is " + chickenNumbers + ", total cows is " + cowsNumbers + ", total pigs is " + pigsNumbers + ", total animals legs is " + totalLegs + ", chickens legs is " + chickenLegs + ", cows legs is " + cowLegs + ", pigs legs is " + pigLegs);