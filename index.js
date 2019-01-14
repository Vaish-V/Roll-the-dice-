var p1 = Math.floor((Math.random() * 6) + 1);
  var p2 = Math.floor((Math.random() * 6) + 1);

  pImages = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
  ];

  document.getElementById('player1').setAttribute('src', pImages[p1 - 1]);
  document.getElementById('player2').setAttribute('src', pImages[p2 - 1]);
  if (p1 > p2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  } else if (p1 < p2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  } else {
    document.querySelector("h1").innerHTML = "Tie !";
  }
