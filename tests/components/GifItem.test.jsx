import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {

    const title = 'Gif Title';
    const url = 'https://generic-gif-url.com/cool_image.jpg';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } imgUrl={ url }/> );
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ATL indicado', () => {
        render( <GifItem title={ title } imgUrl={ url }/> );

        // This is Ugly -->
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);
        
        // This is Better :D -->
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('debe de mostrar el título en el componente', () => {
        render( <GifItem title={ title } imgUrl={ url }/> );

        expect( screen.getByText(title) ).toBeTruthy();
    });

});
