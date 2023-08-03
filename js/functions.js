// Array origenes
const origenes = [
  { nombre: "HONG KONG", tarifa: 700 },
  { nombre: "MIAMI", tarifa: 500 },
  { nombre: "VALENCIA", tarifa: 800 },
  { nombre: "SANTOS", tarifa: 200 }
];

// Ingresar nombre de empresa.
let empresa = prompt("Ingrese el nombre de su empresa");
console.log(empresa);

// Clase, tomando en cuenta el tipo de carga y el origen.
class Carga {
  constructor(tipoCarga, origen) {
    this.tipoCarga = tipoCarga;
    this.origen = origen;
  }
}

// Función para buscar el origen en el array de origenes
function buscarOrigen(origen) {
  return origenes.find(origin => origin.nombre === origen);
}

// Método para agregar un nuevo origen al array buscarOrigen
const nuevoOrigen = { nombre: "AMSTERDAM", tarifa: 450 };
origenes.push(nuevoOrigen);

// Función para calcular el costo de FCL
function calcularCostoFcl(tipoCarga, origen) {
  tipoCarga = prompt("Ingrese el tipo de contenedor: 20 / 40 PIES");

  const tarifaBaseFcl = 4000;

  let costoContenedor;
  if (tipoCarga === "20") {
    costoContenedor = 2000;
  } else if (tipoCarga === "40") {
    costoContenedor = 3000;
  } else {
    costoContenedor = 0;
  }

  let ingresarOrigen = buscarOrigen(origen);

  let costoTotal = tarifaBaseFcl + costoContenedor;

  if (ingresarOrigen) {
    costoTotal += ingresarOrigen.tarifa;
  } else {
    alert("Ingrese un Puerto válido: Hong Kong, Miami, Valencia o Santos");
    return;
  }

  return costoTotal;
}

// Función para calcular el costo de LCL
function calcularCostoLcl(origen) {
  const tarifaBaseLcl = 600;
  let metrosCubicos = parseFloat(prompt("Ingrese los Metros Cúbicos de su carga"));
  let costoPorM3 = 25;

  let ingresarOrigen = buscarOrigen(origen);

  let costoTotal = tarifaBaseLcl + (metrosCubicos * costoPorM3);

  if (ingresarOrigen) {
    costoTotal += ingresarOrigen.tarifa;
  } else {
    alert("Ingrese un Puerto válido: Hong Kong, Miami, Valencia o Santos");
    return;
  }

  return costoTotal;
}

// Función cotizarFlete 
function cotizarFlete(calcularCosto) {
  let tipoCarga = prompt("Ingrese tipo de contenedor: FCL / LCL");
  let origen;

  if (tipoCarga.toUpperCase() === "FCL" || tipoCarga.toUpperCase() === "LCL") {
    origen = prompt("Ingrese el puerto de origen: HONG KONG / MIAMI / VALENCIA / SANTOS");
    if (origen) {
      const costoTotal = calcularCosto(tipoCarga, origen);
      if (costoTotal !== undefined) {
        alert("El valor total es de USD " + costoTotal);
      }
    } else {
      alert("Ingrese un Puerto válido: Hong Kong, Miami, Valencia o Santos");
    }
  } else {
    alert("Ingrese un tipo de carga válida: FCL o LCL");
  }
}

// Ciclo para recotizar 
do {
  cotizarFlete(calcularCostoFcl);

  let recotizar = prompt("¿Deseas cotizar otro Flete? SI /NO ");
  if (recotizar.toLowerCase() !== "si") {
    break;
  }
} while (true);
