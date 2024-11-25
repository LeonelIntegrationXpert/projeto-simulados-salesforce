var randomic = true; // Initial value of the randomic variable

var result = window.confirm("Do you want random questions and answers?");
if (result) {
  randomic = true;
  alert("You have chosen random questions and answers!");
} else {
  randomic = false;
  alert("You have chosen non-random questions and answers!");
}

function shuffleOptionsAndQuestions(questionsData) {
  if (randomic) {
    for (var i = questionsData.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempQuestion = questionsData[i];
      questionsData[i] = questionsData[j];
      questionsData[j] = tempQuestion;
    }
  }

  for (var i = 0; i < questionsData.length; i++) {
    var options = questionsData[i].options;
    var correctAnswer = questionsData[i].correctAnswer;

    if (randomic) {
      for (var j = options.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var tempOption = options[j];
        options[j] = options[k];
        options[k] = tempOption;

        if (Array.isArray(correctAnswer)) {
          for (var l = 0; l < correctAnswer.length; l++) {
            if (correctAnswer[l] === j) {
              correctAnswer[l] = k;
            } else if (correctAnswer[l] === k) {
              correctAnswer[l] = j;
            }
          }
        } else {
          if (correctAnswer === j) {
            correctAnswer = k;
          } else if (correctAnswer === k) {
            correctAnswer = j;
          }
        }
      }
    }

    if (questionsData[i].type === "radio") {
      questionsData[i].question += " (select 1 answer)";
    } else if (questionsData[i].type === "checkbox") {
      questionsData[i].question += " (select up to " + correctAnswer.length + " answers)";
    }

    questionsData[i].options = options.map((option, index) => String.fromCharCode(65 + index) + ". " + option);
    questionsData[i].correctAnswer = correctAnswer;
  }
  return questionsData;
}

//</br><img src='./_images/images.jpg' alt='Minha Figura'>

