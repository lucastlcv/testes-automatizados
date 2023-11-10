  // Gere um número de telefone com 11 dígitos aleatórios começando com "11"
function gerarNumeroTelefoneFalso() {
  let numero = '11'; // Inicia com "11"
  for (let i = 0; i < 9; i++) {
    numero += Math.floor(Math.random() * 10); // Adiciona dígitos aleatórios
  }
  return numero;
}
  export { gerarNumeroTelefoneFalso };

//Gerador de CPF
function gerarCPFFalsoValido() {
  function gerarDigitoVerificador(cpfParcial) {
    const numeros = cpfParcial.split('').map(Number);
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
      soma += numeros[i] * (10 - i);
    }

    const resto = soma % 11;
    const digito = resto < 2 ? 0 : 11 - resto;

    return digito;
  }

  let cpfParcial = '';
  for (let i = 0; i < 9; i++) {
    cpfParcial += Math.floor(Math.random() * 10);
  }

  const primeiroDigito = gerarDigitoVerificador(cpfParcial);
  const cpfComPrimeiroDigito = cpfParcial + primeiroDigito;

  const segundoDigito = gerarDigitoVerificador(cpfComPrimeiroDigito);
  const cpfFalsoValido = cpfComPrimeiroDigito + segundoDigito;

  return cpfFalsoValido;
}
  export { gerarCPFFalsoValido }

// Função para obter a data atual no formato desejado (DD/MM/YYYY)
function getCurrentDate() {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Mês é base 0, então adicionamos 1
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}
  export { getCurrentDate }