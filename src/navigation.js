searchFormBtn.addEventListener('click', ()=>{
    location.hash = `#search=${searchFormInput.value}`
});

arrowBtn.addEventListener('click', ()=>{
    window.history.back();
});

trendingBtn.addEventListener('click', ()=>{
    location.hash = '#trends'
});

window.addEventListener('DOMContentLoaded', navegador, false);
window.addEventListener('hashchange', navegador, false);


function navegador(){
    const ruta = location.hash.substring(1);
    switch(true){
        case ruta.startsWith('trends'):
            trendsPage();
        break;
        
        case ruta.startsWith('search='):
            searchPage();
        break;

        case ruta.startsWith('movie='):
            moviePage();
        break;

        case ruta.startsWith('category='):
            categoryPage();
        break;

        default:
            homePage();
        break;
    }
    window.scrollTo({ top: 0 });
}

function homePage(){
    console.log('usted se encuentra en el home de la app');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    (async () => {
        await Promise.all([getTrendingMoviesPreview(), getTrendingCategories()]);
    })();
}

function trendsPage(){
    console.log("estás en tendencias");

    headerSection.classList.remove('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    headerCategoryTitle.textContent = 'Tendencias';

    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMovies()
}

function searchPage(){
    console.log('estas en busqueda');

    headerSection.classList.remove('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    headerCategoryTitle.textContent = 'Resultados de la búsqueda';

    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, query] = location.hash.split('=');
    
    getMovieSearch(query)
}

function moviePage(){
    console.log('el usuario está en la sección de películas');

    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');

    const [_, movieId] = location.hash.split('=');

    getMovieById(movieId);
}

function categoryPage(){
    console.log('categorías');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');
    
    const categoryText = decodeURIComponent(categoryName);
    
    headerCategoryTitle.textContent = categoryText;

    getMoviesByCategory(categoryId);
}