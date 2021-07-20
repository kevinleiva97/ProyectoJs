'use strict'

const mostrarTareas = () => {
    tasks.forEach(tarea => {
        const tareaDiv = document.querySelector('#openTasks')
        let tareaDiv1 = document.createElement('div');
        let newContentDate = document.createTextNode(tarea.date);
        let newContentName = document.createTextNode(tarea.name);
        let newContentPri = document.createTextNode(tarea.priority);
        let newContentAttend = document.createTextNode(tarea.attendant);
        let newContentDesc = document.createTextNode(tarea.description);

        tareaDiv.appendChild(newContentDate);
        tareaDiv.appendChild(newContentName);
        tareaDiv.appendChild(newContentPri);
        tareaDiv.appendChild(newContentAttend);
        tareaDiv.appendChild(newContentDesc);

        document.openTasks.appendChild(tareaDiv);
        document.querySelector('#openTasks').classList.add("tareas");
    })
}

mostrarTareas()

console.log(tasks)