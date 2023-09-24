var i = 0

function vh(percent) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (percent * h) / 100;
}

function vw(percent) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (percent * w) / 100;
}

$( "#button" ).click(function() {
    gsap.to("#button", { 
        duration: 0.2,
        width:0,
        rotation: 360,
      });
      gsap.to("#button", { 
        duration: 0.2,
        width:vh(50),
        rotation: 0,
    });
    if(Math.floor(Math.random() * 2) == 1) {
        document.getElementById("button").src = "img/Yes.png"
      }
      else {
        document.getElementById("button").src = "img/No.png"
      };
});
