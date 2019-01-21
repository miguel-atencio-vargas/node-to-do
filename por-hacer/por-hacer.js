const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        estado: "false"
    };
    cargarDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const getListado = (estado) => {
    cargarDB();

    if (estado) {
        let listado = listadoPorHacer.filter(tarea =>
            tarea.estado === estado
        )
        console.log(listado);
        return listado;
    } else {
        return listadoPorHacer;
    }
}

const actualizar = (descripcion, estado = "true") => {
    cargarDB();
    console.log('estado:', estado);
    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion
    );
    if (index >= 0) {
        listadoPorHacer[index].estado = estado;

        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea =>
        tarea.descripcion === descripcion
    );
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}