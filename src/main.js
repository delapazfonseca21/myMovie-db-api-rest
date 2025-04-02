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

//tenemos aquí, abstracciones de código usando funciones
function crearPeliculas(peliculas, contenedor){
    contenedor.innerHTML = '';

    peliculas.forEach(pelicula => {
        const contenedorPelicula = document.createElement('div');
        contenedorPelicula.classList.add('movie-container');
        contenedorPelicula.addEventListener('click', ()=>{
            location.hash = `movie=${pelicula.id}`
        });
        const img = document.createElement('img');
        img.classList.add('movie-img');
        img.src = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;
        img.alt = pelicula.title;

        contenedorPelicula.appendChild(img);

        contenedor.appendChild(contenedorPelicula);
    });
}

function crearCategorias(categorias, contenedor){
    contenedor.innerHTML = '';

    categorias.forEach(categoria =>{
        
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');

        const titulo = document.createElement('h3');
        titulo.setAttribute('id', `id${categoria.id}`);
        titulo.classList.add('category-title');
        titulo.textContent = categoria.name;
        titulo.addEventListener('click', ()=>{
            location.hash = `#category=${categoria.id}-${categoria.name}`;
        })

        categoryContainer.appendChild(titulo);
        contenedor.appendChild(categoryContainer);
    });

}





async function getTrendingMoviesPreview(){
    const { data } = await api('/trending/movie/day')

    const movies = data.results;

    crearPeliculas(movies, trendingMoviesPreviewList);
}

//función asíncrona para obtener categorías

async function getTrendingCategories() {
    const {data} = await api('/genre/movie/list')

    const categorias = data.genres

    crearCategorias(categorias, categoriesPreviewList)
}

async function getMoviesByCategory(id){
    const { data } = await api('/discover/movie', {
        params: {
            with_genres: id
        }
    });

    const movies = data.results;
    
    crearPeliculas(movies, genericSection);
}

async function getMovieSearch(query){
    const {data} = await api('/search/movie',{
        params: {
            query
        }
    });
    const movies = data.results;

    crearPeliculas(movies, genericSection)
};

async function getTrendingMovies(){
    const { data } = await api('/trending/movie/day');
    movies = data.results;

    crearPeliculas(movies, genericSection)
}

async function getMovieById(movieId){
    const {data: movie} = await api(`/movie/${movieId}`);

    const movieImgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    headerSection.style.backgroundImage = `url(${movieImgUrl})`;

    movieDetailTitle.textContent = movie.title;
    movieDetailDescription.textContent = movie.overview;
    movieDetailScore.textContent = movie.vote_average;

    crearCategorias(movie.genres, movieDetailCategoriesList);
}
