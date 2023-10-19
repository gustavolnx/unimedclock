// Função para obter a hora local atual
function atualizarHoraAtual() {
  const dataAtual = new Date();
  const hora = dataAtual.getHours();
  const minutos = dataAtual.getMinutes();

  const horaFormatada = `${hora.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}`;

  document.getElementById("hora-atual").textContent = horaFormatada;
}

// Chama a função para atualizar a hora a cada minuto
setInterval(atualizarHoraAtual, 60000); // Atualiza a cada minuto

atualizarHoraAtual();
