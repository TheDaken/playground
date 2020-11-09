const {escribirDatosEnUnFichero, leerDatosDeUnFichero, devolverDatosDeUnFicher} = require('./notas');

const MisNotas = [
    { "titulo": 'tit-1', "cuerpo": 'cuerpo-1' },
    { "titulo": 'tit-2', "cuerpo": 'cuerpo-2' },
    { "titulo": 'tit-3', "cuerpo": 'cuerpo-3' },
    { "titulo": 'tit-4', "cuerpo": 'cuerpo-4' },
    { "titulo": 'tit-5', "cuerpo": 'cuerpo-5' }
];

escribirDatosEnUnFichero(`notas.txt`, MisNotas);
leerDatosDeUnFichero(`notas.txt`);
devolverDatosDeUnFicher(`notas.txt`);