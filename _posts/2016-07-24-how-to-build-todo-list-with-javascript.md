---
layout: post
title: "How to build: Um To-Do List com JavaScript utilizando a API Web Storage do HTML"
date: 2016-07-24 20:30:00
categories: javascript, html, how-to-build
published: true
---

Decidi escrever este post para falar um pouco sobre uma API muito interessante do HTML, mas que pouco ouvimos falar a respeito. O que também me motivou a escrever este conteúdo, é que recentemente percebi que consigo fixar melhor o que estudo quando tenho a oportunidade de fazer anotações sobre o assunto. Se você der uma olhada no meu [GitHub](https://github.com/JulianoPadilha), verá que estou de fato colocando isso em prática e tomando anotações como parte do meu método de aprendizado. 🤓

Pretendo tornar este tipo de conteúdo uma série dentro do meu site chamada "How to Build". Acredito que será bem interessante e pretendo abordar os mais diversos assuntos, e claro, mostrar como se faz na prática, com uma pitada de teória. Então vamos lá?! 

## O que é Web Storage?

Web Storage faz parte da API do HTML e fornece mecanismos para que os navegadores possam armazenar dados através de chave/valor de uma forma mais eficiente que os cookies. A API do Web Storage fornece duas maneiras de armazenar dados:

`sesseionStorage`

O sessionStorage mantém as informações armazenadas por origem e permanece disponível enquanto há uma sessão aberta no navegador(mesmo a página sendo recarregada). Caso o browser seja fechado a sessão será limpa e as informações serão perdidas.

`localStorage`

O localStorage é muito parecido com o sessionStorage, a diferença é que mesmo que o navegador seja fechado, os dados permanecem armazenados.