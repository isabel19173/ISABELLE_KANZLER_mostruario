document.addEventListener("DOMContentLoaded", function() {
    
    // Animação de digitação
    new Typed(".text", {
        strings: [
            "Desenvolvedora Web.",
            "Estudante de Mecânica.",
            "Programadora Front-End."
        ],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    });
});

// Função para enviar os dados do formulário para o WhatsApp
function enviarWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá! Meu nome é ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    
    const numero = "5579999208053"; // Seu número
    
    // Abre o link do WhatsApp em uma nova guia
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${texto}`;
    window.open(url, "_blank");
}