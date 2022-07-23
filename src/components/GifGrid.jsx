import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';

export const GifGrid = ({ category }) => {

    /* CUSTOM HOOK useFetchGifs */
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            {
                // isLoading ? ( <h2>Loading...</h2> ) : null // null no se renderiza en React
                isLoading && ( <h2>Loading...</h2> )
            }
            {
                ( images.length === 0 && !isLoading ) && ( <h2>No Results...</h2> )
            }

            <div className='card-grid'>
            {
                images.map( (image) =>
                    (
                        <GifItem
                            key={ image.id }
                            { ...image } // Esto esparce las propiedades de image al componente en cuestión
                        />
                    )
                )
            }
            </div>
        </>
    );

}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
