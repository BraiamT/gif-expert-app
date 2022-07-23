import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const cateory = 'Warzone';

    test('debe de mostrar el Loading al cargar por primera vez el componente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ cateory } /> );

        expect( screen.getByText('Loading...') ); // same as toBeTruthy
        expect( screen.getByText(cateory) );
    });

    test('debe de mostrar items cuando se cargan las imágenes al usarUseFetchGif', () => {
        const gifs = [
            {
                id: 'ABC_1',
                title: 'Cool GIF title One',
                imgUrl: 'https://generic-gif-url.com/cool_image_1.jpg'
            },
            {
                id: 'ABC_2',
                title: 'Cool GIF title Two',
                imgUrl: 'https://generic-gif-url.com/cool_image_2.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ cateory } /> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});
