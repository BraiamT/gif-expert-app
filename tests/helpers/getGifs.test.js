import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {

    test('should de retornar un arreglo de { gifs }', async() => {
        const gifs = await getGifs('One Punch');

        expect( gifs.length ).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            imgUrl: expect.any( String )
        });
    });

});
