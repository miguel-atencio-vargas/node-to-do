
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};
const estado = {
    alias: 'e',
    default: true,
    desc: 'Marca es estado de la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        estado
    })
    .command('borrar', 'Elimina la tarea de la lista',{
        descripcion
    })
    .command('listar', 'Muestra una lista de todas la tarea por hacer', {
        estados:{
            alias: 's'
        }
    })
    .help()
    .argv;

    module.exports = {
        argv
    }