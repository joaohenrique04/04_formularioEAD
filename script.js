function separaNome () {
    const nomInteiro = document.getElementById('completo').value;

    const arrayNome = nomInteiro.split(' ');
    const prim = arrayNome[0];
    const ult = arrayNome[1];

    if (prim) {
        document.getElementById('nome').value = prim;
    }
    if (ult) {
        document.getElementById('sob').value = ult;
    }
  }

function redefinir () {
    document.getElementById('nome').value = null;
    document.getElementById('sob').value = null;
    document.getElementById('completo').value = null;
}