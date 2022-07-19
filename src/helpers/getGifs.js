
export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=IQCxzF9750YBFSNjsAmZpQJD09wL5nnY&q=${ category }&limit=20`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        imgUrl: img.images.downsized_medium.url
    }))

    console.log(gifs);
}