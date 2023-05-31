function validaAceite(value) {
    var enviarButton = document.getElementsByName("enviar")[0];
    enviarButton.disabled = !value;
}