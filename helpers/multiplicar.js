const fs = require('fs')

const crearArchivo = async (base, list, hasta) => {
    try {
        let salida="";
        for (let i = 1; i<=hasta; i++){
            salida +=(`${base} * ${i} = ${base*i}\n`)
        }
        (list) && console.log(salida);

        if (fs.existsSync(`./salida/tabla-del-${base}.txt`)) {
            throw console.log('file not created, the path already exists.');
        }
        
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
        return `tabla-del-${base}.txt`
    } catch (error) {
        throw error
    }

}

const crearArchivo2 = (base) => {
    return new Promise ( (resolve, reject) => {
        if (fs.existsSync(`./tabla-del-${base}.txt`)) {
            throw console.log('The path exists.');
        }

        let salida;
        for (let i = 1; i<11; i++){
            salida +=(`${base} * ${i} = ${base*i}\n`)
        }
        
        fs.writeFileSync(`tabla-del-${base}.txt`, salida);

        resolve(`tabla-del-${base}.txt`)
        reject('no se pudo crear')
    })
}

module.exports = {
    crearArchivo,
    crearArchivo2
}