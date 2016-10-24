
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
    
    finestra = window.open(joc, arguments[1], "width=800,height=600,left=250,\n\
        top=250,status=0,fullscreen=1,menubar=0,toolbar=0");
    window.finestra.focus();
    
    return resposta;
}



