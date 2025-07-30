document.addEventListener("DOMContentLoaded", function() {
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var fecha = new Date();
    var año = fecha.getFullYear();
    const numeroMes = fecha.getMonth();
    var mes = meses[numeroMes];

    var formatofecha = `® ${mes} ${año}`;

    document.getElementById("mes").innerHTML = formatofecha;
});
