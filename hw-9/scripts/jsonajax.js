 $(document).ready(function () {

   $.fn.spin = function animateBall() {
         $("#pokeball").animate({right: "-=200"}, "slow").animate({right: "+=200"}, "slow");
     };

            $("button").click(function () {
              $.getJSON("data/pokemon.json", function(result){

   $.each(result, function(i, field){
       var entry = field[Math.floor(Math.random()*field.length)];
       console.log(entry);
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
