//Cotizador Marítimo

let empresa = prompt("Ingrese el nombre de su empresa");
console.log(empresa);

function cotizarFlete() {
  let tipoCarga = prompt("Ingrese tipo de contenedor: FCL / LCL");
  let origen;

  if (tipoCarga.toUpperCase() === "FCL") {
    origen = prompt("Ingrese el puerto de origen: HONG KONG / MIAMI");
    calcularCostoFcl(tipoCarga, origen);
  } else if (tipoCarga.toUpperCase() === "LCL") {
    origen = prompt("Ingrese el puerto de origen: HONG KONG / MIAMI");
    calcularCostoLcl(origen);
  } else {
    alert("Ingrese un tipo de carga válida");
  }
}

//Calcular valor FCL 

function calcularCostoFcl(tipoCarga, origen) {
  const tarifaBase = 4000; // tarifa base de las marítimas
  let costoOrigen = 0;
  let costoContenedor = 0;

  tipoCarga = prompt("Ingrese el tipo de contenedor: 20 / 40 PIES");

  switch (tipoCarga) {
    case "20":
      costoContenedor = 2000;
      break;
    case "40":
      costoContenedor = 3000;
      break;
    default:
      return "Ingrese un tipo de contenedor válido: 20 o 40 Pies";
  }

  if (origen.toUpperCase() === "HONG KONG") {
    costoOrigen = 700;
  } else if (origen.toUpperCase() === "MIAMI") {
    costoOrigen = 500;
  } else {
    alert("Ingrese un Puerto válido: Hong Kong o Miami");
    return;
  }

  let costoTotal = tarifaBase + costoContenedor + costoOrigen;

  alert("El valor total FCL es de USD " + costoTotal);
}

//Calcular valor LCL

function calcularCostoLcl(origen) {
  const tarifaBase = 600; 
  let metrosCubicos = parseFloat(prompt("Ingrese los Metros Cúbicos de su carga"));
  let costoPorM3 = 25;
  let costoOrigen = 0;

  if (origen.toUpperCase() === "HONG KONG") {
    costoOrigen = 400;
  } else if (origen.toUpperCase() === "MIAMI") {
    costoOrigen = 300;
  } else {
    alert("Ingrese un Puerto válido: Hong Kong o Miami");
    return;
  }

  let costoTotal = tarifaBase + (metrosCubicos * costoPorM3) + costoOrigen;

  alert("El valor total LCL es de USD " + costoTotal);
}

cotizarFlete();

alert("Gracias por cotizar con Island Port. Contactános para mas información :)");
