const numeroInput = document.getElementById("exampleInputNumero");
const mensagemInput = document.getElementById("exampleInputMensagem");
const linkResultado = document.getElementById("linkResultado");
const resultadoCard = document.getElementById("resultadoCard");
const botaoCopiar = document.getElementById("botao-copiar");

resultadoCard.style.display = "none";

function GetValues() {
    numero = numeroInput.value;
    mensagem = mensagemInput.value;
    if (mensagemInput.value.length < 1) {
        alert("Mensagem vazia!");
        return
    }
    GerarLink(numero, mensagem);
}

function GerarLink(numero, mensagem) {
    var msg = mensagem.replace(/ /g, "%20");
    var str = `https://wa.me/55${numero}?text=${msg}%20`;
    linkResultado.value = str;

    botaoCopiar.innerText = "Copiar"
    resultadoCard.style.display = "block";
}

function CopyToClipboard() {
    // Get the text field
    var copyText = linkResultado;
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    //navigator.clipboard.writeText(copyText);
    document.execCommand('copy');
    botaoCopiar.innerText = "Copiado!"
    // Alert the copied text
    

    limparCampos();
}

function limparCampos() {
    mensagemInput.value = ""; 
    numeroInput.value = "";
}
