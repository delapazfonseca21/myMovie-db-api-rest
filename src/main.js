const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Content-Type': 'application/json'
    },
    params: {
        'api_key': API_KEY,
        'language': 'es'
    }
});

async function getTrendingMoviesPreview(){
    const { data } = await api('/trending/movie/day')

    const movies = data.results;

    trendingMoviesPreviewList.innerHTML = '';

    movies.forEach(pelicula => {
        const contenedorPelicula = document.createElement('div');
        contenedorPelicula.classList.add('movie-container');

        const img = document.createElement('img');
        img.classList.add('movie-img');
        img.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
        img.alt = pelicula.title;

        contenedorPelicula.appendChild(img);

        trendingMoviesPreviewList.appendChild(contenedorPelicula);
    });
}

//función asíncrona para obtener categorías

async function getTrendingCategories() {
    const {data} = await api('/genre/movie/list')

    const categorias = data.genres
    categoriesPreviewList.innerHTML = '';

    categorias.forEach(categoria =>{
        
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const titulo = document.createElement('h3');
        titulo.setAttribute('id', `id${categoria.id}`);
        titulo.classList.add('category-title');
        titulo.textContent = categoria.name;

        categoryContainer.appendChild(titulo);
        categoriesPreviewList.appendChild(categoryContainer);
    });
}
