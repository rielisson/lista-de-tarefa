class ListaDeTarefas {
    constructor() {
        this.tarefa = JSON.parse(localStorage.getItem('tarefas')) || [];
    }
    
    salvaTarefa() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefa));
        console.log(this.tarefa);
    }

    adicionar(item) {
        this.tarefa.push(item);
        this.salvaTarefa();
    }

    remover(item) {
        const index = this.tarefa.indexOf(item);
        if (index != -1) {
            this.tarefa.splice(index, 1);
            this.salvaTarefa();
        }
    }

    displayItems() {
        const listElements = document.getElementById('tela');
        listElements.innerHTML = '';
        
        this.tarefa.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listElements.appendChild(listItem);
        });
    }

    clearItems() {
        this.tarefa = [];
        this.salvaTarefa();
    }
}

const userList = new ListaDeTarefas();
userList.displayItems(); 

function addItem() {
    const newItem = document.querySelector('.input').value;
    if (newItem.trim() !== '') {
        userList.adicionar(newItem);
        userList.displayItems();
        document.querySelector('.input').value = '';
    }
}

function removerItem() {
    const dlt = document.querySelector('.input').value;
    if (dlt.trim() !== '') {
        userList.remover(dlt);
        userList.displayItems();
        document.querySelector('.input').value = '';
    }
}

function zeroItems() {
    userList.clearItems();
    userList.displayItems();
}
