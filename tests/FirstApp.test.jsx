import {render} from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('Pruebas en FirstApp', () => {
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola soy martin'

    //     const {container} = render(<FirstApp title={title}/>)
        
    //     expect( container ).toMatchSnapshot()
    //     }) en desarrolo es molesto la rpueba del snapshotu

    test('debe mostrar el titulo en un h1', () => { 
        const title = 'hola soy riquelme'
        const {container, getByText, getByTestId} = render( <FirstApp title={title}/>)


        expect( getByText(title) ).toBeTruthy

        // const h1 = container.querySelector('h1')

        // console.log(h1.innerHTML)

        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toBe(title)
    })
}) 