function draw() {
    const canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
  
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(100, 75, 50, 0, 2 * Math.PI); 
      ctx.stroke();
    }
  }
  