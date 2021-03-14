let inputHandler = async (e) => {

    let full_name = document.getElementById('full_name').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    let company = document.getElementById('company').value;
    let resume = document.getElementById('resume').files[0];
    let portfolio = document.getElementById('portfolio').files[0];
    let abryar_type = document.getElementById('abryar_type').value;
    let abryar_level = document.getElementById('abryar_level').value;
    let description = document.getElementById('description').value;


    let resume_warning = document.getElementById('resume-warning');
    let portfolio_warning = document.getElementById('portfolio-warning');

    let resume_file_name = document.getElementById('resume-file-name');
    let portfolio_file_name = document.getElementById('portfolio-file-name');

    if (resume && (resume.size > '1000000')) {
        resume_warning.innerText = 'فایل بزرگتر از حد مجاز است';
        resume_file_name.innerText = '';
        document.getElementById('resume-input-instead').classList.add('error_file_input');
        resume_warning.style.color = '#fe5959';
    } else if (resume) {
        resume_warning.innerText = 'حداکثر حجم مجاز فایل 1 مگابایت باشد';
        resume_file_name.innerText = resume.name;
        document.getElementById('resume-input-instead').classList.remove('error_file_input');
        resume_warning.style.color = '#9db0cb';
        resume = await toBase64(resume);
    }
    if (portfolio && (portfolio.size > '1000000')) {
        portfolio_warning.innerText = 'فایل بزرگتر از حد مجاز است';
        portfolio_file_name.innerText = '';
        document.getElementById('portfolio-input-instead').classList.add('error_file_input');
        portfolio_warning.style.color = '#fe5959';
    } else if (portfolio) {
        portfolio_warning.innerText = 'حداکثر حجم مجاز فایل 1 مگابایت باشد';
        portfolio_file_name.innerText = portfolio.name;
        document.getElementById('portfolio-input-instead').classList.remove('error_file_input');
        portfolio_warning.style.color = '#9db0cb';
        portfolio = await toBase64(portfolio);

    }


    if (full_name && mobile && email) {
        document.getElementById('form__footer-submit').classList.add('form__footer-submit--active');
    } else {
        document.getElementById('form__footer-submit').classList.remove('form__footer-submit--active');
    }


    return {
        "rows": [
            {
                "cells": [
                    {
                        "column": "full_name",
                        "value": full_name
                    },
                    {
                        "column": "mobile",
                        "value": mobile
                    },
                    {
                        "column": "email",
                        "value": email
                    },
                    {
                        "column": "company",
                        "value": company
                    },

                    {
                        "column": "resume",
                        "value": resume
                    },
                    {
                        "column": "portfolio",
                        "value": portfolio
                    },

                    {
                        "column": "abryar_type",
                        "value": abryar_type
                    },
                    {
                        "column": "abryar_level",
                        "value": abryar_level
                    },
                    {
                        "column": "description",
                        "value": description
                    },
                ]
            }
        ]
    };
}

function validation(data) {
    let condition = true;

    if (data.rows[0].cells[0].value === '' || data.rows[0].cells[0].value === null) {
        document.getElementById('full_name').classList.add('error');
        condition = false;
    } else {
        document.getElementById('full_name').classList.remove('error');
    }
    if (data.rows[0].cells[1].value === '' || data.rows[0].cells[1].value === null) {
        document.getElementById('mobile').classList.add('error');
        condition = false;
    } else {
        document.getElementById('mobile').classList.remove('error');
    }
    if (data.rows[0].cells[2].value === '' || data.rows[0].cells[2].value === null
        || !isValidEmail(data.rows[0].cells[2].value)) {
        document.getElementById('email').classList.add('error');
        condition = false;
    } else {
        document.getElementById('email').classList.remove('error');
    }
    if (data.rows[0].cells[4].value === undefined) {
        document.getElementById('resume').classList.add('error');
        condition = false;
    } else {
        document.getElementById('resume').classList.remove('error');
    }

    if (!condition)
        document.getElementById('error_message').style.display = 'block';
    return condition;

}

let submit = async () => {

    let data = await inputHandler();


    if (validation(data)) {

        let doc_id = 'k-6_RvHZL1';
        let table_name = 'abr_challenge';


        fetch(`https://coda.io/apis/v1/docs/${doc_id}/tables/${table_name}/rows`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer d2401260-6353-4084-b7bc-e93b549f0475'
            },
            body: JSON.stringify(data)
        }).then(response => success(response))
            .catch(error => console.log(error));
    }
}

let success = response => {
    if (response.status === 400) {
        let error = document.getElementById('error_message')
        error.style.display = 'block';
        error.innerHTML = 'خطایی در سمت سرور رخ داده است';
        return;
    }
    document.getElementById('error_message').style.display = 'none';
    document.getElementById('success_message').style.display = 'block';

    let inputs = ['full_name', 'mobile', 'email', 'company', 'abryar_type', 'abryar_level', 'description'];

    inputs.forEach(input => {
        document.getElementById(input).value = '';
    });
}

let close_message = type => {
    document.getElementById(type).style.display = 'none';
}

let toggle_menu = () => {
    document.getElementById('header-menu').style.display = document.getElementById('header-menu').style.display === 'block' ? 'none' : 'block';
    document.getElementById('header__text').style.display = document.getElementById('header-menu').style.display === 'none' ? 'block' : 'none';
}

let toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
let isValidEmail = email => {
    let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}


document.getElementById('resume-button').addEventListener('click', () => {
    document.getElementById('resume').click();
});

document.getElementById('portfolio-button').addEventListener('click', () => {
    document.getElementById('portfolio').click();
});

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
        li.classList.add('projects__list-item--active')

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
