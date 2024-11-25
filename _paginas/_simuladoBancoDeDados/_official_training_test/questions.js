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
    "question": "Afirmações sobre modelos Entidade-Relacionamento (ER) em modelos relacionacionais:<br><br>I. Em relacionamentos 1:1, em que uma das entidades têm participação obrigatória e a outra entidade tem participação opcional, a tradução preferida é através da fusão das tabelas correspondentes às duas entidades.<br>II. Em relacionamentos 1:1, em que ambas entidades têm participação obrigatória, a tradução preferida é através da criação de uma tabela própria.<br>III. Independentemente da cardinalidade mínima, relacionamentos n:n são sempre implementados através de uma tabela própria.<br>IV. Em relacionamentos 1:n, a alternativa preferida de implementação é a de adição de colunas. No entanto, em relacionamentos 1:n, em que a entidade com cardinalidade máxima é opcional, pode ser usada, alternativamente, a implementação através de tabela própria.\n\nEstão corretas:",
    "type": "radio",
    "options": [
      "I e II",
      "I e III",
      "II e IV",
      "I, III e IV"
    ],
    "correctAnswer": 3,
    "justification": "As afirmações I, III e IV estão corretas. Relacionamentos 1:1 com participação obrigatória e opcional são preferencialmente traduzidos por fusão. Relacionamentos n:n requerem sempre uma tabela própria. Em relacionamentos 1:n, a adição de colunas é preferida, mas para cardinalidade opcional, pode-se criar uma tabela separada.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model",
      "https://www.tutorialspoint.com/dbms/dbms_data_models.htm"
    ]
  },
  {
    "question": "Qual das seguintes operações em subconsultas é equivalente à operação IN?",
    "type": "radio",
    "options": [
      ">ANY",
      "=ANY",
      "&ltANY",
      ">ALL"
    ],
    "correctAnswer": 1,
    "justification": "A operação `=ANY` é equivalente à operação `IN`. Ambas verificam se um valor está presente em um conjunto de valores retornados por uma subconsulta.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.postgresql.org/docs/current/functions-subquery.html",
      "https://www.w3schools.com/sql/sql_in.asp"
    ]
  },
  {
    "question": "Observe o seguinte código:\n\n<pre><code>CREATE FUNCTION funcao(text, VARIADIC anyarray) RETURNS text AS $$\n  SELECT array_to_string($2, $1);\n$$ LANGUAGE SQL;\n\nSELECT funcao('1',2,3,4);\n</code></pre>\n\nQual é o resultado da execução desse código?",
    "type": "radio",
    "options": [
      "4,3,2,1",
      "1234",
      "21314",
      "1,2,3,4"
    ],
    "correctAnswer": 3,
    "justification": "O código define uma função que utiliza o delimitador fornecido (`'1'`) para concatenar os elementos do array (`2, 3, 4`). O resultado é `1,2,3,4`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.postgresql.org/docs/current/sql-createfunction.html",
      "https://www.postgresql.org/docs/current/functions-array.html"
    ]
  },
{
  "question": "Considere a tabela Pessoa com as seguintes informações:<br>\n\n<img src=\"./_images/1.png\" alt=\"Tabela Pessoa contendo informações como nome e data de nascimento.\"><br>\n\nConsidere também a seguinte instrução SQL (Structured Query Language):\n\n<pre><code>SELECT nome FROM Pessoa WHERE data_nasc IN (\n  SELECT data_nasc FROM (\n    SELECT data_nasc FROM (\n      SELECT data_nasc FROM Pessoa\n      WHERE EXTRACT(YEAR FROM data_nasc) = (EXTRACT(YEAR FROM NOW()))\n    ) AS nasc\n    WHERE EXTRACT(MONTH FROM data_nasc) = (EXTRACT(MONTH FROM NOW()))\n  ) AS nasc\n  WHERE EXTRACT(DAY FROM data_nasc) <= 10\n);\n</code></pre>\n\nQual é o nome que resultará da execução dessa consulta, caso tenha sido executada em 20/11/2017?",
  "type": "radio",
  "options": [
    "Ana",
    "João",
    "Maria",
    "Pedro"
  ],
  "correctAnswer": 3,
  "justification": "A consulta busca nomes na tabela Pessoa, cuja data de nascimento atende aos seguintes critérios:\n1. O ano da data de nascimento deve ser o mesmo ano atual (2017).\n2. O mês da data de nascimento deve ser novembro (o mês atual).\n3. O dia da data de nascimento deve ser menor ou igual a 10.\n\nBaseando-se na tabela fornecida, o único registro que atende a esses critérios é o de 'Pedro', cuja data de nascimento é 09/11/2017.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.postgresql.org/docs/current/functions-datetime.html",
    "https://www.w3schools.com/sql/sql_select.asp"
  ]
},
{
  "question": "<br><img src=\"./_images/2.png\" alt=\"Enunciado para a consulta SQL.\"><br>\n\nQual das seguintes consultas SQL atende corretamente ao enunciado?",
  "type": "radio",
  "options": [
    "SELECT Cliente, Vendedor FROM  ((SELECT c.nome as Cliente, v.nome as Vendedor FROM Cliente c LEFT JOIN Pedido p ON p.cod_cliente = c.cod_cliente LEFT JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor) UNION (SELECT c.nome as Cliente, v.nome as Vendedor FROM Cliente c RIGHT JOIN Pedido p ON p.cod_cliente = c.cod_cliente RIGHT JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor)) as temp ORDER BY Cliente ASC, Vendedor ASC;",
    "SELECT Cliente, Vendedor FROM  ((SELECT c.nome as Cliente, v.nome as Vendedor FROM Cliente c RIGHT JOIN Pedido p ON p.cod_cliente = c.cod_cliente RIGHT JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor) UNION (SELECT c.nome as Cliente, v.nome as Vendedor FROM Cliente c RIGHT JOIN Pedido p ON p.cod_cliente = c.cod_cliente RIGHT JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor)) as temp ORDER BY Cliente ASC, Vendedor ASC;",
    "SELECT Cliente, Vendedor FROM  ((SELECT c.nome AS Cliente, v.nome AS Vendedor FROM Cliente c LEFT JOIN Pedido p ON p.cod_cliente = c.cod_cliente LEFT JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor) UNION (SELECT c.nome AS Cliente, v.nome AS Vendedor FROM Cliente c LEFT JOIN Pedido p ON p.cod_cliente = c.cod_cliente LEFT JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor)) AS temp ORDER BY Cliente ASC, Vendedor ASC;",
    "SELECT Cliente, Vendedor FROM  ((SELECT c.nome as Cliente, v.nome as Vendedor FROM Cliente c JOIN Pedido p ON p.cod_cliente = c.cod_cliente JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor) UNION (SELECT c.nome as Cliente, v.nome as Vendedor FROM Cliente c JOIN Pedido p ON p.cod_cliente = c.cod_cliente JOIN Vendedor v ON v.cod_vendedor = p.cod_vendedor ORDER BY v.nome)) as temp ORDER BY Cliente ASC, Vendedor ASC;"
  ],
  "correctAnswer": 0,
  "justification": "A consulta SQL correta faz uso de `LEFT JOIN` para assegurar que todos os clientes e vendedores sejam incluídos, independentemente de haver correspondência nos pedidos. O uso de `UNION` elimina duplicatas, enquanto a cláusula `ORDER BY Cliente ASC, Vendedor ASC` organiza os resultados de forma crescente pelos campos especificados.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_join.asp",
    "https://www.postgresql.org/docs/current/sql-select.html"
  ]
},
    {
      "question": "Considere as seguintes tabelas de Banco de Dados:<br><br>\n\n<pre><code>CREATE TABLE Pessoa (\n  codigo INT PRIMARY KEY,\n  nome VARCHAR(100),\n  datanascimento DATE,\n  profissao VARCHAR(100),\n  id INT REFERENCES Departamento(codigo)\n);\n\n</code></pre>\n**Considerando a sintaxe em SQL, qual a listagem do nome das pessoas e sua profissão em ordem alfabética de nome?**\n\n<pre><code>a) Select p.nome, p.profissao from pessoa p order by 1\nb) Select nome, profissao from pessoa p order by 2\nc) Select * from pessoa p\nd) Select p.* from pessoa order by p.nome\n</code></pre>",
      "type": "radio",
      "options": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correctAnswer": 0,
      "justification": "A consulta `Select p.nome, p.profissao from pessoa p order by 1` seleciona corretamente o nome e a profissão das pessoas e ordena os resultados alfabeticamente com base na coluna 1, que é o `nome`.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_orderby.asp"
      ]
    },
    {
      "question": "Considere as seguintes tabelas de Banco de Dados:<br><br>\n\n<pre><code>CREATE TABLE Pessoa (\n  codigo INT PRIMARY KEY,\n  nome VARCHAR(100),\n  datanascimento DATE,\n  profissao VARCHAR(100),\n  id INT REFERENCES Departamento(codigo)\n);\n\nCREATE TABLE Departamento (\n  codigo INT PRIMARY KEY,\n  nome VARCHAR(100),\n  orcamento DECIMAL(15,2)\n);\n</code></pre>\n\n**Considerando a sintaxe em SQL, que alternativa mostra o nome das pessoas e o nome do departamento que possui o maior orçamento?**\n\n<pre><code>a) select p.nome, d.nome from pessoa p join departamento d on p.id = d.codigo where orcamento = (select max(orcamento) from departamento);\n\nb) select p.nome, d.nome, max (orcamento) from pessoa p join departamento on p.id = d.codigo;\n\nc) select nome, nome from pessoa join departamento on p.id = d.codigo where orcamento = (select max(orcamento) from departamento);\n\nd) select p.nome, d.nome from pessoa p, departamento d where orcamento like (select max(orcamento) from departamento);\n</code></pre>",
      "type": "radio",
      "options": [
        "a",
        "b",
        "c",
        "d"
      ],
      "correctAnswer": 0,
      "justification": "A consulta `select p.nome, d.nome from pessoa p join departamento d on p.id = d.codigo where orcamento = (select max(orcamento) from departamento)` identifica corretamente os nomes das pessoas e dos departamentos com o maior orçamento.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_subqueries.asp"
      ]
    }
