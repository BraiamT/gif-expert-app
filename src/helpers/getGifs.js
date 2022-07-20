
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IQCxzF9750YBFSNjsAmZpQJD09wL5nnY&q=${ category }&limit=12`;
    const response = await fetch( url );
    const { data } = await response.json();

    return ( data.map(img => ({
        id: img.id,
        title: img.title,
        imgUrl: img.images.downsized_medium.url
    })) )

}
