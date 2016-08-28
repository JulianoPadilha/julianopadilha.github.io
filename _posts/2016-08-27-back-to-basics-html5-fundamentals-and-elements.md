---
layout: post
title: "Back to basics: HTML5 Fundamentals"
description: "Back to basics: HTML5 Fundamentals"
date: 2016-08-27 13:00:00
categories: html5 development
published: true
---

Ter uma boa base é essencial para que possamos continuar progredindo. Isso não apenas para nós desenvolvedores, mas para as mais diversas áreas de estudo e profissões. Com o tempo alguns fundamentos importantes acabam se perdendo e deixamos de fazer o simples em detrimento da falta de conhecimento ~~ou de lembrança mesmo~~. 

Com todas as ferramentas, frameworks e libraries disponíveis atualmente, acabamos na correria do dia a dia automatizando algumas tarefas triviais. E não julgo isso como algo ruim, acho super válido nos apoiarmos em ferramentas que possuem o poder de otimizar nosso trabalho. Meu receio entra quando passamos a depender exclusivamente destas ferramentas para desempenhar nosso papel. 

Refletindo sobre isso, decidi retomar o estudo de alguns fundamentos básicos do desenvolvimento web para rever alguns conceitos e porque não, aprender novos. 🤓

Para começar, optei por ir direto ao ponto de reviravolta da forma como desenvolvemos aplicações para a web: **o HTML5**. 

![](/../assets/images/HTML5.png)

