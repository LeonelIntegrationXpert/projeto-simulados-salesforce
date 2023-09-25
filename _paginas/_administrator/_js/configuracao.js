// Verifica se há um valor armazenado no localStorage
if (localStorage.getItem('currentQuestionIndex')) {
    // Recupera o valor armazenado e define currentQuestionIndex com esse valor
    currentQuestionIndex = parseInt(localStorage.getItem('currentQuestionIndex'));
}

function mostrarGenero() {
  var resposta = getRadioValor('opcao');

  if (resposta === 'true') {
    alert('Verdadeira');
    var verdadeiroLabel = document.getElementById("verdadeiro");
    verdadeiroLabel.style.color = "green";
    verdadeiroLabel.style.fontFamily = "Arial";
    var explicacaoDiv = document.getElementById("explicacao");
    explicacaoDiv.style.display = "inline";
  } else {
    if (resposta === null) {
      alert('Vazio');
    } else {
      alert('Resposta errada, verifique novamente');
    }
  }
}

function getRadioValor(name) {
  var rads = document.getElementsByName(name);

  for (var i = 0; i < rads.length; i++) {
    if (rads[i].checked) {
      return rads[i].value;
    }
  }

  return null;
}

function getHeader() {
  var currentPath = window.location.pathname;

  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="../../../../index.html"><img src="../../../../_paginas/_img/favicon.ico"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../../../../index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administrator
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="../_objectives1-2/index.html">Configuration and Setup (Objectives 1-2)</a></li>
                <li><a class="dropdown-item" href="../_objectives3-4/index.html">Configuration and Setup (Objectives 3-4)</a></li>
				<li><a class="dropdown-item" href="../_objectives5-6/index.html">Configuration and Setup (Objectives 5-6)</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
}

function getFooter() {
  return `
    <footer>
      <!-- Section: Social media -->
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span></span>
        </div>
        <!-- Left -->

        <!-- Right -->
        <div>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-google"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="me-4 text-reset">
            <i class="fab fa-github"></i>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->

      <!-- Contact -->
      <section class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-lg-start">
              <p>Autor do site: Leonel Dorneles Porto | LinkedIn: <a href="https://www.linkedin.com/in/leonel-dorneles-porto-b88600122/" class="text-reset fw-bold">Leonel Dorneles Porto</a> | Celular: (53) 991056367</p>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact -->
    </footer>
  `;
}

function showDropdown(element) {
  element.classList.add("open");
}

function hideDropdown(element) {
  element.classList.remove("open");
}

function verificarRespostas(qtRespostasCorretas) {
  var checkboxes = document.getElementsByName('opcao');
  var respostasCorretas = 0;
  var respostasTrue = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked && checkboxes[i].value === 'true') {
      checkboxes[i].parentNode.style.color = 'green'; // Altera a cor do texto para verde
      checkboxes[i].parentNode.style.fontWeight = 'bold'; // Aplica a formatação em negrito
      respostasCorretas++;
      respostasTrue++;
    } else if (checkboxes[i].checked && checkboxes[i].value === 'false') {
      checkboxes[i].parentNode.style.color = 'red'; // Altera a cor do texto para vermelho
      checkboxes[i].parentNode.style.fontWeight = 'normal'; // Remove a formatação em negrito
    } else {
      checkboxes[i].parentNode.style.color = ''; // Remove qualquer cor definida anteriormente
      checkboxes[i].parentNode.style.fontWeight = 'normal'; // Remove a formatação em negrito
    }
  }

  if (respostasTrue === qtRespostasCorretas) {
    alert('Parabéns! Você acertou todas as respostas corretas!');
    // Outras ações que você queira executar quando todas as respostas estiverem corretas
  } else if (respostasTrue > 0 && respostasCorretas < respostasTrue) {
    alert('Você marcou mais respostas verdadeiras do que as corretas. Por favor, selecione apenas as respostas corretas.');
    // Outras ações que você queira executar quando mais respostas verdadeiras estiverem marcadas do que as corretas
  } else {
    alert('Você ainda não selecionou a resposta correta. Por favor, selecione todas as respostas corretas.');
    // Outras ações que você queira executar quando nenhuma resposta correta estiver selecionada
  }
}

function embaralharRespostas(perguntas) {
  var respostasContainer = document.getElementById('respostasContainer');
  var respostas = [];

  // Criar um array de objetos com as perguntas e suas respostas
  perguntas.forEach(function(pergunta) {
    var resposta = {
      value: pergunta.resposta,
      text: pergunta.texto
    };
    respostas.push(resposta);
  });

  respostas.sort(function() {
    return 0.5 - Math.random();
  });

  var form = document.createElement('form');
  respostas.forEach(function(resposta) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "opcao";
    checkbox.value = resposta.value;
    form.appendChild(checkbox);

    var label = document.createElement('label');
    label.innerHTML = resposta.text;
    form.appendChild(label);

    form.appendChild(document.createElement("br"));
  });

  respostasContainer.appendChild(form);
}

