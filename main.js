function validarCampos() {

    let valorCampoA = parseFloat(document.getElementById('campo_A').value);
    let valorCampoB = parseFloat(document.getElementById('campo_B').value);

    if (valorCampoA < valorCampoB) {
        alert('A entrada B e maior que a entrada A.');
        return true; 
    } else {
        alert('A entrada B não é maior que a entrada A.');
        return false; 
    }
}