,
  {
    "question": "Sobre segurança de informação em banco de dados, é correto afirmar que**\n\n<pre><code>a) a confidencialidade do banco de dados refere-se à disponibilidade que os dados deverão possuir para serem consultados com usuário habilitado.\nb) o administrador do banco de dados pode atribuir privilégios somente para os usuários do sistema.\nc) as sessões de login são responsáveis pelo registro e permissões dos usuários a determinados dados do banco de dados.\nd) a criptografia dos dados e o controle de inferência podem ser adotados como medidas de controle.\n</code></pre>",
    "type": "radio",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 3,
    "justification": "A criptografia de dados e o controle de inferência são medidas eficazes para garantir a segurança da informação em bancos de dados, protegendo contra acessos não autorizados e vazamento de informações sensíveis.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.oracle.com/database/security/"
    ]
  },
  {
    "question": "As falhas das transações precisam ser devidamente tratadas pelo sistema de banco de dados. NÃO representa uma falha de transação a(o)**\n\n<pre><code>a) imposição de controle de concorrência.\nb) commit da transação.\nc) defeito de leitura no disco.\nd) incêndio.\n</code></pre>",
    "type": "radio",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 1,
    "justification": "O commit de uma transação é parte do funcionamento normal de um sistema de banco de dados e não representa uma falha, mas sim a conclusão bem-sucedida de uma transação.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.ibm.com/docs/en/db2-for-zos/11?topic=rollback-unit-work"
    ]
  },
  {
    "question": "A cláusula que permite aplicar uma condição sobre a informação de resumo em uma consulta e que pode aparecer em conjunto com a cláusula GROUP BY é conhecida como**\n\n<pre><code>a) WHERE.\nb) SORTED.\nc) HAVING.\nd) SELECT.\n</code></pre>",
    "type": "radio",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 2,
    "justification": "A cláusula `HAVING` é usada para aplicar condições em grupos de dados que foram resumidos com a cláusula `GROUP BY`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_having.asp"
    ]
  },
    {
    "question": "Em terminologia SQL, uma VIEW é uma única tabela que é derivada obrigatoriamente de uma tabela, derivada de outras tabelas, derivada de todas as tabelas do banco de dados, ou utilizada como cópia de segurança do banco de dados?",
    "type": "radio",
    "options": [
      "derivada obrigatoriamente de uma tabela",
      "derivada de outras tabelas",
      "derivada de todas as tabelas do banco de dados",
      "utilizada como cópia de segurança do banco de dados"
    ],
    "correctAnswer": 1,
    "justification": "Uma VIEW em SQL é derivada de outras tabelas e age como uma tabela virtual que representa o resultado de uma consulta.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_view.asp"
    ]
  },
  {
    "question": "O tipo de árvore B-tree utilizada para pesquisas possui restrições que garantem que a árvore esteja sempre balanceada. Isto permite que caso ocorram exclusões na tabela, o espaço desperdiçado em disco não se torne excessivo. Este recurso faz com que os algoritmos de inclusão e exclusão se tornem mais complexos, menos complexos, necessariamente de aproximação, ou NP completos?",
    "type": "radio",
    "options": [
      "algoritmos de inclusão e exclusão se tornem mais complexos",
      "algoritmos de inclusão e exclusão se tornem menos complexos",
      "algoritmos de inclusão e exclusão tenham que, necessariamente ser de aproximação",
      "algoritmos de inclusão e exclusão sejam NP completos"
    ],
    "correctAnswer": 1,
    "justification": "As árvores B-trees são projetadas para manter o balanceamento durante operações de inclusão e exclusão, o que reduz a complexidade do processo.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.geeksforgeeks.org/introduction-of-b-tree-2/"
    ]
  },
  {
    "question": "Quais são as quatro medidas de controle principais para fornecer segurança nos bancos de dados?",
    "type": "radio",
    "options": [
      "Controle de Performance, Controle de Inferência, Controle de Fluxo e Criptografia de Dados",
      "Controle de Performance, Controle de Inferência, Controle de Processamento e Criptografia de Dados",
      "Controle de Acesso, Controle de Inferência, Controle de Processamento e Criptografia de Dados",
      "Controle de Acesso, Controle de Inferência, Controle de Fluxo e Criptografia de Dados"
    ],
    "correctAnswer": 3,
    "justification": "As principais medidas de controle são Controle de Acesso, Controle de Inferência, Controle de Fluxo e Criptografia de Dados, que garantem a proteção dos dados contra acessos não autorizados e manipulações indevidas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.ibm.com/docs/en/db2/11.5?topic=concepts-security-database-system"
    ]
  },
  {
    "question": "Sobre os modelos de projeto de bancos de dados: O modelo descreve os dados em alto nível a serem manipulados no banco de dados de forma independente do SGBD a ser utilizado. Já o modelo descreve a estrutura das tabelas e leva em consideração as restrições do SGBD a ser utilizado, tais como procedimentos e restrições de acesso.",
    "type": "radio",
    "options": [
      "lógico, físico",
      "conceitual, físico",
      "conceitual, lógico",
      "lógico, conceitual"
    ],
    "correctAnswer": 2,
    "justification": "O modelo conceitual é independente do SGBD e foca no entendimento geral dos dados, enquanto o modelo lógico considera as estruturas do banco e suas restrições.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.tutorialspoint.com/dbms/data_model.htm"
    ]
  },
  {
    "question": "Sobre a definição de procedimentos (Stored Procedures) e seus parâmetros no SGBD MySQL, marque com V (verdadeiro) ou F (falso): </br>( ) O modo IN serve para indicar que um parâmetro é apenas para entrada de dados. </br>( ) O modo OUT serve para indicar que um parâmetro é apenas para saída de dados. </br>( ) Caso o modo seja omitido em um parâmetro, o mesmo será tratado como INOUT.",
    "type": "radio",
    "options": [
      "F, V, F",
      "V, F, F",
      "V, V, F",
      "V, V, V"
    ],
    "correctAnswer": 2,
    "justification": "O MySQL utiliza os modos IN, OUT e INOUT para definir o comportamento dos parâmetros em stored procedures. A omissão do modo não é tratada como INOUT, mas sim como IN.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html"
    ]
  },
  {
    "question": "Sobre o gerenciamento de procedimentos (Stored Procedures) no SGBD MySQL, assinale a sentença cujo comando remove o procedimento chamado meu_procedimento, sem que o SGBD apresente uma mensagem de erro caso ele não exista:",
    "type": "radio",
    "options": [
      "DELETE PROCEDURE 'meu_procedimento' WITH GRANT",
      "DELETE PROCEDURE IF EXISTS 'meu_procedimento'",
      "DROP PROCEDURE 'meu_procedimento' IF NOT EXISTS",
      "DROP PROCEDURE IF EXISTS 'meu_procedimento'"
    ],
    "correctAnswer": 3,
    "justification": "O comando correto é `DROP PROCEDURE IF EXISTS 'meu_procedimento';`, que remove um procedimento sem lançar erros caso ele não exista.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://dev.mysql.com/doc/refman/8.0/en/drop-procedure.html"
    ]
  },
  {
    "question": "Sobre a utilização de procedimentos (Stored Procedures) e funções no SGBD MySQL, analise as sentenças: </br>I. Um procedimento só pode ser invocado através do operador CALL. </br>II.Um procedimento que não possui parâmetros pode ser invocado pelo seu nome, sem o uso de parênteses para indicar a área de parâmetros. </br>III.Uma função pode ser invocada dentro de um comando SELECT.",
    "type": "radio",
    "options": [
      "Somente as sentenças I e II estão corretas",
      "Somente as sentenças II e III estão corretas",
      "Somente as sentenças I e III estão corretas",
      "Todas as sentenças estão corretas"
    ],
    "correctAnswer": 2,
    "justification": "Os procedimentos só podem ser chamados com CALL e não podem ser usados em SELECT. Por outro lado, funções podem ser invocadas diretamente em SELECT.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://dev.mysql.com/doc/refman/8.0/en/create-procedure.html"
    ]
  },
    {
    "question": "Considere duas tabelas, criadas pelos comandos SQL a seguir, contendo dados de contas bancárias e cheques emitidos por estas contas, respectivamente.<br><br><pre><code>CREATE TABLE CONTA ( <br>    ID_CONTA INTEGER PRIMARY KEY, <br>    NOME_CORRENTISTA VARCHAR(100) NOT NULL, <br>    SALDO DECIMAL(10,2) NOT NULL <br>); <br><br>CREATE TABLE CHEQUE ( <br>    ID_CHEQUE INTEGER PRIMARY KEY, <br>    DESTINATARIO VARCHAR(100) NOT NULL, <br>    VALOR DECIMAL(10,2) NOT NULL, <br>    ID_CONTA INTEGER NOT NULL, <br>    FOREIGN KEY (ID_CONTA) <br>        REFERENCES CONTA(ID_CONTA) <br>);</code></pre><br>Assinale a alternativa que apresenta o código SQL para mostrar o nome de todos os correntistas, juntamente com o número total de cheques emitidos por cada um deles.",
    "type": "radio",
    "options": [
      "SELECT NOME_CORRENTISTA, SUM(VALOR) FROM CONTA AS CC, CHEQUE AS CH WHERE CC.ID_CONTA = CH.ID_CONTA GROUP BY NOME_CORRENTISTA;",
      "SELECT NOME_CORRENTISTA, COUNT(VALOR) FROM CONTA AS CC, CHEQUE AS CH WHERE CC.ID_CONTA = CH.ID_CONTA ORDER BY CC.ID_CONTA;",
      "SELECT NOME_CORRENTISTA, COUNT(CH.ID_CHEQUE) AS TOTAL_CHEQUES FROM CONTA AS CC INNER JOIN CHEQUE AS CH ON CC.ID_CONTA = CH.ID_CONTA GROUP BY NOME_CORRENTISTA;",
      "SELECT NOME_CORRENTISTA, COUNT(VALOR) FROM CONTA INNER JOIN CHEQUE ON CC.ID_CONTA = CH.ID_CONTA GROUP BY NOME_CORRENTISTA;"
    ],
    "correctAnswer": 2,
    "justification": "O código correto utiliza `INNER JOIN` para combinar as tabelas e `COUNT(CH.ID_CHEQUE)` para contar o número total de cheques emitidos por cada correntista. A cláusula `GROUP BY` agrupa os resultados por nome do correntista.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_join_inner.asp",
      "https://dev.mysql.com/doc/refman/8.0/en/group-by-functions.html"
    ]
  },
  {
    "question": "Assinale com V (verdadeiro) ou F (falso) às afirmações abaixo sobre a linguagem SQL:<br><br>( ) Usando a cláusula ORDER BY, o SQL permite que o usuário ordene as tuplas no resultado de uma consulta pelos valores de um ou mais atributos que aparecem.<br>( ) Atributos com a restrição FOREIGN KEY não permitem o valor nulo.<br>( ) A consulta:<br><pre><code>SELECT * FROM PESSOA WHERE IDADE BETWEEN 18 AND 65;</code></pre>é equivalente à consulta:<br><pre><code>SELECT * FROM PESSOA WHERE (IDADE > 18) AND (IDADE < 65);</code></pre>",
    "type": "radio",
    "options": [
      "F, V, F",
      "V, F, V",
      "V, V, F",
      "V, F, F"
    ],
    "correctAnswer": 1,
    "justification": "A cláusula `ORDER BY` permite ordenar os resultados. A restrição `FOREIGN KEY` pode permitir valores nulos se a referência for opcional. A consulta com `BETWEEN` não é equivalente à comparação `(IDADE > 18) AND (IDADE < 65)` porque `BETWEEN` inclui os valores extremos.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_foreignkey.asp",
      "https://www.w3schools.com/sql/sql_orderby.asp",
      "https://www.w3schools.com/sql/sql_between.asp"
    ]
  },
  {
    "question": "Considere duas tabelas, criadas pelos comandos SQL a seguir, contendo dados dos empregados de uma empresa e seus respectivos dependentes:<br><br><pre><code>CREATE TABLE EMPREGADO ( <br>    CPF CHAR(11) PRIMARY KEY, <br>    NOME VARCHAR(100) NOT NULL, <br>    SALARIO DECIMAL(10,2) NOT NULL, <br>    SEXO CHAR NOT NULL <br>); <br><br>CREATE TABLE DEPENDENTE ( <br>    EMP_CPF CHAR(11), <br>    NUM_SEQ INTEGER, <br>    NOME VARCHAR(50) NOT NULL, <br>    SEXO CHAR NOT NULL, <br>    PRIMARY KEY (EMP_CPF, NUM_SEQ), <br>    FOREIGN KEY (EMP_CPF) REFERENCES EMPREGADO(CPF) <br>);</code></pre><br>Com referência à seguinte consulta SQL, marque a alternativa CORRETA:<br><br><pre><code>SELECT * FROM EMPREGADO AS E <br>WHERE E.CPF IN ( <br>    SELECT D.EMP_CPF FROM DEPENDENTE AS D <br>    WHERE E.NOME = D.NOME AND E.SEXO = D.SEXO <br>);</code></pre>",
    "type": "radio",
    "options": [
      "Recupera todos os dados de cada empregado que possui pelo menos um dependente com o mesmo nome e mesmo sexo do empregado.",
      "Recupera todos os dados de cada empregado que possui algum dependente com o mesmo nome ou mesmo sexo do empregado.",
      "Recupera todos os dados de cada empregado que possui algum dependente com o mesmo nome e o mesmo CPF.",
      "Recupera todos os dados de cada empregado que possui algum dependente com o mesmo CPF e diferente sexo do empregado."
    ],
    "correctAnswer": 0,
    "justification": "A consulta SQL utiliza a cláusula `WHERE` para verificar se o CPF do empregado está na subconsulta que filtra dependentes com o mesmo nome e mesmo sexo do empregado. Portanto, a resposta correta é que ela recupera todos os dados de cada empregado que possui pelo menos um dependente com o mesmo nome e mesmo sexo.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_in.asp",
      "https://www.w3schools.com/sql/sql_subqueries.asp"
    ]
  },
  {
    "question": "Considere as seguintes afirmações sobre o modelo de dados relacional e as restrições de integridade em bancos de dados relacionais:<br><br>I. O modelo relacional representa o banco de dados como uma coleção de relações. Cada relação é definida como um conjunto de tuplas obrigatoriamente ordenado.<br><br>II. A restrição de integridade de entidade determina que nenhum valor de chave primária pode ser NULL.<br><br>III. A restrição de integridade referencial é especificada entre duas relações e usada para manter a consistência entre tuplas nessas duas relações. Informalmente, a restrição de integridade referencial afirma que uma tupla em uma relação que referencia outra relação precisa se referir a uma tupla existente nessa relação.<br><br>Estão corretas as afirmativas:",
    "type": "radio",
    "options": [
      "Somente as sentenças I e II estão corretas.",
      "Somente as sentenças II e III estão corretas.",
      "Somente as sentenças I e III estão corretas.",
      "Todas as sentenças estão corretas."
    ],
    "correctAnswer": 1,
    "justification": "A sentença I está incorreta porque, no modelo relacional, as relações (tabelas) são conjuntos de tuplas não ordenados. Já as sentenças II e III estão corretas, pois as restrições de integridade de entidade e referencial são princípios fundamentais dos bancos de dados relacionais.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://en.wikipedia.org/wiki/Relational_model",
      "https://www.w3schools.com/sql/sql_constraints.asp"
    ]
  },
  {
  "question": "Considere um banco de dados contendo a tabela abaixo, a qual armazena a distância percorrida por motoristas de uma empresa em determinados meses:<br><br><img src=\"./_images/3.png\" alt=\"Tabela de deslocamentos\"><br><br>Foi executada a consulta:<br><br><pre><code>SELECT MOTORISTA, SUM(DISTANCIA) AS TOTAL  <br>FROM DESLOCAMENTOS  <br>GROUP BY MOTORISTA  <br>HAVING TOTAL > 1000;</code></pre><br>Assinale a alternativa que contém o número de linhas retornadas pela consulta acima.",
  "type": "radio",
  "options": [
    "0",
    "1",
    "2",
    "6"
  ],
  "correctAnswer": 1,
  "justification": "A consulta SQL agrupa os registros por motorista e calcula a soma da distância percorrida para cada motorista. A cláusula HAVING filtra os resultados, incluindo apenas motoristas com um total maior que 1000. Após analisar a tabela, apenas a motorista 'Maria' atende a essa condição, com um total de 1784 km percorridos. Portanto, a consulta retorna 1 linha.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_groupby.asp",
    "https://www.w3schools.com/sql/sql_having.asp"
  ]
},
  {
    "question": "Em Banco de Dados, define-se para cada usuário o nível de acesso a ele concedido (leitura, leitura e gravação ou sem acesso) a afirmativa:",
    "type": "radio",
    "options": [
      "Independência dos dados.",
      "Restrições de segurança.",
      "Compartilhamento de dados.",
      "Padronização dos dados."
    ],
    "correctAnswer": 1,
    "justification": "O nível de acesso concedido a um usuário em um banco de dados está relacionado às restrições de segurança, que garantem que apenas usuários autorizados possam realizar determinadas operações como leitura, escrita ou exclusão de dados.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_grant_revoke.asp"
    ]
  },
  {
    "question": "Analise a seguinte sintaxe do SQL:<br><br><pre><code>Select depto, avg(salario)<br>From Emp<br>Group by depto<br>Where avg(salario)>150;</code></pre><br>Qual alternativa apresenta a descrição correta do comando?",
    "type": "radio",
    "options": [
      "Mostra todos os departamentos que tem média de salário maior do que 150.",
      "Mostra todos os departamentos com salários maior do que 150.",
      "Mostra todos os departamentos com suas médias.",
      "Não vai consultar, pois onde diz “Where” deve estar “Having”."
    ],
    "correctAnswer": 3,
    "justification": "O comando SQL apresentado contém um erro de sintaxe. A cláusula `WHERE` não pode ser utilizada para filtrar os resultados de funções de agregação como `AVG`. Para esse caso, a cláusula correta seria `HAVING`. Portanto, a consulta não será executada como está escrita.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_having.asp"
    ]
  },
  {
    "question": "Em Banco de Dados, o que caracteriza um relacionamento binário?",
    "type": "radio",
    "options": [
      "Contém duas ocorrências de entidades em cada ocorrência.",
      "Contém um relacionamento e uma entidade.",
      "Contém um relacionamento e duas entidades.",
      "Contém dois relacionamentos e duas entidades."
    ],
    "correctAnswer": 2,
    "justification": "Um relacionamento binário em banco de dados é caracterizado pelo fato de envolver duas entidades. Este é o tipo mais comum de relacionamento no modelo relacional.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.geeksforgeeks.org/types-of-relationships-in-dbms/"
    ]
  },
  {
    "question": "Em relação ao Grau de relacionamento em um Banco de Dados, afirma-se que representa:",
    "type": "radio",
    "options": [
      "A quantidade de entidades que estão ligadas em um relacionamento.",
      "A quantidade de atributos que contém cada relacionamento.",
      "O número de entidades que se relacionam em um modelo conceitual.",
      "O número de ocorrências entre duas entidades."
    ],
    "correctAnswer": 0,
    "justification": "O grau de um relacionamento é definido pelo número de entidades envolvidas no relacionamento. Por exemplo, um relacionamento binário tem grau 2, enquanto um relacionamento ternário tem grau 3.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.studytonight.com/dbms/entity-relationship-model.php"
    ]
  },
  {
    "question": "A linguagem SQL é dividida em subconjuntos de acordo com as operações que queremos efetuar sobre um banco de dados. Existem alguns comandos classificados como comandos do tipo D.M.L. (Data Manipulation Language). A afirmativa que apresenta apenas comandos desse tipo, é:",
    "type": "radio",
    "options": [
      "Update e Create.",
      "Insert e Alter.",
      "Select e Drop.",
      "Select e Update."
    ],
    "correctAnswer": 3,
    "justification": "Os comandos do tipo DML (Data Manipulation Language) são usados para manipular os dados no banco, como `SELECT`, `INSERT`, `UPDATE` e `DELETE`. Já `CREATE` e `DROP` pertencem à DDL (Data Definition Language).",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_ref_keywords.asp"
    ]
  },
  {
  "question": "Considere o resultado do mapeamento do modelo conceitual apresentado abaixo para responder às questões:<br><br><img src=\"./_images/4.png\" alt=\"Figura 1 - Modelo ExR\" width=\"800px\"><br>Qual é a afirmativa correta para inserir dados na tabela Empregado?",
  "type": "radio",
  "options": [
    "insert empregado (\"1\", \"João\").",
    "insert empregado values (\"João\").",
    "insert into empregado (cod_emp) values (10).",
    "insert into values (10,\"João\")."
  ],
  "correctAnswer": 2,
  "justification": "A sintaxe correta para inserir dados em uma tabela em SQL exige o uso do comando `INSERT INTO`, seguido pelo nome da tabela e, opcionalmente, os nomes das colunas em que os valores devem ser inseridos. No caso, a opção correta usa a sintaxe padrão e especifica a coluna `cod_emp` corretamente.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_insert.asp"
  ]
},

    {
      "question": "Considere o resultado do mapeamento do modelo conceitual apresentado abaixo:<br><br><img src=\"./_images/4.png\" alt=\"Figura 1 - Modelo ExR\" width=\"800px\"><br>Qual é a afirmativa correta para o comando SQL de definir uma visão?",
      "type": "radio",
      "options": [
        "create view modelo as select nome, descricao from empregado.",
        "create view v_emp (select nome from empregado).",
        "create view emp select nome from departamento.",
        "create view v_visao as select nome, descricao from empregado e, departamento d where e.cod_depto = d.cod_depto."
      ],
      "correctAnswer": 3,
      "justification": "A sintaxe para criar uma visão SQL correta é usar `CREATE VIEW nome_da_visao AS`, seguida por uma consulta válida. A opção correta especifica a junção entre as tabelas `empregado` e `departamento` com a condição apropriada de igualdade entre as chaves relacionadas.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_view.asp"
      ]
    },
    {
      "question": "Considere o resultado do mapeamento do modelo conceitual apresentado abaixo:<br><br><img src=\"./_images/4.png\" alt=\"Figura 1 - Modelo ExR\" width=\"800px\"><br>A afirmativa que apresenta um comando SQL correto, é:",
      "type": "radio",
      "options": [
        "update empregado set nome= 'Marcos' where cod_emp = 10.",
        "update empregado nome = 'Marcos' where cod_emp = departamento.cod_empr.",
        "alter table empregado add column salario.",
        "grant update to usuário_teste on Departamento."
      ],
      "correctAnswer": 0,
      "justification": "A opção correta utiliza a sintaxe apropriada para o comando `UPDATE` no SQL, onde a tabela `empregado` é atualizada e o campo `nome` recebe o valor 'Marcos' com base na condição especificada no `WHERE`.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_update.asp"
      ]
    },
	    {
      "question": "Qual é a alternativa que NÃO está de acordo com o conceito de modelo entidade-relacionamento?",
      "type": "radio",
      "options": [
        "O modelo entidade-relacionamento foi criado para sanar a dificuldade dos projetistas de banco de dados em representar toda a semântica associada aos dados presentes no minimundo.",
        "O modelo entidade-relacionamento é um modelo de dados de alto nível.",
        "O modelo entidade-relacionamento é utilizado na fase do projeto conceitual do banco de dados.",
        "No modelo entidade-relacionamento, são abordados detalhes sobre implementação, o que torna fácil a compreensão do esquema."
      ],
      "correctAnswer": 3,
      "justification": "O modelo entidade-relacionamento não aborda detalhes sobre implementação, sendo focado na representação abstrata dos dados no nível conceitual.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_er_model.asp"
      ]
    },
    {
      "question": "Em um modelo relacional, é correto afirmar que:",
      "type": "radio",
      "options": [
        "a entidade que possui atributo-chave é uma entidade fraca.",
        "a entidade que não possui nenhum atributo-chave é uma entidade fraca.",
        "as entidades fracas têm a característica de serem identificadas por meio de uma associação com outra entidade chamada entidade-chave.",
        "uma entidade forte é caracterizada por possuir atributos-identificadores."
      ],
      "correctAnswer": 2,
      "justification": "Entidades fracas não possuem um atributo identificador próprio e dependem de uma entidade forte para serem identificadas, utilizando uma associação com essa entidade.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.database.guide/weak-and-strong-entities/"
      ]
    },
    {
      "question": "Com relação à normalização, NÃO é correto afirmar que:",
      "type": "radio",
      "options": [
        "a normalização é um processo de refinamento do esquema de banco de dados que tem como objetivo eliminar possíveis redundâncias.",
        "o processo de normalização é dividido em várias etapas, denominadas “formas normais”.",
        "a abordagem de normalização Bottom-Up também é conhecida como “projeto por síntese”.",
        "podem ser utilizados dois tipos de abordagens/metodologias no processo de normalização de um banco de dados: Top-Bottom e Bottom-Up."
      ],
      "correctAnswer": 3,
      "justification": "A abordagem Bottom-Up é conhecida como 'projeto por análise', e não 'projeto por síntese'.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_normalization.asp"
      ]
    },
    {
      "question": "Considere os seguintes itens:<br><br>\n\nI. FLOAT, SMALLINT, DECIMAL, INTEGER<br>\nII. NUMERIC, DOUBLE PRECISION, DATE, BLOB<br>\nIII. VARCHAR, TIME, DATE, NUMERIC<br><br>\n\nQuais itens contêm exclusivamente tipos de dados válidos para a criação de tabelas utilizando os comandos de definição de dados (DDL)?",
      "type": "radio",
      "options": [
        "I, II e III.",
        "I e II, apenas.",
        "I e III, apenas.",
        "II e III, apenas."
      ],
      "correctAnswer": 0,
      "justification": "Todos os itens mencionados contêm tipos de dados válidos que podem ser usados em definições de tabelas em SQL.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_datatypes.asp"
      ]
    },
{
  "question": "Considere as tabelas **\"emprestimo\"** e **\"tomador\"** abaixo:<br><br>\n\n<img src=\"./_images/5.png\" alt=\"Tabela Emprestimo\" style=\"max-width: 80%; height: auto;\"><br><br>\n\nQual das seguintes expressões SQL retornará a tabela abaixo?<br><br>\n\n<img src=\"./_images/6.png\" alt=\"Tabela Resultado\" style=\"max-width: 60%; height: auto;\"><br><br>",
  "type": "radio",
  "options": [
    "emprestimo left outer join tomador on emprestimo.numero_emprestimo = tomador.numero_emprestimo.",
    "emprestimo natural inner join tomador.",
    "emprestimo inner join tomador on emprestimo.numero_emprestimo = tomador.numero_emprestimo.",
    "emprestimo natural right outer join tomador."
  ],
  "correctAnswer": 2,
  "justification": "A expressão `emprestimo inner join tomador on emprestimo.numero_emprestimo = tomador.numero_emprestimo` retorna somente as linhas que possuem correspondência entre as tabelas **emprestimo** e **tomador**, com base no campo **numero_emprestimo**, produzindo a tabela esperada.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_join_inner.asp",
    "https://www.postgresql.org/docs/current/queries-table-expressions.html"
  ]
},

