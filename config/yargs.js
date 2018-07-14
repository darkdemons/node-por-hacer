const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de tarea por hacer'

}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Descripcion de tarea por hacer'

}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar el estado completado de  una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'muestra las tareas por hacer')
    .command('borrar', 'borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}