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
            <li><a class="dropdown-item" href="./_paginas/_administrator/_configuration_and_setup/index.html">Configuration and Setup (Objectives 1-2) - Admin</a></li>
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


function showDropdown(element) {
  element.classList.add("open");
}

function hideDropdown(element) {
  element.classList.remove("open");
}