function checkAnswers() {
  var correctAnswers = 0;
  var message = "";

  var q1Answers = document.querySelectorAll('input[name="q1"]:checked');
  var q2Answers = document.querySelectorAll('input[name="q2"]:checked');
  var q3Answers = document.querySelectorAll('input[name="q3"]:checked');

  if (q1Answers.length === 1 && q1Answers[0].value === "a") {
    correctAnswers++;
  }
  if (q2Answers.length === 1 && q2Answers[0].value === "a") {
    correctAnswers++;
  }
  if (q3Answers.length === 1 && q3Answers[0].value === "a") {
    correctAnswers++;
  }

  if (correctAnswers === 3) {
    message = "Parabéns! Todas as respostas estão corretas.";
    document.getElementById("message").className = "correct";
  } else {
    message = "Você acertou " + correctAnswers + " de 3 perguntas.";
    document.getElementById("message").className = "incorrect";
  }

  document.getElementById("message").innerHTML = message;
}

var currentQuestionIndex = 0;

// Função para criar as perguntas e respostas
function createQuestions() {
  var container = $("#questions-container");

  // Cria o elemento de pergunta
  var questionElement = $("<div>");
  questionElement.addClass("mt-3");
  questionElement.append("<p><strong>Question " + (currentQuestionIndex + 1) + "/" + questionsData.length + ":</strong> " + questionsData[currentQuestionIndex].question + "</p>");

  // Cria os elementos de opções de resposta
  for (var j = 0; j < questionsData[currentQuestionIndex].options.length; j++) {
    var optionElement = $("<div>");
    optionElement.addClass("form-check mt-2");

    var inputElement = $("<input>");
    inputElement.addClass("form-check-input");
    inputElement.attr("type", questionsData[currentQuestionIndex].type);
    inputElement.attr("name", "question-" + currentQuestionIndex);
    inputElement.val(j);
    optionElement.append(inputElement);

    var labelElement = $("<label>");
    labelElement.addClass("form-check-label");
    labelElement.html(questionsData[currentQuestionIndex].options[j]);
    optionElement.append(labelElement);

    questionElement.append(optionElement);
  }

  // Adiciona a pergunta ao container
  container.html(questionElement);

  // Desabilita o botão "Anterior" se for a primeira pergunta
  if (currentQuestionIndex === 0) {
    $("#previous-button").hide();
  } else {
    $("#previous-button").show();
  }
  
  // Desabilita o botão "Próximo" se for a última pergunta
  if (currentQuestionIndex === questionsData.length - 1) {
    $("#next-button").hide();
    // Faça algo quando chegar à última posição
    console.log("Chegou à última posição!");
  } else {
    $("#next-button").show();
  }

  // Esconde os containers de referências, capturas de tela e vídeo
  $(".references-container").hide();
  $(".screenshots-container").hide();
  $(".video-container").hide();
}

