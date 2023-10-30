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
    "question": "An organization has built an application network following the API-led connectivity approach recommended by mulesoft.</br>To protect the application network against attacks from malicious external API clients, the organization plans to aplly JSON threat protection policies.</br>To what API-led connectivity layer the JSON threat protection policies most commonly be applied?",
    "type": "radio",
    "options": [
      "Security Layer",
      "Process Layer",
      "System Layer",
      "Experience Layer"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhbit. An Order API triggers a sequence of other API calls to look up details of an order's items in a backend inventory database. The Order API calls the OrderItems process API, which calls the Inventory system API. The Inventory system API perfoms database operations in the backend inventory database.</br>The network connection between the inventory system API and the database is known to be unrellable and hang at unpredictable times.</br>Where should a two(2) second timeout be configured in the API processing sequence so that the Order API never waits more than two (2) seconds for a response from the OrderItems process API?</br><img src='./_images/1.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "In the OrderItems process API implementation",
      "In the Order API implementation",
      "In the Inventory system API implementation",
      "In the inventory database"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization is implementing a Quote of the Day API that caches today’s quote.What scenario can use the CloudHub Object Store via the Object Store connector to persist the cache’s state?",
    "type": "radio",
    "options": [
      "When there is one (1) CloudHub deployment of the API implementation to three (3) CloudHub workers, where all three (3) CloudHub deployments must share the cache state",
      "When there is one (1) deployment of the API implementation to CloudHub and another deployment to a customer hosted Mule runtime, where both deployments must share the cache state",
      "When there are three (3) CloudHub deployments of the API implementation that must share the cache state, where the API implementations are deployed to three (3) separate CloudHub regions",
      "When there are two (2) CloudHub deployments of the API implementation that must share the cache state, where each API implementation is deployed from a different Anypoint Platform business group to the same CloudHub region"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API instance is managed in API Manager. A corresponding Mule Application will be deployed to a Mule runtime to implement the API instance.</br>API policies defined or changed for the API instance in API Manager must be enforced for the Mule application's API endpoints.</br>How is the Mule application connected with the API instance so that policies defined in API Manager for the API instance will be enforced for this Mule application?",
    "type": "radio",
    "options": [
      "The implementation URL from the API instance configuration in API Manager is used to configure API autodiscovery in the Mule application",
      "The API ID from the API instance configuration in API Manager is used to configure API autodiscovery in the Mule application",
      "The API ID from an API autodiscovery configuration in the Mule application is used to configure the API instance in API Manager",
      "The baseURL from an API autodiscovery configuration in the Mule application is used in configure the API instance in API Manager"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the most performant out-of-the-box solution in Anypoint Platform to track transaction state in an asynchronously executing long-running process implemented as a Mule application deployed to multiple CloudHub workers?",
    "type": "radio",
    "options": [
      "Redis distributed cache",
      "Java.util.WeakHashMap",
      "File-based storage",
      "Persistent Object Store"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization hosts IT infrastructure that includes a private subnet in its own on premises data center. The organization deploys API implementations to the MuleSoft-hosted runtime plane (CloudHub).</br>The IT infrastructure must be configured to Only allow access to the MuleSoft-hosted API implementations from API clientes running on hosts within the private on-premises subnet (NOT from API clientes over the public internet).</br>To meet this requirement, what IT infrastructure provisioning and configuration connecty restrict access to the MuleSoft-hosted API implementations to Only API clientes running in the private on-premises subnet?",
    "type": "radio",
    "options": [
      "Provision na Anypoint VPC</br>Configure the Anypoint VPC to connect to the private on premises subnet using VPC poering",
      "Provision na AWS VPC</br>Configure the AWS VPC to connect to the private on-premises subnet using IPsec tunnel",
      "Provision na Anypoint VPC</br>Configure the Anypoint VPC to connect to the private on-premises subnet using an IPsec tunnel",
      "Provision an AWS VPC</br>Configure the AWS VPC to connect to the private on-premises subnet using VPC poering"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhbit. A company stories financial transaction data in two legacy systems. For each legacy system, a separate dedicated system API (SAPI) exposes data for that legacy system. A process API (PAPI) merges the data retrieved from all of the system APIs into a common format. Serveral API clientes call the process API through its public domain name.</br>The company now wants to expose a subset of financial data to a newly developed mobile application that uses a diferente bounded contexto data model. The company wants to follow MuleSoft’s best practices for Building out na effective application network.</br>Following Mulesoft’s best practices, how can the company expose financial data needed by the mobile application in a way that minimizes the impact on the currently running API clientes and API implementations?</br><img src='./_images/2.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Refactor the process API implementation into na experience API (EAPI)</br>Add data transformation and souting logic to the experience API implementation to support the required endpoints of both mobile and web clientes</br>Redeploy the Mule application using the new deploy able archive file with zero downtime</br><img src='./_images/3.png' alt='Minha Figura'></br>",
      "Create a new mobile experience API (EAPI) that exposes the subset of process API endpoints.</br>Add transformation logic to the mobile experience API implementation to make mobile data compatible with the required process API endpoints.</br><img src='./_images/4.png' alt='Minha Figura'></br>",
      "Refactor the process API implementation into na experience API (EAPI)</br>Add data transformation and routing logic to the experience API implementation to support the required endpoints of both mobile and web clientes.</br>Postpone deployment until all API consumers acknowledge they are ready to migrate to the new API version</br><img src='./_images/5.png' alt='Minha Figura'></br>",
      "Develop and deploy a new process API implementation with data transformation and routing logic to support the required endpoints of both mobile and web clientes.</br>Deploy a Proxywith endpoint from API Manager that redirects the existing process API endpoints to the new process API.</br><img src='./_images/6.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhbit.</br>What API policy would least likely be used when designing na experience API that is intended os work with a consumer mobile phone or tablet application?</br><img src='./_images/7.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "OAuth 2.0 access token enforcement",
      "JSON threat protection",
      "IP allowlist",
      "Client ID enforcement"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "The responses to some HTTP requests can be cached, depending on the HTTP web used in the request.</br>According to the HTTP specification, for what HTTP verbs is this safe to do?",
    "type": "radio",
    "options": [
      "GET, HEAD, POST",
      "GET, OPTIONS, HEAD",
      "PUT, POST, DELETE",
      "GET, PUT, OPTIONS"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhbit. A new upstream API is being designed to offer a service level agreement (SLA) of 500ms median and 800ms maximum (99th percentile) response time. The corresponding API implementation must sequentialy invoque three (3) downstream APIs of equivalente complexity.</br>The first of these downstream APIs offers the following SLA for its response time Median 100ms, 80th percentile, 500ms, 95th, percentile 1000ms.</br>If possible, how can a timeout be set in the upstream API for the invocation of the first downstream API to meet the new upstream API’s desined SLA, if not, what should be done to best support the new upstream API?</br><img src='./_images/8.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Set a timeout of 100ms, that leaves 400ms for the Other two downstream APIs to complete",
      "Set a timeout of 50ms, this times out more invocations of that API but gives additional room for retries",
      "No timeout is possible to meet the upstream APIs desired SLA, a diferente SLA must be negotiated with the first downstream API or na alternative API must be invoked",
      "Do not set a timeout, the invocation of this API is mandatory and so we must wait until if responds"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is typically NOT a function of the APIs created within the framework called API-led connectivity?",
    "type": "radio",
    "options": [
      "They allow for innovation at the user interface level by consuming the underlying assets without needing awareness of how data is extracted from backend systems",
      "They provide na additional layer of resilience on top of the underlying system, thereby insulating clientes from extended failure of these systems",
      "They reduce the dependency on the underlying backend systems by helping unlock data from backend systems in a reusable and consumable way",
      "They can composse data from various sources and combine that data with orchestration logic toc reate higher level value"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. Three business processes must be implemented, and the implementations must communicate with several different SaaS applications.</br>These processes are owned by separate, siloed lines of business (LOBs) and are mainly independent of each other, but they do share a few business entities. Each LOB has one development team and its own budget.</br>In this organizational context, what is the most effective approach to choose the API data models for the APIs that will implement these business processes with minimal redundancy of the data model?</br><img src='./_images/9.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Build distinct data models for each API to follow established microservices and Agile API-centric practices.</br><img src='./_images/10.png' alt='Minha Figura'></br>",
      "Build several Bounded Context Data Models that align with coherent parts of the business processes and the definitions of associated business entities.</br><img src='./_images/11.png' alt='Minha Figura'></br>",
      "Build all the data models for each API using XML schema to drive consistency and reuse across the organization.</br><img src='./_images/12.png' alt='Minha Figura'></br>",
      "Build one centralized canonical data model (enterprise data model) that unifies all the data types from all three business processes, ensuring the data model is consistent and non-redundant.</br><img src='./_images/13.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
