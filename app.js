const argv = require('./config/yargs').argv
const colors = require('colors').colors

const porHacer = require('./por-hacer/por-hacer')


let comando = argv._[0];
let descripcion = argv.descripcion;
let completado = argv.completado;

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(descripcion)
        console.log('La tarea ha sido registrada!');
        break;
    case 'listar':
        let listado = porHacer.getListado()

        for (let tarea of listado) {
            console.log('====== Por hacer ======'.green);
            console.log(tarea.descripcion);
            console.log('estado :', tarea.completado);
            console.log('======================='.green);
        }
        break;
    case 'actualizar':
        let actu = porHacer.actualizar(descripcion, completado);
        console.log(`el estado de '${descripcion}' ha sido actualidazo a:  ${ actu } `)
        break;
    case 'borrar':
        let borrado = porHacer.borrado(descripcion);
        console.log(borrado);
        console.log(`${descripcion} ha sido borrado!`);
        break;
    default:
        console.log('comando no reconocido');
}