import PropTypes from 'prop-types';

export const GifItem = ({ title, imgUrl }) => {

    return (
        <div className="card">
            <img src={ imgUrl } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired
}
