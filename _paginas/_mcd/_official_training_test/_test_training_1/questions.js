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
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
