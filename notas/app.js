const {borrarNota,crearNota,ordenarNotas,buscarTextoEnNotas,misNotas} = require('./notas.js');
const yargs = require('yargs');

console.log(); 
console.log('----------1-----------');
console.log('Length antes de crear una nota',misNotas.length);
//crearNota(misNotas,'diario','quemar el diario')
console.log('despues de crearla',crearNota(misNotas,'diario','quemar el diario'));
crearNota(misNotas,'diario','quemar el diario')

console.log('----------2-----------');
console.log(misNotas);
console.log('-----------------------');
console.log(borrarNota("casa"));
console.log('------------------');
console.log(misNotas);

console.log('----------3-----------');
console.log('Orden Con Titulos');
console.log(ordenarNotas(misNotas,'titulo'));
console.log('-----Orden con Cuerpo------');
console.log(ordenarNotas(misNotas,'cuerpo'));

console.log('-------4--------');
console.log('Buscando vscode en el titulo');
console.log(buscarTextoEnNotas(misNotas,'vscode'));
console.log('--Buscando medico en el cuepo--');
console.log(buscarTextoEnNotas(misNotas,'rio'));
console.log(buscarTextoEnNotas(misNotas,'termo'));

yargs.command({
    command: 'add',
    describe: 'añadir nota',
    builder: {
        titulo: {
            describe: 'el titulo',
            demandOption: true,
            type: 'string'
        },
        cuerpo: {
            describe: 'el cuerpo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        crearNota.addNote(argv.titulo, argv.cuerpo)
    }
})