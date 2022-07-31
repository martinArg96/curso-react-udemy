import { CounterApp } from "../src/CounterApp"
import {render,screen,fireEvent} from '@testing-library/react'
import { stringify } from "ts-jest"

describe('////--------Pruebas en Counter App------------///', () => {
    
    const initialValue = 10
    
    test('Debe de bhacer march con el snapshot', () => { 
        
        const {container} = render(<CounterApp/>)
        expect( container ).toMatchSnapshot()
        
    
    
    })
    
    test('Debe de mostrar el valor incial de 100', () => { 
        
        render(<CounterApp value={100}/>)
        console.log(( screen.getByRole('heading',{level:2 }).innerHTML))
        
        expect( screen.getByText(100)).toBeTruthy
    })

    test('debe de incrementar con el boton +1', () => {
        
        render(<CounterApp value={initialValue}/> ) 

        fireEvent.click(    screen.getByText('+1'))
        console.log(stringify(initialValue+1))
        expect(screen.getByText(stringify(initialValue+1))).toBeTruthy


    
    
    })
    
    test('debe de decrementar con el boton -1', () => {
        
        render(<CounterApp value={initialValue}/> ) 

        fireEvent.click(    screen.getByText('-1'))
        screen.debug()
        fireEvent.click(    screen.getByText('-1'))
        screen.debug()
        fireEvent.click(    screen.getByText('-1'))
        screen.debug()
        console.log(stringify(initialValue-1))
        expect(screen.getByText(stringify(initialValue-3))).toBeTruthy

    })
    

    test('debe de funcionar el boton de reset', () => { 
        render(<CounterApp value={400}/> ) 

        fireEvent.click(    screen.getByText('+1'))
        fireEvent.click(    screen.getByText('+1'))
        fireEvent.click(    screen.getByText('+1'))
        fireEvent.click(    screen.getByText('+1'))
        screen.debug()
        fireEvent.click( screen.getByRole('button',{name: 'reset'}))

        screen.debug()

        expect(screen.getByText(400)).toBeTruthy
    })
    
    
    
    
    
    
})