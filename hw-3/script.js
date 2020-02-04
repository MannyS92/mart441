/*console.log('My 3 Favorite Websites');
console.log('Facebook');
console.log('Google');
console.log('Amazon');
console.log('My 3 Favorite Games');
console.log('Last of Us');
console.log('Fallout');
console.log('Skyrim');
console.log('My 3 Favorite Artists');
console.log('Keith Haring');
console.log('Ray Charles');
console.log('Akira Kurosawa');*/
function dungeonGame(){
  var letsPlay = confirm("You wake up and are in a strangeland. In front of you is an old book covered in moss and smells like smoke. Do you open it ?");

  if(letsPlay == true) {
    var bookOpen = confirm("When you open the book,the world becomes dark again and you are transported into the middle of medevil dungeon. In front of you is a skeleton holding onto a sword. Do you grab the sword ?");
  }

  else{
    alert( "Fine, just go home....wherever that is");
  }
//If book is opened
  if(bookOpen == true) {

    var power = prompt("You feel power surging through your veins, will you embrace the power ?");
  }
//If you dont take sword
  else{
    var giveUp = alert("Then you go back to your miserable life and never achieve any glory or mead. Hope youre happy! ");
  }

  if(power == "yes") {
  var swordCommand = prompt("You hear a voice in your head, this voice tells you must yell at the guards and tell them they stink. Will you obey the swords command ?");
  }

  else{
   var giveUp;
 }
 if(swordCommand == "yes"){
   alert("Congratulations you begun your journey to the dark side, stay tuned for more");
 }
 else{
   alert("I find your inability to follow rules, frustrationg");
 }
}
