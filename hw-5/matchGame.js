var imageTags = ["image1", "image2", "image3", "image4","image5","image6", "image7", "image8", "image9","image10"];

var actualBlank = 'images/sea2.jpeg';
var firstNumber = -1;
var secondNumber = -1;
var attempts = [];
var setMade = [];



//JSON player info

var player = {"firstname":"","lastname":"","age":"","attempts":""};

var actualImages = new Array();




function showBlank()
{
    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= actualBlank;
    }
  }

  function createRandomImageArray()
  {

    const hidImages = [
      'images/sea1.jpg',
      'images/movie7.jpg',
      'images/movie9.jpg',
      'images/sea4.jpg',
      'images/sea5.jpeg'
    ];

      var amount = [0,0,0,0,0];

      while(actualImages.length < 10)
      {
          var randomNumber = Math.floor(Math.random() * hidImages.length)

          if(amount[randomNumber] < 2)
          {
              actualImages.push(hidImages[randomNumber]);
              amount[randomNumber] = amount[randomNumber] + 1;
          }
      }


  }

  function flipImage(number) {



    if (firstNumber >= 0) {
      secondNumber = number;
      document.getElementById(imageTags[number]).src = actualImages[secondNumber];

    }

    else if(firstNumber < 0) {
      firstNumber = number;
      document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    }

    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000);
      attempts.push("attempt");
      console.log(attempts.length);
    }

    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
        setMade.push(1);
        console.log(setMade.length);
  }

  if(setMade.length >= 5){
    attempts = attempts.length;
    player.attempts = attempts;
    localStorage.setItem("playerInfo", JSON.stringify(player));



    window.location = ("lastpage.html");

  }
}


  function imagesDisappear(){
    document.getElementById(imageTags[firstNumber]).src= actualBlank;
    document.getElementById(imageTags[secondNumber]).src= actualBlank;
    firstNumber = -1;
    secondNumber = -1;
  }



  function fillProfile() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var playerAge = document.getElementById("txtAge").value;
    attempts = attempts.length;
    player.attempts = attempts;


    player.firstname = firstName;
    player.lastname = lastName;
    player.age = playerAge;

    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "matching.html";

  }


 function playerInfo()
  {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname + player.attempts);
  }

  function display()
  {

    document.getElementById("final").innerHTML = ("You did it " + player.firstname + " " + player.lastname + " age " + player.age + ", in " + player.attempts + " attempts");
  }
