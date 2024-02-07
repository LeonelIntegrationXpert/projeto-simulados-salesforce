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
    "justification": "",
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
    "justification": "",
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
    "correctAnswer": 2,
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "correctAnswer": 1,
    "justification": "",
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
    "correctAnswer": 1,
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
    "correctAnswer": 3,
    "justification": "",
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
    "justification": "",
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
    "justification": "",
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
      "Na API mocking service Mule application must be deployed to CloudHub and then associated with the new API version in the organization’s Anypoint Exchange public portal",
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
    "justification": "",
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
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
