
var finestra;

function obrir() {
    var resposta = true;
    var joc;
    
    switch(arguments[0]) {
        case 0:
            joc = "spock.html";
            break;
        case 1:
            joc = "penjat.html";
            break;
        case 2:
            joc = "morra.html";
           break;
       default:
           resposta = false;
           joc = "";
           break;
    }
    
    finestra = window.open(joc, arguments[1], "width=900,height=500,left=250,\n\
        top=250,status=0,fullscreen=1,menubar=0,toolbar=0");
    window.finestra.focus();
    
    return resposta;
}


//-------------------------------------EL JOC del Spock-------------------------------------------
function jocSpock() {
    var resposta;
    var joc = Math.floor((Math.random() * 5));//gen num entre 0 i 4
    var matriu = ['llangardaix', 'paper', 'pedra', 'spock', 'tissores'];
    var respostes = [
        /*0*/ "Empat!", 
        /*1*/ "Llangardaix menja paper.", 
        /*2*/ "Pedra aplasta el llangardaix.", 
        /*3*/ "Llangardaix enverina Spock.",
        /*4*/ "Les tissores decapiten el llangardaix.", 
        /*5*/ "Paper tapa pedra.", 
        /*6*/ "Paper desautoritza SpocK.", 
        /*7*/ "Tissores tallen paper.",
        /*8*/ "Spock vaporitza pedra",
        /*9*/ "Pedra aplasta tissores",
        /*10*/ "Spock trenca tissores"
    ];
    //Frase resultat
    document.getElementById("pc").innerHTML = "El PC ha escollit :" + matriu[joc];
    //Creació de les imatges
    document.getElementById("jugador").innerHTML = "Jugador:<input type='image' src='img/" + matriu[arguments[0]] + ".jpeg' />\n\
        PC:<input type='image' src='img/" + matriu[joc] + ".jpeg' />";
    //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
    switch(arguments[0]) {
        //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
        case 0:
            if (joc === 0) { resposta = respostes[0];
            } else if (joc === 1) { resposta = respostes[1] + "Guanyes!";
            } else if (joc === 2) { resposta = respostes[2] + "Perds!";
            } else if (joc === 3) { resposta = respostes[3] + "Guanyes!";
            } else if (joc === 4) { resposta = respostes[4] + "Perds!";}
            break;
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
        case 1:
            if (joc === 0) { resposta = respostes[1] + "Perds!";
            } else if (joc === 1) { resposta = respostes[0];
            } else if (joc === 2) { resposta = respostes[5] + "Guanyes!";
            } else if (joc === 3) { resposta = respostes[6] + "Guanyes!";
            } else if (joc === 4) { resposta = respostes[7] + "Perds!";}
            break;
        case 2:
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
            if (joc === 0) { resposta = respostes[2] + "Guanyes!";
            } else if (joc === 1) { resposta = respostes[5] + "Perds!";
            } else if (joc === 2) { resposta = respostes[0];
            } else if (joc === 3) { resposta = respostes[8] + "Perds!";
            } else if (joc === 4) { resposta = respostes[9] + "Guanyes!";}
            break;
        case 3:
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
            if (joc === 0) { resposta = respostes[3] + "Perds!";
            } else if (joc === 1) { resposta = respostes[6] + "Perds!";
            } else if (joc === 2) { resposta = respostes[8] + "Guanyes!";
            } else if (joc === 3) { resposta = respostes[0];
            } else if (joc === 4) { resposta = respostes[10] + "Guanyes!";}
            break;
        case 4:
            //llangardaix:0, paper:1, pedra:2, spock:3, tissores:4
            if (joc === 0) { resposta = respostes[4] + "Guanyes!";
            } else if (joc === 1) { resposta = respostes[7] + "Guanyes!";
            } else if (joc === 2) { resposta = respostes[9] + "Perds!";
            } else if (joc === 3) { resposta = respostes[10] + "Perds!";
            } else if (joc === 4) { resposta = respostes[10];}
            break;
        default:
            return false;
            break;   
    }
    
    document.getElementById("desti").innerHTML = resposta;
    document.getElementById("jugar").hidden = false;
    document.getElementById("menu").hidden = false;
    
    return true;        
}


