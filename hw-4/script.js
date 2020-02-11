 theWhileLoop(true);

 function theWhileLoop(letsKeepLooping) {

      do{
        console.log("Remember Answers are case sensitive");
        letsKeepLooping++;
      }
       while(letsKeepLooping < 10);
     }




//Ready for adventure
function myOption(){
  //x has the purpose of getting the value from Text Box
  var choice = document.getElementById("option1").value;
  var question = document.getElementById("story");


  if(choice.length > 0){
  question.innerHTML= "Hello " + choice + ", Are you ready for an Adventure ?";

    document.getElementById("option1").style.display="none";
    document.getElementById("button1").style.display="none";
    document.getElementById("playerBeginText").style.display="none";

    document.getElementById("option2").style.display="inline-block";
    document.getElementById("button2").style.display="inline-block";
  }

else {
    alert("Thats not a name, choose a name");
  }
}
//Wake Up
function myOptions2(){
  //x has the purpose of getting the value from Text Box
  var choice = document.getElementById("option2").value;
  var question = document.getElementById("story");


  if(choice === "Yes"){
    question.innerHTML= "You wake up in a dungeon, you are soaked in your own sweat as you lay on the cold hard stone of your cell. When your eyes focus, you notice a hidden tunnel leading out of you cell. As well as the cell door is wide open. Which will you take ? Tunnel or Door ?";

    document.getElementById("option2").style.display="none";
    document.getElementById("button2").style.display="none";


    document.getElementById("option3").style.display="inline-block";
    document.getElementById("button3").style.display="inline-block";
  }

  else {
    alert("you have died of dysentary");
    document.getElementById("restart").style.display="inline-block"
  }
}
//Tunnel or Door
function myOptions3() {

  var choice = document.getElementById("option3").value;
  var question = document.getElementById("story");


  if(choice === "Tunnel"){
    question.innerHTML="Its dark, the rocks are hard and it smells like manure.The smell keeps getting worse but you keep going until you see a smiling face in the darkness. Its your mother,she brought cookies! They smell bad, but shes starting to look angry. Will you eat one ? ";

    document.getElementById("option3").style.display="none";
    document.getElementById("button3").style.display="none";
    document.getElementById('dungeonHome').style.backgroundImage = "url(./images-2/tunnel.jpg)";



    document.getElementById("option4").style.display="inline-block";
    document.getElementById("button4").style.display="inline-block";
  }

  else if(choice === "Door"){
    question.innerHTML="You leave, the sound of children's songs gets louder. You see a tiny boy with the face of a squirrel. He walks up to you. Then he bites your face off.";

    document.getElementById("option3").style.display="none";
    document.getElementById("button3").style.display="none";


    document.getElementById("restart").style.display="inline-block";

  }

  else{
    alert("Thine answer cannot be understood");
  }
}
//Keep Going or Go Back
function myOptions4() {

  var choice = document.getElementById("option4").value;
  var question = document.getElementById("story");

  if(choice === "Yes"){

    question.innerHTML = "As you eat her cookie , she begins to laugh an evil laugh and begins to shrink into the ether. You are now alone in the tunnel. Would you like to Keep Going or Go Back ?";

    document.getElementById("option4").style.display="none";
    document.getElementById("button4").style.display="none";


    document.getElementById("option5").style.display="inline-block";
    document.getElementById("button5").style.display="inline-block";

  }

  else if(choice = "No"){

    question.innerHTML = "She begins to look furious and then she devours you whole.";

    document.getElementById("option4").style.display="none";
    document.getElementById("button4").style.display="none";



    document.getElementById("restart").style.display="inline-block"


  }

  else{
    alert("Thine answer cannot be understood");
  }
}
//chocolate yes or no
function myOptions5() {

  var choice = document.getElementById("option5").value;
  var question = document.getElementById("story");

  if(choice === "Keep Going"){

    question.innerHTML = "When you keep going you reach a pot of Gold! But when you grab a gold piece, you realize its chocolate. Will you eat it ?";

    document.getElementById("option5").style.display="none";
    document.getElementById("button5").style.display="none";

    document.getElementById("option6").style.display="inline-block";
    document.getElementById("button6").style.display="inline-block";
  }

  else if(choice = "Go Back"){

    question.innerHTML = "This is boring.Youre Dead";

    document.getElementById("option5").style.display="none";
    document.getElementById("button5").style.display="none";

    document.getElementById("restart").style.display="inline-block";
  }

  else{
    alert("Thine answer cannot be understood");
  }
}
//Final
function myOptions6() {

  var choice = document.getElementById("option6").value;
  var question = document.getElementById("story");

  if(choice === "Yes"){

    question.innerHTML = "Eww, You die of dysentary";

    document.getElementById("option6").style.display="none";
    document.getElementById("button6").style.display="none";

    document.getElementById("restart").style.display="inline-block";
      letsKeepLooping= false;
  }

  else if(choice = "No"){

    question.innerHTML = "The tunnel collapses and you die";

    document.getElementById("option6").style.display="none";
    document.getElementById("button6").style.display="none";

    document.getElementById("restart").style.display="inline-block"

    letsKeepLooping= false;
  }

  else{
    alert("Thine answer cannot be understood");
  }

}
