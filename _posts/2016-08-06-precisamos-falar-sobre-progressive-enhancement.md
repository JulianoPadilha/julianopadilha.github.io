---
layout: post
title: "Precisamos falar sobre Progressive Enhancement"
description: "Precisamos falar sobre Progressive Enhancement"
date: 2016-08-07 14:30:00
categories: web development
published: true
---

**Progressive Enhancement** é uma forma de pensar o desenvolvimento de aplicações web com foco no front-end de uma forma que as melhorias sejam progressivas, como o nome sugere. Não ficou claro?! Não esquenta! Vamos decifrar o que esses conceitos significam e como aplicá-los nos seus projetos. 🤘

>**Nota do autor:** Este texto é uma compilação envolvendo anotações e transcrições do segundo capítulo do e-book "Coletânea Front-end - Uma Antologia da Comunidade Front-end Brasileira" que fala sobre Progressive Enhancement e que foi escrito pelo [Luiz Real](https://twitter.com/srsaude), instrutor da Alura.

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

Porém, pensar dessa forma pode nos levar a alguns problemas, como no exemplo a seguir dado pelo **Luiz Real**(ver nota do autor):

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

Qual seria então o nosso cenário mais limitado? Bom, um navegador baseado em texto já é um começo. Neste tipo de navegador, a única ferramenta que temos diponível é o HTML.

- Como implementaríamos o botão de compra utilizando apenas HTML? Com algo similar ao que já tínhamos:

```html
<form action="/comprar" id="comprar">
    <input type="hidden" name="produto" value="123456">
    <input type="number" name="quantidade">
    <button type="submit">Comprar</button>
</form>
```

O interessante de se observar nesta implementação, é o uso do atributo `action` no formulário. Ele faz com que o navegador saiba para qual endereço no servidor os dados do formulário devem ser enviados. Assim, não precisamos de JavaScript nenhum para fazer o navegador entender isso.

Outro ponto interessante, é a inserção do texto "Comprar" dentro de um botão em vez de uma imagem. Essa decisão além de tratar a questão dos navegadores baseados em texto, também se mostra compatível com os leitores de telas utilizados pelos usuários com deficiência visual. 

Também vale ressaltar que a decisão de começar pelo cenário mais limitado influencia também o lado servidor da aplicação: o formato dos dados enviados serão o padrão do navegador e não no formado JSON.

- Para implementar a nossa compra com AJAX, como queríamos anteriormente, podemos escrever o seguinte código:

```js
$("#comprar").submit(function() {
    $.post(this.action, $(this).serialize());
});
```

Por estarmos usando um formulário semântico, podemos simplesmente pedir para o jQuery pegar os dados desse formulário e enviá-lo como o navegador faria, porém de forma assíncrona.

Quando começamos por um cenário mais limitado, há a tendência natural em solucioná-lo adequadamente. Isso nos força a pensar e desenvolver de uma forma que favorece um HTML mais semântico e desacoplado de CSS e JavaScript. Ganhamos não apenas um site que funciona bem para todos; ganhamos também um código **mais limpo e fácil de manter**.

>Mas quais são os cenários mais limitados? Por onde começar? Como acrescentar funcionalidades sem quebrar o que já tínhamos? Veremos isso adiante! 🙃

### Por onde começar?

Começar a desenvolver pensando em **Progressive Enhancement** influencia os mais diversos pontos dentro de um projeto. Seguindo novamente um exemplo dado pelo **Luiz Real**, se formos desenvolver um site para divulgar um produto, podemos pensar, antes de mais nada em:

- Qual nosso público-alvo?
- Será que precisamos nos procupar com navegadores antigos?
- Qual a parcela de visitantes do meu site que virá de dispositivos móveis?
- Quão importante é a integração com redes sociais?
- O que posso oferecer para meus visitantes com configurações mais limitadas?

Como podemos perceber, estas são questões que estão muito mais relacionadas ao contexto do negócio do que relacionados a questões técnicas. Ter as respostas para essas questões é muito relevante para nortear o processo de aplicação do conceito de **Progressive Enhancement**.

Conseguimos perceber até aqui que o **Progressive Enhancement** não é apenas uma forma de desenvolver códigos front-end. *É uma forma diferente de pensar o desenvolvimento do produto como um todo.*

Sendo assim, uma possível resposta para a nossa pergunta "Por onde começar?" seria:

**Pelo planejamento do produto**

    Tendo bem claro os objetivos do produto, as decisões técnicas tornam-se mais simples.

Um grande erro dos desenvolvedores, principalmente dos iniciantes, é deixar em segundo plano pontos inerentes ao planejamento do projeto e partir diretamente para a codificação. Erro grave! 

Claro que em um cenário real, algumas situações fogem do nosso controle, como público-alvo pouco conhecido, influência do cliente junto ao projeto e o orçamento com prazo limitado.

Mas ainda com esses potenciais empecilhos, é possível aplicar o **Progressive Enhancement**. Veja só: 

- Se não sabemos qual o cenário mais limitado que vamos atender, podemos começar pelo mais limitado.

- Se não temos orçamento e/ou prazo suficiente para desenvolver todas as funcionalidade desejadas, podemos entregar as que atendem aos cenários mais limitados primeiro.

- Se não sabemos quais tecnologias os visitantes do site vão usar para acessar o conteúdo, começamos com o mínimo possível de tecnologias.


## Progressive Enhancement e HTML

Como sabemos, o HTML é a base de toda página na Internet e, portanto, todo usuário do nosso site, seja humano ou máquina, tem que entender pelo menos HTML; sempre podemos contar com ele.

>Vale ressaltar que atualmente todos os navegadores, em suas últimas versões, trabalham com HTML5. 

Quando dizemos HTML5, na verdade, estamos falando de uma série de novas funcionalidades, como, novas tags, novos atributos, novas APIs, entre outros. São tantos novos recursos, que os navegadores, em sua maioria, ainda não implementam a especificação do HTML5 em sua totalidade.

Porém, a especificação do HTML já foi projetado pensando em **Progressive Enhancement**. Peguemos o exemplo abaixo para analisar:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Teste de HTML5</title>
    </head>
    <body>
        <header>
            <h1>Página com HTML5</h1>
            <span>Bacana, né?</span>
        </header>
        <section>
            <h1>Hora atual</h1>
            <time>22:39</time>
            <p>Um controle de form novo:</p>
            <input type="range" min="1" max="10">
        </section>
    </body>
</html>
```

Logo no início do código, declaramos o DOCTYPE para indicar para o navegador que estamos utilizando a versão mais recente do HTML, ou seja, que o navegador deve mostrar todo seu potencial.

E se o navegador não implementar suporte a todos estes recursos? A especificação do HTML recomenda que:

- *Se um agente de usuário encontrar um elemento que não reconhece, ele deve tentar renderizar seu conteúdo;*

- *Se um agente de usuário encontrar um atributo que não reconhece, ele deve ignorar a declaração completa deste atributo, isto é, o atributo e seu valor;*

- *Se um agente de usuário encontrar um valor de atributo que não reconhece, ele deve usar o valor padrão para aquele atributo.*

Mesmo que o navegador não entenda exatamente o que estamos querendo dizer, ele vai mostrar o conteúdo para o usuário; **podemos incrementar a semântica e a interatividade do nosso HTML sem quebrar os navegadores mais limitados!** A recomendação é bem favorável à aplicação do **Progressive Enhancement**.

No exemplo dado anteriormente, se o navegador não suporta a tag `<time>` e o `input` do tipo `range`, ainda assim o usuário verá a hora e um controle de formulário (uma caixa de texto, que é o controle de formulário padrão).


## Progressive Enhancement e CSS

Tendo a nosso HTML como base bem definido, podemos começar a implementar o design com CSS.

Assim como o HTML, o CSS é uma tecnologia já antiga e que passou por uma grande evolução, culminando no que chamamos agora de **CSS 3**. Assim como o caso do HTML, os navegadores não implementam suporte a todas as novidades, mesmo porque elas continuam vindo, mas os navegadores ignoram as propriedades desconhecidas, de modo que também é muito fácil ir incrementando nosso visual de acordo com as funcionalidades disponíveis.

Além disso, o CSS tem uma outra característica peculiar que facilita o **Progressive Enhancement**: quando uma propriedade aparece duplicada, apenas a última declaração é considerada.

Esse comportamento permite fazer **Progressive Enhancement** de um jeito fácil: basta ir acrescentando as funcionalidades mais recentes abaixo das mais antigas! 👌

Quando pensamos em **Progressive Enhancement**, devemos pensar em dar a melhor experiência possível para os cenários limitados. A maior parte dos sites que vamos desenvolver no nosso dia a dia precisará de CSS para ser visualmente agradável e atrair mais usuários. Ou seja, mesmo nos cenários mais limitados, já estaremos dependentes de CSS.

>A maioria dos requisitos de front-end que normalmente implementamos com JavaScript podem ser feitos apenas com CSS, ou seja, sem depender de mais uma tecnologia.


## Progressive Enhancement e JavaScript

Desenvolver pensando primeiro nos cenários mais limitados já evita que caiamos em certos tipos de armadilhas. No entanto, quando adicionamos JavaScript à̀ página, precisamos tomar certos cuidados para não quebrar o trabalho já feito, assim como no CSS.

Da mesma forma que devemos pensar no CSS como algo a mais em uma página, devemos também pensar no JavaScript dessa forma. Isso significa que, na medida do possível, o código JavaScript não deve interferir no seu HTML.

Tomemos o exemplo dado pelo Luiz Real. Em vez de fazer um link virar uma ação em JavaScript como:

```html
<a href="#" onclick="maisProdutos()">Mais produtos</a>
```

Devemos preservar o HTML original.

```html
<a href="mais-produtos.html">Mais produtos</a>
```

E adicionar a funcionalidade JavaScript usando o próprio JavaScript.

```js
document.querySelector(’[href="mais-produtos.html"]’).addEventListener(’click’, maisProdutos);
```

Dessa forma, nosso site continua funcionando perfeitamente, mesmo que o JavaScript apresente algum problema, e essa é uma das principais vantagens do **Progressive Enhancement** para o seu desenvolvimento.

>Esse tipo de pensamento é conhecido entre os desenvolvedores JavaScript como JavaScript não-obstrutivo.

Um ponto que não gera dores de cabeça no HTML e no CSS mas que, no JavaScript, é bastante complicado, é lidar com funcionalidades faltantes. Vimos que, com relação ao HTML, o navegador mostra informações de tags desconhecidas e, com relação ao CSS, o navegador ignora propriedades e valores não suportados; o mesmo não acontece com o JavaScript: qualquer comando que não seja suportado pelo navegador gerará um erro de JavaScript, consequentemente parando toda a execução do código.

Lidar com as limitações e diferenças entre os navegadores pode ser bastante trabalhoso. Por exemplo, para selecionar elementos da página, podemos usar a função `document.querySelector`, como  fizemos no exemplo anterior. No entanto, essa função não está presente em todos os navegadores. Para que nosso código funcione em todos os navegadores, podemos usar a função `document.getElementsByClassName`:

```js
var resultados = document.getElementsByClassName(’resultados’)[0];
```


## Entendi! Mas quando o Progressive Enhancement não é uma alternativa?

A abordagem do **Progressive Enhancement** resolve muitos problemas do desenvolvedor front-end ao forçar o foco primeiro na parte mais importante de um site, que é prover o conteúdo. No entanto, **Progressive Enhancement** tem suas desvantagens e nem sempre é aplicável. 

Quando desenvolvemos pensando primeiro nos cenários mais limitados, conseguimos planejar nosso desenvolvimento de modo a tornar nosso site minimamente acessível nesses cenários. No entanto, isso pode ser restritivo para o processo criativo de desenvolvimento de um site.

É possível desenvolver uma versão mais simples, sem as funcionalidades principais, para os cenários mais limitados, usando **Progressive Enhancement**. Essa abordagem é seguida, por exemplo, pelo Gmail, o serviço de e-mail da Google. A versão principal do cliente web é desenvolvida usando recursos avançados de JavaScript. Para simplificar o desenvolvimento dessa versão e ainda permitir o acesso aos e-mails nos navegadores mais limitados, foi desenvolvida uma versão baseada apenas em HTML.

Mesmo nos cenários em que **Progressive Enhancement** não é aplicável, é interessante ter em mente as preocupações dessa forma de desenvolvimento. Desenvolver para a web é desenvolver para todos, independente de plataforma, navegador, língua e capacidades, e essa é a principal preocupação do **Progressive Enhancement**.