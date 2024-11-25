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
    "question": "Node.js é uma Linguagem baseada no motor de JavaScript V8 do Chrome. Quanto a sua orientação e arquitetura, o Node.js é uma linguagem que é orientada a:",
    "type": "radio",
    "options": [
      "objeto e usa um esquema multi-threading, bloqueante.",
      "objeto e possui um modelo de E/S não bloqueante.",
      "eventos e possui uma arquitetura multi-threading e bloqueante.",
      "eventos e possui um modelo de E/S não bloqueante."
    ],
    "correctAnswer": 3,
    "justification": "Node.js é orientado a eventos e utiliza um modelo de E/S não bloqueante, o que o torna eficiente para aplicações escaláveis e assíncronas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://nodejs.org/en/docs/"
    ]
  },
  {
    "question": "Sobre o NPM - Node Package Manager é correto afirmar que:",
    "type": "radio",
    "options": [
      "não permite aos desenvolvedores a distribuição de seus pacotes.",
      "é necessário o pagamento de uma taxa anual para a disponibilização dos pacotes no npm.",
      "é um gerenciador de pacotes global para JavaScript.",
      "é o arquivo package.json que fica na raiz do projeto e nele são declaradas todas as configurações de banco de dados e senhas de acesso."
    ],
    "correctAnswer": 2,
    "justification": "O NPM (Node Package Manager) é o gerenciador de pacotes padrão para JavaScript e Node.js, usado globalmente para instalar, gerenciar e distribuir pacotes.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://docs.npmjs.com/"
    ]
  },
  {
    "question": "Analise o código do package.json abaixo:\n\n{\n  \"name\": \"prova\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n  },\n  \"author\": \"\",\n  \"license\": \"ISC\"\n}\n\nSupondo que o desenvolvedor do sistema abra o terminal na pasta desse projeto e execute o comando npm start, o que acontecerá?",
    "type": "radio",
    "options": [
      "Vai ser lançado o seguinte erro no terminal npm ERR! missing script: start.",
      "O sistema vai executar o arquivo main index.js.",
      "O sistema vai tentar instalar as dependências do sistema.",
      "Será recriado o arquivo package.json."
    ],
    "correctAnswer": 0,
    "justification": "O comando `npm start` depende de um script `start` definido no `package.json`. Como o script não está presente, será exibido o erro `npm ERR! missing script: start`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://docs.npmjs.com/cli/v7/commands/npm-start"
    ]
  },
  {
    "question": "O sistema de módulos do Node é modelado a partir do CommonsJs module system, uma maneira de criar módulos que garante a interoperabilidade total entre eles. Qual NÃO contém um requisito do CommonsJs module system?",
    "type": "radio",
    "options": [
      "Uma função require, que recebe o identificador do módulo e devolve a API exportada.",
      "O nome do módulo é uma string e pode incluir caracteres barra (/) para identificação de caminhos (paths).",
      "O módulo deve exportar explicitamente o que precisa ser exportado para fora do módulo.",
      "As variáveis do módulo devem ser sempre públicas."
    ],
    "correctAnswer": 3,
    "justification": "No CommonsJs module system, as variáveis do módulo são privadas por padrão e acessíveis apenas dentro do módulo. Elas não precisam ser sempre públicas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://nodejs.org/api/modules.html#modules_the_module_object"
    ]
  },
  {
    "question": "Sobre a instalação de dependências no node, analise as seguintes informações:\n\nI. O parâmetro -g do comando npm install -g nodemon é utilizado para instalar a dependência como global. Isso quer dizer que ele vai ser instalado para todos os projetos desenvolvidos neste computador.\nII. O parâmetro --save é utilizado para salvar a dependência no arquivo package.json.\nIII. A pasta node_modules é automaticamente criada pelo npm quando se utiliza o comando npm init.\nIV. Ao utilizar o comando npm install será realizada a instalação de todas as dependências cadastradas no package.json.\n\nEstão corretas apenas as afirmativas:",
    "type": "radio",
    "options": [
      "I, II e III.",
      "I, II e IV.",
      "II, III e IV.",
      "I, III e IV."
    ],
    "correctAnswer": 3,
    "justification": "As afirmativas corretas são I, III e IV. O parâmetro `-g` é utilizado para instalar dependências globais. A pasta `node_modules` é criada automaticamente ao inicializar um projeto. O comando `npm install` instala todas as dependências listadas no `package.json`. Já o `--save` não é mais necessário nas versões recentes do npm, pois as dependências são adicionadas automaticamente ao `package.json`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://docs.npmjs.com/cli/v7/commands/npm-install"
    ]
  },
  {
    "question": "Com relação aos módulos e como eles são carregados na memória, o que é correto afirmar?",
    "type": "radio",
    "options": [
      "O Node utiliza a instrução require para incluir acesso a um módulo nativo do Node, os módulos não nativos utilizam a instrução include.",
      "É possível acessar uma propriedade específica de um objeto exportado.",
      "Um objeto específico do módulo só pode ser acessado dentro do módulo a que ele pertence.",
      "O Node permite mais de um módulo por arquivo."
    ],
    "correctAnswer": 1,
    "justification": "No Node.js, é possível acessar propriedades específicas de objetos exportados por um módulo. Isso permite que você utilize apenas a parte necessária de um módulo sem precisar importar o módulo inteiro.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://nodejs.org/api/modules.html"
    ]
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
