
let numeroSecreto;
let cntIntentos;
let maxIntentos=3;
let lista=[];
let numeroMax=10;


function numeroAleatorio(){

    let numeroAl= Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroAl);
    if(lista.length == numeroMax){
        return lista=[];
    }else if(lista.includes(numeroAl)){
            return numeroAleatorio();
    
    }else{
            lista.push(numeroAl);   
            return numeroAl;
    
        }
    }

    



function verificarIntento(){

    let numero  = parseInt(document.getElementById('numeroUsuario').value);

    if(numero === numeroSecreto){ 
        asignarTexto("h1", `Acertaste el numero es ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(numero > numeroSecreto){
        asignarTexto("h1", "Es un numero mas bajo");
        limpiar();              
    }else{
        asignarTexto("h1", "Es un numero mas alto");  
        limpiar();
    }
    
    intentos(cntIntentos);
    cntIntentos++; 
    
}

function limpiar(){
    document.querySelector('#numeroUsuario').value='';
    

}

function intentos(cantidad){
    
    let cantidadIntentos = cantidad;
    if (cantidadIntentos == maxIntentos) {
        asignarTexto("h1", "Haz Perdido");
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
}

function reiniciarJuego() {

    limpiar();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    
}

function asignarTexto(elemento, texto){

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
    

}

function condicionesIniciales(){
    asignarTexto("h1", "juego del numero secreto");
    asignarTexto("p","Escoge un numero del 1 al 10!");
    numeroSecreto = numeroAleatorio();
    cntIntentos=1;
    console.log(numeroSecreto); 
    console.log(lista);

}

condicionesIniciales();

