const fs = require('fs');

const escribirDatosEnUnFichero = (fichero, datos)=> fs.writeFile(fichero, JSON.stringify(datos), (error)=> error? console.log(`Ha surgido un error: ${error}`): console.log(`Datos guardados: ${JSON.stringify(datos)}`));
const leerDatosDeUnFichero = (fichero)=> fs.readFile(fichero, (error, data) => error? console.log(`Ha surgido un error: ${error}`): console.log(`Fichero ${fichero}: ${data.toString()}`));
const devolverDatosDeUnFicher = (fichero)=> fs.readFile(fichero, (error, data) => error? console.log(`Ha surgido un error: ${error}`): console.log(JSON.parse(data)[0].cuerpo));

module.exports = {
    escribirDatosEnUnFichero,
    leerDatosDeUnFichero,
    devolverDatosDeUnFicher
}