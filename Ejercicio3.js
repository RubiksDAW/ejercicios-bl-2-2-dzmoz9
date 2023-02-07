// // Ejercicio 3:

// // Tomando 2 fechas en formato DD/MM/YYYY calculad la cantidad de días entre ambas.

// IDEA: pasar la fecha en el formato especificado y descomponerla para posteriormente asignar los valores al objeto date con metodos como setDay(), setDate() y setMonth()

function calcularDiferenciaDias(fechaA, fechaB) {
  let fechaFinDesglosada = fechaA.split('/');
  let fechaFin = new Date();
  fechaFin.setDate(Number(fechaFinDesglosada[0])),
    fechaFin.setMonth(Number(fechaFinDesglosada[1] - 1)),
    fechaFin.setFullYear(fechaFinDesglosada[2]);

  let fechaInicioDesglosada = fechaB.split('/');
  let fechaInicio = new Date();
  fechaInicio.setDate(Number(fechaInicioDesglosada[0])),
    fechaInicio.setMonth(Number(fechaInicioDesglosada[1] - 1)),
    fechaInicio.setFullYear(fechaInicioDesglosada[2]);

  let diferencia = fechaFin.getTime() - fechaInicio.getTime();
  let diferenciaEnDias = diferencia / 1000 / 60 / 60 / 24;

  return Math.abs(Math.round(diferenciaEnDias));
}

console.log(
  `Días transcurridos entre una fecha y otra: ${calcularDiferenciaDias(
    '25/03/2023',
    '25/05/2024'
  )}`
);

// FECHAS EN JAVASCRIPT

// En JavaScript, el objeto Date usa un índice basado en cero para los meses, lo que significa que enero se representa como 0, febrero como 1, y así sucesivamente. Por eso, en las líneas fechaFin.setMonth(Number(fechaFinDesglosada[1] - 1)) y fechaInicio.setMonth(Number(fechaInicioDesglosada[1] - 1)) se resta 1 del mes parseado. Esto asegura que se establece el mes correcto para el objeto Date, ya que la entrada se proporciona en un índice basado en 1.

// Con new Date() declaramos una nueva fecha, la cual muestra la hora actual del sistema.

// Si pasamos una cadena como parametro esta cadena se convierte el texto con formato YYY/MM/DD o HH:MM:SS a una fecha.
