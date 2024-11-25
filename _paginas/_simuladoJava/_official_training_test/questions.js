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
    "question": `Analise o trecho de código abaixo.
<pre><code>
if (saudacao <= 200)
    if (saudacao < 100)
        if (saudacao < 0) printf("Oi!");
        else printf("Olá!");
    else printf("Tudo bem?");
else printf("Como vai você?");
</code></pre>
Qual faixa de valores contidos na variável do tipo inteiro <strong>saudacao</strong> exibe a expressão “Tudo bem?” na tela?`,
    "type": "radio",
    "options": [
      "saudacao <= 100",
      "0 < saudacao < 100",
      "100 < saudacao <= 200",
      "100 <= saudacao <= 200"
    ],
    "correctAnswer": 2,
    "justification": `A faixa correta é <strong>100 &lt; saudacao &le; 200</strong>. Isso ocorre porque:
    <ul>
      <li>Para entrar no primeiro <code>if (saudacao <= 200)</code>, <code>saudacao</code> deve ser menor ou igual a 200.</li>
      <li>No segundo <code>if (saudacao < 100)</code>, para não entrar nesse bloco, <code>saudacao</code> deve ser maior ou igual a 100.</li>
      <li>Portanto, o programa executará <code>printf("Tudo bem?");</code> quando <code>saudacao</code> estiver entre 100 e 200, excluindo 100.</li>
    </ul>`,
    "referenceLinks": ["https://www.geeksforgeeks.org/nested-if-else-in-c/"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere a função abaixo para <code>num = 10</code>.
<pre><code>
int fat(int num) {
    if (num == 1) return num;
    else return(num * fat(num - 1));
}
</code></pre>
Quantas chamadas recursivas ocorrem, desconsiderando a primeira chamada da função?`,
    "type": "radio",
    "options": [
      "8",
      "9",
      "10",
      "11"
    ],
    "correctAnswer": 1,
    "justification": `Para calcular <code>fat(10)</code>, a função faz chamadas recursivas até <code>fat(1)</code>. Isso resulta em 10 chamadas no total (de <code>fat(10)</code> a <code>fat(1)</code>). Desconsiderando a primeira chamada (<code>fat(10)</code>), ocorrem <strong>9</strong> chamadas recursivas adicionais.`,
    "referenceLinks": ["https://www.geeksforgeeks.org/recursion/"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Observe o procedimento abaixo, escrito em C.
<pre><code>
void procedimento(int a, int b) {
    a = a + b;
    b = a - b;
    a = a - b;
}
</code></pre>
O que esse procedimento faz?`,
    "type": "radio",
    "options": [
      "Inverte os valores de a e b.",
      "Não altera os valores de a e b.",
      "Calcula o máximo divisor comum entre a e b.",
      "Divide b por a utilizando a soma e as subtrações efetuadas."
    ],
    "correctAnswer": 0,
    "justification": `O procedimento inverte os valores de <strong>a</strong> e <strong>b</strong> sem usar uma variável temporária. Após a execução:
    <ul>
      <li><code>a = a + b;</code></li>
      <li><code>b = a - b; // b = (a + b) - b = a</code></li>
      <li><code>a = a - b; // a = (a + b) - a = b</code></li>
    </ul>
    Portanto, os valores de <strong>a</strong> e <strong>b</strong> são trocados.`,
    "referenceLinks": ["https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Observe o seguinte programa escrito em Java.
<pre><code>
public class Main {
    static int num;

    public static int funcao(int num, int x) {
        int a = 0, b = 1, c;
        if (num < 2) {
            c = num;
            x = 0;
        } else {
            c = funcao(num - 1, a) + funcao(num - 2, b);
            x = a + b + 1;
        }
        System.out.printf("%d %d; ", num, x);
        return c;
    }

    public static void main(String[] args) {
        num = 3;
        System.out.printf("%d %d", funcao(3, num), num);
    }
}
</code></pre>
Após a execução desse programa, quais valores serão impressos em tela?`,
    "type": "radio",
    "options": [
      "1 3; 0 1; 2 0; 1 4; 3 2; 0 3",
      "1 0; 0 2; 2 0; 0 2; 2 1; 3",
      "1 0; 0 0; 2 2; 1 0; 3 2; 2 3",
      "3 0; 0 2; 1 0; 3 3; 2 0"
    ],
    "correctAnswer": 2,
    "justification": `A saída será <strong>1 0; 0 2; 2 1; 0 3; 2 3</strong>. Isso ocorre porque a função <code>funcao</code> é chamada recursivamente, e em cada chamada, valores específicos são impressos. O programa calcula números da sequência de Fibonacci e imprime valores durante o processo.`,
    "referenceLinks": ["https://www.geeksforgeeks.org/recursive-fibonacci/"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o texto a seguir.

A acessibilidade ou visibilidade é um aspecto de extrema importância na programação orientada a objetos. O especificador ________ indica que o campo ou método só pode ser usado na implementação de subclasse. Já o especificador ________ indica que o campo ou método pode ser utilizado livremente, e o especificador ________ indica que campos e métodos devem ficar ocultos, ou seja, não podem ser utilizados fora da implementação da própria classe.

As palavras que completam corretamente as lacunas são, respectivamente,`,
    "type": "radio",
    "options": [
      "public, protected e private",
      "private, public e protected",
      "protected, public e private",
      "protected, private e public"
    ],
    "correctAnswer": 2,
    "justification": `As palavras corretas são, respectivamente, <strong>protected</strong>, <strong>public</strong> e <strong>private</strong>:
    <ul>
      <li><strong>protected</strong>: acessível na própria classe e subclasses.</li>
      <li><strong>public</strong>: acessível de qualquer lugar.</li>
      <li><strong>private</strong>: acessível somente dentro da própria classe.</li>
    </ul>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Na programação orientada a objetos, a herança permite uma forma de reutilização de software em que uma nova classe pode herdar membros de uma classe existente. Sobre herança, são feitas as seguintes afirmações:
<ol>
  <li>I. O tempo de desenvolvimento do programa pode ser reduzido.</li>
  <li>II. Cada objeto de uma subclasse também é objeto da superclasse dessa classe.</li>
  <li>III. O objeto da superclasse é um objeto de subclasse da sua classe.</li>
  <li>IV. A palavra-chave <code>super</code> é utilizada para que o construtor da subclasse possa chamar o construtor da superclasse.</li>
</ol>
Estão corretas apenas as afirmativas:`,
    "type": "radio",
    "options": [
      "I e II.",
      "II e III.",
      "I, III e IV.",
      "I, II e IV."
    ],
    "correctAnswer": 3,
    "justification": `As afirmativas corretas são <strong>I, II e IV</strong>:
    <ul>
      <li><strong>I</strong>: Verdadeiro. Herança permite reutilização de código, reduzindo o tempo de desenvolvimento.</li>
      <li><strong>II</strong>: Verdadeiro. Objetos de subclasses são também objetos de suas superclasses.</li>
      <li><strong>III</strong>: Falso. Objetos da superclasse não são objetos da subclasse.</li>
      <li><strong>IV</strong>: Verdadeiro. A palavra-chave <code>super</code> chama o construtor da superclasse.</li>
    </ul>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código abaixo escrito na linguagem Java.
<pre><code>
public class Programa {
    private int a;
    private int b;
    private int c;
    private int x;

    public void trocar() {
        this.b = 4;
        this.a = 9;
        this.x = 0;
        while (x <= 7) {
            if ((a % 2) != 2) {
                System.out.println(this.a);
                this.c = this.b + this.a;
                this.b = this.a;
                this.a = this.c;
            } else {
                this.a = this.c;
            }
            this.x++;
        }
    }

    public static void main(String[] args) {
        Programa p = new Programa();
        p.trocar();
    }
}
</code></pre>
Qual é o resultado correto da saída em tela da execução da classe Programa?`,
    "type": "radio",
    "options": [
      "9 12 21 33 54 87 141 228",
      "9 14 23 37 60 97 157 254",
      "9 13 22 35 56 93 149 241",
      "9 13 22 35 57 92 149 241"
    ],
    "correctAnswer": 3,
    "justification": `A saída será <strong>9 13 22 35 57 92 149 241</strong>. O programa gera uma sequência numérica onde cada número é a soma dos dois anteriores:
    <ul>
      <li>9</li>
      <li>13 (4 + 9)</li>
      <li>22 (9 + 13)</li>
      <li>35 (13 + 22)</li>
      <li>57 (22 + 35)</li>
      <li>92 (35 + 57)</li>
      <li>149 (57 + 92)</li>
      <li>241 (92 + 149)</li>
    </ul>`,
    "referenceLinks": ["https://www.geeksforgeeks.org/java-program-to-print-fibonacci-series/"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere as afirmações sobre interfaces na programação orientada a objetos em Java:
<ol>
  <li>I. Uma classe concreta poderá implementar apenas uma interface, utilizando a palavra-chave <code>implements</code>.</li>
  <li>II. Uma classe concreta, ao implementar uma interface, estabelece um contrato, escolhendo quais métodos irá implementar em sua estrutura.</li>
  <li>III. As interfaces, além de métodos, podem possuir campos que serão implicitamente finais e estáticos.</li>
  <li>IV. Todos os métodos de uma interface são implicitamente abstratos.</li>
</ol>
Estão corretas apenas as afirmativas:`,
    "type": "radio",
    "options": [
      "I e II.",
      "II e III.",
      "III e IV.",
      "I, II e IV."
    ],
    "correctAnswer": 2,
    "justification": `As afirmativas corretas são <strong>III e IV</strong>:
    <ul>
      <li><strong>I</strong>: Falso. Uma classe pode implementar múltiplas interfaces.</li>
      <li><strong>II</strong>: Falso. Ao implementar uma interface, a classe deve implementar todos os métodos da interface.</li>
      <li><strong>III</strong>: Verdadeiro. Interfaces podem ter campos que são implicitamente <code>public static final</code>.</li>
      <li><strong>IV</strong>: Verdadeiro. Métodos em interfaces são implicitamente abstratos (antes do Java 8).</li>
    </ul>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código escrito na linguagem Java:
<pre><code>
import java.util.ArrayList;
import java.util.TreeSet;
import java.util.HashSet;

public class Demo {
    public static void main(String[] args) {
        ArrayList l1 = new ArrayList();
        ArrayList l2 = new ArrayList();
        l1.add(2322);
        l1.add(3456);
        l1.add(1783);
        l1.add(2322);
        l2.addAll(l1);
        TreeSet tr = new TreeSet(l2);
        HashSet hs = new HashSet(tr);
        System.out.println(tr + " " + hs);
    }
}
</code></pre>
Pergunta: Qual é o resultado correto após a execução da classe Demo?`,
    "type": "radio",
    "options": [
      "[1783, 2322, 3456] [3456, 2322, 1783]",
      "[3456, 2322, 1783] [3456, 2322, 1783]",
      "[2322, 3456, 1783, 2322] [2322, 3456, 1783, 2322]",
      "[1783, 2322, 2322, 3456] [3456, 2322, 2322, 1783]"
    ],
    "correctAnswer": 0,
    "justification": `O <code>TreeSet</code> remove duplicatas e ordena os elementos, resultando em <strong>[1783, 2322, 3456]</strong>. O <code>HashSet</code> também remove duplicatas, mas não mantém a ordem, resultando em uma saída como <strong>[3456, 2322, 1783]</strong>. Portanto, a saída é: <code>[1783, 2322, 3456] [3456, 2322, 1783]</code>.`,
    "referenceLinks": ["https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código abaixo para as questões.
<table border="1" cellpadding="5">
  <tr>
    <td>
      <pre><code>
public class Pessoa {
    public String nome;
    public String dataN;

    public Pessoa(String nome, String dataN) {
        this.nome = nome;
        this.dataN = dataN;
    }

    public Pessoa() { }

    public void mostrar() {
        System.out.println(this.nome + " - " + this.dataN);
    }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
public class Funcionario extends Pessoa {
    public int cod;

    public Funcionario(String nome, String dataN, int cod) {
        super(nome, dataN);
        this.cod = cod;
    }

    public Funcionario(int cod) {
        this.cod = cod;
    }

    public void mostrar() {
        System.out.println("O código do funcionário é: " + this.cod);
    }
}
      </code></pre>
    </td>
  </tr>
</table>
Qual o trecho de código abaixo que, se utilizado, gera erro de compilação?`,
    "type": "radio",
    "options": [
      "Pessoa p = new Pessoa();",
      "Funcionario f = new Funcionario();",
      "Funcionario f = new Funcionario(989);",
      "Pessoa f = new Funcionario(\"Marta\", \"11/11/1986\", 545);"
    ],
    "correctAnswer": 1,
    "justification": `O trecho <strong><code>Funcionario f = new Funcionario();</code></strong> gera erro de compilação porque a classe <code>Funcionario</code> não possui um construtor padrão sem parâmetros definido. Como a classe define outros construtores, o construtor padrão não é fornecido automaticamente.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `
	<table border="1" cellpadding="5">
  <tr>
    <td>
      <pre><code>
public class Pessoa {
    public String nome;
    public String dataN;

    public Pessoa(String nome, String dataN) {
        this.nome = nome;
        this.dataN = dataN;
    }

    public Pessoa() { }

    public void mostrar() {
        System.out.println(this.nome + " - " + this.dataN);
    }
}
      </code></pre>
    </td>
    <td>
      <pre><code>
public class Funcionario extends Pessoa {
    public int cod;

    public Funcionario(String nome, String dataN, int cod) {
        super(nome, dataN);
        this.cod = cod;
    }

    public Funcionario(int cod) {
        this.cod = cod;
    }

    public void mostrar() {
        System.out.println("O código do funcionário é: " + this.cod);
    }
}
      </code></pre>
    </td>
  </tr>
</table>
	</br>Sobre as classes <code>Pessoa</code> e <code>Funcionario</code>, é INCORRETO afirmar-se:`,
    "type": "radio",
    "options": [
      "Existe o relacionamento tem um.",
      "Para que o método mostrar() da subclasse invoque o método mostrar() da superclasse, é necessário que o método seja precedido por super e um ponto separador (.).",
      "Possuem métodos com a mesma assinatura sem prejudicar sua compilação.",
      "A assinatura @Override poderá ser inserida acima do método mostrar() da subclasse, para indicar que este sobrepõe o método da superclasse."
    ],
    "correctAnswer": 0,
    "justification": `A afirmação INCORRETA é a opção <strong>A</strong>. As classes <code>Pessoa</code> e <code>Funcionario</code> possuem um relacionamento de herança (é um), não um relacionamento "tem um". As outras afirmações estão corretas:
    <ul>
      <li><strong>B</strong>: Para chamar o método da superclasse, usa-se <code>super.mostrar();</code>.</li>
      <li><strong>C</strong>: Métodos com a mesma assinatura são permitidos devido ao polimorfismo.</li>
      <li><strong>D</strong>: A anotação <code>@Override</code> indica que o método sobrepõe o da superclasse.</li>
    </ul>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/override.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Analise as afirmativas sobre Coleções em Java, assinalando (V) para verdadeiro e (F) para falso.
<ul>
  <li>( ) A interface <code>SortedSet</code> implementa a interface <code>Set</code>.</li>
  <li>( ) <code>Vector</code> é uma classe que implementa a interface <code>Queue</code>.</li>
  <li>( ) A classe <code>TreeMap</code> implementa a interface <code>SortedMap</code>.</li>
  <li>( ) Qualquer classe que implementa a interface <code>Set</code> sempre terá dados ordenados.</li>
  <li>( ) A interface <code>List</code> estende a interface <code>Collection</code>.</li>
</ul>
A sequência correta, de cima para baixo, é:`,
    "type": "radio",
    "options": [
      "F-V-V-F-V.",
      "F-F-V-V-V.",
      "V-F-V-F-F.",
      "F-F-V-F-V."
    ],
    "correctAnswer": 3,
    "justification": `A sequência correta é <strong>F-F-V-F-V</strong>:
    <ol>
      <li><strong>Falso</strong>. <code>SortedSet</code> é uma interface que estende <code>Set</code>, não a implementa.</li>
      <li><strong>Falso</strong>. <code>Vector</code> implementa <code>List</code>, não <code>Queue</code>.</li>
      <li><strong>Verdadeiro</strong>. <code>TreeMap</code> implementa <code>SortedMap</code>.</li>
      <li><strong>Falso</strong>. Nem todas as implementações de <code>Set</code> mantêm a ordem dos elementos (e.g., <code>HashSet</code>).</li>
      <li><strong>Verdadeiro</strong>. <code>List</code> estende <code>Collection</code>.</li>
    </ol>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/collections/interfaces/index.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Segundo Deitel (2010), o tratamento de exceções é utilizado para processar erros síncronos.

Sobre tratamento de exceções no Java, é correto afirmar que relançar exceções ocorre:`,
    "type": "radio",
    "options": [
      "quando um bloco try é executado.",
      "quando um bloco catch não pode processar uma exceção ou que só pode processá-la parcialmente.",
      "quando uma exceção no bloco try puder ser capturada por um bloco catch.",
      "quando, após uma exceção ser capturada pelo bloco catch, o programa pula e prossegue para o bloco finally."
    ],
    "correctAnswer": 1,
    "justification": `Relançar exceções ocorre <strong>quando um bloco <code>catch</code> não pode processar uma exceção ou que só pode processá-la parcialmente</strong>. Nesse caso, a exceção é lançada novamente para ser tratada em outro lugar.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/essential/exceptions/try.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Selecione a alternativa que mostra a saída gerada pela execução do seguinte código, escrito na linguagem Java.
<pre><code>
import java.util.Set;
import java.util.TreeSet;

public class MinhaClasse {
    public static void main(String[] args) {
        Set&lt;String&gt; a = new TreeSet&lt;&gt;();
        a.add("Cachorro");
        a.add("Gato");
        a.add("Arara");
        a.add("Cachorro");
        a.add("Gato ");

        for(String b : a)
            System.out.print(b);
        System.out.print(a.size());
    }
}
</code></pre>`,
    "type": "radio",
    "options": [
      "AraraCachorroGato3",
      "CachorroGatoAraraGato 4",
      "AraraCachorroGatoGato 4",
      "CachorroGatoAraraCachorroGato5"
    ],
    "correctAnswer": 2,
    "justification": `A saída será <strong>AraraCachorroGato3</strong>. O <code>TreeSet</code> remove duplicatas e ordena os elementos:
    <ul>
      <li>Elementos armazenados: "Arara", "Cachorro", "Gato", "Gato "</li>
      <li>"Gato" e "Gato " são diferentes devido ao espaço.</li>
      <li>Tamanho do conjunto: 3</li>
      <li>Elementos impressos em ordem: "Arara", "Cachorro", "Gato"</li>
    </ul>`,
    "referenceLinks": ["https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere as seguintes afirmações sobre a linguagem de programação Java.
<table border="1" cellpadding="5">
  <tr>
    <td><strong>I.</strong> Dentro de uma estrutura de repetição, a instrução <u>______________</u>, quando executada, ignora as instruções restantes no corpo da estrutura, e automaticamente prossegue com a próxima iteração.</td>
  </tr>
  <tr>
    <td><strong>II.</strong> A instrução <u>_____________</u>, quando usada, faz parte da assinatura de um método, e determina que um trecho de código que execute este método deve obrigatoriamente capturar uma possível exceção que o método lance.</td>
  </tr>
</table>
Assinale a alternativa que preenche as lacunas corretamente:`,
    "type": "radio",
    "options": [
      "break e throw.",
      "continue e throw.",
      "break e throws.",
      "continue e throws."
    ],
    "correctAnswer": 3,
    "justification": `As palavras que preenchem as lacunas são, respectivamente, <strong>continue</strong> e <strong>throws</strong>:
    <ul>
      <li><strong>continue</strong>: Utilizada em loops para pular para a próxima iteração.</li>
      <li><strong>throws</strong>: Declarada na assinatura de um método para indicar que ele pode lançar uma exceção que deve ser tratada.</li>
    </ul>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/branch.html", "https://docs.oracle.com/javase/tutorial/essential/exceptions/declaring.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Selecione a alternativa que mostra a saída gerada pela execução do seguinte código, escrito na linguagem Java.
<pre><code>
public class MinhaClasse {
    String a = new String();
    public MinhaClasse(String a) {
        a = a;
    }
    public static void main(String[] args) {
        String v = "ava";
        MinhaClasse a = new MinhaClasse(v);
        v = "J" + a.a;
        System.out.println(v);
    }
}
</code></pre>
Assinale a alternativa correta:`,
    "type": "radio",
    "options": [
      "Null.",
      "J.",
      "Ava.",
      "Java."
    ],
    "correctAnswer": 1,
    "justification": `
O programa irá imprimir <strong>J.</strong> Vamos entender por quê:

1. **Classe <code>MinhaClasse</code>**:
   - Possui um atributo <code>String a = new String();</code> que inicializa <code>a</code> como uma string vazia.

2. **Construtor <code>MinhaClasse(String a)</code>**:
   - Recebe um parâmetro <code>a</code>, mas a atribuição <code>a = a;</code> não altera o atributo da classe. Isso ocorre porque o parâmetro do método está sombreadando o atributo da classe, e sem usar <code>this.a</code>, o atributo não é modificado.

3. **No método <code>main</code>**:
   - <code>String v = "ava";</code> inicializa <code>v</code> com <code>"ava"</code>.
   - <code>MinhaClasse a = new MinhaClasse(v);</code> cria uma nova instância de <code>MinhaClasse</code>. O atributo <code>a.a</code> permanece como uma string vazia (<code>""</code>), pois o construtor não altera o atributo da classe.
   - <code>v = "J" + a.a;</code> concatena <code>"J"</code> com <code>a.a</code>, que é <code>""</code>, resultando em <code>"J"</code>.
   - <code>System.out.println(v);</code> imprime <code>"J"</code>.

Portanto, a saída é <strong>J</strong>.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/javaOO/variables.html#hiding"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Sobre a linguagem de programação Java, utilizar a palavra reservada <code>final</code> na declaração de um método serve para indicar que:`,
    "type": "radio",
    "options": [
      "O método é abstrato.",
      "O método é um construtor.",
      "O método não pode ser sobrescrito.",
      "Seus parâmetros serão tratados no escopo do método como constantes."
    ],
    "correctAnswer": 2,
    "justification": `
A palavra-chave <strong><code>final</code></strong> quando usada na declaração de um método indica que o método <strong>não pode ser sobrescrito</strong> em subclasses. Isso é útil para impedir que subclasses alterem o comportamento de métodos críticos para o funcionamento correto da classe.

- **Opção A**: Incorreta. Para declarar um método abstrato, usa-se a palavra-chave <code>abstract</code>.
- **Opção B**: Incorreta. Construtores não podem ser final e não utilizam essa palavra-chave.
- **Opção C**: Correta. O uso de <code>final</code> em métodos proíbe a sobrescrita.
- **Opção D**: Incorreta. Para parâmetros constantes dentro de métodos, não é utilizado <code>final</code> na declaração do método, mas pode-se usar <code>final</code> nos parâmetros individualmente.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/final.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Sobre a utilização de métodos construtores na linguagem de programação Java, selecione a afirmação CORRETA em relação ao trecho de código a seguir.
<pre><code>
public class MinhaClasse {
    String a;
    String b;

    public MinhaClasse() {
        super("a", "b");
    }

    public MinhaClasse(String v1) {
        super(v1, "b");
    }

    public MinhaClasse(String v1, String v2) {
        a = v1;
    }
}
</code></pre>
Assinale a alternativa correta:`,
    "type": "radio",
    "options": [
      "O construtor padrão só pode ser definido caso não haja outros métodos construtores definidos pela classe.",
      "O terceiro construtor, que recebe dois parâmetros, deve obrigatoriamente inicializar o atributo <code>b</code> da classe.",
      "A palavra <code>super</code>, utilizada como primeira instrução de um método construtor, serve para chamar outro construtor da mesma classe, permitindo dessa forma, escrever o código de construção comum uma única vez.",
      "Ocorrerá um erro de compilação."
    ],
    "correctAnswer": 3,
    "justification": `
A resposta correta é a opção <strong>Ocorrerá um erro de compilação.</strong>

**Justificativa:**

- O uso da palavra-chave <code>super</code> dentro dos construtores está incorreto. A palavra <code>super</code> é usada para chamar o construtor da superclasse, não para chamar outro construtor da mesma classe. Para chamar outro construtor da mesma classe, deve-se usar a palavra-chave <code>this</code>.

- Como a classe não estende explicitamente nenhuma outra classe, ela herda de <code>Object</code>, que não possui um construtor com parâmetros. Portanto, chamar <code>super("a", "b");</code> resultará em um erro de compilação, pois não existe tal construtor em <code>Object</code>.

- Além disso, mesmo que houvesse uma superclasse com construtor adequado, a chamada a <code>super</code> com parâmetros inválidos causaria erro.

**Análise das alternativas:**

- **Opção a)**: Incorreta. É possível definir um construtor padrão (sem parâmetros) mesmo que outros construtores existam.
- **Opção b)**: Incorreta. Não há obrigatoriedade de inicializar todos os atributos no construtor.
- **Opção c)**: Incorreta. Para chamar outro construtor da mesma classe, utiliza-se <code>this(...)</code>, não <code>super(...)</code>.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/javaOO/thiskey.html",
      "https://docs.oracle.com/javase/tutorial/java/IandI/super.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Sobre a linguagem de programação Java, em relação à utilização de Threads, assinale a alternativa que contém a saída para o programa a seguir.
<pre><code>
public class MinhaClasse extends Thread {
    static int contador = 0;
    @Override
    public void run() {
        for (int i = 0; i < 5; i++)
            ++contador;
    }
    public static void main(String[] args) {
        Thread t = new MinhaClasse();
        try { t.start(); } catch (Exception e) { System.out.print("Erro 1."); }
        try { t.join(); } catch (Exception e) { System.out.print("Erro 2."); }
        try { t.start(); } catch (Exception e) { System.out.print("Erro 3."); }
        try { t.join(); } catch (Exception e) { System.out.print("Erro 4."); }
        System.out.print(MinhaClasse.contador);
    }
}
</code></pre>
Assinale a resposta correta:`,
    "type": "radio",
    "options": [
      "Erro 2.5",
      "Erro 3.5",
      "5",
      "10"
    ],
    "correctAnswer": 1,
    "justification": `
A saída do programa será <strong>Erro 3.5</strong>.

**Explicação:**

1. **Primeira execução:**
   - <code>t.start();</code> inicia a thread <code>t</code>.
   - <code>t.join();</code> aguarda a conclusão da thread <code>t</code>.
   - Durante a execução de <code>run()</code>, <code>contador</code> é incrementado 5 vezes, passando de 0 para 5.

2. **Segunda execução:**
   - Tenta-se iniciar a thread <code>t</code> novamente com <code>t.start();</code>.
   - Isso lança uma <code>IllegalThreadStateException</code>, pois uma thread que já foi iniciada não pode ser reiniciada.
   - O <code>catch</code> captura a exceção e imprime <code>"Erro 3."</code>.

3. **Finalização:**
   - O valor de <code>contador</code> é impresso, que é <code>5</code>.

Portanto, a saída é <strong>Erro 3.5</strong>.

**Notas:**

- **Opção a)**: Incorreta. Não ocorre erro no <code>t.join();</code> (Erro 2).
- **Opção b)**: Correta.
- **Opção c)**: Incorreta. Ignora o erro ao tentar reiniciar a thread.
- **Opção d)**: Incorreta. <code>contador</code> não chega a 10 porque a thread não é executada novamente.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/8/docs/api/java/lang/Thread.html#start--",
      "https://docs.oracle.com/javase/tutorial/essential/concurrency/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Em relação a comunicações baseadas em Socket na linguagem de programação Java, selecione a afirmação CORRETA.
<ol>
  <li>I. Classes que se comunicam por Socket devem obrigatoriamente implementar uma Thread.</li>
  <li>II. A classe <code>InetAddress</code> serve para representar um endereço IP (Internet Protocol).</li>
  <li>III. Ao instanciar a classe <code>ServerSocket</code>, um de seus métodos construtores recebe por parâmetro o endereço IP (Internet Protocol) e o número da porta de conexão do servidor.</li>
  <li>IV. Objetos só podem ser enviados pela rede caso sejam serializáveis.</li>
</ol>
Estão CORRETAS as afirmativas:`,
    "type": "radio",
    "options": [
      "I e III apenas.",
      "II e IV apenas.",
      "II, III e IV apenas.",
      "I, II, III e IV."
    ],
    "correctAnswer": 1,
    "justification": `
As afirmativas corretas são <strong>II e IV apenas</strong>.

**Análise das afirmativas:**

- **I.** Falso. Embora seja comum usar threads em aplicações que utilizam sockets (para lidar com múltiplas conexões), não é obrigatório que as classes implementem <code>Thread</code>. Pode-se usar sockets sem threads.

- **II.** Verdadeiro. A classe <code>InetAddress</code> representa um endereço IP.

- **III.** Falso. O construtor de <code>ServerSocket</code> geralmente recebe apenas o número da porta. Para especificar um endereço IP específico (por exemplo, em um servidor com múltiplos endereços), é necessário usar um construtor diferente que aceite um <code>InetAddress</code>, mas não é o caso comum.

- **IV.** Verdadeiro. Para enviar objetos através da rede (por exemplo, via <code>ObjectOutputStream</code>), os objetos devem implementar a interface <code>Serializable</code>.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/8/docs/api/java/net/InetAddress.html",
      "https://docs.oracle.com/javase/8/docs/api/java/net/ServerSocket.html",
      "https://docs.oracle.com/javase/tutorial/networking/sockets/index.html",
      "https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Selecione a alternativa que mostra a saída gerada pela execução do seguinte código, escrito na linguagem Java.
<pre><code>
public class MinhaClasse {
    public static void main(String[] args) {
        Midia[] l = { new DVD(), new BluRay(), new DVD() };

        for (Midia m : l) {
            if (m instanceof DVD) { System.out.print("DVD,"); }
            if (m instanceof Produto) { System.out.print("Produto,"); }
        }
    }
}

class DVD implements Produto { }
class BluRay extends DVD { }
interface Produto extends Midia { }
interface Midia { }
</code></pre>
Assinale a alternativa correta:`,
    "type": "radio",
    "options": [
      "DVD, DVD,",
      "DVD, DVD, DVD,",
      "DVD, produto, produto, DVD, produto,",
      "DVD, produto, DVD, produto, DVD, produto,"
    ],
    "correctAnswer": 3,
    "justification": `
A saída do programa será <strong>DVD,Produto,DVD,Produto,DVD,Produto,</strong>.

**Explicação:**

1. **Array de objetos <code>Midia[] l</code>:**
   - <code>l[0]</code>: <code>new DVD()</code>
   - <code>l[1]</code>: <code>new BluRay()</code>
   - <code>l[2]</code>: <code>new DVD()</code>

2. **Iteração sobre o array <code>l</code>:**

   - **Primeiro elemento (<code>l[0]</code> - DVD):**
     - <code>m instanceof DVD</code>: <code>true</code> → imprime <code>"DVD,"</code>
     - <code>m instanceof Produto</code>: <code>true</code> (porque DVD implementa Produto) → imprime <code>"Produto,"</code>

   - **Segundo elemento (<code>l[1]</code> - BluRay):**
     - <code>m instanceof DVD</code>: <code>true</code> (porque BluRay herda de DVD) → imprime <code>"DVD,"</code>
     - <code>m instanceof Produto</code>: <code>true</code> (porque BluRay herda de DVD que implementa Produto) → imprime <code>"Produto,"</code>

   - **Terceiro elemento (<code>l[2]</code> - DVD):**
     - <code>m instanceof DVD</code>: <code>true</code> → imprime <code>"DVD,"</code>
     - <code>m instanceof Produto</code>: <code>true</code> → imprime <code>"Produto,"</code>

3. **Resultado concatenado**:
   - <code>"DVD,Produto,DVD,Produto,DVD,Produto,"</code>

**Análise das alternativas:**

- **Opção a)**: Incorreta. Não inclui "Produto," e está incompleta.
- **Opção b)**: Incorreta. Não inclui "Produto,".
- **Opção c)**: Incorreta. O segundo "Produto," está fora de ordem.
- **Opção d)**: Correta.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html",
      "https://docs.oracle.com/javase/tutorial/java/javaOO/interfaces.html",
      "https://docs.oracle.com/javase/tutorial/java/javaOO/inheritance.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Selecione a alternativa que mostra a saída gerada pela execução do seguinte código, escrito na linguagem Java.
<pre><code>
public class MinhaClasse {
    public static void main(String[] args) {
        String v = null;
        try {
            int a = Integer.parseInt(v);
            System.out.print("Valor=" + a + ".");
        } finally {
            if (v.isEmpty()) {
                System.out.print("Erro.");
            }
            System.out.println("Fim.");
        }
    }
}
</code></pre>
Assinale a alternativa correta:`,
    "type": "radio",
    "options": [
      "Será exibido o conteúdo da pilha de exceção.",
      "Valor=0. Fim.",
      "Erro. Fim.",
      "Fim."
    ],
    "correctAnswer": 0,
    "justification": `
A execução resultará em uma <strong>NumberFormatException</strong> quando tentar executar <code>Integer.parseInt(v);</code> com <code>v</code> sendo <code>null</code>.

**Explicação detalhada:**

1. **No bloco <code>try</code>:**
   - <code>v</code> é <code>null</code>.
   - <code>Integer.parseInt(v);</code> lançará uma <code>NumberFormatException</code> porque não é possível converter <code>null</code> em um inteiro.

2. **Bloco <code>finally</code>:**
   - O bloco <code>finally</code> é executado mesmo após uma exceção não capturada.
   - Dentro do <code>finally</code>, tenta-se executar <code>v.isEmpty();</code>, mas como <code>v</code> é <code>null</code>, isso lança uma <code>NullPointerException</code>.

3. **Saída:**
   - Como nenhuma exceção é capturada, o programa termina abruptamente, e a JVM imprime o stack trace da exceção não capturada.

**Análise das alternativas:**

- **Opção a)**: Correta. Será exibido o stack trace da exceção.
- **Opção b)**: Incorreta. O programa não chega a imprimir "Valor=0."
- **Opção c)**: Incorreta. O programa não chega a imprimir "Erro."
- **Opção d)**: Incorreta. O programa não chega a imprimir "Fim."
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/finally.html",
      "https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#parseInt-java.lang.String-",
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/uncaughtexceptions.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Selecione a alternativa que mostra a saída gerada pela execução do seguinte código, escrito na linguagem Java.
<pre><code>
public class MinhaClasse {
    String a, b;
    void a(String a, String b) {
        a = a;
        b = b;
    }
    void t() {
        String tmp = a;
        a = b;
        b = tmp;
    }
    public static void main(String[] args) {
        MinhaClasse mc = new MinhaClasse();
        mc.a("Java", "7.0");
        mc.t();
        mc.a = "7.1";
        mc.t();
        System.out.print(mc.a + " " + mc.b);
    }
}
</code></pre>
Assinale a alternativa correta:`,
    "type": "radio",
    "options": [
      ".1 Java",
      "Java 7.1",
      "null 7.1",
      "null null"
    ],
    "correctAnswer": 2,
    "justification": `
A saída do programa será <strong>null 7.1</strong>.

**Explicação detalhada:**

1. **Método <code>a(String a, String b)</code>:**
   - Os parâmetros <code>a</code> e <code>b</code> estão sombreados pelas variáveis de instância <code>a</code> e <code>b</code>.
   - A atribuição <code>a = a;</code> e <code>b = b;</code> afetam apenas as variáveis locais (parâmetros), não os atributos da classe. Portanto, os atributos <code>mc.a</code> e <code>mc.b</code> permanecem <code>null</code>.

2. **Chamada <code>mc.a("Java", "7.0");</code>:**
   - Não altera os atributos <code>mc.a</code> e <code>mc.b</code>.

3. **Primeira chamada <code>mc.t();</code>:**
   - <code>tmp = mc.a;</code> → <code>tmp = null</code>
   - <code>mc.a = mc.b;</code> → <code>mc.a = null</code>
   - <code>mc.b = tmp;</code> → <code>mc.b = null</code>

   Os atributos <code>mc.a</code> e <code>mc.b</code> continuam <code>null</code>.

4. **Atribuição <code>mc.a = "7.1";</code>:**
   - Agora, <code>mc.a</code> é <code>"7.1"</code>.

5. **Segunda chamada <code>mc.t();</code>:**
   - <code>tmp = mc.a;</code> → <code>tmp = "7.1"</code>
   - <code>mc.a = mc.b;</code> → <code>mc.a = null</code>
   - <code>mc.b = tmp;</code> → <code>mc.b = "7.1"</code>

6. **Impressão <code>System.out.print(mc.a + " " + mc.b);</code>:**
   - <code>mc.a</code> é <code>null</code>
   - <code>mc.b</code> é <code>"7.1"</code>
   - A saída é <code>"null 7.1"</code>

**Análise das alternativas:**

- **Opção a)**: Incorreta.
- **Opção b)**: Incorreta.
- **Opção c)**: Correta.
- **Opção d)**: Incorreta.
    `,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/javaOO/variables.html#hiding",
      "https://www.geeksforgeeks.org/variable-shadowing-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o Diagrama de Classe da UML da Figura 2:<br>
      <img src="./_images/1.png" alt="Figura 1: Diagrama de Classe"><br>
      A afirmativa correta em relação ao tipo de associação entre as classes Pedido e ItemPedido é`,
    "type": "radio",
    "options": [
      "especialização",
      "composição",
      "agregação",
      "generalização"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>composição</strong>, pois no diagrama, a relação entre Pedido e ItemPedido é representada por um diamante preto, indicando uma composição. Isso significa que um ItemPedido existe exclusivamente associado a um Pedido e não pode existir independentemente dele.</br>`,
    "referenceLinks": ["https://www.uml-diagrams.org/composition.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Na linguagem de programação Java, o conceito "É um conjunto de requisitos para classes que precisam adequar-se a ela" refere-se à`,
    "type": "radio",
    "options": [
      "interface",
      "sobrecarga",
      "classe abstrata",
      "herança"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>interface</strong>, pois uma interface define um conjunto de métodos que uma classe precisa implementar, sem especificar como esses métodos devem ser implementados. Isso cria um contrato para classes que desejam aderir à interface.</br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/concepts/interface.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Assinale a alternativa que contém apenas classes concretas da API de coleções da linguagem de programação Java.`,
    "type": "radio",
    "options": [
      "List, Vector, LinkedList",
      "Set, ArrayList, Vector",
      "ArrayList, Vector, LinkedList",
      "List, Set, ArrayList"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>ArrayList, Vector, LinkedList</strong>, pois essas são classes concretas da API de coleções do Java. Já <code>List</code> e <code>Set</code> são interfaces e não podem ser instanciadas diretamente.</br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `O conceito: "Comumente utilizada para criar vários métodos com o mesmo nome que realizam a mesma tarefa, ou tarefas semelhantes, mas sobre tipos diferentes ou números diferentes de argumentos", na linguagem de programação Java refere-se à`,
    "type": "radio",
    "options": [
      "sobrescrita",
      "sobrecarga",
      "herança",
      "interface"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>sobrecarga</strong>, pois a sobrecarga permite criar múltiplos métodos com o mesmo nome, mas com diferentes assinaturas, para realizar tarefas semelhantes, mas com diferentes tipos ou quantidades de parâmetros.</br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o texto a seguir:<br>
    A palavra-chave __________ indica que você está criando uma nova classe que deriva de uma classe existente. A classe existente é chamada __________. A nova classe é chamada __________.<br>
    As palavras que completam corretamente as lacunas são, respectivamente,`,
    "type": "radio",
    "options": [
      "implements, subclass, superclass",
      "extends, subclass, superclass",
      "extends, superclass, subclass",
      "implements, superclass, subclass"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>extends, superclass, subclass</strong>, pois em Java, a palavra-chave <code>extends</code> indica herança, onde a classe derivada (subclass) herda de uma classe existente (superclass).</br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html"],
    "screenshots": [],
    "videos": []
  },
 {
    "question": `Considere as afirmativas abaixo sobre interfaces na linguagem de programação Java.<br>
    I. A palavra-chave <code>extends</code> é utilizada para especificar que uma classe implementa uma interface.<br>
    II. Uma classe pode implementar somente uma interface.<br>
    III. Uma classe que não implementa todos os métodos de uma interface é uma classe abstrata.<br>
    Está(ão) correta(s) apenas a(s) afirmativa(s):`,
    "type": "radio",
    "options": [
      "II.",
      "I e II.",
      "I e III.",
      "III."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>III</strong>. <br>
    Explicação:
    - A afirmativa I está incorreta: em Java, uma classe implementa uma interface usando a palavra-chave <code>implements</code>, e não <code>extends</code>. A palavra <code>extends</code> é usada para indicar que uma classe herda de outra classe ou que uma interface herda de outra interface.
    - A afirmativa II também está incorreta: em Java, uma classe pode implementar várias interfaces, permitindo que herde comportamentos de várias fontes, o que promove flexibilidade e reutilização de código.
    - A afirmativa III está correta: se uma classe implementa uma interface mas não fornece implementações para todos os métodos definidos na interface, essa classe deve ser declarada como abstrata, uma vez que ela não está completamente implementada.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código a seguir escrito na linguagem Java.<br>
    <pre><code>public abstract class F {
    private int v[];
    public void resolve() {
        v = new int[6];
        v[0] = 1;
        v[1] = 1;
        for (int i = 2; i < 6; i++) {
            v[i] = v[i - 1] + v[i - 2];
        }
        System.out.println(v[5]);
    }
    public static void main(String[] args) {
        F f = new F();
        f.resolve();
    }
}</code></pre>
    Qual é a alternativa que representa o resultado escrito na tela após a execução?`,
    "type": "radio",
    "options": [
      "Ocorrerá um erro de compilação.",
      "6",
      "5",
      "8"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Ocorrerá um erro de compilação</strong>. <br>
    Explicação:
    - Este código resultará em um erro de compilação porque a classe <code>F</code> é declarada como <code>abstract</code>. Em Java, classes abstratas não podem ser instanciadas diretamente. A linha <code>F f = new F();</code> tenta criar uma instância de <code>F</code>, o que gera um erro de compilação. Para corrigir esse erro, seria necessário criar uma subclasse concreta que estenda <code>F</code> e instanciar essa subclasse em vez de <code>F</code> diretamente.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código abaixo escrito na linguagem Java.<br>
    <pre><code>public class C {
    private final int x[];
    public C() {
        x = new int[10];
    }
    public void preenche() {
        for (int i = 0; i < 10; i++) {
            x[i] = 10 - i;
        }
    }
    public void imprime() {
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                System.out.print(x[i] + " ");
            }
        }
    }
    public static void main(String[] args) {
        C c = new C();
        c.preenche();
        c.imprime();
    }
}</code></pre>
    Qual é a alternativa que representa o resultado escrito na tela após a execução?`,
    "type": "radio",
    "options": [
      "Ocorrerá um erro de compilação.",
      "2 4 6 8 10.",
      "10 8 6 4 2.",
      "9 7 5 3 1."
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>10 8 6 4 2</strong>. <br>
    Explicação:
    - A função <code>preenche()</code> inicializa o array <code>x</code> com valores decrescentes a partir de 10. Assim, <code>x[0]</code> será 10, <code>x[1]</code> será 9, e assim por diante até <code>x[9]</code>, que será 1.
    - A função <code>imprime()</code> percorre o array e imprime apenas os elementos nos índices pares. Como o array <code>x</code> foi preenchido em ordem decrescente, os valores impressos são os das posições pares: <code>x[0] = 10</code>, <code>x[2] = 8</code>, <code>x[4] = 6</code>, <code>x[6] = 4</code>, <code>x[8] = 2</code>, resultando na saída <code>10 8 6 4 2</code>.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código abaixo escrito na linguagem Java.<br>
    <pre><code>public class Algoritmo {
    public static void main(String[] args) {
        int i, x;
        i = 0;
        x = 0;
        do {
            x = x + i;
            i = i + 1;
        } while (i < 5);
        System.out.println(x);
    }
}</code></pre>
    Qual é a alternativa que representa o resultado escrito na tela após a execução?`,
    "type": "radio",
    "options": [
      "8",
      "12",
      "15",
      "10"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>10</strong>. <br>
    Explicação:
    - Neste código, o laço <code>do-while</code> acumula o valor de <code>i</code> em <code>x</code> até que <code>i</code> atinja 5. O laço começa com <code>i = 0</code> e <code>x = 0</code>, e em cada iteração, <code>i</code> é incrementado e o valor de <code>i</code> é somado a <code>x</code>.
    - A sequência de valores de <code>i</code> acumulados em <code>x</code> é: 0 + 1 + 2 + 3 + 4, resultando em um total de 10.
    - Quando <code>i</code> atinge 5, a condição do <code>while</code> se torna falsa, e o laço termina, imprimindo <code>10</code> como resultado final.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código a seguir escrito na linguagem Java.<br>
    <pre><code>public class Matriz {
    public static void main(String[] args) {
        int m[][];
        m = new int[3][3];
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (j == i) {
                    m[i][j] = i + 3;
                } else {
                    m[i][j] = j + i;
                }
            }
        }
        System.out.println(m[1][1]);
    }</code></pre>
    Qual é a alternativa que representa o resultado escrito na tela após a execução?`,
    "type": "radio",
    "options": [
      "6",
      "2",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>4</strong>. <br>
    Explicação:
    - O código cria uma matriz 3x3 e preenche os valores de acordo com a lógica de <code>i</code> e <code>j</code>. Para os elementos da diagonal principal (onde <code>j == i</code>), a célula recebe o valor <code>i + 3</code>. Em outros casos, ela recebe o valor <code>j + i</code>.
    - A célula <code>m[1][1]</code> está na diagonal principal, então o valor atribuído é <code>1 + 3 = 4</code>.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código a seguir escrito na linguagem Java.<br>
    <pre><code>public class Programa {
    public static void main(String[] args) {
        int k, p;
        k = __;
        p = __;
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 4; j++) {
                k = p + k;
            }
        }
        System.out.println(k);
    }</code></pre>
    Para que o resultado exibido na tela ao final da execução do programa seja o valor 31, as variáveis k e p deverão receber, respectivamente, nas linhas 5 e 6 do código, os valores:`,
    "type": "radio",
    "options": [
      "8 e 2.",
      "6 e 5.",
      "4 e 6.",
      "7 e 3."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>7 e 3</strong>. <br>
    Explicação:
    - O código contém um loop externo que executa duas vezes e um loop interno que executa quatro vezes. Isso faz com que a linha <code>k = p + k</code> seja executada um total de 8 vezes.
    - Para valores de <code>k = 7</code> e <code>p = 3</code>, o cálculo progressivo de <code>k</code> nas 8 operações resulta exatamente no valor final de 31.
    - A cada iteração, o valor de <code>k</code> é atualizado adicionando o valor de <code>p</code>, acumulando até atingir o valor desejado ao final do loop.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Em relação à programação de threads utilizando a linguagem de programação Java, leia a sentença a seguir e preencha as lacunas com a opção correta.<br>
    A forma preferida de criar aplicativos Java de múltiplas threads é implementando a interface ___________. Essa interface define e exige que seja implementado um método ___________ único, que contém o código que definirá o que a thread irá realizar.`,
    "type": "radio",
    "options": [
      "Runnable, start",
      "Serializable, run",
      "Serializable, start",
      "Runnable, run"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>Runnable, run</strong>. <br>
    Explicação:
    - A maneira preferida de criar threads em Java é implementar a interface <code>Runnable</code>, pois isso permite que a classe herde de outra, se necessário.
    - A interface <code>Runnable</code> exige a implementação do método <code>run</code>, que contém o código que será executado pela thread.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/essential/concurrency/runthread.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Em relação a comunicações baseadas em Socket na linguagem de programação Java, são feitas as seguintes afirmações:<br>
    I. Caso aconteça algum erro de entrada/saída ao fechar o socket, uma exceção do tipo <code>SocketException</code> irá ocorrer.<br>
    II. Um objeto da classe <code>InetAddress</code> contém um endereço IP.<br>
    III. A classe <code>DatagramSocket</code> vincula o aplicativo a uma porta para transmissão de datagrama.<br>
    Estão corretas as afirmativas`,
    "type": "radio",
    "options": [
      "I e II apenas.",
      "I e III apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>I, II e III</strong>. <br>
    Explicação:
    - Todas as afirmativas são verdadeiras: <br>
      - Afirmativa I: <code>SocketException</code> ocorre em erros de entrada/saída relacionados ao socket.<br>
      - Afirmativa II: A classe <code>InetAddress</code> representa um endereço IP.<br>
      - Afirmativa III: <code>DatagramSocket</code> é usado para enviar e receber datagramas, e vincula o aplicativo a uma porta.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/networking/sockets/index.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Leia as sentenças abaixo, das quais foram excluídas algumas palavras.<br>
    ____________ envolve a utilização de uma variável de superclasse para invocar métodos nos objetos de superclasse e de subclasse.<br>
    _____________ é uma forma de reutilização de software em que novas classes adquirem os membros de classes existentes e aprimoram essas classes com novas capacidades.<br>
    Os construtores de subclasse podem chamar construtores de superclasse via palavra-chave super. No entanto, essa chamada deverá ser a ___________ linha de comando no construtor da subclasse.<br>
    As palavras que completam, correta e respectivamente as lacunas acima, são:`,
    "type": "radio",
    "options": [
      "Polimorfismo, Herança, primeira",
      "Herança, Polimorfismo, última",
      "Polimorfismo, Herança, última",
      "Herança, Polimorfismo, primeira"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Polimorfismo, Herança, primeira</strong>. <br>
    Explicação:
    - Polimorfismo permite que variáveis da superclasse invoquem métodos em objetos de superclasse e subclasse.
    - Herança é a forma de reutilização de código que permite que classes adquiram membros de outras classes.
    - A palavra-chave <code>super</code> deve ser a primeira linha em um construtor de subclasse para invocar o construtor da superclasse.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Em relação à interface de classes na linguagem de programação Java, são feitas as seguintes afirmações:<br>
    I. A declaração de uma interface é feita através do uso da palavra-chave <code>interface</code> juntamente com o nome que será dado a ela, sendo que a interface irá conter a declaração de métodos que serão sempre <code>public</code> e <code>abstract</code>.<br>
    II. As classes que desejarem implementar uma determinada interface deverão ser declaradas com o acréscimo da palavra-chave <code>implements</code> e poderão ou não implementar os métodos definidos na interface.<br>
    III. Ao ser criada uma determinada interface, podemos definir métodos. Além disso, é possível que as interfaces também contenham campos que serão implicitamente <code>final</code> e <code>static</code>.<br>
    Estão corretas as afirmativas`,
    "type": "radio",
    "options": [
        "I e II apenas.",
        "I e III apenas.",
        "II e III apenas.",
        "I, II e III."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>I e III apenas</strong>. <br>
    Explicação:
    - Afirmativa I está correta: Interfaces em Java utilizam a palavra-chave <code>interface</code> e seus métodos são implicitamente <code>public</code> e <code>abstract</code>.
    - Afirmativa II está incorreta: Se uma classe implementa uma interface, ela é obrigada a implementar todos os métodos definidos na interface, a menos que seja uma classe abstrata.
    - Afirmativa III está correta: Interfaces podem conter campos que são implicitamente <code>final</code> e <code>static</code>.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/interfaceDef.html"],
    "screenshots": [],
    "videos": []
  },
    {
    "question": `Em relação ao tratamento de exceções na linguagem de programação Java, são feitas as seguintes afirmações:<br>
    I. Uma exceção não capturada (sem um bloco catch correspondente) sempre interromperá a execução do programa, mesmo quando implementado um programa multithreading e a exceção tenha ocorrido em uma determinada Thread.<br>
    II. Ao implementar um bloco try-catch, é possível utilizar um bloco finally. Como esse bloco será executado, tendo ocorrido ou não uma exceção, é comum sua utilização para que seja realizada a liberação de recursos.<br>
    III. Java permite capturar exceções e, além disso, permite que o desenvolvedor possa criar e lançar exceções. Para isso, deve ser criada uma nova exceção e lançá-la utilizando a instrução throw.<br>
    Estão corretas as afirmativas:`,
    "type": "radio",
    "options": [
      "I e II apenas.",
      "I e III apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>I, II e III</strong>.<br>
    Explicação:
    - A afirmativa I está correta. Exceções não capturadas, se não forem tratadas, interromperão o programa, pois o Java encerra o processo ao não encontrar um bloco <code>catch</code> correspondente, mesmo em programas multithreading.
    - A afirmativa II também está correta. O bloco <code>finally</code> é sempre executado após um <code>try-catch</code>, independentemente de uma exceção ter ocorrido, sendo útil para liberar recursos como arquivos ou conexões.
    - A afirmativa III também é verdadeira, pois em Java é possível lançar exceções personalizadas com o uso da instrução <code>throw</code>.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/essential/exceptions/finally.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `O código a seguir mostra um trecho de um programa escrito em Java que contém uma estrutura de tratamento de exceções.<br>
    <pre><code>Scanner entrada = new Scanner(System.in); 
try { 
    System.out.println("Informe um numerador inteiro: "); 
    int numerador = entrada.nextInt(); 
    System.out.println("Informe um denominador inteiro"); 
    int denominador = entrada.nextInt(); 
    float resultado = numerador / denominador; 
    System.out.println("Resultado = " + resultado); 
} catch (ArithmeticException aritExcp) { 
    System.err.printf("Exceção: %s", aritExcp); 
} catch (InputMismatchException inptMism) { 
    System.err.printf("Exceção: %s", inptMism); 
}</code></pre>
    Com relação ao código apresentado, é correto afirmar:`,
    "type": "radio",
    "options": [
      "O código contido nas linhas 4 e 6 poderá lançar uma exceção do tipo InputMismatchException, e caso isso ocorra, ela será capturada e tratada nas linhas 11 e 12 do código.",
      "O bloco de código contido no bloco try poderá lançar alguma exceção, e caso isso ocorra, sempre será executado tanto o catch referente ao ArithmeticException (linhas 9 e 10) quanto o catch referente ao InputMismatchException (linhas 11 e 12).",
      "O bloco try/catch do programa será capaz de tratar apenas exceções relacionadas à divisão por zero, que poderá ocorrer caso o usuário informe um valor nulo na linha de código 6.",
      "O código contido na linha 7 poderá lançar exceções do tipo InputMismatchException e ArithmeticException, e caso isso ocorra, elas serão capturadas e tratadas nas linhas 9 a 13 do código."
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>O código contido nas linhas 4 e 6 poderá lançar uma exceção do tipo InputMismatchException</strong>.<br>
    Explicação:
    - A entrada incorreta nas linhas 4 e 6, como inserir um texto em vez de um número, causará uma <code>InputMismatchException</code>, que será capturada pelo bloco <code>catch</code> apropriado (linhas 11 e 12).
    - A <code>ArithmeticException</code> ocorrerá se o usuário inserir zero como denominador (linha 7), sendo tratada nas linhas 9 e 10.
    - A opção correta reflete o tratamento adequado das exceções que podem ser lançadas neste contexto.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/essential/exceptions/catch.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `O código a seguir mostra um trecho de um programa escrito na linguagem de programação Java e que contém uma estrutura de seleção do tipo switch.<br>
    <pre><code>Scanner entrada = new Scanner(System.in); 
System.out.print("Informe o valor desejado: "); 
int valor = entrada.nextInt(); 

switch (valor) { 
    case 1:  
        System.out.print(" 1 "); 
    case 2: 
        System.out.print(" 2 "); 
    case 3: 
        System.out.print(" 3 "); 
    case 4: 
        System.out.print(" 4 "); 
    case 5: 
        System.out.print(" 5 "); 
    default: 
        System.out.print(" ### "); 
}</code></pre>
    Avalie as afirmativas:<br>
    I. Será impressa na saída padrão do usuário a mensagem 4, caso o usuário execute o código e informe o valor 4 na linha 3 do programa.<br>
    II. A mensagem ### (contida na cláusula default) será impressa na saída padrão do usuário para qualquer valor informado na linha 3 do programa.<br>
    III. Será impressa na saída padrão do usuário a mensagem 5 ###, caso o usuário execute o código e informe o valor 5 na linha 3 do programa.`,
    "type": "radio",
    "options": [
      "I.",
      "II.",
      "III.",
      "II e III."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>II e III</strong>.<br>
    Explicação:
    - A afirmativa I é incorreta: como não há instruções <code>break</code>, o valor <code>4</code> resultaria na execução das instruções subsequentes, inclusive a impressão de <code>4</code>, <code>5</code>, e <code>###</code>.
    - A afirmativa II está correta. A cláusula <code>default</code> sempre será executada, pois não há <code>break</code>, então a saída sempre incluirá <code>###</code>.
    - A afirmativa III está correta: ao informar o valor <code>5</code>, o programa imprimirá <code>5</code> seguido de <code>###</code>, pois a cláusula <code>default</code> será executada.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Ao desenvolver sistemas utilizando a linguagem de programação Java é comum a utilização de modificadores de acesso <code>public</code>, <code>private</code> e <code>protected</code>. Em relação a eles, o que é INCORRETO afirmar?`,
    "type": "radio",
    "options": [
      "Atributos declarados como protected em uma superclasse podem ser acessados apenas por membros dessa superclasse e por membros de suas subclasses, não sendo acessíveis a outras classes no mesmo pacote.",
      "O uso do modificador public é opcional, pois todos os atributos e métodos são considerados como públicos quando não é definido nenhum modificador de acesso no momento da declaração.",
      "Atributos e métodos declarados como públicos em uma superclasse poderão ser acessados e utilizados livremente em qualquer uma de sua(s) subclasse(s).",
      "Os atributos e métodos declarados como private são acessíveis apenas aos métodos da classe em que são declarados."
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Atributos declarados como protected em uma superclasse podem ser acessados apenas por membros dessa superclasse e por membros de suas subclasses, não sendo acessíveis a outras classes no mesmo pacote.</strong><br>
    Explicação:
    - A afirmativa a) está incorreta, pois atributos <code>protected</code> em uma superclasse também são acessíveis por outras classes do mesmo pacote, além das subclasses.
    - O modificador <code>public</code> é de fato opcional em pacotes específicos, pois, sem especificação, o acesso padrão é <em>package-private</em>.
    - Os modificadores <code>private</code> limitam o acesso a apenas dentro da própria classe, enquanto <code>public</code> oferece acesso sem restrição de pacote ou herança.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `O código a seguir apresenta um trecho escrito na linguagem de programação Java e contém uma possível modelagem para a classe Pessoa.<br>
    <pre><code>public class Pessoa { 
    private String nome; 
    private int idade; 
    private float altura; 

    public Pessoa(String nome) { 
        this.nome = nome; 
    } 

    public Pessoa(int idade) { 
        this.idade = idade; 
    } 

    public Pessoa(float altura) { 
        this.altura = altura; 
    } 

    public Pessoa(String nome, int idade, float altura) { 
        this.nome = nome; 
        this.idade = idade; 
        this.altura = altura; 
    }    
}</code></pre>
    O código representa:`,
    "type": "radio",
    "options": [
      "herança.",
      "encapsulamento.",
      "sobrecarga de construtores.",
      "polimorfismo."
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>sobrecarga de construtores</strong>.<br>
    Explicação:
    - Neste código, a classe <code>Pessoa</code> define múltiplos construtores com diferentes parâmetros, representando o conceito de sobrecarga de construtores. Cada construtor permite inicializar a classe com diferentes combinações de dados.
    - <em>Encapsulamento</em> também está presente, pois os atributos são privados e acessíveis apenas dentro da própria classe.
    - Polimorfismo e herança não se aplicam diretamente neste exemplo, pois não há relacionamento de herança nem substituição de métodos.<br>`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o diagrama de classes que será utilizado para a implementação de uma determinada aplicação. A aplicação deverá permitir que sejam instanciados apenas objetos das classes <code>Secretario</code>, <code>Supervisor</code> e <code>Gerente</code>.<br><br>
    <img src="./_images/2.png" alt="Figura 2: Diagrama de Classe" style="width:70%;"><br>
    <pre><code>public _______ class Funcionario { 
}</code></pre>
    Utilizando a linguagem de programação Java e parte da declaração demonstrada acima, qual é a palavra-chave correta para preenchimento da lacuna?`,
    "type": "radio",
    "options": [
      "interface",
      "abstract",
      "final",
      "static"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>abstract</strong>.<br>
    Explicação:
    - A palavra-chave <code>abstract</code> é usada para criar uma classe que não pode ser instanciada diretamente. Nesse contexto, a classe <code>Funcionario</code> deve ser uma classe abstrata, pois a aplicação só permite a criação de instâncias das subclasses <code>Secretario</code>, <code>Supervisor</code>, e <code>Gerente</code>.
    - A opção <code>interface</code> seria inadequada, pois <code>Funcionario</code> é uma classe com comportamento comum e não uma interface de contrato.
    - <code>final</code> impediria que a classe <code>Funcionario</code> tivesse subclasses, contrariando o diagrama.
    - <code>static</code> é incorreto, pois classes em Java não são declaradas como <code>static</code> a menos que estejam aninhadas dentro de outra classe.
    `,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código-fonte Java abaixo.<br>
    <div style="display: flex; gap: 20px;">
        <div style="border: 1px solid #ddd; padding: 10px;">
            <pre><code>public class Item {
    private String nome;
    private double valor;

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public double getValor() {
        return valor;
    }
    public void setValor(double valor) {
        this.valor = valor;
    }
    public String toString(){
        return nome + ", " + valor;
    }
}</code></pre>
        </div>
        <div style="border: 1px solid #ddd; padding: 10px;">
            <pre><code>public class Principal {
    public static void main(String[] args) {
        Item item1 = new Item();
        item1.setValor(1200);
        item1.setNome("Computador");

        Item item2 = new Item();
        item2.setValor(899);
        item2.setNome("Tablet");

        metodo(item1, item2);
        System.out.print(item1);
        System.out.print(" e ");
        System.out.print(item2);
    }

    public static void metodo(Item p1, Item p2){
        p1.setValor(2400);
        p2.setValor(1798);
        Item aux = p1;
        p1 = p2;
        p2 = aux;
    }
}</code></pre>
        </div>
    </div>
    A saída gerada pelo programa acima imprime no console:<br>`,
    "type": "radio",
    "options": [
      "Computador, 1200.0 e Tablet, 899.0",
      "Computador, 2400.0 e Tablet, 1798.0",
      "Tablet, 1798.0 e Computador, 2400.0",
      "Tablet, 899.0 e Computador, 1200.0"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Computador, 2400.0 e Tablet, 1798.0</strong>.<br>
    Explicação:<br>
    - Os valores de <code>item1</code> e <code>item2</code> são alterados no método <code>metodo</code>, com <code>item1.valor</code> definido para <code>2400.0</code> e <code>item2.valor</code> definido para <code>1798.0</code>.<br>
    - A troca de referências entre <code>p1</code> e <code>p2</code> dentro do método não afeta as variáveis <code>item1</code> e <code>item2</code> no <code>main</code>, pois a mudança de referência é local ao método.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Analise o código-fonte Java a seguir.<br>
    <div style="display: flex; gap: 20px;">
        <div style="border: 1px solid #ddd; padding: 10px;">
            <pre><code>public class Funcionario {
    private String cpf;
    private String nome;
    private double salario;

    public double getSalario() {
        return salario;
    }
    public void setSalario(double s) {
        this.salario = s;
    }
    // getters e setters de cpf e nome
    // foram omitidos
}</code></pre>
        </div>
        <div style="border: 1px solid #ddd; padding: 10px;">
            <pre><code>public class Gerente extends Funcionario {
    private double bonus;

    public double getBonus() {
        return bonus;
    }
    public void setBonus(double bonus) {
        this.bonus = bonus;
    }
    public double getSalario() {
        _________________________
    }
}</code></pre>
        </div>
    </div>
    Nesse contexto, um gerente é um funcionário que recebe salário acrescido de bonificação, conforme seu desempenho. Observe que o método <code>getSalario()</code> da classe <code>Gerente</code> possui uma lacuna.<br><br>
    Assinale a alternativa que apresenta o comando para o preenchimento dessa lacuna:<br>`,
    "type": "radio",
    "options": [
      "return salario + bonus;",
      "return this.getSalario() + bonus;",
      "return super.getSalario() + bonus;",
      "return Funcionario.getSalario() + bonus;"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>return super.getSalario() + bonus;</strong>.<br>
    Explicação:<br>
    - A palavra-chave <code>super</code> permite acessar o método <code>getSalario()</code> da classe pai (<code>Funcionario</code>) para obter o salário base, ao qual é somado o <code>bonus</code>.
    - As outras alternativas não utilizam o acesso correto ao salário da classe pai, resultando em erro de compilação ou loop infinito, como no caso de <code>this.getSalario()</code>.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/super.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Sobre o significado da palavra-chave <code>super</code> do Java, é correto afirmar que:<br>`,
    "type": "radio",
    "options": [
      "denota uma referência ao parâmetro implícito da classe.",
      "possibilita chamar outro construtor da mesma classe.",
      "possibilita chamar um construtor de superclasse.",
      "possibilita chamar um método de subclasse."
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>possibilita chamar um construtor de superclasse</strong>.<br>
    Explicação:<br>
    - A palavra-chave <code>super</code> é utilizada em Java para chamar o construtor ou métodos da superclasse (classe pai) diretamente, permitindo acessar funcionalidades definidas na classe superior.
    - As alternativas incorretas representam equívocos: <code>super</code> não chama métodos da subclasse, nem referencia o parâmetro implícito da classe atual.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/super.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `A respeito de classes abstratas do Java, assinale a afirmativa INCORRETA:<br>`,
    "type": "radio",
    "options": [
      "A tentativa de instanciar um objeto de uma classe abstrata é um erro de compilação.",
      "As classes abstratas podem ter apenas métodos abstratos.",
      "Variáveis de objeto de uma classe abstrata podem ser criadas, mas essas variáveis devem se referir a um objeto de uma subclasse não abstrata.",
      "Uma classe pode até mesmo ser declarada abstrata, embora ela não tenha nenhum método abstrato."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>As classes abstratas podem ter apenas métodos abstratos</strong>, pois essa afirmativa é INCORRETA.<br>
    Explicação:<br>
    - Classes abstratas em Java não são limitadas a apenas métodos abstratos; elas podem conter métodos concretos (com implementação) e variáveis.
    - As demais afirmativas estão corretas: classes abstratas não podem ser instanciadas diretamente, é possível declarar variáveis de uma classe abstrata referindo-se a instâncias de subclasses concretas, e uma classe pode ser abstrata sem definir métodos abstratos.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Analise o código-fonte Java abaixo.<br>
    <pre><code>public class Classe {
    public static void main(String[] args) {
        int v[] = {1, 2, 2, 1, 1, 2};
        int count = 0, i = 0;
        while (count < v.length * 2) {
            v[i] = v[i] * v[(i + 1) % v.length];
            i = (i + 1) % v.length;
            count++;
        }
        
        for (int j = 0; j < v.length; j++) {
            System.out.print(v[j] + " ");
        }
    }
}</code></pre><br>
    A saída gerada pelo programa acima imprime no console:<br>`,
    "type": "radio",
    "options": [
      "2 8 8 2 8 32",
      "32 8 2 2 8 4",
      "8 8 2 2 8 4",
      "8 8 2 2 8 32"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>8 8 2 2 8 4</strong>.<br>
    Explicação:
    - O código faz uso de uma estrutura de repetição para modificar os valores do array <code>v[]</code> com base em multiplicações sucessivas entre os elementos, utilizando operadores modulares para percorrer o array circularmente.
    - Após a execução do laço, os valores resultantes no array são impressos na ordem <code>8 8 2 2 8 4</code>, que corresponde à opção correta.`,
    "referenceLinks": ["https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html"],
    "screenshots": [],
    "videos": []
  },
    {
    "question": `A respeito de interfaces do Java, assinale a afirmativa INCORRETA.<br>`,
    "type": "radio",
    "options": [
      "Todos os métodos de uma interface são automaticamente public abstract.",
      "Todas as variáveis de uma interface são automaticamente public static final.",
      "Uma variável de interface, mas essa variável deve se referir a um objeto de uma classe que implementa a interface.",
      "Assim como é possível construir hierarquias de classes utilizando a palavra-chave extends, hierarquias de interfaces podem ser construídas utilizando-se a palavra-chave implements."
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>Uma variável de interface, mas essa variável deve se referir a um objeto de uma classe que implementa a interface</strong>.<br>
    Explicação:
    - No Java, interfaces não podem ter variáveis que referenciam objetos; elas apenas permitem constantes (variáveis <code>public static final</code>) e métodos abstratos. 
    - Afirmativa A é correta: todos os métodos em uma interface são automaticamente <code>public</code> e <code>abstract</code>.<br>
    - Afirmativa B é correta: todas as variáveis declaradas em uma interface são implicitamente <code>public static final</code>, ou seja, constantes.<br>
    - Afirmativa D é correta: interfaces podem estender outras interfaces usando a palavra-chave <code>extends</code> (não <code>implements</code>), construindo uma hierarquia de interfaces.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/interfaceDef.html",
      "https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.3"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considerando a linguagem de programação Java, analise as seguintes afirmativas sobre construtores:<br>
    I. Um construtor tem o mesmo nome da classe.<br>
    II. Uma classe pode ter mais de um construtor, e todos eles devem especificar o tipo de retorno void.<br>
    III. Um construtor sempre é chamado com o operador new, podendo receber zero, um ou mais parâmetros.<br>
    Estão corretas as afirmativas:<br>`,
    "type": "radio",
    "options": [
      "I e II apenas.",
      "I e III apenas.",
      "II e III apenas.",
      "I, II e III."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>I e III apenas</strong>.<br>
    Explicação:
    - Afirmativa I é correta: um construtor deve ter o mesmo nome da classe para ser reconhecido como tal.<br>
    - Afirmativa III é correta: o construtor é invocado pelo operador <code>new</code>, e pode receber diversos parâmetros.<br>
    - Afirmativa II é incorreta: construtores não têm um tipo de retorno, nem mesmo <code>void</code>. Eles são especiais e não devem definir nenhum tipo de retorno.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html",
      "https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.8.1"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere-se o diagrama de classes UML abaixo, em que Conta_Comum e Conta_Especial possuem particularidades de saque. Embora as classes possuam métodos com o mesmo nome, as implementações desses métodos são diferentes.<br><br>
    <img src="./_images/3.png" alt="Figura do Diagrama de Classes UML" style="width:50%;"><br><br>
    Essa redeclaração de métodos caracteriza um exemplo de:<br>`,
    "type": "radio",
    "options": [
      "dependência",
      "agregação",
      "polimorfismo",
      "generalização"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>polimorfismo</strong>.<br>
    Explicação:
    - O polimorfismo permite que classes derivadas (como <code>Conta_Comum</code> e <code>Conta_Especial</code>) reimplementem métodos da superclasse com comportamentos diferentes. Nesse caso, ambos possuem um método de saque, mas suas implementações variam de acordo com as regras de cada tipo de conta.<br>
    - Afirmativa A (dependência) é incorreta, pois não há relação de dependência explícita entre as classes para caracterizar essa situação.<br>
    - Afirmativa B (agregação) não se aplica, pois a agregação representa uma relação "todo/parte" entre classes, que não é o caso aqui.<br>
    - Afirmativa D (generalização) é incorreta, já que a generalização é o relacionamento de herança em si, e não a reimplementação específica de métodos.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Analisando o diagrama de classes abaixo.<br><br>
    <img src="./_images/4.png" alt="Diagrama de Classes UML" style="width:50%;"><br><br>
    A alternativa que corresponde ao relacionamento entre as classes é:<br>`,
    "type": "radio",
    "options": [
      "Agregação (Pessoa, Conta_Comum), herança (Pessoa, Pessoa_Fisica)",
      "Composição (Pessoa, Conta_Comum), herança (Pessoa, Pessoa_Fisica)",
      "Agregação (Pessoa, Conta_Comum), composição (Pessoa, Pessoa_Fisica)",
      "Composição (Pessoa, Conta_Comum), composição (Pessoa, Pessoa_Fisica)"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Agregação (Pessoa, Conta_Comum), herança (Pessoa, Pessoa_Fisica)</strong>.<br>
    Explicação:
    - No diagrama, a relação entre <code>Pessoa</code> e <code>Conta_Comum</code> é uma agregação, indicada pelo losango vazio. Isso significa que uma instância de <code>Pessoa</code> pode "possuir" uma ou mais <code>Conta_Comum</code>, mas as contas podem existir independentemente da pessoa.
    - Já a relação entre <code>Pessoa</code> e suas subclasses (<code>Pessoa_Fisica</code> e <code>Pessoa_Juridica</code>) é de herança, como indicado pela linha com um triângulo apontando para <code>Pessoa</code>, a superclasse.
    - Afirmativa B (Composição entre Pessoa e Conta_Comum) é incorreta, pois composição implica uma relação de dependência mais forte, onde o ciclo de vida de um depende do outro, o que não é o caso aqui.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html",
      "https://www.uml-diagrams.org/aggregation.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Em um diagrama de classes, nos casos em que existam atributos relacionados a uma associação e que não possam ser armazenados por nenhuma das classes envolvidas utiliza-se:<br>`,
    "type": "radio",
    "options": [
      "classe associativa",
      "composição",
      "associação ternária",
      "agregação"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>classe associativa</strong>.<br>
    Explicação:
    - Uma classe associativa é utilizada em UML quando existe uma associação entre duas classes e há necessidade de armazenar informações adicionais sobre essa associação, que não pertencem diretamente a nenhuma das classes envolvidas.
    - Isso é comum em relacionamentos muitos-para-muitos onde os atributos não podem ser atribuídos a uma das entidades. A classe associativa então armazena esses atributos extras e se relaciona com ambas as classes originais.
    - Composição e agregação são tipos de associação que representam relações todo/parte, mas não são usadas para armazenar atributos da associação.<br>`,
    "referenceLinks": [
      "https://www.uml-diagrams.org/association.html#association-class",
      "https://www.uml-diagrams.org/composition.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Alguns relacionamentos da UML tentam demonstrar uma relação todo/parte entre os objetos associados. Há um tipo especial de associação, em que se tenta demonstrar que as informações de um objeto (chamado objeto-todo) precisam ser complementadas pelas informações contidas em um ou mais objetos de outra classe (chamados objetos-parte).<br>
    Esse tipo especial de associação é chamado de:<br>`,
    "type": "radio",
    "options": [
      "especialização",
      "realização",
      "agregação",
      "generalização"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>agregação</strong>.<br>
    Explicação:
    - A agregação em UML representa uma relação todo/parte onde o objeto todo (ou composto) pode ser completado ou complementado pelas informações do objeto parte, mas ambos têm ciclos de vida independentes.
    - Esse tipo de associação permite representar que o objeto todo pode "ter" objetos parte, mas o objeto parte pode existir independentemente do todo, ao contrário da composição, onde o ciclo de vida dos objetos parte é dependente do todo.
    - Especialização e generalização não representam a relação todo/parte; a realização representa a implementação de interfaces em UML.<br>`,
    "referenceLinks": [
      "https://www.uml-diagrams.org/aggregation.html",
      "https://www.uml-diagrams.org/generalization.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere a execução do programa Java mostrado nas Figuras 2(a) e 2(b). Ambas apresentam classes implementadas na linguagem de programação Java e fazem parte do mesmo programa. Nessas figuras os números à esquerda representam cada linha de código fonte. Eles são meramente ilustrativos e não fazem parte do programa Java.<br><br>
    <div style="display: flex; gap: 20px;">
      <div style="border: 1px solid #ddd; padding: 5px;">
        <pre><code>package soma;
public class Inteiro {
    int i;
}</code></pre>
        <p style="text-align: center;">Figura 2(a): Programa em Java - Classe Inteiro.</p>
      </div>
      <div style="border: 1px solid #ddd; padding: 5px;">
        <pre><code>package soma;
public class Soma {
    public static void main(String[] args) {
        int i;
        Inteiro n = new Inteiro();
        int soma = 1;
        i = 2;
        n.i = 4;
        somarTres(i);
        diminuirCinco(n.i);
        soma += n.i * i;
        System.out.println(soma);
    }
    public static void somarTres(int val){
        val += 3;
    }
    public static void diminuirCinco(int val){
        val -= 5;
    }
}</code></pre>
        <p style="text-align: center;">Figura 2(b): Programa em Java - Classe Soma.</p>
      </div>
    </div>
    O valor da variável <code>soma</code>, quando o programa executar a linha 12 da Figura 2(b), é:<br>`,
    "type": "radio",
    "options": [
      "-1",
      "8",
      "7",
      "9"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>9</strong>.<br>
    Explicação:
    - A variável <code>soma</code> é inicializada com o valor 1.
    - A variável <code>i</code> recebe o valor 2 e <code>n.i</code> recebe 4.
    - O método <code>somarTres(i)</code> não altera o valor de <code>i</code> no método <code>main</code>, pois <code>i</code> é passado por valor, e o método opera em uma cópia do valor de <code>i</code>.
    - O método <code>diminuirCinco(n.i)</code> também opera em uma cópia do valor passado, então a tentativa de subtrair 5 de <code>n.i</code> não modifica o valor original em <code>main</code>.
    - Na linha 12, <code>soma += n.i * i;</code> resulta em <code>soma += 4 * 2</code>, que é <code>soma = 9</code>. Portanto, o valor final de <code>soma</code> é 9.`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html",
      "https://docs.oracle.com/javase/tutorial/java/javaOO/arguments.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `A questão 37 baseia-se na Figura 4. Essa figura apresenta um método para inserir dados em um arquivo do tipo texto (txt), implementado na linguagem de programação Java. Nessa figura os números à esquerda representam cada linha de código fonte. Eles são meramente ilustrativos e não fazem parte do programa Java.<br><br>
    <div style="border: 1px solid #ccc; padding: 10px;">
    <pre><code>
    public static void inserir(String output) throws FileNotFoundException, IOException{
        BufferedWriter out = new BufferedWriter(new FileWriter("teste.txt", true));
        BufferedReader in = new BufferedReader(new FileReader("teste.txt"));
        String entrada = in.readLine();
        
        if(entrada != null){
            out.newLine();
            out.write(output);
            out.close();
        }
        else{
            out.write(output);
            out.close();
        }
        in.close();
    }
    </code></pre>
    </div>
    Com base na figura 4, a variável <code>out</code>, na linha 2, recebe uma referência para um objeto que estabelece um fluxo de:<br>`,
    "type": "radio",
    "options": [
      "Bytes para o arquivo teste.txt.",
      "Caracteres para o arquivo teste.txt.",
      "Objetos para o arquivo teste.txt.",
      "Inteiros para o arquivo teste.txt."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Caracteres para o arquivo teste.txt</strong>.<br>
    Explicação:
    - Na linha 2, o código utiliza <code>BufferedWriter</code> e <code>FileWriter</code>, que são classes destinadas ao processamento de fluxos de caracteres em Java. Isso indica que o fluxo estabelecido é para caracteres, e não bytes, objetos ou inteiros.
    - <code>FileWriter</code> grava dados no arquivo como caracteres, e o <code>BufferedWriter</code> adiciona um buffer ao processo, melhorando a eficiência da gravação.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/8/docs/api/java/io/BufferedWriter.html",
      "https://docs.oracle.com/javase/tutorial/essential/io/buffers.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `As figuras abaixo apresentam classes implementadas na linguagem de programação Java e fazem parte do mesmo programa. Nessas figuras os números à esquerda representam cada linha de código fonte. Eles são meramente ilustrativos e não fazem parte do programa Java.<br><br>
    
    <div style="display: flex; gap: 20px; border: 1px solid #ddd; padding: 10px;">
      <div style="width: 45%; border-right: 1px solid #ddd; padding-right: 10px;">
        <pre><code>
Figura 5(a): Programa em Java - Classe Animal.
package animal;
public abstract class Animal {
    public abstract void falar();
}
        </code></pre>
      </div>
      
      <div style="width: 45%; padding-left: 10px;">
        <pre><code>
Figura 5(b): Programa em Java - Classe Cachorro.
package animal;
public class Cachorro extends Animal {
    @Override
    public void falar(){
        System.out.println("Au, Au, Au...");
    }
}
        </code></pre>
      </div>
    </div>

    <div style="display: flex; gap: 20px; border: 1px solid #ddd; padding: 10px; margin-top: 10px;">
      <div style="width: 45%; border-right: 1px solid #ddd; padding-right: 10px;">
        <pre><code>
Figura 5(c): Programa em Java - Classe Gato.
package animal;
public class Gato extends Animal {
    @Override
    public void falar(){
        System.out.println("Miau, Miau, Miau...");
    }
}
        </code></pre>
      </div>
      
      <div style="width: 45%; padding-left: 10px;">
        <pre><code>
Figura 5(d): Programa em Java - Classe Principal.
package animal;
public class Principal {
    public static void main(String[] args){
        Animal[] arrayDeAnimais = new Animal[2];
        arrayDeAnimais[0] = new Cachorro();
        arrayDeAnimais[1] = new Gato();
        for (int i = 0; i <= 1; i++){
            arrayDeAnimais[i].falar();
        }
    }
}
        </code></pre>
      </div>
    </div>
    <br><br>
    Considerando apenas as classes das Figuras 5(a), 5(b) e 5(c), afirma-se que a classe:<br>`,

    "type": "radio",
    "options": [
      "Gato é a superclasse e o relacionamento dela com as demais classes é de composição.",
      "Animal é a superclasse e o relacionamento dela com as demais classes é de composição.",
      "Animal é a superclasse e o relacionamento dela com as demais classes é de herança.",
      "Cachorro é a superclasse e o relacionamento dela com as demais classes é de herança."
    ],

    "correctAnswer": 2,

    "justification": `A resposta correta é <strong>Animal é a superclasse e o relacionamento dela com as demais classes é de herança</strong>.<br>
    Explicação:
    - A classe <code>Animal</code> é abstrata e atua como uma superclasse para as classes <code>Cachorro</code> e <code>Gato</code>, o que configura uma relação de herança.
    - Esse relacionamento de herança permite que <code>Cachorro</code> e <code>Gato</code> herdem o método abstrato <code>falar()</code>, que é sobrescrito em cada uma das subclasses com uma implementação específica.<br>`,

    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html",
      "https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"
    ],

    "screenshots": [],
    "videos": []
  },
  {
    "question": `As figuras abaixo apresentam classes implementadas na linguagem de programação Java e fazem parte do mesmo programa. Nessas figuras os números à esquerda representam cada linha de código fonte. Eles são meramente ilustrativos e não fazem parte do programa Java.<br><br>
    
    <div style="display: flex; gap: 20px; border: 1px solid #ddd; padding: 10px;">
      <div style="width: 45%; border-right: 1px solid #ddd; padding-right: 10px;">
        <pre><code>
Figura 5(a): Programa em Java - Classe Animal.
package animal;
public abstract class Animal {
    public abstract void falar();
}
        </code></pre>
      </div>
      
      <div style="width: 45%; padding-left: 10px;">
        <pre><code>
Figura 5(b): Programa em Java - Classe Cachorro.
package animal;
public class Cachorro extends Animal {
    @Override
    public void falar(){
        System.out.println("Au, Au, Au...");
    }
}
        </code></pre>
      </div>
    </div>

    <div style="display: flex; gap: 20px; border: 1px solid #ddd; padding: 10px; margin-top: 10px;">
      <div style="width: 45%; border-right: 1px solid #ddd; padding-right: 10px;">
        <pre><code>
Figura 5(c): Programa em Java - Classe Gato.
package animal;
public class Gato extends Animal {
    @Override
    public void falar(){
        System.out.println("Miau, Miau, Miau...");
    }
}
        </code></pre>
      </div>
      
      <div style="width: 45%; padding-left: 10px;">
        <pre><code>
Figura 5(d): Programa em Java - Classe Principal.
package animal;
public class Principal {
    public static void main(String[] args){
        Animal[] arrayDeAnimais = new Animal[2];
        arrayDeAnimais[0] = new Cachorro();
        arrayDeAnimais[1] = new Gato();
        for (int i = 0; i <= 1; i++){
            arrayDeAnimais[i].falar();
        }
    }
}
        </code></pre>
      </div>
    </div>
    <br><br>
    Considerando todo o programa, ilustrado nas Figuras 5(a), 5(b), 5(c) e 5(d), ele representa um exemplo do conceito de:<br>`,

    "type": "radio",
    "options": [
      "agregação.",
      "polimorfismo.",
      "herança múltipla.",
      "abstração."
    ],

    "correctAnswer": 1,

    "justification": `A resposta correta é <strong>polimorfismo</strong>.<br>
    Explicação:
    - O programa exemplifica o conceito de polimorfismo, onde um array do tipo <code>Animal</code> armazena objetos de diferentes subclasses (<code>Cachorro</code> e <code>Gato</code>) e, ao chamar o método <code>falar()</code> em cada um, é executada a implementação específica da subclasse.
    - Este comportamento é característico do polimorfismo, pois o mesmo método <code>falar()</code> exibe diferentes resultados dependendo do tipo específico do objeto armazenado no array.<br>`,

    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html",
      "https://www.javatpoint.com/runtime-polymorphism-in-java"
    ],

    "screenshots": [],
    "videos": []
  },
  {
    "question": `Baseia-se na Figura 6, que apresenta um método implementado na linguagem de programação Java. Escrito para um programa que acessa uma base de dados, mais especificamente a tabela <code>tbContatos</code>. Nesta figura os números à esquerda representam cada linha de código fonte. Eles são meramente ilustrativos e não fazem parte do programa Java.<br><br>
    
    <div style="border: 1px solid #ddd; padding: 10px;">
      <pre><code>
Figura 6: Trecho de um programa Java - método consultar.
public Contato consultar(long id, Contato cto){
    String sql = "SELECT * FROM tbcontatos WHERE id = " + id;
    try (Statement stmt = this.connection.createStatement()) {
        try (ResultSet rset = stmt.executeQuery(sql)) {
            rset.next();
            cto.setId(rset.getLong("id"));
            cto.setNome(rset.getString("nome"));
            cto.setTelefone(rset.getString("telefone"));
            return cto;
        } catch (SQLException ex) {
            System.out.println("SQLException em consultar!!!" + " Erro detectado: " + ex.getMessage());
            return null;
        }
    } catch (SQLException ex) {
        System.out.println("SQLException em consultar!!!" + " Erro detectado: " + ex.getMessage());
        return null;
    }
}
      </code></pre>
    </div>
    <br><br>

    Tendo em vista o método ilustrado na Figura 6 e considerando que as classes utilizadas em seu desenvolvimento pertencem à biblioteca de códigos da linguagem Java 7, afirma-se que o objeto <code>stmt</code> pertence à classe:<br>`,

    "type": "radio",
    "options": [
      "ResultSet da biblioteca Java 7, e o objeto rset pertence à classe Statement desta mesma biblioteca.",
      "Connection da biblioteca Java 7, e o objeto rset pertence à classe Statement desta mesma biblioteca.",
      "Connection da biblioteca Java 7, e o objeto rset pertence à classe ResultSet desta mesma biblioteca.",
      "Statement da biblioteca Java 7, e o objeto rset pertence à classe ResultSet desta mesma biblioteca."
    ],

    "correctAnswer": 3,

    "justification": `A resposta correta é <strong>Statement da biblioteca Java 7, e o objeto rset pertence à classe ResultSet desta mesma biblioteca</strong>.<br>
    Explicação:
    - No código, o objeto <code>stmt</code> é criado com <code>this.connection.createStatement()</code>, o que indica que <code>stmt</code> pertence à classe <code>Statement</code>.
    - O objeto <code>rset</code> é obtido pelo método <code>executeQuery</code> de <code>stmt</code>, o que significa que ele pertence à classe <code>ResultSet</code>.
    - Essas classes fazem parte da biblioteca de acesso a dados em Java, com <code>Statement</code> sendo responsável por executar instruções SQL e <code>ResultSet</code> para armazenar o resultado das consultas.<br>`,

    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/sql/Statement.html",
      "https://docs.oracle.com/javase/7/docs/api/java/sql/ResultSet.html"
    ],

    "screenshots": [],
    "videos": []
  },
  {
    "question": `Observe o seguinte pseudo-código:<br><br>
    <pre><code>
    X[1] <- 10 
    X[2] <- X[1] + 20 * 2 
    X[3] <- 100 
    Y <- X[2] 
    SE X[1] = 10 ENTAO X[1] <- X[3] + X[1] + 50 
    Z <- Y + X[1] + X[2] 
    </code></pre>
    <br>
    Ao final da execução do código acima, qual é o valor da variável Z?`,
    "type": "radio",
    "options": [
      "260",
      "220",
      "230",
      "200"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>260</strong>.<br>
    Explicação:
    - Passo a passo da execução do código:
      - X[1] = 10
      - X[2] = X[1] + 20 * 2 = 10 + 40 = 50
      - X[3] = 100
      - Y = X[2] = 50
      - Condição: SE X[1] = 10 (verdadeiro), então:
        - X[1] <- X[3] + X[1] + 50 = 100 + 10 + 50 = 160
      - Z = Y + X[1] + X[2] = 50 + 160 + 50 = 260
    - Portanto, o valor de Z ao final é 260.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/pseudo-code-programming-basics/",
      "https://en.wikipedia.org/wiki/Pseudocode"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Nomes dos identificadores das variáveis devem ser diferentes dos comandos existentes em cada linguagem, conhecidos como palavras reservadas. Qual das palavras a seguir <strong>NÃO</strong> caracteriza uma palavra reservada na linguagem de programação JAVA?`,
    "type": "radio",
    "options": [
      "volatile",
      "virtual",
      "synchronized",
      "main"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>virtual</strong>.<br>
    Explicação:
    - Em Java:
      - <code>volatile</code> e <code>synchronized</code> são palavras reservadas usadas para controle de concorrência.
      - <code>main</code> não é uma palavra reservada, mas é um nome especial para o método principal.
      - <code>virtual</code> não é uma palavra reservada em Java (diferente de outras linguagens como C++ que usam <code>virtual</code> para polimorfismo).
    - Assim, <code>virtual</code> não é uma palavra reservada em Java.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html",
      "https://www.w3schools.com/java/ref_keyword_virtual.asp"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Com relação às estruturas de repetição, procedimentos, funções e métodos, observe o trecho de código abaixo e indique qual é a saída correta.<br><br>
    <pre><code>
    public class Q2 {
        static void imprimePrimeiro(int num) {
            System.out.print(num + " ");
        }

        static void imprimeDepois(int num1, int num2) {
            System.out.print(num1 * num2 + " ");
        }

        public static void main(String[] args) {
            int i, j, n = 4;
            for (i = 1; i <= n; i++) {
                imprimePrimeiro(i);
                for (j = 2; j <= i; j++)
                    imprimeDepois(j, i);
                System.out.println();
            }
        }
    }
    </code></pre><br>
    A saída correta é:<br>`,
    "type": "radio",
    "options": [
      "1 <br>&nbsp;&nbsp;&nbsp;2 2 <br>&nbsp;&nbsp;&nbsp;3 3 6 <br>&nbsp;&nbsp;&nbsp;4 4 8 12",
      "1 <br>&nbsp;&nbsp;&nbsp;2 4 <br>&nbsp;&nbsp;&nbsp;3 6 9 <br>&nbsp;&nbsp;&nbsp;4 8 12 16",
      "1 <br>&nbsp;&nbsp;&nbsp;2 1 <br>&nbsp;&nbsp;&nbsp;3 2 1 <br>&nbsp;&nbsp;&nbsp;4 3 2 1",
      "1 <br>&nbsp;&nbsp;&nbsp;2 4 <br>&nbsp;&nbsp;&nbsp;3 6 12 <br>&nbsp;&nbsp;&nbsp;4 8 16 32",
      "0 <br>&nbsp;&nbsp;&nbsp;1 2 <br>&nbsp;&nbsp;&nbsp;2 4 8 <br>&nbsp;&nbsp;&nbsp;3 6 12 24"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong><br> 1 <br> 2 4 <br> 3 6 9 <br> 4 8 12 16</strong>.<br>
    Explicação:
    - O método <code>imprimePrimeiro(int num)</code> imprime o valor de <code>num</code>.
    - O método <code>imprimeDepois(int num1, int num2)</code> imprime o produto de <code>num1</code> e <code>num2</code>.
    - No <code>main</code>, o loop <code>for</code> controla as linhas, e o loop interno imprime o produto.
    - Resultado em cada linha:
      - 1ª linha: 1
      - 2ª linha: 2 4
      - 3ª linha: 3 6 9
      - 4ª linha: 4 8 12 16<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html",
      "https://www.geeksforgeeks.org/java-methods/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Os algoritmos de busca e ordenação são bem conhecidos no contexto da computação. Embora muita coisa tenha evoluído na área, alguns algoritmos são clássicos. Nesse sentido, de acordo com o método <code>algoritmoX</code> abaixo, é possível afirmar que ele é um algoritmo de:<br><br>
    <pre><code>
    public class Q3 {
        int algoritmoX(int chave, int vetor[], int limInferior, int limSuperior) {
            int indice = (limInferior + limSuperior) / 2;
            if (vetor[indice] == chave)
                return indice;
            if (limInferior >= limSuperior)
                return -1;
            else
                if (vetor[indice] < chave)
                    return algoritmoX(chave, vetor, indice + 1, limSuperior);
                else
                    return algoritmoX(chave, vetor, limInferior, indice - 1);
        }

        public static void main(String[] args) {
            //...
        }
    }
    </code></pre><br>`,
    "type": "radio",
    "options": [
      "ordenção bubblesort",
      "busca sequencial ou linear",
      "busca binária",
      "ordenação quicksort",
      "ordenação heapsort"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>busca binária</strong>.<br>
    Explicação:
    - O algoritmo <code>algoritmoX</code> faz uma divisão recursiva do intervalo, verificando o elemento central <code>indice</code> para ver se ele corresponde à chave buscada. 
    - Se o valor na posição central não for a chave, o algoritmo continua a busca na metade relevante (superior ou inferior) do vetor, reduzindo o intervalo de busca pela metade a cada chamada.
    - Essa técnica é característica de uma <strong>busca binária</strong>, que é eficiente para encontrar um elemento em vetores ordenados.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/binary-search/",
      "https://docs.oracle.com/javase/tutorial/essential/concurrency/binarysearch.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código Java que ilustra um processo de ordenação:<br><br>
    <pre><code>
    public static void ordenarPorTroca(int[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
    </code></pre><br>
    Esse algoritmo é conhecido como:
    `,
    "type": "radio",
    "options": [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Quick Sort"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>Bubble Sort</strong>.<br>
    Explicação:
    - Este algoritmo compara elementos adjacentes e os troca se estiverem fora de ordem, "empurrando" o maior elemento para o final em cada iteração externa.
    - Esse processo é repetido até que a lista esteja ordenada, característica típica do algoritmo <strong>Bubble Sort</strong>.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/bubble-sort/",
      "https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código Java abaixo que representa um processo de ordenação:<br><br>
    <pre><code>
    public static void ordenarPorInsercao(int[] array) {
        for (int i = 1; i < array.length; i++) {
            int key = array[i];
            int j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = key;
        }
    }
    </code></pre><br>
    Esse algoritmo de ordenação é conhecido como:
    `,
    "type": "radio",
    "options": [
      "Insertion Sort",
      "Selection Sort",
      "Heap Sort",
      "Merge Sort"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Insertion Sort</strong>.<br>
    Explicação:
    - Este algoritmo percorre a lista e "insere" cada elemento na posição correta, movendo elementos maiores à direita.
    - O <strong>Insertion Sort</strong> é eficiente para listas pequenas e quase ordenadas e é caracterizado pela movimentação de elementos para o local correto na subsequência ordenada.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/insertion-sort/",
      "https://www.tutorialspoint.com/data_structures_algorithms/insertion_sort_algorithm.htm"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Observe o seguinte código Java para ordenação de uma lista:<br><br>
    <pre><code>
    public static void ordenarPorSelecao(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }
    </code></pre><br>
    Qual algoritmo de ordenação é esse?
    `,
    "type": "radio",
    "options": [
      "Selection Sort",
      "Merge Sort",
      "Heap Sort",
      "Quick Sort"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Selection Sort</strong>.<br>
    Explicação:
    - Este algoritmo busca o menor elemento em cada iteração e o troca para a posição correta, de modo que a lista seja construída em ordem crescente.
    - Esta técnica é característica do <strong>Selection Sort</strong>, que tem complexidade O(n²) e é menos eficiente para listas grandes.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/selection-sort/",
      "https://www.tutorialspoint.com/data_structures_algorithms/selection_sort_algorithm.htm"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código Java a seguir, que ilustra um processo de ordenação eficiente para grandes listas:<br><br>
    <pre><code>
    public static void ordenarRapidamente(int[] array, int low, int high) {
        if (low < high) {
            int pi = particionar(array, low, high);
            ordenarRapidamente(array, low, pi - 1);
            ordenarRapidamente(array, pi + 1, high);
        }
    }

    public static int particionar(int[] array, int low, int high) {
        int pivot = array[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (array[j] < pivot) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }
    </code></pre><br>
    Esse algoritmo é conhecido como:
    `,
    "type": "radio",
    "options": [
      "Merge Sort",
      "Quick Sort",
      "Bubble Sort",
      "Insertion Sort"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Quick Sort</strong>.<br>
    Explicação:
    - O <strong>Quick Sort</strong> é um algoritmo de ordenação eficiente que usa a técnica de "dividir e conquistar".
    - Ele escolhe um pivô e particiona a lista em elementos menores e maiores, ordenando cada parte recursivamente. O Quick Sort é conhecido por seu desempenho eficiente na média.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/quick-sort/",
      "https://www.tutorialspoint.com/data_structures_algorithms/quick_sort_algorithm.htm"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Qual a saída correta para o código apresentado a seguir?<br><br>
    <pre><code>
    import java.util.LinkedList;
    import java.util.Queue;

    public class Q4 {
        public static void main(String[] args) {
            Queue LSE = new LinkedList();
            LSE.add("Instituto Federal de Pernambuco");
            LSE.add("IFPE");
            LSE.add("Recife");
            imprimirLista(LSE);
        }

        public static void imprimirLista(Queue lista) {
            lista.add(new Integer(2016));
            while (!lista.isEmpty()) {
                System.out.println(lista.poll());
            }
        }
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "Instituto Federal de Pernambuco\nIFPE\nRecife\n2016",
      "Instituto Federal de Pernambuco\nIFPE\nRecife",
      "Erro de compilação: inteiro não deve ser adicionado.",
      "Erro de compilação: uma lista não deve ser instanciada caso não esteja no formato Queue<String>.",
      "Erro de execução: uma lista não deve ser instanciada da forma como está no código."
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Instituto Federal de Pernambuco, IFPE, Recife, 2016</strong>.<br>
    Explicação:
    - O código cria uma fila (Queue) e adiciona três Strings. Em seguida, no método <code>imprimirLista</code>, adiciona-se o valor inteiro <code>2016</code>.
    - A fila é então esvaziada e os elementos são impressos na ordem em que foram inseridos: as três Strings e o inteiro <code>2016</code>.
    - Apesar de <code>Queue</code> ser uma coleção genérica, o código compila e executa sem erros, já que não foi especificado um tipo genérico, permitindo a adição de qualquer tipo de objeto.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/Queue.html",
      "https://www.geeksforgeeks.org/queue-interface-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  // Exemplo 1: Set
  {
    "question": `Considere o código Java abaixo, que usa um <code>HashSet</code> para armazenar elementos:<br><br>
    <pre><code>
    import java.util.HashSet;
    import java.util.Set;

    public class SetExample {
        public static void main(String[] args) {
            Set<String> names = new HashSet<>();
            names.add("Alice");
            names.add("Bob");
            names.add("Alice");
            names.add("Charlie");
            printSet(names);
        }

        public static void printSet(Set<String> set) {
            for (String name : set) {
                System.out.println(name);
            }
        }
    }
    </code></pre><br>
    Qual será a saída deste programa?`,
    "type": "radio",
    "options": [
      "Alice\nBob\nAlice\nCharlie",
      "Alice\nBob\nCharlie",
      "Bob\nCharlie\nAlice\nAlice",
      "Erro de compilação: elementos duplicados não são permitidos em um Set."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Alice, Bob, Charlie</strong>.<br>
    Explicação:
    - O <code>HashSet</code> em Java não permite elementos duplicados. Quando "Alice" é adicionado pela segunda vez, ele é ignorado.
    - Como resultado, o conjunto contém apenas uma ocorrência de "Alice", junto com "Bob" e "Charlie".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html",
      "https://www.geeksforgeeks.org/hashset-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },

  // Exemplo 2: Map
  {
    "question": `Considere o código Java abaixo, que usa um <code>HashMap</code> para armazenar pares de chave-valor:<br><br>
    <pre><code>
    import java.util.HashMap;
    import java.util.Map;

    public class MapExample {
        public static void main(String[] args) {
            Map<String, Integer> scores = new HashMap<>();
            scores.put("Alice", 90);
            scores.put("Bob", 85);
            scores.put("Alice", 95);
            printMap(scores);
        }

        public static void printMap(Map<String, Integer> map) {
            for (String key : map.keySet()) {
                System.out.println(key + ": " + map.get(key));
            }
        }
    }
    </code></pre><br>
    Qual será a saída deste programa?`,
    "type": "radio",
    "options": [
      "Alice: 90\nBob: 85\nAlice: 95",
      "Alice: 90\nBob: 85",
      "Bob: 85\nAlice: 95",
      "Alice: 95\nBob: 85"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>Alice: 95, Bob: 85</strong>.<br>
    Explicação:
    - No <code>HashMap</code>, as chaves devem ser únicas. Quando "Alice" é adicionada pela segunda vez com o valor 95, o valor anterior (90) é sobrescrito.
    - Portanto, a saída exibe "Alice: 95" e "Bob: 85".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html",
      "https://www.geeksforgeeks.org/java-util-hashmap-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },

  // Exemplo 3: List
  {
    "question": `Considere o código Java abaixo, que usa um <code>ArrayList</code> para armazenar elementos:<br><br>
    <pre><code>
    import java.util.ArrayList;
    import java.util.List;

    public class ListExample {
        public static void main(String[] args) {
            List<String> fruits = new ArrayList<>();
            fruits.add("Apple");
            fruits.add("Banana");
            fruits.add(1, "Orange");
            fruits.add("Grapes");
            printList(fruits);
        }

        public static void printList(List<String> list) {
            for (String fruit : list) {
                System.out.println(fruit);
            }
        }
    }
    </code></pre><br>
    Qual será a saída deste programa?`,
    "type": "radio",
    "options": [
      "Apple\nBanana\nOrange\nGrapes",
      "Apple\nOrange\nBanana\nGrapes",
      "Banana\nApple\nOrange\nGrapes",
      "Apple\nGrapes\nBanana\nOrange"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Apple, Orange, Banana, Grapes</strong>.<br>
    Explicação:
    - O método <code>add(int index, E element)</code> permite inserir "Orange" na posição 1, deslocando os elementos à frente.
    - A sequência final será "Apple", "Orange", "Banana", "Grapes".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/ArrayList.html",
      "https://www.geeksforgeeks.org/arraylist-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },

  // Exemplo 4: Set com ordem específica
  {
    "question": `Considere o código Java abaixo, que usa um <code>LinkedHashSet</code> para armazenar elementos:<br><br>
    <pre><code>
    import java.util.LinkedHashSet;
    import java.util.Set;

    public class LinkedHashSetExample {
        public static void main(String[] args) {
            Set<String> items = new LinkedHashSet<>();
            items.add("Pen");
            items.add("Notebook");
            items.add("Pen");
            items.add("Pencil");
            items.add("Eraser");
            printSet(items);
        }

        public static void printSet(Set<String> set) {
            for (String item : set) {
                System.out.println(item);
            }
        }
    }
    </code></pre><br>
    Qual será a saída deste programa?`,
    "type": "radio",
    "options": [
      "Pen\nNotebook\nPen\nPencil\nEraser",
      "Pen\nNotebook\nPencil\nEraser",
      "Notebook\nPen\nPencil\nEraser",
      "Eraser\nPencil\nNotebook\nPen"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Pen, Notebook, Pencil, Eraser</strong>.<br>
    Explicação:
    - O <code>LinkedHashSet</code> mantém a ordem de inserção e não permite duplicatas. Como "Pen" é adicionado duas vezes, apenas a primeira ocorrência é mantida.
    - A ordem de saída será a mesma da ordem de inserção: "Pen", "Notebook", "Pencil", "Eraser".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/LinkedHashSet.html",
      "https://www.geeksforgeeks.org/linkedhashset-in-java-with-examples/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código que utiliza um <code>TreeSet</code> em Java:<br><br>
    <pre><code>
    import java.util.Set;
    import java.util.TreeSet;

    public class TreeSetExample {
        public static void main(String[] args) {
            Set<Integer> numbers = new TreeSet<>();
            numbers.add(5);
            numbers.add(1);
            numbers.add(3);
            numbers.add(2);
            numbers.add(4);
            printSet(numbers);
        }

        public static void printSet(Set<Integer> set) {
            for (Integer number : set) {
                System.out.print(number + " ");
            }
        }
    }
    </code></pre><br>
    Qual será a saída deste programa?`,
    "type": "radio",
    "options": [
      "5 1 3 2 4",
      "1 2 3 4 5",
      "4 3 2 1 5",
      "5 4 3 2 1"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>1 2 3 4 5</strong>.<br>
    Explicação:
    - O <code>TreeSet</code> mantém os elementos em ordem crescente.
    - Portanto, a saída será os elementos ordenados de forma crescente: 1 2 3 4 5.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/TreeSet.html",
      "https://www.geeksforgeeks.org/treeset-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Analise o código abaixo, que utiliza um <code>HashSet</code> e tente adicionar elementos nulos:<br><br>
    <pre><code>
    import java.util.HashSet;
    import java.util.Set;

    public class NullSetExample {
        public static void main(String[] args) {
            Set<String> items = new HashSet<>();
            items.add(null);
            items.add("Book");
            items.add(null);
            items.add("Pen");
            printSet(items);
        }

        public static void printSet(Set<String> set) {
            for (String item : set) {
                System.out.println(item);
            }
        }
    }
    </code></pre><br>
    Qual será a saída do programa?`,
    "type": "radio",
    "options": [
      "null\nBook\nnull\nPen",
      "null\nBook\nPen",
      "Book\nPen",
      "Erro de execução"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>null, Book, Pen</strong>.<br>
    Explicação:
    - O <code>HashSet</code> permite um único elemento <code>null</code>. Ao tentar adicionar mais de um, apenas a primeira ocorrência é mantida.
    - A saída será "null", "Book", e "Pen".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/HashSet.html",
      "https://www.geeksforgeeks.org/hashset-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código com um <code>LinkedHashSet</code>:<br><br>
    <pre><code>
    import java.util.LinkedHashSet;
    import java.util.Set;

    public class LinkedHashSetExample {
        public static void main(String[] args) {
            Set<Integer> set = new LinkedHashSet<>();
            set.add(3);
            set.add(1);
            set.add(4);
            set.add(1);
            set.add(2);
            printSet(set);
        }

        public static void printSet(Set<Integer> set) {
            for (Integer num : set) {
                System.out.print(num + " ");
            }
        }
    }
    </code></pre><br>
    Qual será a saída?`,
    "type": "radio",
    "options": [
      "3 1 4 2",
      "1 4 2",
      "3 1 4 1 2",
      "3 4 1 2"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>3 1 4 2</strong>.<br>
    Explicação:
    - <code>LinkedHashSet</code> mantém a ordem de inserção, mas não permite duplicatas.
    - Assim, a saída será "3 1 4 2", na ordem de inserção inicial.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/LinkedHashSet.html",
      "https://www.geeksforgeeks.org/linkedhashset-in-java-with-examples/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código abaixo que utiliza um <code>Set</code> para verificar o tamanho da coleção:<br><br>
    <pre><code>
    import java.util.HashSet;
    import java.util.Set;

    public class SetSizeExample {
        public static void main(String[] args) {
            Set<String> elements = new HashSet<>();
            elements.add("A");
            elements.add("B");
            elements.add("A");
            elements.add("C");
            System.out.println(elements.size());
        }
    }
    </code></pre><br>
    Qual será a saída?`,
    "type": "radio",
    "options": [
      "2",
      "3",
      "4",
      "Erro de execução"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>3</strong>.<br>
    Explicação:
    - Um <code>Set</code> não permite elementos duplicados. Como "A" é adicionado duas vezes, ele só é contado uma vez.
    - A coleção final terá 3 elementos: "A", "B", e "C".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/Set.html",
      "https://www.geeksforgeeks.org/set-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código que utiliza um <code>TreeMap</code> para armazenar pares chave-valor:<br><br>
    <pre><code>
    import java.util.Map;
    import java.util.TreeMap;

    public class TreeMapExample {
        public static void main(String[] args) {
            Map<String, Integer> map = new TreeMap<>();
            map.put("John", 30);
            map.put("Alice", 25);
            map.put("Bob", 27);
            map.put("Alice", 26);
            printMap(map);
        }

        public static void printMap(Map<String, Integer> map) {
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
    </code></pre><br>
    Qual será a saída deste programa?`,
    "type": "radio",
    "options": [
      "John: 30\nAlice: 25\nBob: 27\nAlice: 26",
      "Alice: 25\nBob: 27\nJohn: 30",
      "Alice: 26\nBob: 27\nJohn: 30",
      "John: 30\nBob: 27\nAlice: 26"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>Alice: 26, Bob: 27, John: 30</strong>.<br>
    Explicação:
    - O <code>TreeMap</code> armazena as chaves em ordem alfabética, e valores duplicados para a mesma chave substituem os anteriores.
    - Assim, "Alice" é atualizado para 26, e a ordem final é "Alice: 26", "Bob: 27", "John: 30".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/TreeMap.html",
      "https://www.geeksforgeeks.org/treemap-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código Java que utiliza um <code>HashMap</code> para armazenar pares chave-valor:<br><br>
    <pre><code>
    import java.util.HashMap;
    import java.util.Map;

    public class HashMapExample {
        public static void main(String[] args) {
            Map<String, Integer> map = new HashMap<>();
            map.put("Apple", 1);
            map.put("Banana", 2);
            map.put("Apple", 3);
            map.put("Orange", 4);
            printMap(map);
        }

        public static void printMap(Map<String, Integer> map) {
            for (Map.Entry<String, Integer> entry : map.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
    </code></pre><br>
    Qual será a saída do programa?`,
    "type": "radio",
    "options": [
      "Apple: 1\nBanana: 2\nApple: 3\nOrange: 4",
      "Apple: 3\nBanana: 2\nOrange: 4",
      "Apple: 1\nBanana: 2\nOrange: 4",
      "Banana: 2\nOrange: 4\nApple: 1"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Apple: 3, Banana: 2, Orange: 4</strong>.<br>
    Explicação:
    - O <code>HashMap</code> permite substituições de valores para chaves duplicadas. Ao adicionar "Apple" duas vezes, o valor é atualizado para o último valor inserido (3).
    - Assim, a saída será "Apple: 3", "Banana: 2", e "Orange: 4".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html",
      "https://www.geeksforgeeks.org/hashmap-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código que usa um <code>LinkedHashMap</code> em Java para armazenar pares chave-valor:<br><br>
    <pre><code>
    import java.util.LinkedHashMap;
    import java.util.Map;

    public class LinkedHashMapExample {
        public static void main(String[] args) {
            Map<String, String> map = new LinkedHashMap<>();
            map.put("C", "Cat");
            map.put("A", "Apple");
            map.put("B", "Banana");
            map.put("A", "Ant");
            printMap(map);
        }

        public static void printMap(Map<String, String> map) {
            for (Map.Entry<String, String> entry : map.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
    </code></pre><br>
    Qual será a saída do programa?`,
    "type": "radio",
    "options": [
      "C: Cat\nA: Apple\nB: Banana\nA: Ant",
      "C: Cat\nB: Banana\nA: Ant",
      "A: Apple\nB: Banana\nC: Cat",
      "C: Cat\nA: Ant\nB: Banana"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>C: Cat, A: Ant, B: Banana</strong>.<br>
    Explicação:
    - O <code>LinkedHashMap</code> preserva a ordem de inserção das chaves.
    - Ao adicionar "A" duas vezes, o valor é atualizado para "Ant".
    - A ordem final será "C: Cat", "A: Ant", e "B: Banana".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/LinkedHashMap.html",
      "https://www.geeksforgeeks.org/linkedhashmap-in-java-with-examples/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código que utiliza um <code>Hashtable</code> para armazenar pares chave-valor:<br><br>
    <pre><code>
    import java.util.Hashtable;
    import java.util.Map;

    public class HashtableExample {
        public static void main(String[] args) {
            Map<String, Integer> table = new Hashtable<>();
            table.put("Red", 1);
            table.put("Green", 2);
            table.put("Blue", 3);
            table.put("Yellow", null);
            printTable(table);
        }

        public static void printTable(Map<String, Integer> table) {
            for (Map.Entry<String, Integer> entry : table.entrySet()) {
                System.out.println(entry.getKey() + ": " + entry.getValue());
            }
        }
    }
    </code></pre><br>
    Qual será o resultado da execução deste código?`,
    "type": "radio",
    "options": [
      "Red: 1\nGreen: 2\nBlue: 3\nYellow: null",
      "Red: 1\nGreen: 2\nBlue: 3",
      "Erro de compilação",
      "Erro de execução"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>Erro de execução</strong>.<br>
    Explicação:
    - O <code>Hashtable</code> não permite valores <code>null</code>.
    - Ao tentar adicionar uma chave com valor <code>null</code>, o programa lançará uma <code>NullPointerException</code> em tempo de execução.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/Hashtable.html",
      "https://www.geeksforgeeks.org/hashtable-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `De acordo com os conceitos de Orientação a Objetos, o trecho de código abaixo é um exemplo clássico de:<br><br>
    <pre><code>
    public class Pessoa {
        private String nome;
        private String cpf;
        //...
        public Pessoa(String nome, String cpf){
            this.setNome(nome);
            this.setCpf(cpf);
        }
        //...
    }

    public class Professor extends Pessoa {
        private String codFuncional;
        //...
        public Professor(String nome, String cpf, String codFuncional) {
            super(nome, cpf);
            this.setCodFuncional(codFuncional);
        }
        //...
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "herança",
      "encapsulamento",
      "polimorfismo",
      "enumeração",
      "reescrita de classes"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>herança</strong>.<br>
    Explicação:
    - O código demonstra o conceito de herança em Orientação a Objetos, onde a classe <code>Professor</code> estende a classe <code>Pessoa</code>, herdando suas propriedades e métodos.
    - A palavra-chave <code>extends</code> indica que <code>Professor</code> é uma subclasse de <code>Pessoa</code>, aproveitando os atributos e métodos da superclasse.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html",
      "https://www.geeksforgeeks.org/inheritance-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Qual dos itens a seguir <strong>NÃO</strong> faz parte do escopo dos conceitos de Orientação a Objetos?`,
    "type": "radio",
    "options": [
      "Polimorfismo",
      "Herança",
      "Encapsulamento",
      "Multitarefa",
      "Overriding e overloading"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>Multitarefa</strong>.<br>
    Explicação:
    - Os conceitos principais de Orientação a Objetos incluem Polimorfismo, Herança, Encapsulamento, e Overriding/Overloading, que estão relacionados à criação e manipulação de objetos.
    - <strong>Multitarefa</strong>, por outro lado, está relacionado à capacidade de execução simultânea de tarefas, um conceito de programação concorrente, não diretamente ligado aos princípios de Orientação a Objetos.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/object-oriented-programming-oop-concepts/",
      "https://www.tutorialspoint.com/java/java_object_classes.htm"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Quando um objeto JavaScript é enviado para Java, o mecanismo de tempo de execução cria um wrapper Java do tipo:`,
    "type": "radio",
    "options": [
      "ScriptObject",
      "JSObject",
      "JavaObject",
      "Jobject",
      "JavaScriptObject"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>JSObject</strong>.<br>
    Explicação:
    - Ao passar um objeto JavaScript para Java, um wrapper de tipo <strong>JSObject</strong> é criado para permitir a interoperabilidade entre os dois ambientes.
    - <code>JSObject</code> é específico para interação entre JavaScript e Java, facilitando o uso de objetos JavaScript dentro do código Java.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/8/docs/technotes/guides/plugin/developer_guide/java_js.html",
      "https://www.geeksforgeeks.org/jsobject-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código a seguir e escolha a alternativa correta:<br><br>
    <pre><code>
    class Classe {
        static int metodo() throws Exception { return 42; }

        public static void main(String[] args) {
            try {
                int x = metodo();
            } catch (Exception e) {
                x++;
            } finally {
                System.out.println("x = " + ++x);
            }
        }
    }
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "O código imprime: x = 42.",
      "Ocorre um erro de compilação.",
      "O código imprime: x = 43.",
      "O código imprime: x = 44.",
      "O código roda sem qualquer saída."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Ocorre um erro de compilação.</strong><br>
    Explicação:
    - No código, a variável <code>x</code> é declarada dentro do bloco <code>try</code>. No entanto, o bloco <code>finally</code> tenta acessar <code>x</code> fora do escopo em que foi declarada, causando um erro de compilação.
    - Para que o código funcione corretamente, <code>x</code> precisaria ser declarado antes do bloco <code>try</code>, de modo que estivesse acessível tanto no bloco <code>try</code> quanto no <code>finally</code>.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/finally-block-in-java/",
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/finally.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considerando o código abaixo, qual o resultado da execução da classe Tarefa?<br><br>
    <pre><code>
    class A {
        public void doA() {
            B b = new B();
            b.doB();
            System.out.print("doA");
        }
    }

    class B {
        public void doB() {
            C c = new C();
            c.doC();
            System.out.print("doB");
        }
    }

    class C {
        public void doC() {
            if (true)
                throw new NullPointerException();
            System.out.print("doC");
        }
    }

    public class Tarefa {
        public static void main(String[] args) {
            try {
                A a = new A();
                a.doA();
            } catch (Exception ex) {
                System.out.println("error");
            }
        }
    }
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "“doBdoAerror” é mostrado na tela.",
      "O código executa e não aparece nada na tela.",
      "“doCdoBdoA” é mostrado na tela.",
      "“doAdoBdoC” é mostrado na tela.",
      "A mensagem 'error' é impressa na tela."
    ],
    "correctAnswer": 4,
    "justification": `A resposta correta é <strong>A mensagem "error" é impressa na tela.</strong><br>
    Explicação:
    - A execução começa chamando <code>a.doA()</code> em <code>main</code>, que cria um objeto de <code>B</code> e chama <code>b.doB()</code>.
    - Em <code>doB()</code>, um objeto de <code>C</code> é criado, e <code>c.doC()</code> é chamado.
    - Dentro de <code>doC()</code>, uma <code>NullPointerException</code> é lançada imediatamente, o que impede que qualquer saída adicional ocorra antes do tratamento da exceção.
    - Como a exceção é capturada no bloco <code>catch</code> do <code>main</code>, a única saída resultante é "error".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/",
      "https://www.geeksforgeeks.org/exceptions-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Dado o código abaixo, qual o resultado de sua execução?<br><br>
    <pre><code>
    import java.util.*;

    public class Colecoes {
        public static void main(String args[]) {
            Queue<String> q = new PriorityQueue<String>();
            q.add("3");
            q.add("1");
            q.add("2");
            System.out.print(q.poll() + " ");
            System.out.print(q.peek() + " ");
            System.out.print(q.peek());
        }
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "3 1 1",
      "1 2 3",
      "3 2 1",
      "1 2 2",
      "1 1 2"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>1 2 2</strong>.<br>
    Explicação:
    - <code>PriorityQueue</code> ordena os elementos em ordem natural (crescente para números).
    - Após adicionar "3", "1" e "2", o primeiro elemento removido é "1" (o menor).
    - <code>peek()</code> retorna o próximo elemento sem removê-lo, que ainda é "2", então a saída é "1 2 2".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html",
      "https://www.geeksforgeeks.org/priority-queue-class-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código em Java usando PriorityQueue:<br><br>
    <pre><code>
    import java.util.*;

    public class Colecoes {
        public static void main(String args[]) {
            Queue<Integer> q = new PriorityQueue<Integer>();
            q.add(10);
            q.add(5);
            q.add(15);
            System.out.print(q.poll() + " ");
            System.out.print(q.poll() + " ");
            System.out.print(q.poll());
        }
    }
    </code></pre><br>
    Qual será a saída do código acima?
    `,
    "type": "radio",
    "options": [
      "10 5 15",
      "5 10 15",
      "15 10 5",
      "15 5 10",
      "5 15 10"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>5 10 15</strong>.<br>
    Explicação:
    - A <code>PriorityQueue</code> organiza os elementos em ordem crescente.
    - Os elementos são removidos em ordem de prioridade: "5", depois "10", e por último "15".<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html",
      "https://www.geeksforgeeks.org/priority-queue-class-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Observe o código abaixo e indique o resultado esperado:<br><br>
    <pre><code>
    import java.util.*;

    public class Colecoes {
        public static void main(String args[]) {
            Queue<String> q = new PriorityQueue<String>();
            q.add("apple");
            q.add("banana");
            q.add("cherry");
            System.out.print(q.poll() + " ");
            System.out.print(q.peek() + " ");
            System.out.print(q.poll());
        }
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "apple banana banana",
      "banana cherry cherry",
      "apple cherry cherry",
      "cherry banana banana",
      "banana apple apple"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>apple banana banana</strong>.<br>
    Explicação:
    - <code>PriorityQueue</code> usa ordem lexicográfica (alfabética) para strings.
    - Após a primeira remoção, "apple" é removido, deixando "banana" como o próximo elemento.
    - <code>peek()</code> retorna "banana" sem removê-lo, então a sequência é "apple banana banana".<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/priority-queue-class-in-java/",
      "https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o código abaixo que usa uma fila de prioridade com números decimais:<br><br>
    <pre><code>
    import java.util.*;

    public class Colecoes {
        public static void main(String args[]) {
            Queue<Double> q = new PriorityQueue<Double>();
            q.add(5.5);
            q.add(2.2);
            q.add(8.8);
            System.out.print(q.poll() + " ");
            System.out.print(q.poll() + " ");
            System.out.print(q.poll());
        }
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "5.5 2.2 8.8",
      "8.8 5.5 2.2",
      "2.2 5.5 8.8",
      "2.2 8.8 5.5",
      "5.5 8.8 2.2"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>2.2 5.5 8.8</strong>.<br>
    Explicação:
    - <code>PriorityQueue</code> ordena os elementos decimais em ordem crescente.
    - Portanto, os valores são removidos na ordem "2.2", "5.5" e "8.8".<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/priority-queue-class-in-java/",
      "https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Veja o código a seguir que usa PriorityQueue com valores alfanuméricos:<br><br>
    <pre><code>
    import java.util.*;

    public class Colecoes {
        public static void main(String args[]) {
            Queue<String> q = new PriorityQueue<String>();
            q.add("A1");
            q.add("B2");
            q.add("A3");
            System.out.print(q.poll() + " ");
            System.out.print(q.peek() + " ");
            System.out.print(q.poll());
        }
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "A1 A3 A3",
      "A3 B2 B2",
      "B2 A1 A3",
      "A1 B2 B2",
      "B2 B2 A1"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>A1 A3 A3</strong>.<br>
    Explicação:
    - Em uma PriorityQueue de strings, a ordem lexicográfica (alfabética) é usada.
    - "A1" é o menor e é removido primeiro. "A3" é o próximo na ordem, então a saída é "A1 A3 A3".<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/priority-queue-class-in-java/",
      "https://docs.oracle.com/javase/7/docs/api/java/util/PriorityQueue.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Uma das atividades mais executadas em programas de computador é a ordenação. Na literatura, existem várias abordagens para se implementar algoritmos de ordenação. Assinale a alternativa que apresenta a estratégia de ordenação implementada no algoritmo abaixo:<br><br>
    <pre><code>
    public class Ordenacao {
        private int[] numbers;
        private int[] helper;
        private int number;

        public void ordenar(int[] values) {
            this.numbers = values;
            number = values.length;
            this.helper = new int[number];
            metodo1(0, number - 1);
        }

        private void metodo1(int low, int high) {
            if (low < high) {
                int middle = low + (high - low) / 2;
                metodo1(low, middle);
                metodo1(middle + 1, high);
                metodo2(low, middle, high);
            }
        }

        private void metodo2(int low, int middle, int high) {
            for (int i = low; i <= high; i++) {
                helper[i] = numbers[i];
            }

            int i = low;
            int j = middle + 1;
            int k = low;

            while (i <= middle && j <= high) {
                if (helper[i] <= helper[j]) {
                    numbers[k] = helper[i];
                    i++;
                } else {
                    numbers[k] = helper[j];
                    j++;
                }
                k++;
            }

            while (i <= middle) {
                numbers[k] = helper[i];
                k++;
                i++;
            }
        }
    }
    </code></pre>
    Esse algoritmo utiliza qual estratégia de ordenação?`,
    "type": "radio",
    "options": [
      "Bubble Sort",
      "Quick Sort",
      "Bucket Sort",
      "Radix Sort",
      "Merge Sort"
    ],
    "correctAnswer": 4,
    "justification": `A resposta correta é <strong>Merge Sort</strong>.<br>
    Explicação:
    - O algoritmo utiliza a técnica de divisão e conquista, onde o array é dividido em partes menores até que cada parte contenha apenas um elemento.
    - O método <code>metodo1</code> é responsável por dividir o array recursivamente em duas partes.
    - O método <code>metodo2</code> realiza a fusão (merge) dos subarrays ordenados, comparando elementos e mantendo a ordem.
    - Esta abordagem é característica do <strong>Merge Sort</strong>, que é um algoritmo de ordenação estável e eficiente para grandes listas.<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/merge-sort/",
      "https://www.programiz.com/java-programming/examples/merge-sort"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Os membros de uma superclasse definidos com o modificador <code>protected</code> da linguagem Java podem ser acessados por:<br>`,
    "type": "radio",
    "options": [
      "membros dessa superclasse e somente por membros definidos como estáticos na subclasse.",
      "membros dessa superclasse e por membros da subclasse.",
      "membros dessa superclasse, membros da subclasse e membros de outras classes no mesmo pacote.",
      "membros dessa superclasse."
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>membros dessa superclasse, membros da subclasse e membros de outras classes no mesmo pacote</strong>.<br>
    Explicação:
    - Em Java, o modificador <code>protected</code> permite que os membros sejam acessíveis por:
      - Qualquer classe no mesmo pacote.
      - Qualquer subclasse, independentemente de estar no mesmo pacote ou em outro.
    - Isso permite acesso mais amplo do que o modificador <code>private</code>, mas mais restrito que <code>public</code>.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html",
      "https://www.geeksforgeeks.org/access-modifiers-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Na linguagem Java, a palavra-chave que deve ser usada para especificar que uma variável não pode ser modificada é:<br>`,
    "type": "radio",
    "options": [
      "static",
      "final",
      "const",
      "constant"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>final</strong>.<br>
    Explicação:
    - Em Java, o modificador <code>final</code> é usado para indicar que uma variável é constante e não pode ser modificada após sua atribuição inicial.
    - Java não possui uma palavra-chave <code>const</code> ou <code>constant</code> como outras linguagens.
    - <code>static</code> define que uma variável pertence à classe, mas não impede sua modificação.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html",
      "https://www.geeksforgeeks.org/final-keyword-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Na hierarquia de exceções em Java, é correto afirmar que:<br>`,
    "type": "radio",
    "options": [
      "a classe RuntimeException é uma subclasse da classe Exception.",
      "a classe Error herda da classe Exception.",
      "as classes NullPointerException e IndexOutOfBoundsException não são válidas no tratamento de exceção em Java.",
      "a classe Exception é uma subclasse da classe IOException."
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>a classe RuntimeException é uma subclasse da classe Exception</strong>.<br>
    Explicação:
    - Na hierarquia de exceções em Java:
      - <code>RuntimeException</code> é uma subclasse de <code>Exception</code> que representa exceções não verificadas (unchecked exceptions).
      - A classe <code>Error</code> não herda de <code>Exception</code>, pois representa erros de sistema que não devem ser tratados.
      - <code>Exception</code> é uma superclasse de exceções verificadas e não verificadas, mas não herda de <code>IOException</code>.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/essential/exceptions/hierarchy.html",
      "https://www.geeksforgeeks.org/exceptions-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o algoritmo a seguir, escrito em linguagem de programação JAVA:<br><br>
    <pre><code>
    1. public class questao {
    2.     public static void main(String[] args) {
    3.         String texto = "CONCURSO IFSUL 2023";
    4.         funcao1(texto);
    5.         funcao2(texto);
    6.         funcao3(9, 14, texto);
    7.         funcao4("IFSul", "Concurso", texto);
    8.         funcao1(texto);
    9.         System.out.println(texto);
    10.    }
    11.    public static String funcao1(String txt) {
    12.        return txt.toUpperCase();
    13.    }
    14.    public static String funcao2(String txt) {
    15.        return txt.toLowerCase();
    16.    }
    17.    public static void funcao3(int x, int y, String txt) {
    18.        txt.substring(x, y);
    19.    }
    20.    public static String funcao4(String a, String b, String txt) {
    21.        return txt.replaceAll(a, b);
    22.    }
    23. }
    </code></pre><br>
    Após a execução do algoritmo, será impresso
    `,
    "type": "radio",
    "options": [
      "CONCURSO CONCURSO 2023",
      "IFSUL",
      "CONCURSO",
      "CONCURSO IFSUL 2023"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>CONCURSO IFSUL 2023</strong>.<br>
    Explicação:
    - Embora as funções <code>funcao1</code>, <code>funcao2</code>, <code>funcao3</code>, e <code>funcao4</code> sejam chamadas, elas não modificam a variável <code>texto</code> porque nenhuma das funções retorna um valor que é armazenado na variável original.
    - O valor de <code>texto</code> permanece inalterado durante a execução do <code>main</code>, então a impressão final é o valor inicial de <code>texto</code>: <code>"CONCURSO IFSUL 2023"</code>.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html",
      "https://www.geeksforgeeks.org/strings-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte código em Java e indique o resultado esperado da execução:<br><br>
    <pre><code>
    public class Cagepa {
        public static void main(String[] args) {
            Cagepa ip = new Cagepa();
            System.out.println("Resultado=" + ip.Cagepa(5));
        }

        private int Cagepa(int x) {
            if(x == 0)
                return 0;
            if(x % 2 != 0)
                return x + Cagepa(x - 1) + 4;
            return Cagepa(x - 1);
        }
    }
    </code></pre><br>
    Qual será o resultado da execução do código acima?`,
    "type": "radio",
    "options": [
      "Resultado=12",
      "Resultado=21",
      "Resultado=4",
      "Resultado=9",
      "Resultado=14"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Resultado=21</strong>.<br>
    Explicação:
    - Este código usa um método recursivo para calcular um valor baseado na entrada. Vamos analisar a execução:
      - <code>Cagepa(5)</code> é chamado e, como 5 é ímpar, retorna <code>5 + Cagepa(4) + 4</code>.
      - <code>Cagepa(4)</code> chama <code>Cagepa(3)</code> (pois é par e só avança a recursão).
      - <code>Cagepa(3)</code> retorna <code>3 + Cagepa(2) + 4</code>.
      - Este padrão se repete até chegar a <code>Cagepa(0)</code>, que retorna 0.
      - Substituindo tudo, obtemos que o valor final é 21.<br>`,
    "referenceLinks": [
      "https://www.baeldung.com/java-recursion",
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o trecho de código Java a seguir e assinale a alternativa que indica a saída do console quando o código for executado:<br><br>
    <pre><code>
    class A {
        void metodo() {
            System.out.print("a");
        }
    }

    class B extends A {
        void metodo() {
            System.out.print("b");
        }
    }

    class C extends A {
        void metodo() {
            System.out.print("c");
        }
    }

    public class Main {
        public static void main(String[] args) {
            A a;

            a = new B();
            a.metodo();

            a = new C();
            a.metodo();
        }
    }
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "aa",
      "bc",
      "abac",
      "baca",
      "cb"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>bc</strong>.<br>
    Explicação:
    - No código, a variável <code>a</code> é declarada como do tipo <code>A</code>, mas é atribuída instâncias de <code>B</code> e <code>C</code> em sequência.
    - Quando <code>a = new B()</code> é executado, <code>a.metodo()</code> chama o método <code>metodo()</code> da classe <code>B</code>, que imprime "b".
    - Em seguida, <code>a = new C()</code> é executado, e <code>a.metodo()</code> chama o método <code>metodo()</code> da classe <code>C</code>, que imprime "c".
    - Assim, a saída do console será "bc".<br>`,
    "referenceLinks": [
      "https://www.geeksforgeeks.org/method-overriding-in-java/",
      "https://docs.oracle.com/javase/tutorial/java/IandI/override.html"
    ],
    "screenshots": [],
    "videos": []
  },
	{
	  "question": `Considere o código em Java a seguir:<br><br>
		<pre><code>
		public class Main {
		
			static int f(int a, int b, int c) {
				if (c < 5) return (b - a);
				else return (2 * b - a);
			}

			public static void main(String[] args) {
				int k = 8, p = 14;
				int m = f(k, p, 3);
				int n = f(k, p, m);
				System.out.println(m + n);
			}
		}
		</code></pre><br>
		Qual é a saída desse código?
		`,
	  "type": "radio",
	  "options": [
		"19",
		"25",
		"21",
		"18",
		"26"
	  ],
	  "correctAnswer": 4,
	  "justification": `A resposta correta é <strong>e) 26</strong>.<br>
		Explicação:
		- Primeiro, a função <code>f(k, p, 3)</code> é chamada com <code>a = 8</code>, <code>b = 14</code>, e <code>c = 3</code>.
		  - Como <code>c < 5</code>, o retorno é <code>(b - a)</code>, ou seja, <code>14 - 8 = 6</code>.
		  - Portanto, <code>m = 6</code>.
		- Em seguida, a função <code>f(k, p, m)</code> é chamada com <code>m = 6</code>, então <code>c = 6</code>.
		  - Como <code>c >= 5</code>, o retorno é <code>(2 * b - a)</code>, ou seja, <code>2 * 14 - 8 = 28 - 8 = 20</code>.
		  - Assim, <code>n = 20</code>.
		- A soma <code>m + n</code> resulta em <code>6 + 20 = 26</code>.<br>`,
	  "referenceLinks": [
		"https://www.w3schools.com/java/",
		"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html"
	  ],
    "screenshots": [],
    "videos": []
	},
  {
    "question": `Na linguagem Java, membros de classes (métodos e atributos) são declarados na definição de classes. Os membros podem estar presentes em cada instância ou apenas na classe, e, neste caso, são usados por todas as instâncias. Para que um membro de classe exista apenas na classe e seja usado por todas as instâncias, deve-se usar o modificador`,
    "type": "radio",
    "options": [
      "abstract",
      "final",
      "volatile",
      "static"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>static</strong>.<br>
    Explicação:
    - Em Java, o modificador <code>static</code> é usado para declarar que um membro (atributo ou método) pertence à classe e não a instâncias individuais. Isso significa que o membro <code>static</code> é compartilhado por todas as instâncias da classe e existe apenas uma cópia do mesmo.
    - O modificador <code>abstract</code> é usado para classes ou métodos que não possuem implementação completa e devem ser implementados por subclasses.
    - O modificador <code>final</code> é usado para impedir que uma variável seja alterada após sua atribuição inicial, ou que uma classe seja estendida, ou que um método seja sobrescrito.
    - O modificador <code>volatile</code> é utilizado em variáveis para garantir a visibilidade das mudanças feitas em um thread para outros threads.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/javaOO/classvars.html",
      "https://www.geeksforgeeks.org/static-keyword-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte programa em Java:<br><br>
    <pre><code>
    class ClassePai {
        public void mostrar() {
            System.out.print("pai ");
        }
    }

    class ClasseFilha extends ClassePai {
        public void mostrar() {
            System.out.print("filha ");
        }
    }

    public class Teste {
        public static void main(String[] args) {
            ClassePai p1 = new ClassePai();
            ClassePai p2 = new ClasseFilha();

            p1.mostrar();
            p2.mostrar();
            ((ClasseFilha)p2).mostrar();
            ((ClasseFilha)p1).mostrar();
        }
    }
    </code></pre><br>
    Assinale a alternativa que descreve sua saída.`,
    "type": "radio",
    "options": [
      "pai pai filha filha",
      "pai filha filha pai",
      "pai filha filha filha",
      "Ocorre erro em tempo de execução",
      "Programa não compila"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>Ocorre erro em tempo de execução</strong>.<br>
    Explicação:
    - O programa tenta fazer um cast para <code>ClasseFilha</code> com o objeto <code>p1</code>, que é uma instância de <code>ClassePai</code> (e não de <code>ClasseFilha</code>).
    - Embora o cast <code>((ClasseFilha)p2)</code> funcione, pois <code>p2</code> é uma instância de <code>ClasseFilha</code>, o cast <code>((ClasseFilha)p1)</code> causa um erro <code>ClassCastException</code> em tempo de execução.
    - O programa compila sem erros, mas ao tentar executar o cast inválido, ocorre o erro.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html",
      "https://www.geeksforgeeks.org/type-casting-in-java/"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `O código Java a seguir mostra uma classe chamada Metodos, que aciona, em sua função Main, quatro outros métodos, imprimindo na tela o resultado de cada um deles.<br><br>
    <pre><code>
    public class Metodos {
        public static void main(String[] args) {
            System.out.print(somar(2, 3) + "|");
            System.out.print(pares(6) + "|");
            System.out.print(diaPorExtenso(3) + "|");
            System.out.print(contaLetrasA("Banana"));
        }

        public static double somar(double a, double b) {
            return a + b;
        }

        public static String pares(int valor) {
            String retorno = "";
            for (int a=0; a<=valor; a+=2) {
                retorno += a + " ";
            }
            return retorno;
        }

        public static String diaPorExtenso(int dia) {
            String extenso = "Domingo";
            switch (dia) {
                case 2: extenso = "Segunda"; break;
                case 3: extenso = "Terça"; break;
                case 4: extenso = "Quarta"; break;
                case 5: extenso = "Quinta"; break;
                case 6: extenso = "Sexta"; break;
                case 7: extenso = "Sábado"; break;
                default: extenso = "dia não reconhecido";
            }
            return extenso;
        }

        public static int contaLetrasA(String palavra) {
            int quantidade = 0;
            palavra = palavra.toUpperCase();
            for (int a=0; a&ltpalavra.length(); a++) {
                if (palavra.charAt(a) == 'A')
                    quantidade++;
            }
            return quantidade;
        }
    }
    </code></pre><br>
    Ao executar o programa, qual o resultado apresentado na tela?
    `,
    "type": "radio",
    "options": [
      "5|0 2 4 6 |Terça|3",
      "5.0|0 2 4 6 |Dia da semana de hoje|3",
      "5.0|0 2 4 6 |Terça|0",
      "5.0|2 4 6 |Terça|3",
      "5.0|0 2 4 6 |Terça|3"
    ],
    "correctAnswer": 4,
    "justification": `A resposta correta é <strong>5.0|0 2 4 6 |Terça|3</strong>.<br>
    Explicação:
    - <code>somar(2, 3)</code>: Retorna 5.0, pois o método <code>somar</code> usa <code>double</code> como tipo de retorno.
    - <code>pares(6)</code>: Retorna a sequência de números pares de 0 até 6, resultando em "0 2 4 6 ".
    - <code>diaPorExtenso(3)</code>: Retorna "Terça", conforme a estrutura <code>switch</code>.
    - <code>contaLetrasA("Banana")</code>: Retorna 3, pois a palavra "Banana" possui três letras 'A'.<br>`,
    "referenceLinks": [
      "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html",
      "https://docs.oracle.com/javase/tutorial/java/data/strings.html"
    ],
    "screenshots": [],
    "videos": []
  }
];


var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
