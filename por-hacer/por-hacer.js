const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('no se pudo grabar');

    });
}
const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer
}

const crear = (descripcion) => {
    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)
    guardarDB()

    return porHacer;
}

const getListado = () => {
    return cargarDB()

}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrado = (descripcion) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer.splice(index, 1)
        guardarDB()
        return true
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrado

}