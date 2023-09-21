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

function getFooter(){
  return `
    <!-- Footer -->
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Social media -->
      <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
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

      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" class="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Laravel</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" class="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" class="text-reset">Help</a>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->  
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
      "correctAnswer": [0,2,3],
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
	  "justification": '<p> <span class="quiz-answer"><em>Dynamic Forms allow migrating the fields and sections from an existing record page as individual components in the Lightning App Builder. These components can then be configured the same way as the other components on the page so that users can view only the fields and sections they should be able to access. Dynamic Forms is supported for custom objects, accounts (including person accounts), cases, contacts, leads, and opportunities. </em> </span> </p><p><em>Dynamic Interactions is a feature used when an event occurring in one component on a Lightning page, such as the user clicking an item in a list view, should update other components on the page. Creating a custom Lightning Web Component for this requirement is unnecessary and would require programmatic development. Page Layouts do not support configuring visibility for specific fields and sections on a page.</em> </p><p><strong>Objective:</strong> Configuration and Setup<br><strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface </p>',
	  "referenceLinks": [
		"https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
	  ],
	  "screenshots": [],
	  "videos": []
	}
  ];

  return questionsData;
}