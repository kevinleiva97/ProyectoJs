'use strict'

const btnRegistrar = document.querySelector('#btn-task');
const inputDate = document.querySelector('#date-Input');
const inputName = document.querySelector('#name-Input');
const priority = document.querySelector('#priority');
const attendantBy = document.querySelector('#attendant');
const description = document.querySelector('#description');

const resgitrarTarea = () => {
    let nuevaTarea = {
        date: inputDate.value,
        name: inputName.value,
        priority: priority.value,
        attendant: attendantBy.value,
        description: description.value
    }
    tasks.push(nuevaTarea);

}



//! Esto hay que borrarlo para trasladarlo a la ventana Open tasks
/*const mostrarTareas = () => {
    tasks.forEach(tarea => {
        let tareaDiv = document.createElement('div');
        let newContent = document.createTextNode(tarea.date);
        let newContentName = document.createTextNode(tarea.name);
        let newContentPri = document.createTextNode(tarea.priority);
        let newContentAttend = document.createTextNode(tarea.attendant);
        let newContentDesc = document.createTextNode(tarea.description);

        tareaDiv.appendChild(newContent);
        tareaDiv.appendChild(newContentName);
        tareaDiv.appendChild(newContentPri);
        tareaDiv.appendChild(newContentAttend);
        tareaDiv.appendChild(newContentDesc);

        document.body.appendChild(tareaDiv);
    })
}*/



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
            'confirmButtonText': 'OK'
        });

    } else {
        resgitrarTarea();

    }
}

mostrarTareas()
console.log(tasks)

btnRegistrar.addEventListener('click', validar);