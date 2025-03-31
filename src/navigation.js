window.addEventListener('DOMContentLoaded', navegador, false);
window.addEventListener('hashchange', navegador, false);


function navegador(){
    console.log({location})
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
    console.log("estás en trends");
}

function searchPage(){
    console.log('estas en busqueda');
}

function moviePage(){
    console.log('movie!!!!');
}

function categoryPage(){
    console.log('categorías');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');

    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}