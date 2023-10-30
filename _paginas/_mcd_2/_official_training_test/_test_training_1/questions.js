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
    "question": "Which statement is true about a Webhook?",
    "type": "radio",
    "options": [
	  "It is a technique where provider and consumer exchange data via a message broker",
      "It allows developers to intercept HTTP requests and modify the request header and/or payload while it is in transit",
      "It is an event where the consumer polls the provider",
	  "It is when a provider initiates the event to a consumer-defined endpoint when a particular event happens so the consumer does not have to poll"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A customer experience API (customer-eapi) is calling a system API (oracle-sapi) to create and update customers in a database via HTTP.</br>If the customer data sent via customer-eapi does not exist in the database, then oracle-sapi raises an exception with a 404 status code. This error code should not stop flow processing, but any other HTTP error codes must stop flow processing.</br>Which configuration is needed in customer-eapi on an HTTP Request processor to accept only the 404 status code and standard HTTP success status codes as a successful response?",
    "type": "radio",
    "options": [
	  "&lt;http:success-status-code-validator values='200..299, 404'/&gt;",
      "&lt;http:failure-status-code-validator values='200..404'/&gt;",
      "&lt;http:failure-status-code-validator values='404'/&gt;",
	  "&lt;http:success-status-code-validator values='200..500'/&gt;"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "At minimum, what is required in the client-side keystore in order to enable mTLS?",
    "type": "radio",
    "options": [
	  "A client certificate signed by the server certificate",
      "A matching private key and self-signed certificate",
      "A private key",
	  "A private key, a public key, and the known authority certificate"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the correct ordering of the log4j levels from most verbose to least verbose?",
    "type": "radio",
    "options": [
	  "WARN, ERROR, INFO, OFF, DEBUG, FATAL",
      "DEBUG, INFO, WARN, ERROR, FATAL, OFF",
      "ERROR, INFO, DEBUG, WARN, OFF, FATAL",
	  "INFO, ERROR, WARN, DEBUG, FATAL, OFF"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Which widgets can be added to a custom dashboard in Anypoint Monitoring?",
    "type": "radio",
    "options": [
	  "Graphs, singlestats, text",
      "Labels, singlestats, tables",
      "Graphs, tables, labels",
	  "Text, values, tables"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A company has deployed an Orders System API to a CloudHub 2.0 shared space and made it accessible via the default ingress.</br>Which action (if any) is required to implement HTTP mTLS authentication for this API?",
    "type": "radio",
    "options": [
	  "Configure a CA-signed certificate in the API's HTTP Listener and in the client's HTTP Requester",
      "Configure a CA-signed certificate in the API's HTTP Listener and a self-signed certificate in the client's HTTP Requester",
      "No action is required; a CloudHub shared space does not support mTLS authentication",
	  "No action is required; mTLS authentication is enabled by default for this API"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Some Mule application property values can be displayed in clear text (e.g., DB driver, JMS Queue, HTTP Port, etc.), while some must be encrypted (e.g., DB Password, SSL/TLS Keystore Password, etc.).</br>Which statement is true about clear text and encrypted properties?",
    "type": "radio",
    "options": [
	  "Clear text and encrypted property values must be defined in separate property files",
      "Clear text and encrypted property values can be defined in the same property file and clear text properties do not require the secure prefix",
      "Files containing encrypted property values must end with or '-secure.properties'",
	  "Clear text and encrypted property values can be defined in the same property file and clear text properties require the secure prefix"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application makes HTTPS requests to an external API that uses a certificate signed by a public Certificate Authority already in the JDK truststore. Two-way authentication is required for this API invocation.</br>What needs to be configured on the client side to enable the Mule application?",
    "type": "radio",
    "options": [
	  "A TLS context with a truststore",
      "No configuration is needed; the server should enable mutual authentication using a Dedicated Load Balancer",
      "A TLS context with a keystore",
	  "A TLS context with a keystore and a truststore"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "The values of some properties used by a Mule application deployed in CloudHub 2.0 display as text under the Properties tab in Runtime Manager's settings.</br>How can the value of these properties be hidden?",
    "type": "radio",
    "options": [
	  "Define a global property with name set to Property and value set to Hidden",
      "In the Mule Maven Plugin configuration, under the secureProperties element, list the property names to safely hide as a individual elements",
      "Restrict access to the Properties tab in Runtime Manager to Administrator only",
	  "Define a configuration properties tag and put the values in the properties file"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A developer uses Anypoint Design Center to create multiple APIs with common customer definitions. The common data needs to be reused across an API and shared for use in future APIs.</br>How can this be achieved?",
    "type": "radio",
    "options": [
	  "Create the data structure as an API fragment in API Designer and publish to Anypoint Exchange.</br>Import the published version into the API specification and keep the old version of the API fragment in Anypoint Exchange.",
      "Create the data structure with appropriate versions within the API using RAML data types.</br>Import the correct version into the API specification.",
      "Create an API library resource within the API.</br>Create a common data structure to reuse across the different endpoints.",
	  "Delete the old version of the API fragment in Anypoint Exchange.</br>Create the new data structure as an API fragment in API Designer and publish to Anypoint Exchange.</br>Instruct users to use the new version."
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A developer stores static data in Object Store v2 in an application implemented using the latest version of Mule.</br>What should the developer do to guarantee unlimited Time to Live (TTL) of all Object Store entries?",
    "type": "radio",
    "options": [
	  "Set the entry TTL value to the maximum value",
      "Maintain the default TTL setting and access the data at least once a week",
      "Set the entry TTL value to -1 and access the data at least once a month",
	  "Configure Object Store to use partitions"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits.</br>A Mule application contains two policies: Policy A and Policy B. Policy A has order 1, and Policy B has order 2. Policy A, Policy B, and a flow are defined by the configurations below.</br>When an HTTP request arrives at the Mule application’s endpoint, what will be the execution order?</br><img src='./_images/1.png' alt='Minha Figura'></br>",
    "type": "radio",
    "options": [
	  "A1, F1, A2",
      "A1, A2, F1, B1, B2",
      "A1, A2, B1, B2, F1",
	  "A1, A2"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "The security team at a bank needs to be able to audit and trace HTTP requests. They require all downstream API requests from Mule applications be intercepted and the client IP address be injected as a HTTP request header.</br>How can this be accomplished using API policies?",
    "type": "radio",
    "options": [
	  "Use the out-of-the-box HTTP Header Injection policy.</br>Add an outbound header to pass the consumer IP address information.",
      "Create a custom outbound API policy.</br>Use the mule-http-policy-transform-extension to pass the consumer IP address information as a custom HTTP header after the 'execute-next' statement.",
      "Create a custom outbound API policy.</br>Use the mule-http-policy-transform-extension to pass the consumer IP address information as a custom HTTP header before the 'execute-next' statement.",
	  "Use the out-of-the-box HTTP Header Injection policy.</br>Add an inbound header to pass the consumer IP address information."
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An Orders API is deployed to CloudHub and has many clients communicating over HTTP, including external clients with code written in many possible languages. When an order is submitted through the API, a long running process to process the order is initiated. The API clients in CloudHub need to be notified when the order is finally processed.</br>Which approach should be used?",
    "type": "radio",
    "options": [
	  "Use webhooks, where each client can submit a callback URL that the Orders API can invoke after the order is complete",
      "Use VM queues to notify each application asynchronously when the order is complete",
      "Use JMS topics to notify each client asynchronously when the order is complete",
	  "Use the return address attribute automatically populated by Mule to send a notification back to each client"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
