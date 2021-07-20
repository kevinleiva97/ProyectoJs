'use strict'

const btnRegistrar = document.querySelector('#btn-task');
const inputDate = document.querySelector('#date-Input');
const inputName = document.querySelector('#name-Input');
const priority = document.querySelector('#priority');
const attendantBy = document.querySelector('#attendant');
const description = document.querySelector('#description');



const validar = () => {

    const camposRequeridos = document.querySelectorAll('#frm-Resgitrar input:required');
    let error = false;

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
        }
    });

    if (error == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'All Fields are Required',
            'text': `Can't insert a new task with empty Fields`,
            'confirmButtonText': 'Ok'
        });

    } else {
        resgitrarTarea();

    }
}

btnRegistrar.addEventListener('click', validar);