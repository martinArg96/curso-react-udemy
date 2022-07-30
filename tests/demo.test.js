describe('Pruebas en democomponent', () => {
    test('esta prueba no debe de fallar', () => {
    // if( 1===5 ){
    //     throw new Error('no se puede dividir por 0')
    // }
    //
    //1.inicializacion
    const message1 = 'hola mundo';
    // 2 estimulo
    const message2 = message1.trim();
    //3 bservamos el cmportamiento... esperado
    expect( message1 ).toBe( message2 )
    
    })
})
