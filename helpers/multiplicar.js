const fs = require('fs')

const crearArchivo = async (base, list, hasta, create) => {
    try {
        let salida="";
        for (let i = 1; i<=hasta; i++){
            salida +=(`${base} * ${i} = ${base*i}\n`)
        }
        (list) && console.log(salida);
        if (create){
            if (fs.existsSync(`./salida/tabla-del-${base}.txt`)) {
                throw console.log('file not created, the path already exists.');
            }
            
            fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);
            return `tabla-del-${base}.txt`
        }

        
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}