Não vou me aprofundar na história do HTML nem nos detalhes por traz do HTML5. Esses conteúdos podem ser facilmente encontrados em sites como o da [W3C](https://www.w3.org/TR/html5/) ou em infinitamente outros, como o [Dive into HTML5](https://diveintohtml5.com.br/) (português). Aqui vou relatar um pouco dos elementos que fazem parte do HTML5 e as API disponíveis. A propósito, recentemente escrevi sobre uma dessas APIs, a Web Storage, e aproveitei para criar um simples [To-Do List](http://julianopadilha.com/javascript/html/how-to-build/2016/07/24/how-to-build-todo-list-with-javascript-and-web-storage.html).  

Depois de toda essa introdução e disclaimer, vamos ao que interessa! 🕵🏻

## HTML5

Um dos principais objetivos do HTML5 é facilitar a manipulação de elementos possibilitando o desenvolvedor a modificar as características dos objetos de forma não intrusiva e de maneira que seja transparente para o usuário final.
	
Ao contrário das versões anteriores, o HTML5 fornece ferramentas para o CSS e o Javascript fazerem seu trabalho da melhor maneira possível. O HTML5 permite por meio de suas APIs a manipulação das características destes elementos, de forma que o website ou a aplicação continue leve e funcional.

O HTML5 também cria novas tags e modifica a função de outras. As versões antigas do HTML não continham um padrão universal para a criação de seções comuns e específicas como rodapé, cabeçalho, sidebar, menus e etc. Não havia um padrão de nomenclatura de IDs, Classes ou tags. 

## Mudanças e novos elementos

Uma das primeiras mudaças é como declaramos o **DOCTYPE** dos nossos documentos HTML. Com o HTML5 a sintaxe passa a ser a seguinte:

```html
<!DOCTYPE html>
```

Declarando o DOCTYPE desta forma, faz com que os navegadores identifiquem que estamos utilizando a versão mais recente do HTML e que ele deve dar todo o suporte necessário para nosso documento. 


A forma como declaramos a metatag charset também ficou mais simples. Ao invés de termos que declarar todo o trecho abaixo, que era um padrão definido no HTML 4.01:

```html
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```

Agora usamos apenas:

```html
<meta charset="UTF-8">
```

### Novos elementos

`<article>`

O propósito do elemento `article` é ser um container para representar uma seção de conteúdo dentro do site, que forma uma parte independente do documento. Dentro de um `article` pode conter, por exemplo, um post de blog, um artigo, texto e etc.

Comumente confundesse os elementos `article`, `section` e `div`. O `article` é um elemento mais específico que o `section` e o `div`. O `article` indica que um determinado bloco leva um conteúdo importante. O `section` é apenas um bloco de separação de assuntos diferentes. O `div`, o mais genérico de todos, apenas é aplicado para separar elementos em blocos.

#### Exemplo:

```html
<article>
	<h4>Google</h4>
	<p><a href="https://www.google.com.br">Google Inc</a>. é uma 		empresa multinacional de serviços online e software dos 		Estados Unidos. O Google hospeda e desenvolve uma série de 		serviços e produtos baseados na internet e gera lucro 		principalmente através da publicidade pelo AdWords</p>
</article>
```

`<aside>`

A tag `aside` é usada para agregar mais informação ao conteúdo principal. Algumas utilidades do `aside`: citações ou sidebars, agrupamento de publicidade, grupos e blocos de navegação e para qualquer outro conteúdo que é separado do conteúdo principal.

O elemento `aside` pode ir também dentro de um elemento `article` como uma caixa de notação ou algo do genêro.


`<audio>`

O HTML5 introduziu a possibilidade de tocar mídias nativamente no browser. A tag `audio` é utilizada para especificar o uso de um áudio em um documento HTML.

Qualquer conteúdo entre as tags de abertura e de fechamento do elemento `audio` é um *fallback*. Este conteúdo é exibido apenas em browsers que não suportam a tag `audio`.

<audio src="/../assets/audios/good_enough.mp3" controls>
	<p>Se você está vendo este texto é porque seu navegador não suporta o elemento áudio. :/</p>
</audio>

#### Exemplo:

```html
<audio src="/../assets/audios/good_enough.mp3" constrols>
	<p>Se você está vendo este texto é porque seu navegador não 		suporta o elemento áudio.</p> //Fallback para navegadores 		que não suportam o elemento audio.
</audio>
```

`<bdi>`

O elemento `bdi` é meio estranho. Nunca me deparei com uma situação onde precisei utilizá-lo. Mas segunda a especificação, este elemento isola uma parte do texto que pode ser formatado numa direção diferente a partir do texto fora dela. 

#### Exemplo:

```html
<ul>
  <li>User <bdi>hrefs</bdi>: 60 points</li>
  <li>User <bdi>jdoe</bdi>: 80 points</li>
  <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>
```

Este elemento é útil ao incorporar o texto com uma direção desconhecida, de um banco de dados por exemplo, no interior do texto com uma direção fixa. 

`<canvas>`

O elemento `canvas` é uma superfície desenhável nativa disponível nos browsers. Ela permite que desenhemos utilizando JavaScript por meio da sua API.

O única elemento HTML existente para isso é o elemento `canva`, o resto é todo feito via JS. 

```html
<canvas id="myCanvas" width="300" height="300"></canvas> 
```

O exemplo acima vai exibir um retângulo vazio. E para desenharmos nele basta utilizar JavaScript, como já mencionado. 

<canvas id="myCanvas" width="300" height="200">Seu browser não suporta o elemento canvas.</p></canvas>

<script>
function displayCanvas()
	{
      var canvas = document.getElementById("myCanvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (0, 0, 150, 75);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (40, 30, 125, 75);

        ctx.fillStyle = "rgb(0,0,150)";
        ctx.strokeRect (20, 20, 50, 100); 
      }
    }

    window.onload = displayCanvas;
</script>

#### Exemplo:

```html
<canvas id="myCanvas" width="300" height="200">Seu browser não suporta o elemento canvas.</p></canvas>
<script>
function displayCanvas()
	{
      var canvas = document.getElementById("myCanvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (0, 0, 150, 75);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (40, 30, 125, 75);

        ctx.fillStyle = "rgb(0,0,150)";
        ctx.strokeRect (20, 20, 50, 100); 
      }
    }
    window.onload = displayCanvas;
</script>
```

Quando você utilizamos o `canvas`, precisamos declarar qual tipo de contexto queredo usar. Podemos escolher entre os contextos 2D e 3D. Vale a pena estudar mais sobre este elemento e sua API.

`<datalist>`

O elemento `datalist` é uma nova adição a coleção de elementos de formulário. Para entender este elemento, considere um formulário onde você dá para o usuário a oportunidade de entrar com sua cor favorita. Ao mesmo tempo que o campo de texto é aberto para o usuário digitar algum valor, nós também podemos prover uma lista de sugestões, e isso pode ser feito com uma `datalist` associada. O exemplo abaixo vai deixar a ideia mais clara. Sua estrutura lembra muito a tag `select`.

<input type="text" list="colors" placeholder="Clique aqui..">
<datalist id="colors">
    <option value="Blue"></option>
    <option value="White"></option>
    <option value="Red"></option>
</datalist>

#### Exemplo: 

```html
<input type="text" list="colors">
<datalist id="colors">
    <option value="Blue"></option>
    <option value="White"></option>
    <option value="Red"></option>
</datalist>
```

`<details>`

Sabe quando precisamos criar uma área para o site onde mostrará um sumário de informações e quando alguém clicar no conteúdo, abrir mais informações sobre aquele item logo abaixo?

Pois é, quem já fez algo do tipo, provavelmente utilizou JavaScript, jQuery, ou alguma outra solução para atingir o objetivo final. Porém, com o HTML5 é possível termos o mesmo comportamento utilizando apenas elementos do HTML. 😎

O elemento `details` pode ser utilizado juntamente com o elemento `summary` para prover um cabeçalho clicável que expande/recolhe os detalhes desejados.

<details>
	<summary>Clique para abrir</summary>
	<p>Se você estiver vendo essa mensagem é porque seu browser suporta essa funcionalidade. Legal, né?!</p>
</details><br>

#### Exemplo:

```html
<details>
	<summary>Clique para abrir</summary>
	<p>Se você estiver vendo essa mensagem é porque seu browser 		suporta essa funcionalidade. Legal, né?!</p>
</details>
```

`<dialog>`

O elemento `dialog` indica uma parte de uma aplicação que o usuário pode interagir.

Esse elemento aceita um atributo booleano chamado `open` que define o elemento para "ativo" e permite que o usuário interaja com ele. Sele este atributo for omitido, então vai ser necessário manipular ele por meio de JavaScript para permitir que o dialog abra and feche.

![](/../assets/images/dialog_html5.gif)

#### Exemplo:

```html
<div>
	<dialog id="myFirstDialog" style="width:50%;background-color:#F4FFEF;border:1px dotted black;">		<p><q>The world is full of magical things patiently waiting for our wits to grow sharper.</q> - <cite>Bertrand Russell</cite></p>
		<button id="hide">Close</button>
	</dialog>
<!-- "Show" button -->
<button id="show">Show Dialog</button>
</div>

<!-- JavaScript habilita a funcionalidade "Show/Close" -->
<script type="text/JavaScript">
(function() {  
    var dialog = document.getElementById('myFirstDialog');  
    document.getElementById('show').onclick = function() {  
        dialog.show();  
    };  
    document.getElementById('hide').onclick = function() {  
        dialog.close();  
    };  
})(); 
</script>
```