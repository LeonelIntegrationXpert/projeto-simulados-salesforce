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
    "question": "Refer to the exhibit.</br>What can be added to the flow to persist data across different flow executions?</br><img src='./_images/18.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
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
  },
  {
    "question": "Refer to exhibit. The Mule application does NOT define any global error handlers. The main flow is configured with three error handlers.</br>A web client submits a request to the HTTP Listener and the HTTP Request throws and HTTP:NOT_FOUND error.</br>What response message is returned?</br><img src='./_images/43.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Success - main flow",
      "HTTP:NOT_FOUND",
      "APP:API_RESOURCE_NOT_FOUND",
	  "Other error"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. The main flow of this Mule application uses an HTTP connector operation and two JMS connector operations.</br>The Mule application in run and starts successfully, and then a local web client sends a request to http://localhost:8081/.</br>What payload is then returned to the web client from the Mule application?</br><img src='./_images/44.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "1",
      "2",
      "3",
	  "4"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "In an application network, the implementation, not the interface, of a product API is being changed.</br>Does anything need to change in the other APIs or the associated applications that consume the product API, and if so, what are these changes?",
    "type": "radio",
    "options": [
	  "The other APIs must be updated to consume the updated product API",
      "The applications associated with the other APIs must be recorded",
      "Nothing needs to be changed in the other APIs or their associated applications",
	  "The applications associated with the other APIs must be restarted"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Utility.dwl file is located in a Mule project at src/main/resources/modules.</br>The Utility.dwl file defines a function named pascalize that reformats strings to pascal case.</br>What is valid DataWeave code to call the pascalize function in a Transform Message component?",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/45.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/46.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/47.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/48.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibits. The main flow contains an HTTP Request. The HTTP Listeners and HTTP Request use default configurations.</br>A web client sends a GET request to the main flow's HTTP Listener that includes a modelName query parameter.</br>What values(s) are accessible in the child flow?</br><img src='./_images/49.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "The payload</br>The modelName query param",
      "The payload</br>The planModel var",
      "The payload",
	  "The payload</br>The modelName query param</br>The planeModel var"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibits. The orders.csv file is read and then processed to look up the orders ins a database.The Mule application is debugged in Anypoint Studio and stops at the breakpoint.</br>What is payload is shown in the debugged at this breakpoint?</br><img src='./_images/50.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "100",
      "An empty array",
      "The database response",
	  "The entire CSV file"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibits. In the payload of a POST request to this Mule application, a web client sends a new order record {'oid':'100','custId':'annie@acme.com','status':'NEW ORDER'}.</br>In this Mule application, what value must be used in the Input Parameters field of the Database insert operation to properly pass the order record values to the SQL statement?</br><img src='./_images/51.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/52.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/53.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/54.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/55.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibits. The Mule application does NOT define any global error handler elements.</br>What is the response to a web client request to http:localhost:8081?</br><img src='./_images/56.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Validation Error",
      "After",
      "Before",
	  "null"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A database table contains a recordID column that increases as new  records get added to the table.</br>A Mule application is created to read from this database table.</br>What is the key process to enable manual watermarking for requests to this database table using a Scheduler event source and a Database Select operation?",
    "type": "radio",
    "options": [
	  "Enable automatic watermarking in the Database Select operation",
      "Save the max recordID from the set of recordIDs in a variable and reference this variable in subsequent database requests",
      "Save the max recordID from the set of recordIDs in an Object Store and reference this recordID in subsequent database requests",
	  "Set Watermarking column in the Scheduler to the recordID"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A batch job is defined by a Batch Job scope that contains three batch steps. The Batch Job scope and Batch Step scopes are configured  with default acceptPolicy values.</br>An event processor in the second Batch Step scope throws an error because the input data is incomplete.</br>What is the default behavior of the batch job after the error is thrown?",
    "type": "radio",
    "options": [
	  "The second Batch Step scope is retried with the same data",
      "The Batch Job scope stops processing all records",
      "The second Batch Step scope's error is reserved and the repaired records are passed to the third Batch Step scope for processing",
	  "All existing in-flight records are discarded, but new records are still passed to the first Batch Step scope and processed"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An event contains a payload that is and array of objects.</br>How is the event routed in a Scatter-Gather?",
    "type": "radio",
    "options": [
	  "The is split and events with different smaller payloads are routed and processed in parallel",
      "The entired event is sent to each route and processed sequentially",
      "The entired event is sent to each route and processed in parallel",
	  "The event is split and events with different smaller payloads are routed and processed sequentially"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to exhibit. This RAML file generates an error.</br>What needs to be done to make this valid RAML?</br><img src='./_images/57.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Indent the get method under the {flight_id} resource",
      "Remove in the blank line on row 7",
      "Enclose the {flight_id} resource in parentheses () instead of curty {}",
	  "Outdent the {flight_id} resource"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A RAML specification is defined to manage customers with a unique identifier for each customer record.</br>What URI does MuleSoft recommend to uniquely access the customer identified with the unique ID 1234?",
    "type": "radio",
    "options": [
	  "/customers?operation=get&custid=1234",
      "/customers/custid=1234",
      "/customers/1234",
	  "/customers?custid=true&custid=1234"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What is the correct DataWeave expression for accessing the city Cleveland from the JSON payload?</br><img src='./_images/58.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "#[payload.city[1]]",
      "#[payload[2].city]",
      "#[payload[1].city]",
	  "#[payload.city[2]]"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A flow contains an HTTP Listener as the event source. What is the DataWeave expression to log the Content-Type header using a Logger component?",
    "type": "radio",
    "options": [
	  "#['Content-Type: ' + headers.'content-type']",
      "#['Content-Type: ' ++ attributes.headers.'content-type']",
      "#['Content-Type: ' ++ headers.'content-type']",
	  "#['Content-Type: ' + attributes.headers.'content-type']"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A web service implements an API to handle requests to http://acme.com/customers/{state}.</br>A web client makes a request to this API implementation at http://acme.com/customers/CA.</br>What is the correct DataWeave expression to retrieve the value CA?",
    "type": "radio",
    "options": [
	  "#[attributes.'http.uri.params'.state]",
      "#[attributes.uriParams.state]",
      "#[message.inboundProperties.'http.uri.params'.state]",
	  "#[state]",
	  "#[message.payload.inboundProperties.'http.uri.params'.state]"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application has two flows named parentFlow and childFlow. The childFlow begins with an HTTP Listener.</br>A variable is defined in parentFlow, then an HTTP Request is made to childFlow's HTTP Listener with some headers set.</br>What is the scope of the variable and attributes in the parentFlow after childFlow returns a response?",
    "type": "radio",
    "options": [
	  "The variable is NOT accessible. All the attributes passed to childFlow are removed or replaced.",
      "The variable is accessible. All the attributes passed to childFlow are removed or replaced.",
      "The variable is NOT accessible. All the attributes passed to childFlow are preserved.",
	  "The variable is accessible. All the attributes passed to childFlow are preserved."
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Set Variable component saves the current payload to a variable with the name images. What is the DataWeave expression to access the images variable?",
    "type": "radio",
    "options": [
	  "#[flowVars.images]",
      "#[vars.images]",
      "#[images]",
	  "#[payload.images]"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application has a flow named parentFlow.</br>The parentFlow contains an HTTP Request operation at the end of the flow. The parentFlow also contains a Set Variable operation right before the HTTP Request operation.</br>What is the scope of the variable to the server receiving the HTTP Request from parentFlow?",
    "type": "radio",
    "options": [
	  "The variable is accessible in the server but is immutable",
      "The variable is accessible in the server, can be changed, but changes are NOT seen back in parentFlow",
      "The variable is NOT accessible in the server",
	  "The variable is accessible in the server, can be changed, and changes are seen back in parentFlow"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is NOT part of a Mule 4 event?",
    "type": "radio",
    "options": [
	  "outboundProperties",
      "message",
      "payload",
	  "variables",
	  "attributes"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What happens to the attributes of a Mule event in a flow after an outbound HTTP Request is made?",
    "type": "radio",
    "options": [
	  "Attributes do not change",
      "New attributes may be added from the HTTP response headers, but no headers are ever removed",
      "New attributes may be added from the HTTP response, but previous attributes are passed through unchanged",
	  "Attributes are replaced with new attributes from the HTTP Request response (which might be null)"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Why must a Mule application's deployable archive package all its dependencies in order to be deployed to CloudHub?",
    "type": "radio",
    "options": [
	  "CloudHub workers needs to compare the current dependencies with the LATEST project dependencies from the MuleSoft repository",
      "The online logging service requires access to ALL project dependencies to log the appropriate Java classes used in the Mule application",
      "CloudHub workers CANNOT download ALL possible project dependencies a project may contain",
	  "MuleSoft support requires access to ALL project dependencies for future online troubleshooting"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. In the deployable archive's /classes folder, there are two properties files named dev.properties and prod.properties. The Mule application fails to deploy to CloudHub through Runtime Manager with the following error message.</br>What could be causing this error?</br><img src='./_images/59.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "The property files were NOT saved at the root level of the deployable archive",
      "The env property is NOT set in the Runtime Manager in the Mule application's Properties tab",
      "A file named ${env}.properties is NOT included in the deployable archive file",
	  "The dev.properties and prod.properties files were NOT uploaded to Runtime Manager"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "In what file does the Mule project keep track of all of its dependencies?",
    "type": "radio",
    "options": [
	  "global.xml",
      "mule-artifact.json",
      "pom.xml",
	  "mule-app.properties"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What reserved property can be defined and used in a Mule application to allow an HTTPS Listener to be accessed by external web clients after the Mule application is deployed to CloudHub?",
    "type": "radio",
    "options": [
	  "${https.port}",
      "${https.listener.port}",
      "${ssl.listener.port}",
	  "${ssl.port}"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application has two flows named parentFlow and childFlow. A variable is defined in parentFlow.</br>What is the scope of the variable when the parentFlow calls childFlow using a Flow Reference?",
    "type": "radio",
    "options": [
	  "The variable is accessible in childFlow, can be changed, and changes are seen back in parentFlow",
      "The variable is accessible in childFlow, can be changed, but changes are NOT seen back in parentFlow",
      "The variable is NOT accessible in childFlow",
	  "The variable is accessible in childFlow but is immutable"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What can ONLY be done with VM connectors, and NOT with Flow References, in a single Mule application?",
    "type": "radio",
    "options": [
	  "Allow a flow to pass events to another flow asynchronously",
      "Allow a flow to pass events to another flow synchronously",
      "Preserve the original payload when the VM connector returns a response from a flow",
	  "Preserve variables as the Mule event gets passed to another flow"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What file type is required to configure a Web Service Consumer to consume a SOAP web service?",
    "type": "radio",
    "options": [
	  "RAML",
      "WSDL",
      "JSON",
	  "OAS"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the process to create a connector using REST Connect?",
    "type": "radio",
    "options": [
	  "Develop the API in Flow Designer and publish the API to Exchange",
      "Design the API in Anypoint Studio and upload the API to Runtime Manager",
      "Design the API in Design Center and publish the API to Exchange",
	  "Develop the API in Anypoint Studio and export the connector as a jar file"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "How are query parameters dynamically passed to an outbound REST request using an HTTP Request operation?",
    "type": "radio",
    "options": [
	  "In the Mule event's payload",
      "As flow variables",
      "As URI parameters in the HTTP Request operation",
	  "As query parameters in the HTTP Request operation",
	  "As attributes in a Transform Message component before the HTTP Request operation",
	  "As attributes in the HTTP Listener operation"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The flow calls a SOAP endpoint using the Consume operation of the Web Service Consumer. The SOAP service has a required input parameter.</br>What event processor can be used to build the SOAP envelope with the required argument to pass to the SOAP service?</br><img src='./_images/60.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Set Property",
      "Transform Message",
      "JSON to XML",
	  "Build SOAP",
	  "Set Attachment"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An HTTP Request operation returns a JSON array of objects. In the Transform Message component, what is the process to convert the array of objects to an array of custom Java Account objects?",
    "type": "radio",
    "options": [
	  "Change the output type to the Java Account object type",
      "Change the input type to the Java Account object type",
      "Add the Account object metadata to the input and the Transform Message component will automatically convert the JSON objects to Account objects",
	  "Add the Account object metadata to the output and use the drag-and-drop feature to transform the incoming JSON data"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Scatter-Gather processes three separate HTTP requests. Each request returns a Mule event with a JSON payload.</br>What is the final output of the Scatter-Gather?",
    "type": "radio",
    "options": [
	  "An Object containing all three Mule event Objects",
      "The last JSON payload Object",
      "The last Mule event Object",
	  "An Object containing all three JSON payload Objects",
	  "An Array of the three Mule event Objects",
	  "An Array of the three JSON payload Objects"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "An event contains a payload that is an Array of Objects. How is the event routed in a Scatter-Gather?",
    "type": "radio",
    "options": [
	  "The event is SPLIT and different SMALLER events are routed and processed SEQUENTIALLY",
      "The event is SPLIT and different SMALLER events are routed and processed in PARALLEL",
      "The ENTIRE event is sent to each route and processed in PARALLEL",
	  "The ENTIRE event is sent to each route and processed SEQUENTIALLY"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What module and operation will throw an error if a Mule event's payload is not a number?",
    "type": "radio",
    "options": [
	  "Filter module's Is number operation",
      "Validation module's Is number operation",
      "Validation module's Is not number operation",
	  "Filter module's Is not number operation"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "How are multiple conditions used in a Choice router to route events?",
    "type": "radio",
    "options": [
	  "To route the same event to the matched route of EVERY true condition",
      "To find the FIRST true condition, then distribute the event to the ONE matched route",
      "To find the FIRST true condition, then route the same event to the matched route and ALL FOLLOWING routes",
	  "To filter and aggregate the responses after copying the event to EVERY route"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. What happens to this flow when the Validation module's Is not null operation throws an error?</br><img src='./_images/61.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "The flow logs the error message in the console and continues processing its Mule event",
      "The flow stops processing its Mule event and returns an error message to the HTTP Listener operation",
      "The flow silently stops processing its Mule event",
	  "The flow continues processing its Mule event and appends the error message to the end of the payload"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The main flow has an On Error Continue scope and the private flow has an On Error Propagate scope.</br>A web client makes an HTTP GET request to the HTTP Listener. The Is number validator in the private flow then throws an error with message 'Validate - Payload is an Integer'.</br>What response message is returned to the web client?</br><img src='./_images/62.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Success - private flow",
      "Success - main flow",
      "Error - private flow",
	  "Error - main flow",
	  "Validate - Payload is Integer"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "How can an error scope be configured to catch all errors in the HTTP namespace?",
    "type": "radio",
    "options": [
	  "Type: HTTP*</br>When:",
      "Type: HTTP</br>When:",
      "Type:</br>When: #[ error.errorType.namespace == 'HTTP' ]",
	  "Type:</br>When: #[ contains 'HTTP' ]"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The main flow has an On Error Continue scope. In the Configuration global element, default error handler is set to globalErrorHandler.</br>A web client makes an HTTP GET request to the flow's HTTP Listener. The Is number validator then throws an error with message 'Validate - Payload is an Integer'.</br>What response message is returned to the web client?</br><img src='./_images/62.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Error - main flow",
      "Success - End main flow",
      "Success - Begin main flow",
	  "Validate - Payload is an Integer",
	  "Global Error Handler"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The main flow has an On Error Continue scope with type set to HTTP:NOT_FOUND. The Mule application configures globalErrorHandler as its default error handler.</br>A web client posts a request to the HTTP Listener. The Transform Message component then throws a MULE:EXPRESSION error trying to convert the payload to application/xml.</br><img src='./_images/63.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "MAIN",
      "Global Error Handler",
      "The MULE:EXPRESSION error's message",
	  "HTTP:NOT_FOUND error"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The private flow has an On Error Propagate scope. In the Configuration global element, default error handler is set to globalErrorHandler.</br>A web client makes an HTTP GET request to the flow's HTTP Listener. The Is number validator in the private flow then throws an error with message 'Validate - Payload is an Integer'.</br>What response message is returned to the web client?</br><img src='./_images/64.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Success - mainFlow",
      "Validate - Payload is a Number",
      "globalErrorHandler",
	  "Error - privateFlow"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The main flow has an On Error Propagate scope. In the Configuration global element, default error handler is set to globalErrorHandler.</br>A web client makes an HTTP GET request to the flow's HTTP Listener. The Is number validator then throws an error with message 'Validate - Payload is an Integer'.</br>What response message is returned to the web client?</br><img src='./_images/65.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Success - Begin main flow",
      "Success - End main flow",
      "Validate - Payload is an Integer",
	  "Error - main flow",
	  "Global Error Handler"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What is valid DataWeave code to transform the input JSON payload to the output XML payload?</br><img src='./_images/66.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "</br><img src='./_images/67.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/68.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
      "</br><img src='./_images/69.png' alt='Ilustração' style='position: relative; max-width: 100%;'>",
	  "</br><img src='./_images/70.png' alt='Ilustração' style='position: relative; max-width: 100%;'>"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What DataWeave 2.0 type can be used as input to a map operation?",
    "type": "radio",
    "options": [
	  "Map",
      "Array",
      "String",
	  "Key",
	  "object"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What is the correct way to format the decimal 20.3844 as a string to two decimal places?",
    "type": "radio",
    "options": [
	  "20.3844 as String as format: '.0#'",
      "20.3844 as :string {format: '.0#'}",
      "20.3844 as :string as format: '.0#'",
	  "20.3844 as String (format = '.0#')",
	  "20.3844 as String {format: '.0#'}",
	  "20.3844 as :string (format = '.0#')"
    ],
    "correctAnswer": 4,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Mule application has a main flow and a combineNames flow. In the main flow, a variable named fullName is set to the object {firstName: 'Max', lastName: 'Mule'}.</br>What is valid DataWeave code to call the combineNames flow with the input object stored in the fullName variable?",
    "type": "radio",
    "options": [
	  "#[ dw::Runtime::lookup( 'combineNames', vars.fullName ) ]",
      "#[ combineNames( vars.fullName ) ]",
      "#[ lookup( combineNames( vars.fullName ) ) ]",
	  "#[ dw::Flow::lookup( 'combineNames', vars.fullName ) ]",
	  "#[ lookup( 'combineNames', vars.fullName ) ]"
    ],
    "correctAnswer": 4,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "In the Database On Table Row operation, what does the Watermark column enable the On Table Row operation to do?",
    "type": "radio",
    "options": [
	  "To enable multithreaded event processing for each record retrieved from a database",
      "To avoid duplicate processing of records in a database",
      "To save the payload into the ObjectStore for future reference",
	  "To save the most recent records retrieved from a database to enable database caching"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A flow has a JMS Publish consume operation followed by a JMS Publish operation. Both of these operations have the default configurations.</br>Which operation is asynchronous (does not wait for a response before continuing to the next event processor) and which operation is synchronous (blocks and waits for a response or timeout before continuing to the next event processor)?",
    "type": "radio",
    "options": [
	  "Publish consume: Asynchronous. Publish: Synchronous",
      "Publish consume: Synchronous. Publish: Synchronous",
      "Publish consume: Synchronous. Publish: Asynchronous",
	  "Publish consume: Asynchronous. Publish: Asynchronous"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Flow Reference component sends a non-empty JSON object payload to another flow named childFlow, which then returns an XML body.</br>A Flow Reference component saves the payload returned from childFlow to its target attribute named payload. Refer to the exhibit.</br>What is true about the Mule event's payload at the next event processor after the Flow Reference component?</br><img src='./_images/71.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "The payload is a non-empty Java object",
      "The payload is null",
      "The payload is the original JSON object",
	  "The payload is the XML response body"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What is the object type returned by the File List operation?</br><img src='./_images/72.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "Object of Mule event objects",
      "Array of Mule event objects",
      "Array of String file names",
	  "Object of String file names"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Batch Job scope has three batch steps and a default Max Failed Records value of 0. An event processor in the second batch step throws an error because the input data is incomplete.</br>What batch step processing occurs after the error is thrown?",
    "type": "radio",
    "options": [
	  "Processing immediately proceeds to the third batch step where it processes all the records",
      "The second batch step continues to process the rest of the records and the third batch step is skipped",
      "Processing immediately proceeds to the third batch step where it only processes the records that were successfully processed in the second batch step",
	  "None: all batch step processing stops immediately"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. What is the output of the Logger component in the Batch Job?</br><img src='./_images/73.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "[.333]</br>[1]",
      "[.333, .667, 1, 1.333]",
      "[.333]</br>[.667]</br> [1]</br> [1.333]",
	  "[.333, 1]"
    ],
    "correctAnswer": 3,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibits. The Set Payload component sets the payload to a Map object (not an Array). The File Write operation writes out files based on this Map object.</br>How many files are written to the file system when the flow executes?</br><img src='./_images/74.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "1",
      "0",
      "2",
	  "3"
    ],
    "correctAnswer": 1,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. The payload [1,2,3] is passed to the Batch Job scope. In Batch_Step_1, a variable named batchStepPayload is set to the current payload.</br>What is the value of the last log message after one batch job completes?</br><img src='./_images/75.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "30",
      "[11,12,13]",
      "13",
	  "33",
	  "10"
    ],
    "correctAnswer": 2,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What are the values of the counter and stepVar variables after the Batch Job?</br><img src='./_images/76.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "counter: 1, stepVar: null",
      "counter: 1, stepVar: 31",
      "counter: 31, stepVar: null",
	  "counter: 31, stepVar: 31"
    ],
    "correctAnswer": 0,
    "justification": "",
    "referenceLinks": [],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "Refer to the exhibit. What are the values of the counter and stepVar variables in the On Complete phase?</br><img src='./_images/77.png' alt='Ilustração' style='position: relative; max-width: 100%;'></br>",
    "type": "radio",
    "options": [
	  "counter: 1, stepVar: 31",
      "counter: 31, stepVar: 31",
      "counter: 31, stepVar: null",
	  "counter: 1, stepVar: null"
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
