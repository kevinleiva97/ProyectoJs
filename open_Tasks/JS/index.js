'use strict'

const mostrarTareas = () => {
    tasks.forEach(tarea => {
        let tareaDiv = document.createElement('div');
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

        document.body.appendChild(tareaDiv);
        tareaDiv.classList.add("tasks");
    })
}

mostrarTareas()

console.log(tasks)