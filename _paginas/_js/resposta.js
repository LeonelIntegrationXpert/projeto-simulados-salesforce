function mostrarGenero(){
    var resposta = getRadioValor('opcao');

    if(resposta == 'true'){
        alert('Verdadeira');
        document.getElementById("verdadeiro").style.color = "green";
        document.getElementById("verdadeiro").style.fontFamily = "Arial";
        document.getElementById("explicacao").style.display = "inline"
    }
    else
    {
        if(resposta == null){
            alert('Vazio');
        }
        else
        {
            alert('Resposta errada, verifique novamente');
        }
    }
}

function getRadioValor(name){
    var rads = document.getElementsByName(name);

    for(var i = 0; i < rads.length; i++){
        if(rads[i].checked){
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
    <a class="navbar-brand" href="./index.html"><img src="./_paginas/_img/favicon.ico"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administrator
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./_paginas/_administrator/_configuration_and_setup/_objectives1-2/index.html">Configuration and Setup (Objectives 1-2)</a></li>
            <li><a class="dropdown-item" href="./_paginas/_administrator/_configuration_and_setup/_objectives3-4/index.html">Configuration and Setup (Objectives 3-4)</a></li>
            <li><a class="dropdown-item" href="./_paginas/_administrator/_configuration_and_setup/_objectives5-6/index.html">Configuration and Setup (Objectives 5-6)</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mulesoft
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="./_paginas/_mcd/_official_training_test/_test_training_1/index.html">MCD - LEVEL 1 (Training platform)</a></li>
			<li><a class="dropdown-item" href="./_paginas/_mcd_2/_official_training_test/_test_training_1/index.html">MCD - LEVEL 2 (Training platform)</a></li>
            <li><a class="dropdown-item" href="./_paginas/_mcpa/_official_training_test/_test_training_1/index.html">MCPA - LEVEL 1 (Training platform)</a></li>
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

