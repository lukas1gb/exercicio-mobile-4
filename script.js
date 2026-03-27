function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const divResultado = document.getElementById('resultado');
    const txtValor = document.getElementById('imc-valor');
    const txtClass = document.getElementById('imc-classificacao');

    if (!peso || !altura) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    txtValor.innerText = `Seu IMC é: ${imc}`;
    txtClass.innerText = `Classificação: ${classificacao}`;
    divResultado.classList.remove('hidden');
}
