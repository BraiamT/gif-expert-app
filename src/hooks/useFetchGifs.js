import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return {
        images, // Esto es por el ES6, si una variable que se retorna es el mismo nombre de la propiedad, se deja así XD
        isLoading
    }

}

// MINE y estoy Proud xD
// useEffect(() => {
//     async function fetchData() {
//         const newImages = await getGifs(category);
//         setImages(newImages);
//     }
//     return () => {
//         fetchData();
//     }
// }, []);
