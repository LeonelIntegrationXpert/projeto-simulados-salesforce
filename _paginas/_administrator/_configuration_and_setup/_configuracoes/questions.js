function shuffleOptionsAndQuestions(questionsData) {
  for (var i = questionsData.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tempQuestion = questionsData[i];
    questionsData[i] = questionsData[j];
    questionsData[j] = tempQuestion;
  }

  for (var i = 0; i < questionsData.length; i++) {
    var options = questionsData[i].options;
    var correctAnswer = questionsData[i].correctAnswer;

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

var questionsData = [
  {
    "question": "Global Shipping does business in a number of different countries but wants to report in a single currency. The Salesforce Administrator is considering enabling multi-currency. What additional steps must be taken after multi-currency is enabled?",
    "type": "checkbox",
    "options": [
      "Set the corporate currency",
      "Set the validity dates for the exchange rates",
      "Define the list of currencies and make them active",
      "Set the exchange rates for the currencies",
      "Set the currency for each profile"
    ],
    "correctAnswer": [0, 2, 3],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Exchange rates are not dated by default when multi-currency is enabled. The Advanced Currency Management feature must be selected if the company needs to track dated exchange rates. As a requirement for dated exchange rates was not specified, Advanced Currency Management is an optional step. Setting a currency for each profile is also not necessary.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/articleView?id=sf.admin_currency.htm&type=5",
      "https://help.salesforce.com/articleView?id=sf.editing_conversion_rates.htm&type=5"
    ],
    "screenshots": [
      "https://cdn.focusonforce.com/wp-content/uploads/2017/10/admin-org-setup-question-12.png"
    ],
    "videos": []
  },
  {
    "question": "Cosmic Software Solutions uses Salesforce for lead management. The record page created for leads consists of several custom fields and sections. They need to be configured as individual components such that different types of users only see the fields and sections that they require. For example, a section consisting of five custom fields, which allow specifying contact information, should only be visible to sales users. Which feature should be used to meet this requirement?",
    "type": "radio",
    "options": [
      "Dynamic Forms",
      "Dynamic Interactions",
      "Page Layouts",
      "Lightning Web Component"
    ],
    "correctAnswer": 0,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Dynamic Forms allow migrating the fields and sections from an existing record page as individual components in the Lightning App Builder. These components can then be configured the same way as the other components on the page so that users can view only the fields and sections they should be able to access. Dynamic Forms is supported for custom objects, accounts (including person accounts), cases, contacts, leads, and opportunities.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Dynamic Interactions is a feature used when an event occurring in one component on a Lightning page, such as the user clicking an item in a list view, should update other components on the page. Creating a custom Lightning Web Component for this requirement is unnecessary and would require programmatic development. Page Layouts do not support configuring visibility for specific fields and sections on a page.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "A Salesforce user has approached the Administrator informing him that she wants to hide certain tabs in the navigation bar. What should the Salesforce Administrator suggest to her?",
    "type": "radio",
    "options": [
      "The administrator should remove access to the tab at the user level.",
      "The user should create a new profile or App",
      "The user should enable the 'auto-hide' feature for rarely used tabs.",
      "The user should customize the navigation bar of the app."
    ],
    "correctAnswer": 3,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'A Salesforce Administrator could modify the access to a tab for a profile but not for an individual user. There is no auto-hide feature for rarely used tabs. Each app can have a different set of tabs. Users can be assigned to different apps. In Lightning Experience, the App Launcher can be utilized to switch between apps.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Users can add, remove, rename, and reorder tabs that are displayed by default by personalizing the navigation bar of an app in Lightning Experience. Default tabs that are specified by the Salesforce Administrator cannot be removed or renamed. Users cannot create profiles or Apps only the Administrator can do this also, it is not the required solution for this scenario.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5","https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_overview.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2020/01/edit-app-items.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-156-image1.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_151220210200100.mp4"]
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
