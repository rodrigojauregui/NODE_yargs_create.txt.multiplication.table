
const {crearArchivo, crearArchivo2} = require('./helpers/multiplicar')
const argv = require ('./yargs/yargs')

console.clear()

crearArchivo(argv.b, argv.l, argv.h, argv.c)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err=> console.log(err));


