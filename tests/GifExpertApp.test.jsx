import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('debe de haber dos categorias insterdas en el html tras hacer el submit de una', () => {
        render( <GifExpertApp /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: 'Quevedo' } });
        fireEvent.submit( form );

        const categories = screen.getAllByRole('heading', { level: 3 });

        expect( categories.length ).toBe(2);
    });

    test('no debe de ingresar una categoria con el mismo nombre', () => {
        render( <GifExpertApp /> );
        fireAddCategory();
        fireAddCategory();
        fireAddCategory();

        const categories = screen.getAllByRole('heading', { level: 3 });
        expect( categories.length ).toBe(2);
    });

});

const fireAddCategory = () => {
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: 'Quevedo' } });
    fireEvent.submit( form );
}
