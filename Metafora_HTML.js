

function paragrafo() {
    let soggetto=document.getElementById("soggetto").value.toUpperCase();
    let obiettivo=document.getElementById("obiettivo").value.toUpperCase();
    let motivazione=document.getElementById("motivazione").value.toUpperCase();
    let contesto=document.getElementById("contesto").value.toUpperCase();
    let comportamento=document.getElementById("comportamento").value.toUpperCase();
    let comportamentoAdeguato=document.getElementById("comportamentoAdeguato").value.toUpperCase();
    let comportamentoInadeguato=document.getElementById("comportamentoInadeguato").value.toUpperCase();
    let conseguenzeNegative=document.getElementById("conseguenzeNegative").value.toUpperCase();


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
}

