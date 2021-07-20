'use strict'

const mostrarTareas = () => {
    tasks.forEach(tarea => {

        const tareaDivDate = document.querySelector('#date');
        const tareaDivName = document.querySelector('#name');
        const tareaDivPrior = document.querySelector('#priority');
        const tareaDivAttend = document.querySelector('#attendby');
        const tareaDivDesc = document.querySelector('#desc');


        let tareaDivDateP = document.createElement('p');
        let newContentDate = document.createTextNode(tarea.date);

        let tareaDivNameP = document.createElement('p');
        let newContentName = document.createTextNode(tarea.name);

        let tareaDivPriP = document.createElement('p');
        let newContentPri = document.createTextNode(tarea.priority);

        let tareaDivAttendP = document.createElement('p');
        let newContentAttend = document.createTextNode(tarea.attendant);

        let tareaDivDescP = document.createElement('p');
        let newContentDesc = document.createTextNode(tarea.description);

        tareaDivDateP.appendChild(newContentDate);
        tareaDivNameP.appendChild(newContentName);
        tareaDivPriP.appendChild(newContentPri);
        tareaDivAttendP.appendChild(newContentAttend);
        tareaDivDescP.appendChild(newContentDesc);


        tareaDivDate.appendChild(tareaDivDateP);
        tareaDivName.appendChild(tareaDivNameP);
        tareaDivPrior.appendChild(tareaDivPriP);
        tareaDivAttend.appendChild(tareaDivAttendP);
        tareaDivDesc.appendChild(tareaDivDescP);


    })
}

mostrarTareas()

console.log(tasks)