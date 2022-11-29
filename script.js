  function playC(){
    var audio = new Audio("c.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano c.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano c.jpg', 'piano original.jpg');
       }, 300);}

  function playCSharp(){
    var audio = new Audio("c sharp.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano c sharp.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano c sharp.jpg', 'piano original.jpg');
       }, 300);}

  function playD(){
    var audio = new Audio("d.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano d.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano d.jpg', 'piano original.jpg');
       }, 300);}

  function playDSharp(){
    var audio = new Audio("d sharp.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano d sharp.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano d sharp.jpg', 'piano original.jpg');
       }, 300);}

  function playE(){
    var audio = new Audio("e.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano e.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano e.jpg', 'piano original.jpg');
       }, 300);}

  function playF(){
    var audio = new Audio("f.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano f.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano f.jpg', 'piano original.jpg');
       }, 300);}

  function playFSharp(){
    var audio = new Audio("f sharp.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano f sharp.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano f sharp.jpg', 'piano original.jpg');
       }, 300);}
    
  function playG(){
    var audio = new Audio("g.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano g.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano g.jpg', 'piano original.jpg');
       }, 300);}

  function playGSharp(){
    var audio = new Audio("g sharp.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano g sharp.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano g sharp.jpg', 'piano original.jpg');
       }, 300);}

  function playA(){
    var audio = new Audio("a.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano a.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano a.jpg', 'piano original.jpg');
       }, 300);}

  function playASharp(){
    var audio = new Audio("a sharp.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano a sharp.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano a sharp.jpg', 'piano original.jpg');
       }, 300);}
    
  function playB(){
    var audio = new Audio("b.mp3");
    document.body.innerHTML = document.body.innerHTML.replace('piano original.jpg', 'piano b.jpg');
    audio.play();
      setTimeout(function() {
        document.body.innerHTML = document.body.innerHTML.replace('piano b.jpg', 'piano original.jpg');
       }, 300);}

  ////
  function carAlert(){
    alert("car")
  }
  function clockAlert(){
    alert("clock")
  }
  function busAlert(){
    alert("bus")
  }
  function personAlert(){
    alert("person")
  }

  /////

  function Img() {
    document.body.innerHTML = document.body.innerHTML.replace('stretch0.jpg', 'stretch.gif');
  }

  function ImgOut() {
    document.body.innerHTML = document.body.innerHTML.replace('stretch.gif', 'stretch0.jpg');
  }

  document.getElementById('button').addEventListener('mousedown', inspire);

  function inspire() {
    document.body.innerHTML = document.body.innerHTML.replace('focus...', 'inspiration!');
    document.body.innerHTML = document.body.innerHTML.replace('focus.png', 'inspire.png');
  }

  ///
