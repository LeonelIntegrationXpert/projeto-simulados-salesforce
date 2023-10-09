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
    "question": "According to Mulesoft, what is the first step to create a Modern API for use in an application network?",
    "type": "radio",
    "options": [
      "Create a prototype of the API implementation",
      "Create an API specification and get feedback from stakeholders",
      "Gather a list of requirements to secure the API",
      "Performance tune and optimize the backend systems and network"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The input array of strings is passed to the batch job, which does NOT do any filtering or aggregating.</br>What payload is logged by the Logger component?</br><img src='./_images/1.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
      "['Apple1','Banana1',2]",
      "['Apple12','Banana12']",
      "Summary report of processed records",
      "['Apple','Banana']"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The main flow contains an HTTP Request in the middle of the flow. The HTTP Listeners and HTTP Request use default configurations.</br>After web client submits a request to http://localhost:8081/order?color=red, what values are accessible to the Logger at the end of the main flow?</br><img src='./_images/2.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
      "payload</br>&nbsp&nbsp&nbsp&nbspcolor query param",
      "payload",
      "payload</br>&nbsp&nbsp&nbsp&nbspquantity var",
      "payload</br>&nbsp&nbsp&nbsp&nbspcolor query param</br>&nbsp&nbsp&nbsp&nbspquantity var"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A web client sends a request to http://localhost:8081/books/0471767840.</br>What is a valid DataWeave expression to access the bookISBN variable later in the flow?",
    "type": "radio",
    "options": [
      "bookISBN",
      "attributes.bookISBN",
      "variables.bookISBN",
      "vars.bookISBN"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The main flow contains a Flow Reference for the child flow. After a web client submits a request to http://localhost:8081/order?color=red, what values are accessible in the child flow?</br><img src='./_images/3.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "payload</br>&nbsp&nbsp&nbsp&nbspcolor query param</br>&nbsp&nbsp&nbsp&nbspquantity var",
      "payload</br>&nbsp&nbsp&nbsp&nbspcolor query param",
      "payload</br>&nbsp&nbsp&nbsp&nbspquantity var",
	  "payload"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "When using Mulesoft's API-Led connectivity approach, what HTTP method in a RESTful web service is generally recommended to be used to complety replace an existing resource?",
    "type": "radio",
    "options": [
	  "POST",
      "GET",
      "PUT",
	  "PATCH"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application uses the ${http.port} property placeholder for its HTTP Listener port when it is deployed Cloudhub.</br>What benefit does this Mule application configuration enable?",
    "type": "radio",
    "options": [
	  "Clients to VPN directly to the Mule application at the Mule application's configured HTTP port",
      "Mulesoft Support to troubleshoot the application by connecting directly to the HTTP Listener",
      "CloudHub to automatically register the application with API Manager",
	  "Cloudhub to automatically change the HTTP port to allow external clients to connect to the HTTP Listener"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. How many private flows does APIkit generate from the RAML specification?</br><img src='./_images/4.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "1",
      "2",
      "3",
	  "4"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. A web client submits a request to http://localhost:8081/flights.</br>What is the result at the end of the flow?</br><img src='./_images/5.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "String",
      "XML",
      "Object",
	  "Java"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The /daily folder exists, is currently empty, and files can be read and written to this folder by Anypoint Studio.</br>This Mule application is run in Anypoint Studio, and then a file named productUpdates.txt containing the text 'START' is written to the /daily folder.</br>What is the /daily folder after the readUpdates flow completes for the first time?</br><img src='./_images/6.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "A file named productUpdates.txt.bak containing the text 'FINISHED'",
      "A file named productUpdates.txt.bak containing the text 'START'",
      "A file named productUpdates.txt containing the text 'START'</br>&nbsp&nbsp&nbsp&nbspA file named productUpdates.txt.bak containing the text 'FINISHED'",
	  "A file named productUpdates.txt containing the text 'START'</br>&nbsp&nbsp&nbsp&nbspA file named productUpdates.txt.bak containing the text 'START'"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An API specification is defined using RAML.</br>What is the next step to create a REST Connect connector from this API specification?",
    "type": "radio",
    "options": [
	  "Download the API specification and build the interface using APIkit",
      "Add the specification to a Mule project's src/main/resources/api folder",
      "Publish the API specification to Anypoint Exchange",
	  "Implement the API specification using Flow Designer"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A client submits GET request to a Mule 4 application to the endpoint /customer?id=48493.</br>Where is the ID stored in the Mule event by the HTTP Listener?",
    "type": "radio",
    "options": [
	  "Attributes",
      "Variables",
      "Payload",
	  "Inbound Properties"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application contains a global error handler configured to catch any errors.</br>Where must the global error handler be specified so that it caches all errors from flows that do not have their own error handlers?",
    "type": "radio",
    "options": [
	  "In a configuration properties file",
      "In a pom.xml file",
      "In the mule-artifact.json file",
	  "In a global element"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. When the flow executes, the now() function in the Transform Message component returns '2021-08-26T13:32:10.64-07:00'.</br>What is written to the records.csv file when the flow executes?</br><img src='./_images/7.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "</br>{</br>&nbsp&nbsp'transaction_id': 'SS-4848-44KK-4SYQ',</br>&nbsp&nbsp'account_id': 'KA-382-SKD44',</br>&nbsp&nbsp'name': 'Max Mule',</br>&nbsp&nbsp'position': 'sell'</br>}",
      "</br>{</br>&nbsp&nbsp'transaction_id': 'SS-4848-44KK-4SYQ',</br>&nbsp&nbsp'account_id': 'KA-382-SKD44',</br>&nbsp&nbsp'name': 'Max Mule',</br>&nbsp&nbsp'position': 'sell', </br>&nbsp&nbsp'write_date':'2021-08-26T13:32:10.64-07:00'</br>}",
      "transaction_id, account_id, name, position, write_date </br>&nbsp&nbsp&nbsp&nbsp'SS-4848-44KK-4SYQ', 'KA-382-SKD44', 'Max Mule', 'sell', '2021-08-26T13:32.10.64-07:00'",
	  "transaction_id, account_id, name, position </br>&nbsp&nbsp&nbsp&nbsp'SS-4848-44KK-4SYQ', 'KA-382-SKD44', 'Max Mule', 'sell'"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The Mule application does NOT define any global error handlers.</br>The Validation component in the private flow throws an error.</br>What response message is returned to a client request  to the main flow's HTTP Listener?</br><img src='./_images/8.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "Success - main flow",
      "Error - private flow",
      "Error - main flow",
	  "Validation Error"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A function named newProdCode needs to be defined that accepts two input parameters, an integer value for itemID and a string value for productCategory, and returns a new product code.</br>What is correct DataWeave code to define the newProdCode function?",
    "type": "radio",
    "options": [
	  "var newProdCode (itemID: Number, productCategory: String) -></br>&nbsp&nbsp&nbsp&nbsp'PC-' ++ productCategory ++ (itemID as String)",
      "function newProdCode (itemID: Number, productCategory: String) =</br>&nbsp&nbsp&nbsp&nbsp'PC-' ++ productCategory ++ (itemID as String)",
      "fun newProdCode (itemID: Number, productCategory: String) -></br>&nbsp&nbsp&nbsp&nbsp'PC-' ++ productCategory ++ (itemID as String)",
	  "fun newProdCode (itemID: Number, productCategory: String) =</br>&nbsp&nbsp&nbsp&nbsp'PC-' ++ productCategory ++ (itemID as String)"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A development team was developing a mobile banking app. It took the teams two months to create their own APIs to access transaction information from a central database.</br>The development team late found out that another team had already built an API that accessed this transaction information.</br>According to Mulesoft, what organization structure could haved saved the development team two months of development time?",
    "type": "radio",
    "options": [
	  "Center for Enablement",
      "Mulesoft Support Center",
      "Central API Review Board",
	  "Center of Excellence"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the correct way to format the decimal 20.3844 as string to two decimal places?",
    "type": "radio",
    "options": [
	  "20.3844 format(String: '.0#')",
      "20.3844 as String ({format: '.0#'})",
      "20.3844 {format: '.0#' as String}",
	  "20.3844 as String {format: '.0#'}"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An SLA-based policy has been enabled in API Manager.</br>What should now be changed in the RAML specification and/or the API proxy to enforce the SLA-based policy?",
    "type": "radio",
    "options": [
	  "Restart the API proxy clear the API policy cache",
      "Add new property placeholders and redeploy the API proxy",
      "Add required headers to the RAML specification and redeploy the new API proxy",
	  "Add new environment variables and restart the API proxy"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A flow contains a Database Select operation followed by an HTTP Request operation. The flow must combine and return data received from these two connector operations.</br>What is valid and idiomatic (used for its  intended purpose) way to capture both payloads so the payload output from the second HTTP Request operation does not overwrite the payload output from the first Database Select operation?",
    "type": "radio",
    "options": [
	  "Save the payload from the Database Select operation to a variable",
      "Set the combinedPayloads attribute to true in the Database Select  operation configuration",
      "Put the Database Select operation in a Try scope configured with a transaction",
	  "Put the Database Select operation inside a Cache scope"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. This error occurs when a Mule project is imported into and run in Anypoint Studio. The Mule project has a dependency that is not in a MuleSoft Maven repository, but the Mule project successfully ran on the original computer where the Mule project was developed.</br>What is next step to fix the error and get the project to run successfully?</br><img src='./_images/9.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Deploy the dependency to a MuleSoft Maven repository",
      "Edit the dependency in the Mule project's pom.xml file",
      "Add the dependency to the MULE_HOME/bin folder",
	  "Install the dependency to the computer's local Maven repository"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. This Mule application has an HTTP Request that is configured with hardcoded value. To change this, the Mule application is configured to use a properties file named config.yaml.</br>To what valid expression can the HTTP Request host value set so the value is no longer harcoded?</br><img src='./_images/10.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "#[training.host]",
      "${training.host}",
      "#[training:host]",
	  "${training:host}"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application contains two HTTP Listeners, each configured for different API endpoints: http://acme.com/apis/orders and http://acme.com/apis/customers.</br>What base path value should be set in an HTTP Listener config element so that it can be used to configure both HTTP Listeners?",
    "type": "radio",
    "options": [
	  "/apis/",
      "/apis/?",
      "/apis/*",
	  "/apis/orders|customers"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. A shopping API contains a method to look up store details by department.</br>According to this RAML specification, what is a valid URL for a web client to submit a GET request for details abount the pharmacy department at the store with storeId 23?</br><img src='./_images/11.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "/stores/23?store_id=23&department='pharmacy'",
      "/stores/${23}?store_id=23&department='pharmacy'",
      "/stores/{23}?store_id=23&department='pharmacy'",
	  "/stores/{23}/store_id=23&department='pharmacy'"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The Mule application contains a Choice router.</br>What is logged when the flow completes?</br><img src='./_images/12.png' alt='Ilustração' style='position: relative; max-width: 100%;'><br/>",
    "type": "radio",
    "options": [
	  "US",
      "REGION",
      "['US','EU']",
	  "EU"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The <when> expression for the Choice router needs to be written.</br>What is valid <when> expression to route Mule events to the non-default flow?</br><img src='./_images/13.png' alt='Ilustração' style='position: relative; max-width: 100%;'><br/>",
    "type": "radio",
    "options": [
	  "#['Mulesoft' == payload.'company']",
      "#[if('Mulesoft' == payload.company)]",
      "#[if(company = 'Mulesoft')]",
	  "#[company = 'Mulesoft']"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The Set Payload transformer's value is set to {'year':2020}.</br>What message value should be added to the Logger component to output the message 'The year is 2020', without hardcoding 2020?</br><img src='./_images/14.png' alt='Ilustração' style='position: relative; max-width: 100%;'><br/>",
    "type": "radio",
    "options": [
	  "'#['The year is ++ payload.year']'",
      "'#['The year is ' + payload.year]'",
      "'#[The year is $(payload.year)]'",
	  "'The year is #[payload.year]'"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. A web client makes an HTTP GET request to the flow's HTTP Listener.</br>The validation component then throws an erro with the message 'Validate - Payload is an Integer'.</br>What response message is returned to the web client?</br><img src='./_images/15.png' alt='Ilustração' style='position: relative; max-width: 100%;'><br/>",
    "type": "radio",
    "options": [
	  "Error - main flow",
      "Success - Begin main flow",
      "Success - End main flow",
	  "Validate - Payload is an Integer"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. Each HTTP Listener is configured with the same host and with the port number, path and operation show in its display name.</br>What is the minimum number of global elements that must be defined to support all theses HTTP Listeners?</br><img src='./_images/16.png' alt='Ilustração' style='position: relative; max-width: 100%;'><br/>",
    "type": "radio",
    "options": [
	  "1",
      "2",
      "3",
	  "4"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A RAML example fragment named BankAccountsExample.raml is placed in the examples folder in an API specification projet.</br>What is the correct syntax to reference the fragment?",
    "type": "radio",
    "options": [
	  "examples: !include BankAccountsExample.raml",
      "examples: #import BankAccountsExample.raml",
      "examples: !include examples/BankAccountsExample.raml",
	  "examples: #import examples/BankAccountsExample.raml"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What payload is returned by an Anypoint Connector for Database's Select operation that does not match any rows in the database?",
    "type": "radio",
    "options": [
	  "null",
      "An empty array",
      "An exception",
	  "false"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The Set Payload transformer in the For Each scope and the Set Payload transformer in the Batch Job scope's Batch Step scope each contain a DataWeave expression to sleep (pause processing) for the number of milliseconds in the current payload. The Batch Job scope's block size is set to 1.</br>In what order are the payloads logged in the For Each scope and in the Batch Step scope?</br><img src='./_images/17.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "For each scope: 2000, 200, 1000, 100</br>Batch Step scope: 4000, 40, 3000, 300",
      "For each scope: 100, 200, 1000, 2000</br>Batch Step scope: 4000, 40, 3000, 300",
      "For each scope: 2000, 200, 1000, 100</br>Batch Step scope: 40, 300, 3000, 4000",
	  "For each scope: 100, 200, 1000, 2000</br>Batch Step scope: 40, 300, 3000, 4000"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the output type of the DataWeave map function?",
    "type": "radio",
    "options": [
	  "Array",
      "String",
      "Object",
	  "Map"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An HTTP Request operation sends an HTTP request with a non-empty JSON-formatted object payload to an external HTTP endpoint. The response from the external HTTP endpoint returns an XML-formatted body.</br>The result is stored in a target named theResult.</br>What is format of the payload that is input to the next event processor after the HTTP Request?",
    "type": "radio",
    "options": [
	  "application/xml",
      "application/dw",
      "application/java",
	  "application/json"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit.</br>What can be added to the flow to persist data across different flow executions?</br><img src='./_images/18.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "Session variables",
      "Key-value pairs in the ObjectStore",
      "Properties of the Mule runtime app object",
	  "Properties of the Mule runtime flow object"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. In this Mule application files are written from inside a For Each scope.</br>What is written to the file system the flow executes, and what payload is returned in the response to the web client?</br><img src='./_images/19.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
    "type": "radio",
    "options": [
	  "Two files are created, each containing a different object of one or two account objects</br>The response payload is a JSON formatted array of two objects, where each object is a duplicate copy of the object of account objects written to each file",
      "One file is written with an error message</br>The response payload is the error message",
      "Two files area created, each containing a different array of one or two account objects</br>The response payload is a JSON formatted object that is created in the Set Payload transformer",
	  "Three files are created, one for each account object</br>The response payload is a success message without any account objects"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule project contains a MySQL Database dependency.</br>The project is exported from Anypoint Studio so it can be deployed to CloudHub.</br>What export options create the smallest deployable archive that will successfully deploy to CloudHub?",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/20.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/21.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/22.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/23.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "To avoid hard-coding values, a flow uses some property placeholders and the corresponding values are stored in a configuration file.</br>Where does the configuration file's location need to be specified in the Mule application?",
    "type": "radio",
    "options": [
	  "The pom.xml",
      "A global element",
      "A flow attribute",
	  "The mule-artifact.json file"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. An HTTP Listener is being configured to accept requests from web clients on URLs like http://localhost:8081/accounts/10, where the number 10 can change to other numbers.</br>In order to capture the number in a parameter named ID, to what must the path of the HTTP Listener component be set?</br><img src='./_images/24.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "/accounts/#[ID]",
      "/accounts/{ID}",
      "/accounts/ID",
	  "#[/accounts/ID]"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. An event payload contains an unordered array of flight objects, where every object has a price key and a toAirport key.</br>What is DataWeave code to return flights with a price under 500, grouped by toAirport in ascending order, with the lowest price first?</br><img src='./_images/25.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "payload groupBy $.toAirport filter $.price > 500 orderBy $.price",
      "payload filter $.price < 500 orderBy $.price groupBy $.toAirport",
      "payload groupBy $.toAirport filter $.price < 500 orderBy $.price",
	  "payload filter $.price > 500 orderBy $.price groupBy $.toAirport"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. The RAML file defines a method to create user.</br>What is correct way to create a user in a web client?</br><img src='./_images/26.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/27.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/28.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/29.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/30.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. The Mule application does NOT define any global error handlers.</br>A web client sends an HTTP POST request to the HTTP Listener and the Validation component in the Trys scope throws an error.</br>What response message is returned to the web client?</br><img src='./_images/31.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "ERROR2",
      "END",
      "ERROR1",
	  "Validation Error"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application has been deployed to CloudHub and now needs to be governed. IT will not allocate additional vCores for a new Mule application to act as an API proxy.</br>What should be done to or with the Mule application to preserve the current vCore usage while still allowing the Mule application to be managed by API Manager?",
    "type": "radio",
    "options": [
	  "Modify the Mule application to use autodiscovery to register API Manager",
      "Register the Mule application in Runtime Manager to connect to API Manager",
      "Upload the Mule application's JAR file to the API instance in API Manager",
	  "Deploy the Mule application behind a VPC and configure the VPC to connect to API Manager"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. A web client sends an HTTP GET request that includes a destination query parameter to the flow's HTTP Listener.</br>The Web Service Consumer throws a WSC:BAD_REQUEST error.</br>What should be set in the getFlights flow to fix this error?</br><img src='./_images/32.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "A property in the Consume operation equal to the destination query parameter",
      "A JSON payload before the Consume operation that contains the destination query parameter",
      "A SOAP payload before the Consume operation that contains the destination query parameter",
	  "A header in the Consume operation equal to the destination query parameter"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Scatter-Gather processes three separate HTTP requests. Each request returns a Mule event with a JSON payload.</br>What is the final output of the Scatter-Gather?",
    "type": "radio",
    "options": [
	  "An array of three Mule event objects",
      "An object containing three JSON payload objects",
      "An object containing three Mule event objects",
	  "An array of three JSON payload objects"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. DataWeave code needs to be written to transform the input payload to the output payload.</br>What is valid DataWeave code to perform this transformation?</br><img src='./_images/33.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/34.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/35.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/36.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/37.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. The API specification supports searching for articles on the searchworld.org site.</br>What is correct URL and HTTP method to retrieve articles about 'einstein' in XML format?</br><img src='./_images/38.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/39.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/40.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/41.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/42.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
