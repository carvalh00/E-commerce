// FUNÇÕES DE FILTRAR PRODUTOS
function filterProducts() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let productContainer = document.getElementById('container-produto');
    let cards = productContainer.getElementsByClassName('card');
    let vazio = false;

    for (let i = 0; i < cards.length; i++) {
        let caption = cards[i].getElementsByTagName('figcaption')[0];
        if (caption) {
            let textValue = caption.textContent || caption.innerText;
            if (textValue.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = "";
                vazio = true;
            } else {
                cards[i].style.display = "none";
            }
        }
    }

    if (!vazio && filter !== "") {
        alert('A busca "' + input.value + '" não foi encontrada');
        input.value = "";
        
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "";
        }
    }
}

// FUNÇÕES INTRO DE IMAGENS
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".img-efected");

    const observerOptions = {
        root: null, // Use o viewport como root
        rootMargin: "0px",
        threshold: 0.1 // A imagem precisa estar 10% visível para ativar a função
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Pare de observar a imagem depois que ela se torna visível
            }
        });
    }, observerOptions);

    images.forEach(image => {
        observer.observe(image);
    });
});


// FUNÇÕES DO FORMULARIO
function selecaoRaca() {
    let petSelect = document.getElementById('F-pet');
    let selecionarRaca = document.getElementById('F-raca');
    let selectedPet = petSelect.value;

    selecionarRaca.innerHTML = '<option value="">Selecione a Raça</option>';

    if (selectedPet === 'cao') {
        let racaCao = ['Pomerânia(Spitz Alemão)', 'Bulldog Francês', 'Pastor Alemão', 'Shih Tzu', 'Rottwiler', 'Pug', 'Yorkshire Terrier', 'Border Collie', 'Golden Retriever', 'Labrador', 'Poodle', 'SRD(Sem Raça Definida)'];
        racaCao.forEach(function(raca) {
            let option = document.createElement('option');
            option.value = raca.toLowerCase().replace(/ /g, '-');
            option.text = raca;
            selecionarRaca.appendChild(option);
        });
    } else if (selectedPet === 'gato') {
        let racaGato = ['Persa', 'Ragdoll', 'Ashera', 'Siamês', 'Maine Coon', 'American Shorthair', 'Angorá', 'Exótico', 'Sphynx', 'British Shorthair', 'SRD(Sem Raça Definida)'];
        racaGato.forEach(function(raca) {
            let option = document.createElement('option');
            option.value = raca.toLowerCase().replace(/ /g, '-');
            option.text = raca;
            selecionarRaca.appendChild(option);
        });
    }
}

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let nomeCompleto = document.getElementById('F-nome-completo').value;
    let telefone = document.getElementById('F-telefone').value;
    let email = document.getElementById('F-email').value;
    let pet = document.getElementById('F-pet').value;
    let raca = document.getElementById('F-raca').value;
    let sexo = document.querySelector('input[name="F-sexo"]:checked');
    let idadePet = document.getElementById('F-idade-pet').value;
    let errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (!nomeCompleto || !telefone || !email || !pet || !raca || !sexo || !idadePet) {
        errorMessage.textContent = 'Por favor, preencha todos os campos!';
        return;
    }

    alert('Obrigado '+nomeCompleto+', em breve entraremos em contato!');

    document.getElementById('contato-form').reset();

    console.log('Nome Completo:', nomeCompleto);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Pet:', pet);
    console.log('Raça:', raca);
    console.log('Sexo:', sexo.value);
    //console.log('ID do Sexo:', sexo.id);
    console.log('Faixa Etária:', idadePet);
});

function FormatarContato(input) {
    var valor = input.value.replace(/\D/g, '');
    
    if (valor.length === 10) {
      valor = valor.replace(/(\d{2})(\d{4})(\d{4})/, '($1)$2-$3');
    } else if (valor.length === 11) {
      valor = valor.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3');
    }
    
    input.value = valor;
}