function validaAceite(value) {
    var enviarButton = document.getElementsByName("enviar")[0];
    enviarButton.disabled = !value;
}

function validaCamposInscricao(){
    var nome = document.frmInscricao.txtnome.value;
    var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente.");
        document.frmInscricao.txtnome.focus();
        return false;
    }

    //rever!!!!
    //var dataNascimento = document.frmInscricao.datanascimento.value;
    //var expRegNasc = new RegExp ("^[0-3]{1}[0-9]{1}[/]{1}[0-1]{1}[0-9]{1}[/]{1}[0-2]{1}[0-9]{3}$");

    //if(!expRegNasc.test(dataNascimento)){
        //alert("Preencha o campo Data de Nascimento corretamente");
        //rever o regexp deste caso
        //document.frmInscricao.dataNascimento.focus();
    //}

    var mail = document.frmInscricao.txtemail.value;
    var expRegMail = new RegExp("^[a-z0-9]{4,}[@]{1}[a-z0-9]{2,}[.]{1}[a-z]{2,}$");

    if (!expRegMail.test(mail)) {
        alert("Preencha o campo E-mail corretamente.");
        document.frmInscricao.txtemail.focus();
        return false;
    }

    var fone = document.frmInscricao.txtfone.value;
    var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");

    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone corretamente.");
        document.frmInscricao.txtfone.focus();
        return false;
    }

   
    return true;
}