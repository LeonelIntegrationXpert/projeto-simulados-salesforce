var questionsData = questions();

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
        <a class="navbar-brand" href="../../../index.html"><img src="../../../_paginas/_img/favicon.ico"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../../../index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Administrator
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="./index.html">Configuration and Setup (Objectives 1-2) - Admin</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
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
  questionElement.append("<p><strong>Question " + (currentQuestionIndex + 1) + ":</strong> " + questionsData[currentQuestionIndex].question + "</p>");

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

  // Desabilita o botão "Próximo"
  $("#next-button").prop("disabled", true);

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

// Função para comparar dois arrays
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
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

// Exporte a função questions
function questions() {
  var questionsData = [
    {
      "question": "Global Shipping does business in a number of different countries but wants to report in a single currency. The Salesforce Administrator is considering enabling multi-currency. What additional steps must be taken after multi-currency is enabled?",
      "type": "checkbox",
      "options": [
        "A. Set the corporate currency",
        "B. Set the validity dates for the exchange rates",
        "C. Define the list of currencies and make them active",
        "D. Set the exchange rates for the currencies",
        "E. Set the currency for each profile"
      ],
      "correctAnswer": [0, 2, 3],
      "justification": "Exchange rates are not dated by default when multi-currency is enabled. The Advanced Currency Management feature must be selected if the company needs to track dated exchange rates. As a requirement for dated exchange rates was not specified, Advanced Currency Management is an optional step. Setting a currency for each profile is also not necessary.",
      "referenceLinks": [
        "https://help.salesforce.com/articleView?id=sf.admin_currency.htm&type=5",
        "https://help.salesforce.com/articleView?id=sf.editing_conversion_rates.htm&type=5"
      ],
      "screenshots": [
        "https://cdn.focusonforce.com/wp-content/uploads/2017/10/admin-org-setup-question-12.png"
      ],
      "videos": []
    },
    {
      "question": "Cosmic Software Solutions uses Salesforce for lead management. The record page created for leads consists of several custom fields and sections. They need to be configured as individual components such that different types of users only see the fields and sections that they require. For example, a section consisting of five custom fields, which allow specifying contact information, should only be visible to sales users. Which feature should be used to meet this requirement?",
      "type": "radio",
      "options": [
        "A. Dynamic Forms",
        "B. Dynamic Interactions",
        "C. Page Layouts",
        "D. Lightning Web Component"
      ],
      "correctAnswer": 0,
      "justification": 
        '<p>' +
            '<span class="quiz-answer">' +
                '<em>' + 
                    'Dynamic Forms allow migrating the fields and sections from an existing record page as individual components in the Lightning App Builder. These components can then be configured the same way as the other components on the page so that users can view only the fields and sections they should be able to access. Dynamic Forms is supported for custom objects, accounts (including person accounts), cases, contacts, leads, and opportunities.\n' +
                '</em>' +
            '</span>' +
        '</p>\n' +
        '<p>' + 
            '<em>' +
                'Dynamic Interactions is a feature used when an event occurring in one component on a Lightning page, such as the user clicking an item in a list view, should update other components on the page. Creating a custom Lightning Web Component for this requirement is unnecessary and would require programmatic development. Page Layouts do not support configuring visibility for specific fields and sections on a page.' +
            '</em>'+ 
        '</p>\n' +
        '<p>' + 
            '<strong>Objective:</strong>Configuration and Setup<br>' + 
            '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
		'</p>',
      "referenceLinks": [
        "https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
      ],
      "screenshots": [],
      "videos": []
    },
    {
      "question": "A Salesforce user has approached the Administrator informing him that she wants to hide certain tabs in the navigation bar. What should the Salesforce Administrator suggest to her?",
      "type": "radio",
      "options": [
        "A. The administrator should remove access to the tab at the user level.",
        "B. The user should create a new profile or App",
        "C. The user should enable the 'auto-hide' feature for rarely used tabs.",
        "D. The user should customize the navigation bar of the app."
      ],
      "correctAnswer": 3,
      "justification": '<span class="quiz-answer"><em>A Salesforce Administrator could modify the access to a tab for a profile but not for an individual user. There is no auto-hide feature for rarely used tabs. Each app can have a different set of tabs. Users can be assigned to different apps. In Lightning Experience, the App Launcher can be utilized to switch between apps.</em></span> <p><em>Users can add, remove, rename, and reorder tabs that are displayed by default by personalizing the navigation bar of an app in Lightning Experience. Default tabs that are specified by the Salesforce Administrator cannot be removed or renamed. Users cannot create profiles or Apps only the Administrator can do this also, it is not the required solution for this scenario.</em> </p> <p><strong>Objective:</strong> Configuration and Setup<br><strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface </p>',
      "referenceLinks": [
        "https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5","https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
      ],
      "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2020/01/edit-app-items.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-156-image1.png"],
      "videos": []
    }
  ];

  return questionsData;
}
