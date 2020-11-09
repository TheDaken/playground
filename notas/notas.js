const fs = require('fs')


const misNotas = [
    { titulo: "VSCode", cuerpo: "usar snipets" },
    { titulo: "Cascada", cuerpo: "ir a la cascada del rio" },
    { titulo: "Escalada", cuerpo: "Ir a escalar" },
    { titulo: "medico", cuerpo: "Tienes visita al medico a las 4" },
    { titulo: "Casa", cuerpo: "ordenar cosas" },

]

function crearNota( titulo, cuerpo) {
    const notasj = leerNotas('notas.json')
    const indice = notasj.findIndex(
        function (nota) {
            return nota.titulo == titulo
        }
    )
    if (indice === -1) {
        console.log('nota creada');
        return notasj.push({ titulo, cuerpo })
    } else {
        console.log('nota ya existente');
        return notasj.length
    }

}

function borrarNota(tit) {
    const notasJson = leerNotas('notas.json')
    let i = notasJson.findIndex(function (not) { return not.titulo.toLowerCase() === tit.toLowerCase() });


    if (i === -1) {
        console.log('Nota No encontrada');
        return {}
    } else {
        console.log('nota borrada');
        notasJson.splice(i, 1);
        escrivirNotas('notas.json',notasJson)
        return {}
    }
}
function borrarnota2( tutulo) {
    const notasJson = leerNotas('notas.json')
    const notasFiltradas = notasJson.filter(function (nota) {
        return nota.tutulo !== titulo
    })
    if (notas.length > notasFiltradas.length) {
        console.log('notas borradas');
    } else {
        console.log('nota no existente');
    }


}
function ordenarNotas(notas, a) {
    if (a === 'titulo') {
        return notas.sort(function (notaA, notaB) {
            if (notaA.titulo.toLowerCase() < notaB.titulo.toLowerCase()) {
                return -1
            } else if (notaA.titulo.toLowerCase() > notaB.titulo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notas.sort(function (notaA, notaB) {
            if (notaA.cuerpo.toLowerCase() < notaB.cuerpo.toLowerCase()) {
                return -1
            } else if (notaA.cuerpo.toLowerCase() > notaB.cuerpo.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    }
}
function buscarTextoEnNotas(nota, txt) {


    const esta = misNotas.findIndex(function (nota) {
        return nota.titulo.toLowerCase() === txt.toLowerCase();
    });
    const cuerpo = misNotas.findIndex(function (nota) {
        return nota.cuerpo.toLowerCase().includes(txt.toLowerCase());
    });
    if (esta >= 0) {
        return nota[esta]
    } else if (cuerpo >= 0) {
        return nota[cuerpo]
    } else {
        return 'No se a Encontrado nada'
    }
}
function buscarTextoEnNotas2(notas, txt) {
    debugger
    const notaEncontrada = notas.find(function (nota) {
        return nota.titulo.toLowerCase().includes(txt) || nota.cuerpo.toLowerCase().includes(txt)
    })
    if (notaEncontrada) {
        console.log('nota encontrada');
        return notaEncontrada
    } else {
        console.log('Nota no encontrada');
        return {}
    }
}
module.exports = {
    crearNota: crearNota,
    borrarNota: borrarNota,
    ordenarNotas: ordenarNotas,
    buscarTextoEnNotas: buscarTextoEnNotas,
    misNotas: misNotas
}

const leerNota = (fichero) => {
    fs.readFile(fichero, (err, data) => {
        if (err) {
            console.log(err)
            return []
        } else {
            const notas = JSON.parse(data)
            console.log(data)
            return notas
        }
    })
}
const leerNotas = (fichero) => {
    try {
        const buffer = fs.readFileSync(fichero)
        const datos = buffer.toString()
        return JSON.parse(datos)
    } catch (error) {
        console.log(error);
        return []
    }
}
const escrivirNotas = function (fichero, notas) {
    const texto = JSON.stringify(notas)
    fs.writeFile(fichero, texto, (e) => {
        console.log(e);
    })
}

leerNota('notas.json')
//crea una nueva nota (return numero de elementos length)
