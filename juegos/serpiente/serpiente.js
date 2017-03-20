var puntosE1=15;
var teclaPrecionada;
var codigo; 

// Esta variable sirve para que el programa sepa se el jugador ha opinido una de las flechas del teclado al menos una vez.
var escuchaTeclado = false;

var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39,

	
};

var tablero;

var fondo = {
	fondoURL : "../../../assets/img/img juegos/serpiente/fondo serpiente.png"
};

var mario = {
	marioURL :"../../../assets/img/img juegos/serpiente/serpiente1.png",
	posx : 0,
	posy : 0, 
	velocidad : 30
};


function inicio() {
	var canvas = document.getElementById('canvas');
	tablero = canvas.getContext('2d');

	//numAleatorioMonedas(); 
	fondo.imagen = new Image();
	fondo.imagen.src = fondo.fondoURL;
	//fondo.imagen.onload = dibujarFondo;

	mario.imagen = new Image();
	mario.imagen.src = mario.marioURL;
	mario.imagen.onload = dibujar;

}

function detectarTeclado() {

	if(codigo == teclas.RIGHT){
		mario.posx = mario.posx +1;
		if (mario.posx > 880) {
			mario.posx = 0;
		}
		
	}

	if(codigo == teclas.LEFT){
		mario.posx = mario.posx - 1;
		if (mario.posx < 0) {
			mario.posx = 880;
		}
    }

    if(codigo == teclas.UP){
		mario.posy = mario.posy - 1;
		if (mario.posy < 0) {
			mario.posy = 480;
		}
    }

    if(codigo == teclas.DOWN){
		mario.posy = mario.posy + 1;
		if(mario.posy > 480){
			mario.posy = 0;
		}
    }

}

function detectarDireccion(evento) {
	codigo = evento.keyCode;
}

function dibujar() {

	tablero.clearRect(0,0,900,500);

	tablero.drawImage(fondo.imagen,0,0);

	document.addEventListener("keydown", detectarDireccion);
	detectarTeclado();
	
    tablero.drawImage(mario.imagen,mario.posx,mario.posy);	

    setTimeout(dibujar, mario.velocidad);
}

 