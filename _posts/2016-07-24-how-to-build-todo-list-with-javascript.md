---
layout: post
title: "How to build: Um To-Do List com JavaScript utilizando a API Web Storage do HTML"
description: "How to build: Um To-Do List com JavaScript utilizando a API Web Storage do HTML"
date: 2016-07-24 20:30:00
categories: javascript html how-to-build
published: true
---

Decidi escrever este post para falar um pouco sobre uma API muito interessante do HTML, mas que pouco ouvimos falar a respeito. O que também me motivou a escrever este conteúdo, é que recentemente percebi que consigo fixar melhor o que estudo quando tenho a oportunidade de fazer anotações sobre o assunto. Se você der uma olhada no meu [GitHub](https://github.com/JulianoPadilha), verá que estou de fato colocando isso em prática e tomando anotações como parte do meu método de aprendizado. 🤓

Pretendo tornar este tipo de conteúdo uma série dentro do meu site chamada "How to Build". Acredito que será bem interessante e pretendo abordar os mais diversos assuntos, e claro, mostrar como se faz na prática, com uma pitada de teoria. Então vamos lá?! 

## O que é Web Storage?

Web Storage faz parte da API do HTML e fornece mecanismos para que os navegadores possam armazenar dados através de chave/valor de uma forma mais eficiente que os cookies. A API do Web Storage fornece duas maneiras de armazenar dados:

- `sesseionStorage`
O sessionStorage mantém as informações armazenadas por origem e permanece disponível enquanto há uma sessão aberta no navegador(mesmo a página sendo recarregada). Caso o browser seja fechado a sessão será limpa e as informações serão perdidas.

- `localStorage`
O localStorage é muito parecido com o sessionStorage, a diferença é que mesmo que o navegador seja fechado, os dados permanecem armazenados.

Esses mecanismos estão disponíveis a partir das seguintes propriedades `Window.sessionStorage` e `Window.localStorage` (para um maior suporte, o objeto Window implementa os objetos  Window.LocalStorage e Window.SessionStorage) — ao invocar uma dessas propriedades, é criada uma instância do objeto Storage, que fornece métodos para inserir, recuperar e remover os dados.

## Propriedades

`Storage.lenght`
Retorna um inteiro que representa o número de itens de dados armazenados no objeto de armazenamento.

## Métodos

`Storage.key()`
Retorna o nome da chave passada como parâmetro.

`Storage.getItem()`
Quando passado o nome de uma chave, retornará o valor dessa chave.

`Storage.setItem()`
Quando passado o nome de uma chave, adicionará a chave no storage ou atualizar o valor da chave caso ela já exista.

`Storage.removeItem()`
Quando passado o nome da chave, removerá a chave do storage.

`Storage.clear()`
Quando chamada, esvaziará todas as chaves fora do armazenamento.

## Chega de teoria! Let's make things happen!

Esse será o resultado final do nosso "How to Build" de hoje. Não está bonito, eu sei, seu sei.. Mas a ideia não era essa, a ideia é aprender os fundamentos de algo novo. Então fique a vontade para deixar o seu to-do list esteticamente mais bonito que o meu. 😉

![](/../assets/images/how-to-build-todo-list-js-web-storage.png)

### Estrutura de pastas e arquivos

Para nosso exemplo usaremos algo simples para nossa estrutura de pastas e arquivos:

```
📁 app
|___ index.html
|___ style.css
|___ todo.js
```

### index.html

Nossa página HTML também é super simples. De importante que devemos nos atentar, temos: 
- O elemento `input` que vai servir para a entrada dos nossos dados;
- O elemento `button` que irá ser o principal responsável por diversas ações da aplicação;
- Os dois elementos `div` que irão ser responsáveis, respectivamente, por exibir uma mensagem para o usuário dependendo do status da sua lista de tarefas e listar todo os nossos to-do's


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">

    <link rel="stylesheet" type="text/css" href="style.css">

    <title>To-Do List</title>
</head>
<body>
    <div class="header">
        <input type="text" id="todo">
        <button id="add">Add</button>
    </div>
    <hr>

    <div id="msg"></div> // Usaremos essa div para exibir uma mensagem dependendo do status do nosso storage 
    <div id="todos" class="todos"></div> // Usaremos essa div para exibir a nossa lista de to do's

    <script src="todo.js"></script>
</body>
</html>
```

Sussa?! Keep going!

### todo.js

É aqui que a brincadeira começa a ficar interressante. _Muahahaha_ 

Explicarei trecho por trecho o que está acontecendo no código e no final do tópico deixarei o código completo para facilitar a visualização. 🤘

- `addTodo()`;

```js
var addTodo = function(){
    var todo = document.getElementById('todo').value; // Pega o valor digitado no input e armazena na variável 'task'.

    var todos = getTodos(); // Chamamos em uma variável a função 'getTasks' que cria um array que traz todas as tasks salvas antes de inserir uma nova.

    if(todo){ // Verifica se há alguma task preenchida dentro do input
        todos.push(todo); // Utilizamos o push para jogar o elemento armazenado na variável 'task' para nosso Array.

        localStorage.setItem('todos', JSON.stringify(todos)); // Utilizamos o localStorage para "persistir" as informações no storage do browser. Com parâmetro passamos a chave e o valor, usando 'JSON.stringify' para transformar o valor em ums string.

        document.getElementById('todo').value = ''; // Retorna para vazio o input após um item ser inserido.
    }

    // showTasks(); // Chamamos a função showTasks() para ela mostrar na tela o novo elemento adicionado logo após o mesmo ser inserido. Sem ela, teríamos que atualizar o navegador para ver a mudança na tela. 

    document.location.reload(true); // Utilizamos o reload(true) para após a função ser realizada atualizar a a tela. Sendo assim, a função chamada acima pode ser retirada. 
}
```


