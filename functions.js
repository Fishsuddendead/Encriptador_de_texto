function encriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    const codigo = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var codigo_out = document.querySelector("#texto_out");
    if (codigo != ""){
        var out = ""
        for(var i=0; i < codigo.length; i++){
            if(((codigo[i] < 'a') || (codigo[i] > 'z')) && (codigo[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((codigo.length == 1 && codigo == " ") || codigo.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(codigo[i] == 'a'){
                out += traduccion["a"] ;
            }
            else if(codigo[i] == 'e'){
                out += traduccion["e"];
            }
            else if(codigo[i] == 'i'){
                out += traduccion["i"]; 
            }
            else if(codigo[i] == 'o'){
                out += traduccion["o"]; 
            }
            else if(codigo[i] == 'u'){
                out += traduccion["u"]; 
            }
            else{
                out += codigo[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        codigo_out.innerHTML = out;
    }

    return;

}

function desencriptar(traduccion){
    document.querySelector("#warning").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#warning").style.color = "red";
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a");
        texto = texto.replace(new RegExp(traduccion["e"], "g"), "e");
        texto = texto.replace(new RegExp(traduccion["i"], "g"), "i");
        texto = texto.replace(new RegExp(traduccion["o"], "g"), "o");
        texto = texto.replace(new RegExp(traduccion["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#enc');
const des = document.querySelector('#des');
const copy = document.querySelector('#copiar');

var traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(traduccion);} );
des.addEventListener( 'click', function() {desencriptar(traduccion);} );
copy.addEventListener( 'click', function() {clipboard();} );