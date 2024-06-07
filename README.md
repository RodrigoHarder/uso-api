<h1 align="center">:books: AluraBook - Utilizando API na página de cadastro</h1>

<div>
  <p align="center">
    <img alt="Licença do projeto com os dizeres: MIT" src="https://img.shields.io/github/license/RodrigoHarder/uso-api.svg">
    <img alt="Status do projeto com os dizeres: Concluído" src="https://img.shields.io/static/v1?label=Status&message=Concluído &color=green">
  </p>
</div>

## **Descrição**

Utilização da API [viacep](https://viacep.com.br/) para preenchimento automático de certos campos na página de cadastro da  Alura Book, . O projeto foi desenvolvido ao longo do curso de [JavaScript: consumindo e tratando dados de uma API](https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-api) ministrado pela instrutora Mônica Mazzochi Hillman. O objetivo do curso foi aprender a lidar e manipular dados de uma API para construção de projetos e aplicações.

## **Aprendizagens** 

- Como acontece a leitura de um arquivo JavaScript;
- Diferenciar um código JavaScript Síncrono de um código Assíncrono;
    - No **processo síncrono** uma tarefa acontece após a outra;
    - No **processo assíncrono** as tarefas são executadas em segundo plano;
- O que é uma API (Interface de Programação de Aplicativos)?
    - Conjunto de protocolos, rotinas e ferramentas utilizadas para consumir aplicativos de softwares. As APIs são utilizadas para integrar diferentes sistemas e aplicativos, permitindo utilizar funcionalidades de outras plataformas para construir seus próprios aplicativos.
- Diferenciar *Event Loop, Call Stack, Task Queue, Call Back*;
    - ***Event Loop***: ciclo que monitora e executa as ações enviadas. O processo só é finalizado quando as ações a serem executadas terminam.
    - ***Call Stack:*** organiza o funcionamento do script quando há muitas funções.
    - ***Task Queue:*** fila de tarefas assíncronas. Exemplo: setTimeout();
    - ***Call Back:*** funções tratadas como parâmetros de outras funções. Elas acontecem após um intervalo de tempo ou através da interação do usuário por meio de cliques, seleções com o mouse e principalmente em requisições.
- O que é a Fetch e como consumir dados utilizando esse método;
    - Fetch: é uma interface nativa do navegador para fazer solicitações de rede (requisições HTTP) e buscar recursos de um servidor. Ela utiliza uma sintaxe baseada em promessas que permite lidar de forma assíncrona com as respostas da solicitação e manipulá-las de forma mais eficiente.
- Como funcionam as P*romises* geradas pela *Fetch API*
    - Utilizadas para lidar com as respostas assíncronas das solicitações de rede. Ao realizar uma solicitação usando a *Fetch API*, ela retorna uma *Promise* que representa a resposta da solicitação. A *Promise* pode ser resolvida com os dados da resposta ou rejeitada com um erro, dependendo do resultado da solicitação.
    - O fluxo de *Promise* na *Fetch API* segue o seguinte funcionamento:
        1. Quando é feita uma solicitação usando a *Fetch API*, ela retorna uma *Promise* imediatamente.
        2. A *Promise* fica em um estado pendente até que a resposta da solicitação seja recebida.
        3. Ao receber a resposta, a *Promise* é resolvida com um objeto *Response* que contém os dados da resposta. Se houver um erro, a *Promise* será rejeitada com uma instância de *Error* ou uma subclasse de *Error*.
        4. Pode-se usar o método `then()` para lidar com a *Promise* resolvida e receber os dados da resposta. Se a *Promise* for rejeitada, você pode usar o método `catch()` para lidar com o erro.
            - *finally()*: independente da resposta, esse método irá acontecer;
- Converter dados em JSON através do método `.json();`
    - O método .json() é uma função nativa do JavaScript usada para analisar os dados em formato JSON retornados em uma resposta de uma solicitação HTTP feita com a Fetch API. O formato JSON (JavaScript Object Notation) é uma forma de estruturar dados em um formato de texto simples. Ele é amplamente utilizado em comunicações entre o cliente e o servidor na web, pois é fácil de ser lido e manipulado por aplicativos em diversas linguagens de programação.
    - No interior do método `then()` a conversão `resposta → resposta.json()` é utilizada, pois o objeto obtido no response apresenta um corpo de resposta difícil de acessar e manipular. Dessa forma, o uso do método `.json()` traduz o formato para objetos mais simples de serem tratados quando utilizamos JavaScript.
- Utilizar *async/await* para lidar com funções assíncronas e requisições;
    - A palavra-chave *async* é usada para declarar uma função assíncrona. Essa função retorna uma *Promise*, que pode ser resolvida ou rejeitada com um valor.
    - A palavra-chave *await* é usada para pausar a execução da função assíncrona até que a *Promise* seja resolvida. Quando a *Promise* é resolvida, o valor retornado é atribuído à variável.
    - Essa funcionalidade vem como resolução para o problema dos *call backs hell* que ocorrem, pois ao criar um `.then()` utilizamos call backs dentro deles. Com vários `.then()` o código resultante geralmente se torna difícil de ler, fácil de quebrar e difícil de depurar.
    - O *async/await* faz o processamento de forma sequencial, *Promises* com `.then()` são processadas em paralelo, o que faz com que este método seja mais rápido. O *async/await* simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma *Promise* por vez.
- Tratar as respostas geradas ao usar a funcionalidade *async/await* com *try* e *catch*.
- Selecionar elementos pelo seu id através do `getElementById`;
- Incluir valores em elementos com a propriedade `value`;
- Detectar interação do usuário com auxílio do `addEventListener`;
- Inserir elementos HTML a partir do `innerHTML`.

## **Como usar os arquivos?**

- Inicialmente você precisa ter instalado em seu computador um editor de código-fonte, no meu caso eu utilizo o [Visual Studio Code](https://code.visualstudio.com/download). 
- Depois, você pode fazer o download do projeto clicando na opção **Code** e em seguida selecionando **Download Zip**.

Ou

1. Clonar o repositório

```
git clone https://github.com/RodrigoHarder/uso-api.git
```
2. Localizar e abrir a pasta *uso-api*

```
cd uso-api
```

## **Tecnologias usadas**

Neste projeto foram usadas as seguintes linguagens:

<p>
 <img align="center" alt="HTML 5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
 <img align="center" alt="CSS 3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
 <img align="center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</p>

Para a construção dos códigos que compõem a página foi utilizado o editor de código-fonte abaixo:

<img align="center" alt="VS Code" src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white">

## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/114362538?v=4" width=115><br><sub>Rodrigo Silva Harder</sub>](https://github.com/RodrigoHarder)
