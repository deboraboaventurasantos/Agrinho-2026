// ==========================
// MENU RESPONSIVO
// ==========================

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// ==========================
// CALCULADORA DE IMPACTO
// ==========================

function calcularImpacto() {

    const arvores = Number(document.getElementById("arvores").value);
    const resultado = document.getElementById("resultado");

    if (arvores <= 0 || isNaN(arvores)) {
        resultado.innerHTML = "Digite uma quantidade válida de árvores.";
        resultado.style.color = "red";
        return;
    }

    const co2 = arvores * 22;

    resultado.innerHTML =
        `As ${arvores} árvores podem absorver aproximadamente <strong>${co2} kg</strong> de CO₂ por ano.`;

    resultado.style.color = "green";
}

// ==========================
// QUIZ
// ==========================

function quiz(resposta) {

    const resultado = document.getElementById("quizResultado");

    if (resposta) {

        resultado.innerHTML =
        "✅ Correto! O plantio direto ajuda a conservar o solo.";

        resultado.style.color = "green";

    } else {

        resultado.innerHTML =
        "❌ Incorreto. As queimadas prejudicam o solo e o meio ambiente.";

        resultado.style.color = "red";

    }

}

// ==========================
// GRÁFICO
// ==========================

const canvas = document.getElementById("grafico");

if (canvas) {

    const ctx = canvas.getContext("2d");

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "2022",
                "2023",
                "2024",
                "2025",
                "2026"
            ],

            datasets: [{

                label: "Produção Agrícola (%)",

                data: [
                    65,
                    72,
                    80,
                    88,
                    95
                ],

                backgroundColor: [
                    "#43a047",
                    "#66bb6a",
                    "#81c784",
                    "#a5d6a7",
                    "#c8e6c9"
                ],

                borderColor: "#2e7d32",

                borderWidth: 2

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: true

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    });

}

// ==========================
// MENSAGEM DO FORMULÁRIO
// ==========================

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    formulario.reset();

});

// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ==========================
// BOTÃO "VOLTAR AO TOPO"
// ==========================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";

botaoTopo.id = "topo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px";
botaoTopo.style.fontSize = "20px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#2e7d32";
botaoTopo.style.color = "white";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 10px rgba(0,0,0,0.3)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});






