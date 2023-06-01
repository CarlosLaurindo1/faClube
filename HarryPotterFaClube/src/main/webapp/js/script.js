function validaAceite(value) {
    var enviarButton = document.getElementsByName("enviar")[0];
    enviarButton.disabled = !value;
}

function validaCamposInscricao{
    var nome = document.inscricao.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if(!expRegNome.test(nome)){
        alert("Preencha o campo Nome corretamente.");
        document.inscricao.txtnome.
    }
}}