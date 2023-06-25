var sc = 0;
var size = 50;
var time = 0;
var hscore = 0;

//LLeva el puntaje y el tiempo del juego
function score() {
    sc += 1;
    time += 1;
    document.getElementById("scorecount").innerHTML = sc;
}

//Hace aparecer los puntos en posiciones aleatorias
function spawndots(i) {
    var z;
    var min = 10;
    var max = 70;
    document.getElementById("GameWindow").innerHTML = "";
    for (z = i; z > 0; z--) {
        var y = (Math.random() * (max - min)) + min;
        var x = (Math.random() * (max - min)) + min;
        document.getElementById("GameWindow").innerHTML += '<span id="dot" onclick="this.remove();score();" style="top:' + x + '%;left:' + y + '%; height:' + size + 'px; width:' + size + 'px;"></span><br>';
    }
}

//Comienza el juego y se queda en intervalo hasta que el tiempo llegue a 0
function PlayGame() {
    time = 10;
    var y = 0;
    var dots = 1;

    sc = 0;
    var x = setInterval(function () {
        document.getElementById("timecount").innerHTML = time;
        y++;
        if (y % 10 === 0 && time >= 1) {
            time--;
        }
        if (y > 10 && y % 14 === 1) {
            spawndots(dots);
        }
        //Cuando se llega a los 5 puntos, aparecen circulos de 2 en 2
        if (sc >= 5) {
            dots = 2;
        }
        if (y % 80 === 0 && y > 1 && size > 20) {
            size -= 3;
        }
        //Una vez el tiempo en cero, guarda el puntaje y comienza todo desde cero
        if (time === 0) {
            if (sc > hscore) {
                hscore = sc;
                document.getElementById("timecount").innerHTML = time;
                document.getElementById("hscount").innerHTML = hscore;
            }
            document.getElementById("scorecount").innerHTML = "0";
            document.getElementById("GameWindow").innerHTML = '<button id="Play" onclick="this.remove();PlayGame();">Play Game</button>';
            clearInterval(x);
        }
    }, 100);

}