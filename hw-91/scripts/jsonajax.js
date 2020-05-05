 $(document).ready(function() {

   $.fn.spin = function animateBall() {
     $("#pokeball").animate({
       right: "-=200"
     }, "slow").animate({
       right: "+=200"
     }, "slow");
   };

   $("button").click(function() {
     $.getJSON("data/pokemon.json", function(result) {


         $("#pokeHandout").text("Congratualations, you got " + entry.name + " !!!");
         $("#pokeImage").attr("src", entry.img);
         $("#pokeBeginText").fadeOut();
         $("#btnSubmit").text("Unhappy ? Pick another");
         $("#pokeName").text(entry.name);
         $("#pokeType").text(entry.type);
         $("#pokeWeak").text(entry.weaknesses);
         $("#pokeball").spin();

       });
     });
   });
 });

 $(document).ready(function() {

            $("#weatherBtn").click(function(event){
                $.getJSON("data/weather.json", function(weath) {
                    $('#weather').text(weather.main);

                });
            });
        });
