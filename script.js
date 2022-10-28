const Texto = document.querySelector(".texto");
const Mensaje = document.querySelector(".mensaje");
const NotFound = document.querySelector(".texto__not__found");
const Instruction = document.querySelector(".texto__instructions");
const Copy = document.querySelector(".copiar");


function EncriptarText(){
    const TextoEncriptado = encriptar(Texto.value);
    Mensaje.value = TextoEncriptado;
    Mensaje.style.backgroundImage = "none";
    NotFound.style = "visibility: hidden";
    Instruction.style = "visibility: hidden";
    Texto.value = "";
    Copy.style = "visibility: visible";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function DesencriptarText(){
    const TextoEncriptado = desencriptar(Texto.value);
    Copy.style = "visibility: visible";
    Mensaje.value = TextoEncriptado;
    Mensaje.style.backgroundImage = "none";
    NotFound.style = "visibility: hidden";
    Instruction.style = "visibility: hidden";
    Texto.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    Copy.style = "return";
    Mensaje.select();
    navigator.clipboard.writeText(Mensaje.value);
    Mensaje.value = "";
    Mensaje.style = "return";
    NotFound.style = "return";
    Instruction.style = "return";
    Texto.focus();
}