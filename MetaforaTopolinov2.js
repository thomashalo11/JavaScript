

function start() {
    /*
    let soggetto=document.getElementById("soggetto").value.toUpperCase();
    let obiettivo=document.getElementById("obiettivo").value.toUpperCase();
    let motivazione=document.getElementById("motivazione").value.toUpperCase();
    let contesto=document.getElementById("contesto").value.toUpperCase();
    let comportamento=document.getElementById("comportamento").value.toUpperCase();
    let comportamentoAdeguato=document.getElementById("comportamentoAdeguato").value.toUpperCase();
    let comportamentoInadeguato=document.getElementById("comportamentoInadeguato").value.toUpperCase();
    let conseguenzeNegative=document.getElementById("conseguenzeNegative").value.toUpperCase();
    let distanza=document.getElementById("distanza").value.toUpperCase();
    */
    var contSi, contNo, topolino, formaggio, fame, labirinto, strada, stradaOK, stradaKO, testata, motivato;
   


    if(soggetto=="")
        soggetto="SOGGETTO";
    if(obiettivo=="")
        obiettivo="OBIETTIVO";
    if(motivazione=="")
        motivazione="MOTIVAZIONE";
    if(contesto=="")
        contesto="CONTESTO";
    if(comportamento=="")
        comportamento="COMPORTAMENTO";
    if(comportamentoAdeguato=="")
        comportamentoAdeguato="COMPORTAMENTO ADEGUATO";
    if(comportamentoInadeguato=="")
        comportamentoInadeguato="COMPORTAMENTO INADEGUATO";
    if(conseguenzeNegative=="")
        conseguenzeNegative="CONSEGUENZE NEGATIVE";
    document.getElementById("buttonSx").disabled = true;
    document.getElementById("buttonDx").disabled = true;
}
   
    function popUp(pagina) {
        window.open(pagina, '', 'width=560,height=390,left=500,top=100,resizable=yes,toolbar=no,scrollbarsno,status=no');
    }


    function fInizio() {
        buttonSx.disabled = false;
        buttonDx.disabled = false;


        topolino=document.getElementById("soggetto").value.toUpperCase();
        formaggio=document.getElementById("obiettivo").value.toUpperCase();
        fame=document.getElementById("motivazione").value.toUpperCase();
        labirinto=document.getElementById("contesto").value.toUpperCase();
        strada=document.getElementById("comportamento").value.toUpperCase();
        stradaOK=document.getElementById("comportamentoAdeguato").value.toUpperCase();
        stradaKO=document.getElementById("comportamentoInadeguato").value.toUpperCase();
        testata=document.getElementById("conseguenzeNegative").value.toUpperCase();
        // Motivato serve per un' altra funzione
        motivato=document.getElementById("buttonSx").value.toUpperCase();
        motivato=document.getElementById("buttonDx").value.toUpperCase();
        document.getElementById("buttonSx").disabled = false;
        document.getElementById("buttonDx").disabled = false;


        document.getElementById("narrazione").value += "\n Test";
       
    }
    function btnSinistro() {


    }


    function btnDestro() {




    }


   
       
       
           


   




   
    /*
    let paragraph = `<br> ${soggetto} vuoi raggiungere ${obiettivo} ? NO!"
    <br> mancando ${motivazione} per raggiungere ${obiettivo}, ${soggetto} nel contesto ${contesto} non raggiungerai l' obiettivo!
    <br> ${soggetto} vuoi raggiungere ${obiettivo}? Sì!
    <br> ${soggetto} quale ${comportamento} scegli?
    <br> ATTENZIONE ${soggetto} la scelta ${comportamentoInadeguato} ti allontana dall' ${obiettivo}
    <br> :c ${soggetto} ti sei allontanato troppo e hai scelto la strada chiusa ${comportamentoInadeguato} e ti sei scontrato con ${conseguenzeNegative}
    <br> ${soggetto} quale COMPORTAMENTO scegli?
    <br> ${soggetto} la scelta ${comportamentoAdeguato} ti avvicina all' OBIETTIVO continua così!
    <br> Coraggio ci sei quasi, fai l' ultimo passo!
    <br> COMPLIMENTI ${soggetto} hai raggiunto l' OBIETTIVO!!!`;


    document.getElementById("output").innerHTML = paragraph;
    */