var questionsData = [
  {
    "question": "Em JavaScript, o operador new cria e inicializa um novo objeto. Qual operador NÃO representa a criação de um objeto de tipo nativo JavaScript?",
    "type": "radio",
    "options": [
      "var o = new Object();",
      "var l = new ArrayList();",
      "var a = new Array();",
      "var d = new Date();"
    ],
    "correctAnswer": 1,
    "justification": "A resposta correta é <strong>var l = new ArrayList();</strong>.<br>Explicação: O `ArrayList` não é um tipo nativo de objeto JavaScript. Em JavaScript, os tipos nativos para criar arrays são `Array` e outras estruturas de dados, mas `ArrayList` é específico de outras linguagens, como Java.",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Considere o seguinte código JavaScript:<br><br>\n<pre><code>\nvar a = [1,2,3,4,5];\na.slice(0,3);\na.splice(1,1);\na.pop();\n</code></pre><br>\nQual o valor da variável <code>a</code> ao término da execução do código?",
    "type": "radio",
    "options": [
      "[1,3,4]",
      "[1,3,4,5]",
      "[1,3]",
      "[3,4,5]"
    ],
    "correctAnswer": 0,
    "justification": "A resposta correta é <strong>[1,3,4]</strong>.<br>Explicação: O código modifica o array <code>a</code> em três etapas: primeiro, <code>a.slice(0,3);</code> cria uma cópia do array contendo os elementos de índice 0 a 2, mas não altera o array original. Em seguida, <code>a.splice(1,1);</code> remove o elemento no índice 1, alterando o array original para <code>[1,3,4,5]</code>. Finalmente, <code>a.pop();</code> remove o último elemento, deixando <code>a</code> como <code>[1,3,4]</code>.",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Na versão draft da especificação Web Storage, são definidas duas propriedades no objeto Window, localStorage e sessionStorage. Sobre o armazenamento de dados em JavaScript, usando localStorage, afirma-se que",
    "type": "radio",
    "options": [
      "dados armazenados por meio do localStorage têm a mesma vida útil que a janela de nível superior ou guia do navegador em que o script que os armazenou está sendo executado.",
      "o escopo de armazenamento do localStorage permite que, por exemplo, os dados armazenados em uma visita a um site, usando Firefox, estejam acessíveis quando for realizada uma segunda visita usando o Chrome.",
      "dados armazenados por meio de localStorage têm vida útil diferente de dados armazenados por meio de sessionStorage.",
      "localStorage tem como escopo a origem do documento, que é definida por seu protocolo, porta e criptografia."
    ],
    "correctAnswer": 2,
    "justification": "A resposta correta é <strong>dados armazenados por meio de localStorage têm vida útil diferente de dados armazenados por meio de sessionStorage</strong>.<br>Explicação: O <code>localStorage</code> armazena dados de forma persistente, mesmo após o navegador ser fechado, enquanto o <code>sessionStorage</code> armazena dados apenas para a duração da sessão atual do navegador.",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
      "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Considere o seguinte código JavaScript:<br><br>\n<pre><code>\nlet o = {one:1, two:2, three:3};\nfor(let p in o) console.log(p);\n</code></pre><br>\nAo final da execução, quais valores serão impressos?",
    "type": "radio",
    "options": [
      "1, 2, 3",
      "one:1, two:2, three:3",
      "p, p, p",
      "'one', 'two', 'three'"
    ],
    "correctAnswer": 3,
    "justification": "A resposta correta é <strong>'one', 'two', 'three'</strong>.<br>Explicação: O loop <code>for...in</code> itera sobre as propriedades enumeráveis do objeto <code>o</code>, e <code>console.log(p)</code> imprime os nomes das propriedades, que são <code>'one'</code>, <code>'two'</code> e <code>'three'</code>.",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement"
    ],
    "screenshots": [],
    "videos": []
  },
{
  "question": "Considere o seguinte código JavaScript:<br><br>\n<pre><code>\nvar exemplo = \"A\";\nvar outro = \"A\";\n\nfunction minhaFuncao() {\n    var exemplo = \"B\";\n    return exemplo;\n}\n\nfunction minhaFuncao2() {\n    outro = \"B\";\n    return outro;\n}\n\nconsole.log(exemplo);\nconsole.log(minhaFuncao());\nconsole.log(outro);\nconsole.log(minhaFuncao2());\nconsole.log(outro);\n</code></pre><br>\nAo final da execução, quais valores serão impressos?",
  "type": "radio",
  "options": [
    "A, B, A, B, A",
    "A, B, A, B, B",
    "A, A, A, B, A",
    "A, A, A, A, A"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>A, B, A, B, B</strong>.<br>\nExplicação:\n- O valor de <code>exemplo</code> impresso inicialmente é \"A\", pois não foi alterado globalmente.\n- A função <code>minhaFuncao()</code> retorna \"B\" porque a variável <code>exemplo</code> é redefinida localmente dentro da função.\n- O valor de <code>outro</code> impresso inicialmente é \"A\".\n- A função <code>minhaFuncao2()</code> altera a variável global <code>outro</code> para \"B\" e retorna \"B\".\n- Ao final, o valor de <code>outro</code> foi alterado globalmente para \"B\", então o último <code>console.log(outro)</code> imprime \"B\".",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript:<br><br>\n<pre><code>\nfunction exemplo() {\n    var x = 10;\n    if (true) {\n        let x = 20;\n        const y = 30;\n        var z = 40;\n        console.log(x); // 1\n        console.log(y); // 2\n    }\n    console.log(x); // 3\n    console.log(z); // 4\n    console.log(y); // 5\n}\n\nexemplo();\n</code></pre><br>\nQual será a saída deste código?",
  "type": "radio",
  "options": [
    "20, 30, 10, 40, erro",
    "10, 30, 20, 40, erro",
    "10, erro, 20, 40, 30",
    "erro, 20, 30, 10, 40"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>20, 30, 10, 40, erro</strong>.<br>\nExplicação:\n- Dentro do bloco <code>if</code>, a variável <code>x</code> declarada com <code>let</code> possui escopo de bloco, portanto, <code>x</code> dentro do <code>if</code> é 20. Fora do bloco <code>if</code>, <code>x</code> continua sendo 10 (definido com <code>var</code> no escopo da função).\n- A variável <code>y</code> é declarada com <code>const</code> dentro do bloco <code>if</code>, então ela também tem escopo de bloco e só existe dentro do <code>if</code>.\n- A variável <code>z</code> é declarada com <code>var</code>, portanto ela tem escopo de função e é acessível tanto dentro quanto fora do <code>if</code>.\n- Quando tentamos acessar <code>y</code> fora do bloco <code>if</code>, ocorre um erro porque <code>y</code> não está definida fora do escopo do bloco.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript, sabendo que o usuário irá digitar corretamente os valores solicitados via prompt:<br><br>\n<pre><code>\nvar v1 = 3;\nvar v2, v3, v4;\n\nv2 = prompt(\"Digite o número 3:\");\nv2 = prompt(\"Digite a palavra true:\");\nv4 = false;\n\nconsole.log(v1 === v2);\nconsole.log(v2 == v3);\nconsole.log(v1 % v2);\nconsole.log(v1);\n</code></pre>\n\nAo final da execução, quais valores serão impressos?",
  "type": "radio",
  "options": [
    "false, false, 0, 0",
    "false, false, NaN, NaN",
    "true, false, NaN, 3",
    "true, false, 0, 3"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>false, false, NaN, NaN</strong>.<br>\nExplicação:\n- A variável <code>v1</code> é atribuída ao valor <code>3</code>.\n- O primeiro <code>prompt</code> solicita ao usuário que digite o número <code>3</code>, mas o valor será armazenado como uma string em <code>v2</code>. No segundo <code>prompt</code>, o usuário deve digitar \"true\", que também será armazenado como uma string em <code>v2</code>, substituindo o valor anterior.\n- <code>console.log(v1 === v2);</code> resulta em <code>false</code> porque <code>v1</code> é um número e <code>v2</code> é uma string, e a comparação estrita (===) exige que o tipo também seja igual.\n- <code>console.log(v2 == v3);</code> resulta em <code>false</code> porque <code>v3</code> está indefinido e <code>v2</code> contém a string \"true\".\n- <code>console.log(v1 % v2);</code> resulta em <code>NaN</code> porque o operador módulo (%) não pode ser aplicado entre um número e uma string não numérica.\n- <code>console.log(v1);</code> exibe o valor de <code>v1</code>, que é <code>NaN</code> devido à operação anterior que invalida o valor.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators"
  ],
  "screenshots": [],
  "videos": []
},
  {
    "question": "A Classe definida no ECMAScript 2015, para permitir armazenar valores únicos de qualquer tipo, é:",
    "type": "radio",
    "options": [
      "Has",
      "ObjectUnique",
      "Set",
      "Unique"
    ],
    "correctAnswer": 2,
    "justification": "A resposta correta é <strong>Set</strong>.<br>\nExplicação:\n- A classe <code>Set</code> permite armazenar valores únicos de qualquer tipo, removendo automaticamente duplicatas, uma funcionalidade introduzida no ECMAScript 2015.<br>",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A linguagem JavaScript provê uma série de métodos que facilitam a manipulação de arrays.<br>\nSobre o método de manipulação de array <code>Array.of()</code>, é correto afirmar que",
    "type": "radio",
    "options": [
      "cria um novo array a partir de um array existente.",
      "preenche o array com um valor estático.",
      "devolve @@iterator, contendo os valores do array.",
      "cria um novo array a partir dos argumentos passados para o método."
    ],
    "correctAnswer": 3,
    "justification": "A resposta correta é <strong>cria um novo array a partir dos argumentos passados para o método</strong>.<br>\nExplicação:\n- O método <code>Array.of()</code> cria uma nova instância de array usando os argumentos passados para ele, diferentemente do <code>Array</code>, que se comporta de maneira especial quando recebe um único número como argumento.<br>",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Considere o código de inicialização de variáveis apresentado abaixo: marque a alternativa na qual os valores serão atribuídos, respectivamente, para x e y.<br><br>\n<pre><code>let [x,y] = ['a','b','c','d'];</code></pre><br>\nOs valores atribuídos para x e y são, respectivamente,",
    "type": "radio",
    "options": [
      "'ac' e 'bd'",
      "'ab' e 'cd'",
      "'a' e 'b'",
      "'c' e 'd'"
    ],
    "correctAnswer": 2,
    "justification": "A resposta correta é <strong>'a' e 'b'</strong>.<br>\nExplicação:\n- No código, a desestruturação de array <code>[x, y] = ['a', 'b', 'c', 'd']</code> atribui o primeiro elemento 'a' a x e o segundo elemento 'b' a y. Os elementos 'c' e 'd' são ignorados porque não há variáveis adicionais para capturá-los.<br>",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Os states do Phaser são gerados a partir de classes com métodos específicos para sua execução. Esses métodos são automaticamente chamados pelo framework à medida que o jogo é executado.<br>\nA sequência de execução de métodos de state do framework Phaser é:",
    "type": "radio",
    "options": [
      "preload, load, create, update.",
      "init, load, create, update.",
      "init, preload, create, update.",
      "load, init, create, update."
    ],
    "correctAnswer": 2,
    "justification": "A resposta correta é <strong>init, preload, create, update</strong>.<br>\nExplicação:\n- No Phaser, a sequência típica para um state é: <code>init</code> (inicialização do state), <code>preload</code> (carregamento de recursos), <code>create</code> (configuração inicial após o carregamento), e <code>update</code> (atualização contínua do state durante o jogo).<br>",
    "referenceLinks": [
      "https://phaser.io/tutorials/making-your-first-phaser-3-game/part9"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Dentre os sistemas de física em 2D suportados pelo Phaser, o mais leve e indicado para jogos mobile é:",
    "type": "radio",
    "options": [
      "P2.",
      "Ninja.",
      "Box2D.",
      "Arcade."
    ],
    "correctAnswer": 3,
    "justification": "A resposta correta é <strong>Arcade</strong>.<br>\nExplicação:\n- O sistema de física Arcade no Phaser é projetado para ser leve e simples, adequado para jogos mobile. Ele oferece desempenho eficiente em comparação com sistemas mais complexos como o Box2D.<br>",
    "referenceLinks": [
      "https://phaser.io/tutorials/making-your-first-phaser-3-game/part9"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "O framework Phaser provê uma série de comandos que permitem inserir diversos recursos ao jogo de forma facilitada através da disponibilização de métodos.<br>\nNo Phaser, o comando que insere uma imagem na tela é:",
    "type": "radio",
    "options": [
      "game.load.image('identificacaodaimagem', 'caminhodaimagem')",
      "game.load.image(posX, posY, 'identificacaodaimagem')",
      "game.add.image('identificacaodaimagem', 'caminhodaimagem')",
      "game.add.image(posX, posY, 'identificacaodaimagem')"
    ],
    "correctAnswer": 3,
    "justification": "A resposta correta é <strong>game.add.image(posX, posY, 'identificacaodaimagem')</strong>.<br>\nExplicação:\n- O método <code>game.add.image</code> com os parâmetros <code>posX</code> e <code>posY</code> insere uma imagem na posição especificada no Phaser, utilizando o identificador fornecido para a imagem.<br>",
    "referenceLinks": [
      "https://phaser.io/docs/2.6.2/Phaser.GameObjectFactory.html#image"
    ],
    "screenshots": [],
    "videos": []
  },
{
  "question": `15. O JavaScript possui características de uma linguagem funcional, permitindo que funções sejam passadas como parâmetros para outras funções, algo comum em JavaScript e Node.
  
  </br></br>Sabendo disso, analise as afirmativas abaixo:
  
  
  <pre><code class="language-javascript">
  I.
  function soma(a, b) {
      return a + b;
  }

  function executar(funcao, a, b) {
      return funcao(a, b);
  }

  let resultado = executar(soma, 1, 2);

  console.log(resultado);
  </code></pre>

  <pre><code class="language-javascript">
  II.
  
  function executar(a, b, funcao) {
      return funcao(a, b);
  }

  let resultado = executar(1, 2, function(a, b) {
      return a + b;
  });

  console.log(resultado);
  </code></pre>

  <pre><code class="language-javascript">
  III.
  var funcao = function(a, b) {
      return a + b;
  };

  function executar(a, b, funcao) {
      return funcao(a, b);
  }

  let resultado = executar(1, 2, funcao);

  console.log(resultado);
  </code></pre>

  Está(ão) correta(s) a(s) afirmativa(s):`,
  "type": "radio",
  "options": [
      "I apenas.",
      "II apenas.",
      "III apenas.",
      "I, II e III."
  ],
  "correctAnswer": 3,
  "justification": `A resposta correta é <strong>I, II e III</strong>.<br>
  Explicação:
  - As três afirmativas estão corretas, pois demonstram o uso de funções como parâmetros para outras funções, retornando a soma dos valores passados.<br>`,
  "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `Analise as afirmações abaixo sobre declaração de variáveis:
  
  </br></br>I. let declara uma variável presa em um contexto, seja este dentro de uma função, seja dentro de um if.</br></br>
  
  II. É possível alterar o valor de uma variável const.</br></br>
  
  III. As declarações de variáveis utilizando var possuem escopo elevado, conhecido como hoisting.</br></br>
  
  Está(ão) correta(s) apenas a(s) afirmativa(s):`,
  "type": "radio",
  "options": [
      "I e II.",
      "III.",
      "I e III.",
      "II e III."
  ],
  "correctAnswer": 2,
  "justification": `A resposta correta é <strong>I e III</strong>.<br>
  Explicação:
  - A afirmativa I está correta, pois let possui escopo de bloco, limitando a variável ao contexto onde foi declarada.
  - A afirmativa III está correta, pois variáveis declaradas com var são elevadas ao topo do escopo da função ou do contexto global (hoisting).
  - A afirmativa II está incorreta, pois o valor de uma variável const não pode ser alterado após a inicialização.`,
  "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types#Declarações_de_variáveis"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `Considerando o código JavaScript apresentado abaixo:
  
  <pre><code class="language-javascript">
  &lt;script type="text/javascript" language="JavaScript"&gt;
  var x;
  alert(x * 5);
  &lt;/script&gt;
  </code></pre>
  
  Qual será a informação apresentada pelo alert da linha 3?`,
  "type": "radio",
  "options": [
      "null",
      "undefined",
      "0",
      "NaN"
  ],
  "correctAnswer": 3,
  "justification": `A resposta correta é <strong>NaN</strong>.<br>
  Explicação:
  - No código, a variável x é declarada, mas não inicializada, então seu valor é undefined.
  - Ao tentar multiplicar undefined por 5, o resultado é NaN (Not a Number), pois undefined não é um número.`,
  "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/NaN",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Multiplication"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `Considerando o código JavaScript apresentado abaixo:
  
  <pre><code class="language-javascript">
  &lt;script type="text/javascript" language="JavaScript"&gt;
  alert(5 + 5 + "5");
  &lt;/script&gt;
  </code></pre>
  
  Qual será a informação apresentada pelo alert da linha 2?`,
  "type": "radio",
  "options": [
      "NaN",
      "15",
      "105",
      "555"
  ],
  "correctAnswer": 2,
  "justification": `A resposta correta é <strong>105</strong>.<br>
  Explicação:
  - No código, a expressão <code>5 + 5 + "5"</code> é avaliada da esquerda para a direita.
  - Primeiramente, <code>5 + 5</code> é somado, resultando em <code>10</code>.
  - Em seguida, <code>10 + "5"</code> realiza a concatenação do número com a string, formando a string <code>"105"</code>.`,
  "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#concatenação_de_string",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#tipagem_dinâmica"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `30. Considerando o código abaixo:
  
  <pre><code class="language-html">
  &lt;html&gt;
  &lt;head&gt;
      &lt;script type="text/javascript" language="Javascript"&gt;
          var pessoa = "Antonio";
          
          function f1() {
              pessoa = "Beto";
          }
          
          function f2() {
              var pessoa = "Carlos";
          }
      &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
      &lt;script type="text/javascript" language="Javascript"&gt;
          pessoa = "Daniel";
          f1();
          f2();
          document.write("&lt;p&gt;" + pessoa + "&lt;/p&gt;");
      &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  </code></pre>
  
  Qual será o código HTML gerado pelo script JavaScript, especificamente na linha 18?`,
  "type": "radio",
  "options": [
      "&lt;p&gt;Antonio&lt;/p&gt;",
      "&lt;p&gt;Beto&lt;/p&gt;",
      "&lt;p&gt;Carlos&lt;/p&gt;",
      "&lt;p&gt;Daniel&lt;/p&gt;"
  ],
  "correctAnswer": 1,
  "justification": `A resposta correta é <strong>&lt;p&gt;Beto&lt;/p&gt;</strong>.<br>
  Explicação:
  - A variável global <code>pessoa</code> é inicialmente definida como "Antonio".
  - Em seguida, dentro do script no body, <code>pessoa</code> é redefinida como "Daniel".
  - A função <code>f1()</code> altera a variável global <code>pessoa</code> para "Beto".
  - A função <code>f2()</code> cria uma nova variável local <code>pessoa</code>, que não afeta a variável global.
  - No final, <code>document.write</code> exibe o valor de <code>pessoa</code>, que foi alterado para "Beto" pela função <code>f1()</code>.`,
  "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Scope",
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript:<br><br><pre><code>&lt;script type=\"text/javascript\" language=\"JavaScript\"&gt;\n    var vetor = new Array(3);\n    vetor[0] = 5;\n    vetor[2] = 1;\n    vetor[3] = 2;\n    vetor[vetor[0]] = 3;\n&lt;/script&gt;</code></pre><br>O conteúdo de <code>vetor[0]</code>, <code>vetor[1]</code> e <code>vetor[vetor.length - 1]</code> são, respectivamente:",
  "type": "radio",
  "options": [
    "5, null, 1",
    "5, null, 3",
    "5, undefined, 1",
    "5, undefined, 3"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é '5, undefined, 3'.<br>Explicação:<br>- O vetor é iniciado com um tamanho de 3, mas é expandido ao atribuir valores além desse índice.<br>- O <code>vetor[1]</code> não é definido, resultando em <code>undefined</code>.<br>- O índice final do vetor corresponde ao valor de <code>vetor[vetor[0]]</code>, que é 3.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array"
  ],
  "screenshots": [],
  "videos": []
},
  {
    "question": "Considere o seguinte código JavaScript:<br><br><pre><code>&lt;script type=\"text/javascript\" language=\"JavaScript\"&gt;\n    var matriz = new Array();\n    for (var i = 0; i &lt;= 2; i++) {\n        var linha = new Array();\n        matriz.push(linha);\n        for (var j = 1; j &lt;= 4; j++) {\n            linha.push(i * j);\n        }\n    }\n    alert(matriz.length);\n&lt;/script&gt;</code></pre><br>Qual será o resultado apresentado pelo <code>alert</code> na linha 10?",
    "type": "radio",
    "options": [
      "2",
      "3",
      "4",
      "12"
    ],
    "correctAnswer": 1,
    "justification": "A resposta correta é '3'.<br>Explicação:<br>- O código cria uma matriz bidimensional e adiciona três linhas ao vetor <code>matriz</code>. Cada linha contém valores calculados com base nos índices <code>i</code> e <code>j</code>.",
    "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Suponha o seguinte trecho de código JavaScript:<br><br><pre><code>&lt;script type=\"text/javascript\" language=\"JavaScript\"&gt;\n    var vetor = new Array();\n    vetor[0] = -1;\n    vetor[1] = 1;\n    vetor[2] = 5;\n    vetor[3] = 10;\n    vetor[4] = 20;\n    vetor.sort();\n&lt;/script&gt;</code></pre><br>O conteúdo de <code>vetor</code> após o comando <code>vetor.sort()</code> (linha 8) será:",
    "type": "radio",
    "options": [
      "-1, 1, 10, 20, 5",
      "-1, 1, 5, 10, 20",
      "1, 10, 20, 5, -1",
      "20, 10, 5, 1, -1"
    ],
    "correctAnswer": 0,
    "justification": "A resposta correta é '-1, 1, 10, 20, 5'.<br>Explicação:<br>- O método <code>sort()</code> em JavaScript ordena valores como strings por padrão. Assim, '10' é considerado menor que '5'. Para ordenar numericamente, seria necessário passar uma função de comparação.",
    "referenceLinks": [
      "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
    ],
    "screenshots": [],
    "videos": []
  },
{
  "question": "Analise o código JavaScript a seguir:<br><br><pre><code>class Ave {\n\n    constructor(nome) {\n        this.nome = nome;\n    }\n\n    som() { throw new Error(\"Implementar\"); }\n}\n\nclass Pato extends Ave {\n\n    constructor(nome) {\n        super(nome);\n    }\n\n    som() { return \"Quá quá!\"; }\n}\n\nclass Galinha extends Ave {\n\n    constructor(nome) {\n        super(nome);\n    }\n\n    som() { return \"Cocorocoo!\"; }\n}\n</code></pre><br>Sobre o código JavaScript apresentado, analise as afirmativas a seguir e assinale (V) para a verdadeira e (F) para a falsa.<br><br>( ) A classe <code>Ave</code> é uma classe abstrata que fornece uma interface para outras classes de aves.<br><br>( ) A classe <code>Pato</code> e a classe <code>Galinha</code> são exemplos de polimorfismo, pois ambas sobrescrevem o método <code>som()</code> da classe <code>Ave</code>.<br><br>( ) O método <code>som()</code> na classe <code>Ave</code> pode ser chamado diretamente para fazer o som da ave.<br><br>As afirmativas são, respectivamente:",
  "type": "radio",
  "options": [
    "F – V – F",
    "V – F – F",
    "V – V – F",
    "V – F – V"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é 'V – V – F'.<br>Explicação:<br>- A classe <code>Ave</code> age como uma classe abstrata, pois ela define um método <code>som()</code> que deve ser implementado por suas subclasses.<br>- A classe <code>Pato</code> e a classe <code>Galinha</code> implementam o método <code>som()</code> de forma diferente, caracterizando polimorfismo.<br>- O método <code>som()</code> na classe <code>Ave</code> não pode ser chamado diretamente, pois ele lança um erro quando chamado, indicando que precisa ser implementado nas subclasses.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o código em JavaScript a seguir:<br><br><pre><code>const pessoa = {\n    nome: \"João\",\n    idade: 25,\n    cidade: \"Exemploville\"\n};\n</code></pre><br>Qual é a forma correta para converter esse objeto para uma string JSON?",
  "type": "radio",
  "options": [
    "stringifyJSON(pessoa)",
    "parseJSON(pessoa)",
    "decodeJSON(pessoa)",
    "encodeJSON(pessoa)"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'stringifyJSON(pessoa)'.<br>Explicação:<br>- Para converter um objeto JavaScript em uma string JSON, usa-se o método <code>JSON.stringify()</code>. Nenhuma das outras opções é válida para esta operação.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "A interface de linha de comando (CLI) do npm é usada para executar comandos, tais como instalar e desinstalar pacotes, executar scripts de pacotes e verificar a versão do npm, entre outros. Há um comando CLI que executa um conjunto de verificações para garantir que uma instalação do npm tenha os recursos necessários para gerenciar pacotes JavaScript.<br><br>Esse comando é o:",
  "type": "radio",
  "options": [
    "npm-config",
    "npm-explore",
    "npm-doctor",
    "npm-query",
    "npm-test"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é 'npm-doctor'.<br>Explicação:<br>- O comando <code>npm doctor</code> realiza uma série de verificações para garantir que a instalação do npm está em boas condições e que possui os recursos necessários para gerenciar pacotes JavaScript. Nenhuma das outras opções realiza essa função específica.",
  "referenceLinks": [
    "https://docs.npmjs.com/cli/v7/commands/npm-doctor"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "A respeito de JavaScript, julgue o próximo item.<br><br>Suponha-se que um código precise tratar uma string que apresente o valor <code>10.5</code> como um número inteiro. Nessa hipótese, para suportar essa operação, deve-se usar a função <code>parseInt</code>.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'Certo'.<br>Explicação:<br>- A função <code>parseInt</code> em JavaScript converte uma string para um número inteiro, ignorando qualquer parte decimal. Assim, <code>parseInt('10.5')</code> retornará <code>10</code>, tratando a string '10.5' como um número inteiro.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "A respeito de JavaScript, julgue o próximo item.<br><br>A função <code>setTimeout</code> é usada para se aguardar, por um período de tempo parametrizado, a execução de uma thread com sucesso e, caso o tempo expire, a função interrompe a execução do programa e gera um código de erro.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é 'Errado'.<br>Explicação:<br>- A função <code>setTimeout</code> em JavaScript não interrompe a execução do programa nem gera um código de erro. Ela define um atraso para a execução de uma função específica após um tempo determinado. Quando o tempo parametrizado expira, a função associada é executada, mas isso não afeta a execução de outras operações nem interrompe threads.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Julgue o item a seguir.<br><br>O JavaScript é uma extensão do Java, compartilhando a mesma base de código e funcionalidades. Ambas as linguagens são utilizadas primariamente para desenvolvimento back-end e possuem mecanismos idênticos de gerenciamento de memória e execução de código.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é 'Errado'.<br>Explicação:<br>- JavaScript e Java são linguagens distintas que não compartilham a mesma base de código ou funcionalidades. JavaScript foi desenvolvido para ser executado no navegador e é geralmente usado para desenvolvimento front-end (embora também tenha aplicações no back-end com Node.js). Java, por outro lado, é uma linguagem amplamente utilizada para o desenvolvimento back-end, com uma máquina virtual específica (JVM) para sua execução. Elas também possuem diferentes modelos de gerenciamento de memória e execução de código.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    "https://www.oracle.com/java/technologies/"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Assinale a alternativa que apresenta o comando JavaScript que é utilizado para declarar uma variável.",
  "type": "radio",
  "options": [
    "print",
    "var",
    "echo",
    "console",
    "if"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é 'var'.<br>Explicação:<br>- Em JavaScript, o comando 'var' é uma das maneiras usadas para declarar uma variável. As outras opções, como 'print', 'echo', 'console' e 'if', não são utilizadas para esse propósito. Além de 'var', JavaScript também oferece as palavras-chave 'let' e 'const' para declaração de variáveis.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considerando o código a seguir, desenvolvido em ECMAScript 6, assinale a opção que apresenta o resultado mostrado ao usuário ao final da execução desse código.<br><br><pre><code>&lt;html&gt;\n  &lt;body&gt;\n     &lt;p id=\"demo\"&gt;&lt;/p&gt;\n        &lt;script&gt;\n        let x = 10;\n        {\n         let x = 1;\n         x = x - 1;\n        }\n        {\n         let x = 3;\n         x = x + 5;\n        }\n        {\n         let x = 20;\n         x = x + 2;\n        }\n        document.getElementById(\"demo\").innerHTML = x;\n&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre><br>",
  "type": "radio",
  "options": [
    "0",
    "8",
    "10",
    "12",
    "22"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é '10'.<br>Explicação:<br>- O código declara uma variável global <code>x</code> com o valor <code>10</code>. Em cada bloco subsequente, uma nova variável <code>x</code> é declarada com <code>let</code>, criando escopos de bloco isolados. As operações dentro desses blocos não afetam a variável global <code>x</code>.<br>- Portanto, o valor final de <code>x</code> impresso na página é o valor inicial da variável global, <code>10</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código em ECMAScript 2021:<br><br><pre><code>const num = 1_2_3_4_5+1_0;\nconsole.log(num);\n</code></pre><br>Ao ser executado, o código acima exibe o seguinte texto no console:",
  "type": "radio",
  "options": [
    "NaN",
    "12355",
    "undefined",
    "1_2_3_4_6_0",
    "1_2_3_4_5+1_0"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é '12355'.<br>Explicação:<br>- O ECMAScript 2021 introduz o suporte ao separador de sublinhado (<code>_</code>) para facilitar a leitura de números longos.<br>- Neste caso, <code>1_2_3_4_5</code> é interpretado como o número <code>12345</code> e <code>1_0</code> como <code>10</code>. A expressão <code>12345 + 10</code> resulta em <code>12355</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#numeric_literals"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Com relação à linguagem JavaScript, a definição para uma função chamada \"dobrar\" que retorna o dobro de um número em JavaScript é:",
  "type": "radio",
  "options": [
    "function dobrar(x) { return x * 2; }",
    "função dobro(x) { return x * 2; }",
    "func dobrar = (x) => x * 2",
    "define dobrar(x) { return x * 2; }"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'function dobrar(x) { return x * 2; }'.<br>Explicação:<br>- Em JavaScript, a palavra-chave <code>function</code> é usada para declarar uma função. A opção correta utiliza a sintaxe correta para criar uma função chamada <code>dobrar</code> que retorna o dobro do valor passado como parâmetro <code>x</code>.<br>- As outras opções não estão corretas porque utilizam palavras ou sintaxes inexistentes na linguagem JavaScript, como <code>função</code>, <code>func</code>, e <code>define</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o código JavaScript a seguir:<br><br><pre><code>var frutas = [\"maçã\", \"laranja\", \"pera\", \"banana\", \"kiwi\", \"abacaxi\", \"manga\", \"uva\"];\nvar posicao = frutas.indexOf(\"banana\");</code></pre><br>Considerando o código precedente, escrito em JavaScript, assinale a opção em que é corretamente indicado o valor da variável <code>posicao</code> após a execução do código.",
  "type": "radio",
  "options": [
    "-1",
    "-2",
    "2",
    "3",
    "4"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é '3'.<br>Explicação:<br>- O método <code>indexOf</code> retorna o índice do primeiro elemento igual ao valor especificado (neste caso, \"banana\") encontrado no array. Como o índice de \"banana\" no array <code>frutas</code> é 3, o valor de <code>posicao</code> será 3.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript:<br><br><pre><code>var tarefas = [\n  { id: 1, descricao: \"Fazer compras\", concluida: false },\n  { id: 2, descricao: \"Estudar JavaScript\", concluida: true },\n  { id: 3, descricao: \"Limpar a casa\", concluida: false }\n];\n\nvar contadorTarefasPendentes = 0;\nvar listaTarefasPendentes = \"\";\n\nfor (var i = 0; i < tarefas.length; i++) {\n  if (!tarefas[i].concluida) {\n    contadorTarefasPendentes++;\n    listaTarefasPendentes += contadorTarefasPendentes + \". \" + tarefas[i].descricao + \"\\n\";\n  }\n}</code></pre><br>Com base no código precedente, escrito em JavaScript, assinale a opção em que é corretamente indicado o valor da variável <code>listaTarefasPendentes</code> após a execução do código.",
  "type": "radio",
  "options": [
    "Erro de sintaxe",
    "\"1. Fazer compras\\n2. Limpar a casa\\n\"",
    "[\"1. Fazer compras\", \"2. Limpar a casa\"]",
    "\"1. Fazer compras, 2. Limpar a casa\"",
    "2"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é '\"1. Fazer compras\\n2. Limpar a casa\\n\"'.<br>Explicação:<br>- O código percorre o array <code>tarefas</code> e adiciona à variável <code>listaTarefasPendentes</code> apenas as descrições das tarefas que não estão concluídas, precedidas por uma contagem.<br>- A variável <code>listaTarefasPendentes</code> contém '1. Fazer compras\\n2. Limpar a casa\\n' após a execução do loop.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Os operadores, nas linguagens de programação, são símbolos que realizam manipulações matemáticas, lógicas e de comparação específicas. O operador <code>===</code>, em JavaScript, compara dois operandos quanto a(o)",
  "type": "radio",
  "options": [
    "tipo, apenas.",
    "referência de memória.",
    "valor, apenas.",
    "tipo e valor."
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é 'tipo e valor'.<br>Explicação:<br>- O operador <code>===</code> em JavaScript é conhecido como 'estritamente igual' e verifica se os operandos têm o mesmo valor e o mesmo tipo.<br>- Isso difere do operador <code>==</code>, que apenas compara o valor, permitindo conversão de tipo.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "No desenvolvimento Web a linguagem JavaScript é largamente utilizada, desta forma, a diferença das palavras reservadas <code>let</code> e <code>const</code> é:",
  "type": "radio",
  "options": [
    "let permite a reatribuição de valores, enquanto const impede a reatribuição",
    "let é utilizado para a criação de interfaces, enquanto const é utilizado para criação de objetos abstratos",
    "let permite a criação de documentos dinâmicos HTML, enquanto const permite a criação de documentos HTML estáticos",
    "let permite a criação apenas de vetores, enquanto const permite a criação de matrizes",
    "let permite apenas a atribuição de strings, enquanto const permite apenas a atribuição de números"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'let permite a reatribuição de valores, enquanto const impede a reatribuição'.<br>Explicação:<br>- Em JavaScript, <code>let</code> permite declarar variáveis cujo valor pode ser reatribuído posteriormente.<br>- Por outro lado, <code>const</code> é usado para declarar variáveis cujo valor não pode ser reatribuído após a inicialização, tornando-o constante.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere que em um arquivo .HTML, contenha um botão e que através da linguagem JavaScript seja necessário adicionar um evento clique para este botão. Assinale a alternativa correta para associar este evento ao botão utilizando a linguagem JavaScript:",
  "type": "radio",
  "options": [
    "button.on('clique', minhaFuncao)",
    "button.click(minhaFuncao)",
    "button.addEventListener('click', minhaFuncao)",
    "button.addClickEvent('click', minhaFuncao)",
    "button.listen('click', minhaFuncao)"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é 'button.addEventListener(\"click\", minhaFuncao)'.<br>Explicação:<br>- Em JavaScript, a maneira padrão de adicionar um evento a um elemento HTML é usando o método <code>addEventListener</code>.<br>- Este método associa um evento a um elemento e é usado com dois parâmetros: o tipo do evento (neste caso, 'click') e a função que deve ser executada quando o evento ocorre.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "O seguinte trecho de código foi escrito na linguagem JavaScript:<br><br>&lt;script&gt;<br>function plus1(n) {<br>  return n+1;<br>}<br>let a = plus1;<br>alert(a);<br>&lt;/script&gt;<br><br>O conteúdo apresentado na janela criada pelo método alert() será:",
  "type": "radio",
  "options": [
    "n",
    "n+1",
    "plus1",
    "function",
    "function plus1(n) { return n+1; }"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é 'function plus1(n) { return n+1; }'.<br>Explicação:<br>- Em JavaScript, quando uma função é atribuída a uma variável (neste caso, <code>let a = plus1;</code>), a variável <code>a</code> passa a referenciar a função completa, não apenas seu valor de retorno.<br>- Ao chamar <code>alert(a);</code>, o conteúdo da função (seu código) será exibido como uma string, pois o método <code>alert()</code> converte a função em texto.<br>- Portanto, o resultado exibido será a definição completa da função: <code>function plus1(n) { return n+1; }</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Assinale a alternativa que apresenta uma forma adequada de referenciar, em uma página HTML, um arquivo JavaScript externo.",
  "type": "radio",
  "options": [
    "&lt;src mode=\"JS\" path=\"arquivo.js\"&gt;",
    "&lt;object mode=\"JS\" location=\"arquivo.js\"&gt;&lt;/object&gt;",
    "&lt;link mode=\"javascript\" href=\"arquivo.js\"&gt;",
    "&lt;script src=\"arquivo.js\"&gt;&lt;/script&gt;",
    "&lt;div append-js=\"arquivo.js\"&gt;&lt;/div&gt;"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é '&lt;script src=\"arquivo.js\"&gt;&lt;/script&gt;'.<br>Explicação:<br>- Em HTML, o elemento &lt;script&gt; é usado para incluir arquivos JavaScript externos. O atributo <code>src</code> especifica o caminho para o arquivo JavaScript.<br>- As outras alternativas estão incorretas porque não representam sintaxes válidas para incluir scripts JavaScript externos.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "A respeito de linguagens de programação, julgue o item seguinte.<br><br>JavaScript, linguagem utilizada para fazer páginas interativas da Internet, atua no navegador para tornar as aplicações web mais dinâmicas.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'Certo'.<br>Explicação:<br>- JavaScript é amplamente utilizada no desenvolvimento web para criar páginas interativas, respondendo a ações dos usuários no navegador.<br>- A linguagem permite adicionar funcionalidades dinâmicas e interatividade a sites e aplicações web, tornando-os mais responsivos e atraentes.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "No contexto do JavaScript, analise o quadro a seguir sob a ótica das diferenças sintáticas utilizadas nas declarações de variáveis, e as respectivas possibilidades de redeclarar e/ou alterar o valor de uma variável ao longo do código.<br><br><table style='border-collapse: collapse; width: 100%;'><tr><th style='border: 1px solid black; padding: 5px;'>Tipo de declaração</th><th style='border: 1px solid black; padding: 5px;'>Permite redeclarar</th><th style='border: 1px solid black; padding: 5px;'>Permite alterar valor</th></tr><tr><td style='border: 1px solid black; padding: 5px;'>?</td><td style='border: 1px solid black; padding: 5px;'>Sim</td><td style='border: 1px solid black; padding: 5px;'>Sim</td></tr><tr><td style='border: 1px solid black; padding: 5px;'>?</td><td style='border: 1px solid black; padding: 5px;'>Não</td><td style='border: 1px solid black; padding: 5px;'>Sim</td></tr><tr><td style='border: 1px solid black; padding: 5px;'>?</td><td style='border: 1px solid black; padding: 5px;'>Não</td><td style='border: 1px solid black; padding: 5px;'>Não</td></tr></table><br><br>De cima para baixo, a ordem de preenchimento da primeira coluna, de acordo com as possibilidades de cada tipo de declaração, é:",
  "type": "radio",
  "options": [
    "const, let, var",
    "let, const, var",
    "let, var, const",
    "var, const, let",
    "var, let, const"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é 'var, let, const'.<br>Explicação:<br>- 'var' permite redeclarar e alterar o valor da variável.<br>- 'let' não permite redeclarar, mas permite alterar o valor.<br>- 'const' não permite nem redeclarar nem alterar o valor, garantindo imutabilidade.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "No contexto do JavaScript, analise a função a seguir.<br><br><pre><code>function f(t) {<br>    return t.replace(\"A\", \"X\").slice(1, 10).trim();<br>}</code></pre><br><br>A expressão<br><br><pre><code>f(\" ABCDEF AE AAA \")</code></pre><br><br>retorna:",
  "type": "radio",
  "options": [
    "ABCDEF AE AAA",
    "ABCDEFAEAAA",
    "ABCDEFXE",
    "XBCDEF AE",
    "XBCDEF XE"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é 'XBCDEF AE'.<br>Explicação:<br>- A função <code>f(t)</code> realiza as seguintes operações:<br>  1. <code>t.replace(\"A\", \"X\")</code>: substitui a primeira ocorrência de 'A' por 'X', resultando em ' XBCDEF AE AAA '.<br>  2. <code>.slice(1, 10)</code>: extrai a substring da posição 1 até a posição 10 (não inclusiva), resultando em 'XBCDEF AE'.<br>  3. <code>.trim()</code>: remove espaços em branco nas extremidades, mas não há espaços a serem removidos após o <code>slice</code>. O resultado final é 'XBCDEF AE'.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript:<br><br><pre><code>function formatString(s) {<br>    return s.split('').reverse().join('-').toUpperCase();<br>}<br><br>const input = 'JavaScript';<br>const result = formatString(input);</code></pre><br>Qual será o valor da variável <code>result</code> após a execução do código acima?",
  "type": "radio",
  "options": [
    "J-A-V-A-S-C-R-I-P-T",
    "T-P-I-R-C-S-A-V-A-J",
    "t-p-i-r-c-s-a-v-a-j",
    "TP-IR-CS-AV-AJ",
    "JavaScript"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é 'T-P-I-R-C-S-A-V-A-J'.<br>Explicação:<br>- O método <code>split('')</code> converte a string em um array de caracteres.<br>- O método <code>reverse()</code> inverte a ordem dos elementos do array.<br>- O método <code>join('-')</code> junta os caracteres com um traço ('-') entre eles.<br>- O método <code>toUpperCase()</code> transforma todos os caracteres em maiúsculas.<br>Assim, o resultado final será 'T-P-I-R-C-S-A-V-A-J'.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Observe o código JavaScript abaixo:<br><br><pre><code>const numbers = [10, 5, 8, 1, 7];<br>const result = numbers.sort((a, b) => b - a).find(num => num < 7);</code></pre><br>Qual será o valor da variável <code>result</code> após a execução do código?",
  "type": "radio",
  "options": [
    "10",
    "8",
    "5",
    "7",
    "1"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é '5'.<br>Explicação:<br>- O método <code>sort((a, b) => b - a)</code> ordena o array <code>numbers</code> em ordem decrescente, resultando em <code>[10, 8, 7, 5, 1]</code>.<br>- O método <code>find(num => num < 7)</code> retorna o primeiro valor no array ordenado que é menor que 7, que neste caso é <code>5</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript:<br><br><pre><code>function calculateArea(shape) {<br>    switch (shape.type) {<br>        case 'circle':<br>            return Math.PI * Math.pow(shape.radius, 2);<br>        case 'square':<br>            return Math.pow(shape.side, 2);<br>        case 'rectangle':<br>            return shape.width * shape.height;<br>        default:<br>            throw new Error('Forma não suportada');<br>    }<br>}<br><br>const area = calculateArea({ type: 'circle', radius: 3 });</code></pre><br>Qual será o valor da variável <code>area</code> ao final da execução do código?",
  "type": "radio",
  "options": [
    "9",
    "28.274333882308138",
    "18.84955592153876",
    "6.283185307179586",
    "Erro: Forma não suportada"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é '28.274333882308138'.<br>Explicação:<br>- A função <code>calculateArea</code> utiliza um <code>switch</code> para determinar o tipo de forma e calcular sua área.<br>- Para o tipo <code>circle</code>, a área é calculada como <code>Math.PI * Math.pow(shape.radius, 2)</code>.<br>- Com um raio de 3, o cálculo se torna <code>Math.PI * 9</code>, resultando em aproximadamente <code>28.274333882308138</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/PI",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise o código JavaScript a seguir.<br><br><pre><code>&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>&lt;body&gt;<br><br>&lt;p id=\"demo\"&gt;&lt;/p&gt;<br><br>&lt;script&gt;<br><br>let text = '{\"Funcionarios\":[' +<br>'{\"Nome\":\"J.\",\"Sobrenome\":\"Junior\" },' +<br>'{\"Nome\":\"A.\",\"Sobrenome\":\"Filho\" },' +<br>'{\"Nome\":\"P.\",\"Sobrenome\":\"Neto\" },'+<br>'{\"Nome\":\"L.\",\"Sobrenome\":\"Bisneto\" },'+<br>'{\"Nome\":\"P.\",\"Sobrenome\":\"Filha\" }]}';<br><br>const obj = JSON.parse(text);<br><br>document.getElementById(\"demo\").innerHTML = obj.Funcionarios[2].Nome + \" \" + obj.Funcionarios[2].Sobrenome;<br><br>&lt;/script&gt;<br><br>&lt;/body&gt;<br>&lt;/html&gt;</code></pre><br>O resultado exibido ao rodar esse código será:",
  "type": "radio",
  "options": [
    "A. Filho",
    "P. Filha",
    "L. Bisneto",
    "P. Neto",
    "J. Junior"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é 'P. Neto'.<br>Explicação:<br>- O código usa <code>JSON.parse()</code> para converter a string JSON em um objeto JavaScript.<br>- Em seguida, acessa <code>obj.Funcionarios[2]</code>, que é o terceiro objeto da lista de funcionários.<br>- O terceiro funcionário tem <code>Nome: 'P.'</code> e <code>Sobrenome: 'Neto'</code>, então o resultado exibido será 'P. Neto'.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "A seguir é apresentado um trecho de código na linguagem JavaScript.<br><br><pre><code>let x = 10;<br>let y = 2;<br>x <<= y;</code></pre><br>O valor da variável <code>x</code> ao término da execução desse trecho de código será:",
  "type": "radio",
  "options": [
    "2",
    "5",
    "10",
    "20",
    "40"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é '40'.<br>Explicação:<br>- O operador <code>&lt;&lt;=</code> é um operador de deslocamento de bits à esquerda, que desloca os bits do valor de <code>x</code> pelo número de posições especificado por <code>y</code>.<br>- Neste caso, <code>10 &lt;&lt;= 2</code> desloca os bits de <code>10</code> (que é <code>1010</code> em binário) duas posições à esquerda, resultando em <code>101000</code>, que é igual a <code>40</code> em decimal.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operadores_de_bits"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Leia o texto a seguir.<br><br>JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos, amplamente utilizada para desenvolvimento web. Ela permite aos desenvolvedores criar páginas web dinâmicas e interativas, com funcionalidades como animações, validações de formulários, manipulação de eventos, comunicação assíncrona com servidores, entre outras.<br><br><i>Disponível em: https://www.javascript.com/. Acesso em: 20 fev. 2024.</i><br><br>O nome do método em JavaScript que permite executar uma função após um determinado período de tempo é:",
  "type": "radio",
  "options": [
    "setTimeout()",
    "setInterval()",
    "clearTimeout()",
    "requestAnimationFrame()"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'setTimeout()'.<br>Explicação:<br>- O método <code>setTimeout()</code> permite que uma função seja executada após um determinado período de tempo (em milissegundos). Ele é comumente usado para atrasar a execução de uma função específica.<br>- Já <code>setInterval()</code> é usado para executar uma função repetidamente em intervalos específicos, <code>clearTimeout()</code> para cancelar uma execução agendada pelo <code>setTimeout()</code>, e <code>requestAnimationFrame()</code> é uma função para otimizar animações.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Observe o seguinte script em JavaScript:<br><br><pre><code>const vetor = [ [2, 0], [2, 4] ];<br><br>const saida = vetor.reduceRight((acc, v) => acc.join(v),);<br><br>console.log(saida);</code></pre><br>Ao ser executado, o script acima imprime no console:",
  "type": "radio",
  "options": [
    "04,22",
    "20,24",
    "22,04",
    "24,20",
    "42,02"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é '22,04'.<br>Explicação:<br>- A função <code>reduceRight()</code> percorre o array de trás para frente, acumulando o resultado da operação. No entanto, o método <code>join()</code> usado na função está incorreto para concatenar arrays de forma esperada.<br>- <code>reduceRight</code> começará do último elemento <code>[2, 4]</code> e tentará <code>join</code> com <code>[2, 0]</code>, resultando em uma saída confusa.<br>- O código acima falha na implementação esperada, mas se fosse corrigido corretamente para concatenar de maneira adequada, a lógica mudaria.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Em um determinado sistema, um técnico em Informática precisa testar uma condição de modo que uma variável <code>cidade</code> receba o valor <strong>CUIABÁ</strong> se o código for igual a 1 e <strong>RONDONÓPOLIS</strong>, caso contrário. A sintaxe para a estrutura do “if ternário” a ser empregada na programação em JavaScript, é:",
  "type": "radio",
  "options": [
    "cidade = (codigo == 1) ? “CUIABÁ” : “RONDONÓPOLIS”",
    "cidade = (codigo == 1) : “CUIABÁ” ? “RONDONÓPOLIS”",
    "cidade = (codigo == 1) & “CUIABÁ” % “RONDONÓPOLIS”",
    "cidade = (codigo == 1) % “CUIABÁ” & “RONDONÓPOLIS”"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é 'cidade = (codigo == 1) ? “CUIABÁ” : “RONDONÓPOLIS”'.<br>Explicação:<br>- Em JavaScript, a sintaxe do operador ternário é: <code>condição ? valor_se_verdadeiro : valor_se_falso</code>. Aqui, <code>codigo == 1</code> é a condição, retornando 'CUIABÁ' se verdadeira e 'RONDONÓPOLIS' se falsa.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte trecho de código JavaScript:<br><br><pre><code>var x = function y(n) {\n  return n < 2 ? 1 : n * y(n - 1);\n};\nconsole.log(x(5));</code></pre><br>Assinale a opção em que é apresentado o resultado da execução do trecho de código precedente.",
  "type": "radio",
  "options": [
    "5",
    "10",
    "20",
    "120",
    "ReferenceError: y is not defined"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é <strong>120</strong>.<br>Explicação:<br>- O código define uma função recursiva <code>y</code> que calcula o fatorial de <code>n</code> usando a condição <code>n < 2 ? 1 : n * y(n - 1)</code>. Quando <code>x(5)</code> é executado, o valor 5! (fatorial de 5) é calculado como 120.",
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions#recurs%C3%A3o"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código JavaScript para um servidor Node.js:<br><br><pre><code>const http = require('node:http');\nconst hostname = '127.0.0.1';\nconst port = 3000;\nconst server = http.createServer((req, res) => {\n   res.statusCode = 200;\n   res.setHeader('Content-Type', 'text/plain');\n   res.end('Minha home page\\n');\n});\nserver.listen(port, hostname, () => {\n   console.log(`Server running at http://${hostname}:${port}/`);\n});</code></pre><br>Para a execução das instruções desse arquivo, foi emitido o comando <code>node codigo.js</code> na pasta em que se encontra esse arquivo.<br><br>Com base na situação descrita, assinale a opção que corresponde à saída esperada da execução bem-sucedida do arquivo <code>codigo.js</code>.",
  "type": "radio",
  "options": [
    "server running at http://127.0.0.1:3000/",
    "server created",
    "codigo.js OK",
    "http://127.0.0.1:3000",
    "Minha home page"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>server running at http://127.0.0.1:3000/</strong>.<br>Explicação:<br>- O código cria um servidor HTTP simples que escuta na porta 3000 e exibe uma mensagem no console indicando o endereço do servidor (<code>Server running at http://127.0.0.1:3000/</code>) ao ser iniciado. Essa mensagem confirma que o servidor está funcionando conforme esperado.",
  "referenceLinks": [
    "https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Dentro da linguagem de programação JavaScript, utilizando-se do objeto <code>Navigator</code>, qual propriedade armazena o cabeçalho que será enviado para o servidor no protocolo HTTP, servindo para que o servidor identifique o software que está sendo usado pelo cliente?",
  "type": "radio",
  "options": [
    "appCodeName",
    "appServidor",
    "appVersion",
    "userAgent",
    "appCode"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é <strong>userAgent</strong>.<br>Explicação:<br>- A propriedade <code>userAgent</code> do objeto <code>Navigator</code> contém uma string que identifica o software utilizado pelo cliente, incluindo informações sobre o navegador e o sistema operacional, o que permite ao servidor identificar o tipo de software do cliente.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Assinale a opção que indica o tipo de vulnerabilidade que é geralmente associada à função JavaScript <code>eval()</code>.",
  "type": "radio",
  "options": [
    "Cross-origin resource sharing (CORS)",
    "Cross-site request forgery (CSRF)",
    "Cross-site scripting (XSS)",
    "Server-side request forgery (SSRF)",
    "Cross Site History Manipulation (XSHM)"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>Cross-site scripting (XSS)</strong>.<br>Explicação:<br>- A função <code>eval()</code> em JavaScript pode executar código arbitrário fornecido como string. Quando não há uma validação adequada das entradas de usuário, isso abre uma brecha para ataques de Cross-site Scripting (XSS), permitindo que scripts maliciosos sejam executados no contexto do navegador da vítima.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval",
    "https://owasp.org/www-community/attacks/xss/"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Qual técnica de segurança permite que servidores controlem quais origens têm permissão para acessar recursos específicos em uma aplicação web?",
  "type": "radio",
  "options": [
    "Cross-site scripting (XSS)",
    "Cross-origin resource sharing (CORS)",
    "Cross-site request forgery (CSRF)",
    "Server-side request forgery (SSRF)",
    "Same-origin policy (SOP)"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>Cross-origin resource sharing (CORS)</strong>.<br>Explicação:<br>- O CORS permite que servidores definam quais origens podem acessar seus recursos, estendendo a política de mesma origem (SOP). Ele é essencial para proteger APIs que precisam ser acessadas por várias origens.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Qual técnica de ataque explora a confiança que um servidor possui em uma requisição legítima enviada de um usuário autenticado, forçando-o a executar ações indesejadas sem o seu consentimento?",
  "type": "radio",
  "options": [
    "Cross-site scripting (XSS)",
    "Cross-site request forgery (CSRF)",
    "Cross-origin resource sharing (CORS)",
    "Server-side request forgery (SSRF)",
    "Cross Site History Manipulation (XSHM)"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>Cross-site request forgery (CSRF)</strong>.<br>Explicação:<br>- O ataque CSRF ocorre quando um usuário autenticado é enganado para realizar uma ação em um site sem intenção, devido a uma requisição enviada de uma origem externa.",
  "referenceLinks": [
    "https://owasp.org/www-community/attacks/csrf"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Qual vulnerabilidade permite que um invasor faça com que o servidor realize requisições para outros serviços internos ou externos, explorando recursos restritos?",
  "type": "radio",
  "options": [
    "Cross-site request forgery (CSRF)",
    "Server-side request forgery (SSRF)",
    "Cross-origin resource sharing (CORS)",
    "Cross-site scripting (XSS)",
    "Cross Site History Manipulation (XSHM)"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>Server-side request forgery (SSRF)</strong>.<br>Explicação:<br>- Em um ataque SSRF, o invasor força o servidor a realizar requisições para sistemas internos ou externos que podem não ser acessíveis diretamente, explorando falhas em recursos de rede interna.",
  "referenceLinks": [
    "https://owasp.org/www-community/attacks/ssrf"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Qual técnica de ataque explora a habilidade de manipular o histórico de navegação do usuário em sites para rastrear suas atividades ou induzi-lo a acessar páginas específicas?",
  "type": "radio",
  "options": [
    "Cross Site History Manipulation (XSHM)",
    "Cross-origin resource sharing (CORS)",
    "Cross-site request forgery (CSRF)",
    "Server-side request forgery (SSRF)",
    "Cross-site scripting (XSS)"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>Cross Site History Manipulation (XSHM)</strong>.<br>Explicação:<br>- O ataque XSHM manipula o histórico do navegador para controlar ou monitorar o comportamento de navegação de um usuário, muitas vezes para fins de rastreamento ou engenharia social.",
  "referenceLinks": [
    "https://owasp.org/www-community/attacks/xshm"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere as seguintes expressões usando a linguagem JavaScript:<br><br><code>1 == '1'</code> e <code>1 === '1'</code><br><br>Os resultados são, respectivamente:",
  "type": "radio",
  "options": [
    "1 e 1",
    "true e true",
    "'1' e '1'",
    "false e false",
    "true e false"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é <strong>true e false</strong>.<br>Explicação:<br>- Em JavaScript, o operador <code>==</code> compara os valores, permitindo a conversão de tipo, então <code>1 == '1'</code> é <code>true</code>.<br>- O operador <code>===</code>, por outro lado, verifica tanto o valor quanto o tipo sem conversão de tipo, então <code>1 === '1'</code> é <code>false</code> porque um é um número e o outro é uma string.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise o código JavaScript a seguir:<br><br><pre><code>let a = {x: 1};<br>let b = {x: 2};<br>let c = {x: 3};<br><br>let arr = [a, b, c];<br><br>arr.forEach((obj) => {<br>   obj.x += 1;<br>});<br><br>console.log(a.x, b.x, c.x);</code></pre><br>O resultado exibido ao rodar esse código será:",
  "type": "radio",
  "options": [
    "1 2 3",
    "2 3 4",
    "4 5 6",
    "[1, 2, 3]",
    "[2, 3, 4]"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>2 3 4</strong>.<br>Explicação:<br>- As variáveis <code>a</code>, <code>b</code> e <code>c</code> são objetos com a propriedade <code>x</code> definida.<br>- O array <code>arr</code> contém referências a esses objetos.<br>- A função <code>forEach</code> percorre cada objeto em <code>arr</code> e incrementa a propriedade <code>x</code> em 1. Portanto, o valor de <code>x</code> em cada objeto é alterado.<br>- O resultado exibido é <code>2 3 4</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Uma resposta HTTPS de um servidor web a um navegador contém a seguinte linha no cabeçalho:<br><br><code>Set-Cookie: id=f3aXb; Secure; HttpOnly</code><br><br>Sobre o cookie criado por esta linha, assinale a alternativa com a característica correta.",
  "type": "radio",
  "options": [
    "Só deve ser enviado de volta ao servidor em requisições HTTP, não HTTPS.",
    "Seu nome é f3aXb.",
    "É permanente, não sendo excluído automaticamente pelo navegador.",
    "Deve ser enviado de volta ao servidor em requisições para todo e qualquer domínio.",
    "É inacessível via JavaScript por document.cookie."
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é <strong>É inacessível via JavaScript por document.cookie.</strong><br>Explicação:<br>- A flag <code>HttpOnly</code> indica que o cookie é inacessível via JavaScript, ou seja, ele não pode ser lido ou modificado pelo código JavaScript da página usando <code>document.cookie</code>. Esta medida aumenta a segurança contra ataques de <i>cross-site scripting</i> (XSS).<br>- A flag <code>Secure</code> significa que o cookie só será enviado em conexões HTTPS, não em HTTP.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie",
    "https://owasp.org/www-community/HttpOnly"
  ],
  "screenshots": [],
  "videos": []
},
  {
    "question": "Analise o programa a seguir, elaborado na Linguagem HTML com JavaScript:<br><br>\n&lt;!DOCTYPE html&gt;<br>\n&lt;html&gt;<br>\n&lt;body&gt;<br>\n&lt;p id=\"conta\"></p><br>\n&lt;script&gt;<br>\nvar a = 1;<br>\nvar b = 2;<br>\nvar c = 3;<br>\nx = a + b * c;<br>\ny = x % 5;<br>\nz = Math.pow(y, 2);<br>\nz--;<br>\ndocument.getElementById(\"conta\").innerHTML = z;<br>\n&lt;/script&gt;<br>\n&lt;/body&gt;<br>\n&lt;/html&gt;<br><br>\nQuando esse programa for aberto por um navegador como o Chrome ou o Edge, será exibido na tela:",
    "type": "radio",
    "options": [
      "ERROR, pois uma das operações aritméticas resultará em um valor inválido.",
      "1.",
      "2.",
      "3.",
      "4."
    ],
    "correctAnswer": 3,
    "justification": "A resposta correta é <strong>3</strong>.<br>Explicação:<br>- A expressão <code>x = a + b * c</code> resulta em <code>x = 1 + 2 * 3 = 7</code> (seguindo a ordem das operações).<br>- A operação <code>y = x % 5</code> resulta em <code>y = 7 % 5 = 2</code>.<br>- A operação <code>z = Math.pow(y, 2)</code> calcula <code>z = 2^2 = 4</code>.<br>- A linha <code>z--</code> decrementa <code>z</code> em 1, resultando em <code>z = 3</code>.<br>- Assim, o valor final exibido será <code>3</code>.",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Considere o seguinte código HTML5 com JavaScript:<br><br>\n&lt;!DOCTYPE html&gt;<br>\n&lt;html&gt;<br>\n&lt;body&gt;<br>\n<p id=\"texto\"></p><br>\n&lt;script&gt;<br>\ndocument.getElementById(\"texto\").innerHTML = (~(5^2))<<2;<br>\n&lt;/script&gt;<br>\n&lt;/body&gt;<br>\n&lt;/html&gt;<br><br>\nO texto na saída apresentado no navegador, ao carregar essa página, é:",
    "type": "radio",
    "options": [
      "-12.5",
      "-20",
      "-32",
      "-50",
      "-100"
    ],
    "correctAnswer": 2,
    "justification": "A resposta correta é <strong>-32</strong>.<br><br>Explicação:<br>\n- O operador <code>^</code> realiza uma operação bit a bit XOR entre os valores 5 e 2.<br>\n  - Em binário: <code>5</code> é <code>101</code> e <code>2</code> é <code>010</code>.<br>\n  - A operação <code>5 ^ 2</code> resulta em <code>111</code>, que é <code>7</code> em decimal.<br>\n- O operador <code>~</code> inverte todos os bits de <code>7</code>, transformando-o em <code>-8</code> (seguindo a notação de complemento de dois).<br>\n- O operador <code>&lt;&lt; 2</code> desloca o resultado <code>-8</code> duas posições para a esquerda, resultando em <code>-32</code>.<br><br>Portanto, o valor final exibido é <code>-32</code>.",
    "referenceLinks": [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_shift"
    ],
    "screenshots": [],
    "videos": []
  },
  {
  "question": "Um técnico deseja manipular precisamente números inteiros em uma aplicação JavaScript com mais de 15 dígitos. Para armazenar um número nessa proporção em uma variável <code>x</code>, ele deve utilizar a instrução:",
  "type": "radio",
  "options": [
    "let x = Long(\"4556567456345345322466456789098877666555\");",
    "let x = 4556567456345345322466456789098877666555n;",
    "let x = Long.parseLong(\"4556567456345345322466456789098877666555\");",
    "let x = 4556567456345345322466456789098877666555L;",
    "let x = toNumber(\"4556567456345345322466456789098877666555\");"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>let x = 4556567456345345322466456789098877666555n;</strong>.<br>Explicação:<br>- Em JavaScript, o tipo <code>BigInt</code> é utilizado para representar números inteiros com precisão arbitrária, permitindo manipular números maiores que o limite de precisão dos números inteiros normais.<br>- Para declarar um número do tipo <code>BigInt</code>, basta adicionar o sufixo <code>n</code> após o número.<br>- Nenhuma das outras alternativas utiliza uma sintaxe válida em JavaScript para declarar um número <code>BigInt</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",
    "https://www.w3schools.com/js/js_numbers.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte código HTML5 com JavaScript:<br><br>\n&lt;!DOCTYPE html&gt;<br>\n&lt;html&gt;<br>\n&lt;body&gt;<br>\n&lt;canvas id=\"c\" width=\"200\" height=\"100\"&gt;&lt;/canvas&gt;<br><br>\n&lt;script&gt;<br>\nvar c = document.getElementById(\"c\");<br>\nvar ctx = c.getContext(\"2d\");<br>\nctx.beginPath();<br>\nctx.arc(100,50,40,Math.PI,2*Math.PI);<br>\nctx.stroke();<br>\n&lt;/script&gt;<br><br>\n&lt;/body&gt;<br>\n&lt;/html&gt;<br><br>\nO desenho resultante no canvas, exibido no navegador, é:",
  "type": "radio",
  "options": [
    "uma circunferência completa.",
    "uma semicircunferência na metade superior do canvas.",
    "uma semicircunferência na metade inferior do canvas.",
    "um arco correspondente a ¼ de circunferência, na metade superior do canvas.",
    "um arco correspondente a ¼ de circunferência, na metade inferior do canvas."
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>uma semicircunferência na metade inferior do canvas</strong>.<br><br>Explicação:<br>- O método <code>ctx.arc(100,50,40,Math.PI,2*Math.PI)</code> desenha um arco com centro nas coordenadas (100,50), raio 40, começando no ângulo <code>Math.PI</code> (180°) e terminando no ângulo <code>2 * Math.PI</code> (360°).<br>- Este arco representa a metade inferior de uma circunferência, desenhada na parte inferior do canvas.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc",
    "https://www.w3schools.com/html/html5_canvas.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Elaborou-se um programa na Linguagem HTML com JavaScript, apresentado a seguir (os traços nas linhas 4 e 10 representam partes do programa que foram omitidas):<br><br>\n<pre>\n1 &lt;!DOCTYPE html&gt;<br>\n2 &lt;html&gt;<br>\n3 &lt;body&gt;<br>\n4 &lt;button ______=\"mostra()\"&gt;Mostrar<br>\n6 dia e hora&lt;/button&gt;<br>\n7 &lt;script&gt;<br>\n8 function mostra() {<br>\n9   document.getElementById(\"teste\").<br>\n10 innerHTML = _____;<br>\n11 }<br>\n12 &lt;/script&gt;<br>\n13 &lt;p id=\"teste\"&gt;&lt;/p&gt;<br>\n14 &lt;/body&gt;<br>\n</pre><br>\nSupõe-se que esse programa será aberto por um navegador como o Chrome ou o Edge. Deseja-se que ele apresente na tela um botão que, ao ser pressionado, exiba a data e hora no formato:<br><br>\n<code>Sun Mar 01 2020 23:20:11 GMT-0300 (Horário Padrão de Brasília)</code><br><br>\nPara tanto, os traços deverão ser substituídos, respectivamente, por:",
  "type": "radio",
  "options": [
    "onchange e Date()",
    "onchange e DayHour()",
    "onclick e Date()",
    "onclick e Day()Hour()",
    "onclick e DayHour()"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>onclick e Date()</strong>.<br><br>Explicação:<br>- O evento <code>onclick</code> é utilizado para executar uma função quando o botão é pressionado.<br>- A função <code>Date()</code> em JavaScript gera a data e hora atuais no formato desejado. Portanto, ao pressionar o botão, a função <code>mostra()</code> é chamada e exibe a data e hora usando <code>new Date()</code> para a formatação completa solicitada.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Um dos tipos de operadores da linguagem JavaScript é o operador de deslocamento. Considere uma variável x inicialmente com o valor 10 (em decimal). Após se realizar a operação<br><br>\n<pre>\nx = x << 2\n</pre>\nseu novo valor será:",
  "type": "radio",
  "options": [
    "2",
    "5",
    "10",
    "20",
    "40"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é <strong>40</strong>.<br><br>Explicação:<br>- O operador <code>&lt;&lt;</code> é um operador de deslocamento à esquerda. Ele desloca os bits do valor especificado para a esquerda, preenchendo com zeros à direita.<br>- No caso da expressão <code>x = 10 &lt;&lt; 2</code>, o valor binário de 10 é <code>1010</code>.<br>- Deslocando os bits duas posições para a esquerda, o valor se torna <code>101000</code>, que corresponde ao número decimal <code>40</code>.<br><br>Portanto, após a operação, o valor de <code>x</code> é <code>40</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators",
    "https://www.w3schools.com/js/js_bitwise.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "O código JavaScript<br><br>\n<pre>\nwindow.alert(2 + 3 + \"5\");\n</pre>\nquando executado exibe uma caixa de diálogo com o seguinte conteúdo:",
  "type": "radio",
  "options": [
    "55",
    "10",
    "0",
    "5",
    "235"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>55</strong>.<br><br>Explicação:<br>- Em JavaScript, as operações são realizadas da esquerda para a direita. A expressão <code>2 + 3 + \"5\"</code> começa com a adição de <code>2</code> e <code>3</code>, resultando em <code>5</code>.<br>- Em seguida, <code>5</code> é concatenado com a string <code>\"5\"</code>, formando <code>\"55\"</code> (concatenando número e string).<br><br>Portanto, o valor exibido na caixa de diálogo é <code>55</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
    "https://www.w3schools.com/js/js_type_conversion.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Sobre JavaScript, assinale a alternativa que, utilizando um método nativo da linguagem, exibirá uma caixa de diálogo com a mensagem \"Olá!\".",
  "type": "radio",
  "options": [
    "alert(\"Olá!\");",
    "JDialog d = new JDialog(frame, \"Olá!\");",
    "msg = MsgBox(\"Olá!\", 1);",
    "echo \"Olá!\";",
    "\"Olá!\" >> prompt;"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>alert(\"Olá!\");</strong>.<br><br>Explicação:<br>- Em JavaScript, a função <code>alert()</code> é usada para exibir uma caixa de diálogo com uma mensagem. Neste caso, <code>alert(\"Olá!\");</code> exibirá a mensagem \"Olá!\".<br>- As outras opções não são sintaxes corretas para exibir uma caixa de diálogo em JavaScript:<br>&nbsp;&nbsp;- <code>JDialog</code> é usado em Java, não em JavaScript.<br>&nbsp;&nbsp;- <code>MsgBox</code> é usado em linguagens como VBScript.<br>&nbsp;&nbsp;- <code>echo</code> é usado em PHP.<br>&nbsp;&nbsp;- A expressão <code>\"Olá!\" >> prompt;</code> é incorreta.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o conteúdo visível da página HTML a seguir, contendo um código JavaScript, sendo renderizada por um navegador web:<br><br>\n<div style=\"border: 1px solid; padding: 10px; width: 300px;\">\n<h2>Teste Javascript</h2>\n<button type=\"button\" onclick=\"document.getElementById('demo').innerHTML='Ao clicar no botão acima, este texto aparece'\">Clique para ver o texto</button>\n<p id=\"demo\"></p>\n</div><br><br>\nAssinale a alternativa CORRETA que irá exibir o texto “Ao clicar no botão acima, este texto aparece” na página HTML, somente ao clicar no botão “Clique para ver o texto”:",
  "type": "radio",
  "options": [
    "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;body&gt;&lt;h2&gt;Teste Javascript&lt;/h2&gt;&lt;button type=\"button\" onclick=\"document.getElementById('demo').innerHTML='Ao clicar no botão acima, este texto aparece'\"&gt;Clique para ver o texto&lt;/button&gt;&lt;p id=\"demo\"&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;",
    "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;body&gt;&lt;h2&gt;Teste Javascript&lt;/h2&gt;&lt;button type=\"button\" onclick=\"document.getElementById('de-mo').innerHTML='Ao clicar no botão acima, este texto apa-rece'\"&gt;Clique para ver o texto&lt;/button&gt;&lt;/body&gt;&lt;/html&gt;",
    "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;body&gt;&lt;h2&gt;Teste Javascript&lt;/h2&gt;&lt;button type=\"button\" onclick=\"Ao clicar no botão acima, este texto aparece\"&gt;Clique para ver o texto&lt;/button&gt;&lt;p id=\"demo\"&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;",
    "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;body&gt;&lt;h2&gt;Teste Javascript&lt;/h2&gt;&lt;button type=\"button\" onclick=\"document.innerHTML='&lt;p&gt;Ao clicar no botão acima, este texto aparece&lt;/p&gt;'\"&gt;Clique para ver o texto&lt;/button&gt;&lt;/body&gt;&lt;/html&gt;"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é:<br>A alternativa utiliza corretamente o método <code>document.getElementById('demo').innerHTML</code> para alterar o conteúdo do parágrafo com <code>id=\"demo\"</code> ao clicar no botão, exibindo o texto <code>“Ao clicar no botão acima, este texto aparece”</code>.<br>- As outras alternativas possuem erros na manipulação do <code>id</code> ou na forma de alterar o conteúdo da página.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById",
    "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "No JavaScript é utilizada uma palavra reservada no momento de criação de uma variável quando se deseja que seu valor não possa ser redeclarado. Esta palavra reservada é:",
  "type": "radio",
  "options": [
    "var",
    "const",
    "struct",
    "string",
    "array"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>const</strong>.<br><br>Explicação:<br>- A palavra-chave <code>const</code> em JavaScript é usada para declarar uma variável cujo valor não pode ser redeclarado ou reatribuído após sua inicialização.<br>- Diferente de <code>var</code>, que permite a redeclaração, <code>const</code> protege a variável contra alterações acidentais de valor, garantindo que ela mantenha o mesmo valor inicial.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
    "https://www.w3schools.com/js/js_const.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise o pretenso código JavaScript a seguir.<br><br>\n<code>const xpto = (a, b) => a + b;</code><br><br>\nSobre esse trecho, é correto afirmar que esse código:",
  "type": "radio",
  "options": [
    "é válido, porque define uma função que retorna a soma de dois números fornecidos como parâmetros;",
    "não compila devido à ausência de um par dos delimitadores '{' e '}'",
    "não compila porque o símbolo '=>' não é permitido na definição de uma função JavaScript;",
    "não compila porque o símbolo '=>' não é permitido numa declaração const;",
    "pode ser compilado, mas gera erro em tempo de execução quando xpto for invocada."
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>é válido, porque define uma função que retorna a soma de dois números fornecidos como parâmetros</strong>.<br><br>Explicação:<br>- Esse trecho de código usa uma <em>arrow function</em>, uma sintaxe válida e introduzida no ES6 (ECMAScript 2015), que define uma função chamada <code>xpto</code> que retorna a soma de dois parâmetros <code>a</code> e <code>b</code>.<br>- Como o corpo da função consiste em uma única expressão, não há necessidade de <code>{}</code>.<br>- Portanto, o código é válido e funciona corretamente.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    "https://www.w3schools.com/js/js_arrow_function.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Para mudar, com JavaScript, o conteúdo de um elemento <code>&lt;h1 id=\"title\"&gt;</code> para \"MPEPB123\", utiliza-se o comando:",
  "type": "radio",
  "options": [
    "document.getElementById(\"title\").text = \"MPEPB123\";",
    "document.innerHTML(\"h1#title\") = \"MPEPB123\";",
    "document.getElementById(\"#title\").innerHTML = \"MPEPB123\";",
    "document.text(\"#title\") = \"MPEPB123\";",
    "document.getElementById(\"title\").innerHTML = \"MPEPB123\";"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é <strong>document.getElementById(\"title\").innerHTML = \"MPEPB123\";</strong>.<br><br>Explicação:<br>- O método <code>document.getElementById(\"title\")</code> seleciona o elemento HTML com o ID <code>title</code>.<br>- A propriedade <code>innerHTML</code> permite definir ou obter o conteúdo HTML de um elemento. Atribuir <code>innerHTML = \"MPEPB123\"</code> substitui o conteúdo do elemento selecionado com o texto \"MPEPB123\".<br>- As demais opções contêm erros na sintaxe ou uso incorreto dos métodos e propriedades do DOM.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById",
    "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "No contexto da linguagem JavaScript, analise as afirmativas sobre variáveis declaradas como <code>const</code>.<br><br>\nI. Devem ter seus valores atribuídos na declaração.<br>\nII. Podem ter seus valores alterados depois de declaradas.<br>\nIII. Têm sempre escopo global.<br><br>\nEstá correto o que se afirma em:",
  "type": "radio",
  "options": [
    "somente II e III;",
    "somente I;",
    "somente II;",
    "somente III;",
    "I, II e III."
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>somente I</strong>.<br><br>Explicação:<br>- **Afirmação I** é verdadeira, pois variáveis declaradas com <code>const</code> precisam ter um valor atribuído no momento da declaração.<br>- **Afirmação II** é falsa, pois variáveis <code>const</code> não podem ser reatribuídas. No entanto, se a constante é um objeto ou um array, suas propriedades ou elementos podem ser modificados, mas a referência em si não pode mudar.<br>- **Afirmação III** é falsa, pois variáveis <code>const</code> não têm escopo global por padrão. Elas seguem o escopo de bloco, ou seja, só são acessíveis dentro do bloco onde foram declaradas.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
    "https://www.w3schools.com/js/js_const.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "No contexto de um script JavaScript numa página Web, considere o trecho a seguir.<br><br>\n<code>\n&lt;script&gt;<br>\nfunction teste(x) {<br>\n    return (x / 2);<br>\n}<br>\nalert(teste);<br>\n&lt;/script&gt;\n</code><br><br>\nÉ correto afirmar sobre esse script que:",
  "type": "radio",
  "options": [
    "há um erro de sintaxe que impede sua execução;",
    "quando executado, exibe a definição da função teste;",
    "quando executado, exibe o valor 0;",
    "quando executado, exibe o valor undefined;",
    "quando executado, o comando alert não é acionado."
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>quando executado, exibe a definição da função teste</strong>.<br><br>Explicação:<br>- No comando <code>alert(teste);</code>, a função <code>teste</code> é passada para o <code>alert</code> sem ser chamada (ou seja, sem parênteses após <code>teste</code>).<br>- Isso faz com que o <code>alert</code> exiba a definição da função <code>teste</code> como uma string (o código da função).<br>- Para que o <code>alert</code> exiba o valor retornado pela função, <code>teste</code> teria que ser chamada com um argumento, como em <code>alert(teste(4));</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Assinale a alternativa que apresenta a função do método <code>addEventListener()</code> do JavaScript.",
  "type": "radio",
  "options": [
    "Executar uma ação quando a request for solicitada.",
    "Criar um alerta na tela quando o botão for clicado.",
    "Configurar função que serão invocadas quando um evento for executado.",
    "Efetuar um refresh da tela e ficar ouvindo as requisições da página HTML."
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>Configurar função que serão invocadas quando um evento for executado.</strong><br><br>Explicação:<br>- O método <code>addEventListener()</code> permite adicionar um ouvinte de evento a um elemento. Ele configura uma função (ou callback) que será executada sempre que o evento especificado ocorrer no elemento.<br>- Esse método é muito útil para tornar as páginas interativas, pois permite executar ações quando o usuário interage com a página, como clicar em um botão, passar o mouse sobre um elemento, entre outros eventos.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener",
    "https://www.w3schools.com/jsref/met_element_addeventlistener.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Avalie o código a seguir, escrito na linguagem Javascript.<br><br>\n<pre><code>\n&lt;script&gt;\n\nalert(window.location.href);\n\n&lt;/script&gt;\n</code></pre><br>\nO que será exibido na caixa de alerta?",
  "type": "radio",
  "options": [
    "A localização horizontal da janela do navegador.",
    "O protocolo da web usado (http: ou https:).",
    "O HREF da página anterior na lista de histórico de navegação.",
    "A URL da página atual.",
    "A localização geográfica (latitude e longitude) do host de internet."
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é <strong>A URL da página atual.</strong><br><br>Explicação:<br>- <code>window.location.href</code> retorna a URL completa (endereço) da página atual, incluindo o protocolo, domínio, e caminho. É usado para obter a localização atual do documento no navegador.<br>- Esse código exibe a URL da página carregada no momento em uma caixa de alerta.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/location",
    "https://www.w3schools.com/jsref/prop_loc_href.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte trecho de código escrito em Javascript:<br><br>\n<pre><code>\nlet str = \"Tenha uma boa prova!\";\nlet x = str.search(\"a\");\n</code></pre><br>\nO valor armazenado na variável x será:",
  "type": "radio",
  "options": [
    "-1",
    "0",
    "3",
    "4",
    "5"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é <strong>4</strong>.<br><br>Explicação:<br>- O método <code>search()</code> em JavaScript retorna o índice da primeira ocorrência do caractere ou expressão regular pesquisada na string.<br>- No código fornecido, <code>str.search(\"a\")</code> encontra a primeira ocorrência do caractere <code>'a'</code> na string \"Tenha uma boa prova!\", que ocorre no índice 4.<br>- Assim, o valor armazenado em <code>x</code> será <code>4</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search",
    "https://www.w3schools.com/jsref/jsref_search.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Dois dos operadores utilizados na linguagem Javascript são os operadores de incremento/decremento. Considere o seguinte trecho de código:<br><br>\n<pre><code>\nlet x = 10;\nx = x++;\nx = --x;\n</code></pre><br>\nO valor da variável x após a execução do trecho de código será:",
  "type": "radio",
  "options": [
    "8",
    "9",
    "10",
    "11",
    "12"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>9</strong>.<br><br>Explicação:<br>- Inicialmente, <code>x</code> é atribuído o valor <code>10</code>.<br>- Na linha <code>x = x++;</code>, o operador <code>x++</code> realiza a atribuição antes do incremento, deixando <code>x</code> com o valor <code>10</code> após essa linha.<br>- Na linha <code>x = --x;</code>, o operador <code>--x</code> decremente <code>x</code> primeiro, reduzindo seu valor para <code>9</code> antes de ser atribuído.<br>- Portanto, o valor final de <code>x</code> é <code>9</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment",
    "https://www.w3schools.com/js/js_operators.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "A linguagem Javascript, ao contrário de outras linguagens, possui apenas uma definição para qualquer tipo de número, utilizando para tal um conjunto de bits para sua representação. O número de bits utilizado no Javascript para representar um número qualquer é:",
  "type": "radio",
  "options": [
    "16",
    "32",
    "64",
    "128",
    "256"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>64</strong>.<br><br>Explicação:<br>- Em JavaScript, todos os números são representados como <code>double-precision floating-point numbers</code> de acordo com o padrão IEEE 754, utilizando 64 bits. Esse padrão oferece precisão para representar valores inteiros e fracionários, mas não distingue tipos específicos para inteiros e números de ponto flutuante, como em outras linguagens.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",
    "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere que na linguagem Javascript foi armazenado um valor de uma data em uma variável da seguinte forma:<br><br>\n<code>let data = new Date(2022, 1)</code><br><br>\nCom relação ao valor armazenado na variável, é correto afirmar que o mês armazenado será",
  "type": "radio",
  "options": [
    "janeiro.",
    "fevereiro.",
    "março.",
    "dezembro.",
    "o mesmo mês do momento que o código for executado."
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>fevereiro</strong>.<br><br>Explicação:<br>- Em JavaScript, o método <code>new Date()</code> utiliza uma numeração de meses onde janeiro é representado pelo valor 0, fevereiro pelo valor 1, e assim por diante. Logo, ao passar o valor 1 como segundo parâmetro, o mês armazenado na variável será fevereiro.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere o seguinte trecho de código escrito na linguagem Javascript:<br><br>\n<pre><code>\nvar x = 1;\n\nfor(var i = 0; i < 3; i++){\n  x = x << 1;\n}\n</code></pre>\nÉ correto afirmar que o valor da variável x após a execução do trecho de código apresentado será:",
  "type": "radio",
  "options": [
    "1",
    "2",
    "3",
    "8",
    "16"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é <strong>8</strong>.<br><br>Explicação:<br>- O operador de deslocamento para a esquerda (<code><<</code>) desloca os bits do número para a esquerda, o que equivale a multiplicá-lo por 2 a cada operação.<br>- No código fornecido, a variável <code>x</code> é deslocada para a esquerda três vezes consecutivas:<br> &nbsp;&nbsp;• 1 << 1 = 2<br> &nbsp;&nbsp;• 2 << 1 = 4<br> &nbsp;&nbsp;• 4 << 1 = 8<br>- Portanto, após três deslocamentos, o valor final de <code>x</code> é <code>8</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift",
    "https://www.w3schools.com/js/js_bitwise.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Manipulação de strings é uma tarefa usual nas diversas linguagens de programação. Considere uma string <code>texto</code> e outra string <code>resultado</code>. Uma maneira de fazer a string <code>resultado</code> receber a string <code>texto</code> sem espaços na linguagem Javascript é:",
  "type": "radio",
  "options": [
    "resultado = texto.charAt(0);",
    "resultado = texto.search(' ');",
    "resultado = texto.substr(' ');",
    "resultado = texto.slice(' ');",
    "resultado = texto.trim();"
  ],
  "correctAnswer": 4,
  "justification": "A resposta correta é <strong>resultado = texto.trim();</strong><br><br>Explicação:<br>- O método <code>trim()</code> em JavaScript remove os espaços em branco no início e no final de uma string, mas não no meio. Para remover todos os espaços, seria necessário <code>resultado = texto.replace(/\\s/g, '')</code>.<br>- No entanto, se o objetivo for apenas remover espaços nas extremidades, <code>trim()</code> é a resposta correta.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Expressões regulares podem ser construídas no JavaScript por meio de um objeto <code>RegExp</code>. Esse objeto pode receber em seu construtor um modificador (ou flag), que irá interferir na expressão regular. O modificador responsável por ignorar se as letras são maiúsculas ou minúsculas é o:",
  "type": "radio",
  "options": [
    "c",
    "i",
    "m",
    "u",
    "y"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é <strong>i</strong>.<br><br>Explicação:<br>- A flag <code>i</code> em expressões regulares no JavaScript indica que a busca deve ser feita de forma case-insensitive, ou seja, ignorando se as letras são maiúsculas ou minúsculas.<br>- Outros modificadores como <code>m</code> habilitam a busca por várias linhas, <code>u</code> ativa suporte a Unicode, e <code>y</code> permite busca na posição exata da string.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Qual método JavaScript irá converter um número, contido em uma variável, em uma string com uma quantidade de dígitos após a vírgula especificada via parâmetro?",
  "type": "radio",
  "options": [
    "toDecimal()",
    "toString()",
    "toFixed()",
    "StrDecimal()",
    "toPrecision()"
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>toFixed()</strong>.<br><br>Explicação:<br>- O método <code>toFixed()</code> no JavaScript converte um número em uma string e permite especificar o número de casas decimais após a vírgula. Por exemplo, <code>(123.456).toFixed(2)</code> resulta em <code>'123.46'</code>.<br>- O método <code>toPrecision()</code> é similar, mas define o número total de dígitos, enquanto <code>toString()</code> apenas converte o número em string sem ajustar a quantidade de casas decimais.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Com relação ao JavaScript, considere as seguintes afirmações:<br><br>\n1. Diante do operador de igualdade (<code>===</code>), <code>null</code> e <code>undefined</code> são considerados iguais.<br>\n2. A base de conversão padrão ou <em>default</em> do método <code>toString()</code> de uma dada variável que contém um número é 10.<br>\n3. Além de ser uma linguagem que diferencia maiúsculas de minúsculas, a quantidade de espaços em branco entre os vários elementos do código também sempre altera seu sentido.<br><br>\nAssinale a alternativa que indica todas as afirmativas corretas.",
  "type": "radio",
  "options": [
    "É correta apenas a afirmativa 2.",
    "São corretas apenas as afirmativas 1 e 2.",
    "São corretas apenas as afirmativas 1 e 3.",
    "São corretas apenas as afirmativas 2 e 3.",
    "São corretas as afirmativas 1, 2 e 3."
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>É correta apenas a afirmativa 2.</strong><br><br>\nExplicação:<br>\n- A **afirmativa 1** está incorreta porque o operador de igualdade estrita (<code>===</code>) em JavaScript verifica tanto o valor quanto o tipo. Assim, <code>null</code> e <code>undefined</code> são considerados diferentes ao usá-lo. O operador de igualdade simples (<code>==</code>) é o que trata <code>null</code> e <code>undefined</code> como iguais.<br>\n- A **afirmativa 2** está correta. O método <code>toString()</code> converte um número em uma string com a base padrão 10, a menos que seja especificado um valor diferente.<br>\n- A **afirmativa 3** está incorreta. Embora JavaScript seja sensível a maiúsculas e minúsculas, a quantidade de espaços em branco, em geral, não altera o sentido do código, pois JavaScript ignora espaços em branco extras entre elementos na maioria dos casos.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#whitespace"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise as afirmativas abaixo sobre JavaScript:<br><br>\n1. Funções são objetos especiais em JavaScript. Quando se cria uma função, portanto está-se criando um objeto do tipo <code>function</code>.<br>\n2. Como já são objetos, as funções JavaScript não podem instanciar novos objetos, tampouco empregar o construtor <code>new</code>.<br>\n3. Como objetos, as funções JavaScript possuem métodos e propriedades que podem ser recuperados/consultados e invocados, respectivamente.<br><br>\nAssinale a alternativa que indica todas as afirmativas corretas.",
  "type": "radio",
  "options": [
    "É correta apenas a afirmativa 3.",
    "São corretas apenas as afirmativas 1 e 2.",
    "São corretas apenas as afirmativas 1 e 3.",
    "São corretas apenas as afirmativas 2 e 3.",
    "São corretas as afirmativas 1, 2 e 3."
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é <strong>São corretas apenas as afirmativas 1 e 3.</strong><br><br>\nExplicação:<br>\n- A **afirmativa 1** está correta. Em JavaScript, funções são objetos do tipo <code>Function</code>, o que significa que ao declarar uma função, cria-se um objeto.<br>\n- A **afirmativa 2** está incorreta. Embora funções sejam objetos, elas podem instanciar novos objetos com o operador <code>new</code>. Funções JavaScript podem funcionar como construtores e criar novas instâncias quando o operador <code>new</code> é utilizado.<br>\n- A **afirmativa 3** está correta. Funções, sendo objetos, possuem propriedades e métodos como <code>name</code>, <code>length</code>, e métodos como <code>apply()</code> e <code>call()</code>, que podem ser recuperados ou invocados.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Qual a função do método de variáveis que contém um número <code>toFixed()</code> em JavaScript?",
  "type": "radio",
  "options": [
    "Delimitar a quantidade de casas decimais do número objeto da invocação da função pelo número fornecido como parâmetro do método.",
    "Converter um número para uma string com o número de casas decimais especificado no parâmetro de chamada do método.",
    "Delimitar a quantidade de algarismos do número pela quantidade especificada no parâmetro da chamada do método.",
    "Converter um número para uma string utilizando como base de conversão um array fornecido como parâmetro que contém a correspondência entre caracteres alfanuméricos e algarismos arábicos.",
    "Congelar o valor contido na variável de modo que ele não possa ser alterado a não ser mediante a invocação do método de descongelamento."
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é **Converter um número para uma string com o número de casas decimais especificado no parâmetro de chamada do método.**<br><br>\nExplicação:<br>\n- O método <code>toFixed()</code> é utilizado em variáveis numéricas para converter o valor em uma string formatada, exibindo um número fixo de casas decimais. O parâmetro passado a <code>toFixed()</code> indica a quantidade de casas decimais na string resultante.<br>\n- **Exemplo**: <code>(5.6789).toFixed(2)</code> retorna a string <code>'5.68'</code>, com duas casas decimais.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Uma caixa de alerta é um recurso muito utilizado em JavaScript porque com ele é possível criar caixas de diálogos que aparecem na tela do usuário. A sintaxe correta para exibir uma caixa de diálogo de alerta em JavaScript com o texto “Bem-vindo ao IFPA!” é:",
  "type": "radio",
  "options": [
    "alert(\"Bem-vindo ao IFPA!\")",
    "dialog(\"Bem-vindo ao IFPA!\")",
    "promptBox(\"Bem-vindo ao IFPA!\")",
    "messageBox(\"Bem-vindo ao IFPA!\")"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é **alert(\"Bem-vindo ao IFPA!\")**.<br><br>\nExplicação:<br>\n- Em JavaScript, o método <code>alert()</code> exibe uma caixa de diálogo de alerta com uma mensagem e um botão OK. Nenhum dos outros métodos listados (como <code>dialog()</code>, <code>promptBox()</code>, ou <code>messageBox()</code>) é uma função padrão do JavaScript para criar caixas de alerta.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/alert"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise o trecho de código na linguagem Javascript abaixo e assinale a alternativa INCORRETA a seguir sobre observações teóricas a respeito desse trecho.<br><br>\n\nlet x = document.getElementById(\"myEl\").value;\n\ntry {\n\nif (isNaN(x)) {\n\nthrow \"NOT A NUMBER\";\n\n}\n\n} catch (err) {\n\nconsole.log(\"CATCH \", err);\n\n} finally {\n\nconsole.log(\"FINALLY\");\n\n}\n```\n\nAlternativas:",
  "type": "radio",
  "options": [
    "try/catch/finally é um mecanismo de tratamento de exceções em Javascript.",
    "O bloco “catch” só é executado se houver uma exceção disparada no bloco “try”.",
    "O bloco “finally” só é executado se houver uma exceção disparada no bloco “try”.",
    "A execução de alguma linha dentro do bloco “try” pode gerar uma exceção.",
    "Os blocos “catch” e “finally” são opcionais, mas o bloco “try” deve estar acompanhado de pelo menos um desses blocos."
  ],
  "correctAnswer": 2,
  "justification": "A resposta INCORRETA é **O bloco “finally” só é executado se houver uma exceção disparada no bloco “try”**.<br><br>\nExplicação:<br>\n- O bloco <code>finally</code> será executado independentemente de ocorrer uma exceção no bloco <code>try</code>. Ele é utilizado para executar uma lógica que deve ocorrer após a execução do <code>try</code> e <code>catch</code>, como liberar recursos ou limpar estados, independentemente de o código ter lançado uma exceção.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Em relação aos eventos e/ou ações que podem ser disparados no navegador por meio da linguagem JavaScript, analise as assertivas abaixo:<br><br>\n\nI. <code>onblur</code> ocorre quando um elemento perde o foco da aplicação.<br>\n\nII. <code>onfocus</code> acontece quando um elemento da página ganha o foco.<br>\n\nIII. <code>onresizewindows</code> decorre ao redimensionar a janela do navegador.<br>\n\nIV. <code>onsubmit</code> é efetuado quando aperta-se sobre o botão de enviar o formulário.<br>\n\nV. <code>onalteration</code> é processado ao mudar-se o estado de um elemento.<br><br>\nQuais estão corretas?",
  "type": "radio",
  "options": [
    "Apenas II e III.",
    "Apenas III e V.",
    "Apenas I, II e IV.",
    "Apenas I, II e V.",
    "Apenas II, IV e V."
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é **Apenas I, II e IV**.<br><br>\nExplicação:<br>\n- **I. onblur**: Correto, o evento <code>onblur</code> é acionado quando um elemento perde o foco.<br>\n- **II. onfocus**: Correto, <code>onfocus</code> ocorre quando um elemento da página recebe o foco.<br>\n- **III. onresizewindows**: Incorreto. O evento correto é <code>onresize</code>, sem 'windows'.<br>\n- **IV. onsubmit**: Correto, <code>onsubmit</code> é acionado ao enviar um formulário.<br>\n- **V. onalteration**: Incorreto. Não existe o evento <code>onalteration</code>; o evento que monitoraria alterações seria <code>onchange</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event",
    "https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event",
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event",
    "https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event",
    "https://developer.mozilla.org/en-US/docs/Web/API/Element/change_event"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise o trecho de código abaixo, em linguagem JavaScript e HTML, e assinale a alternativa que contempla a mensagem apresentada ao usuário quando clicar no elemento <code>button</code> de <code>id='botao'</code>.<br><br>\n\n&lt;script&gt;<br>\nfunction mostraMensagem(){<br>\n&nbsp;&nbsp;var mensagem = document.getElementById(\"mensagem\");<br>\n&nbsp;&nbsp;if(mensagem === \"\"){<br>\n&nbsp;&nbsp;&nbsp;&nbsp;alert(\"Campo vazio\");<br>\n&nbsp;&nbsp;}else{<br>\n&nbsp;&nbsp;&nbsp;&nbsp;alert(\"Você digitou \" + mensagem);<br>\n&nbsp;&nbsp;}<br>\n}<br>\n&lt;/script&gt;<br><br>\n\n&lt;html&gt;<br>\n&lt;body&gt;<br>\n&lt;input type=\"text\" value=\"brasil\" id=\"mensagem\"/&gt;&lt;br&gt;<br>\n&lt;input type=\"button\" id=\"botao\" onclick=\"mostraMensagem()\" value=\"clique\"/&gt;<br>\n&lt;/body&gt;<br>\n&lt;/html&gt;",
  "type": "radio",
  "options": [
    "Você digitou brasil.",
    "Campo vazio.",
    "Você digitou [object HTMLInputElement].",
    "Você digitou.",
    "Não é apresentada nenhuma mensagem ao usuário."
  ],
  "correctAnswer": 2,
  "justification": "A resposta correta é **Você digitou [object HTMLInputElement]**.<br><br>\nExplicação:<br>\n- O código armazena o elemento HTML em <code>mensagem</code> usando <code>document.getElementById(\"mensagem\")</code>. Isso retorna o elemento <code>&lt;input&gt;</code> como um objeto HTMLInputElement, e não o valor inserido.<br>\n- O correto seria usar <code>mensagem.value</code> para acessar o conteúdo da entrada de texto. Assim, o código como está exibirá o texto <code>Você digitou [object HTMLInputElement]</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById",
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Analise o trecho de código abaixo, em linguagem JavaScript.<br><br>\n\n&lt;script&gt;<br>\nvar numero = 10.5;<br>\ndocument.write(parseInt(numero));<br>\nnumero = \"teste\";<br>\ndocument.write(parseInt(numero));<br>\n&lt;/script&gt;<br><br>\n\nQual a saída do programa na tela do Browser ao executar este script?",
  "type": "radio",
  "options": [
    "10.5teste",
    "10.5",
    "10.5error",
    "10NaN",
    "10teste"
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é **10NaN**.<br><br>\nExplicação:<br>\n- A função <code>parseInt(numero)</code> tenta converter o valor da variável <code>numero</code> em um inteiro.<br>\n- Quando <code>numero</code> é <code>10.5</code>, <code>parseInt</code> converte-o para o inteiro <code>10</code> e exibe <code>10</code> no browser.<br>\n- Em seguida, <code>numero</code> é redefinido como a string <code>\"teste\"</code>. <code>parseInt</code> não consegue converter essa string em um número válido e retorna <code>NaN</code>.<br>\n- Assim, a saída final no browser será <code>10NaN</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Considere a seguinte linha de código escrita na linguagem Javascript.<br><br>\n\n<code>let x = 5 * 2 >> 1 + 2;</code><br><br>\n\nÉ correto afirmar que o valor da variável <code>x</code> após essa execução será:",
  "type": "radio",
  "options": [
    "0",
    "1",
    "5",
    "7",
    "8"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é **1**.<br><br>\nExplicação:<br>\n- A expressão <code>5 * 2</code> é avaliada primeiro, resultando em <code>10</code>.<br>\n- Em seguida, a expressão <code>1 + 2</code> é avaliada, resultando em <code>3</code>.<br>\n- Agora, o operador de deslocamento de bits à direita é aplicado: <code>10 >> 3</code>.<br>\n- A operação <code>10 >> 3</code> desloca o valor <code>10</code> (representado em binário como <code>1010</code>) três bits para a direita, resultando em <code>1</code>.<br>\nPortanto, o valor final de <code>x</code> será <code>1</code>.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Muitos usuários na Internet desabilitam o JavaScript em seus navegadores. Uma boa prática em programação web consiste em exibir uma mensagem amigável ao usuário quando o JavaScript estiver desabilitado, possivelmente informando que ele se faz necessário para o correto funcionamento da página. Tal exibição pode ser feita pela tag HTML",
  "type": "radio",
  "options": [
    "&ltdisabledscript>",
    "&ltnoscript>",
    "&ltdisabledjavascript>",
    "&ltwhennoscript>",
    "&ltwhennojavascript>"
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é **&ltnoscript>**.<br><br>Explicação:<br>- A tag `<noscript>` é usada em HTML para exibir conteúdo alternativo caso o JavaScript esteja desativado no navegador do usuário. Qualquer conteúdo dentro dessa tag só será exibido se o JavaScript estiver desabilitado.<br><br>Exemplo de uso:<br><pre><code>&lt;noscript&gt;\n  &lt;p&gt;O JavaScript está desativado no seu navegador. Ative-o para aproveitar todas as funcionalidades da página.&lt;/p&gt;\n&lt;/noscript&gt;</code></pre>",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Selecione a alternativa que mostra a saída do seguinte código em JavaScript, uma linguagem de programação amplamente utilizada em desenvolvimento web, especialmente em aplicações front-end.\n\n<pre><code>function a(b) { \n  if (b < 2) { \n    return b; \n  } else { \n    return a(b - 1) + a(b - 3); \n  } \n} \nconsole.log(a(8));\n</code></pre>\n",
  "type": "radio",
  "options": [
    "1",
    "2",
    "3",
    "21",
    "55"
  ],
  "correctAnswer": 2,
  "justification": "A função `a(b)` é recursiva e calcula o valor com base nas chamadas `a(b - 1)` e `a(b - 3)`. Quando `a(8)` é calculado seguindo as chamadas recursivas até os casos de base, o resultado final é `3`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
    "https://developer.mozilla.org/pt-BR/docs/Glossary/Recursion",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Console/log"
  ]
},
{
  "question": "Analise o código JavaScript abaixo.<br><br>\n\n<pre><code>\nlet nome = \"Universidade Federal do Rio Grande do Norte \";\nlet complemento = \"64 anos de historia.\";\nlet mensagem = nome + complemento;\nlet texto = '';\n\nlet cidades = ['Natal', 'Caico'];\ncidades.push('Currais Novos');\ncidades.unshift('Macaíba');\ncidades.unshift('Santa Cruz');\n\nlet indice = complemento.length;\ntexto = mensagem[indice - 5] + \"*\";\n\nif (nome.includes(64)) {\n    texto = texto + mensagem.indexOf('Rio') + \"*\";\n} else {\n    texto = texto + mensagem.indexOf('Norte') + \"*\";\n}\n\ntexto = texto + complemento.slice(3,7) + \"*\";\ncidades.shift();\ntexto = texto + cidades[cidades.length - cidades.indexOf(\"Caico\")];\nconsole.log(texto);\n</code></pre><br><br>\n\nAo fim da execução desse código, o resultado exibido será:",
  "type": "radio",
  "options": [
    "d*38*anos*Caico",
    "r*24*anos*Natal",
    "r*24*stor*Natal",
    "d*38*stor*Caico"
  ],
  "correctAnswer": 0,
  "justification": "A resposta correta é <strong>A) d*38*anos*Caico</strong>.<br><br>\nExplicação:<br>\n- O código concatena várias partes do texto e realiza operações no array `cidades` para construir o valor final de `texto`.<br>\n1. Inicialmente, `texto` recebe a letra no índice `indice - 5` da variável `mensagem`, que é `d`.<br>\n2. Como `64` não está presente em `nome`, o código executa o bloco `else`, onde adiciona o índice da palavra \"Norte\" em `mensagem`, resultando em `38`.<br>\n3. Em seguida, `texto` adiciona a substring `anos` extraída de `complemento`.<br>\n4. Após a remoção de 'Santa Cruz' de `cidades`, o código localiza `Caico` no array, utilizando um cálculo de índice para adicionar `Caico` ao final de `texto`.<br>\n- O valor final exibido por `console.log(texto)` é `d*38*anos*Caico`.",
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Os tipos de dados suportados pela linguagem ECMAScript (versão 2021) são:",
  "type": "radio",
  "options": [
    "Null, Boolean, Binary, Symbol, Real e Integers.",
    "Null, Boolean, Varchar, Symbol, Real, Integers e Object.",
    "Undefined, Null, Boolean, String, Symbol, Number, BigInt e Object.",
    "Undefined, Null, Boolean, Varchar, Symbol, BigInt, Real, Money e Object.",
    "Complex, Null, Boolean, Binary, Varchar, LongInt, Real, Money, Object e Polimorphic."
  ],
  "correctAnswer": 2,
  "justification": "Os tipos de dados suportados pelo ECMAScript 2021 incluem Undefined, Null, Boolean, String, Symbol, Number, BigInt e Object. Essa alternativa representa corretamente os tipos de dados da linguagem.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": "Atualmente sob responsabilidade da ECMA International, o JavaScript (ECMA 6) utiliza o padrão de arrow function para a definição de funções, aproximando um pouco mais a linguagem do paradigma funcional.\n\nConsiderando uma função para a multiplicação de dois valores, na forma recursiva, sua implementação no padrão arrow function é:",
  "type": "radio",
  "options": [
    "let fnx = (a,b) => (b>1) ? a * fnx(a, b-1) : a;",
    "let fnx = (a,b) => (b>1) ? b + fnx(a, b-1) : a;",
    "let fnx = (a,b) => (a>1) ? b * fnx(a-1, b) : a;",
    "let fnx = (a,b) => (b>1) ? a + fnx(a, b-1) : a;",
    "let fnx = (a,b) => (a>1) ? b * fnx(a, b) : a-1;"
  ],
  "correctAnswer": 0,
  "justification": "A alternativa correta é a que representa uma função recursiva para multiplicação. A expressão `(b>1) ? a * fnx(a, b-1) : a;` multiplica o valor `a` por `fnx(a, b-1)`, reduzindo `b` até o caso base.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions"
  ]
},
{
  "question": "Analise o seguinte trecho de código em JavaScript:\n\n<pre><code>let a = 10;\nlet b = 5;\nlet c = 2;\n\nlet r1 = a + b - c;\nlet r2 = a * b / c;\nlet r3 = (a + b) * c;\n\nlet r4 = Math.pow(a, c);\n\nlet rfinal = r1 * r2 + r3 + r4;\n\nconsole.log(rfinal);\n</code></pre>\n\nApós a execução desse trecho, qual será o resultado da variável “rfinal”?",
  "type": "radio",
  "options": [
    "455.",
    "445.",
    "375.",
    "330.",
    "505."
  ],
  "correctAnswer": 0,
  "justification": "Para calcular `rfinal`, precisamos avaliar cada expressão:\n- `r1 = a + b - c` resulta em `10 + 5 - 2 = 13`.\n- `r2 = a * b / c` resulta em `10 * 5 / 2 = 25`.\n- `r3 = (a + b) * c` resulta em `(10 + 5) * 2 = 30`.\n- `r4 = Math.pow(a, c)` resulta em `10^2 = 100`.\n\nAssim, `rfinal = r1 * r2 + r3 + r4 = 13 * 25 + 30 + 100 = 455`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators"
  ]
},
{
  "question": "Tendo em vista a Linguagem de Programação Javascript, assinale a alternativa que descreve corretamente a diferença entre o uso de '==' e '==='.",
  "type": "radio",
  "options": [
    "Ambos os operadores comparam igualdade de valores e tipos de dados.",
    "O operador '==' compara apenas valores, enquanto o operador '===' compara valores e tipos de dados.",
    "O operador '===' compara apenas valores, enquanto o operador '==' compara valores e tipos de dados.",
    "O operador '==' é usado para comparações numéricas, enquanto o operador '===' é usado para comparações de strings.",
    "Não há diferença entre os dois operadores em Javascript."
  ],
  "correctAnswer": 1,
  "justification": "Em JavaScript, o operador '==' compara apenas valores, fazendo coerção de tipos quando necessário, enquanto o operador '===' compara tanto valores quanto tipos de dados, sem coerção de tipos.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness"
  ]
},
{
  "question": "Analise o código Javascript abaixo e assinale a alternativa com a sequência de saída de dados do processamento deste código.\n\n<pre><code>const dados = ['A', 'E', 'I', 'O', 'U'];\n\n\ndados.push('A');\ndados.shift();\ndados.unshift('U');\n\n \nfor (let i = 0; i < dados.length; i++) {\n  console.log(dados[i]);\n}\n</code></pre>\n",
  "type": "radio",
  "options": [
    "U, E, I, O, A",
    "A, A, E, I, O",
    "U, E, I, O, U, A",
    "A, E, I, O, A, U",
    "U, A, E, I, O, U, A"
  ],
  "correctAnswer": 2,
  "justification": "O código começa com o array `dados = ['A', 'E', 'I', 'O', 'U']`. Em seguida:\n- `dados.push('A')` adiciona 'A' ao final, resultando em `['A', 'E', 'I', 'O', 'U', 'A']`.\n- `dados.shift()` remove o primeiro elemento ('A'), resultando em `['E', 'I', 'O', 'U', 'A']`.\n- `dados.unshift('U')` adiciona 'U' ao início, resultando em `['U', 'E', 'I', 'O', 'U', 'A']`.\n\nPortanto, a sequência de saída é: `U, E, I, O, U, A`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift"
  ]
},
{
  "question": "Analise o código em linguagem de programação Javascript abaixo e assinale a alternativa com as saídas deste código na sequência correta.\n\n<pre><code>var x = 20;\n\nfunction multiplicar() {\n  var x = 5;\n  x *= 2;\n  console.log(x);\n}\n\nconsole.log(x);\nmultiplicar();\n</code></pre>\n",
  "type": "radio",
  "options": [
    "10, 20",
    "20, 10",
    "10, 10",
    "20, 20",
    "20, Undefined"
  ],
  "correctAnswer": 1,
  "justification": "O primeiro `console.log(x)` exibe `20` porque `x` é declarado no escopo global com o valor `20`. Dentro da função `multiplicar`, uma nova variável `x` local é declarada com o valor `5`, que é multiplicado por `2`, resultando em `10`. Então `console.log(x)` dentro da função exibe `10`. Portanto, a sequência correta de saída é `20, 10`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Scope"
  ]
},
{
  "question": "Analise o código em linguagem de programação Javascript abaixo e assinale a alternativa que apresenta como seria possível acessar o dado de idade do terceiro estudante da lista da turma B.\n\n<pre><code>const dados = [\n       {\n          id: 1,\n          titulo: 'Turma A',\n         estudantes: [\n           { nome: 'João', idade: 20 },\n           { name: 'Maria', idade: 22 },\n           { name: 'Pedro', idade: 21 }\n          ]\n      },\n     {\n         id: 2,\n         titulo: 'Turma B',\n        estudantes: [\n          { nome: 'Joana', idade: 25 },\n          { name: 'José', idade: 21 },\n          { name: 'Lucas', idade: 26 },\n          { name: 'Lucia', idade: 28 }\n        ]\n    }\n];\n</code></pre>\n",
  "type": "radio",
  "options": [
    "dados[1].estudantes[2].getIdade()",
    "dados[1].estudantes[2].idade",
    "dados[2].estudantes[3].idade",
    "dados[2].estudantes.idade[3]",
    "dados[1].estudantes.idade[2]"
  ],
  "correctAnswer": 1,
  "justification": "Para acessar a idade do terceiro estudante da lista na turma B, usamos `dados[1].estudantes[2].idade`. A lista `dados` tem duas entradas, e a turma B está na posição `1` do array. Em `estudantes[2]`, acessamos o terceiro estudante, e o campo `idade` fornece a idade dele.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Property_accessors"
  ]
},
{
  "question": "Considerando o seguinte script em JavaScript:\n\n<pre><code>let valor_1 = 5;\n\nconst valor_2 = 3;\n\nvalor_1 += valor_2;\n\nconsole.log(valor_1);\n</code></pre>\n\nQual resultado deve ser impresso ao executar o programa?",
  "type": "radio",
  "options": [
    "8",
    "3",
    "Erro de compilação",
    "5",
    "\"Console.log(valor_1)\""
  ],
  "correctAnswer": 0,
  "justification": "O código define `valor_1` como 5 e `valor_2` como 3. A operação `valor_1 += valor_2` adiciona o valor de `valor_2` a `valor_1`, resultando em `8`. Portanto, a saída de `console.log(valor_1)` é `8`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const"
  ]
},
{
  "question": "Uma forma de retornar, por meio da linguagem JavaScript, o conteúdo de texto de um elemento, incluindo todo o espaçamento e tags HTML internas, é utilizar a propriedade:",
  "type": "radio",
  "options": [
    "innerHTML",
    "innerText",
    "textContent",
    "textElement",
    "getContentHTML"
  ],
  "correctAnswer": 0,
  "justification": "A propriedade `innerHTML` retorna o conteúdo de um elemento como uma string, incluindo todas as tags HTML internas e o espaçamento. Portanto, é a opção correta para obter o HTML completo do conteúdo de um elemento.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/innerText"
  ]
},
{
  "question": "Analise o documento HTML abaixo. Nele consta um trecho de código escrito na linguagem JavaScript.\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;body&gt;\n&lt;script&gt;\n        alert(typeof 1.99 + '-' + typeof 'p' + '-' + typeof true + '-' + typeof null + '-' + typeof P);\n&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\nAo abrir o documento em um navegador, o que será exibido na caixa de alerta que será aberta?",
  "type": "radio",
  "options": [
    "decimal-object-undefined-null-string",
    "number-string-boolean-object-undefined",
    "number-character-undefined-object-null",
    "undefined-string-1-null-string",
    "decimal-character-null-0-undefined"
  ],
  "correctAnswer": 1,
  "justification": "O código utiliza o operador `typeof` para obter os tipos dos valores fornecidos:\n- `typeof 1.99` retorna 'number'.\n- `typeof 'p'` retorna 'string'.\n- `typeof true` retorna 'boolean'.\n- `typeof null` retorna 'object' (comportamento conhecido em JavaScript).\n- `typeof P` retorna 'undefined', pois `P` não está definido.\n\nPortanto, a saída correta é 'number-string-boolean-object-undefined'.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures"
  ]
},
{
  "question": "Analise o seguinte trecho de código em JavaScript:\n\n<pre><code>function myFunction(parameter) {\n\n  const a = parameter.map(p => {\n\n    return p.value\n\n})\n\nconst b = a.reduce((c, d) => {\n\n      return c *= d * 3\n\n }, 1)\n\n return b\n\n}\n\nconsole.log(myFunction([{ name: 'a', value: 3 }, { name : 'b', value: 18 }]))\n</code></pre>\n\nO que será impresso na saída padrão?",
  "type": "radio",
  "options": [
    "9",
    "54",
    "81",
    "162",
    "486"
  ],
  "correctAnswer": 3,
  "justification": "A função `myFunction` recebe um array de objetos, mapeia cada objeto para o valor de `value`, e então reduz os valores multiplicando-os entre si, cada um multiplicado por 3. Com os valores `[3, 18]`, o cálculo é `1 * (3 * 3) * (18 * 3) = 162`. Portanto, a saída correta é `162`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  ]
},
{
  "question": "No JavaScript, a execução de código assíncrono pode ser gerenciada de várias maneiras. A respeito de como lidar com a execução assíncrona de código JavaScript, assinale a alternativa INCORRETA.",
  "type": "radio",
  "options": [
    "Utilizar callbacks, em que uma função é passada como argumento para outra função e é chamada quando a execução assíncrona é concluída.",
    "Utilizar Promises, que representam o resultado de uma operação assíncrona que pode ser concluída no futuro.",
    "Utilizar async/await, que permite escrever código assíncrono de maneira síncrona, facilitando a legibilidade do código.",
    "Utilizar generators, que permitem a criação de funções cuja execução pode ser suspensa e retomada posteriormente.",
    "Utilizar o operador 'sincrono' para forçar a execução síncrona do código assíncrono."
  ],
  "correctAnswer": 4,
  "justification": "A alternativa INCORRETA é 'Utilizar o operador \"sincrono\" para forçar a execução síncrona do código assíncrono'. Não existe o operador 'sincrono' em JavaScript. As demais alternativas (callbacks, Promises, async/await e generators) são formas válidas de lidar com execução assíncrona em JavaScript.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Generator"
  ]
},
{
  "question": "Acerca do uso do JavaScript, é importante entender também que não dá para exagerar em seu uso, afinal, ele utiliza o processamento _______, só que se for muito pesado pode demorar para carregar.\n\nAssinale a alternativa que preenche corretamente a lacuna.",
  "type": "radio",
  "options": [
    "do dispositivo",
    "do servidor",
    "do provedor",
    "da base de dados",
    "da lógica da linguagem de marcação"
  ],
  "correctAnswer": 0,
  "justification": "O JavaScript é executado no lado do cliente, utilizando o processamento do dispositivo do usuário. Se o código for muito pesado, pode impactar o desempenho do dispositivo e aumentar o tempo de carregamento da página.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
  ]
},
{
  "question": "No contexto da linguagem JavaScript, a função do método querySelector() é",
  "type": "radio",
  "options": [
    "alterar o estilo visual de um elemento HTML.",
    "manipular dados em um banco de dados relacional.",
    "executar uma requisição de rede de forma assíncrona.",
    "capturar um elemento HTML com base em um seletor CSS."
  ],
  "correctAnswer": 3,
  "justification": "O método `querySelector()` em JavaScript é usado para capturar um elemento HTML com base em um seletor CSS. Esse método retorna o primeiro elemento que corresponde ao seletor especificado.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector"
  ]
},
{
  "question": "Analise o trecho de código a seguir escrito em linguagem de programação JavaScript.\n\n<pre><code>1 var y = 0;\n2 var x = 0;\n3 for (var i = 0; i <= 5; i++) {\n4 x += 1;\n5 y += x;\n6 }\n7 console.log(y);\n</code></pre>\n\nQual será o valor da variável y quando o comando da linha 7 for executado?",
  "type": "radio",
  "options": [
    "10",
    "6",
    "8",
    "21",
    "15"
  ],
  "correctAnswer": 3,
  "justification": "A cada iteração do loop, `x` é incrementado em `1` e `y` é incrementado pelo valor atual de `x`. Com `i` variando de `0` a `5`, `x` assume os valores `1, 2, 3, 4, 5, 6`, e `y` acumula `1 + 2 + 3 + 4 + 5 + 6 = 21`. Portanto, o valor de `y` ao final é `21`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for"
  ]
},
{
  "question": "Julgue o item subsequente, a respeito de HTML5, CSS3 e JavaScript.\n\nO código JavaScript a seguir, ao ser executado, apresenta o valor 3 no console de desenvolvimento do navegador web.\n\n<pre><code>&lt;script&gt;\n\nvar cores = [\"vermelho\", \"verde\", \"azul\"];\nconsole.log(cores.length);\n\n&lt;/script&gt;\n</code></pre>\n",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 0,
  "justification": "O código define um array `cores` com três elementos (`'vermelho'`, `'verde'`, e `'azul'`). A propriedade `length` do array retorna o número de elementos no array, que é `3`. Portanto, a afirmação está correta.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length"
  ]
},
{
  "question": "Assinale a alternativa que apresenta uma informação correta relacionada ao uso da palavra reservada `let` para declaração de variáveis na linguagem JavaScript.",
  "type": "radio",
  "options": [
    "Ela é utilizada exclusivamente para declarar variáveis presentes em arquivos JSON.",
    "Uma variável declarada com `let` não pode ser utilizada para processar Strings com expressões regulares.",
    "A palavra reservada `let` fixa o tamanho da variável em 4 bytes.",
    "Caso uma variável seja declarada com a palavra reservada `let`, seu valor não pode ser copiado para outra variável.",
    "Uma variável declarada com essa palavra reservada possui escopo de bloco."
  ],
  "correctAnswer": 4,
  "justification": "A palavra reservada `let` em JavaScript permite a declaração de variáveis com escopo de bloco, ou seja, a variável só estará acessível dentro do bloco `{ }` onde foi declarada. Diferente de `var`, que possui escopo de função, `let` é ideal para evitar problemas de variáveis acessadas fora de seu escopo.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types"
  ]
},
{
  "question": "Um programador deseja fazer uma busca em uma String utilizando Expressões Regulares na linguagem JavaScript. Dada uma String `texto`, ele deseja verificar a posição da String em que são encontrados três dígitos, seguidos de um espaço em branco (whitespace), seguidos de pelo menos um caractere 'a'. Para tal, ele pode escrever a linha de código",
  "type": "radio",
  "options": [
    "let indice = texto.search(/3\\d\\sa*/);",
    "let indice = texto.search(/000\\sa+/);",
    "let indice = texto.search(/000_a*/);",
    "let indice = texto.search(/\\d\\d\\d_a*/);",
    "let indice = texto.search(/\\d\\d\\d\\sa+/);"
  ],
  "correctAnswer": 4,
  "justification": "A expressão regular `/\\d\\d\\d\\sa+/` corresponde a três dígitos (`\\d\\d\\d`), seguidos por um espaço em branco (`\\s`), e pelo menos um caractere 'a' (`a+`). Assim, a alternativa correta é a opção que utiliza `/\\d\\d\\d\\sa+/`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/search"
  ]
},
{
  "question": "São funções nativas da linguagem de programação JavaScript, EXCETO:",
  "type": "radio",
  "options": [
    "trim",
    "slice",
    "len",
    "normalize",
    "repeat"
  ],
  "correctAnswer": 2,
  "justification": "A função `len` não é uma função nativa do JavaScript. As outras opções (`trim`, `slice`, `normalize`, e `repeat`) são métodos nativos disponíveis para strings em JavaScript.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length"
  ]
},
{
  "question": "Analise o código JavaScript a seguir.\n\n<pre><code>function enigma(n) {\n\n  if (n == 0 || n == 1) {\n    return n;\n  } else {\n    return enigma(n - 1) + enigma(n - 2);\n  }\n\n}\n</code></pre>\n\nAssinale o valor retornado para a expressão `enigma(4)`.",
  "type": "radio",
  "options": [
    "21",
    "13",
    "8",
    "5",
    "3"
  ],
  "correctAnswer": 4,
  "justification": "A função `enigma` implementa a sequência de Fibonacci. Para `enigma(4)`, o cálculo é feito da seguinte maneira:\n- `enigma(4) = enigma(3) + enigma(2)`\n- `enigma(3) = enigma(2) + enigma(1)`\n- `enigma(2) = enigma(1) + enigma(0)`\n\nCalculando:\n- `enigma(2) = 1 + 0 = 1`\n- `enigma(3) = 1 + 1 = 2`\n- `enigma(4) = 2 + 1 = 3`\n\nPortanto, o valor retornado para `enigma(4)` é `3`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"
  ]
},
{
  "question": "Os trechos JavaScript a seguir apresentados funcionam corretamente, à exceção de um. Assinale-o.",
  "type": "radio",
  "options": [
    "bomDia = function() { return \"Bom dia!\"; } alert(bomDia());",
    "bomDia = () => { return \"Bom dia!\"; } alert(bomDia());",
    "x = \"!\"; bomDia = (val) => \"Bom dia\" + val; alert(bomDia(x));",
    "bomDia => \"Bom dia!\"; alert(bomDia);",
    "bomDia = (a) => a + \"!\"; alert(bomDia(\"Bom dia\"));"
  ],
  "correctAnswer": 3,
  "justification": "A alternativa `D` (`bomDia => \"Bom dia!\"; alert(bomDia);`) está incorreta. Ela utiliza uma sintaxe inválida para definir uma função com arrow functions, pois `bomDia => \"Bom dia!\";` não é uma expressão completa e causará erro de sintaxe. Para definir uma função com arrow function, a expressão deveria ser algo como `const bomDia = () => \"Bom dia!\";`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  ]
},
{
  "question": "Analise o código JavaScript a seguir.\n\n<pre><code>var x = document.getElementById(\"xpto\");\n\nwhile (x.hasChildNodes()) {\n\n  x.removeChild(x.childNodes[0]);\n\n}\n</code></pre>\n\nO efeito da execução desse trecho é",
  "type": "radio",
  "options": [
    "a remoção de todos os elementos subordinados ao elemento cujo id é “xpto”.",
    "um erro de execução, pois “xtpo” é usado equivocadamente onde deveria haver uma referência numérica.",
    "um erro de execução, pois o índice 0 não se aplica no HTML.",
    "um erro de sintaxe, pois a declaração da variável “x” deveria explicitar o tipo element.",
    "um erro de sintaxe, pois o método removeChild é inválido."
  ],
  "correctAnswer": 0,
  "justification": "O código seleciona o elemento com id `xpto` e usa um loop `while` para remover todos os elementos filhos desse elemento. A expressão `x.removeChild(x.childNodes[0]);` remove cada nó filho do elemento `x` até que `x` não tenha mais filhos. Portanto, a execução remove todos os elementos subordinados ao elemento com id `xpto`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Node/hasChildNodes",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild"
  ]
},
{
  "question": "Analise o código JavaScript exibido a seguir.\n\n<pre><code>const str=\"ABCDEFGHIJ\";\n\nlet xpto = str.split(\"\");\n\nxpto.pop();\n\nalert(xpto);\n\nx = xpto.push(\"$\");\n\nalert(x);\n</code></pre>\n\nAssinale os valores exibidos pelos comandos alert, na ordem.",
  "type": "radio",
  "options": [
    ",$",
    "A,B,C,D,E,F,G,H,I\n$,A,B,C,D,E,F,G,H,I",
    "A,B,C,D,E,F,G,H,I,$\n10",
    "ABCDEFGHI\nABCDEFGHI$",
    "B,C,D,E,F,G,H,I\n0"
  ],
  "correctAnswer": 1,
  "justification": "O código realiza as seguintes operações:\n1. `str.split(\"\")` converte a string em um array de caracteres.\n2. `xpto.pop()` remove o último caractere, deixando `xpto` como `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']`.\n3. O primeiro `alert(xpto)` exibe `A,B,C,D,E,F,G,H,I`.\n4. `xpto.push(\"$\")` adiciona `$` ao final do array e retorna o novo comprimento do array, que é `10`.\n5. O segundo `alert(x)` exibe `10`.\n\nPortanto, os valores exibidos são `A,B,C,D,E,F,G,H,I` e `10`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split"
  ]
},
{
  "question": "Analise o código JavaScript exibido a seguir.\n\n<pre><code>const str=\"ABCDEFGHIJ\";\n\nlet xpto = str.split(\"\");\n\nxpto.pop();\n\nalert(xpto);\n\nx = xpto.push(\"$\");\n\nalert(x);\n</code></pre>\n\nAssinale os valores exibidos pelos comandos alert, na ordem.",
  "type": "radio",
  "options": [
    "A,B,C,D,E,F,G,H,I\n10",
    "A,B,C,D,E,F,G,H,I\n$,A,B,C,D,E,F,G,H,I",
    "A,B,C,D,E,F,G,H,I,$\n10",
    "ABCDEFGHI\nABCDEFGHI$",
    "B,C,D,E,F,G,H,I\n0"
  ],
  "correctAnswer": 0,
  "justification": "O código realiza as seguintes operações:\n1. `str.split(\"\")` converte a string em um array de caracteres.\n2. `xpto.pop()` remove o último caractere, resultando no array `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']`.\n3. O primeiro `alert(xpto)` exibe `A,B,C,D,E,F,G,H,I`.\n4. `xpto.push(\"$\")` adiciona `$` ao final do array e retorna o novo comprimento do array, que é `10`.\n5. O segundo `alert(x)` exibe `10`.\n\nPortanto, os valores exibidos são `A,B,C,D,E,F,G,H,I` e `10`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split"
  ]
},
{
  "question": "Na linguagem JavaScript, é fixado um valor máximo seguro para uma variável do tipo inteiro. Essa propriedade estática tem como nome `Number.MAX_SAFE_INTEGER` e o seu valor é:",
  "type": "radio",
  "options": [
    "(2^50) - 1",
    "(2^53) - 1",
    "(2^47) - 1",
    "(2^56) - 1",
    "(2^44) - 1"
  ],
  "correctAnswer": 1,
  "justification": "Em JavaScript, o valor máximo seguro para uma variável do tipo inteiro é representado pela propriedade `Number.MAX_SAFE_INTEGER`, que tem o valor `(2^53) - 1`, ou seja, `9007199254740991`. Esse limite é definido para evitar imprecisões de arredondamento em operações com inteiros grandes.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"
  ]
},
{
  "question": "Considere o seguinte código JavaScript, o qual utiliza Ajax para chamar uma página JSP.\n\n<pre><code>function loadDoc() {\n\n  const xhttp = new XMLHttpRequest();\n\n  xhttp.onload = function() {\n\n    document.getElementById(\"texto\").innerHTML =\n\n    this.responseText;\n\n  }\n\n  xhttp.open(\"GET\", \"mypage.jsp\", true);\n\n  xhttp.send();\n\n}\n</code></pre>\n\nA requisição ao servidor, que ocorre de forma assíncrona, é efetivamente disparada",
  "type": "radio",
  "options": [
    "na instanciação de xhttp.",
    "pela chamada ao método open.",
    "pela chamada ao método send.",
    "após a função atribuída à propriedade onload ser chamada como callback.",
    "pela chamada ao método getElementById."
  ],
  "correctAnswer": 2,
  "justification": "Em uma requisição Ajax com `XMLHttpRequest`, a chamada ao método `send()` é o que dispara efetivamente a requisição ao servidor. O método `open()` apenas configura a requisição (método, URL, e sincronia), mas a conexão é iniciada ao chamar `send()`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/send",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest/open"
  ]
},
{
  "question": "A respeito dos métodos de acesso a arquivos e das estruturas de dados conhecidas como árvores, julgue o item.\n\nO `FileReader()` é um método, usado em JavaScript, especialmente útil para a leitura de arquivos em navegadores da web.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 0,
  "justification": "O `FileReader` é uma API nativa do JavaScript que permite a leitura de arquivos em navegadores da web. Ela é comumente utilizada para ler o conteúdo de arquivos locais, como imagens e documentos, após o usuário selecioná-los através de um input de arquivo.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader"
  ]
},
{
  "question": "A respeito dos métodos de acesso a arquivos e das estruturas de dados conhecidas como árvores, julgue o item.\n\nO método `read()` é um método de acesso a arquivos, o qual é utilizado, exclusivamente, pela linguagem JavaScript e permite a leitura de uma quantidade específica de bytes ou de caracteres do arquivo.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "O método `read()` não é exclusivo da linguagem JavaScript. Na verdade, JavaScript não possui um método `read()` nativo para manipulação direta de arquivos; a leitura de arquivos em navegadores é feita por meio de APIs como `FileReader`. Em outras linguagens, como Python, existe um método `read()` para manipulação de arquivos, mas em JavaScript o método `read()` não é utilizado de forma exclusiva para leitura de bytes ou caracteres.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/FileReader",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/File_System_Access_API"
  ]
},
{
  "question": "Considere a seguinte linha de código escrita na linguagem JavaScript:\n\n<pre><code>let x = 10 >> 1</code></pre>\n\nÉ correto afirmar que o valor da variável x, após a execução dessa linha, será:",
  "type": "radio",
  "options": [
    "true",
    "false",
    "5",
    "10",
    "20"
  ],
  "correctAnswer": 2,
  "justification": "O operador `>>` em JavaScript é o operador de deslocamento à direita (right shift). Ele desloca os bits do número à direita pelo número de posições especificado. No caso de `10 >> 1`, o número `10` em binário (`1010`) é deslocado uma posição à direita, resultando em `5`. Portanto, o valor da variável `x` será `5`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Right_shift"
  ]
},
{
  "question": "Julgue o item abaixo, relacionado com JavaScript, Web Services e análise estatística de código-fonte.\n\nPara garantir uma correta compilação de um código escrito em JavaScript, é necessário que as variáveis sejam definidas e inicializadas antes de seu uso no código.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "Em JavaScript, as variáveis devem ser definidas antes de serem usadas, mas não necessariamente inicializadas. É possível declarar uma variável sem inicializá-la, e o JavaScript atribuirá automaticamente o valor `undefined`. Embora boas práticas recomendem inicializar variáveis antes de usá-las, a inicialização não é obrigatória para a 'compilação' ou execução do código.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types"
  ]
},
{
  "question": "Julgue o item a seguir, relativo ao Microsoft Word e ao Microsoft Excel avançado.\n\nJavaScript é a linguagem de programação utilizada para escrever macros no Microsoft Excel.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "No Microsoft Excel, a linguagem de programação tradicionalmente utilizada para escrever macros é o VBA (Visual Basic for Applications), e não JavaScript. No entanto, em versões mais recentes e com o uso de Office Scripts no Excel online, o JavaScript pode ser usado para automatizações, mas ele não substitui VBA para macros no Excel desktop.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://support.microsoft.com/en-us/office/overview-of-office-scripts-in-excel-60dff7fa-31d4-4389-95fb-51e0eeddb7c3",
    "https://docs.microsoft.com/en-us/office/vba/api/overview/excel"
  ]
},
{
  "question": "Considerando a linguagem de programação JavaScript, julgue o item a seguir.\n\nCaso o código a seguir seja executado, o `console.log()` mostrará que a variável `inicio` tem valor igual a 1.\n\n<pre><code>const inicio = 0;\nconst fim = 10;\nif (inicio >= fim) {\n  inicio = fim;\n} else {\n  inicio++;\n}\nconsole.log(inicio);\n</code></pre>\n",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "O código tentará incrementar a variável `inicio`, mas como `inicio` foi declarada como `const`, ela não pode ser modificada. Isso causará um erro de execução quando o código tentar executar `inicio++`, pois uma constante não pode ser alterada após a inicialização. Logo, o `console.log()` não será executado, e a afirmação está incorreta.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment"
  ]
},
{
  "question": "Considere o seguinte trecho de código em JavaScript (ES6):\n\n<pre><code>1    let v1 = true && false\n\n2    let v2 = (!\"javascript\" ? false : true)\n\n3    let v3 = false || true\n\n4    let v4 = !false\n\n5    let v5 = [false, true, true].reduce((resultado, x) => resultado && x, true)\n\n6    console.log(`${v1}, ${v2}, ${v3}, ${v4}, ${v5}.`)\n</code></pre>\n\nApós o processamento do trecho de código acima, a exibição da mensagem no console será:",
  "type": "radio",
  "options": [
    "false, false, true, false, true.",
    "false, false, true, true, false.",
    "true, false, false, true, false.",
    "false, true, true, true, true.",
    "false, true, true, true, false."
  ],
  "correctAnswer": 4,
  "justification": "Para cada linha do código:\n- `v1 = true && false` resulta em `false`.\n- `v2 = (!\"javascript\" ? false : true)` resulta em `true` porque a string \"javascript\" é avaliada como truthy, então `!\"javascript\"` é `false`, tornando `v2 = true`.\n- `v3 = false || true` resulta em `true`.\n- `v4 = !false` resulta em `true`.\n- `v5 = [false, true, true].reduce((resultado, x) => resultado && x, true)` resulta em `false`, pois o operador `&&` entre `true` e `false` gera `false`.\n\nAssim, a saída será `false, true, true, true, false`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  ]
},
{
  "question": "O analista José criou a função `CalcObjs` em JavaScript. A `CalcObjs` recebe uma coleção de objetos e realiza determinado cálculo em cada objeto da coleção. No caso de existirem objetos repetidos, a `CalcObjs` considera apenas a primeira ocorrência do objeto na coleção. A fim de rastrear os objetos já processados, José utilizou uma estrutura de dados disponível no JavaScript, do tipo keyed collection, cujos valores são únicos entre si e passíveis de remoção pelo coletor de lixo.\n\nPara rastrear os objetos processados, José utilizou a estrutura de dados do JavaScript:",
  "type": "radio",
  "options": [
    "Map",
    "Symbol",
    "WeakSet",
    "SharedArrayBuffer",
    "Uint8ClampedArray"
  ],
  "correctAnswer": 2,
  "justification": "Para rastrear objetos únicos e garantir que valores repetidos não sejam processados mais de uma vez, uma `WeakSet` é ideal, pois é uma coleção de objetos onde cada valor é único e que permite a remoção automática pelo coletor de lixo quando não há referências ativas ao objeto. `WeakSet` é adequada para cenários de rastreamento de objetos sem impedir a coleta de lixo.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/WeakSet",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Keyed_collections"
  ]
},
{
  "question": "Um desenvolvedor web está trabalhando em uma aplicação que envolve a coleta de dados numéricos dos usuários, e, para isso, está usando HTML e JavaScript (ECMAScript 2020) para criar um campo de entrada de texto e um botão. Quando um usuário clicar nesse botão, o valor inserido será processado. Nesse cenário, considere que esse desenvolvedor quer obter o valor atual do campo de texto HTML com o ID `idade`. Para obter esse valor, ele deve utilizar o seguinte fragmento de código JavaScript:",
  "type": "radio",
  "options": [
    "document.getElementById(\"idade\").getText()",
    "document.getElementById(\"idade\").innerHTML",
    "document.getElementById(\"idade\").value",
    "document.getElementByName(\"idade\").value",
    "document.querySelector(\"#idade\").text"
  ],
  "correctAnswer": 2,
  "justification": "Para acessar o valor inserido em um campo de entrada de texto em HTML, usa-se a propriedade `value`. Portanto, `document.getElementById(\"idade\").value` é o fragmento correto para obter o valor do campo de texto com ID `idade`. As outras opções são incorretas pois `getText()` não existe, `innerHTML` se aplica ao conteúdo HTML, `getElementByName` é usado para nomes, e `querySelector(...).text` não é uma propriedade válida para obter valores de entrada.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLInputElement/value",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById"
  ]
},
{
  "question": "Atualmente o JavaScript é gerenciado pela Ecma, e na versão Ecma 6 ocorre uma grande utilização do paradigma funcional através de arrow functions. Considere a função apresentada a seguir, na forma de escrita tradicional:\n\n<pre><code>function somar(a, b) {\n  return a + b;\n}\n</code></pre>\n\nNo padrão arrow function, ela seria definida como:",
  "type": "radio",
  "options": [
    "const somar = (a, b) => a + b;",
    "const somar (a, b) => a + b;",
    "const somar = (a, b => a + b);",
    "const somar => (a, b) = a + b;",
    "const somar (a, b) = a + b;"
  ],
  "correctAnswer": 0,
  "justification": "No padrão arrow function, a função `somar` é escrita como `const somar = (a, b) => a + b;`. Essa sintaxe é usada para definir funções de forma mais concisa no ES6, e a expressão `a + b` é retornada diretamente.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  ]
},
{
  "question": "Tatiana está efetuando a manutenção de uma página, e para testar a execução de uma função assíncrona em JavaScript, utilizou a escrita no documento, via método writeln, como no fragmento de código a seguir.\n\n<pre><code>const fatorial = async(a) => {\n\n  let b = a;\n\n  while(--a>0) b*=a;\n\n  return b;\n\n}\n\ndocument.writeln(`Fat 5: ${fatorial(5)}`);\n</code></pre>\n\nTatiana esperava verificar a impressão do fatorial de cinco, mas o que viu foi `[object Promise]`. Tatiana resolveu o problema, alterando a escrita no documento para:",
  "type": "radio",
  "options": [
    "document.writeln('Fat 5: ' + fatorial(5));",
    "document.writeln(`Fat 5: ${await fatorial(5)}`);",
    "x = fatorial(5) => document.writeln(`Fat 5: ${x}`);",
    "await document.writeln(`Fat 5: ${fatorial(5)}`);",
    "fatorial(5).then(x => document.writeln(`Fat 5: ${x}`));"
  ],
  "correctAnswer": 4,
  "justification": "A função `fatorial` é assíncrona, portanto retorna uma `Promise`. Para resolver essa `Promise` e obter o valor retornado, Tatiana usou `fatorial(5).then(x => document.writeln(`Fat 5: ${x}`));`, que resolve a `Promise` e usa o valor retornado para escrever o resultado no documento.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Using_promises",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then"
  ]
},
{
  "question": "Leandro precisa escrever uma mensagem dinâmica em uma `div`, através do JavaScript, e sabe que deve ser utilizado DOM, ou Document Object Model, para acessar os elementos de sua página.\n\nConsiderando que o `id` utilizado na `div` é `msgOut`, e que a variável `msg` contém a mensagem, Leandro irá utilizar o comando:",
  "type": "radio",
  "options": [
    "document[\"msgOut\"].innerHTML=msg;",
    "document.getElementById(\"msgOut\").innerHTML=msg;",
    "document.setHtmlContent(\"msgOut\",msg);",
    "document[\"msgOut\"].html(msg);",
    "document.setElementById(\"msgOut\",msg);"
  ],
  "correctAnswer": 1,
  "justification": "Para acessar e modificar o conteúdo de uma `div` com o `id` específico, a forma correta em JavaScript é usar `document.getElementById(\"msgOut\").innerHTML = msg;`. Esse comando obtém o elemento com o `id` \"msgOut\" e define seu conteúdo HTML para a mensagem armazenada em `msg`. As outras opções não representam métodos ou sintaxes válidas para esse propósito no DOM.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML"
  ]
},
{
  "question": "Jorge é consultor em uma empresa de desenvolvimento e está analisando o código a seguir, na linguagem JavaScript, encontrado em uma das páginas do site.\n\n<pre><code>const va = [1,2,5,7,12,14,19,20];\n\nconst vb = [], vc = [];\n\nfor(let a of va)\n\nif(a%2==0)\n\nvb.push(a);\n\nelse\n\nvc.push(a);\n\nconsole.log(vb.reduce((a,b)=>a+b));\n\nconsole.log(vc.reduce((a,b)=>a+b));\n</code></pre>\n\nJorge abriu a página e viu impressos no console de depuração, respectivamente, os valores:",
  "type": "radio",
  "options": [
    "1 e 20",
    "1 e 79",
    "15 e 65",
    "48 e 32",
    "80 e 0"
  ],
  "correctAnswer": 3,
  "justification": "No código, o array `va` é separado em dois arrays `vb` e `vc`, onde `vb` contém números pares e `vc` contém números ímpares.\n\nOs valores de `vb` (pares) são `[2, 12, 14, 20]`, e sua soma (`vb.reduce((a,b)=>a+b)`) é `48`.\n\nOs valores de `vc` (ímpares) são `[1, 5, 7, 19]`, e sua soma (`vc.reduce((a,b)=>a+b)`) é `32`.\n\nPortanto, os valores impressos no console são `48` e `32`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"
  ]
},
{
  "question": "O desvio padrão é uma importante medida de dispersão na análise estatística, sendo definido pela fórmula a seguir.\n\ndp = raiz_quadrada(somatório(xi – xm)² / n), onde xi é um dos valores do conjunto, xm é a média e n é o tamanho do conjunto.\n\nWilliam implementou a seguinte função, em JavaScript, para o cálculo do desvio padrão, onde x é um vetor com os valores do conjunto na amostra analisada.\n\n<pre><code>1. const dp = (x) => {\n\n2. let xm = 0, soma = 0;\n\n3. for(let i=0; i<x.length; i++)\n\n4. xm += x[i];\n\n5. xm /= x.length;\n\n6. for(let xi of x)\n\n7. soma += (xi-xm)^2;\n\n8. return Math.sqrt(soma / x.length);\n\n9. }\n</code></pre>\n\nNo entanto, William, ao criar a função para cálculo do desvio padrão, cometeu um erro, e, para consertá-lo, ele precisa:",
  "type": "radio",
  "options": [
    "utilizar o método size, no lugar do atributo length, para obter o tamanho do vetor, nas linhas 3, 5 e 8;",
    "reescrever a divisão na forma expandida, na linha 5, ficando no formato xm = xm / x.length;",
    "utilizar Math.pow para elevar ao quadrado, na linha 7, no lugar do operador ^, ficando Math.pow(xi-xm,2);",
    "modificar a estrutura for, na linha 3, do modelo tradicional para o uso do operador of;",
    "utilizar const no lugar de let para definir as variáveis soma e xm, na linha 2."
  ],
  "correctAnswer": 2,
  "justification": "O erro está na linha 7, onde o operador `^` é usado incorretamente para tentar elevar ao quadrado. Em JavaScript, o operador `^` representa uma operação de bitwise XOR, e não exponenciação. A correção é usar `Math.pow(xi - xm, 2)` para elevar `(xi - xm)` ao quadrado corretamente.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators"
  ]
},
{
  "question": "Beatriz tem um site com diversos elementos do tipo `div`, onde foi utilizada uma classe CSS com o nome \"opcional\", e deseja que eles fiquem ocultos quando forem clicados. Para adicionar a funcionalidade em todos os elementos via JavaScript, ela desenvolveu a função apresentada a seguir.\n\n<pre><code>const associar = (elementos) => {\n\n  for(let obj of elementos)\n\n    obj.addEventListener('click',(e)=>{\n\n      e.target.style.display='none'\n\n    });\n\n}\n</code></pre>\n\nPara executar a função criada, associando corretamente aos elementos do tipo `div`, Beatriz deve utilizar para o parâmetro `elementos` a expressão:",
  "type": "radio",
  "options": [
    "document.getElementsByTagName(\"div.opcional\");",
    "document.getElementsByClassName(\"opcional\");",
    "document.getElementsByName(\"div:opcional\");",
    "document.getElementsByClass(\"opcional\");",
    "document.getElementsById(\"div.opcional\");"
  ],
  "correctAnswer": 1,
  "justification": "A expressão correta para selecionar todos os elementos com a classe \"opcional\" é `document.getElementsByClassName(\"opcional\");`. Esse método retorna uma coleção de todos os elementos que possuem a classe especificada, permitindo que Beatriz associe a função de ocultar esses elementos ao serem clicados.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName",
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList"
  ]
},
{
  "question": "Assinale o método JavaScript que retorna o número de caracteres em uma string.",
  "type": "radio",
  "options": [
    "charAt()",
    "count",
    "len()",
    "length",
    "size"
  ],
  "correctAnswer": 3,
  "justification": "Em JavaScript, a propriedade `length` é usada para retornar o número de caracteres em uma string. As outras opções não representam métodos ou propriedades válidos para essa finalidade em JavaScript.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length"
  ]
},
{
  "question": "Analise as operações bitwise do JavaScript, exibidas a seguir.\n\n<pre><code>4 & 1\n7 | 2\n~ -5\n9 >> 2\n9 >>> 1\n</code></pre>\n\nOs valores de cada uma dessas expressões, na ordem, são:",
  "type": "radio",
  "options": [
    "0; 7; 5; 1; 2.",
    "1; 9; 5; 1; 2.",
    "0; 7; 4; 2; 4.",
    "0; 9; 4; 0; 4.",
    "1; 1; -5; 4; 2."
  ],
  "correctAnswer": 2,
  "justification": "Cada operação bitwise retorna o seguinte resultado:\n- `4 & 1` resulta em `0` porque `100 & 001` em binário é `000`.\n- `7 | 2` resulta em `7` porque `111 | 010` em binário é `111`.\n- `~ -5` resulta em `4` porque o operador `~` inverte todos os bits de `-5`, retornando `4`.\n- `9 >> 2` resulta em `2` porque `9` em binário (`1001`) deslocado duas posições à direita é `0010`.\n- `9 >>> 1` resulta em `4` porque `9` em binário (`1001`) deslocado uma posição à direita com `>>>` (deslocamento lógico) resulta em `100`.\n\nPortanto, a sequência correta de valores é `0; 7; 4; 2; 4`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_AND"
  ]
},
{
  "question": "Considere o script JavaScript a seguir.\n\n<pre><code>function f(f) { return (f*f); }\n\nlet value1 = f;\n\nalert(value1);\n\nlet value2 = f(100);\n\nalert(value2);\n\nlet value3 = f;\n\nalert(value3(100));\n</code></pre>\n\nAssinale os valores exibidos na execução do script acima, na ordem.",
  "type": "radio",
  "options": [
    "function f(f) { return (f*f); }\n10000\n10000",
    "function f(f) { return (f*f); }\n10000\nundefined",
    "undefined\n10000\nundefined",
    "10000",
    "undefined\nundefined\nundefined"
  ],
  "correctAnswer": 0,
  "justification": "O script exibe os seguintes valores:\n1. `value1 = f` aponta para a função `f`, então `alert(value1)` exibe `function f(f) { return (f*f); }`.\n2. `value2 = f(100)` chama a função `f` com `100`, então `alert(value2)` exibe `10000`.\n3. `value3 = f` aponta para a função `f` novamente, então `alert(value3(100))` exibe `10000`.\n\nPortanto, os valores exibidos são `function f(f) { return (f*f); }`, `10000`, e `10000`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions"
  ]
},
{
  "question": "No contexto da manipulação de um documento HTML, considere um elemento que contém botões rotulados, como definido a seguir.\n\n<pre><code>&lt;div id=\"teste\"&gt;\n\n  &lt;button onclick=\"xpto(this)\"&gt;A&lt;/button&gt;\n\n  &lt;button onclick=\"xpto(this)\"&gt;B&lt;/button&gt;\n\n  &lt;button onclick=\"xpto(this)\"&gt;C&lt;/button&gt;\n\n&lt;/div&gt;\n</code></pre>\n\nConsidere ainda o trecho abaixo, descrito numa hipotética linguagem de script no lado cliente de uma página Web.\n\n<pre><code>function xpto(x) {\n\n  document.getElementById(\"teste\").appendChild(x);\n\n}\n</code></pre>\n\nAssinale o efeito verificado na página exibida quando o segundo botão é clicado.",
  "type": "radio",
  "options": [
    "Nada acontece, pois o efeito é nulo.",
    "Remoção do primeiro botão apenas.",
    "Remoção do último botão apenas.",
    "Remoção de dois botões apenas.",
    "Remoção dos três botões."
  ],
  "correctAnswer": 0,
  "justification": "Quando o botão é clicado, a função `xpto` executa `appendChild` no elemento `x` (o botão clicado), o que remove o botão do seu local original e o insere novamente ao final do `div` com id `teste`. Esse processo ocorre apenas para o botão clicado, e visualmente não há qualquer alteração, pois o botão apenas muda de posição para o final, sem alterar o layout. Portanto, o efeito visual é nulo.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild"
  ]
},
{
  "question": "Considere o trecho a seguir quando utilizado numa página Web.\n\n<pre><code>&lt;body onload=\"alert('xxxxxxx')\"&gt;\n</code></pre>\n\nO efeito desse trecho é",
  "type": "radio",
  "options": [
    "a exibição automática da mensagem xxxxxxx imediatamente antes que a página seja carregada.",
    "a exibição automática da mensagem xxxxxxx imediatamente antes que um formulário seja carregado.",
    "a exibição automática da mensagem xxxxxxx imediatamente depois que a página foi carregada.",
    "o início imediato de uma operação de upload.",
    "um erro, pois o script contém incompatibilidades."
  ],
  "correctAnswer": 2,
  "justification": "O atributo `onload` no elemento `<body>` executa o código JavaScript associado (`alert('xxxxxxx')`) assim que o carregamento da página é concluído. Portanto, a mensagem 'xxxxxxx' é exibida automaticamente imediatamente depois que a página foi carregada.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/Window/load_event"
  ]
},
{
  "question": "Considere o script JavaScript a seguir.\n\n<pre><code>let x = 16;\n\nlet y = [];\n\ny[2] = x;\n\ny[2] %= 3;\n\ny[0] = x << 2;\n\ny[1] = x <<= 5;\nalert(y);\n</code></pre>\n\nA execução desse script exibe:",
  "type": "radio",
  "options": [
    "0,128,1",
    "2,512,32",
    "64,true,1",
    "64,512,1",
    "128,64,2"
  ],
  "correctAnswer": 3,
  "justification": "Analisando cada linha do código:\n1. `let x = 16;` inicializa `x` com 16.\n2. `y[2] = x;` atribui o valor de `x` (16) ao índice `2` do array `y`.\n3. `y[2] %= 3;` calcula `16 % 3`, que é `1`, e atribui a `y[2]`.\n4. `y[0] = x << 2;` desloca `x` (16) duas posições à esquerda, resultando em `64`, e atribui a `y[0]`.\n5. `y[1] = x <<= 5;` desloca `x` cinco posições à esquerda (`16 << 5`), resultando em `512`, e atribui tanto a `y[1]` quanto a `x`.\n\nPortanto, a saída é `64,512,1`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Bitwise_shift_operators"
  ]
},
{
  "question": "Analise o código JavaScript a seguir.\n\n<pre><code>const valores = [4, 3, 2, 1, 0];\n\nlet xpto = \"\";\n\nvalores.forEach(fF);\n\nalert (xpto);\n\nfunction fF(value, index) {\n\n   xpto += index + \":\" + value + \">\";\n\n}\n</code></pre>\n\nA execução desse código exibe:",
  "type": "radio",
  "options": [
    "4:4>",
    "4:0>3:1>2:2>1:3>0:4>",
    "0:4>1:3>2:2>3:1>4:0>",
    "0:0>",
    "0:0>1:1>2:2>3:3>4:4>"
  ],
  "correctAnswer": 2,
  "justification": "No código, o método `forEach` itera sobre o array `valores = [4, 3, 2, 1, 0]` e chama a função `fF` para cada elemento, passando o valor e o índice atuais. A função `fF` concatena o índice e o valor no formato `index:value>` em `xpto`.\n\nA sequência exibida será `0:4>1:3>2:2>3:1>4:0>`, correspondendo aos índices e valores do array na ordem do loop.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  ]
},
{
  "question": "Observe o seguinte trecho de código-fonte em JavaScript:\n\n<pre><code>const array = [\"Um\", \"Dois\", \"Tres\"];\n\narray.unshift(\"Tres\");\n\narray.splice(-1);\n</code></pre>\n\nO valor final do array é:",
  "type": "radio",
  "options": [
    "[\"Um\"]",
    "[\"Dois\"]",
    "[\"Um\", \"Dois\"]",
    "[\"Um\", \"Tres\", \"Tres\"]",
    "[\"Tres\", \"Um\", \"Dois\"]"
  ],
  "correctAnswer": 4,
  "justification": "O código realiza as seguintes operações:\n1. `array.unshift(\"Tres\")` adiciona \"Tres\" ao início do array, resultando em `[\"Tres\", \"Um\", \"Dois\", \"Tres\"]`.\n2. `array.splice(-1)` remove o último elemento (por causa do índice negativo), deixando o array como `[\"Tres\", \"Um\", \"Dois\"]`.\n\nPortanto, o valor final do array é `[\"Tres\", \"Um\", \"Dois\"]`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"
  ]
},
{
  "question": "O objeto iterado por pares de valores-chave em um loop `for...of` e que retorna uma matriz de dois membros `[chave, valor]` para cada iteração em JavaScript é o",
  "type": "radio",
  "options": [
    "stack",
    "array",
    "map",
    "queue"
  ],
  "correctAnswer": 2,
  "justification": "Em JavaScript, o objeto `Map` é projetado especificamente para armazenar pares de valores-chave e pode ser iterado com um loop `for...of`. Durante a iteração, `Map` retorna um array de dois elementos `[chave, valor]` para cada par armazenado. Arrays e outros tipos não possuem essa estrutura de chave-valor para iteração de pares diretamente.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration"
  ]
},
//125      
{
  "question": "Observe o código JavaScript a seguir.\n\n<pre><code>function calcularSoma(array) {\n  var soma = 0;\n  for (var i = 0; i < array.length; i++) {\n    if (array[i] % 2 == 0) {\n      soma += array[i];\n    }\n  }\n  return soma;\n}\n\nvar numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nvar somaNumeros = calcularSoma(numeros);\n\nconsole.log(\"A soma dos números é: \" + somaNumeros);\n</code></pre>\n\nO resultado esperado para o código em JavaScript é:",
  "type": "radio",
  "options": [
    "a soma dos números é: 55.",
    "a soma dos números é: 30.",
    "a soma dos números é: 15.",
    "a soma dos números é: 5."
  ],
  "correctAnswer": 1,
  "justification": "O código JavaScript define uma função `calcularSoma(array)` que percorre o array `numeros` e soma apenas os valores pares. Os números pares no array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` são `2, 4, 6, 8, 10`, cuja soma é `30`. Portanto, o valor esperado é `a soma dos números é: 30`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration"
  ]
},
{
  "question": "Considere o seguinte código HTML e JavaScript:<br><br>\n<pre><code>\n&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;body&gt;\n&lt;p id=\"tbg\" style=\"display:none\"&gt;Transportadora Brasileira Gasoduto Bolívia-Brasil S.A. (TBG)&lt;/p&gt;\n&lt;button type=\"button\" onclick=\"document.getElementById('tbg').style.display='block'\"&gt;Mostre&lt;/button&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\nA partir do código JavaScript precedente, julgue o item a seguir:<br>\n**Ao ser executado, o código inicialmente irá mostrar na tela apenas um botão similar ao mostrado a seguir:**<br><br>\n`Mostre`<br><br>\n**Se esse botão for clicado, será apresentado um resultado similar ao que se segue:**<br><br>\n`Transportadora Brasileira Gasoduto Bolívia-Brasil S.A. (TBG)`<br><br>\n`Mostre`",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 0,
  "justification": "O código está correto. Inicialmente, o elemento `<p>` com o texto 'Transportadora Brasileira Gasoduto Bolívia-Brasil S.A. (TBG)' estará oculto devido ao estilo `display: none`. Após clicar no botão, o atributo `style.display` do elemento será alterado para 'block', fazendo com que o texto seja exibido.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLElement/style"
  ]
},
{
  "question": "Considere o seguinte código escrito em JavaScript:<br><br>\n<pre><code>\nvar vet1 = [10];\nvar vet2 = vet1;\nvar vet3 = [10];\nvet2[0] = 15;\nconsole.log(vet1[0] + \" \" + vet2[0] + \" \" + vet3[0]);\n</code></pre>\n\nAssinale a alternativa que apresenta a impressão resultante do comando `console.log`:",
  "type": "radio",
  "options": [
    "10 10 15",
    "15 15 10",
    "10 15 10",
    "15 10 15"
  ],
  "correctAnswer": 1,
  "justification": "A variável `vet1` é um array, e quando atribuímos `vet1` a `vet2`, ambas as variáveis passam a referenciar o mesmo objeto em memória. Assim, qualquer alteração feita em `vet2` reflete em `vet1`. Já `vet3` é um novo array, independente de `vet1` ou `vet2`. Portanto, quando alteramos `vet2[0]` para 15, `vet1[0]` também passa a ser 15. No final, o comando `console.log` imprime `15 15 10`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array"
  ]
},
{
  "question": "Considere o trecho de código a seguir, implementado em JavaScript:<br><br>\n<pre><code>\nlet myArray = [];\nmyArray.push(1);\nmyArray.push(2);\nmyArray.push(3);\nmyArray.pop();\nmyArray.unshift(0);\nmyArray.shift();\n</code></pre>\n\nAssinale a alternativa referente ao conteúdo presente no vetor `myArray` após a execução do código apresentado.",
  "type": "radio",
  "options": [
    "[1, 2]",
    "[2, 3]",
    "[0, 1]",
    "[3, 0]"
  ],
  "correctAnswer": 0,
  "justification": "O código manipula o array `myArray` da seguinte forma:\n\n1. `myArray.push(1)`: Adiciona o número 1 ao array, tornando-o `[1]`.\n2. `myArray.push(2)`: Adiciona o número 2 ao array, tornando-o `[1, 2]`.\n3. `myArray.push(3)`: Adiciona o número 3 ao array, tornando-o `[1, 2, 3]`.\n4. `myArray.pop()`: Remove o último elemento do array, que é 3, deixando `[1, 2]`.\n5. `myArray.unshift(0)`: Adiciona o número 0 no início do array, tornando-o `[0, 1, 2]`.\n6. `myArray.shift()`: Remove o primeiro elemento do array, que é 0, deixando `[1, 2]`.\n\nPortanto, o conteúdo final do array é `[1, 2]`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array"
  ]
},
{
  "question": "Observe o código JavaScript a seguir:<br><br>\n<pre><code>\nlet x = \"\";\nlet i = 0;\nx = \" 0 \";\nwhile (i < 10) {\n  x += i;\n  x = 10 - i + x;\n  i++;\n}\nx;\n</code></pre>\n\nAssinale o valor da variável `x` ao final do loop.",
  "type": "radio",
  "options": [
    "10987654321 0 0123456789",
    "1234567891 0 9876543210",
    "12345678910 0 0123456789",
    "12345678910 0 012345678910"
  ],
  "correctAnswer": 3,
  "justification": "O loop modifica a variável `x` a cada iteração, concatenando o valor atual de `i` e alterando a string com a operação `x = 10 - i + x`. Após 10 iterações, o resultado final acumulado na variável `x` é `12345678910 0 012345678910`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while"
  ]
},
{
  "question": "O seguinte código JavaScript:<br><br>\n<pre><code>\nconsole.log(\"1\");\nsetTimeout(() => {\n  console.log(\"2\");\n}, 1);\nprocess.nextTick(() => {\n  console.log(\"3\");\n});\n</code></pre>\n\nQuando executado no Node.js, produz a saída:",
  "type": "radio",
  "options": [
    "1 3 2",
    "1 2 3",
    "2 3 1",
    "3 1 2",
    "2 1 3"
  ],
  "correctAnswer": 0,
  "justification": "A saída é `1 3 2`. O `console.log(\"1\")` é executado primeiro, pois está na pilha principal. O `process.nextTick` tem prioridade maior que `setTimeout`, então `console.log(\"3\")` é executado antes de `console.log(\"2\")`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"
  ]
},
{
  "question": "Expressões regulares são utilizadas na programação para localizar padrões em strings. Na linguagem JavaScript, um padrão a ser localizado em uma string por meio de expressões regulares é delimitado pelos caracteres:",
  "type": "radio",
  "options": [
    "/e/",
    "&lt;e&gt;",
    "!e!",
    "(e)",
    "{e}"
  ],
  "correctAnswer": 0,
  "justification": "Em JavaScript, as expressões regulares são delimitadas pelo caractere `/`. Portanto, `/e/` representa uma expressão regular válida.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
  ]
},
{
  "question": "Considere o código a seguir que contém um trecho escrito na linguagem de programação JavaScript:<br><br>\n<pre><code>\n&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n&lt;body&gt;\n&lt;p id=\"demo\"&gt;&lt;/p&gt;\n&lt;script&gt;\nlet a = 10;\nlet b = 20;\nlet i, j, p;\nconst v = [];\nlet x = 0;\nfor (i = a; i &lt;= b; i++) {\n  p = true;\n  for (j = 2; j &lt;= i - 1; j++) {\n    if (i % j == 0) {\n      p = false;\n    }\n  }\n  if (p == true) {\n    v[x] = i;\n    x = x + 1;\n  }\n}\ndocument.getElementById(\"demo\").innerHTML = v;\n&lt;/script&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\nO resultado da execução do código é:",
  "type": "radio",
  "options": [
    "10,12,14,16,18,20",
    "11,13,17,19",
    "11,13,15,17,19",
    "12,14,16,18",
    "10,11,12,13,14,15,16,17,18,19,20"
  ],
  "correctAnswer": 1,
  "justification": "O código tem como objetivo identificar números primos no intervalo entre 10 e 20 (inclusive). A lógica funciona da seguinte maneira:\n\n1. **Inicialização**: O valor inicial `a` é 10 e o valor final `b` é 20. Uma variável `v` é usada como vetor para armazenar os números primos identificados.\n\n2. **Loop principal**: O primeiro `for` percorre todos os números no intervalo `[10, 20]`.\n\n3. **Verificação de primos**:\n   - A variável `p` é inicialmente `true`, assumindo que o número atual (`i`) é primo.\n   - Um segundo `for` verifica se o número `i` é divisível por qualquer número entre `2` e `i-1`. Se for divisível, `p` é definido como `false`.\n\n4. **Adicionando números primos**: Se `p` ainda for `true` após o segundo `for`, significa que `i` é um número primo, e ele é adicionado ao vetor `v`.\n\n5. **Resultado final**: O vetor `v` conterá apenas os números primos no intervalo, que são `11, 13, 17, 19`.\n\nPortanto, a resposta correta é `11,13,17,19`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for",
    "https://www.w3schools.com/js/js_arrays.asp"
  ]
},
{
  "question": "A linguagem JavaScript vem se popularizando cada vez mais no desenvolvimento web. Desta forma, assinale a alternativa que apresenta qual a palavra-chave utilizada para declarar uma variável em escopo de bloco na linguagem JavaScript:",
  "type": "radio",
  "options": [
    "create",
    "let",
    "varchar",
    "const"
  ],
  "correctAnswer": 1,
  "justification": "A palavra-chave `let` é utilizada em JavaScript para declarar variáveis com escopo de bloco. Diferentemente de `var`, que possui escopo de função ou global, `let` permite que as variáveis sejam limitadas ao bloco onde foram declaradas (como dentro de um loop ou uma função). Já a palavra-chave `const` também possui escopo de bloco, mas é usada para declarar constantes, ou seja, valores que não podem ser reatribuídos. As outras opções, `create` e `varchar`, não são palavras-chave válidas em JavaScript para declarar variáveis.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    "https://www.w3schools.com/js/js_let.asp"
  ]
},
{
  "question": "Dentro da linguagem JavaScript, podemos criar eventos a serem executados. Desta forma, assinale a alternativa que apresenta o que é um evento na linguagem JavaScript:",
  "type": "radio",
  "options": [
    "Uma função que quando disparada reinicia a codificação",
    "Uma função que realiza cálculos matemáticos",
    "Um objeto que contém de estilo CSS",
    "Uma ação detectada pelo navegador, como um clique do mouse, pressionamento de tecla ou carregamento da página"
  ],
  "correctAnswer": 3,
  "justification": "Na linguagem JavaScript, um evento é uma ação ou ocorrência que é detectada pelo navegador, como um clique do mouse, um pressionamento de tecla, a movimentação do mouse, o carregamento de uma página, entre outras interações do usuário ou mudanças no ambiente. Eventos permitem que os desenvolvedores adicionem interatividade às páginas, associando funções específicas a ações detectadas pelo navegador. As outras opções fornecidas descrevem funcionalidades que não estão relacionadas ao conceito de eventos.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/Events",
    "https://www.w3schools.com/js/js_events.asp"
  ]
},
{
  "question": "Os JavaScripts, entre outros scripts Web disponíveis, são utilizados para incorporar maior funcionalidade e melhorar a aparência nas páginas Web. Apesar de nem sempre apresentarem riscos, eles vêm sendo utilizados por atacantes para causar violações de segurança em computadores. Um tipo de ataque envolvendo JavaScript consiste em:",
  "type": "radio",
  "options": [
    "Redirecionar usuários de um site legítimo para um site falso.",
    "Executar automaticamente programas anexados em e-mails.",
    "Identificar e eliminar a ação de malware.",
    "Bloquear a ação do firewall presente na rede.",
    "Atualizar service packs de programas já instalados no computador."
  ],
  "correctAnswer": 0,
  "justification": "O redirecionamento de usuários de um site legítimo para um site falso, conhecido como ataque de phishing ou ataque de redirecionamento, é uma técnica comum que explora vulnerabilidades de JavaScript. Scripts maliciosos podem ser injetados em páginas legítimas para redirecionar os usuários sem que eles percebam. Essa prática é frequentemente usada para roubar informações pessoais, como credenciais de login ou dados financeiros. As outras opções descrevem cenários que não envolvem o uso direto de JavaScript.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://owasp.org/www-community/attacks/Phishing",
    "https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"
  ]
},
{
  "question": "A função `fetch()` do JavaScript serve para:",
  "type": "radio",
  "options": [
    "percorrer cursores de consultas de banco de dados.",
    "acessar e manipular partes do pipeline HTTP.",
    "realizar a conversão de respostas para array de objetos.",
    "filtrar dados da memória de acordo com os parâmetros.",
    "realizar requisições XMLHttpRequest e extensões do HTTP."
  ],
  "correctAnswer": 4,
  "justification": "A função `fetch()` do JavaScript é utilizada para realizar requisições HTTP assíncronas. Ela substitui e simplifica o uso de `XMLHttpRequest` ao fornecer uma interface mais moderna e baseada em Promises para manipulação de requisições HTTP e suas extensões, como métodos, cabeçalhos e corpos de mensagens. As outras opções estão incorretas porque: (A) não é usada para percorrer cursores de banco de dados, (B) ela não manipula diretamente o pipeline HTTP, (C) embora possa processar respostas, a conversão para arrays de objetos depende de código adicional e não é automática, e (D) ela não filtra dados diretamente da memória.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    "https://www.w3schools.com/js/js_api_fetch.asp"
  ]
},
{
  "question": "Considere o seguinte código:<br><br>\n<pre><code>\nint a = 3;\nint b = 7;\nint c;\n\nc = ++a + (--a * b++);\n\nSystem.out.println(c);\n</code></pre>\n\nA execução do código apresentado, resulta na variável <code>c</code> com o valor:",
  "type": "radio",
  "options": [
    "14",
    "32",
    "25",
    "24",
    "16"
  ],
  "correctAnswer": 2,
  "justification": "O código avalia a expressão `++a + (--a * b++)` seguindo as regras de precedência e associatividade dos operadores em linguagens como Java, PHP e JavaScript. A análise detalhada da execução é a seguinte:\n\n1. **`++a`**: Incrementa o valor de `a` de 3 para 4 e retorna 4.\n2. **`--a`**: Decrementa o valor de `a` de 4 para 3 e retorna 3.\n3. **`b++`**: Retorna o valor atual de `b` (7) e só incrementa `b` após a avaliação, tornando `b` igual a 8 após o uso.\n4. **Multiplicação**: Avalia `--a * b++`, que se torna `3 * 7 = 21`.\n5. **Soma**: Avalia `++a + 21`, que se torna `4 + 21 = 25`.\n\nPortanto, a variável `c` recebe o valor **25** no final da execução.\n\n**Explicação da ordem de execução:**\n- O operador de incremento pré-fixo (`++`) e decremento pré-fixo (`--`) têm maior precedência e são avaliados antes de multiplicação ou soma.\n- A multiplicação (`*`) tem maior precedência que a adição (`+`).\n- Os operadores são avaliados da esquerda para a direita devido à associatividade da maioria dos operadores aritméticos.\n\n**Resultado Final:** `c = 25`. Este comportamento é consistente em linguagens como Java, PHP e JavaScript.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence",
    "https://www.php.net/manual/en/language.operators.precedence.php"
  ]
},
{
  "question": "O desenvolvimento de sites é realizado por um conjunto de linguagens de programação. Uma delas é o JavaScript, por meio do qual é possível desenvolver pequenos trechos de programação. Sobre o JavaScript, analisar os itens abaixo:<br><br>\nI. O JavaScript tem a função de controlar o comportamento da página, permitindo validar formulários, alterar textos, alterar estilos, executar pequenas operações e manipulações junto ao navegador.<br><br>\nII. É uma linguagem de programação interpretada que é executada diretamente em navegadores web.<br><br>\nIII. Não é possível inserir código JavaScript em páginas HTML.<br><br>\nEstá(ão) CORRETO(S):",
  "type": "radio",
  "options": [
    "Somente o item I.",
    "Somente os itens I e II.",
    "Somente os itens I e III.",
    "Somente os itens II e III.",
    "Todos os itens."
  ],
  "correctAnswer": 1,
  "justification": "A análise dos itens mostra que:\n\n1. **Item I** está correto: JavaScript é amplamente usado para controlar o comportamento da página, como validação de formulários, alteração de conteúdo, estilos e manipulação do DOM.\n2. **Item II** está correto: JavaScript é uma linguagem de programação interpretada, executada diretamente pelos navegadores web.\n3. **Item III** está incorreto: É totalmente possível inserir código JavaScript em páginas HTML usando a tag `<script>`.\n\nPortanto, os itens I e II estão corretos.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
    "https://www.w3schools.com/js/"
  ]
},
{
  "question": "Sobre tratamento de exceções na linguagem de programação JavaScript, considere o código a seguir:<br><br>\n<pre><code>\nfunction f() {\n  try {\n    console.log(0);\n    throw \"imprevisto\";\n  } catch (e) {\n    console.log(1);\n    return true;\n    console.log(2);\n  } finally {\n    console.log(3);\n    return false;\n    console.log(4);\n  }\n  console.log(5);\n}\n\nf();\n</code></pre>\n\nA saída esperada no console é:",
  "type": "radio",
  "options": [
    "0 1 2 3 4 5",
    "0 1 3",
    "0 2 4",
    "0 1 2"
  ],
  "correctAnswer": 1,
  "justification": "Ao analisar o código, temos:\n\n1. O bloco `try` executa `console.log(0);`, imprimindo `0` no console.\n2. A instrução `throw \"imprevisto\";` lança uma exceção, desviando a execução para o bloco `catch`.\n3. No bloco `catch`, `console.log(1);` é executado, imprimindo `1`. Em seguida, a instrução `return true;` tenta retornar do método, mas antes disso o bloco `finally` é executado.\n4. No bloco `finally`, `console.log(3);` é executado, imprimindo `3`. Em seguida, `return false;` substitui o retorno original (`true` do bloco `catch`) por `false`.\n5. O bloco `console.log(5);` fora de `try-catch-finally` nunca é alcançado porque o `finally` contém um `return`, finalizando a execução da função.\n\nPortanto, a saída no console será `0 1 3`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch",
    "https://www.w3schools.com/js/js_errors.asp"
  ]
},
{
  "question": "Na linguagem de programação JavaScript, uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e, por isso, são bastante utilizadas para deixar o código mais curto.<br><br>\nMarque a alternativa que apresenta a saída correta do código a seguir:<br><br>\n<pre><code>\nvar pl = [\n    \"JavaScript\",\n    \"Java\",\n    \"C++\",\n    \"Python\"\n];\nvar v1 = pl.map(s => s.length);\ndocument.write(v1);\n</code></pre>",
  "type": "radio",
  "options": [
    "4",
    "10,4,3,6",
    "(\"JavaScript\", \"Java\", \"C++\", \"Python\", 10, 4, 3, 6).",
    "(\"JavaScript\", 10, \"Java\", 4, \"C++\", 3, \"Python\", 6)."
  ],
  "correctAnswer": 1,
  "justification": "O código utiliza o método `map` em um array de strings (`pl`) para gerar um novo array com os comprimentos das strings originais. A função arrow `s => s.length` retorna o comprimento de cada string. Após o `map`, o array resultante será `[10, 4, 3, 6]`, e `document.write(v1)` exibe os valores do array como uma string separada por vírgulas: '10,4,3,6'. Portanto, a resposta correta é '10,4,3,6'.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  ]
},
{
  "question": "Um programador teve por tarefa escrever uma função Javascript que receba uma string como parâmetro e retorne outra string. A string retornada deve conter os mesmos caracteres que a string recebida, sem espaços em branco.<br><br>\n**Exemplo:**<br>\nString recebida: ‘ Brasil‘ (total de 14 caracteres e 8 espaços em branco)<br>\nString retornada: ‘Brasil’ (total de 6 caracteres e nenhum espaço em branco)<br><br>\nConsidere que, na função a ser escrita, duas aspas simples seguidas (‘’) representam uma string vazia, e duas aspas simples com um espaço entre elas (‘ ‘) representam um caracter de espaço em branco.<br><br>\nQual função realiza o que foi pedido a esse programador?<br><br>\n<pre><code>\nA)\nfunction tiraBranco(str) {\n   var i = 0, len = str.length, aux = '';\n   while(i < len) {\n       if(str[i] === ' ')\n           aux = aux + str.slice(i + 1, str.length);\n       i++;\n   }\n   return aux;\n}\n\nB)\nfunction tiraBranco(str) {\n   if(str.length === 0)\n       return '';\n   if(str[0] === ' ')\n       return tiraBranco(str.slice(1, str.length));\n   else\n       return str[0] + tiraBranco(str.slice(1, str.length));\n}\n\nC)\nfunction tiraBranco(str) {\n   var i = 0, len = str.length, aux = '';\n   while(i < len) {\n       if(str[i] === ' ')\n           aux = aux + str[i];\n       i++;\n   }\n   return aux;\n}\n\nD)\nfunction tiraBranco(str) {\n   var aux = '';\n   for(let c in str) {\n       if(c !== ' ')\n           aux += c;\n   }\n   return aux;\n}\n\nE)\nfunction tiraBranco(str) {\n   if(str.length === 0)\n       return '';\n   var c = str[0], ret;\n   ret = tiraBranco(str.slice(1, str.length));\n   if(str[0] === ' ')\n       return ret;\n   else\n       return c + ret;\n}\n</code></pre>",
  "type": "radio",
  "options": [
    "A",
    "B",
    "C",
    "D",
    "E"
  ],
  "correctAnswer": 1,
  "justification": "A função correta é a **B**, pois ela utiliza recursão para processar a string. Ela verifica cada caractere: se for um espaço em branco (' '), ignora-o e continua com o restante da string, caso contrário, concatena o caractere atual ao resultado da chamada recursiva. Essa lógica garante que a string retornada não contenha espaços em branco e preserve todos os demais caracteres.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"
  ]
},
{
  "question": "O tratamento de erros e exceções é, atualmente, uma exigência para as linguagens de programação. Qual fragmento de código, em Javascript, é um exemplo válido desse tratamento?",
  "type": "radio",
  "options": [
    "try {<br>    adddlert(\"Bem vindo!\");<br>}<br>else(err) {<br>    window.alert(err.message);<br>}",
    "try {<br>    adddlert(\"Bem vindo!\");<br>}<br>except(err) {<br>    window.alert(err.message);<br>}",
    "try {<br>    adddlert(\"Bem vindo!\");<br>}<br>catch(err) {<br>    window.alert(err.message);<br>}",
    "try {<br>    adddlert(\"Bem vindo!\");<br>}<br>catch(err) {<br>    window.alert(err.message);<br>}<br>else {<br>    window.alert(\"sem erros\");<br>}",
    "try {<br>    adddlert(\"Bem vindo!\");<br>}<br>catch(err) {<br>    window.alert(err.message);<br>}<br>otherwise {<br>    window.alert(\"sem erros\");<br>}"
  ],
  "correctAnswer": 2,
  "justification": "A alternativa **C** é a correta, pois a estrutura `try...catch` é a sintaxe válida em JavaScript para tratamento de erros. No bloco `try`, tenta-se executar o código. Caso ocorra um erro, ele é capturado pelo bloco `catch`, e o objeto de erro `err` pode ser utilizado para fornecer mais informações ou realizar ações específicas. Outras palavras-chave como `else`, `except` e `otherwise` não são válidas em JavaScript para tratamento de exceções.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch"
  ]
},
{
  "question": "Considere o trecho JavaScript exibido a seguir.<br><br>\n<pre>\nconst a = [1,2,3,4,5];<br>\nconst b = a.map(xpto);<br>\nalert(b);<br>\n<br>\nfunction xpto (x, y) {<br>\n    return x * y;<br>\n}\n</pre>\n\nAssinale o conteúdo exibido na execução do script acima.",
  "type": "radio",
  "options": [
    "0,2,6,12,20",
    "1,2,3,4,5",
    "1,3,5,7,9",
    "1,4,9,16,25",
    "2,4,6,8,10"
  ],
  "correctAnswer": 0,
  "justification": "A alternativa **A (0,2,6,12,20)** é a correta. A função `map` em JavaScript aplica a função fornecida a cada elemento do array, passando dois argumentos para a função: o valor atual do elemento (x) e o índice do elemento no array (y).<br><br>\nNo caso apresentado, a função `xpto` multiplica o elemento pelo índice. A execução seria:<br>\n- Para o elemento `1` (índice 0): `1 * 0 = 0`<br>\n- Para o elemento `2` (índice 1): `2 * 1 = 2`<br>\n- Para o elemento `3` (índice 2): `3 * 2 = 6`<br>\n- Para o elemento `4` (índice 3): `4 * 3 = 12`<br>\n- Para o elemento `5` (índice 4): `5 * 4 = 20`<br><br>\nPortanto, o resultado exibido pelo `alert(b)` será `0,2,6,12,20`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
  ]
},
{
  "question": "Sobre a linguagem de programação JavaScript, assinale a afirmativa correta.",
  "type": "radio",
  "options": [
    "É uma linguagem utilizada exclusivamente no lado do cliente (client-side) para manipular páginas web.",
    "É uma linguagem compilada.",
    "É uma linguagem fortemente tipada, o que significa que todas as variáveis precisam ser declaradas com um tipo.",
    "JavaScript suporta programação orientada a objetos e programação funcional.",
    "Assim como em Java, programas escritos em JavaScript só são executados em computadores que tenham a máquina virtual JSVM, instalada e em execução."
  ],
  "correctAnswer": 3,
  "justification": "A alternativa correta é **'JavaScript suporta programação orientada a objetos e programação funcional.'**<br><br>\n- **A** está incorreta, pois embora o JavaScript seja amplamente utilizado no lado do cliente (client-side), ele também pode ser utilizado no lado do servidor (server-side) com plataformas como Node.js.<br>\n- **B** está incorreta, pois JavaScript é uma linguagem interpretada, não compilada. Seu código é executado diretamente pelo navegador ou pelo ambiente Node.js.<br>\n- **C** está incorreta, pois JavaScript é uma linguagem fracamente tipada e dinâmica, permitindo que variáveis sejam declaradas sem especificar explicitamente seus tipos.<br>\n- **E** está incorreta, porque JavaScript não depende de uma máquina virtual como o Java (JVM). Ele é executado diretamente em navegadores ou em ambientes que fornecem um interpretador de JavaScript (como Node.js).<br><br>\nA resposta **D** reflete corretamente as capacidades do JavaScript, que suporta tanto programação orientada a objetos (com protótipos e classes) quanto programação funcional (com funções de primeira classe, lambdas, etc.).",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://www.w3schools.com/js/js_object_prototypes.asp",
    "https://www.freecodecamp.org/news/an-introduction-to-functional-programming-style-in-javascript-71fcc050f064/"
  ]
},
{
  "question": "Arrays são estruturas de dados que armazenam uma coleção de elementos.<br><br>\nA maneira apropriada para criar um array de elementos em JavaScript é:",
  "type": "radio",
  "options": [
    "const meuarray = new Array [\"maçã\", \"laranja\", \"2\"]",
    "const meuarray = {\"maçã\", \"laranja\", \"2\"}",
    "const meuarray = [\"maçã\", \"laranja\", 2]",
    "const meuarray = (\"maçã\", \"laranja\", 2)",
    "const meuarray := [2]string{\"maçã\", \"laranja\"}"
  ],
  "correctAnswer": 2,
  "justification": "A maneira correta de criar um array em JavaScript é utilizando colchetes (`[]`), como mostrado na opção **'const meuarray = [\"maçã\", \"laranja\", 2]'**.<br><br>\n- **Opção A**: Está incorreta porque o uso de `new Array` está malformatado; o correto seria `new Array(\"maçã\", \"laranja\", \"2\")`, mas mesmo assim, o uso de colchetes é mais recomendável.<br>\n- **Opção B**: Está incorreta porque `{}` cria um objeto, não um array.<br>\n- **Opção D**: Está incorreta porque os parênteses `()` não são usados para criar arrays em JavaScript.<br>\n- **Opção E**: Está incorreta porque a sintaxe apresentada (`:=`) e o tipo especificado não pertencem ao JavaScript; são características de outras linguagens como Go ou Rust.<br><br>\nA sintaxe correta é mostrada na **Opção C**, que utiliza colchetes e permite a inclusão de diferentes tipos de valores, como strings (`\"maçã\"`, `\"laranja\"`) e números (`2`).",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    "https://www.w3schools.com/js/js_arrays.asp"
  ]
},
{
  "question": "Considerando a necessidade de um desenvolvedor criar um vetor de 5 posições em JavaScript, assinale a alternativa correta.",
  "type": "radio",
  "options": [
    "let new Array(5);",
    "let cores = Array(5);",
    "let valores = [5];",
    "let nomes = [1..5];",
    "let esquemas [0..4];"
  ],
  "correctAnswer": 1,
  "justification": "A alternativa correta é **'let cores = Array(5);'**.<br><br>\n- **Opção A**: Incorreta. O comando `new Array(5)` está mal formatado, pois para criar uma instância de `Array`, seria necessário `let cores = new Array(5);`. Porém, a alternativa **B** já resolve o problema com uma sintaxe mais limpa.<br>\n- **Opção B**: Correta. `Array(5)` cria um array com 5 posições vazias. É uma prática válida em JavaScript e é frequentemente usada.<br>\n- **Opção C**: Incorreta. `let valores = [5];` cria um array com apenas um elemento cujo valor é `5`, e não um array com 5 posições.<br>\n- **Opção D**: Incorreta. A sintaxe `[1..5]` é inválida em JavaScript; intervalos como `1..5` não são suportados diretamente.<br>\n- **Opção E**: Incorreta. A sintaxe `[0..4]` é inválida em JavaScript, pois, como na opção D, intervalos diretos não são suportados.<br><br>\nPortanto, a alternativa **B** é a mais adequada para criar um vetor com 5 posições em JavaScript.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    "https://www.w3schools.com/js/js_arrays.asp"
  ]
},
{
  "question": "No contexto do JavaScript, considere as seguintes afirmativas sobre a declaração de variáveis com let ou var.<br><br>\nI. Variáveis declaradas com <code>let</code> não podem ser redeclaradas no mesmo <code>{ }</code> bloco.<br>\nII. Variáveis declaradas com <code>let</code> podem ser utilizadas em qualquer trecho do código (escopo global).<br>\nIII. Variáveis declaradas com <code>var</code> no interior de um <code>{ }</code> bloco podem ser utilizadas fora do bloco de origem.<br><br>\nEstá correto o que se afirma apenas em:",
  "type": "radio",
  "options": [
    "I.",
    "II.",
    "I e II.",
    "I e III.",
    "II e III."
  ],
  "correctAnswer": 3,
  "justification": "A alternativa correta é **'I e III.'**.<br><br>\n- **I. Correta:** Variáveis declaradas com <code>let</code> não podem ser redeclaradas no mesmo bloco, pois o <code>let</code> respeita o escopo de bloco e impede essa prática.<br>\n- **II. Incorreta:** Apesar de <code>let</code> permitir a declaração de variáveis de escopo global, isso só é possível se a variável for declarada fora de qualquer bloco de código. Dentro de blocos, <code>let</code> é limitado ao escopo do bloco.<br>\n- **III. Correta:** Variáveis declaradas com <code>var</code> têm escopo de função, não respeitando o escopo de bloco. Assim, podem ser acessadas fora do bloco onde foram declaradas, se estiverem no mesmo escopo de função ou global.<br><br>\nPortanto, as afirmativas corretas são **I e III**.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var"
  ]
},
{
  "question": "Assinale o trecho de código JavaScript que define e ordena corretamente um array.<br><br>\nA) const fruits = [\"Casa\"; \"Apartamento\"; \"Sítio\"]; fruits.sort();<br>\nB) const fruits = [\"Casa\", \"Apartamento\", \"Sítio\"]; fruits.sort();<br>\nC) const fruits = {\"Casa\"; \"Apartamento\"; \"Sítio\"}; fruits.sort();<br>\nD) const fruits = [\"Casa\", \"Apartamento\", \"Sítio\"]; array.sort(fruits);<br>\nE) const fruits = [\"Casa\", \"Apartamento\", \"Sítio\"]; array.sort(fruits);",
  "type": "radio",
  "options": [
    "A",
    "B",
    "C",
    "D",
    "E"
  ],
  "correctAnswer": 1,
  "justification": "A alternativa correta é **B.**<br><br>\n- **A:** Incorreta, pois utiliza <code>;</code> em vez de <code>,</code> como separador de elementos do array.<br>\n- **B:** Correta, pois declara o array corretamente utilizando colchetes <code>[]</code> e vírgulas como separadores dos elementos, além de utilizar o método <code>sort()</code> da classe Array para ordenar os elementos.<br>\n- **C:** Incorreta, pois utiliza chaves <code>{}</code> para definir o array, o que não é válido em JavaScript.<br>\n- **D:** Incorreta, pois tenta usar um método <code>array.sort()</code> que não existe. O método correto é <code>fruits.sort()</code>.<br>\n- **E:** Incorreta pelos mesmos motivos da alternativa D.<br><br>\nO método <code>sort()</code> classifica os elementos do array em ordem alfabética por padrão.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"
  ]
},
{
  "question": "Analise o programa a seguir, que possui um script elaborado em JavaScript. Os pontos assinalados com (1), (2), (3) e (4) correspondem a informações suprimidas do programa.<br><br>\n<pre>\n&lt;!DOCTYPE html&gt;\n&lt;html&gt;&lt;body&gt;\n\n&lt;script language=JavaScript&gt;\n\nhoraatual = (1);\nhora = horaatual.(2);\nminutos = horaatual.(3);\nsegundos = horaatual.(4);\n\ndocument.writeln(\" Hora atual: \" + hora + \":\" + minutos + \":\" + segundos);\n\n&lt;/script&gt;\n&lt;/body&gt;&lt;/html&gt;\n</pre><br>\nQuando o programa for aberto por um navegador que suporte JavaScript, como o Chrome ou o Edge, é exibida a hora do computador, por exemplo:<br><br>\n<strong>Hora atual: 17:43:42</strong><br><br>\nPara que estas exibições ocorram conforme apresentado, (1), (2), (3) e (4) deverão ser, respectivamente:",
  "type": "radio",
  "options": [
    "new Hour(), getHours(), getMinutes() e getSeconds().",
    "new Date(), Hours(), Minutes() e Seconds().",
    "new Hour(), Hours(), Minutes() e Seconds().",
    "new Date(), getHours(), getMinutes() e getSeconds().",
    "Hour(), getHours(), getMinutes() e getSeconds()."
  ],
  "correctAnswer": 3,
  "justification": "A resposta correta é **'new Date(), getHours(), getMinutes() e getSeconds().'**.<br><br>\n**Explicação:**<br>\n1. O objeto <code>Date</code> em JavaScript é usado para trabalhar com datas e horas. Para capturar a hora atual, é necessário instanciar um novo objeto Date usando <code>new Date()</code>.<br>\n2. Os métodos <code>getHours()</code>, <code>getMinutes()</code> e <code>getSeconds()</code> são utilizados para recuperar, respectivamente, a hora, os minutos e os segundos do objeto <code>Date</code>.<br><br>\n**Por que as outras opções estão incorretas?**<br>\n- **A e C:** Não existe o objeto <code>Hour</code> em JavaScript.<br>\n- **B:** Os métodos <code>Hours()</code>, <code>Minutes()</code> e <code>Seconds()</code> não são válidos. Os métodos corretos possuem o prefixo <code>get</code>.<br>\n- **E:** O construtor <code>Hour()</code> também é inválido em JavaScript.<br><br>\nPortanto, a única opção válida para exibir a hora corretamente no navegador é usar <code>new Date()</code> e os métodos <code>getHours()</code>, <code>getMinutes()</code> e <code>getSeconds()</code>.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
  ]
},
{
  "question": "A linguagem JavaScript possui métodos e, dentre eles, há aqueles que exibem uma caixa de diálogo. Um exemplo desse tipo de método é o:",
  "type": "radio",
  "options": [
    "box()",
    "open()",
    "dialog()",
    "confirm()",
    "onclick()"
  ],
  "correctAnswer": 3,
  "justification": "O método `confirm()` é usado para exibir uma caixa de diálogo que solicita a confirmação do usuário, geralmente com as opções 'OK' e 'Cancel'. Este método é comumente utilizado para obter uma resposta binária do usuário (sim ou não). Os demais métodos listados não exibem caixas de diálogo: `box()` não é um método válido em JavaScript, `open()` é usado para abrir uma nova janela ou aba, `dialog()` não é um método padrão da linguagem, e `onclick()` é um evento associado a ações de clique.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm"
  ]
},
{
  "question": "Considere o código HTML e JavaScript abaixo:<br><br>\n<pre><code>\n<html>\n    <p id=\"saida\"></p>\n    <head>\n        <script type=\"text/javascript\">\n            const user = {\n                nome: 'Pedro Maria',\n                email: 'pedro.maria@gmail.com',\n                idade: 25,\n                nascimento: '21/02/1996',\n                masculino: true\n            };\n            document.getElementById(\"saida\").innerHTML = \"\";\n            for (const key in user) {\n                document.getElementById(\"saida\").innerHTML += `${key}: ${user[key]}<br>`;\n            }\n        </script>\n    </head>\n</html>\n</code></pre>\n\nO código apresenta um erro de sintaxe porque atribui valores de tipos diferentes a uma mesma variável.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "O código não apresenta erro de sintaxe. Em JavaScript, objetos podem armazenar valores de tipos diferentes, como strings, números, e booleanos. Isso é uma característica fundamental da linguagem. O código, no entanto, contém um erro relacionado à formatação, como o uso de aspas tipográficas (`“”`) e `InnerHTML` em vez de `innerHTML`, que pode causar falhas na execução. Após corrigir esses problemas, o código funciona corretamente e exibe os pares chave-valor do objeto no elemento HTML identificado por `id=\"saida\"`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    "https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"
  ]
},
{
  "question": "A linguagem de programação JavaScript nos últimos anos cresceu e vem tendo grande aplicabilidade nas mais diversas áreas da criação de sistemas da informação, sendo uma das mais utilizadas no desenvolvimento web dos dias atuais. Com base no exposto sobre a linguagem de programação JavaScript, assinale a alternativa CORRETA.",
  "type": "radio",
  "options": [
    "Esta linguagem é usada para especificar o layout das páginas da web.",
    "Esta linguagem é usada para programar o comportamento das páginas da web.",
    "Esta linguagem é usada para fazer a definição do conteúdo das páginas da web.",
    "Esta linguagem é usada em diversas áreas do desenvolvimento de software, exceto para o desenvolvimento de aplicativos ou Apps.",
    "É uma linguagem que surgiu há 5 anos, por isso tem sua sintaxe e semântica muito modernas."
  ],
  "correctAnswer": 1,
  "justification": "A alternativa correta é 'Esta linguagem é usada para programar o comportamento das páginas da web'. JavaScript é amplamente utilizado para adicionar interatividade, controlar o comportamento dinâmico das páginas e integrar funcionalidades avançadas em aplicações web. Diferente do CSS, que é utilizado para estilizar o layout, ou do HTML, que é usado para estruturar o conteúdo, o JavaScript é essencial para criar funcionalidades e ações nas páginas. A linguagem também é mais antiga que 5 anos, tendo sido criada em 1995.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://www.w3schools.com/js/"
  ]
},
{
  "question": "Considerando o código JavaScript abaixo, qual será o valor impresso em console?<br><br>\n<pre><code>\nconst dados = {\n    \"nome\": \"Pedro\",\n    \"Idade\": 25 \n}\n\nconsole.log('{dados.nome} possui {dados.idade} anos de idade');\n</code></pre>\n\n",
  "type": "radio",
  "options": [
    "Pedro possui 25 anos de idade.",
    "Pedro possui {dados idade} anos de idade.",
    "possui anos de idade.",
    "{dados nome} possui {dados idade} anos de idade.",
    "Nenhum valor será impresso, pois o código não será executado devido a erro na codificação."
  ],
  "correctAnswer": 4,
  "justification": "A alternativa correta é 'Nenhum valor será impresso, pois o código não será executado devido a erro na codificação'. Isso ocorre porque o código apresenta dois erros: \n1. O uso de aspas tipográficas (curly quotes) em vez de aspas simples ou duplas padrão, o que causa um erro de sintaxe. \n2. A interpolação de variáveis com `{}` não é válida sem o uso de template literals (``) no JavaScript. Para corrigir o código, ele deve ser reescrito como:\n\n```javascript\nconst dados = {\n    \"nome\": \"Pedro\",\n    \"Idade\": 25 \n};\n\nconsole.log(`${dados.nome} possui ${dados.Idade} anos de idade`);\n```\nEsse código corrigido imprimirá: 'Pedro possui 25 anos de idade'.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",
    "https://www.w3schools.com/js/js_objects.asp"
  ]
},
{
  "question": "Considerando o código JavaScript abaixo, qual será o valor impresso em console?<br><br>\n<pre><code>\nconst var = 'exemplo':\n\nconsole, log(var.substr(1, 3)):\n</code></pre><br>\n\nA\n“exe”.<br>\nB\n“xem”.<br>\nC\n“exem”.<br>\nD\n“xe”.<br>\nE\nNenhum valor será impresso, pois o código não será executado devido a erro na codificação.",
  "type": "radio",
  "options": [
    "exe",
    "xem",
    "exem",
    "xe",
    "Nenhum valor será impresso, pois o código não será executado devido a erro na codificação."
  ],
  "correctAnswer": 4,
  "justification": "O código apresentado contém erros de sintaxe e não será executado. As razões são:\n1. `const var` é inválido porque `var` é uma palavra-chave reservada em JavaScript.\n2. A string 'exemplo' está mal formatada, com um caractere `:` em vez de ponto-e-vírgula no final.\n3. O método `console, log` está incorreto; deve ser `console.log`.\n\nDevido a esses erros, o código não pode ser executado e nenhum valor será impresso no console.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/console/log",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr"
  ]
},
{
  "question": "Jorge gostaria de validar informações sobre a linguagem Javascript, mais especificamente sobre as conversões dessa linguagem. Abriu o navegador Chrome, instalação padrão, e apertou F12, depois clicou em Console e digitou o código da imagem abaixo. Ao digitar a última linha e apertar Enter, qual o resultado obtido?<br><br>\n<pre><code>\nnumero1 = 55\nnumero2 = '56'\nsoma = numero1 + numero2\n</code></pre>",
  "type": "radio",
  "options": [
    "111",
    "5556",
    "110",
    "'556'",
    "5655"
  ],
  "correctAnswer": 1,
  "justification": "No código fornecido:\n1. `numero1` é atribuído como um número (55).\n2. `numero2` é atribuído como uma string ('56').\n3. A operação `numero1 + numero2` realiza concatenação, pois um dos operandos é uma string. Em JavaScript, ao concatenar um número com uma string, o número é convertido para string, e os dois valores são unidos como texto.\n\nPortanto, o resultado da soma é '5556'.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Type_coercion"
  ]
},
{
  "question": "Na página web que Maria está desenvolvendo, há um botão que, quando clicado, exibe data e hora correntes.<br><br>\n**O código que implementa essa característica corretamente é:**",
  "type": "radio",
  "options": [
    "&lt;button id='xpto' onclick= get('xpto').innerHTML=Date()&gt;...&lt;/button&gt;",
    "&lt;button onclick='button.innerHTML=Date()'&gt;...&lt;/button&gt;",
    "&lt;button onclick='this.innerHTML=Date()'&gt;...&lt;/button&gt;",
    "&lt;button onclick=exhibit Date()&gt;...&lt;/button&gt;",
    "&lt;button onclick='function() return Date()'&gt;...&lt;/button&gt;"
  ],
  "correctAnswer": 2,
  "justification": "A alternativa correta é `&lt;button onclick='this.innerHTML=Date()'&gt;...&lt;/button&gt;` porque, ao usar `this.innerHTML`, o contexto do botão (`this`) é atualizado para mostrar a data e hora correntes retornadas pela função `Date()`. Esse é o comportamento esperado para exibir informações no botão clicado.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
  ]
},
{
  "question": "No contexto do JavaScript, analise as afirmativas a seguir a respeito do comportamento do JS de mover declarações para o top (em inglês, Hoisting).<br><br>\nI. Variáveis declaradas por meio de var podem ser utilizadas antes de declaradas.<br><br>\nII. Variáveis declaradas com let e const são movidas para o topo do bloco somente quando inicializadas na declaração.<br><br>\nIII. Usar uma constante (const) antes de declarada gera um erro de sintaxe.<br><br>\n**Está correto o que se afirma em:**",
  "type": "radio",
  "options": [
    "somente I;",
    "somente I e II;",
    "somente I e III;",
    "somente II e III;",
    "I, II e III."
  ],
  "correctAnswer": 2,
  "justification": "A afirmativa I está correta, pois variáveis declaradas com `var` podem ser utilizadas antes da declaração devido ao hoisting, embora seu valor seja `undefined` até a inicialização. A afirmativa III também está correta, porque usar uma constante (`const`) antes de ser declarada resulta em um erro de referência (ReferenceError). No entanto, a afirmativa II está incorreta, pois `let` e `const` são movidos ao topo do bloco devido ao hoisting, mas permanecem em uma 'zona morta temporal' (temporal dead zone) até a linha onde são declaradas.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://developer.mozilla.org/en-US/docs/Glossary/Hoisting",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
  ]
}

















































































































];


var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
