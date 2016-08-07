---
layout: post
title: "Precisamos falar sobre Progressive Enhancement"
description: "Precisamos falar sobre Progressive Enhancement"
date: 2016-07-24 20:30:00
categories: web development
published: true
---

**Progressive Enhancement** é uma forma de pensar o desenvolvimento de aplicações web com foco no front-end de uma forma que as melhorias sejam progressivas, como o nome sugere. Não ficou claro?! Não esquenta! Vamos decifrar o que esses conceitos significam e como aplicá-los nos seus projetos. 🤘

Quando trata-se do comportamento de aplicações desenvolvidas para a web, todo cuidado passa a ser pouco. Com navegadores mais modernos e compatíveis com as atuais tecnologias e especificações, tornou-se possível a abrangência de mais recursos, ampliando as possibilidades dos desenvolvedores. Seguindo está tendência, o ciclo natural seria que nossos sites também evoluissem, tornando-se cada vez mais sofisticados. 

Porém, dentro deste cenário, acabamos esquecendo um fator primordial para o sucesso: o comportamento do usuário e o navegador que eles utilizam para acessar nossos sites, que muitas vezes não é o navegador com os últimos recursos.

Normalmente, quando planejamentos o desenvolvimento de um site acabamos fazendo-o para um público indeterminado de pessoas. E dentre esse público, temos:

- Pessoas que **não gostam de JavaScript** sendo executado em seus computadores;

- Pessoas que **não podem atualizar** seus navegadores;

- Pessoas acessando a internet a partir de **dispositivos limitados**;

- Pessoas com **dificuldades motoras, visuais e auditivas** que nem sempre conseguem utilizar o mouse para navegar ou dependem de leitores de tela;

- E ainda temos um outro usuário a considerar, que não tem JavasSript nem CSS habilitados: **as ferramentas de busca**.

### Então como podemos desenvolver sites levando em conta estes cenários?


Em um primeiro momento, uma forma de pensar seria desenvolver o site para o público geral, que são aqueles que tem acesso aos navegadores mais modernos e atualizados e sem bloqueios de acessibilidade. Em um segundo momento, procuraria-se atender os usuários que já possuem mais limitações, ou seja, definindo os tipos de usuários e quais implementações são necessárias a cada fase do projeto para suprir as suas necessidades. Dentro do mundo de desenvolvimento web, essa prática é conhecida como **"Graceful Degradation"**.

Porém, pensar dessa forma pode nos levar a alguns problemas, como no exemplo a seguir dado pelo **Luiz Real**(ver nota de rodapé):

>Pegamos como exemplo para analisar: um botão de comprar em uma loja virtual. A compra foi implementada usando AJAX, para dar mais dinamicidade à navegação do usuário.

```html
<input type="hidden" name="produto" value="123456">
<input type="number" name="quantidade">
<a href="#" id="comprar"><img src="icone-comprar.png"></a>
```

```js
$("#comprar").click(function() {
    var dadosCompra = {
        produto: $("[name=produto]").val(),
        quantidade: $("[name=quantidade]").val()
    };

    // Enviamos os dados no formato JSON para o servidor.
    // atualizaPagina é uma função que vai ser executada depois que o servidor confirmar a compra.

    $.post("/compra", dadosCompra, atualizaPagina, "json");
});
```

- A quais problemas essa solução não atende?

A primeira coisa que podemos pensar é na acessibilidade da página: será que os usuários com deficiência visual conseguirão comprar nessa loja virtual? Provavelmente não. Afinal, o botão de comprar exemplificado é uma imagem! O leitor de tela não vai ser capaz de ler o texto "comprar" da imagem. 

Uma forma de melhoria seria trabalhar com um HTML mais semântico:

```html
<form>
    <input type="hidden" name="produto" value="123456">
    <input type="number" name="quantidade">
    <button type="submit" id="comprar">
        <img src="icone-comprar.png" alt="Comprar">
    </button>
</form>
```

A tag `form`, como sabemos, serve para indicar que as informações presentes serão enviadas para um servidor. Há também a tag `button` com o tipo `submit`, que indica que essa imagem é um botão e que ao ser clicado enviará o formulário.

Tendo a preocupação com **Graceful Degradation**, precisamos lembrar de todos os cenários que deixamos de lado ao desenvolver nosso site com as últimas tecnologias.

Agora, imagine uma situação onde precisamos implementar uma solução sem JavaScript. Será que é possível? Pelo servidor nos devolver um JSON como resultado, e não uma página, **precisamos** de JavaScript, agora. Ou seja, por termos desenvolvido uma solução sem pensar nos casos mais limitados, acabamos caindo em um beco sem saída. Precisando então **refazer boa parte da nossa solucão**, inclusive do lado do servidor.

- Como fazer para não corrermos o risco de esquecermos estes cenários mais limitados durante o desenvolvimento de nossas aplicações? 🤔

**Começando exatamente por eles!** Essa é a ideia do **Progressive Enhancement**. 


## Progressive Enhancement

Com essa breve contextualização dos cenários que enfrentamos durante o desenvolvimento dos nossos projetos web, agora podemos entrar mais a fundo nos conceitos de Progressive Enhancement. 

Para compreender a diferença entre **Graceful Degradation** e **Progressive Enhancement**, vamos tomar como exemplo o mesmo cenário de antes: precisamos implementar o botão para comprar um produto em uma loja virtual.



>Este texto é uma compilação envolvendo ideias do autor acerca do assunto, mais conteúdos diversos coletados, tendo forte referência o primeiro capítulo do e-book "Coletânea Front-end - Uma Antologia da Comunidade Front-end Brasileira" que fala sobre Progressive Enhancement e que foi escrito pelo [Luiz Real](https://twitter.com/srsaude), instrutor da Alura.
