document.getElementById('formEvento').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombreEvento = document.getElementById('nombre').value.trim();
    const fechaEvento = new Date(document.getElementById('fecha').value);
const resultado = document.getElementById('resultado');
if (!nombreEvento || isNaN(fechaEvento.getTime())) {
    resultado.textContent = 'Por favor, ingresa un nombre y una fecha válida.';
    return;
}
const hoy = new Date();
hoy.setHours(0,0,0,0); // ignorar horas para comparación exacta
fechaEvento.setHours(0,0,0,0);
const diferenciaTiempo = fechaEvento - hoy;
const diasFaltantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
if (diasFaltantes > 0) {
    resultado.textContent = `Faltan ${diasFaltantes} días para ${nombreEvento}.`;
    resultado.style.color = "#007bff";
} else if (diasFaltantes === 0) {
    resultado.textContent = `¡Hoy es el día del ${nombreEvento}! 🎉`;
    resultado.style.color = "#28a745";
} else {
    resultado.textContent = `El evento "${nombreEvento}" ya ocurrió.`;
    resultado.style.color = "#dc3545";
}
})