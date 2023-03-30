const ddd = [
    "68", "82", "92", "97", "96",
    "71", "73", "74", "75", "77",
    "85", "88", "61", "27", "28",
    "62", "64", "98", "99", "31",
    "32", "33", "34", "35", "37",
    "38", "67", "65", "66",
    "91", "93", "94", "83",
    "81", "87", "86", "89",
    "41", "42", "43", "44", "45", "46",
    "21", "22", "24", "84", "69",
    "95", "51", "53", "54", "55",
    "47", "48", "49", "79",
    "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "63"
    ];

function validar() {
    const form = document.getElementById("formzin");
    const campos = form.elements;
    let preenchido = true;
    for (let i = 0; i < campos.length; i++) {
        if (!campos[i].value) {
        preenchido = false;
        break;
        }
    }
    if (!preenchido) {
        alert("Preencha todos os campos!");
    }

    const dddAtual = document.getElementById('ddd').value;
    console.log(dddAtual);
    let dddEncontrado = false;
    for (let i = 0; i < ddd.length; i++) {
        if (dddAtual = ddd[i]) {
            dddEncontrado = true;
            break;
        }
    }
    if (!dddEncontrado) {
        alert('CADE O DDD');
    }
}