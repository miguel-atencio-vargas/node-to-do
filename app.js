const {
    argv
} = require('./config/yargs');
const {
    crear,
    getListado,
    actualizar,
    borrar
} = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crear(argv.descripcion.toString());
        break;

    case 'listar':
        let listado = getListado(argv.estados);
        for (let tarea of listado) {
            console.log('======= Tarea por hacer ======='.rainbow);
            console.log(colors.cyan(tarea.descripcion));
            console.log('Estado: ', colors.red(tarea.estado));
        }
        break;

    case 'actualizar':
        let actualizado = actualizar(argv.descripcion.toString(), argv.estado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido')
}