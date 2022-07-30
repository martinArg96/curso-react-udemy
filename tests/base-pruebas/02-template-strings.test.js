//creamos una carpeta base preubas y el archivo. tiene que quedar como un espejo del SRC
import {    getSaludo   } from '../../src/base-pruebas/02-template-string'

describe('pruebas en 02-template-strings', () => { 
    test('getSaludo debe retornar"Hola Fernando"', () => { 
        const name = 'Fernando'
        const message = getSaludo(name)

        expect( message ).toBe( `Hola ${name}`)
    }) 
})

//instalamos babel
// npm install --save-dev babel-jest @babel/core @babel/preset-env

//configuramos babel
// babel.config.js
// module.exports = {
//   presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
// };

