import {retornaArreglo} from '../../src/base-pruebas/07-deses-arr' //importante importar con llaves {funcion}

// export const retornaArreglo = () =>{
//     return ['ABC', 123];
// }

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un string y un numero', () => {
    
        const [letters , numbers] = retornaArreglo()
        
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')

        expect( letters ).toEqual(expect.any(String)/*que espera cualquir tipo de string*/)
    }) 

})






