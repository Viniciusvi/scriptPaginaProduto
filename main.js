const adicionarComentarioBtn = document.getElementById("adicionarComentarioBtn");
const campoComentario = document.getElementById("campoComentario");
const confirmarComentarioBtn = document.getElementById("confirmarComentarioBtn");
const cancelarComentarioBtn = document.getElementById("cancelarComentarioBtn");
const comentarios = document.getElementById("comentarios");
const comentarioTexto = document.getElementById("comentarioTexto");
const avaliacaoContainer = document.querySelector('.avaliacao-container');
const estrelasInputs = document.querySelectorAll('.avaliacao-container .estrelas input');
const containerConteudoImportante = document.querySelector('.container-conteudo-importante'); // novo contêiner

// Variável para armazenar a quantidade de estrelas selecionadas
let estrelasSelecionadas = 0;

// Mostrar campo de comentário e a nova aba ao clicar em "Adicionar Comentário"
adicionarComentarioBtn.addEventListener("click", () => {
    campoComentario.style.display = "block";
    comentarioTexto.focus();
    avaliacaoContainer.style.display = "block";
    containerConteudoImportante.style.display = "block"; // Mostrar a nova aba
});

// Captura a quantidade de estrelas selecionadas ao clicar em uma delas
estrelasInputs.forEach((estrela) => {
    estrela.addEventListener('change', () => {
        estrelasSelecionadas = parseInt(estrela.value, 10); // Armazena o valor da estrela selecionada
    });
});

// Confirmar e adicionar o comentário
confirmarComentarioBtn.addEventListener("click", () => {
    const texto = comentarioTexto.value.trim();
    const conteudoImportante = document.getElementById("conteudoImportante").value.trim(); // pega o conteúdo importante
    if (texto && estrelasSelecionadas > 0) {
        // Cria um novo container para o comentário e as estrelas
        const novoComentarioContainer = document.createElement("div");
        novoComentarioContainer.classList.add("comentario");

        // Adiciona as estrelas ao novo comentário
        const estrelasContainer = document.createElement("div");
        estrelasContainer.classList.add("estrelas-comentario");
        for (let i = 0; i < estrelasSelecionadas; i++) {
            const estrela = document.createElement("span");
            estrela.innerHTML = "&#9733;"; // estrela preenchida
            estrelasContainer.appendChild(estrela);
        }
        novoComentarioContainer.appendChild(estrelasContainer);

         // Adiciona o conteúdo importante se não estiver vazio
         if (conteudoImportante) {
            const novoConteudoImportante = document.createElement("p");
            novoConteudoImportante.innerHTML = `<strong>${conteudoImportante}</strong>`;
            novoComentarioContainer.appendChild(novoConteudoImportante);
        }

        // Adiciona o texto do comentário
        const novoComentarioTexto = document.createElement("p");
        novoComentarioTexto.textContent = texto;
        novoComentarioContainer.appendChild(novoComentarioTexto);

        // Adiciona o novo comentário ao container de comentários
        comentarios.appendChild(novoComentarioContainer);

        // Limpa os campos e esconde a área de comentário
        comentarioTexto.value = "";
        document.getElementById("conteudoImportante").value = ""; // Limpa o conteúdo importante
        estrelasSelecionadas = 0; // Reinicia a seleção de estrelas
        campoComentario.style.display = "none";
        avaliacaoContainer.style.display = "none";
        containerConteudoImportante.style.display = "none"; // Esconde a nova aba
    } else {
        alert("Por favor, escreva um comentário e selecione a quantidade de estrelas.");
    }
});

// Cancelar o comentário
cancelarComentarioBtn.addEventListener("click", () => {
    comentarioTexto.value = "";
    document.getElementById("conteudoImportante").value = ""; // Limpa o conteúdo importante
    campoComentario.style.display = "none";
    avaliacaoContainer.style.display = "none";
    containerConteudoImportante.style.display = "none"; // Esconde a nova aba
    estrelasSelecionadas = 0; // Reinicia a seleção de estrelas
});
