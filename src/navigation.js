searchFormBtn.addEventListener('click', ()=>{
    location.hash = '#search='
});

arrowBtn.addEventListener('click', ()=>{
    location.hash = '#home'
});

trendingBtn.addEventListener('click', ()=>{
    location.hash = '#trends'
});

window.addEventListener('DOMContentLoaded', navegador, false);
window.addEventListener('hashchange', navegador, false);


function navegador(){
    const ruta = location.hash.substring(1);

    switch(ruta){
        case 'trends':
            trendsPage();
        break;
        
        case 'search=':
            searchPage();
        break;

        case 'movie=':
            moviePage();
        break;

        case 'category=':
            categoryPage();
        break;

        default:
            homePage();
        break;
    }
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
}

function categoryPage(){
    console.log('categorías');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');

    headerCategoryTitle.textContent = 'Acción';

    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}