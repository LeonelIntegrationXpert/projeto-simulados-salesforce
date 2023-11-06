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

//</br><img src='./_images/images.jpg' alt='Minha Figura'></br>

var questionsData = [
  {
    "question": "Refer to this exhibit. Wha tis the result if “Insecure” is selected as parto of the HTTP Listener configuration?</br><img src='./_images/1.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "The HTTP Listener will only accept HTTP requests",
      "The HTTP Listener will accept any unauthenticated request",
      "Mutual TLS authentication will be enabled between this HTTP Listener and na HTTP client",
	  "The HTTP Listener will trust any certificate presented by the HTTP client"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A mule application exposes and API for creating payments. An Operations team wants to ensure that the Payment API is up and running at all times in production. Which approach should be used to test that the payment API is working in production?",
    "type": "radio",
    "options": [
	  "Create a health check endpoint that listens on a separate port and uses a separate HTTP Listener configuration from the API",
      "Configure the application to send health data to an external system",
      "Create a health check endpoint that reuses the same port number and HTTP Listener configuration as the API itself",
	  "Monitor the Payment API directly sending real customer payment data"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which pattern can a web API use to notify its client of state changes as soon as they occur?",
    "type": "radio",
    "options": [
	  "HTTP Webhock",
      "Shared database trigger",
      "Schedule Event Publisher",
	  "ETL data load"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application contain two policies Policy A and Policy A has order1, and Policy B has order 2. Policy A Policy B, and a flow are defined by he configuration below.</br>When a HTTP request arrives at the Mule application’s endpoint, what will be the execution order?</br><img src='./_images/2.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "A1, B1, F1, B2, A2",
      "B1, A1, F1, A2, B2",
      "F1, A1, B1, B2, A2",
	  "F1, B1, A1, A2, B2"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>A Mule Object Store is configured with an entry TTL of one second and an expiration interval of 30 seconds.</br>What is the result of the flow if processing between os’store and os:retrieve takes 10 seconds?</br><img src='./_images/3.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "nullPayload",
      "originalPayload",
      "OS:KEY_NOT_FOUND",
	  "testPayload"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A company with Mulesoft Titanium support develops a Salesforce System API using Mulesoft's out-of-the-box Salesforce Connector and deploys the API to Cloudhub.</br>Which steps provide the average number of requests and average response time of the Salesforce Connector?",
    "type": "radio",
    "options": [
	  "Access Anypoint Monitoring's built-in dashboard</br>Select a resource.</br>Create a custom dashboard to retrieve the information.",
      "Access Anypoint Monitoring's built-in dashboard</br>Select a resource</br>Locate the information under Log Management > Raw Data.",
      "Access Anypoint Monitoring's built-in dashboard</br>Select a resource</br>Locate the information under the Connectors tab.",
	  "Change the API implementation to capture the information in the log.</br>Retrieve the information from the log file."
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application uses API autodiscovery to access and enforce policies for a RESTful implementation.</br>What needs to be configured for the flowRef attribute of the autodiscovery global element?",
    "type": "radio",
    "options": [
	  "The name of the flow that has HTTP Listener to receive all incoming RESTful operation requests",
      "Nothing because flowRef is an optional attribute which can be passaed during runtime",
      "Any of the APIkit generated implementation flows",
	  "The name of the flow taht has APIkit Console to receive all incoming RESTful operation requests"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A developer is working on a project that requires encrypting all data before sending it to a backend application. To accomplish this, the developer will use PGP encryption in the Mule 4 Cryptography module.</br>What is required to encrypt the data before sending it to the backend application?",
    "type": "radio",
    "options": [
	  "The application needs the private key from the backend service to encrypt the data",
      "The application needs both the private and public keys to encrypt the data",
      "The application needs the public key from the backend service to encrypt the data",
	  "The application needs to configured HTTPS TLS context information to encrypt the data"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A new Mule project has been created in Anypoint Studio with the default settings.</br>Which file inside the Mule project must be modified before using Maven to successfully deploy the application?",
    "type": "radio",
    "options": [
	  "pom.xml",
      "mule-artifact.json",
      "settings.xml",
	  "config.yaml"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A developer deploys an API to Cloudhub and applies an OAuth API policy on API Manager. During testing, the API response is slow, so the developer reconfigures the API so that out-of-the-box HTTP Caching policy is applied first, and the OAuth API policy is applied second.</br>What will happen when an HTTP request is received?",
    "type": "radio",
    "options": [
	  "In case of a cache hit, only the HTTP Caching policy is evaluated; then the cached response is returned to the caller",
      "In case of a cache hit, both the OAuth and HTTP Caching policies are evaluated; then the cached response is returned to the caller",
      "In case of a cache miss, only HTTP Caching policy is evaluated; then the API retrieves the data from the API implementation, and the policy stores the data to be cached in Object Store",
	  "In case of a cache miss, both the OAuth and HTTP Caching policies are evaluated; then the API retrieves the  data from gthe API implementation, and the policy does not store the data in Object Store"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A custom policy needs to be developed to intercept all outbound HTTP requests made by Mule applications.</br>Which XML element must be used to intercept outbound HTTP request?",
    "type": "radio",
    "options": [
	  "http-policy:source",
      "It is not possible to intercept outgoing HTTP requests, only inbound requests",
      "http-policy:operation",
	  "http-policy:processor"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibits.</br>Bioinfo System API is implemented and published to Anypoint Exchange. A developer wants to invoke this API using its REST Connector.</br>What should be added to the POM?",
    "type": "radio",
    "options": [
	  "<img src='./_images/4.jpg' alt='Minha Figura'>",
      "<img src='./_images/5.jpg' alt='Minha Figura'>",
      "<img src='./_images/6.jpg' alt='Minha Figura'>",
	  "<img src='./_images/7.jpg' alt='Minha Figura'>",
	  "<img src='./_images/8.jpg' alt='Minha Figura'>"
    ],
    "correctAnswer": 4,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which type of cache invalidation does the Cache scope support without having to write any additional code?",
    "type": "radio",
    "options": [
	  "Notification-based invalidation",
      "Write-through invalidation",
      "Time to live",
	  "White-behind invalidation"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Two APIs are deployed to a two-node on-prem cluster. Due to a requirements change, the two APIs must communicate to exchange data asynchronously.</br>How can this be solved?",
    "type": "radio",
    "options": [
	  "The VM Connector is used to inter-application communication, so it is not possible to use the VM Connector",
      "Instead of using the VM Connector use <flow-ref>directly",
      "It is not possible to use the VM Connector since the APIs are running in a cluster mode and each mode has it own set of VM Queues",
	  "If the two APIs use the same domain, the VM Connector can be leveraged"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "When registering a client application with an existing API instance or API Group instance, what is required to manually approve or reject request access?",
    "type": "radio",
    "options": [
	  "To configure the SLA tier for the application",
      "To only have Exchange Administrator permission",
      "To configure the SLA tier for the application and have the Exchange Administrator permission",
	  "To configure the SLA tier for the application and have the role of Organization Administrator, API Manager Environment Administrator, or the Manage Contacts permission"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "In a Mule project, Flow-1 contains a flow-ref to Flow-2 dependes on data from Flow-1 to execute successfully.</br>Which action ensures the test suites and test cases written for Flow-1 and Flow-2 will execute successfully?",
    "type": "radio",
    "options": [
	  "Chain together the test suites and test cases for Flow-1 and Flow-2",
      "Use 'Before Test Case' to collect data from Flow-1 test cases before running Flow-2 test cases",
      "Use 'Set Event' to pass the input data that is needed, and keep the test cases for Flow-1 and Flow-2 independent",
	  "Use 'After Test Case' to produce the data needed from Flow-1 test cases to pass to Flow-2 test cases"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Flight Management System publishes gate change notification events whenever a flight's arrival gate changes. Other systems, including Baggage Handler System, Inflight Catering System and Passenger Notifications System, must each asynchronously receive the same gate change notification to process the event accordingly.</br>Which configuration is required in Anypoint MQ to achieve this publish/subscribe model?",
    "type": "radio",
    "options": [
	  "Publish the gate change notification to an Anypoint MQ exchange.</br>Create different Anypoint MQ queues meant for each of the other subscribing systems.</br>Bind the exchange with each of the queues.",
      "Publish the gate change notification to an Anypoint MQ queue</br>Have each client subscribe directly to the queue",
      "Publish each client subscribe directly to the exchange.</br>Have each client subscribe directly to the queue.",
	  "Publish the gate change notification to an Anypoint MQ queue.</br>Create different anypoint MQ exchange meant for each of the other subscribing systems.</br>Bind the queue with each of the exchanges"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A company has been using CI/CD. Its developers use Maven to handle build and deployment activities.</br>What is the correct sequence of activities that takes place during the Maven build and deployment?",
    "type": "radio",
    "options": [
	  "Validate, initialize, compile, test, package, install, verify, deploy",
      "Initialize, validade, compile, test, package, verify, install, deploy",
      "Validate, initialize, compile, package, test, install, verify, deploy",
	  "Validate, initialize, compile, test, package, verify, install, deploy"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which command is used to convert a JKS keystore to PKCS12?",
    "type": "radio",
    "options": [
	  "Keytool-importkeystore -srckeystore keystore p12-srcstoretype PKCS12 -destkeystore keystore.jks -deststoretype JKS",
      "Keytool-importkeystore -srckeystore keystore p12-srcstoretype JKS -destkeystore keystore.p12 -deststoretype PKCS12",
      "Keytool-importkeystore -srckeystore keystore jks-srcstoretype JKS -destkeystore keystore.p13 -deststoretype PKCS12",
	  "Keytool-importkeystore -srckeystore keystore jks-srcstoretype PKCS12 -destkeystore keystore.p12 -deststoretype JKS"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which plugin or dependency is required to unit test modules created with XML SDK?",
    "type": "radio",
    "options": [
	  "XMLUnit",
      "Junit",
      "MUnit Extensions Maven plugin",
	  "MUnit Maven plugin"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>What is the result of the Mule Maven Plugin configuration os the value of property tls.keystore.keyPassword in CloudHub 2.0?</br><img src='./_images/9.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "Anypoint Studio secures the value",
      "The Mule server encrypts the value",
      "CloudHub encrypts the value",
	  "Runtime Manager masks the value"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule implementation uses an HTTP Request within an Unit Successful scope to connect to an API.</br>How should a permanent error response like HTTP:UNAUTHORIZED be handle inside Until Successful to reduce latency?",
    "type": "radio",
    "options": [
	  "Continue retrying until a MULE:RETRY_EXHAUSTED error is raised or the API responds back with a successful response.",
      "In Until Successful configuration, set the retry count to 1 for error type HTTP: UNAUTHORIZED.",
      "Put the HTTP Request inside a try scope in Unit Successful.</br>In the error handler, use On Error Continue to catch permanent errors like HTTP UNAUTHORIZED.",
	  "Put the HTTP Request inside a try scope in Unit Successful.</br>In the error handler, use On Error Propagate to catch permanent errors like HTTP UNAUTHORIZED."
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A healthcare portal needs to validate the token that it sends to a Mule API. The developer plans to implement a custom policy using the HTTP Policy Transform Extension to match the token received in the header from the healthcare portal.</br>Which files does the developer need to create in order to package the custom policy?",
    "type": "radio",
    "options": [
	  "Deployable ZIP file, YAML configuration file",
      "JSON properties file, YAML configuration file",
      "JSON properties file, XML template file",
	  "XML template file, YAML configuration file"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>The flow name is 'implementation' with code for the MUnit test case.</br>When the MUnit test case is executed, what is the expected result?</br><img src='./_images/11.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "The test case fails with an assertion error",
      "The test throws an error and does not start",
      "The test case fails with an unexpected error type",
	  "The test case passes"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which statement is true when using XML SDK for creating custom message processors?",
    "type": "radio",
    "options": [
	  "Properties are fields defined by an end user of the XML SDK component and serve as a global configuration for the entire Mule project in which they are used",
      "An XML SDK provides both inbound and outbound operations",
      "Operations can be reused in recursive",
	  "All operations are public"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>When creating a new project, which API implementation allows for selecting the correct API version and scaffolding flows from the API specification?</br><img src='./_images/12.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "Import a published API",
      "Generate a local RAML from anypoint Studio",
      "Download RAML from Design Center",
	  "Import RAML from local file"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "What is the Mulesoft recommended method to encrypt sensitive property data?",
    "type": "radio",
    "options": [
	  "The encryption key should be different for each environment and the sensitive data should be the same for all environments",
      "The encryption key and sensitive data should be the same for all environments",
      "The encryption key should be identical for all environments and the sensitive data should be different for each environment",
	  "The encryption key and sensitive data should be different for each environment"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A heathcare customer wants to use hospital system data, which includes code that was developed using legacy tools and methods. The customer has created reusable Java libraries in order to read the data from the system.</br>What is the most effective way to develop an API retrieve the data from the hospital system?",
    "type": "radio",
    "options": [
	  "Refer to JAR files in the code",
      "Include the libraries writes deploying the code into the runtime",
      "Create the Java code in your project and invoice the data from the code",
	  "Install libraries in a local repository and refer to it in the pom.xml file"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which configurations are required for HTTP Listener to enable mTLS authentication?",
    "type": "radio",
    "options": [
	  "Set an appropriate reconnection strategy and use persistent connections for the listener",
      "Set an appropriate keystore configuration and use persistent connections for the listener",
      "Set an appropriate keystore and truststore configuration for the listener",
	  "Set an appropriate truststore configuration and reconnection strategy for the listener"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibits.</br>The HTTP Request operation raises an HTTP:CONNECTIVITY error.</br>Which HTTP status code and body are returned to the web client?</br><img src='./_images/13.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "HTTP Status Code: 500</br>Body: 'Error in processing your request'.",
      "HTTP Status Code: 200</br>Body: The HTTP:CONNECTIVITY Error description.",
      "HTTP Status Code: 500.</br>Body: The HTTP:CONNECTIVITY Error description.",
	  "HTTP Status Code: 200.</br>Body: 'Error in processing your request.'"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibits.</br>The flow is invoking a target API. The API's protocol is HTTPS. The TLS configuration in the HTTP Request Configuration global element is set to None. A web client submits a request to http://localhost:8081/vehicles.</br>If the certificate of the target API is signed by a certificate authority (CA), what is true about the HTTP Request operation when the flow executes?</br><img src='./_images/14.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "The HTTP Request operation will succeed if the CA’S certificate is present in the JRE’s default keystore",
      "The HTTP Request operation will succeed if the CA’s certificate is present in the JRE’s default truststore.",
      "The HTTP Request operation will always succeed regardless of the CA",
	  "The HTTP Request operation will always fail regardless of the CA"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application deployed to multiple CloudHub 2.0 replicas needs to temporarily persist large files over 10MB between flow executions, and routinely needs to query whether the file data exists on separate executions.</br>How can this be achieved?",
    "type": "radio",
    "options": [
	  "Store the key and full contents of the file in an Object Store",
      "Use an in-memory Object Store",
      "Store the contents of the file on separate storage, and store the key and location of the file using Object Store v2",
	  "Use the file connector to store and read the file, caching the filename and location between requests"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibits.</br>Based on the code snippet , schema.json file, and payload below, what is the outcome of the given code snippet when a request is sent with the payload?</br><img src='./_images/15.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "The Mule flow will execute successfully with status code 200, and the response will be the JSON sent in request",
      "The Mule flow will execute successfully with status code 204",
      "The Mule flow will throw the exception 'JSON:SCHEMA_NOT_HONOURED'",
	  "The Mule flow will execute successfully with status code 200, and in response will display the message 'Age in years which must be equal to or greater than zero.'"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "When a client and server are exchanging messages during the mTLS handshake, what is being agreed on during the cipher suite exchange?",
    "type": "radio",
    "options": [
	  "A protocol",
      "The TLS version",
      "An encryption algorithm",
	  "The Public key format"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibits.</br>A Mule application pom.xml configures the Maven Resources plugin to exclude parsing binary files in the project’s src/main/resources/certs directory.</br>Which configuration of this plugin achieves a successful build?</br><img src='./_images/16.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "<img src='./_images/17.jpg' alt='Minha Figura'>",
      "<img src='./_images/18.jpg' alt='Minha Figura'>",
      "<img src='./_images/19.jpg' alt='Minha Figura'>",
	  "<img src='./_images/20.jpg' alt='Minha Figura'>"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Multiple individual Mute application need to use the Mule Maven plugin to deploy to CloudHub. The plugin configuration should be reused where necessary and anything project-specific should be property-based.</br>Where should the Mule Maven details be configured?",
    "type": "radio",
    "options": [
	  "A parent pom.xml",
      "settings.xml",
      "pom.xml",
	  "A Bill of Materials (BOM) parent pom"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application for processing orders must log the order ID for every log message output.</br>What is a best practice to enrich every log message with the order ID?",
    "type": "radio",
    "options": [
	  "Use flow variables within every logger processor to log the order ID",
      "Set a flow variable and edit the log4j2.xml file to output the variable as part of the message pattern",
      "Create a custom XML SDK component to wrap the logger processor and automatically add the order ID within the connector",
	  "Use the Tracing module to set logging variables with a Mapped Diagnostic Context"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application needs to invoice an API hosted by an external system to initiate a process. The external API takes anywhere between one minute and 24 hours to compute its process. Which implementation should be used to get response data from the external API after it completes processing?",
    "type": "radio",
    "options": [
	  "Use an HTTP Connector to invoke the API and wait for a response",
      "Use a Scheduler to check for a response every minute",
      "Use an HTTP Connector inside Async scope to invoice the API and wait for a response",
	  "Expose an HTTP callback API in Mule and register it with the external system"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  }, 
  {
    "question": "A Mule application needs to invoice an API hosted by an external system to initiate a process. The external API takes anywhere between one minute and 24 hours to compute its process. Which implementation should be used to get response data from the external API after it completes processing?</br><img src='./_images/21.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "If only the email address Is invalid a VALIDATION.INVALID_EMAIL error is raised",
      "If the email address is invalid, processing continues to see if the appointment data and customer name are also invalid",
      "If the appointment date and customer name are invalid, a SCHEDULE:INVALID_APPOINTMENT_DATE error is raised",
	  "If all of the values are invalid the last validation error is raised:SCHEDULE:INVALID_CUSTOMER_NAME"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "When implementing a synchronous API where the event source is an HTTP Listener, a developer needs to return the same correlation ID back to the caller in the HTTP response header. How can this be achieved?",
    "type": "radio",
    "options": [
	  "Enable the auto-generate CorrelationID option when scaffolding the flow",
      "Enable the CorrelationID checkbox in the HTTP Listener configuration",
      "Configure a custom correlation policy",
	  "No action is needed as the correlation ID is returned to the caller in the response header by default"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which statement is true about using mutual TLS to secure an application?",
    "type": "radio",
    "options": [
	  "Mutual TLS requires a hardware security module to be used",
      "Mutual TLS authenticates the identity of the server before the identity of the client",
      "Mutual TLS ensures only authorized end users are allowed to access an endpoint",
	  "Mutual TLS increases the encryption strength versus server-side TLS alone"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application defines as SSL/TLS keystore properly 'tls.keystore.keyPassword' as secure.</br>How can this property be referenced to access its value within the application?",
    "type": "radio",
    "options": [
	  "#[secure::tlskeystore.keyPassword]",
      "${secure::tlskeystore.keyPassword}",
      "$(secure::tlskeystore.keyPassword)",
	  "p(secure::tlskeystore.keyPassword)"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application includes a subflow containing a Scatter.Gather scope. Within each log of the Scatter.Gatter. an HTTP connector calls a PUT endpoint to modify records in different upstream system. The subflow is called inside an Unit successful scope to retry if a transitory exception is raised.</br>A technical spike is being performed to increase reliability of the Mule application.</br>Which steps should be performed within the Mule flow above the ensure idempontent behavior?",
    "type": "radio",
    "options": [
	  "Change the PUT requests inside the Scatter-Gather to POST requests",
      "Ensure an error-handling flow performs corrective actions to roll back all changes if any leg of the Scatter-Gather fails",
      "Remove the Put requests from the Scatter-Getter and perform them sequentially",
	  "None, the flow already exhibits idempotent behavior"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>A developer generates the base scaffolding for an API in Anypoint Studio.</br>Which HTTP status code is returned while testing using the API Kit console if no values are entered in client-secret?</br><img src='./_images/22.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "HTTP status code:200",
      "HTTP status code:403",
      "HTTP status code:400",
	  "HTTP status code:500"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>What action must be performed to log all the errors raised by the VM Connector?</br><img src='./_images/23.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "Add &lt;AsyncLogger name='org.mule.extensions.vm' level='ERROR'/&gt: inside the Logger tag",
      "Add &lt;AsyncLogger name='org.mule.extensions.vm' level='ERROR'/&gt; inside the Appenders tag",
      "Configure &lt;Logger level='ERROR'/&gt; inside the VM Connector configuration",
	  "Nothing, as error-level events are automatically logged"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which statement is true when working with correlation IDS?",
    "type": "radio",
    "options": [
	  "The HTTP Listener generates correlation IDS unless a correlation ID is received in the HTTP request",
      "The Anypoint MQ Connector automatically propagates correlation IDS",
      "The HTTP Listener regenerates correlation IDs regardless of the HTTP request",
	  "The VM Connector does not automatically propagate correction Ids"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which properties are mandatory on the HTTP Connector configuration in order to use the OAuth 2.0 Authorization Code grant type for authentication?",
    "type": "radio",
    "options": [
	  "External callback URL, access token URL, local authorization URL, authorization URL, client ID, client secret",
      "External callback URL, access token URL, client ID response access token",
      "External callback URL, access token URL, client ID, response refresh token",
	  "Token URL, authorization URL, client ID, client secret local callback URL"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Refer to the exhibit.</br>What required changes can be made to give a partial successful response in case the United Airlines API returns with a timeout?</br><img src='./_images/24.jpg' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "Add a Scatter-gather component inside a Try scope.</br>Set the payload to a default value “Error” inside the error handler using the On Error Propagate scope.",
      "Add Flow Reference components inside a Try scope.</br>Set the payload to a default value “ ” inside the error handler using the ON Error Continue scope.",
      "Add Flow Reference components inside a Try scope.</br>Set the payload to a default value “ ” inside the error handler using the On Error Propagate scope.",
	  "Add a Scatter-Gather component inside a Try scope.</br>Set the payload to a default value “Error” inside the error handler using the On Error Continue scope."
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A system API that communicates to an underlying MySQL database is deploying to CloudHub. The DevOps team requires a readiness endpoint to monitor all system APIs. Which strategy should be used to implement this endpoint?",
    "type": "radio",
    "options": [
	  "Create a dedicated endpoint that responds with the API status and reachability of the underlying systems",
      "Create a dedicated endpoint that responds with the API status and health of the server",
      "Use an existing resource endpoint of the API",
	  "Create a dedicated endpoint that responds with the API status Only"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A system API that communicates to an underlying MySQL database is deploying to CloudHub. The DevOps team requires a readiness endpoint to monitor all system APIs. Which strategy should be used to implement this endpoint?",
    "type": "radio",
    "options": [
	  "error.errorMesage.payload.results ['2']",
      "payload.failures['2']",
      "payload ['2']",
	  "error.errorMessage.payload.failures['2']"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "An order processing system is composed of multiple Mule application responsible for warehouse, sales and shipping. Each application communication using Anypoint MQ. Each message must be correlated against the original order ID for observability and tracing.</br>How should a developer propagate the order ID as the correlation ID across each message?",
    "type": "radio",
    "options": [
	  "Use the underlying HTTP request of Anypoint MQ to set the “X-CORRELATION_ID” header to the order ID",
      "Set acustom Anypoint MQ user property to propagate the order ID and set the correlation ID in the receiving applications.",
      "Use the default correlation ID, Anypoint MQ will sutomatically propagate it.",
	  "Wrap all Anypoint MQ Publish operations within a With CorrelationID scope from the Tracing module, setting the correlation ID to the order ID"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule API receives a JSON payload and updates the target system with the payload. The developer uses JSON schemas to ensure the data is valid.</br>How can the data be validation before posting to the target system?",
    "type": "radio",
    "options": [
	  "Use a DataWeave 2.0 transform operation, and at the top of the DataWeave script, add:</br>%dw 2.0</br>Import json-module",
      "Using the DataWeave if Else condition, test the values of the payload against the examples included in the schema",
      "Apply the JSON Schema policy in API Manager and reference the correct schema in the policy configuration",
	  "Add the JSON module dependency and add the validate-schema operation in the flow, configured to reference the schema"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A Mule application deployed to a standardalone Mule runtime uses VM queues to publish messages to be consumed asynchronously by another flow.</br>In the case of a system failure, what will happen to in-flight messages in the VM queues that have been consumed?",
    "type": "radio",
    "options": [
	  "For transient queues, the message will be processed after the system comes online",
      "For any type of queue, the message will be processed after the system comes online",
      "For persistent queues, the message will be processed after the system comes online",
	  "For any type of queue, the message will be lost"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "An organization uses CloudHub to deploy all of its applications.</br>How can a common-global-handler flow be configured so that it can be reused across all of the organization’s deployed applications?",
    "type": "radio",
    "options": [
	  "Create a Mule plugin project.</br>Create a common-global-error-handler flow inside the plugin project.</br>Use this plugin as a dependency in all Mute applications.</br>Import that configuration file in Mute applications.",
      "Create a common-global-error-handler flow in all Mule Applications.</br>Refer to it flow-ref wherever needed.",
      "Create a Mule Plugin project</br>Create a common-global-error-handler flow inside the plugin project.</br>Use this plugin as a dependency in all Mule applications",
	  "Create a Mule domain project.</br>Create a common-global-error-handler flow inside the domain project.</br>Use this domain project as a dependency."
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "The Center for Enablement team published a common application as a reusable module to the central Nexus repository.</br>How can the common application be included in all API implementations?",
    "type": "radio",
    "options": [
	  "Download the common application from Naxus and copy it to the src/main/resources folder in the API",
      "Copy the common application’s source XML file and out it in a new flow file in the src/main/mule folder",
      "Add a Maven dependency in the POM file with multiple-plugin as 	&lt;classifier&gt;",
	  "Add a Maven dependency in the POM file with jar as &lt;classifier&gt;"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Mule application A is deployed to CloudHub and is using Object Store v2. Mute application B is also deployed to CloudHub.</br>Which approach can Mule application B use to remove values from Mule application A's Object Store?",
    "type": "radio",
    "options": [
	  "Object Store Connector",
      "CloudHub REST API",
      "Object Store v2 REST API",
	  "CloudHub Connector"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "Which pattern should be used to invoke multiple HTTP APIs in parallel and roll back failed requests in sequence?",
    "type": "radio",
    "options": [
	  "Scatter-Gather as central Saga orchestrator for all API request with compensating actions for failing routes",
      "VM queues as a reliability pattern with error handlers to roll back any requests",
      "A database as a transactional outbox and an Until Successful router to retry any requests",
	  "A Parallel for Each scope with each HTTP request wrapped in a Try scope"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A company deploys 10 public APIs to CloudHub. Each API has its individual health endpoint defined. The platform operation team wants to configure API Functional Monitoring to monitor the health of the APIs periodically while minimizing operational overhead and cost.</br>How should API Functional Monitoring be configured?",
    "type": "radio",
    "options": [
	  "From one public location with each API in its own schedule",
      "From one private location with all 10 APIs in a single schedule",
      "From one public location with all 10 APIs in a single schedule",
	  "From 10 public locations with each API in its own schedule"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "An API has been developed and deployed to CloudHub Among the policies applied to this API is an allowlist of IP addresses. A developer wants to run a test in Anypoint Studio and does not want any policies applied because their workstation is not included in the allowlist.</br>What must the developer do in order to run this test locally without the policies applied?",
    "type": "radio",
    "options": [
	  "Create a properties file specifically for local development and set the API instance ID to a value that is not used in API Manager",
      "Pass in the runtime parameter '-Danpow.platform.gatekeeper=disabled'",
      "Desactivate the API in API Manager so the Autodiscovery element will not find the application when it runs in Studio",
	  "Run the test as-is, with no changes because the Studio runtime will not attempt to connect to API Manager"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },  
  {
    "question": "A developer has created the first version of an API designed for business partners to work with commodity prices.</br>What should the developer do to allow more than one major version of the same API to be exposed by the implementation?",
    "type": "radio",
    "options": [
	  "In Design Center, open the RAML and modify each operation to include the major version number",
      "In Anypoint Studio, generate scaffolding from the RAML, abd then modify the &lt;http:listener&gt; in the generated flows to include a parameter to replace the version number",
      "In Design Center, open the RAML and modify baseUri to include a variable that indicates the version number",
	  "In Anypoint Studio, generate scaffolding from the RAML, and then modify the flow names generated by APIkit to include a variable with the major version number"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
