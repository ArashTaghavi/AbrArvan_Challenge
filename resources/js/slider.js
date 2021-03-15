let slider = document.querySelector('.slider__content');

let arrow_left = document.querySelector('.slider__arrow-left');
let arrow_right = document.querySelector('.slider__arrow-right');

let slider_width = slider.clientWidth;

let slider_scroll = slider.scrollWidth;

let hide_scroll = slider_scroll - slider_width;


arrow_left.addEventListener('click', (e) => {
    if (arrow_right.classList.contains('d-none')) {
        arrow_right.classList.remove('d-none');
        arrow_right.classList.add('d-block');
    }
    slider.scrollLeft -= 100;
    hide_scroll -= 100;


    if (hide_scroll <= 0) {
        arrow_left.classList.add('d-none');
        arrow_left.classList.remove('d-block');
    } else {
        arrow_left.classList.remove('d-none');
        arrow_left.classList.add('d-block');

    }

});

arrow_right.addEventListener('click', (e) => {
    if (arrow_left.classList.contains('d-none')) {
        arrow_left.classList.remove('d-none');
        arrow_left.classList.add('d-block');
    }


    slider.scrollLeft += 100;
    hide_scroll += 100;

    if (hide_scroll >= slider_width) {
        arrow_right.classList.add('d-none');
        arrow_right.classList.remove('d-block');
    } else {
        arrow_right.classList.remove('d-none');
        arrow_right.classList.add('d-block');
    }
});


let activeHandler = (e, condition) => {
    let base_url = '/assets/images/';
    if (condition)
        e.src = `${base_url}slider-arrow-enable.png`;
    else
        e.src = `${base_url}slider-arrow-disable.png`;
}
