function enviarPedido() {
    //COLETA DOS DADOS DO FORMULARIO
  const nome = document.getElementById("nome").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const livro1 = document.getElementById("livro1").checked;
  const livro2 = document.getElementById("livro2").checked;

    //VALIDAR SE USUARIO NAO PREENCHEU NOME E WHATSAPP 
  if (!nome || !whatsapp) {
    alert("Por favor, preencha seu nome e número de WhatsApp.");
    return;
  }

    //GARANTE QUE O NUMERO TENHA PELO MENOS 10 DIGITOS 
  if (whatsapp.length < 10) {
    alert("Por favor, insira um número de WhatsApp válido (com DDD).");
    return;
  }

    //VERIFICA SE OS LIVROS FORAM ESCOLHIDOS 
  let livros = [];
  if (livro1) livros.push("Jornada pelas Letras Hebraicas");
  if (livro2) livros.push("Mentoria em Gestão Emocional");

  if (livros.length === 0) {
    alert("Por favor, selecione pelo menos um livro.");
    return;
  }

   //CRIA MENSAGEM PARA WHATSAPP 
  const mensagem = `Olá, meu nome é ${nome}. Quero fazer o pedido dos seguintes livros:\n\n${livros.join(
  "\n"
)}\n\nMeu número de WhatsApp é: ${whatsapp}`;

//PREPARA O LINK DO WHATSAPP
const telefoneDestino = "5531992497797"; // Número do Apóstolo Celson Moura (ou da loja)
const link = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(mensagem)}`;

// Mostrar mensagem de sucesso na tela
  const mensagemElemento = document.getElementById("mensagemSucesso");
  mensagemElemento.style.display = "block";

//ABRE O WHATSAPP EM NOVA ABA  APÓS 1 SEGUNDO

  setTimeout(() => {
    window.open(link, "_blank");
  }, 1000);


}