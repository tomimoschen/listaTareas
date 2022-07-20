document.querySelector('#ingresarTarea').onclick = function(){
    if(document.querySelector('#tareas input').value.length == 0){
        alert("Escriba una tarea")
    }
    else{
        document.querySelector('#tareasIngresadas').innerHTML += `
            <div class="tarea">
                <span id="nombreTarea">
                    ${document.querySelector('#tareas input').value}
                </span>
                <button class="borrar">
                </button>
            </div>
        `;
        let current_tasks = document.querySelectorAll(".borrar");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}