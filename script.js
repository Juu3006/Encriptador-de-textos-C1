const Texto = document.querySelector(".texto");
const Mensaje = document.querySelector(".mensaje");

function EncriptarText(){
    const TextoEncriptado = encriptar(Texto.value);
    Mensaje.value = TextoEncriptado;
    Mensaje.style.backgroundImage = "none";
    Texto.value = "";
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
    Mensaje.value = TextoEncriptado;
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
    Mensaje.select();
    navigator.clipboard.writeText(Mensaje.value);
    Mensaje.value = "";
}