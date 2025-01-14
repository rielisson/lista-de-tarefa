class ListaDeTarefas {
    constructor() {
        this.tarefa = JSON.parse(localStorage.getItem('tarefas')) || [];
    }
    
    salvaTarefa() {
        localStorage.setItem('tarefas', JSON.stringify(this.tarefa));
    }

    adicionar(item) {
        this.tarefa.push(item);
        this.salvaTarefa();
    }

    remover(item) {
        const index = this.tarefa.indexOf(item);
        if (index !== -1) {
            this.tarefa.splice(index, 1);
            this.salvaTarefa();
        }
    }

    displayItems() {
        const listElements = document.getElementById('tela');
        listElements.innerHTML = '';
        
        this.tarefa.forEach(item => {
            const listItem = document.createElement('li');
            
            const taskText = document.createElement('span');
            taskText.textContent = item;
            taskText.className = 'task-text';
            
            const buttonItem = document.createElement('button');
            buttonItem.textContent = "Remover";
            buttonItem.className = 'remove-btn';
            
            buttonItem.onclick = () => {
                listItem.style.opacity = '0';
                listItem.style.transform = 'translateX(100px)';
                
                setTimeout(() => {
                    this.remover(item);
                    listElements.removeChild(listItem);
                }, 300);
            };
            
            listItem.appendChild(taskText);
            listItem.appendChild(buttonItem);
            listElements.appendChild(listItem);
        });
    }

    clearItems() {
        const listElements = document.getElementById('tela');
        const items = listElements.querySelectorAll('li');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(100px)';
            }, index * 100);
        });
        setTimeout(() => {
            this.tarefa = [];
            this.salvaTarefa();
            this.displayItems();
        }, items.length * 100 + 300);
    }
}

const userList = new ListaDeTarefas();
userList.displayItems();

function addItem() {
    const input = document.querySelector('.task-input');
    const newItem = input.value;
    
    if (newItem.trim() !== '') {
        userList.adicionar(newItem);
        userList.displayItems();
        input.value = '';
        
        input.focus();
    }
}

function zeroItems() {
    userList.clearItems();
}

document.querySelector('.task-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addItem();
    }
});