// $(document).ready(function(){
//     $(".BASTKETBALL").click(function(){
//       $(".BASTKETBALL").animate({left: '250px'});
//     });
//   });

new TypeIt("#type1", {
    speed: 120,
    loop: true,
    waitUntilVisible: true,
  })
    .type("MARTIN HO", { delay: 400 })
    .pause(500)
    .delete(9)
    .type("HO MAN KIT", { delay: 400 })
    .pause(500)
    .delete(9)
    .go();

  
    $(document).ready(function(){
        $(".btn10").click(function(){
            $('#div1').fadeToggle();
           
    });
});