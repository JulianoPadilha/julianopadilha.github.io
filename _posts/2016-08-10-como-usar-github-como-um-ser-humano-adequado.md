---
layout: post
title: "Como usar o GitHub como um ser humano adequado"
description: "Como usar o GitHub como um ser humano adequado"
date: 2016-08-10 19:50:00
categories: git github development
published: true
---

>Tradução livre do post escrito por [Daniel Gallegos](https://stories.devacademy.la/@thattacoguy): [How to use GitHub like a proper human being](https://stories.devacademy.la/how-to-use-github-like-a-proper-human-being-1a9c895c4e13#.rafva1m7t).

![](/../assets/images/octocat.png)
<center style="font-size: 11px;"> [Founding Father Octocat v2 por James Kang](https://octodex.github.com/foundingfather_v2) </center>

*Saiba algumas regras de etiqueta, parça.*

A organização do nosso repositório pode ser uma confusão às vezes. Veja como torná-lo menos bagunçado.

### Commits

Eu tenho visto (e feito) muitas mensagens ruins de commit na [devAcademy](https://medium.com/@devacademyla). Nós realmente devemos começar a cobrar 10 centavos para cada commit ma feito por alguém. Faríamos [milhões](https://www.youtube.com/watch?v=EJR1H5tf5wE).

![](/../assets/images/austin_power.png)
<center style="font-size: 11px;">100 milhões de dólares, para ser exato</center><br/>

Nós podemos resolver isso de uma vez por todas, lembrando-se de algumas orientações quando comitar alguma coisa no GitHub. E eu quero dizer **QUALQUER COISA**. Projetos pessoais, projetos de trabalho, até mesmo projetos que você acha que nunca verá a luz do dia.

Uma vez que você adquire o hábito de escrever mensagens de commit consistentes, você vai começar a fazer isso reflexivamente. Você não terá mais que perder tempo pensando no que escrever, desperdiçando esforços. Além de que seus colegas de trabalho podem passar a gostar mais de você também. *Podem.*

![](/../assets/images/reflexive_commits.gif)
<center style="font-size: 11px;">reflexive_commits.gif</center><br/>

Quando fazendo um commit, eu normalmente sigo [esta pequena lista de orientações criada pelo Chrys Beams](http://chris.beams.io/posts/git-commit/), juntamente com com o [guia de estilo do git](https://github.com/agis-/git-style-guide). Aqui está o que eu aprendi:

- **Mantenha seus commits atômicos.** O que isso quer dizer? Fresh Consulting diz que você deve aplicar as mudanças assim que você as fizer. Seu commit deve girar em torno de uma alteração ou correção. Se você tem que adicionar um “e” em sua mensagem de commit, então você já está comitando demais.

- **Mantenha as suas mensagens de commit com menos de 50 caracteres.** Por que? Pequenas coisas são fáceis de ler, como esta frase. Curta e direta ao ponto.

- **Escreva em maiúsculo a primeira letra da sua mensagem de commit.** Isto é visto geralmente como uma boa conduta pela maioria dos especialista em git. Frases começando com letras em maiúsculo também são mais profissionais e fáceis de ler. (Vê um padrão aqui?)

- **Não termine sua mensagem de commit com um ponto.** Deixe as pessoas em suspense. Deixe elas querendo mais. Além disso, você deve ter certeza de que seus 50 caracteres estão sendo bem gastos.

- **Use uma mensagem de commit imperativa.** Faça com que seus commits soem como se você estivesse dando um comando para alguém. A programação é normalmente definida “ordenar seu computador a fazer coisas”. Então, porque não manter a mesmo padrão para seus commits, certo?!

- **Use o mesmo idioma nas suas mensagens de commit.** A maioria das pessoas parece usar o inglês como seu idioma preferido, mas isso não significa que você também deve. O que você precisa fazer é se manter consistente. Não misture frases em um idioma com outro.

![](/../assets/images/fix_estilo.png)
<center style="font-size: 11px;">NÃO FAÇA ISSO. POR FAVOR.</center><br/>

*“Refactor mediumExample() function”*, *“Remove unnecessary lines in bot.js”* e *“Add SASS gem to gemfile”* são todos bons exemplos de commits atômicos fáceis de entender e que descrevem a ação que vocês está fazendo em 50 caracteres ou menos. Eles podem parecer frescuras desnecessárias para você, mas quando você ou outra pessoa precisar encontrar uma mudança específica feita no passado, eles vão agradecer-lhe imensamente.

### READMEs

Eu tenho visto muitos projetos com READMEs confusos e “sem brilho” que tem feito eu ficar doente. O README supostamente foi feito para você “vender seu projeto”. Quando alguém lê-lo, devo conseguir se interessar por seu projeto em segundos. Apenas depois disso, que as pessoas vão considerar fazer uma análise mais profunda do projeto.

Eis aqui o que eu considero elementos necessários em um README:

- **Uma imagem de cabeçalho (opcional).** Dê para as pessoas algo para olhar. Elas precisam saber sobre o que é seu projeto, mesmo de relance. Exponha para elas um screenshot ou adicione um logotipo no topo da página.

- **Um título.** As pessoas precisam saber como seu projeto é chamado. Torne o nome algo óbvio e intuitivo para as pessoas lembrarem dele.

- **Badges (opcional).** [Badges são legais](http://forthebadge.com/), não são?! Badges devem ser utilizados para coisas importantes, como um status de compilação, versão do código, compatibilidade do projeto, etc.

- **Uma pequena descrição.** Vinte palavras ou menos. Essa pequena frase deve resumir tudo sobre seu projeto. É o seu slogan, basicamente. Então saiba vender seu projeto.

- **Uma pequena lista de características.** Quatro ou cinco coisas que digam “Hey, essas são algumas coisas legais sobre este projeto!” Mantenha as pessoas interessadas em seu projeto com algumas coisas radicais que seu produto faz.

- **Um curto sumário de instalação e/ou uso.** A sua aplicação não deve ter 10 parágrafos para descrever como instalá-lo e/ou usá-lo, e você não deve escrever um manual completo para mostrar rapidamente para algumas pessoas como seu projeto funciona.

- **Links externos para documentação adicional.** Você escreveu documentação para seu projeto, certo? Certo? CERTO?! Se sim, por favor, não inclua ele totalmente no seu README. O GitHub tem Wikis para seus projetos, que é um método muito melhor de apresentar conteúdo, o oposto de um enorme arquivo em Markdown. Criei uma lista de links importantes com marcadores para tornar a leitura mais agradável.

### Branches

Esse ponto é simples. Mantenha o nome do seu branch de forma de descreva o que há nele. O GitHub automaticamente nomeia suas correções após um patch se você editá-los online, então não faz muita diferença. Mas quando você estiver offline e usando o git em sua máquina, dê um bom e descritivo nome para seu branch, e com menos de 30 caracteres.

[Este guia de estilo do git](https://github.com/agis-/git-style-guide) diz que você deve usar **“nomes curtos e descritivos”**, e eu acho que é uma boa referência para nomeação. Use algo como “rails-5-upgrade”, ou use algo para referenciar um issue especifica no GitHub, como “issue-57”. Deixe o nome do seu branch contar uma história com quanto menos caracteres possível e dê uma sinopse super rápida sobre o que você está fazendo sobre ele.

Também, pelo amor de Torvalds, **mantenha seu branch atualizado com o branch master**. Certifique-se de que quando você submeter um PR, o proprietário não tenha que passar por um milhão de *“hoops”* apenas para fazer o merge do seu branch com o master. Deu conflito de merge? Conserte!

### Issues

Vamos falar sobre o report de bugs por um momento aqui. Você já tentou alguma vez corrigir algo mesmo sem saber primeiramente qual era o problema? Huh? O que você tem a dizer?

![](/../assets/images/issue_without_describing.png)

>Você não pode esperar que eu conserte um problema sem saber qual era o problema em primeiro lugar.

Exatamente! Muitas pessoas enviam issues no GitHub sem descrever nada. Seja descritivo com suas issues. Isso vai ajudar a todos.

Como você espera que alguém possa te ajudar com seu problema se você não pode ao menos tirar um tempo para descrevê-lo? Eis algumas coisas que você deve incluir no report dos seus bugs para fazer a vida de todo mundo mais fácil:

- **O que vocês estava tentando fazer.** Quais eram as condições quando o erro foi produzido? Você estava tentando executar um comando ou navegar para um página? Tantas questões, tão pouco tempo. Inclua alguns screenshots ou logs, se possível.

- **O que exatamente aconteceu.** Você sabe, como as coisas deram errado.

- **O que você acha que deu errado (opcional).** Isso deu errado de alguma forma, certo? Dê um palpite do que você acha que aconteceu e porque.

- **Como reproduzir seu problema.**

- **Outros detalhes importantes.** Sistema Operacional, versão de tudo que você estava usando, alguns logs do sistema, caso você tenha, alguns screenshots. Nos ajude a te ajudar.

Agora que nós temos tudo em mente, vamos falar sobre a resposta a issues. Seja gentil. Diga “por favor” e “obrigado”. Só porque alguém submeteu uma issue ruim, não quer dizer que ela é uma pessoa ruim. Ser gentil com as pessoas é o primeiro passo para levá-los a cooperar com você. Tente resolver seus problemas, enquanto pede mais informações. Ofereça soluções e não mais problemas.

Mantenedores de projetos provavelmente devem usar [templates para as issues](https://help.github.com/articles/creating-an-issue-template-for-your-repository/) em seus projetos com as sugestões apresentadas acima. Eles estão lá por um motivo. Isso vai ajudar os usuários a fazerem melhores issues e fornecer para você melhores reports e sugestões. Ajude-os a ajudar você.

### Pull Requests

Todo mundo gosta de uma mão amiga. Na maioria das vezes, porém, as pessoas gostam de saber como você está ajudando-as. Isso se aplica para Pull Requests também. Ao utilizar seu estilo de descrição de commit e uma breve lista de marcadores com as alterações feitas ao seu código, você vai chamar a atenção do proprietário do código e fazer com que ele queira fazer merge com seu branch mais rápido.

Quero dizer, por que eu vou adicionar seu código no meu incrível projeto se eu não tenho a minima ideia do que ele faz? Você não precisa escrever um artigo científico do porque essas mudanças são para melhor, mas pelo menos **dê uma curta descrição do porque seu código vai beneficiar o projeto.**

Além disso, aos mantenedores de projetos: **Agradeça seus colaboradores!** É um gesto simples e que tem um resultado duradouro. A pessoa colocou tempo e esforço para ajudar seu projeto, e mesmo que tenha sido apenas uma linha de código, agradeça eles. Não importa se o código deles é horrível, agradeça eles pelo tempo que eles tiraram para lhe ajudar. Estamos todos juntos nisso, certo?

### Agora

Eu aposto que você está indo para os [meus repositórios no GitHub](https://github.com/thattacoguy) e vai começar a gritar [comigo no Twitter](https://twitter.com/that_taco_guy) porque eu não sigo o meu próprio guia. Vocês está certo, eu não estou. Eu escrevi isso como um guia para seguir para escrever melhores commits baseado no que é descolado e está na moda agora. Vamos melhorar juntos!