//------------------ EL JOC del PENJAT ----------------------------------------------------------
var peli = []; //vector de pel.lis
var cont = 0; //contador d'entrada de caràcters
//Mirar més endavant problema de majúscules, tot en minúscules!!!!!!!!!!!!!!
var numIntents = 5;
var peliEscollida;
//Per body onload
function carrega () {
    document.getElementById("titolh3").innerHTML = "Només tindràs " + (numIntents + 1) + " intents!!!!!";
    
    //BBDD intern de pe.lícules--més endavant
    pelis = [
        /*0*/"star wars",
        /*1*/"star trek",
        /*2*/"el señor de los anillos",
        /*3*/"el silencio de los corderos",
        /*4*/"south park",
        /*5*/"banana joe",
        /*6*/"outlander",
        /*7*/"el ultimo samurai",
        /*8*/"the walking dead",
        /*9*/"los goonies"
    ];
    var numPeli = Math.floor(Math.random()*pelis.length);//genera tants elem com num d'items la BBDD
    peliEscollida = pelis[numPeli];
    
    for(i=0;i<peliEscollida.split("").length;i++){
        peli[i] = "-";
    }
    
    document.getElementById("pc").innerHTML = peli;
    
    console.log(peliEscollida);//Xuleta per veure la pel.li escollida i comprovar el funcionament
}

function jocPenjat() {
    var ent = arguments[0];
    //ent = ent.toLowerCase();
    var vectorPeli;
    trobat = false;
        
    vectorPeli = peliEscollida.split("");
    for(i = 0; i < vectorPeli.length; i++){
        if(ent ===  vectorPeli[i]) {
            peli[i] = ent;
            trobat = true;
        } 
    }
    if(!trobat) {//conta intents si no l'ha trobat
        cont++;
    }
    //Contador fins a final de la partida
    if(cont < numIntents) {
        document.getElementById("intents").innerHTML = "Nombre d'intents: " + cont;
        //cont++;
        document.getElementById("pc").innerHTML = peli;
        animaPenjat();
    } else if(cont === numIntents) {
        document.getElementById("intents").innerHTML = "Et queda 1 intent, ja portes " + cont + " intents.";
        document.getElementById("pc").innerHTML = peli;
        animaPenjat();
    } else {
        document.getElementById("pcFinal").hidden = false;
        document.getElementById("pcFinal").innerHTML = "Has perdut. Has superat el límit d'intents";
        document.getElementById("intents").innerHTML = "";
        tancarPenjat();
     }
    
    return true;
}

//Va definint la imatge del penjat, a mesura que es van fent intents
function animaPenjat() {
    var resposta;
    var blur = 7;//Valor d'inici de l'atribut css de la imatge del penjat
    blur = blur - (cont + 2);//Anant disminuint el valor de l'atribut de css per millorar la imatge
    
    resposta = "blur(" + blur +"px)";
    
    document.getElementById("penjatImg").style.filter = resposta;
    document.getElementById("penjatImg").style.webkitFilter = resposta;/* Safari 6.0 - 9.0 */
}

function comprovaPenjat() {
    var resposta;
    
    if(arguments[0] === peliEscollida) { 
        resposta = "Has guanyat!";
    } else {
        resposta = "Has Perdut. La resposta correcta és '" + peliEscollida + "'";
    }
    
    document.getElementById("pcFinal").hidden = false;
    document.getElementById("pcFinal").innerHTML = resposta;
    tancarPenjat();
    
    return true;
}

function tancarPenjat() {
    document.getElementById("jugar").hidden = false;
    document.getElementById("menu").hidden = false;
    document.getElementById("usuari").innerHTML = "";
    document.getElementById("peli").innerHTML = "";
    document.getElementById("usuari").innerHTML = "";
    document.getElementById("pc").innerHTML = "";
    document.getElementById("intents").innerHTML = "";
}