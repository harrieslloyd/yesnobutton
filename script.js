var i = 0

$( "#button" ).click(function() {
    gsap.to("#button", { 
        duration: 0.2,
        width:0,
        rotation: 360,
      });
      gsap.to("#button", { 
        duration: 0.2,
        width:500,
        rotation: 0,
    });
    if(Math.floor(Math.random() * 2) == 1) {
        document.getElementById("button").src = "img/Yes.png"
      }
      else {
        document.getElementById("button").src = "img/No.png"
      };
});
