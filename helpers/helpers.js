export const formatearFecha = fecha => {
	const mes = fecha.getMonth() + 1;
	const dia = fecha.getDate();
	// return `${fecha.getFullYear()}-${(mes < 10 ? '0' : '').concat(mes)}-${(dia < 10 ? '0' : '').concat(dia)}`;
  return `${fecha.getFullYear()}-${(mes < 10 ? '0' : '').concat(mes)}-${(dia < 10 ? '0' : '').concat(dia)}`;
};

export const obtenerFechaInicioDeMes = () => {
	const fechaInicio = new Date();
	// Iniciar en este año, este mes, en el día 1
	return new Date(fechaInicio.getFullYear(), fechaInicio.getMonth(), 1);
};

export const obtenerFechaFinDeMes = () => {
	const fechaFin = new Date();
	// Iniciar en este año, el siguiente mes, en el día 0 (así que así nos regresamos un día)
	return new Date(fechaFin.getFullYear(), fechaFin.getMonth() + 1, 0);
};

export const lastFecha = fecha => {
    // //console.log(`${fecha.toDateString()} <------ fecha de ultimo dia`)
    const fechax = new Date(fecha.toLocaleDateString("en-US"))
    // //console.log(`${fechax} <------ fecha de new obj ultimo dia`)
    const yearFactura = fechax.getFullYear()
    const monthFactura = fechax.getMonth() + 1
    const dayFactura = fechax.getDate()
    // //console.log(`${yearFactura}-${monthFactura}-${dayFactura}`)
    // return `${yearFactura}-${monthFactura}-${dayFactura}`
    return new Date(fechax.getFullYear(), fechax.getMonth() + 1, 0);
}

export const currentFecha = fecha => {
    const fechax = new Date(fecha.toLocaleDateString("en-US"))
    const yearFactura = fechax.getFullYear()
    const monthFactura = fechax.getMonth() + 1
    const dayFactura = fechax.getDate()
    return `${yearFactura}-${(monthFactura < 10 ? '0' : '').concat(monthFactura)}-${(dayFactura < 10 ? '0' : '').concat(dayFactura)}`;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  export function formatDateOk(date) {
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset())
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

  export const formatDate = date => {
    const newDate = new Date(date.split('T')[0].split('-'))
    const options = {
        // weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return newDate.toLocaleDateString('es-ES', options)
}

export const formtMoney = quantity => {
  return quantity.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
  })
}