jQuery(
   function(){
     var cardTitle = [
       "You are Capt.Kirk",
       "You are Capt.Picard",
       "You are Dr.Crusher",
       "You are Bones",
       "You are Worf"
      ];

     var cardDesc = [];
       cardDesc[0] = "You are Brave and Fearless";
       cardDesc[1] = "You are Wise and Curious";
       cardDesc[2] = "You are Smart and Sensible";
       cardDesc[3] = "You are a Doctor not a Computer engineer";
       cardDesc[4] = "You are Strong and Unflynching";

     var drawCard = [
       "images/img1.jpg",
       "images/img2.jpg",
       "images/img3.jpeg",
       "images/img4.jpg",
       "images/img5.jpg"
     ];

    $("#myBtn").click(

      function(){
        var drawNum = Math.floor(Math.random() * drawCard.length);
        $("#title").html(cardTitle[drawNum]);
        $("#desc").html(cardDesc[drawNum]);
        $("#showImage").fadeOut(
          function(){
            $(this).attr('src', drawCard[drawNum])
            .fadeIn();
          }
        ); // end fadeOut

        setInterval(moveSquare, 2000);
        setInterval(moveTriangle, 2000);


        var fontSize = parseInt($("body").css("font-size"));
fontSize = fontSize + 5 + "px";
$("body").css({'font-size':fontSize});
      }
    );

    function moveSquare()
    {
        $("#square").animate({left:4000}).animate({top:500}).animate({left:75}).animate({top:100}).fadeOut(1500).moveTriangle;
        $("#square1").animate({left:1050}).animate({top:400}).animate({left:50}).animate({top:200}).fadeOut(1500);
        $("#triangle1").animate({left:700}).animate({top:200}).animate({left:88}).animate({top:300}).fadeOut(1500);
    }

    function moveTriangle(){
        $("#triangle").fadeIn(1500).animate({left:400}).animate({top:200}).animate({left:88}).animate({top:300});
    }
});
