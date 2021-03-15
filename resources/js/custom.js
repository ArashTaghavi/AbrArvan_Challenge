let arrows = document.querySelectorAll('.arrow');

for (let i = 0; i < arrows.length; i++) {

    arrows[i].addEventListener('click', (e) => {

        let li = e.target.parentElement.parentElement;
        let content = li.lastElementChild;

        // Remove active class from all li
        arrows.forEach((arrow) => {
            arrow.parentElement.parentElement.classList.remove('projects__list-item--active');
            arrow.parentElement.parentElement.lastElementChild.classList.remove('d-block')
            arrow.parentElement.parentElement.lastElementChild.classList.add('d-none')
        });


        // Add active class to current li
        li.classList.add('projects__list-item--active');


        // Hide all content items
        if (content.classList.contains('d-none')) {
            content.classList.remove('d-none');
            content.classList.add('d-block');
        } else {
            content.classList.add('d-none');
            content.classList.remove('d-block');
        }

    });
}
