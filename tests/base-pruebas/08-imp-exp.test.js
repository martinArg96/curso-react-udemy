import {getHeroeById, getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp'

describe('Pruebas en 08-imp-exp.test', () => {
    test('getHeroeById debe de retornar un heroe por ID',()=>{
        
        const id = 1
        const hero = getHeroeById(  id  )
        console.log(hero)
        expect(hero).toEqual(
            { id: 1, name: 'Batman', owner: 'DC' }
        )
    })
        /*tarea

    debe retornar un arreglo con los heroes de DC
    lenght===3
    to equal al arreglo filtrado

    */
    test('getheores by owner debe de regresar heroes de dc', () => { 
    
        const heroesDC = getHeroesByOwner('DC')
        expect(heroesDC.length).toBe(3)
        expect(heroesDC).toEqual(
            [                                                                                                                              
                { id: 1, name: 'Batman', owner: 'DC' },                                                                                      
                { id: 3, name: 'Superman', owner: 'DC' },                                                                                    
                { id: 4, name: 'Flash', owner: 'DC' }                                                                                        
            ]
            )
            
    })


})