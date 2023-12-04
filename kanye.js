/*jslint browser:true */
function muudaLogo() {
    //muudab veebilehel olevat logo
    "use strict";
    document.getElementById("logo").src = "kanye_laas.png";
}

function klooniTeksti() {
    //kloonib kloonimise lõigu pealkirja
    "use strict";
    document.getElementById("kloon").innerHTML = document.getElementById("kloon").innerHTML + " Kloonimine";
}

function mangiMuusika() {
    //mängib X-filesist tuntud muusikat
    "use strict";
    document.getElementById("illuminati").play();
}