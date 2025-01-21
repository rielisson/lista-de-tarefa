

# Lista de Tarefas

Este é um projeto simples de lista de tarefas desenvolvido em HTML, CSS e JavaScript. Ele permite adicionar, remover e exibir tarefas, com os dados sendo salvos no `localStorage` do navegador para persistência. As tarefas são carregadas automaticamente assim que o usuário acessa a página.

## Funcionalidades

- **Adicionar Tarefas:** Adicione novas tarefas à lista.
- **Remover Tarefas:** Remova tarefas específicas da lista.
- **Limpar Lista:** Remova todas as tarefas da lista de uma vez.
- **Persistência de Dados:** As tarefas são salvas no `localStorage`, permitindo que os dados permaneçam mesmo após o fechamento do navegador.
- **Carregamento Automático:** As tarefas são carregadas automaticamente na interface assim que o usuário acessa a página.

## Como Usar

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/rielisson/lista-de-tarefas.git
   ```

2. Abra o arquivo `index.html` no seu navegador preferido.

3. Adicione tarefas utilizando o campo de entrada e o botão "Adicionar".

4. Para remover uma tarefa, digite o nome da tarefa no campo de entrada e clique em "Remover".

5. Para limpar toda a lista de tarefas, clique em "Limpar".

## Estrutura do Projeto

```bash
├── index.html        # Estrutura HTML da aplicação
├── style.css         # Estilos CSS para a interface
└── script.js         # Lógica principal em JavaScript
```

## Código JavaScript

A lógica principal da aplicação está no arquivo `script.js`, que contém uma classe `ListaDeTarefas` responsável por manipular o `localStorage` e gerenciar a adição, remoção e exibição de tarefas.

### Classe `ListaDeTarefas`

- **Constructor:** Carrega as tarefas armazenadas no `localStorage`.
- **salvaTarefa():** Salva as tarefas no `localStorage`.
- **adicionar(item):** Adiciona uma nova tarefa à lista.
- **remover(item):** Remove uma tarefa específica da lista.
- **displayItems():** Exibe as tarefas na interface.
- **clearItems():** Limpa todas as tarefas da lista.

## Requisitos

- Navegador com suporte a HTML5, CSS3 e JavaScript.

## Melhorias Futuras

- Implementar um sistema de edição de tarefas.
- Adicionar suporte a múltiplas listas de tarefas.
- Adicionar uma interface mais moderna e responsiva.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
