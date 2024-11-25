var randomic = true; // Valor inicial da variável randomic

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
	  "question": `
	<div style="font-family: Arial, sans-serif; line-height: 1.6;">
		<h3>A linguagem de programação Web PHP é uma das mais utilizadas, em virtude da agilidade de desenvolvimento de sites. Com relação a essa linguagem, a partir de qual versão foi introduzido o tratamento de exceções (Try / catch)?</h3>
	</div>
	`,
	  "type": "radio",
	  "options": [
		"PHP 6",
		"PHP 4",
		"PHP 3",
		"PHP 5.3",
		"PHP 5"
	  ],
	  "correctAnswer": 4,
	  "justification": `
	<div>
		<p>A versão correta é: <strong>PHP 5</strong></p>
		<p>Justificativa:</p>
		<ul>
			<li>O tratamento de exceções com <code>try</code> e <code>catch</code> foi introduzido a partir do PHP 5, tornando possível a manipulação de erros de forma estruturada.</li>
		</ul>
	</div>
	`,
	  "referenceLinks": [
		"https://www.php.net/manual/en/language.exceptions.php",
		"https://www.geeksforgeeks.org/exception-handling-in-php/",
		"https://www.tutorialspoint.com/php/php_error_handling.htm"
	  ],
	  "screenshots": [],
	  "videos": []
	},
	{
	  "question": `
	<div style="font-family: Arial, sans-serif; line-height: 1.6;">
		<h3>Considere o código a seguir:</h3>
		<pre>
	&lt;?php
	$x = 3 - 5 % 3;
	print $x++;
	?&gt;
		</pre>
		<p>Qual o resultado da execução do código acima?</p>
	</div>
	`,
	  "type": "radio",
	  "options": [
		"Null",
		"2",
		"1",
		"3",
		"True"
	  ],
	  "correctAnswer": 2,
	  "justification": `
	<div>
		<p>O resultado correto é: <strong>1</strong></p>
		<p>Justificativa:</p>
		<ul>
			<li>A expressão <code>5 % 3</code> retorna <code>2</code>, pois <code>5</code> dividido por <code>3</code> deixa um resto de <code>2</code>.</li>
			<li>Portanto, <code>$x = 3 - 2</code> resulta em <code>1</code>.</li>
			<li>O operador <code>$x++</code> imprime o valor atual de <code>$x</code> (que é <code>1</code>) e, em seguida, incrementa <code>$x</code> para <code>2</code>.</li>
		</ul>
	</div>
	`,
	  "referenceLinks": [
		"https://www.php.net/manual/en/language.operators.arithmetic.php",
		"https://www.w3schools.com/php/php_operators.asp"
	  ],
	  "screenshots": [],
	  "videos": []
	},
	{
	  "question": `
	<div style="font-family: Arial, sans-serif; line-height: 1.6;">
		<h3>Considere o código PHP incompleto abaixo:</h3>
		<pre>
	&lt;?php
	$mat_notas = ____________;
	$soma = 0;
	$contador_notas = 0;
	for ($i = 0; $i &lt; ___________; $i++) {
		for ($j = 0; $j &lt; __________; $j++) {
			$soma += $mat_notas[$i][$j];
			$contador_notas++;
		}
	}
	echo "Média total de notas: " . $soma / $contador_notas;
	?&gt;
		</pre>
		<p>Para a declaração de uma matriz de duas (2) notas de dois (2) estudantes, a lacuna da linha 2 deve ser preenchida com:</p>
	</div>
	`,
	  "type": "radio",
	  "options": [
		"array(array(8, 6), array(5, 6))",
		"array[array[8, 6],array[5, 6]]",
		"array((8, 6),(5, 6))",
		"array[(8, 6),(5, 6)]"
	  ],
	  "correctAnswer": 0,
	  "justification": `
	<div>
		<p>A resposta correta é: <strong>array(array(8, 6), array(5, 6))</strong></p>
		<p>Justificativa:</p>
		<ul>
			<li>A sintaxe correta para declarar uma matriz bidimensional em PHP é <code>array(array(...), array(...))</code>, onde cada sub-array representa uma linha da matriz.</li>
			<li>As outras opções usam sintaxes incorretas que resultariam em erros de sintaxe em PHP.</li>
		</ul>
	</div>
	`,
	  "referenceLinks": [
		"https://www.php.net/manual/en/language.types.array.php",
		"https://www.w3schools.com/php/php_arrays_multidimensional.asp"
	  ],
	  "screenshots": [],
	  "videos": []
	},
	{
	  "question": `
	<div style="font-family: Arial, sans-serif; line-height: 1.6;">
		<h3>Considere o código PHP incompleto abaixo:</h3>
		<pre>
	&lt;?php
	$mat_notas = array(array(8, 6), array(5, 6));
	$soma = 0;
	$contador_notas = 0;
	for ($i = 0; $i &lt; ___________; $i++) {
		for ($j = 0; $j &lt; __________; $j++) {
			$soma += $mat_notas[$i][$j];
			$contador_notas++;
		}
	}
	echo "Média total de notas: " . $soma / $contador_notas;
	?&gt;
		</pre>
		<p>Para que as estruturas de repetição calculem a média total das notas da matriz <code>mat_notas</code>, as lacunas das linhas X e Y devem ser preenchidas, respectivamente, com:</p>
	</div>
	`,
	  "type": "radio",
	  "options": [
		"mat_notas.count() e mat_notas[$i].count()",
		"mat_notas.length() e mat_notas[$i].length()",
		"count($mat_notas) e count($mat_notas[$i])",
		"length($mat_notas) e length($mat_notas[$i])"
	  ],
	  "correctAnswer": 2,
	  "justification": `
	<div>
		<p>A resposta correta é: <strong>count($mat_notas) e count($mat_notas[$i])</strong></p>
		<p>Justificativa:</p>
		<ul>
			<li>A função <code>count()</code> é utilizada em PHP para obter o número de elementos em um array.</li>
			<li><code>count($mat_notas)</code> conta o número de linhas na matriz, enquanto <code>count($mat_notas[$i])</code> conta o número de colunas em cada linha.</li>
			<li>As outras opções usam métodos incorretos, como <code>length()</code>, que não existem em PHP.</li>
		</ul>
	</div>
	`,
	  "referenceLinks": [
		"https://www.php.net/manual/en/function.count.php",
		"https://www.w3schools.com/php/func_array_count.asp"
	  ],
	  "screenshots": [],
	  "videos": []
	},
{
  "question": `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>Considere o código em linguagem PHP apresentado abaixo:</h3>
    <pre>
&lt;?php
$x = 5;
$nome = "João";
echo ____________;
?&gt;
    </pre>
    <p>Para complementar o comando <code>echo</code> da linha 4, de forma que o resultado seja:</p>
    <p><strong>João utilizou 5 caracteres especiais ~'\\\`"</strong></p>
    <p>Qual opção completa corretamente o código?</p>
</div>
`,
  "type": "radio",
  "options": [
    "'$nome utilizou $x caracteres especiais ~'\\`\"'",
    "$nome.' utilizou '.$x.' caracteres especiais ~'\\`\"'",
    "\"$nome utilizou $x caracteres especiais ~'\\`\"\"",
    "\"$nome utilizou $x caracteres especiais ~'\\`\"\""
  ],
  "correctAnswer": 1,
  "justification": `
<div>
    <p>A resposta correta é: <strong>$nome.' utilizou '.$x.' caracteres especiais ~\'\\\`\"'</strong></p>
    <p>Justificativa:</p>
    <ul>
        <li>Usando concatenação com <code>.'</code>, conseguimos combinar variáveis e texto, garantindo que os caracteres especiais sejam exibidos corretamente.</li>
    </ul>
</div>
`,
  "referenceLinks": [
    "https://www.php.net/manual/en/language.types.string.php",
    "https://www.w3schools.com/php/php_strings.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>Considere o código em linguagem PHP apresentado abaixo:</h3>
    <pre>
&lt;?php
$a = array("a"=>array(1,2,3), 2=>array("d","e","f"), "c"=>array(4,5,6));
foreach($a as $b => $c) {
    echo $b." = ";
    foreach($c as $d => $e) {
        echo $d."-".$e." || ";
    }
    echo "\\n";
}
?&gt;
    </pre>
    <p>O que será impresso por este código-fonte?</p>
</div>
`,
  "type": "radio",
  "options": [
    "a = 0-1 || 1-2 || 2-3 || </br>2 = 0-d || 1-e || 2-f || </br>c = 0-4 || 1-5 || 2-6 ||",
    "a = 1-0 || 2-1 || 3-2 || </br>2 = d-0 || e-1 || f-2 || </br>c = 4-0 || 5-1 || 6-2 ||",
    "Array = 0-1 || 1-2 || 2-3 || </br>Array = 0-d || 1-e || 2-f || </br>Array = 0-4 || 1-5 || 2-6 ||",
    "Array = 1-0 || 2-1 || 3-2 || </br>Array = d-0 || e-1 || f-2 || </br>Array = 4-0 || 5-1 || 6-2 ||"
  ],
  "correctAnswer": 0,
  "justification": `
<div>
    <p>A resposta correta é: <strong>a = 0-1 || 1-2 || 2-3 || 2 = 0-d || 1-e || 2-f || c = 0-4 || 1-5 || 2-6 ||</strong></p>
    <p>Justificativa:</p>
    <ul>
        <li>O código imprime a chave principal e, em seguida, itera sobre o array aninhado, imprimindo o índice e o valor de cada elemento no subarray.</li>
    </ul>
</div>
`,
  "referenceLinks": [
    "https://www.php.net/manual/en/control-structures.foreach.php",
    "https://www.w3schools.com/php/php_arrays_multidimensional.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>Considere o código em linguagem PHP apresentado abaixo:</h3>
    <pre>
&lt;?php
class c1 
{ 
    const nome = "Teste"; 
    function __construct() 
    { 
        echo ______; 
    } 
} 

echo _______; 
$ob = new c1(); 
?&gt;
    </pre>
    <p>Para que seja impresso o valor da constante <code>nome</code>, complementando os comandos <code>echo</code> nas linhas 7 e 10, deverão ser utilizados, respectivamente, os comandos:</p>
</div>
`,
  "type": "radio",
  "options": [
    "c1::nome e parent::nome",
    "self::nome e parent::nome",
    "c1::nome e self::nome",
    "self::nome e c1::nome"
  ],
  "correctAnswer": 3,
  "justification": `
<div>
    <p>A resposta correta é: <strong>c1::nome e self::nome</strong></p>
    <p>Justificativa:</p>
    <ul>
        <li>Para acessar uma constante de uma classe fora dela, usamos <code>c1::nome</code>.</li>
        <li>Para acessar a constante dentro da classe, usamos <code>self::nome</code>.</li>
    </ul>
</div>
`,
  "referenceLinks": [
    "https://www.php.net/manual/en/language.oop5.constants.php",
    "https://www.w3schools.com/php/php_oop_constants.asp"
  ],
  "screenshots": [],
  "videos": []
},
{
  "question": `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>Considere o código em linguagem PHP apresentado abaixo:</h3>
    <pre>
&lt;?php
class c1 
{ 
    public $a, $b, $c; 

    function __construct($a, $b, $c) 
    { 
        $this->a = $a; 
        $this->b = $b; 
        $this->c = $c; 
    } 
} 

$x = new c1(10, 20, 30); 
$y = $x; 
$y->a = $x->a + 100; 
$y->b = $x->a + 110; 
$y->c = $x->a + 120; 

echo $x->a . "-" . $x->b . "-" . $x->c . "\\n"; 
echo $y->a . "-" . $y->b . "-" . $y->c . "\\n"; 
?&gt;
    </pre>
    <p>O que será impresso por este código-fonte?</p>
</div>
`,
  "type": "radio",
  "options": [
    "110-120-130</br>10-20-30",
    "110-220-230</br>110-220-230",
    "10-20-30</br>110-220-230",
    "10-20-30</br>110-120-130"
  ],
  "correctAnswer": 1,
  "justification": `
	<div>
		<p>A resposta correta é: <strong>110-220-230\\n110-220-230</strong></p>
		<p>Justificativa:</p>
		<ul>
			<li>Em PHP, <code>$y = $x;</code> faz <code>$y</code> referenciar o mesmo objeto que <code>$x</code>. Isso significa que qualquer alteração feita em <code>$y</code> também será refletida em <code>$x</code>.</li>
			<li>Assim, quando alteramos <code>$y->a</code>, <code>$y->b</code>, e <code>$y->c</code>, esses valores são aplicados tanto para <code>$y</code> quanto para <code>$x</code>.</li>
			<li>Portanto, o primeiro <code>echo</code> imprime <code>110-220-230</code> e o segundo <code>echo</code> também imprime <code>110-220-230</code>.</li>
		</ul>
	</div>
  `,
  "referenceLinks": [
    "https://www.php.net/manual/en/language.oop5.references.php",
    "https://www.w3schools.com/php/php_oop_objects.asp"
  ],
  "screenshots": [],
  "videos": []
},
  {
    "question": `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>Considere o código em linguagem PHP apresentado abaixo:</h3>
    <pre>
&lt;?php
class c1 
{ 
    public $a, $b; 

    function __construct($a, $b) 
    { 
        $this->a = $a; 
        $this->b = $b; 
    } 

    function __tostring() 
    { 
        return $this->b; 
    } 
} 

$x = new c1("IF", "SUL"); 
echo $x . $x->a; 
?&gt;
    </pre>
    <p>O que será impresso por este código-fonte, considerando o comando <code>echo</code> da linha 16?</p>
</div>
    `,
    "type": "radio",
    "options": [
      "Object id #1SUL",
      "Object id #1IF",
      "SULIF",
      "IFSUL"
    ],
    "correctAnswer": 2,
    "justification": `
<div>
    <p>A resposta correta é: <strong>SULIF</strong></p>
    <p>Justificativa:</p>
    <ul>
        <li>O método <code>__toString()</code> retorna o valor da propriedade <code>$b</code>, que é "SUL".</li>
        <li>No comando <code>echo $x . $x->a;</code>, o objeto <code>$x</code> é convertido para "SUL" e concatenado com o valor de <code>$x->a</code>, que é "IF".</li>
        <li>O resultado é "SULIF".</li>
    </ul>
</div>
    `,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.magic.php#object.tostring",
      "https://www.w3schools.com/php/php_oop_classes_objects.asp"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `
<div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h3>Considere o código em linguagem PHP apresentado abaixo:</h3>
    <pre>
&lt;?php
$x = 10; 
$z = 20; 

function f1(&$y) 
{ 
    global $x; 
    $x -= 100; 
    $y += $x; 
} 

$x += 100; 
echo $x . "\\n"; 
f1($z); 
echo $x . "-" . $z; 
?&gt;
    </pre>
    <p>O que será impresso por este código-fonte, considerando os comandos <code>echo</code> das linhas 11 e 13?</p>
</div>
    `,
    "type": "radio",
    "options": [
      "110</br>10-30",
      "110</br>10-20",
      "110</br>110-30",
      "110</br>110-20"
    ],
    "correctAnswer": 0,
    "justification": `
	<div>
		<p>A resposta correta é: <strong>110\\n10-30</strong></p>
		<p>Justificativa:</p>
		<ul>
			<li>O valor inicial de <code>$x</code> é 10. Na linha <code>$x += 100;</code>, ele é incrementado em 100, resultando em <code>$x = 110</code>.</li>
			<li>Quando a função <code>f1</code> é chamada, a variável global <code>$x</code> é diminuída em 100, resultando em <code>$x = 10</code> dentro da função.</li>
			<li>O parâmetro <code>$z</code> é passado por referência, então quando <code>$z += $x;</code> é executado, o valor de <code>$z</code> se torna <code>10 + 20 = 30</code>.</li>
			<li>Portanto, o primeiro <code>echo</code> imprime <code>110</code>, e o segundo <code>echo</code> imprime <code>10-30</code>.</li>
		</ul>
	</div>
	`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.variables.scope.php",
      "https://www.w3schools.com/php/php_functions.asp"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Levando em consideração o código em PHP abaixo:<br><br>
    <pre><code>
    &lt;?php
    function xyz_s($valor) {
        if ($valor == 1)
            return 0;
        elseif ($valor == 2)
            return 1;
        else {
            $x = xyz_s($valor - 1) + xyz_s($valor - 2);
            return $x;
        }
    }

    for ($i = 0; $i < 6; $i++) {
        print xyz_s($i + 1);
    }
    ?&gt;
    </code></pre><br>
    Após executar o trecho de código acima, o resultado exibido será:
    `,
    "type": "radio",
    "options": [
      "011235",
      "O seguinte erro será indicado na linha 10: Parse error: syntax error, unexpected 'xyz_s' (T_STRING).",
      "O seguinte erro será indicado na linha 15: Fatal error: Call to undefined function print().",
      "532110"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>011235</strong>.<br>
    Explicação:
    - Esse código implementa uma função que calcula a sequência de Fibonacci para valores passados a <code>xyz_s</code>.
    - Os valores retornados de <code>xyz_s</code> para os primeiros seis números (1 a 6) são 0, 1, 1, 2, 3 e 5, respectivamente.
    - Portanto, o código imprime "011235".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/control-structures.if.php",
      "https://www.php.net/manual/en/function.print.php",
      "https://en.wikipedia.org/wiki/Fibonacci_number"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considerando a criação e manipulação de arrays em PHP, analise as afirmações abaixo:<br><br>
    I. $quitanda = array('Laranja' => 100,'Maçã' => 150,'Banana' => 200);<br>
    O código acima é um exemplo de um array que utiliza string como índice.<br><br>
    II. $quitanda = array(['Laranja'] => 100,['Maçã'] => 150,['Banana'] => 200);<br>
    O código acima é um exemplo de um array que utiliza string como índice.<br><br>
    III. $lista = array();<br>
    $lista[] = 2; $lista[] = 3; $lista[] = 4;<br>
    for($i=0;$i<10;$i++) $lista[] = $i;<br>
    Após a execução do trecho de código acima, o array $lista terá apenas uma posição com o valor numérico 9. A única posição do array $lista pode ser acessada e expressa da seguinte forma: echo $lista[0];<br><br>
    IV. $vet = array(1=> array(1,2,3), 2=> array('A','B','C'), 3=> array("Um","Dois","Tres"));<br>
    foreach ($vet as $key => $value) {<br>
    &nbsp;&nbsp;&nbsp;&nbsp;echo $key . ' ';<br>
    &nbsp;&nbsp;&nbsp;&nbsp;foreach ($value as $value2)<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;echo $value2 . ' ';<br>
    }<br>
    Após executar o trecho de código acima, o resultado exibido será: 1 1 2 3 2 A B C 3 Um Dois Tres.<br><br>
    Estão corretas apenas as afirmativas:<br><br>
    `,
    "type": "radio",
    "options": [
      "I, II e III.",
      "II e IV.",
      "III e IV.",
      "I e IV.",
      "II e III."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>I e IV</strong>.<br>
    Explicação:
    - A afirmação I está correta, pois o código cria um array associativo em que as chaves são strings ('Laranja', 'Maçã', 'Banana'), o que é válido em PHP.
    - A afirmação IV também está correta, pois o código exibe a sequência correta ao iterar sobre o array multidimensional \`$vet\` com \`foreach\`, resultando em: \`1 1 2 3 2 A B C 3 Um Dois Tres\`.
    - A afirmação II está incorreta, pois a sintaxe usada tenta definir um array como chave, o que não é permitido em PHP.
    - A afirmação III está incorreta, pois após a execução do código o array \`$lista\` terá várias posições, não apenas uma. Os valores em \`$lista\` incluirão \`[2, 3, 4, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\`.<br>`,
    "referenceLinks": [
        "https://www.php.net/manual/en/language.types.array.php",
        "https://www.w3schools.com/php/php_arrays_associative.asp"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Levando em consideração o paradigma da programação Orientada a Objetos em PHP, analise as seguintes afirmações:<br><br>
    I. As classes são exemplos ou instâncias de seus objetos, sendo que os objetos é que representam os tipos e regras de comportamento.<br>
    II. Os modificadores de acesso public, protected e private controlam o acesso somente aos atributos e métodos declarados na classe.<br>
    III. Os métodos GET e SET devem ser implementados na classe para que seja possível acessar (ler) e atualizar (escrever) os atributos de uma classe.<br>
    IV. Uma classe abstrata deve ser instanciada obrigatoriamente.<br><br>
    Estão corretas apenas as afirmativa(s):<br><br>
    `,
    "type": "radio",
    "options": [
      "I e II apenas.",
      "II e III apenas.",
      "III e IV apenas.",
      "II, III e IV apenas.",
      "I, III e IV apenas."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>II e III apenas</strong>.<br>
    Explicação:
    - A afirmação II está correta, pois os modificadores de acesso controlam o acesso aos membros da classe.
    - A afirmação III está correta, pois é uma prática comum implementar métodos GET e SET para acessar atributos privados.
    - A afirmação I está incorreta, pois classes são "moldes" para objetos, não instâncias.
    - A afirmação IV está incorreta, pois classes abstratas não podem ser instanciadas.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.visibility.php",
      "https://www.w3schools.com/php/php_oop_access_modifiers.asp"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considerando um banco de dados MySQL e um repositório de dados chamado "prova" localizado em localhost, cujo o usuário e senha para acesso sejam respectivamente "root" e "12345". Nesse banco de dados foi criada a tabela "lista" contendo um atributo chamado "nome".<br>
    Qual dos códigos PHP escritos abaixo imprime a lista de todos os nomes contidos na tabela prova?<br><br>
    <pre><code>
    a) mysql_connect('localhost','root','12345','prova');
       $linha = mysql_query('SELECT nome FROM lista');
       while ($linha = mysql_fetch_array($linha))
           echo $linha['nome'] . '&lt;br&gt;';
    
    b) mysql_connect('localhost','root','12345');
       mysql_select_db('prova');
       $result = mysql_query('SELECT nome FROM lista');
       while ($result = mysql_fetch_array($result))
           echo $result['nome'] . '&lt;br&gt;';
    
    c) mysql_connect('localhost','root','12345');
       mysql_select_db('prova');
       $result = mysql_query('SELECT nome FROM lista');
       while ($linha = mysql_fetch_array($result))
           echo $linha['nome'] . '&lt;br&gt;';
    
    d) mysql_connect('localhost','root','12345', 'prova');
       while ($result = mysql_query('SELECT nome FROM lista'))
           echo $result['nome'] . '&lt;br&gt;';
    </code></pre><br>
    `,
    "type": "radio",
    "options": [
      "a",
      "b",
      "c",
      "d"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>c</strong>.<br>
    Explicação:
    - O código c) conecta-se ao banco de dados "prova" e seleciona a tabela "lista" corretamente.
    - Ele usa <code>mysql_connect</code> para se conectar ao servidor e <code>mysql_select_db</code> para escolher o banco de dados.
    - Em seguida, executa uma query e usa um loop <code>while</code> para percorrer os resultados e imprimir os nomes.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.mysql-connect.php",
      "https://www.php.net/manual/en/function.mysql-fetch-array.php"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere a execução do código-fonte em PHP e HTML apresentado abaixo:<br><br>
    <pre><code>
    &lt;?php
    if(!empty($_POST['Botao']))
    {
        foreach ($_POST['Opcao'] as $value)
            echo "Cor: $value ";
    }
    ?&gt;
    &lt;form name="selecao" action="&lt;?php echo $_SERVER['PHP_SELF']; ?&gt;" method="POST"&gt;
        &lt;input type="checkbox" name="Opcao[]" value="1"&gt; Vermelho
        &lt;input type="checkbox" name="Opcao[]" value="2"&gt; Verde
        &lt;input type="checkbox" name="Opcao[]" value="3"&gt; Azul
        &lt;input type="submit" name="Botao" value="Enviar"&gt;
    &lt;/form&gt;
    </code></pre><br>
    Analise as seguintes afirmações:<br>
    I. Caso as opções Vermelho e Azul sejam selecionadas e o botão Enviar seja pressionado, vai ser impresso: Cor 1 Cor 2 (seguido do formulário).<br>
    II. O array $_SERVER[] não possui em seu escopo a posição 'PHP_SELF'.<br>
    III. A estrutura foreach, aplicada ao array $_POST['Opcao'], não é recomendada para a situação em que não se sabe ao certo quantas posições o array contém.<br><br>
    Estão corretas apenas as afirmativas:<br>
    `,
    "type": "radio",
    "options": [
      "I e II apenas",
      "II e III",
      "I e III",
      "I apenas"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>I apenas</strong>.<br>
    Explicação:
    - A primeira afirmação está correta, pois ao selecionar as opções "Vermelho" e "Azul" e pressionar "Enviar", a saída será "Cor 1 Cor 3".
    - A segunda afirmação está incorreta, pois $_SERVER['PHP_SELF'] existe e retorna o caminho do script em execução.
    - A terceira afirmação está incorreta, pois a estrutura foreach é adequada para percorrer arrays sem se preocupar com o número de elementos.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/reserved.variables.server.php",
      "https://www.php.net/manual/en/control-structures.foreach.php"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considerando a linguagem PHP, analise as afirmações abaixo:<br>
    I. É considerada linguagem de tipagem fraca por não obrigar a declaração do tipo das variáveis.<br>
    II. Todas as variáveis no PHP têm um sinal de cifrão ($) na frente, após o $ inicial, o nome das variáveis deve ser composto por letras, dígitos e caracteres sublinhados, porém o primeiro caractere depois do $ não pode ser um número.<br>
    III. Os métodos GET e SET devem ser implementados na classe para que seja possível acessar os atributos encapsulados.<br>
    IV. Em PHP existem oito tipos: números inteiros, números de dupla precisão, booleanos, strings, arrays, objetos, NULL e recursos.<br>
    V. Não aceitando operações com diferentes tipos, portanto não é possível a seguinte operação: $resultado = 2 + 3.5;<br><br>
    Estão corretas as afirmativas:<br>
    `,
    "type": "radio",
    "options": [
      "I, II e III apenas",
      "I, II e IV",
      "II e III apenas",
      "II, III e IV"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>I, II e IV</strong>.<br>
    Explicação:
    - As afirmações I, II e IV estão corretas.
    - A afirmação III está incorreta, pois os métodos GET e SET não são obrigatórios para acessar atributos encapsulados, embora sejam uma boa prática.
    - A afirmação V está incorreta, pois PHP permite operações entre tipos diferentes, como entre inteiros e floats.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.variables.php",
      "https://www.php.net/manual/en/language.oop5.php",
      "https://www.php.net/manual/en/language.types.php"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere as seguintes afirmações sobre PHP:<br><br>
    I. O comando que atribui o valor da variável $a para a variável $b antes da variável $a ser incrementada em uma unidade é: $a = ++$b<br>
    II. Dadas as strings e respectivas atribuições: $a = '100'; $b = 'a = $a'; se a variável $b for impressa a saída será: a = $a<br>
    III. Se a seguinte atribuição for efetuada à variável $palavra: $palavra = "Prova"; não será possível atribuir um valor numérico à variável $palavra, pois ela já foi definida como string.<br><br>
    Está(ão) correta(s) apenas a(s) afirmativa(s):`,
    "type": "radio",
    "options": [
      "I e III",
      "II",
      "II e III",
      "I, II e III"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>II</strong>.<br>
    Explicação:
    - A primeira afirmação está incorreta, pois o comando que atribui o valor de $a para $b antes de $a ser incrementado seria $b = $a++;.
    - A segunda afirmação está correta, pois a variável $b imprimirá exatamente "a = $a".
    - A terceira afirmação está incorreta, pois uma vez definida como string, $palavra aceita atribuição direta de valores numéricos sem conversão.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.variables.php",
      "https://www.php.net/manual/en/language.operators.increment.php"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considere o seguinte trecho de código PHP:<br><br>
    <pre><code>
    &lt;?php
    function subtrai(&$num1, $num2)
    {
        $num1 -= $num2;
        $num2 += $fator;
        $num1 += $fator;
        return($num1);
    }

    $fator=10;
    $arr1[5]=20;
    $arr2[5]=10;
    $num1=$arr1[5];
    $num2=$arr2[5];
    $resultado=subtrai($num1, $num2);
    echo "$num1 | $num2 | $fator | $resultado";
    ?&gt;
    </code></pre><br>
    Após executar o trecho de código acima, o resultado exibido será:`,
    "type": "radio",
    "options": [
      "20 | 10 | 11 | 10",
      "10 | 10 | 11 | 10",
      "O programa não funcionará, pois existe erro de sintaxe.",
      "20 | 10 | 10 | 20"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>20 | 10 | 10 | 20</strong>.<br>
    Explicação:
    - A função subtrai altera o valor de $num1, enquanto $num2 e $fator permanecem inalterados no escopo global, resultando em "20 | 10 | 10 | 20".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.references.pass.php",
      "https://www.php.net/manual/en/functions.arguments.php"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `Considerando o paradigma de Orientação a Objetos do PHP, é correto afirmar que:<br><br>
    I. O PHP suporta herança múltipla.<br>
    II. Declarações de funções em uma classe filha sobrescrevem a função com o mesmo nome na classe pai.<br>
    III. O construtor de uma classe pai sempre é chamado automaticamente ao instanciar um objeto de uma classe filha que especializou essa classe pai, mesmo que essa classe filha possua um construtor.<br><br>
    Está(ão) correta(s) a(s) afirmativa(s):`,
    "type": "radio",
    "options": [
      "I, II e III.",
      "III apenas.",
      "I e III.",
      "II apenas."
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>II apenas</strong>.<br>
    Explicação:
    - O PHP não suporta herança múltipla, tornando a afirmação I incorreta.
    - A afirmação II está correta, pois métodos na classe filha sobrescrevem métodos de mesma assinatura na classe pai.
    - A afirmação III está incorreta; o construtor da classe pai não é chamado automaticamente, a menos que seja explicitamente chamado usando <code>parent::__construct()</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.inheritance.php",
      "https://www.php.net/manual/en/language.oop5.decon.php"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": `No paradigma de orientação a objetos da linguagem PHP, no que diz respeito ao escopo, é correto afirmar que`,
    "type": "radio",
    "options": [
      "funções membro não podem referenciar livremente funções globais.",
      "funções membro podem referenciar variáveis globais sem a necessidade de qualquer declaração da variável global dentro da definição da função membro.",
      "os nomes visíveis dentro das funções membro são exatamente os mesmos nomes visíveis dentro de funções globais.",
      "funções membro não podem referenciar variáveis globais, em hipótese alguma."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>funções membro podem referenciar variáveis globais sem a necessidade de qualquer declaração da variável global dentro da definição da função membro</strong>.<br>
    Explicação:
    - Em PHP, funções membro podem acessar variáveis globais sem a necessidade de redeclará-las com <code>global</code> na função.
    - As funções globais, por outro lado, precisam da palavra-chave <code>global</code> para acessar variáveis globais declaradas fora de seu escopo.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.variables.scope.php",
      "https://www.w3schools.com/php/php_scope.asp"
    ],
    "screenshots": [],
    "videos": []
  },
  {
  "question": `Considere o seguinte código em PHP:<br><br>
  <pre><code>
  &lt;?php
  $a = array('um', 'dois', 'tres');
  echo $a[2];
  $a = implode("@", $a);
  echo "-$a";
  $resultado = explode("@", $a);
  echo "-$resultado[0]";
  ?&gt;
  </code></pre><br>
  Após executar o código acima, o resultado exibido será`,
  "type": "radio",
  "options": [
    "dois@tres-um",
    "um@dois@tres",
    "tres-um@dois@tres-um",
    "tres@dois@tres-um"
  ],
  "correctAnswer": 2,
  "justification": `A resposta correta é <strong>tres-um@dois@tres-um</strong>.<br>
  Explicação:
  - Primeiro, <code>echo $a[2];</code> imprime o valor "tres", que é o terceiro elemento do array.
  - Em seguida, <code>implode("@", $a);</code> converte o array <code>$a</code> em uma string "um@dois@tres".
  - A string resultante é exibida com um hífen antes, resultando em "-um@dois@tres".
  - Por último, <code>explode("@", $a);</code> converte a string de volta em um array, e <code>echo "-$resultado[0]";</code> imprime "-um", que é o primeiro elemento desse novo array.
  - Portanto, o resultado final é "tres-um@dois@tres-um".<br>`,
  "referenceLinks": [
    "https://www.php.net/manual/en/function.implode.php",
    "https://www.php.net/manual/en/function.explode.php"
  ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Na linguagem PHP, o operador de resolução de escopo permite acesso a propriedades estáticas, constantes e sobrecarga de uma classe. Assinale a alternativa que corresponde ao operador correto.`,
    "type": "radio",
    "options": [
      ":: (dois pontos duplo)",
      ": (ponto e vírgula)",
      "-> (seta)",
      "=> (seta dupla)"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>:: (dois pontos duplo)</strong>.<br>
    Explicação:
    - Em PHP, o operador de resolução de escopo (::) é usado para acessar membros estáticos, constantes e sobrecarregar uma classe.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.paamayim-nekudotayim.php",
      "https://www.w3schools.com/php/php_oop_static_methods.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Assinale a alternativa CORRETA referente à linguagem PHP.<br><br>`,
    "type": "radio",
    "options": [
      "Uma classe abstrata deve conter obrigatoriamente pelo menos um método abstrato.",
      "Métodos estáticos podem ser invocados diretamente da classe, sem a necessidade de instanciar um objeto para isso.",
      "Uma classe abstrata não pode ser uma subclasse.",
      "Um atributo estático não pode ser privado nem protegido."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Métodos estáticos podem ser invocados diretamente da classe, sem a necessidade de instanciar um objeto para isso</strong>.<br>
    Explicação:
    - Em PHP, métodos estáticos podem ser chamados diretamente pela classe sem precisar instanciar um objeto, usando a sintaxe Classe::método().<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.static.php",
      "https://www.geeksforgeeks.org/php-oop-static-methods/"
    ],
  "screenshots": [],
  "videos": []
  },
  {
	"question": `Considerando a linguagem PHP, analise as afirmações abaixo:<br><br>
	I. Como resultado da execução do código abaixo, será impresso o valor numérico 9.<br>
	<pre><code>
	&lt;?php
	$numbers = array();
	$numbers[1] = 2; $numbers[3] = 3; $numbers[10] = 4;
	for ($i = 0; $i < 10; $i++) $numbers[$i] = $i;
	echo $numbers[20];
	?&gt;
	</code></pre><br>
	II. Como resultado da execução do código abaixo, será impresso: bartrue<br>
	<pre><code>
	&lt;?php
	$arr = array("foo" => "bar", 99 => true);
	echo $arr["foo"];
	echo $arr[99];
	?&gt;
	</code></pre><br>
	III. Como resultado da execução do código abaixo, será impresso: 211<br>
	<pre><code>
	&lt;?php
	echo "1".print(2);
	?&gt;
	</code></pre><br>
	Estão(ão) CORRETA(S) a(s) afirmativa(s):`,
	"type": "radio",
	"options": [
	"Apenas I",
	"Apenas I, II e III",
	"Apenas II e III",
	"Apenas I e III"
	],
	"correctAnswer": 2,
	"justification": `A resposta correta é <strong>Apenas II e III</strong>.<br>
	Explicação:
	- A afirmativa I está incorreta. Após o loop for, o array <code>$numbers</code> contém valores de 0 a 9 nos índices de 0 a 9, sobrescrevendo o valor em <code>$numbers[1]</code> e <code>$numbers[3]</code>. Como <code>$numbers[20]</code> nunca foi definido, seu valor será <code>NULL</code>.
	- A afirmativa II está correta, pois <code>$arr["foo"]</code> imprime "bar" e <code>$arr[99]</code> imprime "1" (representação de <code>true</code>).
	- A afirmativa III está correta, pois <code>print(2)</code> imprime "2" e retorna 1, resultando na saída "21" quando concatenado com "1".<br>`,
	"referenceLinks": [
	"https://www.php.net/manual/en/function.print.php",
	"https://www.php.net/manual/en/control-structures.for.php"
	],
  "screenshots": [],
  "videos": []
  },
  {
	"question": `Considere o código abaixo escrito em PHP:<br><br>
	<pre><code>
	&lt;?php
	$a = 1; $b = 3; $c = 5;
	$x = ++$b + $a;
	$y = $c-- - $x;
	$z = --$a + $c++ + $x;
	echo $a.$b.$c.$x.$y.$z;
	?&gt;
	</code></pre><br>
	Qual é o resultado da execução deste código?`,
	"type": "radio",
	"options": [
	"045509",
	"045355",
	"045265",
	"135365"
	],
	"correctAnswer": 0,
	"justification": `A resposta correta é <strong>045509</strong>.<br>
	Explicação detalhada:
	- Inicialmente: <code>$a = 1</code>, <code>$b = 3</code>, <code>$c = 5</code>.
	- <code>$x = ++$b + $a;</code>: <code>$b</code> é pré-incrementado para <code>4</code>, então <code>$x = 4 + 1 = 5</code>.
	- <code>$y = $c-- - $x;</code>: <code>$c</code> é usado como <code>5</code> e depois decrementado para <code>4</code>. <code>$y = 5 - 5 = 0</code>.
	- <code>$z = --$a + $c++ + $x;</code>: <code>$a</code> é pré-decrementado para <code>0</code>, <code>$c</code> é usado como <code>4</code> e depois incrementado para <code>5</code>. Assim, <code>$z = 0 + 4 + 5 = 9</code>.
	- Concatenação final: <code>$a</code> é <code>0</code>, <code>$b</code> é <code>4</code>, <code>$c</code> é <code>5</code>, <code>$x</code> é <code>5</code>, <code>$y</code> é <code>0</code>, e <code>$z</code> é <code>9</code>, formando a sequência "045509".<br>`,
	"referenceLinks": [
	"https://www.php.net/manual/en/language.operators.increment.php",
	"https://www.w3schools.com/php/php_operators.asp"
	],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o trecho de código abaixo escrito em PHP:<br><br>
    <pre><code>
    &lt;?php
    $arr1 = array('@pple!', 'Me!on');
    $arr2 = implode("@",$arr1);
    $arr3 = explode("!",$arr2);
    echo $arr3[1];
    ?&gt;
    </code></pre><br>
    Qual é o resultado da execução deste código?`,
    "type": "radio",
    "options": [
      "@pp",
      "@Me",
      "@app!",
      "@pple!",
      "e!Me"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>@Me</strong>.<br>
    Explicação:
    - O método implode() combina os elementos de $arr1 com "@" entre eles, formando "@pple!@Me!on".
    - explode() divide esta string em partes ao encontrar "!", e o índice [1] contém "@Me".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.implode.php",
      "https://www.php.net/manual/en/function.explode.php"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Selecione a alternativa INCORRETA referente à linguagem PHP:<br><br>`,
    "type": "radio",
    "options": [
      "Uma função no PHP pode aparecer no script após ser chamada.",
      "O nome de uma função no PHP, assim como os nomes de variáveis e constantes, é case sensitive, ou seja, considera a diferença entre minúsculas e maiúsculas.",
      "A função session_unset() libera todas as variáveis da sessão atualmente registradas.",
      "Todos os argumentos da função setCookie() são opcionais, exceto o nome do cookie."
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>O nome de uma função no PHP, assim como os nomes de variáveis e constantes, é case sensitive, ou seja, considera a diferença entre minúsculas e maiúsculas</strong>.<br>
    Explicação:
    - Em PHP, os nomes das funções são case insensitive, o que significa que "função()" e "FUNÇÃO()" seriam considerados a mesma função.
    - Isso torna a afirmativa b incorreta.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/functions.user-defined.php",
      "https://www.geeksforgeeks.org/functions-in-php/"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere as seguintes afirmativas sobre a linguagem de programação PHP:<br><br>
    I. O seguinte código PHP apresentará um erro ao ser executado.<br><br>
    <pre><code>
    &lt;?php
    class MinhaClasse {
        function aa() {echo "aa";}
        function aa($a) {echo $a;}
    }

    $objeto = new MinhaClasse();
    $objeto->aa();
    $objeto->aa("aa");
    ?&gt;
    </code></pre><br>
    II. No PHP orientado a objetos, é possível declarar apenas um método construtor __construct() por classe.<br><br>
    III. Construtores das superclasses não são chamados implicitamente pelos construtores definidos pelo programador nas subclasses. Caso o programador deseje executar o construtor da superclasse, ele deverá usar a palavra-chave <code>parent</code> juntamente com o operador de escopo.<br><br>
    Estão CORRETAS as afirmativas:`,
    "type": "radio",
    "options": [
      "Apenas I e II",
      "Apenas I e III",
      "Apenas II e III",
      "I, II e III"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>I, II e III</strong>.<br>
    Explicação:
    - I: O código apresenta um erro porque o PHP não suporta sobrecarga de métodos com o mesmo nome e assinatura.
    - II: No PHP, é possível declarar apenas um método construtor __construct() por classe.
    - III: Em PHP, o construtor da superclasse não é chamado automaticamente. O programador deve usar a palavra-chave <code>parent</code> para invocar o construtor da superclasse explicitamente.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.decon.php",
      "https://www.w3schools.com/php/php_oop_constructor.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Na linguagem PHP, assinale a sentença que define corretamente uma informação dentro da sessão, considerando que a sessão já foi criada:<br><br>`,
    "type": "radio",
    "options": [
      "session_set('nome', 'João');",
      "SESSION['nome'] = 'João';",
      "$_SESSION['nome'] = 'João';",
      "$SESSION['nome'] = 'João';"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>$_SESSION['nome'] = 'João';</strong>.<br>
    Explicação:
    - Em PHP, a superglobal <code>$_SESSION</code> é usada para definir e acessar variáveis de sessão.
    - Portanto, para armazenar a informação dentro da sessão, a sintaxe correta é <code>$_SESSION['nome'] = 'João';</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/reserved.variables.session.php",
      "https://www.w3schools.com/php/php_sessions.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o código abaixo escrito na linguagem PHP:<br><br>
    <pre><code>
    &lt;?php
    $text="Concurso público";
    $busca="o";
    $f=0;
    $d=strlen($text);
    for($i=0; $i&lt;$d; $i++){
        if(substr($text, $i, 2)==$busca){
            $f=$f+1;
        }
    }
    echo $f;
    ?&gt;
    </code></pre><br>
    Qual é o resultado exibido em tela após a execução desse código?`,
    "type": "radio",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>1</strong>.<br>
    Explicação:
    - O código verifica substrings de dois caracteres dentro da string "$text" e compara com a variável "$busca", que contém o caractere "o".
    - Como não há nenhuma substring de dois caracteres igual a "o", o contador "$f" é incrementado apenas uma vez.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.substr.php",
      "https://www.w3schools.com/php/func_string_strlen.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
	"question": `Observe o código PHP abaixo:<br><br>
	<pre><code>
	&lt;?php
	$cores = array();
	$cores[1] = "azul";
	$cores["a"] = "verde";
	$cores[] = "amarelo";
	$cores[5] = "rosa";
	$cores[] = "roxo";
	ksort($cores);
	echo key($cores) . ";";
	foreach($cores as $v){
	  echo $v . ";";
	}
	?&gt;
	</code></pre><br>
	Ao executar o código, qual é a saída exibida em tela?`,
	"type": "radio",
	"options": [
	"2;amarelo;azul;rosa;roxo;verde;",
	"a;verde;azul;amarelo;rosa;roxo;",
	"1;azul;amarelo;rosa;roxo;verde;",
	"azul;amarelo;verde;rosa;roxo;1;"
	],
	"correctAnswer": 2,
	"justification": `A resposta correta é <strong>1;verde;azul;amarelo;rosa;roxo;</strong>.<br>
	Explicação:
	- A função <code>ksort()</code> ordena o array <code>$cores</code> pelas chaves em ordem crescente.
	- Após a ordenação, a chave "1" é a primeira chave numérica no array, portanto <code>key($cores)</code> exibe "1".
	- Em seguida, o loop <code>foreach</code> exibe as cores na ordem das chaves ordenadas: "verde", "azul", "amarelo", "rosa", e "roxo".<br>`,
	"referenceLinks": [
	"https://www.php.net/manual/en/function.ksort.php",
	"https://www.w3schools.com/php/php_arrays.asp"
	],
	"screenshots": [],
	"videos": []
  },
  {
    "question": `Analise o código abaixo:<br><br>
    <pre><code>
    class Teste {
        public $nome;
        public $idade;
    }
    </code></pre>
    Qual é o trecho correto de código escrito na linguagem PHP, orientada a objetos, que insere o construtor na classe Teste?`,
    "type": "radio",
    "options": [
      "public function __construct($nome, $idade) { $this->nome = $nome; $this->idade = $idade; }",
      "public function construct($nome, $idade) { this->nome = $nome; this->idade = $idade; }",
      "public function __Teste($nome, $idade) { this->nome = $nome; this->idade = $idade; }",
      "public function Teste($nome, $idade) { $this->nome = $nome; $this->idade = $idade; }"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>public function __construct($nome, $idade) { $this->nome = $nome; $this->idade = $idade; }</strong>.<br>
    Explicação:
    - Em PHP, o método construtor de uma classe é definido com o nome <code>__construct</code>.
    - Este método é automaticamente invocado quando uma nova instância da classe é criada.
    - As demais opções apresentam erros no nome do método ou na sintaxe.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.oop5.decon.php",
      "https://www.w3schools.com/php/php_oop_constructor.asp"
    ],
	"screenshots": [],
	"videos": []
  },
  {
    "question": `Analise o código abaixo:<br><br>
    <pre><code>
    &lt;?php
    $a = "10";
    $b = 10;

    if ($a == $b) {
        echo "Igual";
    } else {
        echo "Diferente";
    }
    ?&gt;
    </code></pre>
    Qual será a saída do código acima?`,
    "type": "radio",
    "options": [
      "Igual",
      "Diferente"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Igual</strong>.<br>
    Explicação:
    - PHP realiza uma comparação flexível (<code>==</code>), o que significa que ele converte o tipo de <code>$a</code> ou <code>$b</code> para fazer a comparação.
    - Como <code>"10"</code> (string) é convertido para <code>10</code> (inteiro), a comparação resulta em <code>true</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
	"screenshots": [],
	"videos": []
  },
  {
    "question": `Considere o seguinte código:<br><br>
    <pre><code>
    &lt;?php
    $x = 3 + 5 * 2;
    echo $x;
    ?>
    </code></pre>
    Qual será a saída do código acima?`,
    "type": "radio",
    "options": [
      "16",
      "13",
      "10",
      "Erro de sintaxe"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>13</strong>.<br>
    Explicação:
    - A multiplicação tem precedência sobre a adição, então <code>5 * 2</code> é calculado primeiro (10), e depois é somado a 3, resultando em 13.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.precedence.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
	"screenshots": [],
	"videos": []
  },
  {
  "question": `Analise o código abaixo e indique a saída esperada:<br><br>
  <pre><code>
  &lt;?php
  function teste(&$var) {
      $var = $var + 1;
  }

  $x = 10;
  teste($x++);
  echo $x;
  ?>
  </code></pre>
  `,
  "type": "radio",
  "options": [
    "10",
    "11",
    "12",
    "Erro"
  ],
  "correctAnswer": 3,
  "justification": `A resposta correta é <strong>Erro</strong>.<br>
  Explicação:
  - Em PHP, a expressão <code>$x++</code> realiza um incremento pós-fixado, mas ao mesmo tempo é passado por referência para a função <code>teste</code>.
  - Como a operação de incremento pós-fixado não pode ser usada com passagem por referência, o código resulta em um erro de execução.
  - Para evitar o erro, seria necessário passar uma variável diretamente, sem operadores pós-fixados, ou ajustar a lógica para não utilizar a referência no incremento.<br>`,
  "referenceLinks": [
    "https://www.php.net/manual/en/language.references.php",
    "https://www.php.net/manual/en/language.operators.increment.php"
  ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte código:<br><br>
    <pre><code>
	&lt;?php
    $a = 0;
    $b = "0";
    $c = "abc";

    if ($a == $b && $b == $c) {
        echo "True";
    } else {
        echo "False";
    }
    ?>
    </code></pre>
    Qual será a saída do código acima?`,
    "type": "radio",
    "options": [
      "True",
      "False"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>False</strong>.<br>
    Explicação:
    - Embora <code>0 == "0"</code> seja <code>true</code>, <code>"0" == "abc"</code> é <code>false</code>, pois PHP não considera "abc" como zero em uma comparação flexível.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o código e indique o resultado:<br><br>
    <pre><code>
    &lt;?php
    $var = 0;

    if (empty($var)) {
        echo "Vazia";
    } else {
        echo "Cheia";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Vazia",
      "Cheia",
      "Erro"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Vazia</strong>.<br>
    Explicação:
    - <code>empty()</code> considera <code>0</code>, <code>""</code>, <code>null</code>, <code>false</code>, e <code>[]</code> como vazios.
    - Portanto, mesmo que <code>$var</code> seja <code>0</code>, <code>empty($var)</code> retorna <code>true</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.empty.php",
      "https://www.w3schools.com/php/func_var_empty.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o código com array multidimensional:<br><br>
    <pre><code>
    &lt;?php
    $arr = ["a" => ["b" => 5]];

    if (isset($arr["a"]["c"])) {
        echo "Existente";
    } else {
        echo "Inexistente";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Existente",
      "Inexistente",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Inexistente</strong>.<br>
    Explicação:
    - A chave <code>"c"</code> não existe no array interno, então <code>isset()</code> retorna <code>false</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.isset.php",
      "https://www.w3schools.com/php/func_var_isset.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código abaixo?<br><br>
    <pre><code>
    &lt;?php
    $arr = ["a" => 1, "a" => 2];
    echo $arr["a"];
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "1",
      "2",
      "Array",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>2</strong>.<br>
    Explicação:
    - Quando uma chave é repetida em um array associativo, o último valor sobrescreve o anterior, então <code>"a"</code> tem o valor <code>2</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.array.php",
      "https://www.w3schools.com/php/php_arrays_associative.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código abaixo?<br><br>
    <pre><code>
    &lt;?php
    function modificar(&$x) {
        $x += 5;
    }

    $a = 10;
    $b = &$a;
    modificar($a);
    echo $b;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "10",
      "15",
      "20",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>15</strong>.<br>
    Explicação:
    - Como <code>$b</code> é uma referência de <code>$a</code>, ele reflete o valor atualizado de <code>15</code> após a função <code>modificar()</code> ser chamada.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.references.pass.php",
      "https://www.w3schools.com/php/php_functions.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código abaixo?<br><br>
    <pre><code>
    &lt;?php
    $arr = explode(",", "1,2,3");
    echo $arr["2"];
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "1",
      "2",
      "3",
      "Erro"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>3</strong>.<br>
    Explicação:
    - <code>explode</code> retorna um array indexado numericamente. A posição <code>2</code> contém o valor <code>"3"</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.explode.php",
      "https://www.w3schools.com/php/func_string_explode.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o código abaixo com <code>implode</code>:<br><br>
    <pre><code>
    &lt;?php
    $arr = [1, 2, 3];
    echo implode($arr, "-");
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "1-2-3",
      "-1-2-3",
      "Erro",
      "123"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>Erro</strong>.<br>
    Explicação:
    - A ordem correta dos parâmetros para <code>implode</code> é <code>implode("-", $arr)</code>. Inverter os parâmetros resulta em erro.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.implode.php",
      "https://www.w3schools.com/php/func_string_implode.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte código em PHP:<br><br>
    <pre><code>
    &lt;?php
    $a = "5" + "10";
    echo $a;
    ?>
    </code></pre>
    Qual será a saída do código acima?`,
    "type": "radio",
    "options": [
      "510",
      "5",
      "10",
      "15"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>15</strong>.<br>
    Explicação:
    - Em PHP, quando você usa o operador <code>+</code> entre strings numéricas, elas são convertidas em inteiros e somadas.
    - Portanto, <code>"5" + "10"</code> resulta em <code>15</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.string.php#language.types.string.conversion",
      "https://www.w3schools.com/php/php_datatypes.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código PHP abaixo, qual será o resultado?<br><br>
    <pre><code>
    &lt;?php
    $a = "0";
    $b = 0;
    if ($a === $b) {
        echo "Iguais";
    } else {
        echo "Diferentes";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Iguais",
      "Diferentes",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Diferentes</strong>.<br>
    Explicação:
    - O operador <code>===</code> verifica tanto o valor quanto o tipo.
    - Como <code>$a</code> é uma string e <code>$b</code> é um inteiro, eles não são considerados iguais com a verificação estrita.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Observe o código abaixo e indique a saída:<br><br>
    <pre><code>
    &lt;?php
    function somar($a = 5, $b) {
        return $a + $b;
    }

    echo somar(10);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "10",
      "5",
      "15",
      "Erro"
    ],
    "correctAnswer": 3,
    "justification": `A resposta correta é <strong>Erro</strong>.<br>
    Explicação:
    - Em PHP, parâmetros com valores padrão devem estar no final da lista de parâmetros.
    - Como <code>$a</code> possui um valor padrão antes de <code>$b</code>, ocorre um erro de sintaxe.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/functions.arguments.php#functions.arguments.default",
      "https://www.w3schools.com/php/php_functions.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o código a seguir e indique a saída:<br><br>
    <pre><code>
    &lt;?php
    $x = null ?? "default";
    echo $x;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "null",
      "default",
      "Erro",
      ""
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>default</strong>.<br>
    Explicação:
    - O operador de coalescência nula (<code>??</code>) retorna o valor à direita se o valor à esquerda é <code>null</code>.
    - Como <code>$x</code> é <code>null</code>, o valor "default" é exibido.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.null-coalesce-op",
      "https://www.w3schools.com/php/php7_new_features.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o código abaixo:<br><br>
    <pre><code>
    &lt;?php
    $arr = [1, 2, 3];
    unset($arr[1]);
    echo count($arr);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "2",
      "3",
      "Erro",
      "1"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>2</strong>.<br>
    Explicação:
    - A função <code>unset()</code> remove o elemento com índice <code>1</code>, deixando o array com dois elementos restantes.
    - Embora <code>count()</code> retorne 2, o índice <code>1</code> está vazio, e os outros índices permanecem inalterados.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.unset.php",
      "https://www.w3schools.com/php/func_array_unset.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o código e indique a saída:<br><br>
    <pre><code>
    &lt;?php
    $x = 5;
    echo $x++ + ++$x;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "correctAnswer": 2,
    "justification": `A resposta correta é <strong>12</strong>.<br>
    Explicação:
    - No código, <code>$x++</code> primeiro retorna <code>5</code>, e <code>++$x</code> incrementa antes de retornar <code>7</code>.
    - A soma é <code>5 + 7 = 12</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.increment.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o código PHP:<br><br>
    <pre><code>
    &lt;?php
    $a = "true";
    if ($a === true) {
        echo "Igual";
    } else {
        echo "Diferente";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Igual",
      "Diferente",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Diferente</strong>.<br>
    Explicação:
    - <code>$a</code> é uma string e não é idêntico a um valor booleano <code>true</code> (usando <code>===</code>).
    - Portanto, a condição resulta em <code>false</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código abaixo?<br><br>
    <pre><code>
    &lt;?php
    $x = "5.5";
    $y = (int) $x;
    echo $y;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "5",
      "5.5",
      "Erro",
      "6"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>5</strong>.<br>
    Explicação:
    - O casting para <code>int</code> remove a parte decimal, resultando em <code>5</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.integer.php",
      "https://www.w3schools.com/php/php_datatypes.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte código:<br><br>
    <pre><code>
    &lt;?php
    $arr = ["1", "2", "3"];
    array_shift($arr);
    echo implode(",", $arr);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "1,2,3",
      "2,3",
      "3",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>2,3</strong>.<br>
    Explicação:
    - <code>array_shift()</code> remove o primeiro elemento de um array.
    - Então, <code>implode(",", $arr)</code> exibe "2,3".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.array-shift.php",
      "https://www.w3schools.com/php/func_array_shift.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o seguinte código em PHP:<br><br>
    <pre><code>
    &lt;?php
    $a = 0;
    $b = $a ?: "valor padrão";
    echo $b;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "0",
      "valor padrão",
      "null",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>valor padrão</strong>.<br>
    Explicação:
    - O operador <code>?:</code> retorna o segundo valor se o primeiro é considerado "false".
    - Como <code>$a</code> é <code>0</code> (false), <code>$b</code> recebe "valor padrão".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte código em PHP:<br><br>
    <pre><code>
    &lt;?php
    $a = 10;
    $b = "10";
    if ($a == $b) {
        echo "Iguais";
    } else {
        echo "Diferentes";
    }
    ?>
    </code></pre>
    Qual será a saída do código acima?`,
    "type": "radio",
    "options": [
      "Iguais",
      "Diferentes",
      "Erro",
      "Null"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Iguais</strong>.<br>
    Explicação:
    - O operador <code>==</code> compara os valores, mas ignora o tipo.
    - Portanto, <code>10</code> e <code>"10"</code> são considerados iguais.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código abaixo, qual será a saída?<br><br>
    <pre><code>
    &lt;?php
    $a = 0;
    $b = "false";
    if ($a === $b) {
        echo "Iguais";
    } else {
        echo "Diferentes";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Iguais",
      "Diferentes",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Diferentes</strong>.<br>
    Explicação:
    - O operador <code>===</code> verifica tanto o valor quanto o tipo.
    - Como <code>$a</code> é um inteiro e <code>$b</code> é uma string, eles não são considerados iguais.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.comparison.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o código e indique o resultado:<br><br>
    <pre><code>
    &lt;?php
    $arr = [1, 2, 3];
    $arr[] = 4;
    echo count($arr);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "3",
      "4",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>4</strong>.<br>
    Explicação:
    - O operador <code>[]</code> adiciona um elemento ao final do array.
    - Como o array tinha 3 elementos, após adicionar mais um, ele passa a ter 4.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.count.php",
      "https://www.w3schools.com/php/func_array_count.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código abaixo?<br><br>
    <pre><code>
    &lt;?php
    function soma(&$a) {
        $a += 5;
    }

    $x = 10;
    soma($x);
    echo $x;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "10",
      "15",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>15</strong>.<br>
    Explicação:
    - Como <code>$a</code> é passado por referência, a alteração feita dentro da função <code>soma()</code> afeta a variável original <code>$x</code>.
    - O valor final de <code>$x</code> é <code>10 + 5 = 15</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.references.php",
      "https://www.w3schools.com/php/php_functions.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte código:<br><br>
    <pre><code>
    &lt;?php
    $a = [1, 2, 3];
    $b = $a;
    $b[] = 4;
    echo count($a);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "3",
      "4",
      "Erro",
      "Null"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>3</strong>.<br>
    Explicação:
    - Em PHP, ao usar <code>=</code> entre arrays, uma cópia é feita.
    - Alterar <code>$b</code> não afeta <code>$a</code>, então <code>count($a)</code> continua sendo 3.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.array.php",
      "https://www.w3schools.com/php/php_arrays.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Observe o código a seguir e indique a saída:<br><br>
    <pre><code>
    &lt;?php
    $a = "5";
    $b = 10;
    echo $a + $b;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "510",
      "15",
      "5",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>15</strong>.<br>
    Explicação:
    - PHP converte automaticamente <code>$a</code> para um inteiro antes de somar.
    - Portanto, a operação é <code>5 + 10 = 15</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.string.php#language.types.string.conversion",
      "https://www.w3schools.com/php/php_datatypes.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o seguinte código e indique a saída:<br><br>
    <pre><code>
    &lt;?php
    $a = 5;
    $b = 0;
    if ($a && $b) {
        echo "Verdadeiro";
    } else {
        echo "Falso";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Verdadeiro",
      "Falso",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Falso</strong>.<br>
    Explicação:
    - No PHP, <code>$a && $b</code> avalia como <code>false</code> se qualquer um dos operandos for "false".
    - Como <code>$b</code> é <code>0</code> (false), a condição resulta em <code>false</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.logical.php",
      "https://www.w3schools.com/php/php_operators.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte trecho de código:<br><br>
    <pre><code>
    &lt;?php
    $a = null;
    $b = "valor";
    $c = $a ?? $b;
    echo $c;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "null",
      "valor",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>valor</strong>.<br>
    Explicação:
    - O operador de coalescência nula (<code>??</code>) retorna o valor à direita se o valor à esquerda é <code>null</code>.
    - Como <code>$a</code> é <code>null</code>, <code>$c</code> recebe o valor "valor".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.null-coalesce-op",
      "https://www.w3schools.com/php/php7_new_features.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o código PHP abaixo:<br><br>
    <pre><code>
    &lt;?php
    $a = "5 apples";
    $b = 2 + $a;
    echo $b;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "2",
      "7",
      "5 apples2",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>7</strong>.<br>
    Explicação:
    - PHP tenta converter <code>$a</code> para um número antes de realizar a soma.
    - O valor "5 apples" é interpretado como <code>5</code>, então <code>2 + 5 = 7</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.string.php#language.types.string.conversion",
      "https://www.w3schools.com/php/php_datatypes.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código abaixo, qual será a saída?<br><br>
    <pre><code>
    &lt;?php
    $a = "0";
    if ($a == false) {
        echo "Falso";
    } else {
        echo "Verdadeiro";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Verdadeiro",
      "Falso",
      "Erro",
      "Null"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>Falso</strong>.<br>
    Explicação:
    - No PHP, <code>"0"</code> é considerado "falsy", então <code>$a == false</code> é verdadeiro.
    - Portanto, o código exibe "Falso".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.boolean.php",
      "https://www.w3schools.com/php/php_datatypes.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código abaixo, qual será a saída?<br><br>
    <pre><code>
    &lt;?php
    $a = 1;
    $$a = 2;
    echo $a . " " . $$a;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "1 2",
      "1 1",
      "1 0",
      "Erro"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>1 2</strong>.<br>
    Explicação:
    - Usando o operador <code>$$</code>, criamos uma variável dinâmica com o nome <code>$1</code> e valor <code>2</code>.
    - O código exibe <code>1</code> para <code>$a</code> e <code>2</code> para <code>$$a</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.variables.variable.php",
      "https://www.w3schools.com/php/php_variables.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código a seguir?<br><br>
    <pre><code>
    &lt;?php
    $a = "foo";
    $foo = "bar";
    echo $$a;
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "foo",
      "bar",
      "null",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>bar</strong>.<br>
    Explicação:
    - Usando <code>$$</code>, PHP interpreta <code>$$a</code> como <code>$foo</code>, que tem o valor "bar".
    - Assim, o código exibe "bar".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.variables.variable.php",
      "https://www.w3schools.com/php/php_variables.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual é o resultado do seguinte código em PHP?<br><br>
    <pre><code>
    &lt;?php
    $arr = array('PHP', 'is', 'awesome');
    echo implode('-', $arr);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "PHP is awesome",
      "PHP-is-awesome",
      "PHP-is-awesome-",
      "PHP is awesome-"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>PHP-is-awesome</strong>.<br>
    Explicação:
    - A função <code>implode()</code> junta os elementos de um array com o delimitador especificado.
    - Neste caso, os elementos são unidos com "-", resultando em "PHP-is-awesome".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.implode.php",
      "https://www.w3schools.com/php/func_string_implode.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código abaixo, qual será a saída?<br><br>
    <pre><code>
    &lt;?php
    $text = "Hello world";
    $arr = explode(' ', $text);
    echo $arr[1];
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Hello",
      "world",
      "Hello world",
      "Erro"
    ],
    "correctAnswer": 1,
    "justification": `A resposta correta é <strong>world</strong>.<br>
    Explicação:
    - A função <code>explode()</code> divide a string em um array com base no delimitador.
    - <code>$arr[1]</code> se refere ao segundo elemento, que é "world".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.explode.php",
      "https://www.w3schools.com/php/func_string_explode.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Analise o código abaixo e indique o resultado:<br><br>
    <pre><code>
    &lt;?php
    $a = 1;
    if ($b = $a) {
        echo "Verdadeiro";
    } else {
        echo "Falso";
    }
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Verdadeiro",
      "Falso",
      "Erro",
      "Null"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Verdadeiro</strong>.<br>
    Explicação:
    - A atribuição <code>$b = $a</code> retorna o valor de <code>$a</code>, que é <code>1</code> (verdadeiro).
    - Portanto, o bloco <code>if</code> é considerado verdadeiro.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.operators.assignment.php",
      "https://www.w3schools.com/php/php_if_else.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código abaixo, qual será a saída?<br><br>
    <pre><code>
    &lt;?php
    $a = "PHP";
    $b = "is awesome";
    echo "$a and $b";
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "PHP and is awesome",
      "PHP and $b",
      "$a and is awesome",
      "Erro"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>PHP and is awesome</strong>.<br>
    Explicação:
    - Usando aspas duplas, o PHP expande as variáveis dentro da string.
    - <code>$a</code> e <code>$b</code> são substituídos pelos seus valores.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.string.php#language.types.string.parsing",
      "https://www.w3schools.com/php/php_strings.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Considere o seguinte código:<br><br>
    <pre><code>
    &lt;?php
    $a = "Hello";
    $b = "world";
    echo "{$a} {$b}";
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "Hello world",
      "{$a} {$b}",
      "Hello {$b}",
      "Erro"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>Hello world</strong>.<br>
    Explicação:
    - Ao usar chaves <code>{}</code>, o PHP expande as variáveis dentro da string, produzindo "Hello world".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/language.types.string.php#language.types.string.parsing",
      "https://www.w3schools.com/php/php_strings.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Qual será a saída do código a seguir?<br><br>
    <pre><code>
    &lt;?php
    $list = array("a", "b", "c");
    echo implode("-", $list) . " ";
    echo implode($list, ",");
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "a-b-c a,b,c",
      "a,b,c a-b-c",
      "a-b-c a-b-c"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>a-b-c a,b,c</strong>.<br>
    Explicação:
    - <code>implode("-", $list)</code> usa "-" como delimitador.
    - <code>implode($list, ",")</code> usa "," como delimitador.
    - A saída é "a-b-c a,b,c".<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.implode.php",
      "https://www.w3schools.com/php/func_string_implode.asp"
    ],
  "screenshots": [],
  "videos": []
  },
  {
    "question": `Dado o código PHP abaixo, qual será a saída?<br><br>
    <pre><code>
    &lt;?php
    $a = array("Hello", "World", "!");
    $b = implode(" ", $a);
    $c = explode(" ", $b);
    echo count($c);
    ?>
    </code></pre>
    `,
    "type": "radio",
    "options": [
      "3",
      "2",
      "1",
      "Erro"
    ],
    "correctAnswer": 0,
    "justification": `A resposta correta é <strong>3</strong>.<br>
    Explicação:
    - <code>implode()</code> junta o array <code>$a</code> em uma string "Hello World !".
    - <code>explode()</code> separa a string em um array de três elementos, resultando em uma contagem de <code>3</code>.<br>`,
    "referenceLinks": [
      "https://www.php.net/manual/en/function.implode.php",
      "https://www.php.net/manual/en/function.explode.php"
    ],
  "screenshots": [],
  "videos": []
  },
  {
  "question": "Com respeito à linguagem de programação PHP, julgue o item a seguir.\n\nPara se declarar variáveis em PHP, é utilizado cifrão ($) seguido pelo nome da variável; os nomes das variáveis são case-sensitive.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 0,
  "justification": "Em PHP, as variáveis são declaradas usando o símbolo de cifrão ($) seguido pelo nome da variável, e os nomes das variáveis são de fato case-sensitive, ou seja, `$variavel` e `$Variavel` são considerados variáveis distintas.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.variables.basics.php"
  ]
},
{
  "question": "Com respeito à linguagem de programação PHP, julgue o item a seguir.\n\nA função echo é capaz de mostrar somente uma string, enquanto a função print pode mostrar uma ou várias strings.",
  "type": "radio",
  "options": [
    "Certo",
    "Errado"
  ],
  "correctAnswer": 1,
  "justification": "A afirmação está incorreta. Em PHP, a função `echo` pode exibir uma ou várias strings, separadas por vírgulas. Já a função `print` pode mostrar apenas uma string por vez e retorna o valor `1`, diferentemente de `echo`, que não retorna nenhum valor.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.echo.php",
    "https://www.php.net/manual/pt_BR/function.print.php"
  ]
},
{
  "question": "Na linguagem de programação PHP, a declaração que produz um erro `E_COMPILE_ERROR`, o que encerra a execução do script, é a",
  "type": "radio",
  "options": [
    "readfile",
    "include",
    "openfile",
    "loadfile",
    "require"
  ],
  "correctAnswer": 4,
  "justification": "Em PHP, a declaração `require` causa um erro `E_COMPILE_ERROR` se o arquivo especificado não puder ser incluído, o que encerra a execução do script. Diferentemente, a declaração `include` apenas gera um aviso (`E_WARNING`) caso o arquivo não seja encontrado e permite que o script continue a execução.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.require.php",
    "https://www.php.net/manual/pt_BR/function.include.php"
  ]
},
{
  "question": "Um desenvolvedor web de uma determinada empresa escreveu o seguinte código utilizando a linguagem de programação PHP na versão 8.1.2 (configuração padrão):\n\n<pre><code>&lt;?php\nfunction MensagemDeApresentacao($IdentificacaoPadrao = \"prezado(a) cliente\", $Nome)\n{\n    return \"Seja bem vindo $IdentificacaoPadrao $Nome ao módulo administrativo do nosso sistema.\";\n}\n\necho MensagemDeApresentacao(\"Carlos Alberto\");\n?&gt;\n</code></pre>\n\nAo executar o código em questão a aplicação",
  "type": "radio",
  "options": [
    "funcionará corretamente exibindo a mensagem 'Seja bem-vindo prezado(a) cliente ao módulo administrativo do nosso sistema.'",
    "funcionará corretamente exibindo a mensagem 'Seja bem-vindo prezado(a) cliente Carlos Alberto ao módulo administrativo do nosso sistema.'",
    "não funcionará e será gerado um erro fatal devido à utilização incorreta da carga de parâmetros, onde o argumento opcional foi utilizado antes do argumento obrigatório.",
    "funcionará exibindo a mensagem 'Seja bem-vindo prezado(a) cliente ao módulo administrativo do nosso sistema'; porém, será gerada uma mensagem de advertência do compilador de erro na carga de parâmetros do método."
  ],
  "correctAnswer": 2,
  "justification": "Em PHP, argumentos opcionais devem ser colocados após os argumentos obrigatórios. Neste código, `$IdentificacaoPadrao` é opcional e foi definido antes de `$Nome`, que é obrigatório, o que resulta em um erro fatal. Para que o código funcione corretamente, `$Nome` deveria estar antes de `$IdentificacaoPadrao` na definição dos parâmetros da função.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/functions.arguments.php"
  ]
},
{
  "question": "Com base no código precedente, desenvolvido em PHP, assinale a opção que corresponde ao resultado a ser apresentado ao final da execução desse código.\n\n<pre><code>&lt;?php\n$x = function($a) {\n    return $a ** 2;\n};\n$y = range(3, 5);\n$y = array_map($x, $y);\nprint implode(' ', $y);\n?&gt;\n</code></pre>",
  "type": "radio",
  "options": [
    "4",
    "8",
    "3 4 5",
    "6 8 10",
    "9 16 25"
  ],
  "correctAnswer": 4,
  "justification": "No código fornecido:\n1. A função anônima `function($a) { return $a ** 2; }` calcula o quadrado do valor fornecido.\n2. A função `range(3, 5)` cria um array `[3, 4, 5]`.\n3. `array_map($x, $y)` aplica a função `$x` a cada elemento de `$y`, resultando em `[9, 16, 25]`.\n4. `implode(' ', $y)` converte o array `[9, 16, 25]` em uma string separada por espaços.\n\nPortanto, o resultado final exibido será `9 16 25`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.range.php",
    "https://www.php.net/manual/pt_BR/function.array-map.php",
    "https://www.php.net/manual/pt_BR/function.implode.php"
  ]
},
{
  "question": "A linguagem PHP é amplamente utilizada no desenvolvimento Web, e um de seus recursos amplamente utilizados são as sessões. Assinale a alternativa que apresenta a forma correta de se iniciar uma sessão em PHP.",
  "type": "radio",
  "options": [
    "start_session()",
    "begin_session()",
    "session_init()",
    "session_start()"
  ],
  "correctAnswer": 3,
  "justification": "Em PHP, a função correta para iniciar uma sessão é `session_start()`. Essa função inicia uma nova sessão ou retoma uma sessão existente, permitindo o uso de variáveis de sessão para armazenar dados persistentes entre requisições do usuário.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.session-start.php"
  ]
},
{
  "question": "No desenvolvimento de um sítio dinâmico em PHP com páginas diferentes, cada uma com seu próprio conteúdo exclusivo, para manter o código organizado e reutilizável, deve-se separar o código de cada página em arquivos individuais. Nesse contexto, assinale a opção em que é indicada a função que deve ser usada para incluir o conteúdo de um arquivo externo em um script PHP de modo a inserir o código de cada página.",
  "type": "radio",
  "options": [
    "readExternal()",
    "import()",
    "readFile()",
    "include()",
    "loadFile()"
  ],
  "correctAnswer": 3,
  "justification": "Em PHP, a função `include()` é usada para inserir o conteúdo de um arquivo externo em um script PHP. Isso permite organizar o código em arquivos separados e reutilizar código em diferentes partes do site. `include()` tenta incluir o arquivo especificado e gera um aviso (`E_WARNING`) se o arquivo não for encontrado, mas permite que o script continue a execução.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.include.php"
  ]
},
{
  "question": "Considere a função `strlen(\"PHP é uma linguagem poderosa!\")` em PHP.\n\nAssinale a opção em que é corretamente indicado o resultado da função precedente em PHP.",
  "type": "radio",
  "options": [
    "WARNING",
    "ERROR",
    "25",
    "27",
    "29"
  ],
  "correctAnswer": 3,
  "justification": "A função `strlen()` em PHP retorna o número de caracteres em uma string, incluindo espaços e pontuação. No caso da string \"PHP é uma linguagem poderosa!\", há 27 caracteres. Portanto, o resultado é `27`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.strlen.php"
  ]
},
{
  "question": "Para desenvolvimento web, uma das linguagens mais utilizadas é a linguagem PHP, isto por ser uma linguagem Open Source, ou seja, de código aberto. Desta forma, quanto utilizamos os operadores ‘==’ e ‘===’, assinale a alternativa que descreva as diferenças entre estes:",
  "type": "radio",
  "options": [
    "‘==’ compara apenas valores, enquanto ‘===’ compara apenas tipos",
    "‘==’ compara apenas tipos, enquanto ‘===’ compara apenas valores",
    "‘==’ compara apenas valores, enquanto ‘===’ compara valores e tipos",
    "‘==’ compara apenas arrays direcionais, enquanto ‘===’ compara apenas strings",
    "‘==’ e ‘===’ tem a mesma finalidade, na comparação de apenas valores numéricos"
  ],
  "correctAnswer": 2,
  "justification": "Em PHP, o operador `==` compara apenas os valores, realizando uma conversão de tipos se necessário (coerção), enquanto o operador `===` compara tanto os valores quanto os tipos, garantindo que ambos sejam exatamente iguais em valor e tipo. Isso significa que `5 == '5'` é `true`, mas `5 === '5'` é `false` porque os tipos diferem.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.operators.comparison.php"
  ]
},
{
  "question": "Em uma classe PHP podemos definir diversos métodos, um destes é o `__invoke`, desta forma, assinale a alternativa que apresenta a finalidade deste método em uma classe PHP:",
  "type": "radio",
  "options": [
    "permitir a criação de um objeto abstrato que não deve possuir atributos",
    "permitir que a invocação de uma classe seja realizada através de uma interface tipada",
    "permitir que uma variável seja inicializada sem a definição de tipo",
    "permitir que uma classe seja criada utilizando uma interface abstrata",
    "permitir que uma classe seja usada como uma função"
  ],
  "correctAnswer": 4,
  "justification": "Em PHP, o método mágico `__invoke()` permite que uma instância de uma classe seja chamada como se fosse uma função. Quando o método `__invoke()` é definido em uma classe, ao tentar 'chamar' o objeto da classe como uma função, o PHP executa o método `__invoke()`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.oop5.magic.php#object.invoke"
  ]
},
{
  "question": "A evolução das tecnologias traz diversos recursos para o desenvolvimento de sistemas, para a linguagem PHP não é diferente, desta forma, assinale a principal finalidade do Composer em projetos PHP:",
  "type": "radio",
  "options": [
    "gerenciar arquitetura de dados",
    "gerenciar dependências de integridade relacional",
    "gerenciar dependências do sistema operacional",
    "gerenciar dependências de pacotes",
    "gerenciar a arquitetura do projeto"
  ],
  "correctAnswer": 3,
  "justification": "O Composer é uma ferramenta de gerenciamento de dependências para projetos PHP. Sua principal finalidade é gerenciar pacotes e bibliotecas necessários para o projeto, facilitando a instalação, atualização e carregamento automático dessas dependências. Ele permite que os desenvolvedores definam as bibliotecas de que o projeto precisa e garante que as versões corretas sejam usadas.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://getcomposer.org/",
    "https://www.php.net/manual/pt_BR/book.composer.php"
  ]
},
{
  "question": "Considerando a linguagem PHP, a função utilizada para contar elementos de um array é:",
  "type": "radio",
  "options": [
    "count($array)",
    "countArray($array)",
    "arrayCount($array)",
    "lengthOf($array)"
  ],
  "correctAnswer": 0,
  "justification": "Em PHP, a função `count($array)` é usada para contar o número de elementos em um array. Essa função retorna a quantidade de itens no array passado como argumento.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.count.php"
  ]
},
{
  "question": "Utilizando a linguagem PHP, é possível realizar a criação de funções, desta forma, assinale a alternativa correta de se definir uma função em PHP.",
  "type": "radio",
  "options": [
    "def function minhaFuncao() {}",
    "function minhaFuncao() => {};",
    "new function minhaFuncao() {}",
    "function minhaFuncao() {}"
  ],
  "correctAnswer": 3,
  "justification": "Em PHP, a sintaxe correta para definir uma função é `function minhaFuncao() {}`. A palavra-chave `function` é seguida pelo nome da função e um par de parênteses para os parâmetros (caso existam), seguido por chaves para o corpo da função.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/functions.user-defined.php"
  ]
},
{
  "question": "“É uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web. Ela pode ser utilizada para múltiplos propósitos, seja para geração de HTML, desenvolvimento de sistemas web, consumo e desenvolvimento de APIs de diversos tipos, desenvolvimento de aplicações para console, manipulação de arquivos entre outras”. A afirmativa faz referência à linguagem de programação:",
  "type": "radio",
  "options": [
    "JAVA",
    "CSS",
    "DELPHI",
    "PHP",
    "HTML"
  ],
  "correctAnswer": 3,
  "justification": "A descrição refere-se à linguagem PHP, que é uma linguagem de script open source amplamente utilizada no desenvolvimento web e capaz de gerar HTML dinâmico, manipular arquivos, consumir e criar APIs, além de permitir o desenvolvimento de aplicações de console e outros tipos de sistemas.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/intro-whatis.php"
  ]
},
{
  "question": "A linguagem PHP possui recurso que permite que parte de uma linha de código seja transformada em comentário.\n\nAssinale a alternativa com a sintaxe correta utilizando tal recurso e que fará a variável x assumir o valor 2.",
  "type": "radio",
  "options": [
    "$x = 3 @ -1 @ -1;",
    "$x = 3 # -1 # -1;",
    "$x = 3 /* -1 */ - 1;",
    "$x = 3 <! -1 !> -1;",
    "$x = 3 // -1 // -1;"
  ],
  "correctAnswer": 2,
  "justification": "Em PHP, o operador de comentário `/* */` permite ignorar uma parte do código em uma linha. Na expressão `$x = 3 /* -1 */ - 1;`, o trecho `/* -1 */` é ignorado, então a operação realizada é `3 - 1`, resultando no valor `2` para a variável `$x`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.basic-syntax.comments.php"
  ]
},
{
  "question": "Na linguagem PHP, as variáveis são representadas pelo caractere _____ seguido pelo nome da variável.\n\nAssinale a alternativa que preenche corretamente a lacuna do trecho acima.",
  "type": "radio",
  "options": [
    "%",
    "$",
    "&",
    "!",
    "@"
  ],
  "correctAnswer": 1,
  "justification": "Em PHP, as variáveis são precedidas pelo caractere `$` seguido pelo nome da variável. Esse símbolo é usado para indicar que o nome subsequente é uma variável.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.variables.basics.php"
  ]
},
{
  "question": "Considere o seguinte trecho de código em PHP abaixo:\n\n<pre><code>1 &lt;?php\n\n2 $nomes = [\"João\", \"Maria\", \"Carlos\"];\n\n3 $idades = [30, 28, 35];\n\n4 for (i = 0; i &lt; count($nomes); i++) {\n\n5 echo \"$nomes[i] tem $idades[i] anos. &lt;br&gt;\";\n\n6 }\n\n7 ?&gt;\n</code></pre>\n\nAssinale a alternativa que contém o(s) erro(s) existente no código que o impede de ser executado:",
  "type": "radio",
  "options": [
    "Ausência de aspas duplas \"\" na linha 3.",
    "Falta do cifrão '$' nas linhas 4 e 5.",
    "Falta de colchetes ']' em alguma linha.",
    "A falta do termo 'php' na linha 7.",
    "Falta de ponto e vírgula ';' em alguma linha."
  ],
  "correctAnswer": 1,
  "justification": "O código contém um erro nas linhas 4 e 5 devido à falta do símbolo `$` antes da variável `i`. Em PHP, todas as variáveis devem começar com `$`. Portanto, a linha 4 deve ser `for ($i = 0; $i < count($nomes); $i++) {` e na linha 5, os índices devem ser `{$nomes[$i]}` e `{$idades[$i]}` para funcionar corretamente. A resposta correta é que falta o cifrão nas variáveis de controle nas linhas 4 e 5.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.variables.basics.php"
  ]
},
{
  "question": "Observe o seguinte trecho de código escrito em PHP.\n\n<pre><code>$txt = 'Campinas';\n\nunset($txt);\n\nvar_dump($txt);\n</code></pre>\n\nÉ correto afirmar que a função `var_dump` irá retornar:",
  "type": "radio",
  "options": [
    "String",
    "NULL",
    "Campinas",
    "txt",
    "8"
  ],
  "correctAnswer": 1,
  "justification": "A função `unset($txt);` remove a variável `$txt`, então ela deixa de existir no contexto. Quando `var_dump($txt);` é chamada após o `unset`, a variável não tem valor atribuído, e `var_dump` exibe `NULL`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.unset.php",
    "https://www.php.net/manual/pt_BR/function.var-dump.php"
  ]
},
{
  "question": "Considere as afirmações sobre a linguagem de programação PHP:\n\nI. A linguagem de programação PHP é uma linguagem que deve ser interpretada.\n\nII. O PHP permite a criação de objetos.\n\nIII. As variáveis em PHP são representadas por um cifrão ($) seguido pelo nome da variável.\n\nEstá(ão) correta(s):",
  "type": "radio",
  "options": [
    "Apenas I.",
    "Apenas II.",
    "Apenas III.",
    "Apenas II e III.",
    "Apenas I, II e III."
  ],
  "correctAnswer": 4,
  "justification": "Todas as afirmações estão corretas:\n- I: PHP é uma linguagem interpretada, pois seu código é processado em tempo de execução no servidor.\n- II: PHP permite a criação e manipulação de objetos, oferecendo suporte à programação orientada a objetos.\n- III: Em PHP, as variáveis são representadas pelo símbolo `$` seguido pelo nome da variável.\n\nPortanto, a resposta correta é: 'Apenas I, II e III'.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/intro-whatis.php",
    "https://www.php.net/manual/pt_BR/language.oop5.php",
    "https://www.php.net/manual/pt_BR/language.variables.basics.php"
  ]
},
{
  "question": "Observe o seguinte código escrito na linguagem PHP.\n\n<pre><code>&lt;?php\n\n$v = array(2, 3, 5);\n\nvar_dump($v);\n\n?&gt;\n</code></pre>\n\nO valor impresso pela função `var_dump` será:",
  "type": "radio",
  "options": [
    "[0]=> 2 [1]=> 3 [2]=> 5",
    "array(3) { [0]=> int(2) [1]=> int(3) [2]=> int(5) }",
    "array(3)",
    "(2, 3, 5)",
    "array(int, int, int)"
  ],
  "correctAnswer": 1,
  "justification": "A função `var_dump($v);` exibe a estrutura e os valores do array, indicando o tipo e tamanho do array, bem como o tipo e valor de cada elemento. Neste caso, a saída será `array(3) { [0]=> int(2) [1]=> int(3) [2]=> int(5) }`, que mostra que `$v` é um array de 3 elementos, com valores `2`, `3` e `5` do tipo `int`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.var-dump.php"
  ]
},
{
  "question": "Murilo, analista de sistemas, escreveu um código em PHP, que incluía o trecho a seguir:\n\nLinha 1: $x = -1;\nLinha 2: function funcao($y, $z) {\nLinha 3:\nLinha 4: $retorno = $x*$y + 3*$z;\nLinha 5:\nLinha 6: return $retorno;\nLinha 7: }\nLinha 8:\nLinha 9: echo funcao(3,5);\n\nEle pretendia que, ao executá-lo, fosse exibido o valor 12. Para isso, Murilo alterou uma linha do código.\n\nA linha alterada ficou da seguinte maneira:",
  "type": "radio",
  "options": [
    "Linha 3: var $x;",
    "Linha 3: global $x;",
    "Linha 1: var $x = -1;",
    "Linha 1: global $x = -1;",
    "Linha 3: global $x = -1."
  ],
  "correctAnswer": 1,
  "justification": "Para que a função `funcao` acesse a variável `$x` definida fora de seu escopo, Murilo deve declarar `global $x;` na linha 3, tornando `$x` acessível dentro da função. A expressão `global $x;` permite que a função use o valor de `$x` definido fora dela.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.variables.scope.php",
    "https://www.php.net/manual/pt_BR/language.variables.global.php"
  ]
},
{
  "question": "Em PHP, a palavra-chave usada para definir uma classe que não pode ser instanciada diretamente, servindo apenas como uma classe base, é:",
  "type": "radio",
  "options": [
    "‘final’",
    "‘static’",
    "‘private’",
    "‘abstract’"
  ],
  "correctAnswer": 3,
  "justification": "Em PHP, a palavra-chave `abstract` é usada para definir uma classe abstrata. Uma classe abstrata não pode ser instanciada diretamente e serve apenas como uma base para outras classes que a herdam. Classes abstratas permitem definir métodos que devem ser implementados nas subclasses, oferecendo uma estrutura para herança e polimorfismo.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.oop5.abstract.php"
  ]
},
{
  "question": "PHP Data Objects (PDO) oferece uma interface leve e consistente para acessar bancos de dados em PHP. A forma atual para estabelecer uma conexão com um banco de dados MySQL usando PDO em PHP é:",
  "type": "radio",
  "options": [
    "‘$conn = mysql_connect(\"hostname\", \"username\", \"password\", \"database_name\");’",
    "‘$conn = new PDO(\"mysql:host=hostname;dbname=database_name\", \"username\", \"password\")",
    "‘$conn = mysqli_connect(\"hostname\", \"username\", \"password\", \"database_name\");’",
    "‘$conn = connect_to_mysql(\"hostname\", \"database_name\", \"username\", \"password\");’"
  ],
  "correctAnswer": 1,
  "justification": "A maneira correta de estabelecer uma conexão com um banco de dados MySQL usando PDO em PHP é através do comando `$conn = new PDO(\"mysql:host=hostname;dbname=database_name\", \"username\", \"password\")`. Este formato usa a classe PDO para criar uma conexão com o banco de dados especificando o tipo de banco (`mysql`), o `host`, o nome do banco de dados (`dbname`), o `username` e a `password`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/book.pdo.php",
    "https://www.php.net/manual/pt_BR/pdo.construct.php"
  ]
},
{
  "question": "O padrão de arquitetura Modelo-Visão-Controlador (MVC) é amplamente utilizado no desenvolvimento de aplicações web para separar a lógica de negócios da interface do usuário, facilitando a manutenção e a escalabilidade das aplicações. Em uma aplicação PHP, que utiliza o padrão MVC, as rotas são geralmente definidas:",
  "type": "radio",
  "options": [
    "através de funções anônimas no arquivo de configuração do banco de dados.",
    "como métodos dentro dos modelos.",
    "em um arquivo ou conjunto de arquivos específicos para rotas, mapeando URLs a controladores e as ações.",
    "dentro dos arquivos de visão, utilizando tags especiais de template."
  ],
  "correctAnswer": 2,
  "justification": "Em uma aplicação que utiliza o padrão MVC, as rotas são geralmente definidas em um arquivo ou conjunto de arquivos específicos para rotas. Estes arquivos mapeiam URLs para os controladores e ações correspondentes, organizando o fluxo de navegação da aplicação. Isso facilita o gerenciamento das rotas e mantém o código bem estruturado e modular.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.oop5.mvc.php",
    "https://laravel.com/docs/8.x/routing"
  ]
},
{
  "question": "O framework Slim é uma ferramenta PHP que facilita a criação de aplicações web e APIs simples e rápidas, seguindo o padrão PSR-7 para mensagens HTTP, incluindo o gerenciamento de requisições, rotas, dependências, middleware e respostas, além da integração com bancos de dados. No framework Slim, uma rota é definida para lidar com uma requisição GET para o endpoint \"/produtos\" por:",
  "type": "radio",
  "options": [
    "‘$app->endpoint('GET', '/produtos', function () { /* código aqui */ });’",
    "‘$app->route('/produtos', 'GET', function () { /* código aqui */ });’",
    "‘$app->request('GET', '/produtos', function () { /* código aqui */ });’",
    "‘$app->get('/produtos', function () { /* código aqui */ });’"
  ],
  "correctAnswer": 3,
  "justification": "No framework Slim, uma rota para uma requisição GET é definida utilizando `$app->get('/produtos', function () { /* código aqui */ });`. O método `get` é usado para definir rotas que respondem a requisições HTTP GET. O Slim segue essa sintaxe para manter o código limpo e organizado.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.slimframework.com/docs/v4/"
  ]
},
{
  "question": "No PHP7, quando implementamos o conceito de polimorfismo, qual das seguintes alternativas melhor descreve sua aplicação prática?",
  "type": "radio",
  "options": [
    "Utilizar múltiplas variáveis com o mesmo nome dentro de diferentes funções.",
    "Criar funções que aceitam diferentes tipos de arrays como argumentos.",
    "Definir classes que podem ser estendidas para modificar métodos existentes ou adicionar novos.",
    "Permitir que objetos de diferentes classes sejam tratados como instâncias de uma classe pai através de interfaces ou classes abstratas."
  ],
  "correctAnswer": 3,
  "justification": "No PHP, o polimorfismo é implementado principalmente ao permitir que objetos de diferentes classes sejam tratados como instâncias de uma mesma classe pai, através do uso de interfaces ou classes abstratas. Dessa forma, uma função pode receber um objeto que implemente uma interface ou estenda uma classe abstrata e, ao chamá-la, diferentes implementações podem ser executadas dependendo da classe específica do objeto passado.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/language.oop5.polymorphism.php",
    "https://www.php.net/manual/pt_BR/language.oop5.interfaces.php"
  ]
},
{
  "question": "Observe o código PHP a seguir.\n\n<pre><code>&lt;?php\nfunction funcao(&$vetor) {\n    $tamanho = count($vetor);\n    for ($i = 0; $i &lt; $tamanho; $i++) {\n        for ($j = 0; $j &lt; $tamanho - 1 - $i; $j++) {\n            if ($vetor[$j] &gt; $vetor[$j + 1]) {\n                $temp = $vetor[$j];\n                $vetor[$j] = $vetor[$j + 1];\n                $vetor[$j + 1] = $temp;\n            }\n        }\n    }\n}\n\n$vetor = array(5, 3, 8, 2, 7);\nfuncao($vetor);\n\necho \"Vetor: \";\nforeach ($vetor as $valor) {\n    echo $valor . \" \";\n}\n?&gt;</code></pre>\n\nQual será o valor de saída do vetor após a execução do seguinte código PHP?",
  "type": "radio",
  "options": [
    "Vetor: 8 7 5 3 2",
    "Vetor: 2 3 5 7 8",
    "Vetor: 5 3 8 2 7",
    "Vetor: 2 3 5 8 7"
  ],
  "correctAnswer": 1,
  "justification": "O código PHP utiliza o algoritmo de ordenação bubble sort para ordenar o array `$vetor` em ordem crescente. Após a execução da função `funcao`, o vetor é exibido em ordem crescente como `2 3 5 7 8`. Portanto, a saída correta é `Vetor: 2 3 5 7 8`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.count.php",
    "https://www.php.net/manual/pt_BR/control-structures.foreach.php"
  ]
},
{
  "question": "A linguagem PHP suporta um comando para ser utilizado nas estruturas de controle do, while, for e switch que, ao ser encontrado em um laço de repetição, provoca o término imediato da execução desse laço, seguindo normalmente o fluxo do código. Já entre os operadores, com o significado de “não igual”, retornando “verdadeiro se a variável $x é não igual à variável $y”, a linguagem disponibiliza dois operadores de comparação.\n\nNessas condições, o comando e os símbolos utilizados para esses operadores são, respectivamente:",
  "type": "radio",
  "options": [
    "break, #= e !=",
    "break, < > e !=",
    "exit, #= e ?=",
    "exit, < > e ?="
  ],
  "correctAnswer": 1,
  "justification": "Em PHP, o comando `break` é usado para terminar imediatamente a execução de um laço de repetição como `do`, `while`, `for` e `switch`. Para a comparação de 'não igual', os operadores disponíveis são `<>` e `!=`, que retornam verdadeiro se os valores comparados não são iguais.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/control-structures.break.php",
    "https://www.php.net/manual/pt_BR/language.operators.comparison.php"
  ]
},
{
  "question": "Em um computador com sistema operacional Linux Ubuntu em sua versão 22.04, devidamente atualizado e com kernel na versão 6.5.0-17-generic, um desenvolvedor fez o seguinte teste de execução do código PHP apresentado a seguir:\n\n<pre><code>#!/usr/bin/php\n&lt;?php\n$s = passthru(\"ls -l | awk '{print $5, $9}'\");\necho $s;\n?&gt;\n</code></pre>\n\nConsiderando que o teste foi realizado em um determinado diretório “phpscripts/” cujo conteúdo é apresentado no quadro abaixo:\n\n<pre><code>-rw-rw-r-- 1 user group 82 fev 15 18:40 a1.php\n-rw-r--r-- 4 user group 245 fev 3 18:40 a2.txt\n</code></pre>\n\nListagem dos arquivos do diretório phpscripts/\n\nAo executar o código PHP no diretório “phpscripts/”, o resultado apresentado foi:",
  "type": "radio",
  "options": [
    "-rw-rw-r-- 1 user group 82 fev 15 18:40 a1.php\n     -rw-r--r-- 4 user group 245 fev 3 18:40 a2.txt",
    "w-r-- 1\n    --r-- 4",
    "user 15\n     user 3",
    "82 a1.php\n     245 a2.txt"
  ],
  "correctAnswer": 3,
  "justification": "O comando `passthru(\"ls -l | awk '{print $5, $9}'\");` utiliza o `ls -l` para listar arquivos e o `awk '{print $5, $9}'` para exibir o tamanho do arquivo e o nome do arquivo. Assim, o resultado final será `82 a1.php` e `245 a2.txt`, listando o tamanho e o nome dos arquivos no diretório `phpscripts/`.",
  "screenshots": [],
  "videos": [],
  "referenceLinks": [
    "https://www.php.net/manual/pt_BR/function.passthru.php",
    "https://linux.die.net/man/1/awk"
  ]
},  {
    "question": "PHP é uma das linguagens de programação mais populares para desenvolvimento web.<br><br>\nNo PHP, podemos utilizar funções de ordenação para:<br><br>\nI. ordenar array por ordem descendente.<br>\nII. ordenar arrays associativas em ordem crescente, de acordo com o valor.<br>\nIII. ordenar arrays associativas em ordem descendente, de acordo com o valor.<br><br>\nAs funções que fazem o que está descrito em I, II e III, respectivamente, são:",
    "type": "radio",
    "options": [
      "dsort(), asort(), arsort()",
      "rsort(), asort(), vsort()",
      "sort(), ksort(), arsort()",
      "rsort(), asort(), arsort()"
    ],
    "correctAnswer": 3,
    "justification": "As funções `rsort()`, `asort()` e `arsort()` são usadas para ordenar arrays em ordem descendente, crescente com base no valor, e descendente com base no valor, respectivamente.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  },
  {
    "question": "Um dos recursos mais interessantes na orientação a objetos é o Encapsulamento.<br><br>\nPara atingir o encapsulamento, uma das formas é definindo a visibilidade das propriedades e dos ________ de um objeto. Membros declarados como _________, somente podem ser acessados dentro da própria classe em que foram declarados e a partir de classes _________, mas não poderão ser acessados a partir do programa que faz uso dessa classe (manipulando o objeto em si).<br><br>\nAs palavras que completam, correta e respectivamente, as lacunas são:",
    "type": "radio",
    "options": [
      "atributos, private, descendentes.",
      "métodos, protected, ascendentes.",
      "atributos, public, ascendentes.",
      "métodos, protected, descendentes."
    ],
    "correctAnswer": 0,
    "justification": "A definição de atributos como `private` permite que eles sejam acessados apenas dentro da classe e por classes descendentes, garantindo encapsulamento.",
    "screenshots": [],
    "videos": [],
    "referenceLinks": ['']
  }






























  
  
  
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
