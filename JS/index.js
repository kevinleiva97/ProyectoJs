'use strict'

const btnRegistrar = document.querySelector('#btn-task')

const validar = () => {
    console.log(`prueba2`)
    Swal.fire('Error!', 'All fields are required', 'error');
}

btnRegistrar.addEventListener('click', validar)