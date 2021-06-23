
const argv = require('yargs')
.option( 'b', {
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe:'es la base de la tabla de multiplicar'
})
.option( 'h', {
    alias: 'hasta',
    type: 'number',
    default:10,
    describe:'el numero hasta el que quieres que se multiplique'
})
.option( 'l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'muestra la tabla en consola'

})
.check( (argv, options) => {
    if ( isNaN(argv.b) ){
        throw 'la base tiene que ser un numero'
    }
    return true;
})
.check( (argv, options) => {
    if ( isNaN(argv.h) ){
        throw 'el valor dado tiene que ser un numero'
    }
    return true;
})
.argv;

module.exports = argv;