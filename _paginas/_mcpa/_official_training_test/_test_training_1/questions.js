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
    "justification": "Explanation\n" +
        "Correct Answer: Persistent Object Store\n" +
        "*****************************************\n" +
        ">> Redis distributed cache is performant but NOT out-of-the-box solution in Anypoint Platform\n" +
        ">> File-storage is neither performant nor out-of-the-box solution in Anypoint Platform\n" +
        ">> java.util.WeakHashMap needs a completely custom implementation of cache from scratch using Java code\n" +
        "and is limited to the JVM where it is running. Which means the state in the cache is not worker aware when\n" +
        "running on multiple workers. This type of cache is local to the worker. So, this is neither out-of-the-box nor\n" +
        "worker-aware among multiple workers on cloudhub. https://www.baeldung.com/java-weakhashmap\n" +
        ">> Persistent Object Store is an out-of-the-box solution provided by Anypoint Platform which is performant as\n" +
        "well as worker aware among multiple workers running on CloudHub. https://docs.mulesoft.com/object-store/\n" +
        "So, Persistent Object Store is the right answer.",
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
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: IP whitelist\n" +
        "*****************************************\n" +
        ">> OAuth 2.0 access token and Client ID enforcement policies are VERY common to apply on Experience\n" +
        "APIs as API consumers need to register and access the APIs using one of these mechanisms\n" +
        ">> JSON threat protection is also VERY common policy to apply on Experience APIs to prevent bad or\n" +
        "suspicious payloads hitting the API implementations.\n" +
        ">> IP whitelisting policy is usually very common in Process and System APIs to only whitelist the IP range\n" +
        "inside the local VPC. But also applied occassionally on some experience APIs where the End User/ API\n" +
        "Consumers are FIXED.\n" +
        ">> When we know the API consumers upfront who are going to access certain Experience APIs, then we can\n" +
        "request for static IPs from such consumers and whitelist them to prevent anyone else hitting the API.\n" +
        "However, the experience API given in the question/ scenario is intended to work with a consumer mobile\n" +
        "phone or tablet application. Which means, there is no way we can know all possible IPs that are to be\n" +
        "whitelisted as mobile phones and tablets can so many in number and any device in the city/state/country/globe.\n" +
        "So, It is very LEAST LIKELY to apply IP Whitelisting on such Experience APIs whose consumers are\n" +
        "typically Mobile Phones or Tablets.\n",
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
    "justification": "Explanation\n" +
        "Correct Answer: Set a timeout of 100ms; that leaves 400ms for other two downstream APIs to complete\n" +
        "*****************************************\n" +
        "Key details to take from the given scenario:\n" +
        ">> Upstream API's designed SLA is 500ms (median). Lets ignore maximum SLA response times.\n" +
        ">> This API calls 3 downstream APIs sequentially and all these are of similar complexity.\n" +
        ">> The first downstream API is offering median SLA of 100ms, 80th percentile: 500ms; 95th percentile:\n" +
        "1000ms.\n" +
        "Based on the above details:\n" +
        ">> We can rule out the option which is suggesting to set 50ms timeout. Because, if the median SLA itself\n" +
        "being offered is 100ms then most of the calls are going to timeout and time gets wasted in retried them and\n" +
        "eventually gets exhausted with all retries. Even if some retries gets successful, the remaining time wont leave\n" +
        "enough room for 2nd and 3rd downstream APIs to respond within time.\n" +
        ">> The option suggesting to NOT set a timeout as the invocation of this API is mandatory and so we must\nwait until it responds is silly. As not setting time out would go against the good implementation pattern and\n" +
        "moreover if the first API is not responding within its offered median SLA 100ms then most probably it would\n" +
        "either respond in 500ms (80th percentile) or 1000ms (95th percentile). In BOTH cases, getting a successful\n" +
        "response from 1st downstream API does NO GOOD because already by this time the Upstream API SLA of\n" +
        "500 ms is breached. There is no time left to call 2nd and 3rd downstream APIs.\n" +
        ">> It is NOT true that no timeout is possible to meet the upstream APIs desired SLA.\n" +
        "As 1st downstream API is offering its median SLA of 100ms, it means MOST of the time we would get the\n" +
        "responses within that time. So, setting a timeout of 100ms would be ideal for MOST calls as it leaves enough\n" +
        "room of 400ms for remaining 2 downstream API calls.",
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
    "justification": "Explanation\n" +
        "Correct Answer: They provide an additional layer of resilience on top of the underlying backend system,\n" +
        "thereby insulating clients from extended failure of these systems.\n" +
        "*****************************************\n" +
        "In API-led connectivity,\n" +
        ">> Experience APIs - allow for innovation at the user interface level by consuming the underlying assets\n" +
        "without being aware of how data is being extracted from backend systems.\n" +
        ">> Process APIs - compose data from various sources and combine them with orchestration logic to create\n" +
        "higher level value\n" +
        ">> System APIs - reduce the dependency on the underlying backend systems by helping unlock data from\n" +
        "backend systems in a reusable and consumable way.\n" +
        "However, they NEVER promise that they provide an additional layer of resilience on top of the underlying\n" +
        "backend system, thereby insulating clients from extended failure of these systems.\n" +
        "https://dzone.com/articles/api-led-connectivity-with-mule\n",
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
  },
  {
    "question": "Refer to the exhibit. A RAML definition has been proposed for a new Promotions API and has been published to Anypoint Exchange. \n" +
        "\n" +
        "The Marketing Department, which will be an important consumer of the Promotions API, has essential requirements and expectations that must be met. \n" +
        "\n" +
        "What is the most effective way to use Anypoint Platform features to involve the Marketing Department in this early API design phase?</br><img src='./_images/14.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Organize a design workshop with the DBAs of the Marketing Department in which the database schemas of the Marketing IT systems is translated into RAML</br><img src='./_images/15.png' alt='Minha Figura'></br>",
      "Use Anypoint Studio to Implement the API as a Mule application, and then deploy that API implementation to CloudHub and ask the Marketing Department to interact with it</br><img src='./_images/16.png' alt='Minha Figura'></br>",
      "Export an integration test suite from API designer and have the Marketing Department execute the tests in that suite to ensure they pass</br><img src='./_images/17.png' alt='Minha Figura'></br>",
      "Ask the Marketing Department to interact with a mocking implementation of the API using the automatically generated API Console</br><img src='./_images/18.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization is deploying its new implementation of the OrderStatus system API to multiple workers in CloudHub. This API fronts the organization's on-premises Order Management System, which is securely accessed from the OrderStatus system API.\n" +
        "\n" +
        "What type of error typically does NOT result in a service outage of the OrderStatus system API?",
    "type": "radio",
    "options": [
      "The AWS region goes offline with a major network failure to the relevant AWS data centers",
      "A CloudHub worker fails with an out-of-memory exception",
      "The Order Management System is Inaccessible due to a network outage in the organization's on-premises data center",
      "API Manager has an extended outage during the initial deployment of the API implementation"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: A CloudHub worker fails with an out-of-memory exception.\n" +
        "*****************************************\n" +
        ">> An AWS Region itself going down will definitely result in an outage as it does not matter how many\n" +
        "workers are assigned to the Mule App as all of those in that region will go down. This is a complete downtime\n" +
        "and outage.\n" +
        ">> Extended outage of API manager during initial deployment of API implementation will of course cause\n" +
        "issues in proper application startup itself as the API Autodiscovery might fail or API policy templates and\n" +
        "polices may not be downloaded to embed at the time of applicaiton startup etc... there are many reasons that\n" +
        "could cause issues>> A network outage onpremises would of course cause the Order Management System not accessible and it\n" +
        "does not matter how many workers are assigned to the app they all will fail and cause outage for sure.\n" +
        "The only option that does NOT result in a service outage is if a cloudhub worker fails with an out-of-memory\n" +
        "exception. Even if a worker fails and goes down, there are still other workers to handle the requests and keep\n" +
        "the API UP and Running. So, this is the right answer.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. Wha this true about automating interactions with Anypoint Platform using tools such as Anypoint Platform REST APIs, Anypoint CLI, the uMule Maven plugin, and API policies?</br><img src='./_images/19.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Anypoint Platform APIs can ONLY automate interactions with CloudHub, while the Mule Maven plugin is required for deployment to customer-hosted Mule runtimes",
      "By default, the Anypoint CLI and Mule Maven plugin are NOT included in the Mule runtime, so are NOT available to be used by deployed Mule applications.",
      "Access to Anypoint Platform APIs and Anypoint CLI can be controlled separately through the roles and permissions in Anypoint Platform, so that specific users can get access to Anypoint CLI while others get access to the platform APIs.",
      "API policies can be applied to the Anypoint Platform APIs so that ONLY certain LOBs have access to specific functions."
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: By default, the Anypoint CLI and Mule Maven plugin are NOT included in the Mule\n" +
        "runtime, so are NOT available to be used by deployed Mule applications\n" +
        "*****************************************\n" +
        ">> We CANNOT apply API policies to the Anypoint Platform APIs like we can do on our custom written API\n" +
        "instances. So, option suggesting this is FALSE.\n" +
        ">> Anypoint Platform APIs can be used for automating interactions with both CloudHub and customer-hosted\n" +
        "Mule runtimes. Not JUST the CloudHub. So, option opposing this is FALSE.\n" +
        ">> Mule Maven plugin is NOT mandatory for deployment to customer-hosted Mule runtimes. It just helps\n" +
        "your CI/CD to have smoother automation. But not a compulsory requirement to deploy. So, option opposing\n" +
        "this is FALSE.\n" +
        ">> We DO NOT have any such special roles and permissions on the platform to separately control access for\n" +
        "some users to have Anypoint CLI and others to have Anypoint Platform APIs. With proper general\n" +
        "roles/permissions (API Owner, Cloudhub Admin etc..), one can use any of the options (Anypoint CLI or\n" +
        "Platform APIs). So, option suggesting this is FALSE.\n" +
        "Only TRUE statement given in the choices is that - Anypoint CLI and Mule Maven plugin are NOT included\n" +
        "in the Mule runtime, so are NOT available to be used by deployed Mule applications.\n" +
        "Maven is part of Studio or you can use other Maven installation for development.\n" +
        "CLI is convenience only. It is one of many ways how to install app to the runtime.\n" +
        "These are definitely NOT part of anything except your process of deployment or automation.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "For a particular REST API specification managed by API Manager, how do an API Interface, an API implementation, an API client and API policies typically Interact to invoke and process REST requests?",
    "type": "radio",
    "options": [
      "The API client invokes the API interface that applies API policies before calling the API implementation to process the REST request",
      "The API implementation invokes the API client that applies API policies before calling the API interface to process the REST request",
      "The API interface invokes the API client that calls the API implementation to apply API policies to process the REST request",
      "The API cliente invokes the API implementation that calls the API interface to apply API policies to process the REST request"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is a by product of the API invocation metrics available from Anypoint Platform and how can these by products be utilized?",
    "type": "radio",
    "options": [
      "Data on the level of reuse of assets </br>The data are used to help measure the effectiveness of the application network",
      "ROI metrics data automatically inferred from API usage that can be directly</br>Shared with business users</br>The data are used to help create realtime executive dashboards",
      "API policy data that exceed a given threat threshold</br>The data are used to help proactively identify likely subsequence future policy violations",
      "Data on past API invocations</br> The data are used to help identify anomalies and usage patterns across various APIs"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A TemperatureSensors API instance is defined in API Manager in the PROD environment of the CAR_FACTORY business group.</br> An Acme TemperatureSensors Mule application implements this API instance and is deployed from Runtime Manager to the PROD environment of the CAR_FACTORY business group.",
    "type": "radio",
    "options": [
      "In access management, from the top level organization information",
      "In API Manager, from the PROD environment of the CAR_FACTORY business group",
      "In Anypoint Exchange, from na API client application that has been approved for the TemperatureSensors API instance",
      "In Access management from the PROD environment of the CAR_FACTORY business group"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. An Order API must be designed that contains significant amounts of integration logic and involves the invocation of the Product API. \n" +
        "\n" +
        "The power relationship between the Order API and Product API is one of customer/supplier, (because the Product API is used heavily throughout the organization and is developed by a dedicated development team located in the office of the CTO). \n" +
        "\n" +
        "What strategy should be used to deal with the API data model of the Product API within the Order API?</br><img src='./_images/20.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Implement an anti-corruption layer in the Order API that transforms the Product API data model into internal data types of the Order API</br><img src='./_images/21.png' alt='Minha Figura'></br>",
      "Work directly with the API data types of the Product API when implementing the integration logic of the Order API such that the Order API uses the same (unchanged) data types as the Product API</br><img src='./_images/22.png' alt='Minha Figura'></br>",
      "Convince the development team of the Product API to adopt the API data model of the Order API such that the integration logic of the Order API can work with one consistent internal data model</br><img src='./_images/23.png' alt='Minha Figura'></br>",
      "Start an organization-wide data modeling initiative that will result in an enterprise data model that will then be used in both the Product API and the Order API</br><img src='./_images/24.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Convince the development team of the product API to adopt the API data model of the Order\n" +
        "API such that integration logic of the Order API can work with one consistent internal data model\n" +
        "*****************************************\n" +
        "Key details to note from the given scenario:\n" +
        ">> Power relationship between Order API and Product API is customer/supplier\n" +
        "So, as per below rules of \"Power Relationships\", the caller (in this case Order API) would request for features\n" +
        "to the called (Product API team) and the Product API team would need to accomodate those requests.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization has implemented the Customer Address API to retrieve customer address information. This API has been deployed to multiple environments and has been configured to enforce client IDs everywhere. \n" +
        "\n" +
        "A developer is writing a client application to allow a user to update their address. The developer has found the Customer Address API in Anypoint Exchange and wants to use it in their client application. \n" +
        "\n" +
        "What step of gaining access to the API can be performed automatically by Anypoint Platform?",
    "type": "radio",
    "options": [
      "Modify the client application to call the API using the client application's credentials",
      "Create a new application in Anypoint Exchange for requesting access to the API",
      "Approve the client application request for the chosen SLA tier",
      "Request access to the appropriate API Instances deployed to multiple environments using the client application's credentials"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Approve the client application request for the chosen SLA tier\n" +
        "*****************************************\n" +
        ">> Only approving the client application request for the chosen SLA tier can be automated\n" +
        ">> Rest of the provided options are not valid",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. An organization needs to enable access to its customer data from both a mobile application (app) and a web application, which each need access to common fields as well as certain unique fields. \n" +
        "\n" +
        "The data is available partially in a database and partially in a third-party CRM system. \n" +
        "\n" +
        "According to Mulesoft’s recommend API-led connectivity approach, what APIs should be created to best fit these design requirements?</br><img src='./_images/25.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "A Process API that contains the data required by both the web and mobile applications, allowing these applications to invoke it directly and access the data they need thereby providing the flexibility to add more fields in the future withoutneeding API changes.</br><img src='./_images/26.png' alt='Minha Figura'></br>",
      "A common experience API used by both the web and mobile aplications, but separate Process APIs for the web and mobile applications that interact with the database and the CRM System.</br><img src='./_images/27.png' alt='Minha Figura'></br>",
      "Separate Experience APIs for the mobile application and web application, but a common Process API that invokes separate System APIs created for the database and CRM system</br><img src='./_images/28.png' alt='Minha Figura'></br>",
      "One set of APIs (Experience API, Process API, and System API) for the web applications, and another set for the mobile applications.</br><img src='./_images/29.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A system API is designed to retrieve data from a backend system that has scalability challenges.\n" +
        "\n" +
        "What API policy can best safeguard the backend system?",
    "type": "radio",
    "options": [
      "SLA-based rate limiting",
      "IP allowlist",
      "Client ID enforcement",
      "OAuth 2.0 access token enforcement"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: SLA-based rate limiting\n" +
        "*****************************************\n" +
        ">> Client Id enforement policy is a \"Compliance\" related NFR and does not help in maintaining the \"Quality\n" +
        "of Service (QoS)\". It CANNOT and NOT meant for protecting the backend systems from scalability\n" +
        "challenges.\n" +
        ">> IP Whitelisting and OAuth 2.0 token enforcement are \"Security\" related NFRs and again does not help in\n" +
        "maintaining the \"Quality of Service (QoS)\". They CANNOT and are NOT meant for protecting the backend\n" +
        "systems from scalability challenges.\n" +
        "Rate Limiting, Rate Limiting-SLA, Throttling, Spike Control are the policies that are \"Quality of Service\n" +
        "(QOS)\" related NFRs and are meant to help in protecting the backend systems from getting overloaded.\n" +
        "https://dzone.com/articles/how-to-secure-apis",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What Mule application deployment scenario requires using Anypoint Platform Private Cloud Edition or Anypoint Platform for Pivotal Cloud Foundry?",
    "type": "radio",
    "options": [
      "When it is required that ALL APIs are private and NOT exposed to the public cloud.",
      "When ALL backend systems in the application network are deployed in the organization’s intranet.",
      "When it is required to make ALL applications highly available across multiple data centers.",
      "When regulatory requirements mandate on-premises processing of EVERY data item, including meta-data."
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: When regulatory requirements mandate on-premises processing of EVERY data item,\n" +
        "including meta-data.\n*****************************************\n" +
        "We need NOT require to use Anypoint Platform PCE or PCF for the below. So these options are OUT.\n" +
        ">> We can make ALL applications highly available across multiple data centers using CloudHub too.\n" +
        ">> We can use Anypoint VPN and tunneling from CloudHub to connect to ALL backend systems in the\n" +
        "application network that are deployed in the organization's intranet.\n" +
        ">> We can use Anypoint VPC and Firewall Rules to make ALL APIs private and NOT exposed to the public\n" +
        "cloud.\n" +
        "Only valid reason in the given options that requires to use Anypoint Platform PCE/ PCF is - When regulatory\n" +
        "requirements mandate on-premises processing of EVERY data item, including meta-data.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization has several APIs that accept JSON data over HTTP POST. The APIs are all publicly available and are associated with several mobile applications and web applications. \n" +
        "\n" +
        "The organization does NOT want to use any authentication or compliance policies for these APIs, but at the same time, the organization is worried that some bad actor could send payloads that could somehow compromise the applications or servers running the API implementations. \n" +
        "\n" +
        "What out-of-the-box Anypoint Platform policy can address exposure to this threat?",
    "type": "radio",
    "options": [
      "Apply a Header injection and removal policy that detects the malicious data before it is used.",
      "Apply an IP blacklist policy to all APIs; the blacklist will include all bad actors",
      "Use HTTPS mutual authentication for all API invocations to shut out bad actors",
      "Apply a JSON threat protection policy to all APIs to detect potencial threat vectors"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: Apply a JSON threat protection policy to all APIs to detect potential threat vectors\n" +
        "*****************************************\n" +
        ">> Usually, if the APIs are designed and developed for specific consumers (known consumers/customers) then\n" +
        "we would IP Whitelist the same to ensure that traffic only comes from them.\n" +
        ">> However, as this scenario states that the APIs are publicly available and being used by so many mobile and\n" +
        "web applications, it is NOT possible to identify and blacklist all possible bad actors.\n" +
        ">> So, JSON threat protection policy is the best chance to prevent any bad JSON payloads from such bad\n" +
        "actors",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What CANNOT be effectively enforced using an API policy in Anypoint Platform?",
    "type": "radio",
    "options": [
      "Logging HTTP requests and responses",
      "Maintaining tamper-proof credentials between APIs",
      "Guarding against Denial of Service attacks",
      "Overloading the backend system"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Guarding against Denial of Service attacks\n" +
        "*****************************************\n" +
        ">> Backend system overloading can be handled by enforcing \"Spike Control Policy\"\n" +
        ">> Logging HTTP requests and responses can be done by enforcing \"Message Logging Policy\"\n" +
        ">> Credentials can be tamper-proofed using \"Security\" and \"Compliance\" Policies\n" +
        "However, unfortunately, there is no proper way currently on Anypoint Platform to guard against DOS attacks.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is a key requirement when using an external Identity Provider for Client Management in Anypoint Platform?",
    "type": "radio",
    "options": [
      "Single sign-on is required to sign in to Anypoint Platform",
      "APIs managed by Anypoint Platform must be protected by SAML 2.0 policies",
      "API clients must submit access tokens issuedby that same identity provider to invoque OAuth 2.0-protected APIs managed by Anypoint Platform",
      "The application network must include system APIs that Interact with the identity provider"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What is true when using customer-hosted Mule runtimes with the MuleSoft-hosted Anypoint Platform control plane?</br><img src='./_images/30.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "The MuleSoft-hosted Shared Load Balancer can be used to load balance API invocations to the Mule runtimes.",
      "API implementations can run successfully in customer-hosted Mule runtimes, even when they are unable to communicate with the control plane.",
      "Anypoint Runtime Manager automatically ensures high availability in the control plane by creating a new Mule runtime instance in case of a node failure.",
      "Anypoint Runtime Manager initiates a network connection to a Mule runtime in order to deploy Mule applications."
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: API implementations can run successfully in customer-hosted Mule runtimes, even when\n" +
        "they are unable to communicate with the control plane.\n" +
        "*****************************************\n" +
        ">> We CANNOT use Shared Load balancer to load balance APIs on customer hosted runtimes\n" +
        ">> For Hybrid deployment models, the on-premises are first connected to Runtime Manager using Runtime\n" +
        "Manager agent. So, the connection is initiated first from On-premises to Runtime Manager. Then all control\n" +
        "can be done from Runtime Manager.\n" +
        ">> Anypoint Runtime Manager CANNOT ensure automatic HA. Clusters/Server Groups etc should be\n" +
        "configured before hand.\n" +
        "Only TRUE statement in the given choices is, API implementations can run successfully in customer-hosted\n" +
        "Mule runtimes, even when they are unable to communicate with the control plane. There are several references\n" +
        "below to justify this statement.\n" +
        "References:\n" +
        "https://docs.mulesoft.com/runtime-manager/deployment-strategies#hybrid-deployments\n" +
        "https://help.mulesoft.com/s/article/On-Premise-Runtimes-Disconnected-From-US-Control-Plane-June-18th-2018\n" +
        "https://help.mulesoft.com/s/article/Runtime-Manager-cannot-manage-On-Prem-Applications-and-Servers-from-US-Control-Plane-June-25th-2019\n" +
        "https://help.mulesoft.com/s/article/On-premise-Runtimes-Appear-Disconnected-in-Runtime-Manager-May-29th-",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit.\n" +
        "\n" +
        "What combination of data format and transport protocol can be used for an API in the contexto of API-led connectivity and application networks?</br><img src='./_images/31.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "JSON over HTTP",
      "SOAP over JMS",
      "SOAP over SMTP",
      "XML over UDP"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. An organization uses one specific CloudHub (AWS) region for all CloudHub deployments. \n" +
        "\n" +
        "How are CloudHub workers assigned to availability zones (AZs) when the organization’s Mule applications are deployed to CloudHub in that region?</br><img src='./_images/32.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Available AZs are selected as part of the Mule application a deployment configuration  and then the Mule application is deployed to CloudHub workes in those selected AZs",
      "CloudHub workes are randomly distribued across available AZs within that region",
      "An AZ is randomly selected for a Mule application, and all the Mule application’s CloudHub workers are assigned to that one AZ.",
      "CloudHub workes belonging to a given environment are assegned to the same AZ within that region"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization deploys Mule applications to both the Mulesoft hosted runtime plane and a customer-hosted runtime plane. All deployments are managed by the Mulesoft-hosted control plane. Alerts have been created in the Mulesoft-hosted control plane related to invocations of deployed API implementations that are managed by API Manager.\n" +
        "\n" +
        "The organization InfoSec team must locale the source (or sources) of the data or metadata that generate these alerts.\n" +
        "\n" +
        "What is (are) the source (sources) that generates (generate) these alerts the Mulesoft-hosted runtime plane, customer-hosted runtime plane, and/or MuleSoft-hosted control plane?",
    "type": "radio",
    "options": [
      "Mulesoft-hosted runtime plane</br>Customer-hosted runtime plane",
      "Mulesoft-hosted runtime plane</br>Customer-hosted runtime plane</br>Mulesoft-hosted control plane",
      "Mulesoft-hosted control plane",
      "MuleSoft-hosted runtime plane</br>MuleSoft-hosted control plane"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company deploys Mule application through Runtime Manager with default configurations to customer-hosted Mule runtimes.\n" +
        "Each Mule application is na API implementation that exposes RESTful interfaces to API clients. The Mule runtimes are managed by the MuleSoft-hosted control plane.\n" +
        "\n" +
        "When an API cliente sends an HTTP request to a customer-hosted Mule application, what data (payload) or metadata are published to the MuleSoft-hosted control plane?",
    "type": "radio",
    "options": [
      "Both the data and metadata are pushed to the MuleSoft hosted control plane",
      "Neither the data nor metadata is pushed to the Mulesoft-hosted control plane",
      "Only the metadata is pushed to the Mulesoft hosted control plane",
      "Only the data is pushed to the MuleSoft hosted control plane"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A European organization wants to minimize its investment in IT infrastructure. There is also a corporate-wide regulatory requirement for all applications deployed to AWS to have all data and metadata reside in the same AWS region in Europe.\n" +
        "\n" +
        "What is the best choice of Mule control plane and Mule runtime plane(s) to meet these objectives and requirements?",
    "type": "radio",
    "options": [
      "Use the MuleSoft-hosted control plane</br>Use the MuleSoft-hosted runtime plane",
      "Use the MuleSoft-hosted control plane</br>Use Anypoint Runtime Fabric for the runtime plane",
      "Use Anypoint Platform Private Cloud Edition for the control plane</br>Use the MuleSoft-hosted runtime plane",
      "Use Anypoint Platform Private Cloud Edition for the control plane</br>Use standalone customer hosted Mule runtimes for the runtime plane"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "How can the application of a rate limiting API policy be accurately reflected in the RAML definition of an API?",
    "type": "radio",
    "options": [
      "By refining the resource definitions by adding a description of the rate limitingpolicy behavior",
      "By refining the request definitions by adding a remaining Requests queryparameter with description, type, and example",
      "By refining the response definitions by adding the out-of-the-box Anypoint Platformrate-limit-enforcement securityScheme with description, type, and example",
      "By refining the response definitions by adding the x-ratelimit-* response headerswith description, type, and example"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An Order Mule application is deployed to a CloudHub environment that is bound to a CloudHub virtual private cloud (VPC). No dedicated load balancers are configured.\n" +
        "\n" +
        "What networking features can be configured for the deployment of the Mule application to this CloudHub environment?",
    "type": "radio",
    "options": [
      "Two-way manual authentication between external clientes and the Order Mule application",
      "Static IP adresses for the CloudHub workers running the Order Mule application",
      "HTTPS connections to the Order Mule application using custom vanlty domains",
      "Mapping rules to map external URLs to endpoints of the Order Mule applications"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is true about the fully qualified domain names (FQDNs), also known as DNS entries, created when a Mule application is deployed to the CloudHub Shared Worker Cloud?",
    "type": "radio",
    "options": [
      "The FQDNs are determined by both the application name and the Anypoint Platform organization",
      "A fixed number of FQDNs is created, irrespective of the environment and VPC design",
      "The FQDNs are created using the application name but can be modified by an Administrator after deployment",
      "The FQDNs are determined by the chosen application name, irrespective of the region"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: The FQDNs are determined by the application name chosen, IRRESPECTIVE of the region\n" +
        "*****************************************\n" +
        ">> When deploying applications to Shared Worker Cloud, the FQDN are always determined by application\n" +
        "name chosen.>> It does NOT matter what region the app is being deployed to.\n" +
        ">> Although it is fact and true that the generated FQDN will have the region included in it (Ex:\n" +
        "exp-salesorder-api.au-s1.cloudhub.io), it does NOT mean that the same name can be used when deploying to\n" +
        "another CloudHub region.\n" +
        ">> Application name should be universally unique irrespective of Region and Organization and solely\n" +
        "determines the FQDN for Shared Load Balancers.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API implementation is deployed to three (3) CloudHub workes in the same CloudHub region: Asia Pacific (Singapure).\n" +
        "\n" +
        "Mutual TLS authentication must be set up between API clients and the API implementation.\n" +
        "\n" +
        "What is the simplest and most idiomatic (used for its intended purpose) way to achieve this mutual TLS authentication requirement while balancing load across the three (3) CloudHub workes?",
    "type": "radio",
    "options": [
      "Use an API proxy deployment to the CloudHub Shared Load Balancer to route requests in a round robin fashion",
      "Use an external F5 load balancer",
      "Use the CloudHub Shared Load Balancer",
      "Use a CloudHub dedicated load Balancer"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. An organization is running a Mule standalone runtime and has configured Active Directory as the Anypoint Platform external Identity Provider. The organization does not have budget for other system components. \n" +
        "\n" +
        "What policy should be applied to all instances of APIs in the organization to most effectively restrict access to a specific group of internal users?</br><img src='./_images/33.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Apply an OAuth 2.0 access token enforcement policy; the internal Active Directory will be configured as the OAuth server.",
      "Apply an IP allowlist policy; only the specific users workstations will be in the allowlist.",
      "Apply a Basic authentication - LDAP policy; the internal Active Directory will be configured as the LDAP source for authenticating users.",
      "Apply a client ID enforcement policy; the specific group of users will configure its client applications to use its specific client credentials."
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Apply a basic authentication - LDAP policy; the internal Active Directory will be configured\n" +
        "as the LDAP source for authenticating users.\n" +
        "*****************************************\n" +
        ">> IP Whitelisting does NOT fit for this purpose. Moreover, the users workstations may not necessarily have\n" +
        "static IPs in the network.\n" +
        ">> OAuth 2.0 enforcement requires a client provider which isn't in the organizations system components.\n" +
        ">> It is not an effective approach to let every user create separate client credentials and configure those for\n" +
        "their usage.\n" +
        "The effective way it to apply a basic authentication - LDAP policy and the internal Active Directory will be\n" +
        "configured as the LDAP source for authenticating users.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "When could the API data model of a System API reasonably mimic the data model exposed by the corresponding backend system, with minimal improvements over the backend system's data model?",
    "type": "radio",
    "options": [
      "When a pragmatic approach with only limited isolation from the backend system is deemed appropriate",
      "When there is an existing enterprise data model widely used across the organization",
      "When the corresponding backend system is expected to be replaced in the near future",
      "When the System API can be assigned to a bounded context with a corresponding data model"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: When a pragmatic approach with only limited isolation from the backend system is deemed\n" +
        "appropriate.\n" +
        "*****************************************\n" +
        "General guidance w.r.t choosing Data Models:\n" +
        ">> If an Enterprise Data Model is in use then the API data model of System APIs should make use of data\n" +
        "types from that Enterprise Data Model and the corresponding API implementation should translate between\n" +
        "these data types from the Enterprise Data Model and the native data model of the backend system.\n" +
        ">> If no Enterprise Data Model is in use then each System API should be assigned to a Bounded Context, the\n" +
        "API data model of System APIs should make use of data types from the corresponding Bounded Context Data\n" +
        "Model and the corresponding API implementation should translate between these data types from the Bounded\n" +
        "Context Data Model and the native data model of the backend system. In this scenario, the data types in the\n" +
        "Bounded Context Data Model are defined purely in terms of their business characteristics and are typically not\n" +
        "related to the native data model of the backend system. In other words, the translation effort may be\n" +
        "significant.\n" +
        ">> If no Enterprise Data Model is in use, and the definition of a clean Bounded Context Data Model is\n" +
        "considered too much effort, then the API data model of System APIs should make use of data types that\n" +
        "approximately mirror those from the backend system, same semantics and naming as backend system, lightly\n" +
        "sanitized, expose all fields needed for the given System API’s functionality, but not significantly more and\n" +
        "making good use of REST conventions.\n" +
        "The latter approach, i.e., exposing in System APIs an API data model that basically mirrors that of the backend\n" +
        "system, does not provide satisfactory isolation from backend systems through the System API tier on its own.\n" +
        "In particular, it will typically not be possible to \"swap out\" a backend system without significantly changing all\n" +
        "System APIs in front of that backend system and therefore the API implementations of all Process APIs that\n" +
        "depend on those System APIs! This is so because it is not desirable to prolong the life of a previous backend\n" +
        "system’s data model in the form of the API data model of System APIs that now front a new backend system.\n" +
        "The API data models of System APIs following this approach must therefore change when the backend system\n" +
        "is replaced.\n" +
        "On the other hand:\n" +
        ">> It is a very pragmatic approach that adds comparatively little overhead over accessing the backend system\n" +
        "directly\n" +
        ">> Isolates API clients from intricacies of the backend system outside the data model (protocol,authentication, connection pooling, network address, …)\n" +
        ">> Allows the usual API policies to be applied to System APIs\n" +
        ">> Makes the API data model for interacting with the backend system explicit and visible, by exposing it in\n" +
        "the RAML definitions of the System APIs\n" +
        ">> Further isolation from the backend system data model does occur in the API implementations of the\n" +
        "Process API tier",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API with multiple API implementations (Mule applications) is deployed to both CloudHub and customer hosted Mule runtimes.\n" +
        "All the deployments are managed by the Mulesoft-hosted control plane.\n" +
        "\n" +
        "An alert must be triggered whenever an API implementation stops responding to API requests, even if no API clients have called the API implementation for some time.\n" +
        "\n" +
        "What is the most idiomatic (used for its intended purpose) way toc reate these alerts to monitor the API implementations?",
    "type": "radio",
    "options": [
      "In API Functional Monitoring, create monitors for the API implementations.</br>Where each monitor repeatedly invokes na API implementation endpoint",
      "In API Manager, configure a Request Count alert to monitor every API implementation of the API",
      "In Anypoint Runtime Manager, for ALL the API implementations, configure one</br>Worker Not Responding alert to monitor EVERY API implementation",
      "In each API client, add code to send a REST API request to generate a custom alert in Anypoint Platform When an API invocation times out"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What is the best way to decompose one end-to-end business process into a collaboration of Experience, Process, and System APIs?</br><img src='./_images/34.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Handle customizations for the end-user application at the Process layer rather than the Experience layer</br>Where each monitor repeatedly invokes na API implementation endpoint</br><img src='./_images/35.png' alt='Minha Figura'></br>",
      "Use a Process API to orchestrate calls to multiple System APIs, but NOT to other Process APIs</br><img src='./_images/36.png' alt='Minha Figura'></br>",
      "Allow System APIs to return data that is NOT currently required by the identified Process or Experience APIs</br>Worker Not Responding alert to monitor EVERY API implementation</br><img src='./_images/37.png' alt='Minha Figura'></br>",
      "Always use a tiered approach by creating exactly one API for each of the three layers (Experience, Process and System APIs)</br><img src='./_images/38.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization user a mixture of external of SaaS systems and a legacy on-premises database that is blocked by the organization’s public-facing firewall. None of the SaaS systems use AWS. New Mule applications are being designed to integrat the SaaS systems with the on-premises database.\n" +
        "\n" +
        "The organization wants to minimize its investimento in IT infrastructure.\n" +
        "\n" +
        "What is the best Anypoint Platform runtime plane to which to deploy the Mule applications, and what is the best Anypoint Platform network configuration to support these requirements?",
    "type": "radio",
    "options": [
      "Deploy to a customer-hosted runtime plane</br>Configure the organization’s firewall to allow connections to the external SaaS systems",
      "Deploy to the Mulesoft-hosted runtime plane</br>Configure the network with na</br>Anypoint VPC that is configured with na IPsec tunnel to the on-premises network",
      "Deploy to a customer hosted runtime plane</brConfigure the network with an Anypoint VPC that is configured with VPC peering to each external SaaS network",
      "Deploy to the Mulesoft hosted runtime plane</br>Configure a CloudHub dedicated load balancer that is configured with an AWS (not CloudHub) Direct Connect tunnel to the on-premises network"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is most likely NOT a characteristic of an integration test for a REST API implementation?",
    "type": "radio",
    "options": [
      "The test prepares a known request payload and validates the response payload.",
      "The test is triggered by the external HTTP request.",
      "The test needs all source and/or target systems configured and accessible.",
      "The test runs immediately after the Mule application has been compiled and packaged."
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: The test runs immediately after the Mule application has been compiled and packaged\n" +
        "*****************************************\n" +
        ">> Integration tests are the last layer of tests we need to add to be fully covered.\n" +
        ">> These tests actually run against Mule running with your full configuration in place and are tested from\n" +
        "external source as they work in PROD.\n" +
        ">> These tests exercise the application as a whole with actual transports enabled. So, external systems are\n" +
        "affected when these tests run.\n" +
        "So, these tests do NOT run immediately after the Mule application has been compiled and packaged.\n" +
        "FYI... Unit Tests are the one that run immediately after the Mule application has been compiled and packaged.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Unit tests must be developed for a Mule application that sends API requests to an external REST API.\n" +
        "\n" +
        "To create these unit tests, what is the most effective unit testing framework to use and should API requests from these unit tests invoke mocked API endpoints or the actual external REST API endpoints?",
    "type": "radio",
    "options": [
      "Use the JUnit testing framework</br>Invoke mocked API endpoints",
      "Use the MUnit testing framework</br>Invoke the external REST API endpoints",
      "Use the JUnit testing framework</br>Invoke the external REST API endpoints",
      "Use the MUnit testing framework</br>Invoke mocked API endpoints"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A code-centric API documentation environment should allow API consumers to investigate and execute API client source code that demonstrates invoking one or more APIs as part of representative scenarios.\n" +
        "\n" +
        "What is the most effective way to provide this type of code-centric API documentation environment using Anypoint Platform?",
    "type": "radio",
    "options": [
      "Make relevant APIs discoverable via an Anypoint Exchange entry",
      "Enable mocking services for the relevant APIs and expose them via their Anypoint Exchange entry",
      "Create API Notebooks and include them in the relevant Anypoint Exchange entries",
      "Ensure the APIs are well documented through their Anypoint Exchange entries and API Consoles and share these pages with all API consumers"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Create API Notebooks and Include them in the relevant Anypoint exchange entries\n" +
        "*****************************************\n" +
        ">> API Notebooks are the one on Anypoint Platform that enable us to provide code-centric API\n" +
        "documentation",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API implementation is deployed to CloudHub. \n" +
        "\n" +
        "What conditions can be alerted on using the default Anypoint Platform functionality, where the alert conditions depend on the end-to-end request processing of the API implementation?",
    "type": "radio",
    "options": [
      "When the API receives a very high number of API invocations",
      "When the response time of API invocations exceeds a threshold",
      "When the API is invoked by an unrecognized API client",
      "When a particular API client invokes the API too often within a given time period"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: When the response time of API invocations exceeds a threshold\n*****************************************\n" +
        ">> Alerts can be setup for all the given options using the default Anypoint Platform functionality\n" +
        ">> However, the question insists on an alert whose conditions depend on the end-to-end request processing of\n" +
        "the API implementation.\n" +
        ">> Alert w.r.t \"Response Times\" is the only one which requires end-to-end request processing of API\n" +
        "implementation in order to determine if the threshold is exceeded or not.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization makes a strategic decision to move towards an IT operating model that emphasizes consumption of reusable IT assets using modern APIs (as defined by MuleSoft). \n" +
        "\n" +
        "What best describes each modern API in relation to this new IT operating model?",
    "type": "radio",
    "options": [
      "Each modern API must be easy to consume, so each should avoid complex authentication mechanisms such as SAML or JWT.",
      "Each modern API has its own software development lifecycle, which reduces the need for documentation and automation.",
      "Each modern API must be REST based and HTTP based.",
      "Each modern API must be treated like a product and designed for reuse."
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API implementation is being designed that must invoke an Order API, which is known to repeatedly experience downtime. \n" +
        "\n" +
        "For this reason, a fallback API is to be called when the Order API is unavailable. \n" +
        "\n" +
        "What approach to designing the invocation of the fallback API provides the best resilience?",
    "type": "radio",
    "options": [
      "Set an option in the HTTP Requester component that invokes the Order API to  invoke a fallback API whenever an HTTP 4xx or 5xx response status code is returned from the Order API",
      "Redirect client requests through an HTTP 307 Temporary Redirect status code to the fallback API whenever the Order API is unavailable",
      "Create a separate entry for the Order API in API Manager, and then invoke this API as a fallback API if the primary Order API is unavailable",
      "Search Anypoint Exchange for a suitable existing fallback API, and then implement invocations to this fallback API in addition to the Order API"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Search Anypoint exchange for a suitable existing fallback API, and then implement\n" +
        "invocations to this fallback API in addition to the order API\n" +
        "*****************************************\n" +
        ">> It is not ideal and good approach, until unless there is a pre-approved agreement with the API clients that\n" +
        "they will receive a HTTP 3xx temporary redirect status code and they have to implement fallback logic their\n" +
        "side to call another API.\n" +
        ">> Creating separate entry of same Order API in API manager would just create an another instance of it on\n" +
        "top of same API implementation. So, it does NO GOOD by using clone od same API as a fallback API.\n" +
        "Fallback API should be ideally a different API implementation that is not same as primary one.\n" +
        ">> There is NO option currently provided by Anypoint HTTP Connector that allows us to invoke a fallback\n" +
        "API when we receive certain HTTP status codes in response.\n" +
        "The only statement TRUE in the given options is to Search Anypoint exchange for a suitable existing fallback\n" +
        "API, and then implement invocations to this fallback API in addition to the order API.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "According to Mulesoft’s recommended API-led connectivity, What is a best practice when building System APIs?",
    "type": "radio",
    "options": [
      "Document the API using an easily consumable asset like a RAML definition",
      "Expose to API clients all technical details of the API implementation's interaction with the backend system",
      "Model all API resources and methods to closely mimic the operations of the backend system",
      "Build an Enterprise Data Model (Canonical Data Model) for each backend system and apply it to System APIs"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Model all API resources and methods to closely mimic the operations of the backend system.\n" +
        "*****************************************\n" +
        ">> There are NO fixed and straight best practices while opting data models for APIs. They are completly\n" +
        "contextual and depends on number of factors. Based upon those factors, an enterprise can choose if they have\n" +
        "to go with Enterprise Canonical Data Model or Bounded Context Model etc.\n" +
        ">> One should NEVER expose the technical details of API implementation to their API clients. Only the API\n" +
        "interface/ RAML is exposed to API clients.\n" +
        ">> It is true that the RAML definitions of APIs should be as detailed as possible and should reflect most of the\n" +
        "documentation. However, just that is NOT enough to call your API as best documented API. There should be\n" +
        "even more documentation on Anypoint Exchange with API Notebooks etc. to make and create a developer\n" +
        "friendly API and repository..\n" +
        ">> The best practice always when creating System APIs is to create their API interfaces by modeling their\n" +
        "resources and methods to closely reflect the operations and functionalities of that backend system.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization follows Mulesoft’s recommendations for semantic versioning of APIs and has na API implementation that implements version 4.1.1 of na API specification. A partner development team has deployed na API client implementation that calls Every endpoint of the version 4.1.1 API specification and works expected in production.\n" +
        "\n" +
        "Version 4.1.2 of the API specification has just been published, and the API implementation has been updated to support this new API version.\n" +
        "\n" +
        "Based on this new semantic versioning number, what (if anything) must the partner development team change in the existing API client implementation so that it still works as expected with Every endpoint?",
    "type": "radio",
    "options": [
      "At least one parameter must be added to, updated in, or removed from at least one API method call",
      "The API version number must be updated in a request header of every API method call",
      "Nothing must be changed in the existing API client implementation",
      "Calls to at least one method of at least one resource must be removed"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Where is a non automated API policy defined in Anypoint Platform, for what is the API policy defined (for just one API instance or for the API specification), and how is the API policy then Applied to the API instance or all API instances of the API specification?",
    "type": "radio",
    "options": [
      "The API policy is defined in API Manager for a particular API instance</br>Then the API policy is ONLY Applied to that specific API instance",
      "The API policy is defined in API Designer for a particular API instance</br>Then the API policy is ONLY applied to that specific API instance",
      "The API policy is defined in API Manager for the API specification</br>Then the API policy is ONLY applied to ALL API instance of that API specification",
      "The API policy is defined in API Designer for the API specification</br>Then the API policy is ONLY applied to ALL instance of that API specification"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: The API policy is defined in API Manager for a specific API instance, and then ONLY\n" +
        "applied to the specific API instance.\n" +
        "*****************************************\n" +
        ">> Once our API specifications are ready and published to Exchange, we need to visit API Manager and\n" +
        "register an API instance for each API.\n" +
        ">> API Manager is the place where management of API aspects takes place like addressing NFRs by\n" +
        "enforcing policies on them.\n" +
        ">> We can create multiple instances for a same API and manage them differently for different purposes.\n" +
        ">> One instance can have a set of API policies applied and another instance of same API can have different set\n" +
        "of policies applied for some other purpose.\n" +
        ">> These APIs and their instances are defined PER environment basis. So, one need to manage them\n" +
        "seperately in each environment.\n" +
        ">> We can ensure that same configuration of API instances (SLAs, Policies etc..) gets promoted when\n" +
        "promoting to higher environments using platform feature. But this is optional only. Still one can change them\n" +
        "per environment basis if they have to.\n" +
        ">> Runtime Manager is the place to manage API Implementations and their Mule Runtimes but NOT APIs\n" +
        "itself. Though API policies gets executed in Mule Runtimes, We CANNOT enforce API policies in Runtime\n" +
        "Manager. We would need to do that via API Manager only for a cherry picked instance in an environment.\n" +
        "So, based on these facts, right statement in the given choices is - \"The API policy is defined in API Manager\n" +
        "for a specific API instance, and then ONLY applied to the specific API instance\".",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application is being buit to implementation na API. The Mule application will expose an endpoint to accept requests from API clients and then automatically apply automated API policies defined in Anypoint Platform API Manager.\n" +
        "\n" +
        "What type of data format(s) and/or transport protocol are most idiomatic (used for their intended purposes) to use to implemente the API endpoint in the Mule application to receive API client requests in the Mule application so that API policies defined in API Manager are property applied and enforced, and must the API endpoint return a response to API clients?",
    "type": "radio",
    "options": [
      "JSON or XML formatted data received over TCP or UDP connections</br>A response to each API client request is NOT required",
      "Any data format received over HTTP/1.x</br>A response to each API client request is required",
      "SOAP formatted data received over SMTP connections</br>A response to each API client request is NOT required",
      "Any formatted data received over JMS connections</br>A response to each API cliente request is required"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application implements an API. The Mule application has na HTTP Listener whose conector configuration sets the HHTPS protocol and hard  codes the port value.\n" +
        " \n" +
        "The Mule application is deployed to na Anypoint VPC and uses the CloudHub Shared Load Balancer (SLB) for all incoming traffic.\n" +
        "\n" +
        "What port number must be hard coded in the HTTP Listener’s conector configuration so that the Mule application property receives HTTPS API invocations routed through the SLB?",
    "type": "radio",
    "options": [
      "8082",
      "8092",
      "443",
      "8091"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is a typical result of using a fine-grained rather than a coarse-grained API deployment model to implement a given business process?",
    "type": "radio",
    "options": [
      "A decrease in the number of connections within the application network supporting the business process",
      "A higher number of discoverable API-related assets in the application network",
      "An overall tower usage of resources because each fine-grained API consumes lowe resources",
      "A better response time for the end user as a result of the APIs being smaller in scope and complexity"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: A higher number of discoverable API-related assets in the application network.\n" +
        "*****************************************\n" +
        ">> We do NOT get faster response times in fine-grained approach when compared to coarse-grained approach.\n" +
        ">> In fact, we get faster response times from a network having coarse-grained APIs compared to a network\n" +
        "having fine-grained APIs model. The reasons are below.\n" +
        "Fine-grained approach:\n" +
        "1. will have more APIs compared to coarse-grained\n" +
        "2. So, more orchestration needs to be done to achieve a functionality in business process.\n" +
        "3. Which means, lots of API calls to be made. So, more connections will needs to be established. So, obviously\n" +
        "more hops, more network i/o, more number of integration points compared to coarse-grained approach where\n" +
        "fewer APIs with bulk functionality embedded in them.\n" +
        "4. That is why, because of all these extra hops and added latencies, fine-grained approach will have bit more\n" +
        "response times compared to coarse-grained.\n" +
        "5. Not only added latencies and connections, there will be more resources used up in fine-grained approach\n" +
        "due to more number of APIs.\n" +
        "That's why, fine-grained APIs are good in a way to expose more number of resuable assets in your network\n" +
        "and make them discoverable. However, needs more maintenance, taking care of integration points,\n" +
        "connections, resources with a little compromise w.r.t network hops and response times.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization follows Mulesoft’s recommendations for semantic versioning of APIs. Version 1.2.1 of an API was published to Anypoint Exchange and is shared through the organization’s Anypoint Exchange public portal.\n" +
        "\n" +
        "The API is later updated and published to Anypoint Exchange as version 2.0.0.\n" +
        "\n" +
        "What must be done to successfully publish the new API version to the organization’s Anypoint Exchange public portal while following  MuleSoft’s recommendations for semantic versioning?",
    "type": "radio",
    "options": [
      "The new API version must be shared public through Anypoint Exchange",
      "In API mocking service Mule application must be deployed to CloudHub and then associated with the new API version in the organization’s Anypoint Exchange public portal",
      "Users who need access to the new API version must be added to the appropriate role in Anypoint Platform",
      "A fully functional API implementation of the new API version must be deployed and then associated with the new API version in the organization’s Anypoint Exchange public portal"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. Mule applications that implemente a number of REST APIs are deployed to their own subnet that is inaccessible from outside the organization.\n" +
        "\n" +
        "External business partners must access these APIs, which are Only allowed to be invoked from a separed subnet dedicated to partners – called partner subnet. This subnet is accessible from the public internet, which allows these external partners to reach it. Anypoint Platform and Mule runtimes are already deployed in partner subnet these Mule runtimes can already access the APIs.\n" +
        "\n" +
        "What is the most resource eficiente solution to  comply with these requirements while having the smallost impact on Other applications that are currently using the APIs?</br><img src='./_images/39.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "Redeploy the API implementations to the same servers running the Mule runtimes",
      "Implement (or generate) an API proxy Mule application for each of the APIs and then deploy the API proxies to the Mule runtimes",
      "Add an additional endpoint to each API for partner enablement consumption",
      "Duplicate the APIs as Mule application and the deploy them to the Mule runtimes"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A rate-limiting policy is applied to an API implementation to protect the backend system.\n" +
        "\n" +
        "Recently, there have been surges in demand that cause some API cliente POST requests to the API implementation to be rejected with policy-related erros, causing delays and complications with the API clients.\n" +
        "\n" +
        "How should the API policies that are Applied to the API implementation be changed to reduce the frequency of erros returned to API clients while still protecting the backend system?",
    "type": "radio",
    "options": [
      "Remove the rate-limiting policy</br>Add a spike control policy",
      "Keep the rate-limiting policy</br>Add an SLA-based spike control policy",
      "Keep the rate-limiting policy</br>Add a client ID enforcement policy",
      "Remove the rate-limiting policy</br>Add an HTTP caching policy"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API implementation is updated. \n" +
        "When must the RAML definition of the API also be updated?",
    "type": "radio",
    "options": [
      "When the API implementation changes the structure of the request or response messages.",
      "When the API implementation changes from interacting with a legacy backend system deployed on-premises to a modern, cloud-based (SaaS) system.",
      "When the API implementation is migrated from an earlier to a later version of the Mule runtime.",
      "When the API implementation is optimized to improve its average response time."
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: When the API implementation changes the structure of the request or response messages\n" +
        "*****************************************\n" +
        ">> RAML definition usually needs to be touched only when there are changes in the request/response schemas\n" +
        "or in any traits on API.\n" +
        ">> It need not be modified for any internal changes in API implementation like performance tuning, backend\n" +
        "system migrations etc..",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What out-of-the-box key performance indicator measures the success of a typical Center for Enablement (C4E) and is immediately available in responses from the Anypoint Platform APIs?",
    "type": "radio",
    "options": [
      "Per deployed API implementation, the volume of requests processed each day",
      "Per business group, the ratio of the number of production API implementation deployed using CI/CD pipeline to the number of production API implementations deployed manualy",
      "Per published API, the number of developers that downloaded a version of the API specification",
      "Per published API, the number of consumers that requested access to the API and have been approved in the Production environment"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An Anypoint Platform organization has been configured with an external identity provider (IdP) for identity\n" +
        "management and client management. What credentials or token must be provided to Anypoint CLI to execute\n" +
        "commands against the Anypoint Platform APIs?",
    "type": "radio",
    "options": [
      "The credentials provided by the IdP for identity management",
      "The credentials provided by the IdP for client management",
      "An OAuth 2.0 token generated using the credentials provided by the IdP for client management",
      "An OAuth 2.0 token generated using the credentials provided by the IdP for identity management"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization has created an API-led architecture that uses various API layers to integrate mobile clients\n" +
        "with a backend system. The backend system consists of a number of specialized components and can be\n" +
        "accessed via a REST API. The process and experience APIs share the same bounded-context model that is\n" +
        "different from the backend data model. What additional canonical models, bounded-context models, or\n" +
        "anti-corruption layers are best added to this architecture to help process data consumed from the backend\n" +
        "system?\n",
    "type": "radio",
    "options": [
      "Create a bounded-context model for every layer and overlap them when the boundary contexts overlap, letting API developers know about the differences between upstream and downstream data models",
      "Create a canonical model that combines the backend and API-led models to simplify and unify data models, and minimize data transformations.",
      "Create a bounded-context model for the system layer to closely match the backend data model, and add an anti-corruption layer to let the different bounded contexts cooperate across the system and process layers",
      "Create an anti-corruption layer for every API to perform transformation for every data model to match each other, and let data simply travel between APIs to avoid the complexity and overhead of building canonical models"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Create a bounded-context model for the system layer to closely match the backend data\n" +
        "model, and add an anti-corruption layer to let the different bounded contexts cooperate across the system and\n" +
        "process layers\n" +
        "*****************************************\n" +
        ">> Canonical models are not an option here as the organization has already put in efforts and created\n" +
        "bounded-context models for Experience and Process APIs.\n" +
        ">> Anti-corruption layers for ALL APIs is unnecessary and invalid because it is mentioned that experience\n" +
        "and process APIs share same bounded-context model. It is just the System layer APIs that need to choose their\n" +
        "approach now.\n" +
        ">> So, having an anti-corruption layer just between the process and system layers will work well. Also to\n" +
        "speed up the approach, system APIs can mimic the backend system data model.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "When designing an upstream API and its implementation, the development team has been advised to NOT set\n" +
        "timeouts when invoking a downstream API, because that downstream API has no SLA that can be relied upon.\n" +
        "This is the only downstream API dependency of that upstream API.\n" +
        "Assume the downstream API runs uninterrupted without crashing. What is the impact of this advice?",
    "type": "radio",
    "options": [
      "An SLA for the upstream API CANNOT be provided",
      "The invocation of the downstream API will run to completion without timing out",
      "A default timeout of 500 ms will automatically be applied by the Mule runtime in which the upstream API implementation executes",
      "A toad-dependent timeout of less than 1000 ms will be applied by the Mule runtime in which the downstream API implementation executes"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: An SLA for the upstream API CANNOT be provided.\n" +
        "*****************************************\n" +
        ">> First thing first, the default HTTP response timeout for HTTP connector is 10000 ms (10 seconds). NOT\n" +
        "500 ms.\n" +
        ">> Mule runtime does NOT apply any such \"load-dependent\" timeouts. There is no such behavior currently in\n" +
        "Mule.\n" +
        ">> As there is default 10000 ms time out for HTTP connector, we CANNOT always guarantee that the\ninvocation of the downstream API will run to completion without timing out due to its unreliable SLA times.\n" +
        "If the response time crosses 10 seconds then the request may time out.\n" +
        "The main impact due to this is that a proper SLA for the upstream API CANNOT be provided.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API implementation is deployed on a single worker on CloudHub and invoked by external API clients\n" +
        "(outside of CloudHub). How can an alert be set up that is guaranteed to trigger AS SOON AS that API\n" +
        "implementation stops responding to API invocations?\n",
    "type": "radio",
    "options": [
      "Implement a heartbeat/health check within the API and invoke it from outside the Anypoint Platform and alert when the heartbeat does not respond",
      "Configure a \"worker not responding\" alert in Anypoint Runtime Manager",
      "Handle API invocation exceptions within the calling API client and raise an alert from that API client when the API Is unavailable",
      "Create an alert for when the API receives no requests within a specified time period"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: Configure a “Worker not responding” alert in Anypoint Runtime Manager.\n" +
        "*****************************************\n" +
        ">> All the options eventually helps to generate the alert required when the application stops responding.\n" +
        ">> However, handling exceptions within calling API and then raising alert from API client is inappropriate\n" +
        "and silly. There could be many API clients invoking the API implementation and it is not ideal to have this\n" +
        "setup consistently in all of them. Not a realistic way to do.\n" +
        ">> Implementing a health check/ heartbeat with in the API and calling from outside to detmine the health\n" +
        "sounds OK but needs extra setup for it and same time there are very good chances of generating false alarms\n" +
        "when there are any intermittent network issues between external tool calling the health check API on API\n" +
        "implementation. The API implementation itself may not have any issues but due to some other factors some\n" +
        "false alarms may go out.\n" +
        ">> Creating an alert in API Manager when the API receives no requests within a specified time period would\n" +
        "actually generate realistic alerts but even here some false alarms may go out when there are genuinely no\n" +
        "requests from API clients.\n" +
        "The best and right way to achieve this requirement is to setup an alert on Runtime Manager with a condition\n" +
        "\"Worker not responding\". This would generate an alert AS SOON AS the workers become unresponsive.\n",
    "referenceLinks": [],
    "screenshots": ['./_images/40.png'],
    "videos": []
  },
  {
    "question": "Say, there is a legacy CRM system called CRM-Z which is offering below functions:\n" +
        "1. Customer creation\n" +
        "2. Amend details of an existing customer\n" +
        "3. Retrieve details of a customer\n" +
        "4. Suspend a customer",
    "type": "radio",
    "options": [
      "Implement a system API named customerManagement which has all the functionalities wrapped in it as various operations/resources",
      "Implement different system APIs named createCustomer, amendCustomer, retrieveCustomer and suspendCustomer as they are modular and has seperation of concerns",
      "Implement different system APIs named createCustomerInCRMZ, amendCustomerInCRMZ, retrieveCustomerFromCRMZ and suspendCustomerInCRMZ as they are modular and has seperation of concerns"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: Implement different system APIs named createCustomer, amendCustomer, retrieveCustomer\n" +
        "and suspendCustomer as they are modular and has seperation of concerns\n" +
        "*****************************************\n" +
        ">> It is quite normal to have a single API and different Verb + Resource combinations. However, this fits well\n" +
        "for an Experience API or a Process API but not a best architecture style for System APIs. So, option with just\n" +
        "one customerManagement API is not the best choice here.\n" +
        ">> The option with APIs in createCustomerInCRMZ format is next close choice w.r.t modularization and less\n" +
        "maintenance but the naming of APIs is directly coupled with the legacy system. A better foreseen approach\n" +
        "would be to name your APIs by abstracting the backend system names as it allows seamless\n" +
        "replacement/migration of any backend system anytime. So, this is not the correct choice too.\n" +
        ">> createCustomer, amendCustomer, retrieveCustomer and suspendCustomer is the right approach and is the\n" +
        "best fit compared to other options as they are both modular and same time got the names decoupled from\n" +
        "backend system and it has covered all requirements a System API needs.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What API policy would LEAST likely be applied to a Process API?",
    "type": "radio",
    "options": [
      "Custom circuit breaker",
      "Client ID enforcement",
      "Rate limiting",
      "JSON threat protection"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: JSON threat protection\n" +
        "*****************************************\n" +
        "Fact: Technically, there are no restrictions on what policy can be applied in what layer. Any policy can be\n" +
        "applied on any layer API. However, context should also be considered properly before blindly applying the\n" +
        "policies on APIs.\n" +
        "That is why, this question asked for a policy that would LEAST likely be applied to a Process API.\n" +
        "From the given options:\n>> All policies except \"JSON threat protection\" can be applied without hesitation to the APIs in Process tier.\n" +
        ">> JSON threat protection policy ideally fits for experience APIs to prevent suspicious JSON payload coming\n" +
        "from external API clients. This covers more of a security aspect by trying to avoid possibly malicious and\n" +
        "harmful JSON payloads from external clients calling experience APIs.\n" +
        "As external API clients are NEVER allowed to call Process APIs directly and also these kind of malicious and\n" +
        "harmful JSON payloads are always stopped at experience API layer only using this policy, it is LEAST\n" +
        "LIKELY that this same policy is again applied on Process Layer API",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A set of tests must be performed prior to deploying API implementations to a staging environment. Due to data security and access restrictions, untested APIs cannot be granted access to the backend systems, so instead mocked data must be used for these tests. The amount of available mocked data and its contents is sufficient to entirely test the API implementations with no active connections to the backend systems. What type of tests should be used to incorporate this mocked data?",
    "type": "radio",
    "options": [
      "Integration tests",
      "Performance tests",
      "Functional tests (Blackbox)",
      "Unit tests (Whitebox)"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Which of the following best fits the definition of API-led connectivity?",
    "type": "radio",
    "options": [
      "API-led connectivity is not just an architecture or technology but also a way to organize people and processes for efficient IT delivery in the organization",
      "API-led connectivity is a 3-layered architecture covering Experience, Process and System layers",
      "API-led connectivity is a technology which enabled us to implement Experience, Process and System layer based APIs"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: API-led connectivity is not just an architecture or technology but also a way to organize\n" +
        "people and processes for efficient IT delivery in the organization.\n" +
        "*****************************************",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What are the major benefits of MuleSoft proposed IT Operating Model?",
    "type": "radio",
    "options": [
      "1. Decrease the IT delivery gap</br> 2. Meet various business demands without increasing the IT capacity</br> 3. Focus on creation of reusable assets first. Upon finishing creation of all the possible assets then</br> inform the LOBs in the organization to start using them</br>",
      "1. Decrease the IT delivery gap</br> 2. Meet various business demands by increasing the IT capacity and forming various IT departments</br> 3. Make consumption of assets at the rate of production</br>",
      "1. Decrease the IT delivery gap</br> 2. Meet various business demands without increasing the IT capacity</br> 3. Make consumption of assets at the rate of production</br>"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer:\n" +
        "1. Decrease the IT delivery gap\n" +
        "2. Meet various business demands without increasing the IT capacity\n" +
        "3. Make consumption of assets at the rate of production.\n" +
        "*****************************************\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What Anypoint Platform Capabilities listed below fall under APIs and API Invocations/Consumers category? Select TWO.",
    "type": "radio",
    "options": [
      "API Operations and Management",
      "API Runtime Execution and Hosting",
      "API Consumer Engagement",
      "API Design and Development"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A retail company is using an Order API to accept new orders. The Order API uses a JMS queue to submit orders to a backend order management service. The normal load for orders is being handled using two (2) CloudHub workers, each configured with 0.2 vCore. The CPU load of each CloudHub worker normally runs well below 70%. However, several times during the year the Order API gets four times (4x) the average number of orders. This causes the CloudHub worker CPU load to exceed 90% and the order submission time to exceed 30 seconds. The cause, however, is NOT the backend order management service, which still responds fast enough to meet the response SLA for the Order API. What is the MOST resource-efficient way to configure the Mule application's CloudHub deployment to help the company cope with this performance challenge?",
    "type": "radio",
    "options": [
      "Permanently increase the size of each of the two (2) CloudHub workers by at least four times (4x) to one (1) vCore",
      "Use a vertical CloudHub autoscaling policy that triggers on CPU utilization greater than 70%",
      "Permanently increase the number of CloudHub workers by four times (4x) to eight (8) CloudHub workers",
      "Use a horizontal CloudHub autoscaling policy that triggers on CPU utilization greater than 70%"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: Use a horizontal CloudHub autoscaling policy that triggers on CPU utilization greater than\n" +
        "70%\n" +
        "*****************************************\n" +
        "The scenario in the question is very clearly stating that the usual traffic in the year is pretty well handled by the\n" +
        "existing worker configuration with CPU running well below 70%. The problem occurs only \"sometimes\"\n" +
        "occasionally when there is spike in the number of orders coming in.\n" +
        "So, based on above, We neither need to permanently increase the size of each worker nor need to permanently\n" +
        "increase the number of workers. This is unnecessary as other than those \"occasional\" times the resources are\n" +
        "idle and wasted.\n" +
        "We have two options left now. Either to use horizontal Cloudhub autoscaling policy to automatically increase\n" +
        "the number of workers or to use vertical Cloudhub autoscaling policy to automatically increase the vCore size\n" +
        "of each worker.\n" +
        "Here, we need to take two things into consideration:\n" +
        "1. CPU\n" +
        "2. Order Submission Rate to JMS Queue\n" +
        ">> From CPU perspective, both the options (horizontal and vertical scaling) solves the issue. Both helps to\n" +
        "bring down the usage below 90%.\n" +
        ">> However, If we go with Vertical Scaling, then from Order Submission Rate perspective, as the application\n" +
        "is still being load balanced with two workers only, there may not be much improvement in the incoming\nequest processing rate and order submission rate to JMS queue. The throughput would be same as before.\n" +
        "Only CPU utilization comes down.\n" +
        ">> But, if we go with Horizontal Scaling, it will spawn new workers and adds extra hand to increase the\n" +
        "throughput as more workers are being load balanced now. This way we can address both CPU and Order\n" +
        "Submission rate.\n" +
        "Hence, Horizontal CloudHub Autoscaling policy is the right and best answer.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What should be ensured before sharing an API through a public Anypoint Exchange portal?",
    "type": "radio",
    "options": [
      "The visibility level of the API instances of that API that need to be publicly accessible should be set to public visibility",
      "The users needing access to the API should be added to the appropriate role in Anypoint Platform",
      "The API should be functional with at least an initial implementation deployed and accessible for users to interact with",
      "The API should be secured using one of the supported authentication/authorization mechanisms to ensure that data is not compromised"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: The visibility level of the API instances of that API that need to be publicly accessible should\n" +
        "be set to public visibility.\n" +
        "*****************************************\n",
    "referenceLinks": [],
    "screenshots": ['./_images/41.png'],
    "videos": []
  },
  {
    "question": "A system API has a guaranteed SLA of 100 ms per request. The system API is deployed to a primary environment as well as to a disaster recovery (DR) environment, with different DNS names in each environment. An upstream process API invokes the system API and the main goal of this process API is to respond to client requests in the least possible time. In what order should the system APIs be invoked, and what changes should be made in order to speed up the response time for requests from the process API?",
    "type": "radio",
    "options": [
      "In parallel, invoke the system API deployed to the primary environment and the system API deployed to the DR environment, and ONLY use the first response",
      "In parallel, invoke the system API deployed to the primary environment and the system API deployed to the DR environment using a scatter-gather configured with a timeout, and then merge the responses",
      "Invoke the system API deployed to the primary environment, and if it fails, invoke the system API deployed to the DR environment",
      "Invoke ONLY the system API deployed to the primary environment, and add timeout and retry logic to avoid intermittent failures"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: In parallel, invoke the system API deployed to the primary environment and the system API\n" +
        "deployed to the DR environment, and ONLY use the first response.\n" +
        "*****************************************\n" +
        ">> The API requirement in the given scenario is to respond in least possible time.\n" +
        ">> The option that is suggesting to first try the API in primary environment and then fallback to API in DR\n" +
        "environment would result in successful response but NOT in least possible time. So, this is NOT a right choice\n" +
        "of implementation for given requirement.\n" +
        ">> Another option that is suggesting to ONLY invoke API in primary environment and to add timeout and\n" +
        "retries may also result in successful response upon retries but NOT in least possible time. So, this is also NOT\n" +
        "a right choice of implementation for given requirement.\n>> One more option that is suggesting to invoke API in primary environment and API in DR environment in\n" +
        "parallel using Scatter-Gather would result in wrong API response as it would return merged results and\n" +
        "moreover, Scatter-Gather does things in parallel which is true but still completes its scope only on finishing all\n" +
        "routes inside it. So again, NOT a right choice of implementation for given requirement\n" +
        "The Correct choice is to invoke the API in primary environment and the API in DR environment parallelly,\n" +
        "and using ONLY the first response received from one of them.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What best explains the use of auto-discovery in API implementations?",
    "type": "radio",
    "options": [
      "It makes API Manager aware of API implementations and hence enables it to enforce policies",
      "It enables Anypoint Studio to discover API definitions configured in Anypoint Platform",
      "It enables Anypoint Exchange to discover assets and makes them available for reuse",
      "It enables Anypoint Analytics to gain insight into the usage of APIs"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: It makes API Manager aware of API implementations and hence enables it to enforce\n" +
        "policies.\n" +
        "*****************************************\n" +
        ">> API Autodiscovery is a mechanism that manages an API from API Manager by pairing the deployed\n" +
        "application to an API created on the platform.\n" +
        ">> API Management includes tracking, enforcing policies if you apply any, and reporting API analytics.\n" +
        ">> Critical to the Autodiscovery process is identifying the API by providing the API name and version.\n" +
        "References:\n" +
        "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept\n" +
        "https://docs.mulesoft.com/api-manager/1.x/api-auto-discovery\n" +
        "https://docs.mulesoft.com/api-manager/2.x/api-auto-discovery-new-concept",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization wants MuleSoft-hosted runtime plane features (such as HTTP load balancing, zero downtime, and horizontal and vertical scaling) in its Azure environment. What runtime plane minimizes the organization's effort to achieve these features?",
    "type": "radio",
    "options": [
      "Anypoint Runtime Fabric",
      "Anypoint Platform for Pivotal Cloud Foundry",
      "CloudHub",
      "A hybrid combination of customer-hosted and MuleSoft-hosted Mule runtimes"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Anypoint Runtime Fabric\n" +
        "*****************************************\n" +
        ">> When a customer is already having an Azure environment, It is not at all an ideal approach to go with\n" +
        "hybrid model having some Mule Runtimes hosted on Azure and some on MuleSoft. This is unnecessary and\n" +
        "useless.\n" +
        ">> CloudHub is a Mulesoft-hosted Runtime plane and is on AWS. We cannot customize to point CloudHub to\n" +
        "customer's Azure environment.\n>> Anypoint Platform for Pivotal Cloud Foundry is specifically for infrastructure provided by Pivotal Cloud\n" +
        "Foundry\n" +
        ">> Anypoint Runtime Fabric is right answer as it is a container service that automates the deployment and\n" +
        "orchestration of Mule applications and API gateways. Runtime Fabric runs within a customer-managed\n" +
        "infrastructure on AWS, Azure, virtual machines (VMs), and bare-metal servers.\n" +
        "-Some of the capabilities of Anypoint Runtime Fabric include:\n" +
        "-Isolation between applications by running a separate Mule runtime per application.\n" +
        "-Ability to run multiple versions of Mule runtime on the same set of resources.\n" +
        "-Scaling applications across multiple replicas.\n" +
        "-Automated application fail-over.\n" +
        "-Application management with Anypoint Runtime Manager.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Traffic is routed through an API proxy to an API implementation. The API proxy is managed by API Manager and the API implementation is deployed to a CloudHub VPC using Runtime Manager. API policies have been applied to this API. In this deployment scenario, at what point are the API policies enforced on incoming API client requests?",
    "type": "radio",
    "options": [
      "At the API proxy",
      "At the API implementation",
      "At both the API proxy and the API implementation",
      "At a MuleSoft-hosted load balancer"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: At the API proxy\n" +
        "*****************************************\n" +
        ">> API Policies can be enforced at two places in Mule platform.\n" +
        ">> One - As an Embedded Policy enforcement in the same Mule Runtime where API implementation is\n" +
        "running.\n>> Two - On an API Proxy sitting in front of the Mule Runtime where API implementation is running.\n" +
        ">> As the deployment scenario in the question has API Proxy involved, the policies will be enforced at the\n" +
        "API Proxy.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Which of the below, when used together, makes the IT Operational Model effective?",
    "type": "radio",
    "options": [
      "Create reusable assets, Do marketing on the created assets across organization, Arrange time to time LOB reviews to ensure assets are being consumed or not",
      "Create reusable assets, Make them discoverable so that LOB teams can self-serve and browse the APIs, Get active feedback and usage metrics",
      "Create resuable assets, make them discoverable so that LOB teams can self-serve and browse the APIs"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Create reusable assets, Make them discoverable so that LOB teams can self-serve and\n" +
        "browse the APIs, Get active feedback and usage metrics.\n" +
        "*****************************************\n" +
        "Diagram, arrow Description automatically generated",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is a key performance indicator (KPI) that measures the success of a typical C4E that is immediately apparent in responses from the Anypoint Platform APIs?",
    "type": "radio",
    "options": [
      "The number of production outage incidents reported in the last 24 hours",
      "The number of API implementations that have a publicly accessible HTTP endpoint and are being managed by Anypoint Platform",
      "The fraction of API implementations deployed manually relative to those deployed using a CI/CD tool",
      "The number of API specifications in RAML or OAS format published to Anypoint Exchange"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: The number of API specifications in RAML or OAS format published to Anypoint Exchange\n" +
        "*****************************************\n" +
        ">> The success of C4E always depends on their contribution to the number of reusable assets that they have\n" +
        "helped to build and publish to Anypoint Exchange.\n" +
        ">> It is NOT due to any factors w.r.t # of outages, Manual vs CI/CD deployments or Publicly accessible\n" +
        "HTTP endpoints\n" +
        ">> Anypoint Platform APIs helps us to quickly run and get the number of published RAML/OAS assets to\n" +
        "Anypoint Exchange. This clearly depicts how successful a C4E team is based on number of returned assets in\n" +
        "the response.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhbit. A developer is building a client application to invoke an API deployed to the STAGING environment that is\n" +
        "governed by a client ID enforcement policy.\n" +
        "What is required to successfully invoke the API?</br><img src='./_images/42.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
      "The client ID and secret for the Anypoint Platform account owning the API in the STAGING environment",
      "The client ID and secret for the Anypoint Platform account's STAGING environment",
      "The client ID and secret obtained from Anypoint Exchange for the API instance in the STAGING environment",
      "A valid OAuth token obtained from Anypoint Platform and its associated client ID and secret"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: The client ID and secret obtained from Anypoint Exchange for the API instance in the\n" +
        "STAGING environment\n" +
        "*****************************************\n" +
        ">> We CANNOT use the client ID and secret of Anypoint Platform account or any individual environments\n" +
        "for accessing the APIs\n" +
        ">> As the type of policy that is enforced on the API in question is \"Client ID Enforcment Policy\", OAuth\n" +
        "token based access won't work.\n" +
        "Right way to access the API is to use the client ID and secret obtained from Anypoint Exchange for the API\n" +
        "instance in a particular environment we want to work on.\n" +
        "References:\n" +
        "Managing API instance Contracts on API Manager\n" +
        "https://docs.mulesoft.com/api-manager/1.x/request-access-to-api-task\n" +
        "https://docs.mulesoft.com/exchange/to-request-access\n" +
        "https://docs.mulesoft.com/api-manager/2.x/policy-mule3-client-id-based-policies\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A REST API is being designed to implement a Mule application. What standard interface definition language can be used to define REST APIs?",
    "type": "radio",
    "options": [
      "Web Service Definition Language(WSDL)",
      "OpenAPI Specification (OAS)",
      "YAML",
      "AsyncAPI Specification"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Version 3.0.1 of a REST API implementation represents time values in PST time using ISO 8601 hh:mm:ss format. The API implementation needs to be changed to instead represent time values in CEST time using ISO 8601 hh:mm:ss format. When following the semver.org semantic versioning specification, what version should be assigned to the updated API implementation?",
    "type": "radio",
    "options": [
      "3.0.2",
      "4.0.0",
      "3.1.0",
      "3.0.1"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: 4.0.0\n" +
        "*****************************************\n" +
        "As per semver.org semantic versioning specification:\n" +
        "Given a version number MAJOR.MINOR.PATCH, increment the:\n" +
        "- MAJOR version when you make incompatible API changes.\n" +
        "- MINOR version when you add functionality in a backwards compatible manner.\n" +
        "- PATCH version when you make backwards compatible bug fixes.\n" +
        "As per the scenario given in the question, the API implementation is completely changing its behavior.\n" +
        "Although the format of the time is still being maintained as hh:mm:ss and there is no change in schema w.r.t\n" +
        "format, the API will start functioning different after this change as the times are going to come completely\n" +
        "different.\n" +
        "Example: Before the change, say, time is going as 09:00:00 representing the PST. Now on, after the change,\n" +
        "the same time will go as 18:00:00 as Central European Summer Time is 9 hours ahead of Pacific Time.\n" +
        ">> This may lead to some uncertain behavior on API clients depending on how they are handling the times in\n" +
        "the API response. All the API clients need to be informed that the API functionality is going to change and\n" +
        "will return in CEST format. So, this considered as a MAJOR change and the version of API for this new\n" +
        "change would be 4.0.0",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A retail company with thousands of stores has an API to receive data about purchases and insert it into a single database. Each individual store sends a batch of purchase data to the API about every 30 minutes. The API implementation uses a database bulk insert command to submit all the purchase data to a database using a custom JDBC driver provided by a data analytics solution provider. The API implementation is deployed to a single CloudHub worker. The JDBC driver processes the data into a set of several temporary disk files on the CloudHub worker, and then the data is sent to an analytics engine using a proprietary protocol. This process usually takes less than a few minutes. Sometimes a request fails. In this case, the logs show a message from the JDBC driver indicating an out-of-file-space message. When the request is resubmitted, it is successful. What is the best way to try to resolve this throughput issue?",
    "type": "radio",
    "options": [
      "If the CloudHub autoscaling policy is configured to add CloudHub workers",
      "Use a CloudHub autoscaling policy to increase the size of the CloudHub worker",
      "Increase the size of the CloudHub worker(s)",
      "Increase the number of CloudHub workers"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: Increase the size of the CloudHub worker(s)\n" +
        "*****************************************\n" +
        "The key details that we can take out from the given scenario are:\n" +
        ">> API implementation uses a database bulk insert command to submit all the purchase data to a database\n" +
        ">> JDBC driver processes the data into a set of several temporary disk files on the CloudHub worker\n" +
        ">> Sometimes a request fails and the logs show a message indicating an out-of-file-space message\n" +
        "Based on above details:>> Both auto-scaling options does NOT help because we cannot set auto-scaling rules based on error\n" +
        "messages. Auto-scaling rules are kicked-off based on CPU/Memory usages and not due to some given error or\n" +
        "disk space issues.\n" +
        ">> Increasing the number of CloudHub workers also does NOT help here because the reason for the failure is\n" +
        "not due to performance aspects w.r.t CPU or Memory. It is due to disk-space.\n" +
        ">> Moreover, the API is doing bulk insert to submit the received batch data. Which means, all data is handled\n" +
        "by ONE worker only at a time. So, the disk space issue should be tackled on \"per worker\" basis. Having\n" +
        "multiple workers does not help as the batch may still fail on any worker when disk is out of space on that\n" +
        "particular worker.\n" +
        "Therefore, the right way to deal this issue and resolve this is to increase the vCore size of the worker so that a\n" +
        "new worker with more disk space will be provisioned.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is true about API implementations when dealing with legal regulations that require all data processing to be performed within a certain jurisdiction (such as in the USA or the EU)?",
    "type": "radio",
    "options": [
      "They must avoid using the Object Store as it depends on services deployed ONLY to the US East region",
      "They must use a Jurisdiction-local external messaging system such as Active MQ rather than Anypoint MQ",
      "They must te deployed to Anypoint Platform runtime planes that are managed by Anypoint Platform control planes, with both planes in the same Jurisdiction",
      "They must ensure ALL data is encrypted both in transit and at rest"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: They must be deployed to Anypoint Platform runtime planes that are managed by Anypoint\n" +
        "Platform control planes, with both planes in the same Jurisdiction.\n" +
        "*****************************************\n" +
        ">> As per legal regulations, all data processing to be performed within a certain jurisdiction. Meaning, the data\n" +
        "in USA should reside within USA and should not go out. Same way, the data in EU should reside within EU\n" +
        "and should not go out.\n" +
        ">> So, just encrypting the data in transit and at rest does not help to be compliant with the rules. We need to\n" +
        "make sure that data does not go out too.\n" +
        ">> The data that we are talking here is not just about the messages that are published to Anypoint MQ. It\n" +
        "includes the apps running, transaction states, application logs, events, metric info and any other metadata. So,just replacing Anypoint MQ with a locally hosted ActiveMQ does NOT help.\n" +
        ">> The data that we are talking here is not just about the key/value pairs that are stored in Object Store. It\n" +
        "includes the messages published, apps running, transaction states, application logs, events, metric info and any\n" +
        "other metadata. So, just avoiding using Object Store does NOT help.\n" +
        ">> The only option left and also the right option in the given choices is to deploy application on runtime and\n" +
        "control planes that are both within the jurisdiction.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company uses a hybrid Anypoint Platform deployment model that combines the EU control plane with customer-hosted Mule runtimes. After successfully testing a Mule API implementation in the Staging environment, the Mule API implementation is set with environment-specific properties and must be promoted to the Production environment. What is a way that MuleSoft recommends to configure the Mule API implementation and automate its promotion to the Production environment?",
    "type": "radio",
    "options": [
      "Bundle properties files for each environment into the Mule API implementation's deployable archive, then promote the Mule API implementation to the Production environment using Anypoint CLI or the Anypoint Platform REST APIsB.",
      "Modify the Mule API implementation's properties in the API Manager Properties tab, then promote the Mule API implementation to the Production environment using API Manager",
      "Modify the Mule API implementation's properties in Anypoint Exchange, then promote the Mule API implementation to the Production environment using Runtime Manager",
      "Use an API policy to change properties in the Mule API implementation deployed to the Staging environment and another API policy to deploy the Mule API implementation to the Production environment"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Bundle properties files for each environment into the Mule API implementation's deployable\n" +
        "archive, then promote the Mule API implementation to the Production environment using Anypoint CLI or the\n" +
        "Anypoint Platform REST APIs\n" +
        "*****************************************\n" +
        ">> Anypoint Exchange is for asset discovery and documentation. It has got no provision to modify the\n" +
        "properties of Mule API implementations at all>> API Manager is for managing API instances, their contracts, policies and SLAs. It has also got no\n" +
        "provision to modify the properties of API implementations.\n" +
        ">> API policies are to address Non-functional requirements of APIs and has again got no provision to modify\n" +
        "the properties of API implementations.\n" +
        "So, the right way and recommended way to do this as part of development practice is to bundle properties files\n" +
        "for each environment into the Mule API implementation and just point and refer to respective file per\n" +
        "environment.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API implementation returns three X-RateLimit-* HTTP response headers to a requesting API client. What type of information do these response headers indicate to the API client?",
    "type": "radio",
    "options": [
      "The error codes that result from throttling",
      "A correlation ID that should be sent in the next request",
      "The HTTP response size",
      "The remaining capacity allowed by the API implementation"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API has been updated in Anypoint exchange by its API producer from version 3.1.1 to 3.2.0 following accepted semantic versioning practices and the changes have been communicated via the APIs public portal.</br>The API endpoint does NOT change in the new version. How should the developer of an API client respond to this change?",
    "type": "radio",
    "options": [
      "The API producer should be requested to run the old version in parallel with the new one",
      "The API producer should be contacted to understand the change to existing functionality",
      "The API client code only needs to be changed if it needs to take advantage of the new features",
      "The API clients need to update the code on their side and need to do full regression"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization is implementing a Quote of the Day API that caches today's quote. </br>What scenario can use the GoudHub Object Store via the Object Store connector to persist the cache's state?",
    "type": "radio",
    "options": [
      "When there are three CloudHub deployments of the API implementation to three separate CloudHub regions that must share the cache state",
      "When there are two CloudHub deployments of the API implementation by two Anypoint Platform business groups to the same CloudHub region that must share the cache state",
      "When there is one deployment of the API implementation to CloudHub and anottV deployment to a customer-hosted Mule runtime that must share the cache state",
      "When there is one CloudHub deployment of the API implementation to three CloudHub workers that must share the cache state"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Explanation\n" +
        "Correct Answer: When there is one CloudHub deployment of the API implementation to three CloudHub\n" +
        "workers that must share the cache state.\n" +
        "*****************************************\n" +
        "Key details in the scenario:\n" +
        ">> Use the CloudHub Object Store via the Object Store connector\n" +
        "Considering above details:\n" +
        ">> CloudHub Object Stores have one-to-one relationship with CloudHub Mule Applications.\n>> We CANNOT use an application's CloudHub Object Store to be shared among multiple Mule applications\n" +
        "running in different Regions or Business Groups or Customer-hosted Mule Runtimes by using Object Store\n" +
        "connector.\n" +
        ">> If it is really necessary and very badly needed, then Anypoint Platform supports a way by allowing access\n" +
        "to CloudHub Object Store of another application using Object Store REST API. But NOT using Object Store\n" +
        "connector.\n" +
        "So, the only scenario where we can use the CloudHub Object Store via the Object Store connector to persist\n" +
        "the cache’s state is when there is one CloudHub deployment of the API implementation to multiple CloudHub\n" +
        "workers that must share the cache state.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "When must an API implementation be deployed to an Anypoint VPC?",
    "type": "radio",
    "options": [
      "When the API Implementation must invoke publicly exposed services that are deployed outside of CloudHub in a customer- managed AWS instance",
      "When the API implementation must be accessible within a subnet of a restricted customer-hosted network that does not allow public access",
      "When the API implementation must be deployed to a production AWS VPC using the Mule Maven plugin",
      "When the API Implementation must write to a persistent Object Store"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the main change to the IT operating model that MuleSoft recommends to organizations to improve innovation and clock speed?",
    "type": "radio",
    "options": [
      "Drive consumption as much as production of assets; this enables developers to discover and reuse assets from other projects and encourages standardization",
      "Expose assets using a Master Data Management (MDM) system; this standardizes projects and enables developers to quickly discover and reuse assets from other projects",
      "Implement SOA for reusable APIs to focus on production over consumption; this standardizes on XML and WSDL formats to speed up decision making",
      "Create a lean and agile organization that makes many small decisions everyday; this speeds up decision making and enables each line of business to take ownership of its projects"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Drive consumption as much as production of assets; this enables developers to discover and\n" +
        "reuse assets from other projects and encourages standardization\n" +
        "*****************************************\n" +
        ">> The main motto of the new IT Operating Model that MuleSoft recommends and made popular is to change\n" +
        "the way that they are delivered from a production model to a production + consumption model, which is done\n" +
        "through an API strategy called API-led connectivity.\n" +
        ">> The assets built should also be discoverable and self-serveable for reusablity across LOBs and\n" +
        "organization.\n" +
        ">> MuleSoft's IT operating model does not talk about SDLC model (Agile/ Lean etc) or MDM at all. So,\n" +
        "options suggesting these are not valid.\n" +
        "References:\n" +
        "https://blogs.mulesoft.com/biz/connectivity/what-is-a-center-for-enablement-c4e/\n" +
        "https://www.mulesoft.com/resources/api/secret-to-managing-it-projects",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application exposes an HTTPS endpoint and is deployed to three CloudHub workers that do not use static IP addresses. The Mule application expects a high volume of client requests in short time periods. What is the most cost-effective infrastructure component that should be used to serve the high volume of client requests?",
    "type": "radio",
    "options": [
      "A customer-hosted load balancer",
      "The CloudHub shared load balancer",
      "An API proxy",
      "Runtime Manager autoscaling\n"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: The CloudHub shared load balancer\n" +
        "*****************************************\n" +
        "The scenario in this question can be split as below:\n" +
        ">> There are 3 CloudHub workers (So, there are already good number of workers to handle high volume of\n" +
        "requests)\n" +
        ">> The workers are not using static IP addresses (So, one CANNOT use customer load-balancing solutions\n" +
        "without static IPs)\n" +
        ">> Looking for most cost-effective component to load balance the client requests among the workers.\n" +
        "Based on the above details given in the scenario:\n" +
        ">> Runtime autoscaling is NOT at all cost-effective as it incurs extra cost. Most over, there are already 3\n" +
        "workers running which is a good number.\n" +
        ">> We cannot go for a customer-hosted load balancer as it is also NOT most cost-effective (needs custom load\n" +
        "balancer to maintain and licensing) and same time the Mule App is not having Static IP Addresses which\n" +
        "limits from going with custom load balancing.\n" +
        ">> An API Proxy is irrelevant there as it has no role to play w.r.t handling high volumes or load balancing.\n" +
        "So, the only right option to go with and fits the purpose of scenario being most cost-effective is - using a\n" +
        "CloudHub Shared Load Balancer.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What Anypoint Connectors support transactions?",
    "type": "radio",
    "options": [
      "Database, JMS, VM",
      "Database, 3MS, HTTP",
      "Database, JMS, VM, SFTP",
      "Database, VM, File"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "When using CloudHub with the Shared Load Balancer, what is managed EXCLUSIVELY by the API implementation (the Mule application) and NOT by Anypoint Platform?",
    "type": "radio",
    "options": [
      "The assignment of each HTTP request to a particular CloudHub worker",
      "The logging configuration that enables log entries to be visible in Runtime Manager",
      "The SSL certificates used by the API implementation to expose HTTPS endpoints",
      "The number of DNS entries allocated to the API implementation"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Explanation\n" +
        "Correct Answer: The SSL certificates used by the API implementation to expose HTTPS endpoints\n" +
        "*****************************************\n" +
        ">> The assignment of each HTTP request to a particular CloudHub worker is taken care by Anypoint Platform\n" +
        "itself. We need not manage it explicitly in the API implementation and in fact we CANNOT manage it in the\n" +
        "API implementation.\n" +
        ">> The logging configuration that enables log entries to be visible in Runtime Manager is ALWAYS managed\n" +
        "in the API implementation and NOT just for SLB. So this is not something we do EXCLUSIVELY when\n" +
        "using SLB.\n" +
        ">> We DO NOT manage the number of DNS entries allocated to the API implementation inside the code.\n" +
        "Anypoint Platform takes care of this.\n" +
        "It is the SSL certificates used by the API implementation to expose HTTPS endpoints that is to be managed\n" +
        "EXCLUSIVELY by the API implementation. Anypoint Platform does NOT do this when using SLBs.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Which layer in the API-led connectivity focuses on unlocking key systems, legacy systems, data sources etc and exposes the functionality?",
    "type": "radio",
    "options": [
      "Experience Layer",
      "Process Layer",
      "System Layer"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "The implementation of a Process API must change. </br>What is a valid approach that minimizes the impact of this change on API clients?",
    "type": "radio",
    "options": [
      "Update the RAML definition of the current Process API and notify API client developers by sending them links to the updated RAML definition",
      "Postpone changes until API consumers acknowledge they are ready to migrate to a new Process API or API version",
      "Implement required changes to the Process API implementation so that whenever possible, the Process API's RAML definition remains unchanged",
      "Implement the Process API changes in a new API implementation, and have the old API implementation return an HTTP status code 301 - Moved Permanently to inform API clients they should be calling the new API implementation"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Implement required changes to the Process API implementation so that, whenever possible,\n" +
        "the Process API’s RAML definition remains unchanged.\n" +
        "*****************************************\n" +
        "Key requirement in the question is:\n" +
        ">> Approach that minimizes the impact of this change on API clients\n" +
        "Based on above:\n" +
        ">> Updating the RAML definition would possibly impact the API clients if the changes require any thing\n" +
        "mandatory from client side. So, one should try to avoid doing that until really necessary.\n" +
        ">> Implementing the changes as a completely different API and then redirectly the clients with 3xx status\n" +
        "code is really upsetting design and heavily impacts the API clients.\n" +
        ">> Organisations and IT cannot simply postpone the changes required until all API consumers acknowledge\n" +
        "they are ready to migrate to a new Process API or API version. This is unrealistic and not possible.\n" +
        "The best way to handle the changes always is to implement required changes to the API implementations so\n" +
        "that, whenever possible, the API’s RAML definition remains unchanged.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company has started to create an application network and is now planning to implement a Center for Enablement (C4E) organizational model. What key factor would lead the company to decide upon a federated rather than a centralized C4E?",
    "type": "radio",
    "options": [
      "When there are a large number of existing common assets shared by development teams",
      "When various teams responsible for creating APIs are new to integration and hence need extensive training",
      "When development is already organized into several independent initiatives or groups",
      "When the majority of the applications in the application network are cloud based"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: When development is already organized into several independent initiatives or groups\n" +
        "*****************************************\n" +
        ">> It would require lot of process effort in an organization to have a single C4E team coordinating with\n" +
        "multiple already organized development teams which are into several independent initiatives. A single C4E\n" +
        "works well with different teams having at least a common initiative. So, in this scenario, federated C4E works\n" +
        "well instead of centralized C4E.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company requires Mule applications deployed to CloudHub to be isolated between non-production and production environments. This is so Mule applications deployed to non-production environments can only access backend systems running in their customer-hosted non-production environment, and so Mule applications deployed to production environments can only access backend systems running in their customer-hosted production environment. How does MuleSoft recommend modifying Mule applications, configuring environments, or changing infrastructure to support this type of per-environment isolation between Mule applications and backend systems?",
    "type": "radio",
    "options": [
      "Modify properties of Mule applications deployed to the production Anypoint Platform environments to prevent access from non-production Mule applications",
      "Configure firewall rules in the infrastructure inside each customer-hosted environment so that only IP addresses from the corresponding Anypoint Platform environments are allowed to communicate with corresponding backend systems",
      "Create non-production and production environments in different Anypoint Platform business groups",
      "Create separate Anypoint VPCs for non-production and production environments, then configure connections to the backend systems in the corresponding customer-hosted environments"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: Create separate Anypoint VPCs for non-production and production environments, then\n" +
        "configure connections to the backend systems in the corresponding customer-hosted environments.\n" +
        "*****************************************\n" +
        ">> Creating different Business Groups does NOT make any difference w.r.t accessing the non-prod and prod customer-hosted environments. Still they will be accessing from both Business Groups unless process network\n" +
        "restrictions are put in place.\n" +
        ">> We need to modify or couple the Mule Application Implementations with the environment. In fact, we\n" +
        "should never implements application coupled with environments by binding them in the properties. Only basic\n" +
        "things like endpoint URL etc should be bundled in properties but not environment level access restrictions.\n" +
        ">> IP addresses on CloudHub are dynamic until unless a special static addresses are assigned. So it is not\n" +
        "possible to setup firewall rules in customer-hosted infrastrcture. More over, even if static IP addresses are\n" +
        "assigned, there could be 100s of applications running on cloudhub and setting up rules for all of them would\n" +
        "be a hectic task, non-maintainable and definitely got a good practice.\n" +
        ">> The best practice recommended by Mulesoft (In fact any cloud provider), is to have your Anypoint VPCs\n" +
        "seperated for Prod and Non-Prod and perform the VPC peering or VPN tunneling for these Anypoint VPCs to\n" +
        "respective Prod and Non-Prod customer-hosted environment networks.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization wants to make sure only known partners can invoke the organization's APIs. To achieve this security goal, the organization wants to enforce a Client ID Enforcement policy in API Manager so that only registered partner applications can invoke the organization's APIs. In what type of API implementation does MuleSoft recommend adding an API proxy to enforce the Client ID Enforcement policy, rather than embedding the policy directly in the application's JVM?",
    "type": "radio",
    "options": [
      "A Mule 3 application using APIkit",
      "A Mule 3 or Mule 4 application modified with custom Java code",
      "A Mule 4 application with an API specification",
      "A Non-Mule application"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: A Non-Mule application\n" +
        "*****************************************\n" +
        ">> All type of Mule applications (Mule 3/ Mule 4/ with APIkit/ with Custom Java Code etc) running on Mule\n" +
        "Runtimes support the Embedded Policy Enforcement on them.\n" +
        ">> The only option that cannot have or does not support embedded policy enforcement and must have API\n" +
        "Proxy is for Non-Mule Applications.\n" +
        "So, Non-Mule application is the right answer.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API client calls one method from an existing API implementation. The API implementation is later updated. What change to the API implementation would require the API client's invocation logic to also be updated?",
    "type": "radio",
    "options": [
      "When the data type of the response is changed for the method called by the API client",
      "When a new method is added to the resource used by the API client",
      "When a new required field is added to the method called by the API client",
      "When a child method is added to the method called by the API client"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: When a new required field is added to the method called by the API client\n" +
        "*****************************************\n" +
        ">> Generally, the logic on API clients need to be updated when the API contract breaks.\n" +
        ">> When a new method or a child method is added to an API , the API client does not break as it can still\n" +
        "continue to use its existing method. So these two options are out.\n" +
        ">> We are left for two more where \"datatype of the response if changed\" and \"a new required field is added\".\n" +
        ">> Changing the datatype of the response does break the API contract. However, the question is insisting on the \"invocation\" logic and not about the response handling logic. The API client can still invoke the API\n" +
        "successfully and receive the response but the response will have a different datatype for some field.\n" +
        ">> Adding a new required field will break the API's invocation contract. When adding a new required field,\n" +
        "the API contract breaks the RAML or API spec agreement that the API client/API consumer and API provider\n" +
        "has between them. So this requires the API client invocation logic to also be updated.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is a key requirement when using an external Identity Provider for Client Management in Anypoint Platform?",
    "type": "radio",
    "options": [
      "Single sign-on is required to sign in to Anypoint Platform",
      "The application network must include System APIs that interact with the Identity Provider",
      "To invoke OAuth 2.0-protected APIs managed by Anypoint Platform, API clients must submit access tokens issued by that same Identity Provider",
      "APIs managed by Anypoint Platform must be protected by SAML 2.0 policies"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "https://www.folkstalk.com/2019/11/mulesoft-integration-and-platform.html\n" +
        "Explanation\n" +
        "Correct Answer: To invoke OAuth 2.0-protected APIs managed by Anypoint Platform, API clients must\n" +
        "submit access tokens issued by that same Identity Provider\n" +
        "*****************************************\n" +
        ">> It is NOT necessary that single sign-on is required to sign in to Anypoint Platform because we are using an\n" +
        "external Identity Provider for Client Management\n" +
        ">> It is NOT necessary that all APIs managed by Anypoint Platform must be protected by SAML 2.0 policies\n" +
        "because we are using an external Identity Provider for Client Management\n" +
        ">> Not TRUE that the application network must include System APIs that interact with the Identity Provider\n" +
        "because we are using an external Identity Provider for Client Management\n" +
        "Only TRUE statement in the given options is - \"To invoke OAuth 2.0-protected APIs managed by Anypoint\n" +
        "Platform, API clients must submit access tokens issued by that same Identity Provider\"\n" +
        "References:\n" +
        "https://docs.mulesoft.com/api-manager/2.x/external-oauth-2.0-token-validation-policy\n" +
        "https://blogs.mulesoft.com/dev/api-dev/api-security-ways-to-authenticate-and-authorize/",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Once an API Implementation is ready and the API is registered on API Manager, who should request the access to the API on Anypoint Exchange?",
    "type": "radio",
    "options": [
      "None",
      "Both",
      "API Client",
      "API Consumer"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Explanation\n" +
        "Correct Answer: API Consumer\n" +
        "*****************************************\n" +
        ">> API clients are piece of code or programs that use the client credentials of API consumer but does not\n" +
        "directly interact with Anypoint Exchange to get the access\n" +
        ">> API consumer is the one who should get registered and request access to API and then API client needs to\n" +
        "use those client credentials to hit the APIs\n" +
        "So, API consumer is the one who needs to request access on the API from Anypoint Exchange",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "True or False. We should always make sure that the APIs being designed and developed are self-servable even if it needs more man-day effort and resources.",
    "type": "radio",
    "options": [
      "FALSE",
      "TRUE"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Explanation\n" +
        "Correct Answer: TRUE\n" +
        "*****************************************\n" +
        ">> As per MuleSoft proposed IT Operating Model, designing APIs and making sure that they are discoverable\n" +
        "and self-servable is VERY VERY IMPORTANT and decides the success of an API and its application\n" +
        "network.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Select the correct Owner-Layer combinations from below options",
    "type": "radio",
    "options": [
      "1. App Developers owns and focuses on Experience Layer APIs </br>2. Central IT owns and focuses on Process Layer APIs </br>3. LOB IT owns and focuses on System Layer APIs",
      "1. Central IT owns and focuses on Experience Layer APIs </br>2. LOB IT owns and focuses on Process Layer APIs </br>3. App Developers owns and focuses on System Layer APIs",
      "1. App Developers owns and focuses on Experience Layer APIs </br>2. LOB IT owns and focuses on Process Layer APIs </br>3. Central IT owns and focuses on System Layer APIs"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer:\n" +
        "1. App Developers owns and focuses on Experience Layer APIs\n" +
        "2. LOB IT owns and focuses on Process Layer APIs\n" +
        "3. Central IT owns and focuses on System Layer APIs\n" +
        "References:\n" +
        "https://blogs.mulesoft.com/biz/api/experience-api-ownership/\n" +
        "https://blogs.mulesoft.com/biz/api/process-api-ownership/\n" +
        "https://blogs.mulesoft.com/biz/api/system-api-ownership/",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API experiences a high rate of client requests (TPS) vwth small message paytoads. How can usage limits be imposed on the API based on the type of client application?",
    "type": "radio",
    "options": [
      "Use an SLA-based rate limiting policy and assign a client application to a matching SLA tier based on its type",
      "Use a spike control policy that limits the number of requests for each client application type",
      "Use a cross-origin resource sharing (CORS) policy to limit resource sharing between client applications, configured by the client application type",
      "Use a rate limiting policy and a client ID enforcement policy, each configured by the client application type"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Use an SLA-based rate limiting policy and assign a client application to a matching SLA tier\n" +
        "based on its type.\n" +
        "*****************************************\n" +
        ">> SLA tiers will come into play whenever any limits to be imposed on APIs based on client type",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What are 4 important Platform Capabilities offered by Anypoint Platform?",
    "type": "radio",
    "options": [
      "API Versioning, API Runtime Execution and Hosting, API Invocation, API Consumer Engagement",
      "API Design and Development, API Runtime Execution and Hosting, API Versioning, API Deprecation",
      "API Design and Development, API Runtime Execution and Hosting, API Operations and Management, API Consumer Engagement",
      "API Design and Development, API Deprecation, API Versioning, API Consumer Engagement"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: API Design and Development, API Runtime Execution and Hosting, API Operations and\n" +
        "Management, API Consumer Engagement\n" +
        "*****************************************\n" +
        ">> API Design and Development - Anypoint Studio, Anypoint Design Center, Anypoint Connectors\n" +
        ">> API Runtime Execution and Hosting - Mule Runtimes, CloudHub, Runtime Services\n" +
        ">> API Operations and Management - Anypoint API Manager, Anypoint Exchange\n" +
        ">> API Consumer Management - API Contracts, Public Portals, Anypoint Exchange, API Notebooks",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company has created a successful enterprise data model (EDM). The company is committed to building an application network by adopting modern APIs as a core enabler of the company's IT operating model. At what API tiers (experience, process, system) should the company require reusing the EDM when designing modern API data models?",
    "type": "radio",
    "options": [
      "At the experience and process tiers",
      "At the experience and system tiers",
      "At the process and system tiers",
      "At the experience, process, and system tiers"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: At the process and system tiers\n" +
        "*****************************************\n" +
        ">> Experience Layer APIs are modeled and designed exclusively for the end user's experience. So, the data\n" +
        "models of experience layer vary based on the nature and type of such API consumer. For example, Mobile\n" +
        "consumers will need light-weight data models to transfer with ease on the wire, where as web-based\n" +
        "consumers will need detailed data models to render most of the info on web pages, so on. So, enterprise data\n" +
        "models fit for the purpose of canonical models but not of good use for experience APIs.\n" +
        ">> That is why, EDMs should be used extensively in process and system tiers but NOT in experience tier.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What correctly characterizes unit tests of Mule applications?",
    "type": "radio",
    "options": [
      "They test the validity of input and output of source and target systems",
      "They must be run in a unit testing environment with dedicated Mule runtimes for the environment",
      "They must be triggered by an external client tool or event source",
      "They are typically written using MUnit to run in an embedded Mule runtime that does not require external connectivity"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: They are typically written using MUnit to run in an embedded Mule runtime that does not\n" +
        "require external connectivity.\n" +
        "*****************************************\n" +
        "Below TWO are characteristics of Integration Tests but NOT unit tests:\n" +
        ">> They test the validity of input and output of source and target systems.\n" +
        ">> They must be triggered by an external client tool or event source.\n" +
        "It is NOT TRUE that Unit Tests must be run in a unit testing environment with dedicated Mule runtimes for\n" +
        "the environment.\n" +
        "MuleSoft offers MUnit for writing Unit Tests and they run in an embedded Mule Runtime without needing\n" +
        "any separate/ dedicated Runtimes to execute them. They also do NOT need any external connectivity as MUnit\n" +
        "supports mocking via stubs.\n" +
        "https://dzone.com/articles/munit-framework",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Which of the following sequence is correct?",
    "type": "radio",
    "options": [
      "API Client implementes logic to call an API >> API Consumer requests access to API >> API Implementation routes the request to >> API",
      "API Consumer requests access to API >> API Client implementes logic to call an API >> API routes the request to >> API Implementation",
      "API Consumer implementes logic to call an API >> API Client requests access to API >> API Implementation routes the request to >> API",
      "API Client implementes logic to call an API >> API Consumer requests access to API >> API routes the request to >> API Implementation"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: API Consumer requests access to API >> API Client implementes logic to call an API >>\n" +
        "API routes the request to >> API Implementation\n" +
        "*****************************************\n" +
        ">> API consumer does not implement any logic to invoke APIs. It is just a role. So, the option stating \"API\n" +
        "Consumer implementes logic to call an API\" is INVALID.\n" +
        ">> API Implementation does not route any requests. It is a final piece of logic where functionality of target\n" +
        "systems is exposed. So, the requests should be routed to the API implementation by some other entity. So, the\n" +
        "options stating \"API Implementation routes the request to >> API\" is INVALID\n" +
        ">> The statements in one of the options are correct but sequence is wrong. The sequence is given as \"API\n" +
        "Client implementes logic to call an API >> API Consumer requests access to API >> API routes the request to\n" +
        ">> API Implementation\". Here, the statements in the options are VALID but sequence is WRONG.\n" +
        ">> Right option and sequence is the one where API consumer first requests access to API on Anypoint\n" +
        "Exchange and obtains client credentials. API client then writes logic to call an API by using the access client\n" +
        "credentials requested by API consumer and the requests will be routed to API implementation via the API\n" +
        "which is managed by API Manager.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A system API is deployed to a primary environment as well as to a disaster recovery (DR) environment, with different DNS names in each environment. A process API is a client to the system API and is being rate limited by the system API, with different limits in each of the environments. The system API's DR environment provides only 20% of the rate limiting offered by the primary environment. What is the best API fault-tolerant invocation strategy to reduce overall errors in the process API, given these conditions and constraints?",
    "type": "radio",
    "options": [
      "Invoke the system API deployed to the primary environment; add timeout and retry logic to the process API to avoid intermittent failures; if it still fails, invoke the system API deployed to the DR environment",
      "Invoke the system API deployed to the primary environment; add retry logic to the process API to handle intermittent failures by invoking the system API deployed to the DR environment",
      "In parallel, invoke the system API deployed to the primary environment and the system API deployed to the DR environment; add timeout and retry logic to the process API to avoid intermittent failures; add logic to the process API to combine the results",
      "Invoke the system API deployed to the primary environment; add timeout and retry logic to the process API to avoid intermittent failures; if it still fails, invoke a copy of the process API deployed to the DR environment"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Explanation\n" +
        "Correct Answer: Invoke the system API deployed to the primary environment; add timeout and retry logic to\n" +
        "the process API to avoid intermittent failures; if it still fails, invoke the system API deployed to the DR\n" +
        "environment\n" +
        "*****************************************\n" +
        "There is one important consideration to be noted in the question which is - System API in DR environment\n" +
        "provides only 20% of the rate limiting offered by the primary environment. So, comparitively, very less calls\n" +
        "will be allowed into the DR environment API opposed to its primary environment. With this in mind, lets\n" +
        "analyse what is the right and best fault-tolerant invocation strategy.\n" +
        "1. Invoking both the system APIs in parallel is definitely NOT a feasible approach because of the 20%\n" +
        "limitation we have on DR environment. Calling in parallel every time would easily and quickly exhaust the\n" +
        "rate limits on DR environment and may not give chance to genuine intermittent error scenarios to let in during\n" +
        "the time of need.\n" +
        "2. Another option given is suggesting to add timeout and retry logic to process API while invoking primary\n" +
        "environment's system API. This is good so far. However, when all retries failed, the option is suggesting to\n" +
        "invoke the copy of process API on DR environment which is not right or recommended. Only system API is\n" +
        "the one to be considered for fallback and not the whole process API. Process APIs usually have lot of heavy\n" +
        "orchestration calling many other APIs which we do not want to repeat again by calling DR's process API. So\n" +
        "this option is NOT right.\n" +
        "3. One more option given is suggesting to add the retry (no timeout) logic to process API to directly retry on\n" +
        "DR environment's system API instead of retrying the primary environment system API first. This is not at all a\n" +
        "proper fallback. A proper fallback should occur only after all retries are performed and exhausted on Primary\n" +
        "environment first. But here, the option is suggesting to directly retry fallback API on first failure itself without\n" +
        "trying main API. So, this option is NOT right too.\n" +
        "This leaves us one option which is right and best fit.\n" +
        "- Invoke the system API deployed to the primary environment\n" +
        "- Add Timeout and Retry logic on it in process API\n" +
        "- If it fails even after all retries, then invoke the system API deployed to the DR environment.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is true about the technology architecture of Anypoint VPCs?",
    "type": "radio",
    "options": [
      "The private IP address range of an Anypoint VPC is automatically chosen by CloudHub",
      "Traffic between Mule applications deployed to an Anypoint VPC and on-premises systems can stay within a private network",
      "Each CloudHub environment requires a separate Anypoint VPC\n",
      "VPC peering can be used to link the underlying AWS VPC to an on-premises (non AWS) private network"
    ],
    "correctAnswer": 1,
    "justification": "Explanation\n" +
        "Correct Answer: Traffic between Mule applications deployed to an Anypoint VPC and on-premises systems\n" +
        "can stay within a private network\n" +
        "*****************************************\n" +
        ">> The private IP address range of an Anypoint VPC is NOT automatically chosen by CloudHub. It is chosen\n" +
        "by us at the time of creating VPC using thr CIDR blocks.\n" +
        "CIDR Block: The size of the Anypoint VPC in Classless Inter-Domain Routing (CIDR) notation.\n" +
        "For example, if you set it to 10.111.0.0/24, the Anypoint VPC is granted 256 IP addresses from 10.111.0.0 to\n" +
        "10.111.0.255.\n" +
        "Ideally, the CIDR Blocks you choose for the Anypoint VPC come from a private IP space, and should not\n" +
        "overlap with any other Anypoint VPC’s CIDR Blocks, or any CIDR Blocks in use in your corporate network.\nthat each CloudHub environment requires a separate Anypoint VPC. Once an Anypoint VPC is created, we\n" +
        "can choose a same VPC by multiple environments. However, it is generally a best and recommended practice\n" +
        "to always have seperate Anypoint VPCs for Non-Prod and Prod environments.\n" +
        ">> We use Anypoint VPN to link the underlying AWS VPC to an on-premises (non AWS) private network.\n" +
        "NOT VPC Peering.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What condition requires using a CloudHub Dedicated Load Balancer?",
    "type": "radio",
    "options": [
      "When cross-region load balancing is required between separate deployments of the same Mule application",
      "When custom DNS names are required for API implementations deployed to customer-hosted Mule runtimes",
      "When API invocations across multiple CloudHub workers must be load balanced",
      "When server-side load-balanced TLS mutual authentication is required between API implementations and API clients"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: When server-side load-balanced TLS mutual authentication is required between API\n" +
        "implementations and API clients\n" +
        "*****************************************\n" +
        "Fact/ Memory Tip: Although there are many benefits of CloudHub Dedicated Load balancer, TWO important\n" +
        "things that should come to ones mind for considering it are:\n" +
        ">> Having URL endpoints with Custom DNS names on CloudHub deployed apps\n" +
        ">> Configuring custom certificates for both HTTPS and Two-way (Mutual) authentication.\n" +
        "Coming to the options provided for this question:\n" +
        ">> We CANNOT use DLB to perform cross-region load balancing between separate deployments of the same\n" +
        "Mule application.\n" +
        ">> We can have mapping rules to have more than one DLB URL pointing to same Mule app. But vicevera\n" +
        "(More than one Mule app having same DLB URL) is NOT POSSIBLE\n" +
        ">> It is true that DLB helps to setup custom DNS names for Cloudhub deployed Mule apps but NOT true for\n" +
        "apps deployed to Customer-hosted Mule Runtimes.\n" +
        ">> It is true to that we can load balance API invocations across multiple CloudHub workers using DLB but it\n" +
        "is NOT A MUST. We can achieve the same (load balancing) using SLB (Shared Load Balancer) too. We DO\n" +
        "NOT necessarily require DLB for achieve it.\n" +
        "So the only right option that fits the scenario and requires us to use DLB is when TLS mutual authentication is\n" +
        "required between API implementations and API clients.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Due to a limitation in the backend system, a system API can only handle up to 500 requests per second. What is the best type of API policy to apply to the system API to avoid overloading the backend system?",
    "type": "radio",
    "options": [
      "Rate limiting",
      "HTTP caching",
      "Rate limiting - SLA based",
      "Spike control"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: Spike control\n" +
        "*****************************************\n" +
        ">> First things first, HTTP Caching policy is for purposes different than avoiding the backend system from\n" +
        "overloading. So this is OUT.\n" +
        ">> Rate Limiting and Throttling/ Spike Control policies are designed to limit API access, but have different\n" +
        "intentions.\n" +
        ">> Rate limiting protects an API by applying a hard limit on its access.\n" +
        ">> Throttling/ Spike Control shapes API access by smoothing spikes in traffic.\n" +
        "That is why, Spike Control is the right option.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "In an organization, the InfoSec team is investigating Anypoint Platform related data traffic. </br>From where does most of the data available to Anypoint Platform for monitoring and alerting originate?",
    "type": "radio",
    "options": [
      "From the Mule runtime or the API implementation, depending on the deployment model",
      "From various components of Anypoint Platform, such as the Shared Load Balancer, VPC, and Mule runtimes",
      "From the Mule runtime or the API Manager, depending on the type of data",
      "From the Mule runtime irrespective of the deployment model"
    ],
    "correctAnswer": 3,
    "justification": "Explanation\n" +
        "Correct Answer: From the Mule runtime irrespective of the deployment model\n" +
        "*****************************************\n" +
        ">> Monitoring and Alerting metrics are always originated from Mule Runtimes irrespective of the deployment\n" +
        "model.\n" +
        ">> It may seems that some metrics (Runtime Manager) are originated from Mule Runtime and some are (API\n" +
        "Invocations/ API Analytics) from API Manager. However, this is realistically NOT TRUE. The reason is, API\n" +
        "manager is just a management tool for API instances but all policies upon applying on APIs eventually gets\n" +
        "executed on Mule Runtimes only (Either Embedded or API Proxy).\n" +
        ">> Similarly all API Implementations also run on Mule Runtimes.\n" +
        "So, most of the day required for monitoring and alerts are originated fron Mule Runtimes only irrespective of\n" +
        "whether the deployment model is MuleSoft-hosted or Customer-hosted or Hybrid.\n",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "How are an API implementation, API client, and API consumer combined to invoke and process an API?",
    "type": "radio",
    "options": [
      "The API consumer creates an API implementation, which receives API invocations from an API such that they are processed for an API client",
      "The API client creates an API consumer, which receives API invocations from an API such that they are processed for an API implementation",
      "The ApI consumer creates an API client, which sends API invocations to an API such that they are processed by an API implementation",
      "The ApI client creates an API consumer, which sends API invocations to an API such that they are processed by an API implementation"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: The API consumer creates an API client, which sends API invocations to an API such that\n" +
        "they are processed by an API implementation\n" +
        "*****************************************\n" +
        "Terminology:\n" +
        ">> API Client - It is a piece of code or program the is written to invoke an API\n" +
        ">> API Consumer - An owner/entity who owns the API Client. API Consumers write API clients.\n" +
        ">> API - The provider of the API functionality. Typically an API Instance on API Manager where they are\n" +
        "managed and operated.\n" +
        ">> API Implementation - The actual piece of code written by API provider where the functionality of the API\n" +
        "is implemented. Typically, these are Mule Applications running on Runtime Manager.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Mule applications that implement a number of REST APIs are deployed to their own subnet that is inaccessible from outside the organization. </br>External business-partners need to access these APIs, which are only allowed to be invoked from a separate subnet dedicated to partners - called Partner-subnet. This subnet is accessible from the public internet, which allows these external partners to reach it. </br>Anypoint Platform and Mule runtimes are already deployed in Partner-subnet. These Mule runtimes can already access the APIs. </br>What is the most resource-efficient solution to comply with these requirements, while having the least impact on other applications that are currently using the APIs?",
    "type": "radio",
    "options": [
      "Implement (or generate) an API proxy Mule application for each of the APIs, then deploy the API proxies to the Mule runtimes",
      "Redeploy the API implementations to the same servers running the Mule runtimes",
      "Add an additional endpoint to each API for partner-enablement consumption",
      "Duplicate the APIs as Mule applications, then deploy them to the Mule runtimes"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An organization uses various cloud-based SaaS systems and multiple on-premises systems. The on-premises systems are an important part of the organization's application network and can only be accessed from within the organization's intranet. </br>What is the best way to configure and use Anypoint Platform to support integrations with both the cloud-based SaaS systems and on-premises systems?",
    "type": "radio",
    "options": [
      "Use CloudHub-deployed Mule runtimes in an Anypoint VPC managed by Anypoint Platform Private Cloud Edition control plane</br><img src='./_images/43.png' alt='Minha Figura'></br>",
      "Use CloudHub-deployed Mule runtimes in the shared worker cloud managed by the MuleSoft-hosted Anypoint Platform control plane</br><img src='./_images/44.png' alt='Minha Figura'></br>",
      "Use an on-premises installation of Mule runtimes that are completely isolated with NO external network access, managed by the Anypoint Platform Private Cloud Edition control plane</br><img src='./_images/45.png' alt='Minha Figura'></br>",
      "Use a combination of Cloud Hub-deployed and manually provisioned on-premises Mule runtimes managed by the MuleSoft-hosted Anypoint Platform control plane</br><img src='./_images/46.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\nCorrect Answer: Use a combination of CloudHub-deployed and manually provisioned on-premises Mule\n" +
        "runtimes managed by the MuleSoft-hosted Platform control plane.\n" +
        "*****************************************\n" +
        "Key details to be taken from the given scenario:\n" +
        ">> Organization uses BOTH cloud-based and on-premises systems\n" +
        ">> On-premises systems can only be accessed from within the organization's intranet\n" +
        "Let us evaluate the given choices based on above key details:\n" +
        ">> CloudHub-deployed Mule runtimes can ONLY be controlled using MuleSoft-hosted control plane. We\n" +
        "CANNOT use Private Cloud Edition's control plane to control CloudHub Mule Runtimes. So, option\n" +
        "suggesting this is INVALID\n" +
        ">> Using CloudHub-deployed Mule runtimes in the shared worker cloud managed by the MuleSoft-hosted\n" +
        "Anypoint Platform is completely IRRELEVANT to given scenario and silly choice. So, option suggesting this\n" +
        "is INVALID\n" +
        ">> Using an on-premises installation of Mule runtimes that are completely isolated with NO external network\n" +
        "access, managed by the Anypoint Platform Private Cloud Edition control plane would work for On-premises\n" +
        "integrations. However, with NO external access, integrations cannot be done to SaaS-based apps. Moreover\n" +
        "CloudHub-hosted apps are best-fit for integrating with SaaS-based applications. So, option suggesting this is\n" +
        "BEST WAY.\n" +
        "The best way to configure and use Anypoint Platform to support these mixed/hybrid integrations is to use a\n" +
        "combination of CloudHub-deployed and manually provisioned on-premises Mule runtimes managed by the\n" +
        "MuleSoft-hosted Platform control plane.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "The application network is recomposable: it is built for change because it \"bends but does not break\"",
    "type": "radio",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company wants to move its Mule API implementations into production as quickly as possible. To protect access to all Mule application data and metadata, the company requires that all Mule applications be deployed to the company's customer-hosted infrastructure within the corporate firewall. What combination of runtime plane and control plane options meets these project lifecycle goals?",
    "type": "radio",
    "options": [
      "Manually provisioned customer-hosted runtime plane and customer-hosted control plane",
      "MuleSoft-hosted runtime plane and customer-hosted control plane",
      "Manually provisioned customer-hosted runtime plane and MuleSoft-hosted control plane",
      "iPaaS provisioned customer-hosted runtime plane and MuleSoft-hosted control plane\n"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Manually provisioned customer-hosted runtime plane and customer-hosted control plane\n" +
        "*****************************************\n" +
        "There are two key factors that are to be taken into consideration from the scenario given in the question.\n" +
        ">> Company requires both data and metadata to be resided within the corporate firewall\n" +
        ">> Company would like to go with customer-hosted infrastructure.\n" +
        "Any deployment model that is to deal with the cloud directly or indirectly (Mulesoft-hosted or Customer's own\n" +
        "cloud like Azure, AWS) will have to share atleast the metadata.\n" +
        "Application data can be controlled inside firewall by having Mule Runtimes on customer hosted runtime\n" +
        "plane. But if we go with Mulsoft-hosted/ Cloud-based control plane, the control plane required atleast some\n" +
        "minimum level of metadata to be sent outside the corporate firewall.\n" +
        "As the customer requirement is pretty clear about the data and metadata both to be within the corporate\n" +
        "firewall, even though customer wants to move to production as quickly as possible, unfortunately due to the\n" +
        "nature of their security requirements, they have no other option but to go with manually provisioned\n" +
        "customer-hosted runtime plane and customer-hosted control plane.",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What Mule application can have API policies applied by Anypoint Platform to the endpoint exposed by that Mule application?",
    "type": "radio",
    "options": [
      "A Mule application that accepts requests over HTTP/1.x</br><img src='./_images/47.png' alt='Minha Figura'></br>",
      "A Mule application that accepts JSON requests over TCP but is NOT required to provide a response\n</br><img src='./_images/48.png' alt='Minha Figura'></br>",
      "A Mute application that accepts JSON requests over WebSocket</br><img src='./_images/49.png' alt='Minha Figura'></br>",
      "A Mule application that accepts gRPC requests over HTTP/2</br><img src='./_images/50.png' alt='Minha Figura'></br>"
    ],
    "correctAnswer": 0,
    "justification": "Explanation\n" +
        "Correct Answer: Option A\n" +
        "*****************************************\n" +
        ">> Anypoint API Manager and API policies are applicable to all types of HTTP/1.x APIs.\n" +
        ">> They are not applicable to WebSocket APIs, HTTP/2 APIs and gRPC APIs",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "In which layer of API-led connectivity, does the business logic orchestration reside?",
    "type": "radio",
    "options": [
      "System Layer",
      "Experience Layer",
      "Process Layer"
    ],
    "correctAnswer": 2,
    "justification": "Explanation\n" +
        "Correct Answer: Process Layer\n" +
        "*****************************************\n" +
        ">> Experience layer is dedicated for enrichment of end user experience. This layer is to meet the needs of\n" +
        "different API clients/ consumers.\n>> System layer is dedicated to APIs which are modular in nature and implement/ expose various individual\n" +
        "functionalities of backend systems\n" +
        ">> Process layer is the place where simple or complex business orchestration logic is written by invoking one\n" +
        "or many System layer modular APIs\n" +
        "So, Process Layer is the right answer",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
