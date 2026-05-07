const totalVagas = 20;

const vagasLivres = document.getElementById("livres");
const vagasOcupadas = document.getElementById("ocupadas");
const taxa = document.getElementById("ocupacao");

const estacionamento = document.getElementById("parkingGrid");

function gerarVagas() {

    estacionamento.innerHTML = "";

    let livres = 0;
    let ocupadas = 0;

    for(let i = 1; i <= totalVagas; i++) {

        const vaga = document.createElement("div");

        vaga.classList.add("vaga");

        const ocupada = Math.random() > 0.5;

        if(ocupada) {

            vaga.classList.add("ocupada");

            vaga.innerHTML = `
                <i class="fas fa-car"></i>
                <p>Vaga ${i}</p>
            `;

            ocupadas++;

        } else {

            vaga.classList.add("livre");

            vaga.innerHTML = `
                <i class="fas fa-square-parking"></i>
                <p>Vaga ${i}</p>
            `;

            livres++;
        }

        estacionamento.appendChild(vaga);
    }

    atualizarDashboard(livres, ocupadas);
}

function atualizarDashboard(livres, ocupadas) {

    vagasLivres.innerText = livres;
    vagasOcupadas.innerText = ocupadas;

    const porcentagem = Math.round((ocupadas / totalVagas) * 100);

    taxa.innerText = porcentagem + "%";
}

gerarVagas();

setInterval(() => {
    gerarVagas();
}, 3000);