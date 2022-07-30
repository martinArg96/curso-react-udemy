import {  getUser, getUsuarioActivo }from '../../src/base-pruebas/05-funciones.js' //importamos las funciones

describe('pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => {

        const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502',
        }

        const user = getUser()


        console.log(testUser)
        console.log(testUser)

        expect(testUser).toEqual(user)
        
    })

    test('getUsuario activo debe retornar un objeto', () => {
        const name = 'Fernando'
        
        
        const user = getUsuarioActivo(name)
    
    expect(user).toEqual({ //to equal para retornar objetos
        uid: 'ABC567',
        username: name
    })

    })

})