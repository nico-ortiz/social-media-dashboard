const btnContainer = document.querySelector('#header .btn-container .btn-change-theme');

/* Elements that will have their color changed */
const body = document.querySelector('.body');
const bcHeader = document.querySelector('.background-header');
const titleHeader = document.querySelector('#header .titles-container');
const textBtnTheme = document.querySelector('#header .btn-container');
const itemsFstStn = document.querySelectorAll('#fst-stn .item-fst-stn');
const itemsSndStn = document.querySelectorAll('#snd-stn .item-snd-stn');
const paraph = document.querySelector('#snd-stn .item-snd-stn .paraph');

btnContainer.addEventListener('click', btnThemeHandle);

function btnThemeHandle() {
    body.classList.toggle('body-dark');
    bcHeader.classList.toggle('background-header-dark');
    titleHeader.classList.toggle('title-container-dark');
    textBtnTheme.classList.toggle('btn-container-dark');

    itemsFstStn.forEach(elem => {
        elem.classList.toggle('item-fst-stn-dark');
    });

    itemsSndStn.forEach(elem => {
        elem.classList.toggle('item-snd-stn-dark');
    });

    paraph.classList.toggle('.paraph-dark');
}