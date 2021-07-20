'use strict'

const mostrarTareas = () => {
    tasks.forEach(tarea => {
        let tareaDiv = document.createElement('div');
        let newContent = document.createTextNode(tarea["date task"]);
        let newContentName = document.createTextNode(tarea["name task"]);
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
}

mostrarTareas()

console.log(tasks)