// Função para verificar a resposta atual e habilitar o botão "Próximo" se estiver correta
function checkAnswer() {
  var answer = $("input[name='question-" + currentQuestionIndex + "']:checked").val();

  // Verifica se uma resposta foi selecionada
  if (answer === undefined) {
    alert("Por favor, selecione uma resposta.");
    return;
  }

  // Verifica se a resposta está correta
  if (questionsData[currentQuestionIndex].type === "radio") {
    if (parseInt(answer) === questionsData[currentQuestionIndex].correctAnswer) {
      // Resposta correta
      $("#justification").html(questionsData[currentQuestionIndex].justification);
      $("input[name='question-" + currentQuestionIndex + "']:checked + label").addClass("correct-answer");

      // Habilita o botão "Próximo"
      $("#next-button").prop("disabled", false);

      // Mostra os containers de referências, capturas de tela e vídeo
      if (questionsData[currentQuestionIndex].referenceLinks && questionsData[currentQuestionIndex].referenceLinks.length > 0) {
        $(".references-container").show();
      }
      if (questionsData[currentQuestionIndex].screenshots && questionsData[currentQuestionIndex].screenshots.length > 0) {
        $(".screenshots-container").show();
      }
      if (questionsData[currentQuestionIndex].videos && questionsData[currentQuestionIndex].videos.length > 0) {
        $(".video-container").show();
      }

      // Atualiza os links de referência, captura de tela e vídeo
      var referenceLinks = questionsData[currentQuestionIndex].referenceLinks;
      var screenshot = questionsData[currentQuestionIndex].screenshots[Math.floor(Math.random() * questionsData[currentQuestionIndex].screenshots.length)];
      var video = questionsData[currentQuestionIndex].videos[Math.floor(Math.random() * questionsData[currentQuestionIndex].videos.length)];
      updateReferences(referenceLinks);
      updateScreenshot(screenshot);
      updateVideo(video);

      // Mostra um alerta com a resposta correta
      alert("Resposta correta!");
    } else {
      // Resposta incorreta
      alert("Resposta incorreta!");
    }
  } else if (questionsData[currentQuestionIndex].type === "checkbox") {
    var selectedOptions = [];
    $("input[name='question-" + currentQuestionIndex + "']:checked").each(function() {
      selectedOptions.push(parseInt($(this).val()));
    });

    if (arraysEqual(selectedOptions, questionsData[currentQuestionIndex].correctAnswer)) {
      // Resposta correta
      $("#justification").html(questionsData[currentQuestionIndex].justification);
      $("input[name='question-" + currentQuestionIndex + "']:checked + label").addClass("correct-answer");

      // Habilita o botão "Próximo"
      $("#next-button").prop("disabled", false);

      // Mostra os containers de referências, capturas de tela e vídeo
      if (questionsData[currentQuestionIndex].referenceLinks && questionsData[currentQuestionIndex].referenceLinks.length > 0) {
        $(".references-container").show();
      }
      if (questionsData[currentQuestionIndex].screenshots && questionsData[currentQuestionIndex].screenshots.length > 0) {
        $(".screenshots-container").show();
      }
      if (questionsData[currentQuestionIndex].videos && questionsData[currentQuestionIndex].videos.length > 0) {
        $(".video-container").show();
      }

      // Atualiza os links de referência, captura de tela e vídeo
      var referenceLinks = questionsData[currentQuestionIndex].referenceLinks;
      var screenshot = questionsData[currentQuestionIndex].screenshots[Math.floor(Math.random() * questionsData[currentQuestionIndex].screenshots.length)];
      var video = questionsData[currentQuestionIndex].videos[Math.floor(Math.random() * questionsData[currentQuestionIndex].videos.length)];
      updateReferences(referenceLinks);
      updateScreenshot(screenshot);
      updateVideo(video);

      // Mostra um alerta com a resposta correta
      alert("Resposta correta!");
    } else {
      // Resposta incorreta
      alert("Resposta incorreta!");
    }
  }

  // Exibe a justificativa
  $("#justification").show();
}

// Função para verificar se dois arrays têm os mesmos elementos, independentemente da ordem
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  var sortedArr1 = arr1.slice().sort();
  var sortedArr2 = arr2.slice().sort();

  for (var i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
  currentQuestionIndex++;

  // Armazena o valor de currentQuestionIndex no localStorage
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex);

  // Verifica se ainda há perguntas a serem exibidas
  if (currentQuestionIndex < questionsData.length) {
    createQuestions();
  } else {
    // Todas as perguntas foram respondidas
    alert("Você respondeu todas as perguntas!");

    // Desabilita o botão "Próximo"
    $("#next-button").prop("disabled", true);
  }
}

// Função para voltar para a pergunta anterior
function previousQuestion() {
  currentQuestionIndex--;

  // Armazena o valor de currentQuestionIndex no localStorage
  localStorage.setItem('currentQuestionIndex', currentQuestionIndex);

  // Verifica se ainda há perguntas anteriores
  if (currentQuestionIndex >= 0) {
    createQuestions();
  } else {
    // Já está na primeira pergunta
    alert("Esta é a primeira pergunta!");
  }
}

// Função para atualizar os links de referência
function updateReferences(referenceLinks) {
  var referenceLinksList = $("#reference-links");
  referenceLinksList.empty();

  if (referenceLinks && referenceLinks.length > 0) {
    for (var i = 0; i < referenceLinks.length; i++) {
      var listItem = $("<li>");
      var linkElement = $("<a>");
      linkElement.attr("href", referenceLinks[i]);
      linkElement.attr("target", "_blank");
      linkElement.text("Exemplo " + (i + 1));
      listItem.append(linkElement);
      referenceLinksList.append(listItem);
    }
  }
}

// Função para atualizar a captura de tela
function updateScreenshot(screenshot) {
    printScreenshotList();
}

// Função para atualizar o vídeo
function updateVideo(video) {
  if (video) {
    $("#video").attr("src", video);
  } else {
    $("#video").attr("src", "");
  }
}

// Função para imprimir a lista de screenshots
function printScreenshotList() {
  var screenshotList = questionsData[currentQuestionIndex].screenshots;
  console.log("Lista de screenshots:");
  var screenshotsContainer = document.getElementById("screenshots");
  screenshotsContainer.innerHTML = ""; // Limpa o conteúdo anterior

  for (var i = 0; i < screenshotList.length; i++) {
    console.log(screenshotList[i]);
    if (screenshotList[i]) {
      var img = document.createElement("img");
      img.src = screenshotList[i];
      img.classList.add("screenshot");
      screenshotsContainer.appendChild(img);
    }
  }
}