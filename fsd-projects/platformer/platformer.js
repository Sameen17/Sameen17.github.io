$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  
   //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200,300,150,15, "blue");
createPlatform(150,650,500,3, "red");
createPlatform(680,530,125,20);
createPlatform(500,445,125,1);  
createPlatform(400,380,50,5)

    // TODO 3 - Create Collectables
createCollectable("grace", 100, 700);
createCollectable("steve", 250, 250);
createCollectable("kennedi",500,500)

    
    // TODO 4 - Create Cannons
createCannon("top", 550, 912);
createCannon("left",500, 1900);
createCannon("left",250, 1900);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
