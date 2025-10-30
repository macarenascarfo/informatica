document.getElementById('formIMC').addEventListener('submit', function(e) {
    e.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado');
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, ingresa valores válidos para peso y altura.';
        resultado.style.color = '#dc3545';
        return;
    }
    const imc = peso / (altura * altura);
    let interpretacion = '';
    let color = '';
    if (imc < 18.5) {
        interpretacion = 'Bajo peso';
        color = '#17a2b8'; // celeste
    } else if (imc < 25) {
        interpretacion = 'Peso normal';
        color = '#28a745'; // verde
    } else if (imc < 30) {
        interpretacion = 'Sobrepeso';
        color = '#ffc107'; // amarillo
    } else {
        interpretacion = 'Obesidad';
        color = '#dc3545'; // rojo
    }
    resultado.innerHTML = `Tu IMC es: <strong>${imc.toFixed(1)}</strong><br>${interpretacion}`;
    resultado.style.color = color;
})