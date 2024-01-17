class ListaDeTarefas{
    constructor(){
        this.list = [];
    }
    adicionar(item){
        this.list.push(item);
    }
    remover(item){
        const index = this.list.indexOf(item);
        if(index != -1){
            this.list.splice(index, 1);
        }
    }
    displayItems(){
        const listElements = document.getElementById('tela');
        listElements.innerHTML = '';

        this.list.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listElements.appendChild(listItem);
        })
    }
}
const userList = new ListaDeTarefas();


function addItem(){
    const newItem = document.querySelector('.input').value;
    if(newItem.trim() !== ''){
        userList.adicionar(newItem);
        userList.displayItems();
    }
}
function removerItem(){
    const dlt = document.querySelector('input').value;
    if(dlt.trim() !== ''){
        userList.remover(dlt);
        userList.displayItems();
    }
}