{
  "question": "Considere a expressão SQL abaixo:<br><br>\n\n<pre><code>SELECT NUMERO_EMPRESTIMO\nFROM EMPRESTIMO\nWHERE QUANTIA IS NULL\n</code></pre>\n\nÉ correto afirmar que:",
  "type": "radio",
  "options": [
    "a palavra-chave especial null pode ser utilizada em um predicado para testar a presença de um valor nulo.",
    "a SQL não permite o uso de valores nulos.",
    "o predicado is not null testa a presença de um valor nulo.",
    "a SQL trata como unknown o resultado de qualquer comparação envolvendo um valor nulo."
  ],
  "correctAnswer": 0,
  "justification": "A palavra-chave especial `IS NULL` é utilizada em SQL para verificar se um campo contém um valor nulo. Valores nulos são permitidos em SQL e são usados para representar informações ausentes ou desconhecidas.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_null_values.asp"
  ]
},
{
  "question": "Considere as tabelas descritas abaixo:<br><br>\n\n<img src=\"./_images/7.png\" alt=\"Tabelas de clientes e compras\"><br>\n\nQual comando SQL mostra como resultado o nome do cliente e o valor total de suas compras?",
  "type": "radio",
  "options": [
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.CLIENTE.",
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.ID GROUP BY NOME.",
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.CLIENTE GROUP BY NOME.",
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS GROUP BY NOME."
  ],
  "correctAnswer": 2,
  "justification": "A consulta `SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.CLIENTE GROUP BY NOME` realiza a junção correta das tabelas `clientes` e `compras` com base na coluna correspondente, agrupa os resultados pelo nome do cliente e calcula o total de suas compras usando `SUM(TOTAL)`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_groupby.asp"
  ]
},
  {
    "question": "Sobre Banco de Dados, são feitas as seguintes afirmações:<br><br>\nI. Segundo SILVERSCHATZ (2006), um Sistema Gerenciador de Bancos de Dados (SGBD) é uma coleção de arquivos e programas inter-relacionados que permitem ao usuário o acesso a consultas e alterações de dados.<br>\nII. Nível lógico é o nível médio de abstração que descreve quais dados estão armazenados no banco de dados e quais os inter-relacionamentos entre eles.<br>\nIII. Nível de visão é o nível mais baixo de abstração que descreve como os dados estão de fato armazenados.<br><br>\nEstá(ão) correta(s) apenas a(s) afirmativa(s):",
    "type": "radio",
    "options": [
      "I.",
      "II.",
      "I e II.",
      "II e III."
    ],
    "correctAnswer": 2,
    "justification": "As afirmações I e II estão corretas. A definição de SILVERSCHATZ para SGBD é precisa, e o nível lógico de abstração descreve os dados e seus relacionamentos. A afirmação III está incorreta, pois o nível de visão descreve como os dados são apresentados aos usuários, e não como são armazenados.",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_intro.asp"
    ],
	  "screenshots": [],
  "videos": []
  },
  {
    "question": "Que informação está INCORRETA?",
    "type": "radio",
    "options": [
      "Atributos podem ser representados pelas propriedades de entidades (tabelas). O atributo serve para caracterizar uma tabela.",
      "Ocorrência é um conteúdo ou dado inserido em um atributo de uma entidade (uma linha dentro de uma tabela).",
      "Relacionamento é uma ligação ou uma associação entre as entidades.",
      "Ocorrências podem ser exemplificadas como: 1:1, 1:N, N:N."
    ],
    "correctAnswer": 3,
    "justification": "A alternativa 'Ocorrências podem ser exemplificadas como: 1:1, 1:N, N:N.' está incorreta, pois essas são cardinalidades de relacionamento, não de ocorrências.",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_relationships.asp"
    ],
	  "screenshots": [],
  "videos": []
  },
  {
    "question": "Sobre Banco de Dados, são feitas as seguintes afirmações:<br><br>\nI. O ER ou DER é uma ferramenta de modelagem, muito utilizada em projetos de banco de dados.<br>\nII. Um banco de dados representa alguns aspectos do mundo real, sendo chamado às vezes de mini-mundo.<br>\nIII. A implementação de um banco corresponde ao modelo lógico.<br><br>\nEstão corretas as afirmativas:",
    "type": "radio",
    "options": [
      "I e III apenas.",
      "I e II apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "justification": "As afirmações II e III estão corretas. Um banco de dados é, de fato, um modelo do mundo real (mini-mundo) e sua implementação corresponde ao modelo lógico. A afirmação I está incorreta, pois o ER é utilizado no projeto conceitual e não no lógico.",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_normalization.asp"
    ],
	  "screenshots": [],
  "videos": []
  },
  {
    "question": "Marque a alternativa INCORRETA:",
    "type": "radio",
    "options": [
      "Cardinalidade mínima 1 = 'associação obrigatória' e Cardinalidade mínima N = 'associação opcional'.",
      "Generalização/Especialização: através desses conceitos é possível atribuir propriedades particulares a um subconjunto de ocorrências (especializadas) de uma entidade genérica.",
      "Na transformação de um relacionamento com cardinalidade N:N, a cardinalidade da entidade criada (associativa) fica com cardinalidade reduzida (0,1) ou (1,1) em cada uma de suas relações.",
      "Entidade associativa é a redefinição de um relacionamento, que passa a ser tratado como uma entidade."
    ],
    "correctAnswer": 2,
    "justification": "A afirmação 'Na transformação de um relacionamento com cardinalidade N:N, a cardinalidade da entidade criada (associativa) fica com cardinalidade reduzida (0,1) ou (1,1) em cada uma de suas relações.' está incorreta, pois as cardinalidades devem refletir as relações originais (N:N).",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_foreignkey.asp"
    ],
	  "screenshots": [],
  "videos": []
  },
  {
    "question": "Considere as propriedades das transações (propriedades ACID):<br><br>\nI. Atomicidade – cada transação deve ter uma visão constante do banco de dados, sem levar em consideração qualquer outra transação. Durabilidade - Todas as operações de transações são refletidas corretamente no banco de dados, ou nenhuma delas.<br>\nII. Consistência – depois da transação, o banco de dados precisa salvar os dados corretamente e protegê-lo da falta de energia ou outras ameaças. Atomicidade – todas as partes da transação devem ser completadas ou nenhuma delas será completada.<br>\nIII. Isolamento – cada transação deve ter uma visão constante do banco de dados, sem levar em consideração qualquer outra transação. Durabilidade – depois que uma transação for completada com sucesso, as mudanças realizadas por ela no banco de dados persistem, mesmo que existam falhas no sistema.<br><br>\nEstá(ão) correta(s) apenas a(s) afirmativa(s):",
    "type": "radio",
    "options": [
      "I.",
      "II.",
      "III.",
      "I e II."
    ],
    "correctAnswer": 2,
    "justification": "A afirmativa III está correta, descrevendo adequadamente as propriedades de Isolamento e Durabilidade. As demais apresentam descrições incorretas ou confusas das propriedades ACID.",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_transactions.asp"
    ],
	  "screenshots": [],
  "videos": []
  },
  {
    "question": "Sobre os estados da transação elencados, a sequência correta é:",
    "type": "radio",
    "options": [
      "ativa, parcialmente confirmada (em efetivação parcial), falha, confirmada (em efetivação) e abortada.",
      "ativa, parcialmente confirmada (em efetivação parcial), falha, abortada.",
      "ativa, falha, abortada, parcialmente confirmada (em efetivação parcial) e confirmada (em efetivação).",
      "ativa, parcialmente confirmada (em efetivação parcial), falha, abortada e confirmada (em efetivação)."
    ],
    "correctAnswer": 3,
    "justification": "A sequência correta reflete o ciclo de vida típico de uma transação, indo de ativa a confirmada ou abortada, passando pelos estados intermediários.",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_transactions.asp"
    ],
		  "screenshots": [],
  "videos": []
  },
  {
    "question": "Para reverter uma das transações envolvidas no deadlock, qual o comando mais adequado?",
    "type": "radio",
    "options": [
      "Commit.",
      "Rollback to savepoint.",
      "Savepoint.",
      "Rollback."
    ],
    "correctAnswer": 3,
    "justification": "O comando `ROLLBACK` reverte as transações em caso de deadlock, desfazendo todas as operações realizadas pela transação.",
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_commit_rollback.asp"
    ],
		  "screenshots": [],
  "videos": []
  },
{
  "question": "Considerando o diagrama abaixo:<br><br><img src=\"./_images/8.png\" alt=\"Diagrama do banco de dados\" style=\"max-width: 800px;\"><br><br>**Que alternativa representa a instrução SQL que resolve a seguinte consulta no Banco de Dados:**<br>\"Exiba o nome do funcionário e a descrição do cargo para todos os funcionários que tenham o cargo de 'Programador'.\"<br><br><pre><code>a) SELECT f.nome, c.descricao\nFROM funcionario f, cargo c, funcionario_cargo fc\nWHERE f.matricula=fc.matricula\nAND fc.cod_cargo=c.cod_cargo\nOR INITCAP(c.descricao)='Programador';\n\nb) SELECT f.nome, c.descricao\nFROM funcionario f, cargo c, funcionario_cargo fc\nWHERE f.matricula=fc.matricula\nAND fc.cod_cargo=c.cod_cargo\nAND UPPER(c.descricao)='Programador';\n\nc) SELECT f.nome, c.descricao\nFROM funcionario f, cargo c, funcionario_cargo fc\nWHERE f.matricula=fc.matricula\nAND fc.cod_cargo=c.cod_cargo\nAND INITCAP(c.descricao)='Programador';\n\nd) SELECT f.nome, c.descricao\nFROM funcionario f, cargo c, funcionario_cargo fc\nWHERE f.matricula=fc.matricula\nAND fc.cod_cargo=c.cod_cargo\nAND LOWER(c.descricao)='PROGRAMADOR';</code></pre>",
  "type": "radio",
  "options": [
    "a",
    "b",
    "c",
    "d"
  ],
  "correctAnswer": 2,
  "justification": "A consulta `SELECT f.nome, c.descricao FROM funcionario f, cargo c, funcionario_cargo fc WHERE f.matricula=fc.matricula AND fc.cod_cargo=c.cod_cargo AND INITCAP(c.descricao)='Programador';` exibe corretamente o nome e a descrição do cargo para os funcionários que possuem o cargo 'Programador', garantindo que a capitalização seja tratada adequadamente.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_join.asp"
  ]
},
  {
    "question": "Considere o diagrama abaixo:<br><br><img src=\"./_images/8.png\" alt=\"Diagrama do banco de dados\" style=\"max-width: 800px;\"><br><br>**A consulta SQL abaixo, assinale (V) para as alternativas verdadeiras e (F) para as falsas:**<br><pre><code>SELECT nome, CPF, estado\nFROM funcionario\nWHERE nome LIKE '%A%'\nAND estado NOT IN ('RS', 'SC')\nAND (CPF LIKE '%1%'\n     OR CPF LIKE '%2%'\n     OR CPF LIKE '%3%')\nORDER BY estado DESC, nome ASC;</code></pre><br><strong>Avalie as afirmativas:</strong><br>\n1) A consulta exibirá nome, CPF e estado.<br>\n2) A consulta retornará informações dos funcionários que têm seu nome iniciado pela letra \"A\".<br>\n3) A consulta mostrará os funcionários que possuem no CPF, simultaneamente, os números 1, 2 e 3.<br>\n4) Os dados serão organizados em ordem descendente de nome e ascendente de estado.<br>\n5) Não serão exibidos os dados dos funcionários dos estados RS e SC.<br><br>A sequência correta, de cima para baixo, é:<br><br>a) V – F – F – F – V<br>b) V – F – V – F – V<br>c) F – V – F – V – F<br>d) V – F – V – V – F",
    "type": "radio",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 0,
    "justification": "A consulta exibe o nome, CPF e estado, exclui registros dos estados RS e SC e filtra resultados com base nas condições do nome e CPF, além de organizar os dados corretamente como indicado.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_where.asp",
      "https://www.w3schools.com/sql/sql_orderby.asp"
    ]
  },
  {
    "question": "Considere o diagrama abaixo:<br><br><img src=\"./_images/8.png\" alt=\"Diagrama do banco de dados\" style=\"max-width: 800px;\"><br><br>**\"Considerando somente os funcionários que trabalharam em mais de um departamento, mostre o nome e em quantos departamentos cada um deles trabalhou.\"**<br><br><pre><code>a) SELECT f.nome, COUNT(*)\nFROM funcionarios f, departamentos d, funcionario_departamento fd\nWHERE f.matricula=fd.matricula\nAND fd.cod_departamento=d.cod_departamento\nGROUP BY f.nome\nHAVING COUNT(*)>=2;\n\nb) SELECT f.nome\nFROM funcionarios f, departamentos d, funcionario_departamento fd\nWHERE f.matricula = fd.matricula\nAND fd.cod_departamento = d.cod_departamento\nGROUP BY f.nome\nAND COUNT(*)>=2;\n\nc) SELECT f.nome, COUNT(*)\nFROM funcionarios f, departamentos d, funcionario_departamento fd\nWHERE f.matricula = fd.matricula\nAND fd.cod_departamento = d.cod_departamento\nGROUP BY f.nome\nAND HAVING COUNT(*)>=2;\n\nd) SELECT f.nome, COUNT(*)\nFROM funcionarios f, departamentos d, funcionario_departamento fd\nWHERE f.matricula=fd.matricula\nAND fd.cod_departamento=d.cod_departamento\nGROUP BY f.nome\nHAVING COUNT(*)>2;</code></pre>",
    "type": "radio",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 0,
    "justification": "A consulta `SELECT f.nome, COUNT(*) FROM funcionarios f, departamentos d, funcionario_departamento fd WHERE f.matricula=fd.matricula AND fd.cod_departamento=d.cod_departamento GROUP BY f.nome HAVING COUNT(*)>=2;` atende ao enunciado ao retornar funcionários com mais de um departamento e o número correspondente.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_groupby.asp",
      "https://www.w3schools.com/sql/sql_having.asp"
    ]
  },
  {
  "question": "Considere a tabela de clientes descrita abaixo.<br><br><img src=\"./_images/9.png\" alt=\"Tabela de clientes\"><br><br>Ao executar o comando:<br><br><code>SELECT COUNT(CIDADE) FROM CLIENTES;</code><br><br>O número que corresponde ao resultado da consulta é:",
  "type": "radio",
  "options": [
    "2",
    "3",
    "0",
    "6"
  ],
  "correctAnswer": 0,
  "justification": "O comando `COUNT(CIDADE)` retorna a contagem de valores não nulos na coluna 'cidade'. Na tabela apresentada, há dois valores preenchidos (1 e 2), portanto, o resultado é 2.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_count_avg_sum.asp"
  ]
},
{
  "question": "Tendo definido um banco de dados, torna-se possível executar operações de manipulação de dados.<br><br>Nesse sentido, assinale a alternativa que representa os comandos de manipulação de dados da linguagem SQL (Structured Query Language).",
  "type": "radio",
  "options": [
    "ALTER, INSERT, UPDATE, SELECT",
    "ALTER, UPDATE, SELECT, DROP",
    "INSERT, UPDATE, DELETE, SELECT",
    "ALTER, INSERT, UPDATE, DELETE"
  ],
  "correctAnswer": 2,
  "justification": "Os comandos de manipulação de dados (DML - Data Manipulation Language) incluem `INSERT`, `UPDATE`, `DELETE` e `SELECT`, que são usados para inserir, atualizar, excluir e consultar dados em tabelas.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_intro.asp"
  ]
},
{
  "question": "Considere as tabelas descritas abaixo:<br><br><img src=\"./_images/10.png\" alt=\"Imagem com tabelas clientes e compras\"><br><br>Assinale qual comando SQL mostra como resultado o nome do cliente e o valor total de suas compras.",
  "type": "radio",
  "options": [
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.CLIENTE GROUP BY NOME",
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.CLIENTE",
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.ID GROUP BY NOME",
    "SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS GROUP BY NOME"
  ],
  "correctAnswer": 0,
  "justification": "O comando `SELECT NOME, SUM(TOTAL) FROM CLIENTES, COMPRAS WHERE CLIENTES.ID = COMPRAS.CLIENTE GROUP BY NOME` é correto, pois une as tabelas `CLIENTES` e `COMPRAS` pela condição de igualdade dos IDs e utiliza `GROUP BY` para agrupar os resultados pelo nome, permitindo calcular o total de compras por cliente.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_groupby.asp"
  ]
},
{
  "question": "Considere o diagrama a seguir:<br><br><img src=\"./_images/11.png\" alt=\"Figura 2 - Diagrama Entidade x Relacionamento\" style=\"max-width: 800px;\"><br><br>Sobre o diagrama afirma-se que",
  "type": "radio",
  "options": [
    "o relacionamento Consulta será mapeado no modelo relacional para uma tabela.",
    "o modelo relacional da Figura 1 terá seis tabelas.",
    "a chave primária da tabela Consulta será composta pelo atributo identificador da entidade Médico, da tabela Paciente e da tabela Medicamento.",
    "a tabela Medicamento terá uma chave estrangeira da tabela Prescrição."
  ],
  "correctAnswer": 0,
  "justification": "O relacionamento 'Consulta' no diagrama será mapeado no modelo relacional para uma tabela, pois envolve múltiplas entidades ('Médico', 'Paciente' e 'Medicamento') com cardinalidade muitos para muitos. Nesse caso, é necessário criar uma tabela intermediária para representar o relacionamento.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_foreignkey.asp",
    "https://www.geeksforgeeks.org/er-diagrams-in-dbms/"
  ]
},
    {
      "question": "Quanto à normalização, analise as afirmações abaixo:<br><br>\nI. Normalização é o conjunto de operações que obrigatoriamente devem ser executadas antes da criação de um banco de dados relacional, tendo como objetivo a melhoria dos resultados das consultas efetuadas.<br>\nII. Uma relação está na segunda forma normal (2FN) se opcionalmente estiver na primeira forma normal (1FN) e todo o atributo não chave é irredutivelmente dependente da chave primária.<br>\nIII. Uma relação está na terceira forma normal (3FN) se e somente se estiver na segunda forma normal (2FN) e todo o atributo não chave é dependente de forma não transitiva da chave primária.<br><br>\nEstá(ão) correta(s) a(s) afirmativa(s)",
      "type": "radio",
      "options": [
        "III apenas.",
        "I, II e III.",
        "II e III apenas.",
        "I apenas."
      ],
      "correctAnswer": 2,
      "justification": "A afirmativa III está correta, pois descreve corretamente os critérios para uma relação estar na terceira forma normal (3FN). A afirmativa II também está correta, pois define corretamente os critérios para a segunda forma normal (2FN). A afirmativa I está incorreta, pois a normalização não é obrigatória antes da criação do banco de dados, mas sim um processo opcional e iterativo para melhorar a integridade dos dados e reduzir redundâncias.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.geeksforgeeks.org/normal-forms-in-dbms/",
        "https://www.tutorialspoint.com/dbms/database_normalization.htm"
      ]
    },
    {
      "question": "Levando em consideração a SQL Data Query Language (DQL), analise as afirmações abaixo:<br><br>\nI. Subconsultas aninhadas são consultas que tomam uma coleção, um conjunto ou subconjunto de valores como entrada, retornando um valor apenas, são exemplos de subconsultas aninhadas: AVG(), MAX(), MIN() e SUM().<br>\nII. As operações em strings utilizam o operador LIKE para verificação de coincidências de pares, esses pares são identificados pelos caracteres especiais % (compara qualquer substring) e _ (compara qualquer caractere).<br>\nIII. Se as cláusulas WHERE, GROUP BY e HAVING são utilizadas na mesma consulta, as condições da cláusula WHERE são aplicadas primeiro, as tuplas que satisfazem as condições da cláusula WHERE são agrupadas por meio da cláusula GROUP BY, a cláusula HAVING é aplicada a cada grupo, sendo que os grupos que não satisfazem as condições da cláusula HAVING são excluídos.<br><br>\nEstá(ão) correta(s) a(s) afirmativa(s)",
      "type": "radio",
      "options": [
        "I, II e III.",
        "III apenas.",
        "I e II apenas.",
        "II e III apenas."
      ],
      "correctAnswer": 3,
      "justification": "As afirmativas II e III estão corretas. A afirmativa II descreve corretamente o funcionamento do operador LIKE, enquanto a afirmativa III explica corretamente a sequência de aplicação das cláusulas WHERE, GROUP BY e HAVING. A afirmativa I está incorreta, pois AVG(), MAX(), MIN() e SUM() são funções de agregação e não subconsultas aninhadas.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_having.asp",
        "https://www.tutorialspoint.com/sql/sql-like-clause.htm"
      ]
    },
{
  "question": "<p>Levando em conta as tabelas abaixo: <br><br>Tabela controle<br><img src=\"./_images/12.png\" alt=\"Tabela controle\"><br>Tabela categoria<br><img src=\"./_images/13.png\" alt=\"Tabela categoria\"><br>Resultado esperado da consulta<br><img src=\"./_images/14.png\" alt=\"Resultado esperado da consulta\"><br>Considere que <code>controle.idCategoria</code> é uma chave estrangeira que referencia <code>categoria.idCategoria</code>. Qual seria a saída gerada?</p>",
  "type": "radio",
  "options": [
    "A tabela com categorias A e B e suas respectivas somas de quantidades maiores que 25.",
    "A tabela com categorias B e C e suas respectivas somas de quantidades maiores que 25.",
    "A tabela com categorias A e C e suas respectivas somas de quantidades menores que 25.",
    "A tabela com categorias B e D e suas respectivas somas de quantidades menores que 25."
  ],
  "correctAnswer": 1,
  "justification": "A consulta filtra os dados com a cláusula HAVING, retornando apenas as categorias cujas somas de quantidades são maiores que 25. No caso, somente as categorias B e C atendem a essa condição, com 45 e 60, respectivamente.",
"screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_having.asp",
    "https://www.w3schools.com/sql/sql_groupby.asp"
  ]
},
{
  "question": "Quanto às propriedades ACID mantidas pelo sistema de banco de dados para assegurar a integridade dos dados, considere as seguintes afirmações:<br><br>\nI. Atomicidade é a propriedade que garante que todas as operações da transação refletem corretamente no banco de dados ou nenhuma delas será refletirá.<br>\nII. Consistência, também conhecida como Correção, é a propriedade que garante correção e consistência no código fonte de todas as operações da transação.<br>\nIII. Isolamento é a propriedade que confere distinção às transações, ou seja, cada transação é diferente da outra independente do momento em que estão sendo executadas.<br>\nIV. Durabilidade é a propriedade que garante que uma vez completada uma transação com sucesso, todas as atualizações realizadas no banco de dados persistirão, até mesmo se houver uma falha de sistema após a transação se completar.<br><br>\nEstão corretas apenas as afirmativas:",
  "type": "radio",
  "options": [
    "I e II.",
    "III e IV.",
    "I, II e III.",
    "I e IV."
  ],
  "correctAnswer": 3,
  "justification": "As propriedades ACID garantem a integridade e confiabilidade dos dados em um sistema de banco de dados. A atomicidade (I) e a durabilidade (IV) são corretamente descritas e fazem parte das propriedades ACID. A afirmação II está incorreta porque a consistência se refere à validação e garantia de que os dados seguem as regras do banco, e não ao código fonte. A afirmação III também está incorreta, pois o isolamento não é sobre distinção, mas sim sobre a execução independente de transações.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.geeksforgeeks.org/acid-properties-in-dbms/",
    "https://www.w3schools.com/sql/sql_transactions.asp"
  ]
},
{
  "question": "Considere o seguinte Diagrama Entidade-Relacionamento:<br><br>\n<img src=\"./_images/15.png\" alt=\"Figura 15: Diagrama Entidade-Relacionamento\" style=\"max-width: 80%; height: auto;\"><br>\n\nQual a sequência correta de comandos DDL que cria o modelo físico correspondente ao Diagrama Entidade-Relacionamento acima?",
  "type": "radio",
  "options": [
    "CREATE TABLE IF NOT EXISTS Pertence (\n  idTabelaA INT(11) NOT NULL,\n  idTabelaB INT(11) NOT NULL,\n  FOREIGN KEY (idTabelaA) REFERENCES TabelaA(idTabelaA),\n  FOREIGN KEY (idTabelaB) REFERENCES TabelaB(idTabelaB)\n);\n\nCREATE TABLE TabelaA (\n  idTabelaA INT(11) NOT NULL AUTO_INCREMENT,\n  descricao VARCHAR(45) NOT NULL,\n  PRIMARY KEY (idTabelaA)\n);\n\nCREATE TABLE TabelaB (\n  idTabelaB INT(11) NOT NULL AUTO_INCREMENT,\n  descricao VARCHAR(45) NOT NULL,\n  PRIMARY KEY (idTabelaB)\n);",
    "CREATE TABLE TabelaA (\n  idTabelaA INT(11) NOT NULL AUTO_INCREMENT,\n  descricao VARCHAR(45) NOT NULL,\n  PRIMARY KEY (idTabelaA)\n);\n\nCREATE TABLE TabelaB (\n  idTabelaB INT(11) NOT NULL AUTO_INCREMENT,\n  descricao VARCHAR(45) NOT NULL,\n  PRIMARY KEY (idTabelaB)\n);\n\nCREATE TABLE IF NOT EXISTS Pertence (\n  idTabelaA INT(11) NOT NULL,\n  idTabelaB INT(11) NOT NULL,\n  FOREIGN KEY (idTabelaA) REFERENCES TabelaA(idTabelaA),\n  FOREIGN KEY (idTabelaB) REFERENCES TabelaB(idTabelaB)\n);",
    "CREATE TABLE TabelaA (\n  idTabelaA INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,\n  descricao VARCHAR(45) NOT NULL\n);\n\nCREATE TABLE TabelaB (\n  idTabelaB INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,\n  descricao VARCHAR(45) NOT NULL\n);\n\nCREATE TABLE IF NOT EXISTS Pertence (\n  idTabelaA INT(11) NOT NULL FOREIGN KEY,\n  idTabelaB INT(11) NOT NULL FOREIGN KEY\n);",
    "CREATE TABLE TabelaA (\n  idTabelaA INT(11) NOT NULL,\n  descricao VARCHAR(45) NOT NULL,\n  PRIMARY KEY (idTabelaA)\n);\n\nCREATE TABLE TabelaB (\n  idTabelaB INT(11) NOT NULL,\n  descricao VARCHAR(45) NOT NULL,\n  PRIMARY KEY (idTabelaB)\n);\n\nCREATE TABLE IF NOT EXISTS TabelaA_TabelaB (\n  idTabelaA INT(11) NOT NULL,\n  idTabelaB INT(11) NOT NULL,\n  FOREIGN KEY (idTabelaA) REFERENCES TabelaA(idTabelaA),\n  FOREIGN KEY (idTabelaB) REFERENCES TabelaB(idTabelaB)\n);"
  ],
  "correctAnswer": 1,
  "justification": "A opção correta define as tabelas TabelaA e TabelaB com suas respectivas chaves primárias e a tabela de relacionamento Pertence com as chaves estrangeiras referenciando as tabelas TabelaA e TabelaB. A sequência está de acordo com o Diagrama Entidade-Relacionamento apresentado.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_foreignkey.asp"
  ]
},
{
  "question": "Levando em consideração as seguintes tabelas, que não têm relação:<br><br>\n\n**Tabela X**<br>\n<pre><code>\nidX  | Nome                         \n-----|------------------------------\n1    | Carlos Drummond de Andrade\n2    | Castro Alves\n3    | Manuel Bandeira\n4    | Mario de Andrade\n5    | Mario Quintana\n</code></pre>\n\n**Tabela Y**<br>\n<pre><code>\nidY  | Nome                         \n-----|------------------------------\n1    | Casimiro de Abreu\n2    | José de Alencar\n3    | Lima Barreto\n4    | Monteiro Lobato\n5    | Oswald de Andrade\n</code></pre>\n\nObserve o resultado esperado:<br>\n<pre><code>\nidX  | Nome                         \n-----|------------------------------\n3    | Manuel Bandeira\n4    | Mario de Andrade\n5    | Mario Quintana\n</code></pre>\n\nPara gerar esse resultado da tabela, a melhor consulta SQL está em:",
  "type": "radio",
  "options": [
    "SELECT * FROM X WHERE idX IN (SELECT idY FROM Y WHERE idY >= 3);",
    "SELECT * FROM X, Y WHERE idX = idY AND idX >= 3;",
    "SELECT * FROM X INNER JOIN Y ON idX = idY WHERE idX >= 3;",
    "Não é possível realizar uma consulta entre duas tabelas que não tenham relação."
  ],
  "correctAnswer": 0,
  "justification": "A consulta `SELECT * FROM X WHERE idX IN (SELECT idY FROM Y WHERE idY >= 3);` filtra corretamente os dados de `Tabela X` com base nos valores de `idY` na `Tabela Y` que atendem à condição `idY >= 3`. Apesar de não haver relação explícita entre as tabelas, o uso de subconsultas é suficiente para produzir o resultado esperado.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_in.asp",
    "https://www.w3schools.com/sql/sql_subqueries.asp"
  ]
},
    {
      "question": "Sobre transações em um sistema de banco de dados, é correto afirmar que:<br>\nI. Consistem em uma unidade lógica de trabalho.<br>\nII. Envolve apenas uma operação sobre o banco de dados.<br>\nIII. Obrigatoriamente preserva a correção em todos os pontos intermediários.<br><br>\nEstá(ão) correta(s) a(s) afirmativa(s):",
      "type": "radio",
      "options": [
        "I, II e III.",
        "III apenas.",
        "I apenas.",
        "I e II apenas."
      ],
      "correctAnswer": 2,
      "justification": "A afirmativa correta é 'I apenas', pois uma transação é de fato uma unidade lógica de trabalho que pode consistir em uma ou mais operações sobre o banco de dados. No entanto, ela não precisa preservar a correção em pontos intermediários (isso é garantido apenas no final da transação, caso ela seja concluída com sucesso).",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://www.w3schools.com/sql/sql_transactions.asp",
        "https://en.wikipedia.org/wiki/Database_transaction"
      ]
    },
    {
      "question": "O nível de isolamento que se aplica em uma transação pode ser descrito como o grau de interferência que a transação em questão está preparada para tolerar por parte de transações correntes. Nesse sentido é correto afirmar que:",
      "type": "radio",
      "options": [
        "quanto mais alto o nível de isolamento, maior a concorrência.",
        "quanto mais alto o nível de isolamento, menor a concorrência.",
        "não existe relação entre o nível de isolamento e concorrência.",
        "o problema do fantasma pode ocorrer mesmo com o nível máximo de isolamento."
      ],
      "correctAnswer": 1,
      "justification": "Quanto mais alto o nível de isolamento, menor a concorrência, porque as transações que exigem maior isolamento limitam as operações concorrentes para evitar interferências, reduzindo a capacidade de executar múltiplas transações simultaneamente.",
      "screenshots": [],
      "videos": [],
      "referenceLinks": [
        "https://en.wikipedia.org/wiki/Isolation_(database_systems)",
        "https://www.ibm.com/docs/en/db2/11.5?topic=isolation-levels"
      ]
    },
{
  "question": "Considere a seguinte consulta em MySQL:<br><br>\n<pre><code>\nSELECT cliente.CODCLI, cliente.NOME, \ncount(*) AS TITULOS, SUM(venda.VALOR) as TOTAL \nFROM cliente, venda \nWHERE cliente.CODCLI = venda.CODCLI \nGROUP BY cliente.NOME;\n</code></pre>\n\nAnalisando essa consulta, é correto afirmar que:<br>\nI. A consulta não funcionará, pois não é possível utilizar funções de agregação em conjunto com outros atributos na mesma consulta.<br>\nII. TOTAL é o apelido dado para a contagem do número total de títulos.<br>\nIII. O resultado da consulta será agrupado pelo campo cliente.NOME.<br><br>\nEstá(ão) correta(s) apenas a(s) afirmativa(s):",
  "type": "radio",
  "options": [
    "I e II.",
    "I.",
    "III.",
    "II e III."
  ],
  "correctAnswer": 3,
  "justification": "As afirmativas corretas são 'II e III'. A consulta funcionará normalmente, já que é permitido usar funções de agregação (`count(*)`, `SUM(venda.VALOR)`) em conjunto com atributos, desde que esses atributos sejam especificados na cláusula `GROUP BY`. A afirmativa II está correta, pois TOTAL é o apelido dado ao resultado da soma dos valores da coluna `venda.VALOR`. A afirmativa III também está correta, já que o resultado da consulta será agrupado pelo campo `cliente.NOME`. A afirmativa I está incorreta porque o uso de funções de agregação com outros atributos na consulta é válido quando acompanhado de `GROUP BY`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_groupby.asp",
    "https://dev.mysql.com/doc/refman/8.0/en/group-by-functions.html"
  ]
}
,
{
  "question": "Considere a existência da tabela **usuarios** com a seguinte estrutura e conteúdo:<br><br>\n<img src=\"./_images/19.png\" alt=\"Tabela usuários com colunas Codigo, Nome, Endereco e Categoria.\"><br>\n\nCom base nesse cenário, considere a seguinte sequência de comandos em MySQL:<br>\n\n<pre><code>\nCREATE VIEW visao1 AS SELECT * FROM usuarios;\nCREATE TABLE usuarios2 AS SELECT nome, categoria FROM visao1;\n</code></pre>\n\nAnalisando esse cenário, é correto afirmar que:<br>\nI. A visão chamada \"visao1\" possuirá o mesmo conteúdo da tabela \"usuarios\".<br>\nII. A visão chamada \"visao1\" será materializada em disco e ocupará um espaço de armazenamento semelhante ao da tabela \"usuarios\".<br>\nIII. O comando da segunda linha não funcionará, pois não é possível criar uma tabela real a partir de uma visão.<br><br>\nEstá(ão) correta(s) apenas a(s) afirmativa(s):",
  "type": "radio",
  "options": [
    "I.",
    "I e II.",
    "II e III.",
    "I e III."
  ],
  "correctAnswer": 0,
  "justification": "A afirmativa correta é 'I'. A visão `visao1` conterá o mesmo conteúdo da tabela `usuarios`, porém a visão não será materializada em disco, apenas armazenará a definição da consulta. Além disso, é perfeitamente possível criar uma tabela a partir de uma visão com o comando `CREATE TABLE ... AS SELECT ...`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://dev.mysql.com/doc/refman/8.0/en/create-view.html",
    "https://dev.mysql.com/doc/refman/8.0/en/create-table-select.html"
  ]
},
  {
    "question": "Observe o comando SQL abaixo:<br><br>\n\n<pre><code>\nCREATE TABLE PESSOA (\n  SECAO CHAR(1) NOT NULL,  \n  ID INTEGER NOT NULL, \n  NOME VARCHAR(50) NOT NULL, \n  CONSTRAINT PK_PESSOA PRIMARY KEY(SECAO,ID) \n);\n</code></pre>\n\nI. Considerando que a instrução SQL `INSERT` é utilizada para inserção de dados em tabelas, analise os comandos:<br>\n- `INSERT INTO pessoa VALUES ('S',100,'OLAVO BILAC');`<br>\n- `INSERT INTO pessoa (secao,id,nome) VALUES ('M',200,'JULIO DE CASTILHOS');`<br>\n- `INSERT INTO pessoa (secao,id,nome) SELECT 'X',p.id,p.nome FROM pessoa p WHERE p.secao <> 'X';`<br>\n\n**Está(ão) correto(s) a(s) afirmativa(s):**",
    "type": "radio",
    "options": [
      "I apenas.",
      "I e III apenas.",
      "II apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "justification": "Todos os comandos de `INSERT` apresentados são válidos dentro do contexto de SQL e respeitam as regras da tabela definida.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_insert.asp"
    ]
  },
{
  "question": "Considere os comandos SQL abaixo:<br><br>\n\n<pre><code>\nCREATE TABLE ATOR (\n  ID INTEGER NOT NULL, \n  NOME VARCHAR(50) NOT NULL, \n  CONSTRAINT CLIENTE_PK PRIMARY KEY(ID)\n);\n\nCREATE TABLE FILME (\n  ID INTEGER NOT NULL, \n  TITULO VARCHAR(50) NOT NULL, \n  CONSTRAINT FILME_PK PRIMARY KEY(ID)\n);\n\nCREATE TABLE ESTRELA (\n  ID_ATOR INTEGER NOT NULL, \n  ID_FILME INTEGER NOT NULL,\n  CONSTRAINT ESTRELA_PK PRIMARY KEY (ID_ATOR,ID_FILME), \n  CONSTRAINT ESTRELA_ATOR_FK FOREIGN KEY (ID_ATOR) REFERENCES ATOR(ID), \n  CONSTRAINT ESTRELA_FILME_FK FOREIGN KEY (ID_FILME) REFERENCES FILME(ID)\n);\n</code></pre>\n\n**A instrução SQL que efetua a contagem de quantos filmes foram estrelados por ator, com pelo menos um filme estrelado, é:**",
  "type": "radio",
  "options": [
    "SELECT nome, COUNT(*) FROM ator, filme, estrela WHERE ator.id = filme.id GROUP BY COUNT(*) HAVING COUNT(*) > 1;",
    "SELECT nome, COUNT(*) FROM ator, estrela WHERE ator.id = estrela.id_ator GROUP BY COUNT(*) HAVING COUNT(*) > 0;",
    "SELECT nome, COUNT(*) FROM ator, estrela WHERE ator.id = estrela.id_ator GROUP BY nome;",
    "SELECT nome, COUNT(*) FROM ator, filme, estrela WHERE estrela.id_ator = ator.id AND estrela.id_filme = filme.id GROUP BY nome HAVING COUNT(*) > 1;"
  ],
  "correctAnswer": 2,
  "justification": "A consulta correta é `SELECT nome, COUNT(*) FROM ator, estrela WHERE ator.id = estrela.id_ator GROUP BY nome;`. Essa instrução realiza a contagem de filmes estrelados por cada ator ao unir as tabelas `ator` e `estrela` com a condição `WHERE ator.id = estrela.id_ator`, agrupando os resultados pelo nome do ator (`GROUP BY nome`). O filtro 'HAVING COUNT(*) > 1' é desnecessário, pois o enunciado especifica apenas que o ator deve ter pelo menos um filme estrelado, o que já é garantido pela união com a tabela `estrela`. A opção `GROUP BY COUNT(*)` (presente na alternativa incorreta) está sintaticamente errada, pois `COUNT(*)` é uma função de agregação e não pode ser usada diretamente no agrupamento.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_groupby.asp"
  ]
},
  {
    "question": "Na linguagem SQL, a subdivisão DCL possui os comandos:",
    "type": "radio",
    "options": [
      "CREATE e ALTER.",
      "DROP, CREATE e ALTER.",
      "GRANT e REVOKE.",
      "BEGIN WORK, COMMIT e ROLLBACK."
    ],
    "correctAnswer": 2,
    "justification": "DCL (Data Control Language) é responsável pelo controle de acesso em um banco de dados, e os comandos usados para isso são `GRANT` e `REVOKE`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_grant_revoke.asp"
    ]
  },
  {
    "question": "As cláusulas de condição, para definir os dados que se desejam selecionar ou modificar em uma consulta SQL, são:",
    "type": "radio",
    "options": [
      "FROM, WHERE, GROUP BY, HAVING, ORDER BY e DISTINCT.",
      "FROM, WHERE, AND, OR, NOT, GROUP BY, HAVING, ORDER BY e DISTINCT.",
      "FROM, WHERE, GROUP BY, HAVING e DISTINCT.",
      "WHERE, GROUP BY, HAVING e DISTINCT, NOT."
    ],
    "correctAnswer": 1,
    "justification": "As cláusulas citadas estão corretas e são usadas para selecionar, agrupar, ordenar e filtrar dados em consultas SQL.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_where.asp"
    ]
  },
  {
    "question": "A instrução SQL que exclui todos os dados de uma tabela de forma muito rápida, apaga os dados dentro da tabela e não a própria tabela com um log mínimo, é:",
    "type": "radio",
    "options": [
      "DELETE FROM tableA WITH NOLOG;",
      "TRUNCATE tableA;",
      "DROP tableA;",
      "TRUNCATE TABLE tableA;"
    ],
    "correctAnswer": 3,
    "justification": "O comando `TRUNCATE TABLE` é usado para excluir todos os dados de uma tabela rapidamente, mantendo a estrutura da tabela.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_delete.asp"
    ]
  },
    {
    "question": "Em transformações entre modelos de ER para relacional em relacionamentos 1:1, cabe, como alternativa(s) preferida(s):",
    "type": "radio",
    "options": [
      "Tabela própria.",
      "Adição de coluna e fusão de tabelas.",
      "Fusão de tabelas.",
      "Tabela própria e fusão de tabelas."
    ],
    "correctAnswer": 3,
    "justification": "Para relacionamentos 1:1, as opções recomendadas são utilizar uma tabela própria para o relacionamento ou fundir as tabelas relacionadas, dependendo do contexto do projeto.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_constraints.asp"
    ]
  },
  {
    "question": "As classificações dos mecanismos de restrição de integridade em um SGBD relacional podem ser identificadas por:",
    "type": "radio",
    "options": [
      "Chaves primárias.",
      "Chaves primária e estrangeira.",
      "Integridade de domínio, integridade de chave, integridade de vazio, integridade referencial.",
      "Integridade de domínio, integridade de chave, integridade de vazio, integridade referencial e integridade de semântica."
    ],
    "correctAnswer": 2,
    "justification": "Os mecanismos de integridade garantidos por um SGBD relacional são integridade de domínio, de chave, de vazio e referencial, conforme normas do modelo relacional.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_foreignkey.asp"
    ]
  },
  {
    "question": "O conceito de _____________ serve para associar informações a ocorrências de entidades ou de relacionamentos. Qual a palavra que preenche corretamente a lacuna?",
    "type": "radio",
    "options": [
      "Identificador.",
      "Cardinalidade.",
      "Domínio.",
      "Atributo."
    ],
    "correctAnswer": 3,
    "justification": "Um atributo é usado para associar informações a entidades ou relacionamentos, caracterizando propriedades específicas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_datatypes.asp"
    ]
  },
  {
    "question": "Segundo C. J. Date, seja K um conjunto de atributos da RelVar R, então K é uma chave candidata para R, se e somente se, ela possui as seguintes propriedades:",
    "type": "radio",
    "options": [
      "Unicidade e irredutibilidade.",
      "Unicidade e atomicidade.",
      "Irredutibilidade e atomicidade.",
      "Irredutibilidade e indivisibilidade."
    ],
    "correctAnswer": 0,
    "justification": "Uma chave candidata é definida por possuir unicidade, garantindo que nenhuma tupla tenha valores repetidos, e irredutibilidade, sendo composta pelo menor número de atributos necessário.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_primarykey.asp"
    ]
  },
  {
    "question": "Segundo C. J. Date, uma RelVar está na terceira forma normal (3FN) se e somente se:",
    "type": "radio",
    "options": [
      "Em todo o valor válido dessa RelVar, cada tupla contém exatamente um valor para cada atributo.",
      "Por todo o tempo, cada tupla consiste em um valor de uma chave primária que identifica alguma entidade, acompanhado por um conjunto de zero ou mais valores de atributos mutuamente independentes que descrevem essa entidade de alguma maneira.",
      "Todo atributo não chave é irredutivelmente dependente da chave primária.",
      "Por todo o tempo, o processo de normalização garante que exista um conjunto de regras que possibilitem a não existência de inconsistência de dados, bem como o controle para que operações malsucedidas tenham plano de rollback."
    ],
    "correctAnswer": 2,
    "justification": "A 3FN exige que todos os atributos não chave dependam unicamente da chave primária, eliminando dependências transitivas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_normalization.asp"
    ]
  },
  {
    "question": "Considere a seguinte definição de dados em SQL:<br><br>\n\n<pre><code>\nCREATE TABLE aluno (\n  nome CHAR(15) NOT NULL,\n  id_aluno CHAR(10),\n  nivel_grau CHAR(15),\n  PRIMARY KEY (id_aluno),\n  CHECK (nivel_grau IN ('Bacharelado', 'Mestrado', 'Doutorado'))\n);\n</code></pre>\n\nQual das consultas SQL abaixo apresenta a forma correta para garantir apenas os valores permitidos no atributo `nivel_grau`?",
    "type": "radio",
    "options": [
      "CHECK (nivel_grau IN ('Bacharelado', 'Mestrado', 'Doutorado')).",
      "CHECK nivel_grau ('Bacharelado', 'Mestrado', 'Doutorado').",
      "JUST nivel_grau ('Bacharelado', 'Mestrado', 'Doutorado').",
      "CHECK nivel_grau JUST IN ('Bacharelado', 'Mestrado', 'Doutorado')."
    ],
    "correctAnswer": 0,
    "justification": "A declaração CHECK é usada para restringir os valores permitidos em um campo. O comando correto é `CHECK (nivel_grau IN (...))`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_check.asp"
    ]
  },
    {
    "question": "Considerando as definições de S. Silberschats, H. Korth e S. Sudarshan, NÃO é função de um administrador de banco de dados:",
    "type": "radio",
    "options": [
      "Estruturar o armazenamento e definição de método de acesso.",
      "Conceder autorização para acesso a dados.",
      "Revisar query SQL em nível de aplicação.",
      "Definir esquema."
    ],
    "correctAnswer": 2,
    "justification": "Revisar query SQL em nível de aplicação não é uma função do administrador de banco de dados. Suas funções principais incluem gerenciar o esquema, garantir integridade e segurança, e otimizar o acesso ao banco.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_ref_overview.asp"
    ]
  },
  {
    "question": "Ilustrando a correspondência de padrões nas operações com string do comando SQL LIKE, avalie as seguintes afirmativas:<br><br>I. \"Perry%\" localiza qualquer string que contenha \"Perry\".<br>II. \"%IFSUL%\" localiza qualquer string que contenha \"IFSUL\" como substring.<br>III. \"___\" (três sublinhados) localiza qualquer string com exatamente três caracteres.\n\nEstá(ao) correta(s) a(s) afirmativa(s):",
    "type": "radio",
    "options": [
      "I apenas.",
      "I e II apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "justification": "Todas as afirmativas estão corretas. O operador LIKE utiliza '%' para localizar substrings e '_' para corresponder a caracteres individuais em posições específicas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_like.asp"
    ]
  },
  {
    "question": "Considere a seguinte definição de dados SQL:\n\n<pre><code>\nCREATE TABLE conta (\n  numero_conta CHAR(10),\n  numero_agencia CHAR(15),\n  saldo NUMERIC(12,2),\n  PRIMARY KEY (numero_conta)\n);\n</code></pre>\n\nQual das consultas abaixo apresenta o número da agência e o saldo médio, apenas das agências em que o saldo médio é maior que R$ 1.200,00?",
    "type": "radio",
    "options": [
      "SELECT numero_agencia, AVG(saldo) FROM conta GROUP BY numero_agencia HAVING SUM(saldo) > 1200;",
      "SELECT numero_agencia, AVG(saldo) FROM conta WHERE AVG(saldo) > 1200 GROUP BY numero_agencia;",
      "SELECT numero_agencia, AVG(saldo) FROM conta WHERE saldo > 1200 GROUP BY numero_agencia;",
      "SELECT numero_agencia, AVG(saldo) FROM conta GROUP BY numero_agencia HAVING AVG(saldo) > 1200;"
    ],
    "correctAnswer": 3,
    "justification": "A cláusula HAVING é usada para filtrar resultados após a aplicação de funções de agregação, como AVG. Nesse caso, a consulta correta usa HAVING AVG(saldo) > 1200.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_having.asp"
    ]
  },
  {
    "question": "Considere a seguinte definição da tabela `aluno`:\n\n<pre><code>\naluno(nome, id_aluno, nivel_grau)\n</code></pre>\n\nDentre as declarações SQL apresentadas abaixo, qual delas permite apenas os valores \"Bacharelado\", \"Mestrado\" e \"Doutorado\" no atributo `nivel_grau`?",
    "type": "radio",
    "options": [
      "CREATE TABLE aluno (nome CHAR(15) NOT NULL, id_aluno CHAR(10), nivel_grau CHAR(15), PRIMARY KEY (id_aluno), CHECK (nivel_grau IN ('Bacharelado', 'Mestrado', 'Doutorado')));",
      "CREATE TABLE aluno (nome CHAR(15) NOT NULL, id_aluno CHAR(10), nivel_grau CHAR(15) CHECK IN ('Bacharelado', 'Mestrado', 'Doutorado'), PRIMARY KEY (id_aluno));",
      "CREATE TABLE aluno (nome CHAR(15) NOT NULL, id_aluno CHAR(10), nivel_grau CHAR(15) JUST IN ('Bacharelado', 'Mestrado', 'Doutorado'), PRIMARY KEY (id_aluno));",
      "CREATE TABLE aluno (nome CHAR(15) NOT NULL, id_aluno CHAR(10), nivel_grau CHAR(15), PRIMARY KEY (id_aluno), JUST (nivel_grau IN ('Bacharelado', 'Mestrado', 'Doutorado')));"
    ],
    "correctAnswer": 0,
    "justification": "A opção correta utiliza a cláusula CHECK, que é o padrão SQL para restringir valores permitidos em um atributo. A sintaxe é `CHECK (campo IN (...))`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_check.asp"
    ]
  },
    {
    "question": "Suponha uma transação T que transfere R$ 50,00 da conta A para a conta B. Essa transação pode ser definida como:\n\n<pre><code>\nT: read(A);\n   A = A - 50;\n   write(A);\n   read(B);\n   B = B + 50;\n   write(B);\n</code></pre>\n\nQual das propriedades apresentadas abaixo garante que todas as ações da transação T sejam refletidas no banco de dados, ou nenhuma delas?",
    "type": "radio",
    "options": [
      "Consistência.",
      "Atomicidade.",
      "Durabilidade.",
      "Isolamento."
    ],
    "correctAnswer": 1,
    "justification": "A atomicidade é a propriedade que garante que todas as operações da transação sejam realizadas com sucesso ou nenhuma delas seja aplicada, assegurando que o sistema permaneça em um estado consistente.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_transactions.asp"
    ]
  },
{
  "question": "Analise o diagrama entidade-relacionamento representado abaixo:<br><br>\n<img src=\"./_images/20.png\" alt=\"Diagrama Entidade-Relacionamento representando Jogador, Time, Campeonato e suas relações.\"><br><br>\nQual o conjunto de relações que representam as tabelas estritamente necessárias para implementá-lo, considerando que as chaves primárias aparecem sublinhadas?",
  "type": "radio",
  "options": [
    "jogador(código_jogador, nome, posição) time(código_time, nome) campeonato(código_campeonato, nome).",
    "jogador(código_jogador, nome, posição, código_time) time(código_time, nome) campeonato(código_campeonato, nome) joga(código_time, código_campeonato).",
    "jogador(código_jogador, nome, posição) time(código_time, nome) campeonato(código_campeonato, nome) joga(código_time, código_campeonato).",
    "jogador(código_jogador, nome, posição, código_time) time(código_time, nome) campeonato(código_campeonato, nome)."
  ],
  "correctAnswer": 1,
  "justification": "A resposta correta é a opção **b**, pois a estrutura apresentada no diagrama requer:\n\n1. A tabela `jogador` deve incluir o atributo `código_time` como chave estrangeira para representar a relação 1:N entre 'Jogador' e 'Time'.\n2. A relação N:N entre 'Time' e 'Campeonato' precisa ser representada por uma tabela associativa chamada `joga`, que contém as chaves estrangeiras `código_time` e `código_campeonato`.\n\nPortanto, o conjunto de tabelas correto é:\n- `jogador(código_jogador, nome, posição, código_time)`\n- `time(código_time, nome)`\n- `campeonato(código_campeonato, nome)`\n- `joga(código_time, código_campeonato)`\n\nAs outras opções não atendem à modelagem completa exigida pelo diagrama.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.w3schools.com/sql/sql_foreignkey.asp",
    "https://www.w3schools.com/sql/sql_primarykey.asp"
  ]
},
  {
    "question": "Segundo S. Silberschats, H. Korth e S. Sudarshan, o conceito de view é definido como:<br><br>\n\n",
    "type": "radio",
    "options": [
      "um conjunto específico de relações disponibilizadas pelos sistemas gerenciadores de banco de dados, as quais permitem agrupar dados de interesse, a partir de informações contidas em outras relações.",
      "uma única relação disponibilizada pelo sistemas gerenciadores de bancos de dados, a qual permite agrupar dados de interesse, a partir de informações contidas em outras relações.",
      "qualquer relação pertencente ao modelo lógico, mas que se torna visível a um usuário como uma relação virtual.",
      "qualquer relação que não seja parte do modelo lógico, mas que se torna visível a um usuário como uma relação virtual."
    ],
    "correctAnswer": 3,
    "justification": "Uma view é definida como uma relação virtual que não faz parte do modelo lógico do banco de dados, mas pode ser visualizada pelos usuários como uma relação.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "Os comandos para criação de tabelas e relacionamentos em um banco de dados fazem parte de que grupo de comandos?",
    "type": "radio",
    "options": [
      "SQL.",
      "DDL.",
      "DQL.",
      "DML."
    ],
    "correctAnswer": 1,
    "justification": "Os comandos de criação de tabelas e relacionamentos pertencem ao grupo DDL (Data Definition Language), responsável por definir a estrutura de um banco de dados.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "De acordo com a linguagem de consulta estruturada (SQL), qual tipo de join é necessário quando se deseja incluir linhas que não possuem valores correspondentes?",
    "type": "radio",
    "options": [
      "Natural join.",
      "Cross join.",
      "Equi join.",
      "Inner join.",
      "Outer join."
    ],
    "correctAnswer": 4,
    "justification": "O tipo de join necessário para incluir linhas que não possuem valores correspondentes é o Outer Join, que retorna linhas da tabela principal mesmo quando não há correspondência na tabela secundária.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "É comum que sejam utilizadas algumas funções presentes nas linguagens de consulta estruturada (SQL). Qual das seguintes alternativas contém cinco funções internas fornecidas pelo SQL?",
    "type": "radio",
    "options": [
      "COUNT, SUM, AVG, MAX, MIN",
      "SUM, AVG, MIN, MAX, MULT",
      "SUM, AVG, MULT, DIV, MIN",
      "SUM, AVG, MIN, MAX, NAME",
      "ADD, SUB, MULT, DIV, POW"
    ],
    "correctAnswer": 0,
    "justification": "As funções COUNT, SUM, AVG, MAX e MIN são funções agregadas fornecidas pelo SQL para realizar cálculos sobre colunas de dados.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "A utilização de caracteres curingas é de grande valia nas expressões regulares, nos comandos em sistemas operacionais e em linguagens de consulta estruturada (SQL), entre outros contextos. O caractere curinga em uma cláusula WHERE é útil quando:",
    "type": "radio",
    "options": [
      "uma correspondência exata é necessária em uma instrução WHERE.",
      "uma correspondência exata é necessária em uma instrução SELECT.",
      "uma correspondência exata é necessária em uma instrução CREATE.",
      "não é possível uma correspondência exata em uma instrução CREATE.",
      "uma correspondência exata não é possível em uma instrução SELECT."
    ],
    "correctAnswer": 4,
    "justification": "Caractere curinga é usado quando não é possível ou necessário especificar uma correspondência exata, permitindo buscas flexíveis em consultas SQL.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "O sistema de banco de dados necessita de um esquema de recuperação para garantir que falhas que ocorram não comprometam os dados. No caso de uma falha com perda de armazenamento não volátil, a recuperação consiste em duas etapas. A primeira é a recuperação dos dados por meio do dump mais recente, retomando o estado consistente anterior. <br><br>\n\nA segunda etapa, para retomar o estado consistente mais recente, é:",
    "type": "radio",
    "options": [
      "verificar a consistência dos dados e garantir a atomicidade.",
      "executar o rollback de todas as transações que resultaram na falha.",
      "adiar as modificações no banco de dados, registrando as transações em um log.",
      "consultar o log e realizar todas as transações confirmadas desde o último dump."
    ],
    "correctAnswer": 3,
    "justification": "Após recuperar os dados do dump mais recente, é necessário consultar o log e realizar todas as transações confirmadas desde o último dump para garantir a consistência mais recente.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
{
  "question": "Observe o seguinte Diagrama Entidade-Relacionamento:<br><br>\n<img src=\"./_images/21.png\" alt=\"Diagrama Entidade-Relacionamento\" style=\"width:800px;\"><br>\n\nA partir da observação do diagrama, analise as seguintes afirmativas:<br><br>\nI. ISA é um relacionamento muitos-para-muitos entre professor e titular.<br>\nII. Uma única disciplina poderá ter mais de um professor titular responsável, uma vez que fazem parte de um relacionamento muitos-para-muitos.<br>\nIII. Um curso é composto por várias disciplinas, e uma disciplina só pode compor um curso, definindo assim um relacionamento um-para-muitos.<br>\nIV. O atributo telefone da entidade professor é um atributo fraco.<br>\nV. Titular é descrito pelos atributos id_professor, nome, formação, telefone, carga_horária e salario_base.<br><br>\nEstão corretas apenas as afirmativas:",
  "type": "radio",
 "options": [
    "I e II.",
    "III e V.",
    "II, III e IV.",
    "III, IV e V."
  ],
  "correctAnswer": 1,
  "justification": "A análise do diagrama confirma que:\n- O relacionamento ISA é um relacionamento de generalização/especialização, e não muitos-para-muitos (I está incorreta).\n- Uma disciplina pode ter múltiplos professores titulares responsáveis, caracterizando um relacionamento muitos-para-muitos (II está correta).\n- Um curso é composto por várias disciplinas, e cada disciplina pode compor apenas um curso, sendo um relacionamento um-para-muitos (III está correta).\n- O atributo telefone da entidade professor não é fraco; ele pertence diretamente à entidade (IV está incorreta).\n- Titular é descrito corretamente pelos atributos id_professor, nome, formação, telefone, carga_horária e salario_base (V está correta).\n\nPortanto, as afirmativas corretas são **II e III**.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": ['']
},
  {
    "question": "Para a construção de consultas na linguagem SQL em bancos de dados relacionais, é necessário conhecer-se o seu modelo lógico. Em alguns casos, por questões de segurança, pode-se ocultar alguns dados dos usuários que irão manipular o banco de dados ou ainda construir uma coleção de relações virtuais que sejam mais intuitivas ao usuário.<br><br>\nO comando SQL utilizado para a criação desses recursos é o:",
    "type": "radio",
    "options": [
      "CREATE TEMPORARY TABLE t (<definição de colunas e chaves>).",
      "CREATE INDEX i IN table ON <chave estrangeira>.",
      "CREATE VIEW v AS <expressão de consulta>.",
      "CREATE SECURITY TABLE t (<definição de colunas>)."
    ],
    "correctAnswer": 2,
    "justification": "O comando `CREATE VIEW v AS <expressão de consulta>` é usado para criar visões (views), que são relações virtuais baseadas em consultas SQL. As views permitem ocultar dados ou simplificar a apresentação do banco de dados para os usuários.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_view.asp"
    ]
  },
  {
    "question": "Um banco de dados relacional possui em sua estrutura uma tabela **Professor** com os atributos **id**, **nome**, **cargahoraria** e **salario**. Considere o comando SQL abaixo.<br><br>\n<pre><code>\nUPDATE Professor\nSET salario = salario * 1.15 + 120\nWHERE cargahoraria IN (20, 25, 30);\n</code></pre>\nA partir dessas informações, infere-se que:",
    "type": "radio",
    "options": [
      "os professores com salário entre 1,15 e 120 terão sua carga horária definida em 20, 25 e 30.",
      "os professores com carga horária igual a 20 terão seu salário reajustado, ganhando 15% de aumento e uma bonificação de 120.",
      "todos os professores terão seu salário reajustado, mas apenas em 15% ou 120, e a carga horária será definida em 20, 25 ou 30.",
      "os professores com salário igual a 20, 25 ou 30 terão acréscimo nas suas cargas horárias de 15% ou para 120 horas."
    ],
    "correctAnswer": 1,
    "justification": "O comando `UPDATE` aplica o reajuste de 15% sobre o salário e adiciona uma bonificação de 120 para os professores cuja carga horária seja igual a 20, 25 ou 30, conforme a cláusula `WHERE`.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_update.asp"
    ]
  },
  {
    "question": "A linguagem SQL possui funções agregadas que utilizam um conjunto ou multiconjunto de valores como entrada e retornam um único valor como resultado.<br><br>\nSão exemplos de funções agregadas embutidas:",
    "type": "radio",
    "options": [
      "AVG e COUNT.",
      "GROUP BY e HAVING.",
      "MAX e SOMA.",
      "SELECT e JOIN."
    ],
    "correctAnswer": 0,
    "justification": "`AVG` e `COUNT` são funções agregadas em SQL. `AVG` calcula a média dos valores de uma coluna, e `COUNT` conta o número de linhas em um conjunto de resultados.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_functions.asp"
    ]
  },
    {
    "question": "O comando SQL que lista as vendas da UF de nome \"Sergipe\" é:<br><br>\n<img src=\"./_images/22.png\" alt=\"Diagrama de relações e estrutura das tabelas representante, uf, venda e areaatuacao.\" style=\"max-width: 800px;\"><br>\n<img src=\"./_images/23.png\" alt=\"Estrutura detalhada das tabelas.\" style=\"max-width: 800px;\"><br>\n<img src=\"./_images/24.png\" alt=\"Descrição de campos e tipos de dados nas tabelas.\">",
    "type": "radio",
    "options": [
      "SELECT * FROM VENDAS WHERE NOMEUF = 'Sergipe';",
      "SELECT * FROM VENDAS, UF WHERE SIGLAUF = SIGLA;",
      "SELECT VENDAS.*, UF FROM UF,VENDAS WHERE SIGLAUF = SIGLA AND NOMEUF = 'Sergipe';",
      "SELECT VENDAS.* FROM UF,VENDAS WHERE UF='Sergipe';"
    ],
    "correctAnswer": 2,
    "justification": "O comando correto utiliza um join implícito entre as tabelas UF e VENDAS, com as condições apropriadas no WHERE para filtrar pelo nome da UF.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_join.asp"
    ]
  },
  {
    "question": "O comando SQL que lista os nomes dos representantes e suas respectivas médias de vendas é:<br><br>\n<img src=\"./_images/22.png\" alt=\"Diagrama de relações e estrutura das tabelas representante, uf, venda e areaatuacao.\" style=\"max-width: 800px;\"><br>\n<img src=\"./_images/23.png\" alt=\"Estrutura detalhada das tabelas.\"><br>\n<img src=\"./_images/24.png\" alt=\"Descrição de campos e tipos de dados nas tabelas.\">",
    "type": "radio",
    "options": [
      "SELECT NOMEREPRESENTANTE, SUM(VALORVENDA) FROM VENDA;",
      "SELECT NOMEREPRESENTANTE, AVG(VALORVENDA) FROM REPRESENTANTE, VENDA GROUP BY NOMEREPRESENTANTE;",
      "SELECT NOMEREPRESENTANTE, AVG(VALORVENDA) FROM REPRESENTANTE INNER JOIN VENDA ON REPRESENTANTE.IDREPRESENTANTE = VENDA.IDREPRESENTANTE GROUP BY NOMEREPRESENTANTE;",
      "SELECT NOMEREPRESENTANTE, AVG(VALORVENDA) FROM REPRESENTANTE, VENDA GROUP BY NOMEREPRESENTANTE;"
    ],
    "correctAnswer": 2,
    "justification": "A consulta correta faz um INNER JOIN entre as tabelas REPRESENTANTE e VENDA, agrupando por NOMEREPRESENTANTE e calculando a média de VALORVENDA.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_groupby.asp"
    ]
  },
  {
    "question": "O comando SQL que lista as siglas das UFs que NÃO possuem representantes é:<br><br>\n<img src=\"./_images/22.png\" alt=\"Diagrama de relações e estrutura das tabelas representante, uf, venda e areaatuacao.\" style=\"max-width: 800px;\"><br>\n<img src=\"./_images/23.png\" alt=\"Estrutura detalhada das tabelas.\" style=\"max-width: 800px;\"><br>\n<img src=\"./_images/24.png\" alt=\"Descrição de campos e tipos de dados nas tabelas.\">",
    "type": "radio",
    "options": [
      "SELECT SIGLA FROM UF, REPRESENTANTES WHERE REPRESENTANTES IS NULL;",
      "SELECT UF.SIGLA FROM UF INNER JOIN REPRESENTANTE ON UF.SIGLA = REPRESENTANTE.SIGLAUF WHERE REPRESENTANTES IS NULL;",
      "SELECT UF.SIGLA FROM UF LEFT JOIN AREAATUACAO ON UF.SIGLA = AREAATUACAO.SIGLAUF WHERE AREAATUACAO.IDREPRESENTANTE IS NULL;",
      "SELECT UF.SIGLA FROM UF LEFT JOIN AREAATUACAO ON UF.SIGLA = AREAATUACAO.SIGLAUF WHERE AREAATUACAO.SIGLAUF IS NULL;"
    ],
    "correctAnswer": 2,
    "justification": "A consulta usa um LEFT JOIN entre UF e AREAATUACAO para encontrar as siglas das UFs que não possuem representantes, verificando valores nulos em AREAATUACAO.IDREPRESENTANTE.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": [
      "https://www.w3schools.com/sql/sql_join_left.asp"
    ]
  },
    {
    "question": "Considere as afirmações sobre o modelo relacional e suas características:<br><br>\nI. Podem ser estabelecidos mais de um relacionamento entre entidades, de acordo com a regra de negócio a ser representada.<br>\nII. No modelo relacional, é possível definir uma relação entre um conjunto de tuplas não ordenadas.<br>\nIII. A ordem dos valores dentro de uma tupla é relevante, a menos que se estabeleça uma correspondência entre esses valores e os atributos definidos.<br><br>\nEstá(ão) correta(s) a(s) afirmativa(s):",
    "type": "radio",
    "options": [
      "I, apenas.",
      "II e III, apenas.",
      "I e III, apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "justification": "As afirmativas I, II e III estão corretas. O modelo relacional permite estabelecer múltiplos relacionamentos entre entidades (I), define as relações como conjuntos de tuplas não ordenadas (II), e a ordem dos valores em uma tupla só é relevante quando há uma correspondência explícita com os atributos definidos (III).",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "No modelo Entidade-Relacionamento (ER), uma característica importante, que tipifica um relacionamento, é a quantidade de ocorrências de uma entidade que podem estar associadas a um determinado relacionamento. Essa propriedade é chamada de:",
    "type": "radio",
    "options": [
      "dependência funcional.",
      "normalização.",
      "cardinalidade.",
      "generalização/especialização."
    ],
    "correctAnswer": 2,
    "justification": "A cardinalidade determina o número de ocorrências de uma entidade que podem se associar a outra por meio de um relacionamento.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "Em relação à cláusula INNER JOIN, é correto afirmar:",
    "type": "radio",
    "options": [
      "É possível fazer um INNER JOIN de uma tabela para ela mesma.",
      "Somente os registros da tabela à esquerda do relacionamento INNER JOIN serão retornados.",
      "Somente os registros da tabela à direita do relacionamento INNER JOIN serão retornados.",
      "Para utilizar a cláusula INNER JOIN não é necessário especificar critérios."
    ],
    "correctAnswer": 0,
    "justification": "O INNER JOIN pode ser usado para unir uma tabela a ela mesma, criando um autorelacionamento, útil em hierarquias ou estruturas similares.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "As afirmativas abaixo se referem ao banco de dados PostgreSQL:<br><br>\nI. A instalação padrão do PostgreSQL utiliza a porta 6543 do protocolo para receber conexões.<br>\nII. O programa usado comumente para carregar cópias de uma base de dados a partir de um arquivo de texto é o psql.<br>\nIII. Para especificar que uma base de dados deve tentar ser recuperada em uma única transação, é possível passar o parâmetro \"-1\".<br>\nIV. Ao recuperar uma base de dados, se for encontrado um erro de SQL, o comportamento padrão do utilitário psql é perguntar ao usuário o que ele deseja fazer.<br><br>\nEstão corretas apenas as afirmativas:",
    "type": "radio",
    "options": [
      "I e IV.",
      "I e III.",
      "II e IV.",
      "II e III."
    ],
    "correctAnswer": 3,
    "justification": "As afirmativas II e III estão corretas. O programa `psql` é usado para carregar bases de dados, e o parâmetro `-1` permite transações únicas.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  }


























];



var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
