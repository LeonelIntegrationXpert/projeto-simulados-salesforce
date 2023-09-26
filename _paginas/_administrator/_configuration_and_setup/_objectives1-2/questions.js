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
      "https://help.salesforce.com/articleView?id=user_userdisplay_tabs_lex.htm&type=5","https://help.salesforce.com/articleView?id=basics_app_launcher_lex.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2020/01/edit-app-items.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-156-image1.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-156-image2.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_151220210200100.mp4"]
  },
  {
    "question": "Cosmic Enterprises recently moved from using Salesforce Classic to Lightning Experience. Their agents immediately noticed the difference in the way search is handled in Lightning Experience. What are some of the key features of Einstein Search in Lightning Experience that the agents might have noticed?",
    "type": "checkbox",
    "options": [
      "Actions from record pages can be accessed and completed while hovering over the instant results",
      "Search can be expanded so that it can use results indexed by other search engines",
      "Search results are based on the most relevant records because of search personalization",
      "Instant results will immediately show all the records that contain a value that is being searched",
      "Search can be done using natural language in order to find records"
    ],
    "correctAnswer": [0,2,4],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Einstein Search features include personalization, natural language search, and actionable instant results. With personalization, search is based on a users profile and the types of records that the user usually interacts with. Natural Language Search allows the user to use common English phrases that Salesforce turns into filters to show the most relevant results. Instant actionable results that appear when hovering over instant results give users the ability to access actions on records. These instant results appear even as users are typing the search terms.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Instant results are not the complete search results and will only look at the record name. Therefore, a value located in one of the fields other than the record name or searchable secondary field will not make the record appear in the instant results. Einstein Search does not have a feature that will allow it to show results based on other search engines indexes.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/s/articleView?id=sf.search_map.htm&type=5","https://help.salesforce.com/s/articleView?id=sf.search_ai_enduser_intro.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-151220210200100-image1.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-151220210200100-image2.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-151220210200100-image3.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_151220210200100.mp4"]
  },
  {
    "question": "Universal Containers would like to improve the usability of their current lookup fields. When looking up a Contact record, they would like to view the Account, Phone, and Email fields as well as the name. Universal Containers would also like to globally search for contacts by the account name. What feature would you suggest to help them with this need?",
    "type": "radio",
    "options": [
      "List View",
      "Page Layout",
      "Tab Layout",
      "Search Layout"
    ],
    "correctAnswer": 3,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Search layouts are ordered groups of fields that are displayed when a record is presented in a particular context, such as in search results, a lookup dialog, or a related list. By adding fields, we can give users more information and help them locate records more quickly. The secondary field within the search results layout appears just beneath the record name in instant results and recent items. For contacts, since the account name is the secondary field, the contacts are searchable by the account name.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Instant results are not the complete search results and will only look at the record name. Therefore, a value located in one of the fields other than the record name or searchable secondary field will not make the record appear in the instant results. Einstein Search does not have a feature that will allow it to show results based on other search engines indexes.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/s/articleView?id=sf.customizing_search_layouts.htm&type=5","https://help.salesforce.com/articleView?id=search_results_setup_lex.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2017/10/contact-lookup.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-1174-image1.png"],
    "videos": []
  },
  {
    "question": "Where in an org could a Salesforce Administrator see how many remaining Salesforce licenses are available?",
    "type": "checkbox",
    "options": [
      "Company Information page",
      "System Overview page",
      "Limits -> Licenses",
      "Manage Users -> Licenses"
    ],
    "correctAnswer": [0,1],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Within the Company Information page, the license sections list the number of licenses available, used, and remaining. The System Overview page will show system limits including the most used licenses and the number remaining.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Manage Users -> Licenses and Limits -> Licenses are not options in Setup.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/s/articleView?id=sf.users_license_types_view.htm&type=5","https://help.salesforce.com/s/articleView?id=sf.users_understanding_license_types.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2019/11/system-overview-page.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-150-image2.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_150.mp4"]
  },
  {
    "question": "Which are valid options when moving change sets from one Salesforce environment to another?",
    "type": "checkbox",
    "options": [
      "Any Developer Edition org to any sandbox org",
      "Any sandbox to any production org",
      "Any two sandboxes that belong to the same production org",
      "A sandbox and the associated production org"
    ],
    "correctAnswer": [2,3],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Change sets can only be sent between orgs that are connected to a single production org, such as two sandboxes of a production org or a sandbox and its production org.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'For migrating metadata from one org environment to a different org, other tools can be used such as VS Code or Ant migration tool.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/articleView?id=changesets.htm&type=5#:~:text=Change%20sets%20can%20only%20be%20,change%20sets."
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-536-image1.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_536.mp4"]
  },
  {
    "question": "A sales user has created a list view to display accounts of premium customers in Lightning Experience. He would like to share this list with a public group of co-workers. What should a Salesforce Administrator recommend to allow the co-workers to see the accounts as quickly as possible?",
    "type": "radio",
    "options": [
      "Export the list view to a .csv file and share it with the co-workers.",
      "Use the sharing button to share the list view with the co-workers.",
      "Share the list view with the public group of co-workers from List View Controls.",
      "Create a report that shows the accounts and share it with the co-workers."
    ],
    "correctAnswer": 2,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'A list view can be shared with a public group of users by selecting "Sharing Settings" from the "List View Controls" menu in Lightning Experience. It can be used to share a particular list view with users quickly.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Exporting a list view or creating a report is not an efficient solution for this use case. Also, a sharing button is not used to share a list view.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/articleView?id=changesets.htm&type=5#:~:text=Change%20sets%20can%20only%20be%20,change%20sets."
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2019/01/admin-list-view-share-1.png","https://cdn.focusonforce.com/wp-content/uploads/2019/01/admin-list-view-share-2.png"],
    "videos": []
  },
  {
    "question": "A developer of Cosmic Solutions has created a new sandbox from the company's production org of Salesforce. They are using change sets and setting up deployment connections. What setting should be selected, and in which environment, to push metadata from the new sandbox to production?",
    "type": "radio",
    "options": [
      "'Allow Outbound Changes' in production",
      "'Allow Inbound Changes' in sandbox",
      "'Allow Inbound Changes' in production",
      "'Allow Outbound Changes' in sandbox"
    ],
    "correctAnswer": 2,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Deployment connections are automatically created between related orgs when a sandbox is created. Although a deployment connection exists, inbound change sets need to be authorized.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'The deployment connection definition within the production org needs to have Allow Inbound Changes for the deployment connection created for the sandbox.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/articleView?id=t_changesets_deployment_connection.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-538-image1.png"],
    "videos": []
  },
  {
    "question": "A Salesforce Administrator is told that the sales rep profile should no longer have access to a tab available in an app. Which tab setting should the Salesforce Administrator use?",
    "type": "radio",
    "options": [
      "Default Off",
      "Tab Hidden",
      "Default On",
      "None of the tab settings can meet this requirement"
    ],
    "correctAnswer": 1,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'The Tab Hidden setting means that the tab will not be visible by default, and the user cannot enable it.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Default Off allows the tab to still be visible when viewing All Items in the App Launcher but not visible within an app. Users can customize their display to add the tab to an app. \nDefault On allows the tab to be visible in the app and when viewing all tabs.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/apex/HTViewHelpDoc?id=permissions_tab_settings_ref.htm&language=en_US"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-154-image1.png","https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-154-image2.png"],
    "videos": []
  },
  {
    "question": "Which of the following settings can be configured from the 'Company Settings' section in Setup?",
    "type": "checkbox",
    "options": [
      "Fiscal Year Settings",
      "Business Hours",
      "Company Information",
      "Allowed IP ranges",
	  "Company Login Hours"
    ],
    "correctAnswer": [0,1,2],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'The Company Settings page in Lightning Experience allows updating settings such as company information, default language, default time zone, currencies, fiscal year settings, business hours, holidays, and available languages. Login Hours and IP Ranges are specified at the profile level.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/articleView?id=admin_profile.htm&type=5",
	  "https://help.salesforce.com/articleView?id=admin_loginrestrict.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-138-image1.png","https://cdn.focusonforce.com/wp-content/uploads/2019/02/profiles.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_138.mp4"]
  },
  {
    "question": "European users are reporting that dates are displaying in the US date format instead of the European date format. The majority of users are based in the U.S. What is the most efficient way to handle this issue?",
    "type": "radio",
    "options": [
      "Change the date format setting on the company profile",
      "Manually change each European user's locale in User settings",
      "Change the default locale setting on the company profile",
      "Inform European users to change the locale settings in personal settings"
    ],
    "correctAnswer": 3,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'The default locale setting is on the company profile and determines the display format of dates, time and numbers. It can be set at the company level but can be overridden by the users in their personal settings. With this scenario, the most efficient way to handle this issue would be to inform the affected users to change their personal settings to reflect their locale.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/apex/HTViewHelpDoc?id=admin_supported_locales.htm&language=en_US",
	  "https://help.salesforce.com/articleView?id=company_information_fields.htm&type=5"
    ],
    "screenshots": ["https://cdn.focusonforce.com/wp-content/uploads/2017/10/admin-org-setup-question-13.png","https://cdn.focusonforce.com/wp-content/uploads/2019/08/Organization-Setup-Global-UI_147.png"],
    "videos": ["https://cdn.focusonforce.com/wp-content/uploads/question-videos/explanation_138.mp4"]
  },
  {
    "question": "Global Container's Sales Team has noticed that when exchange rates are updated, opportunity amounts recorded in additional currencies change. How can a Salesforce Administrator avoid having opportunity amounts on closed opportunities change when exchange rates are updated?",
    "type": "radio",
    "options": [
      "Enable 'Advanced Currency Management' and set dated exchange rates",
      "Update the exchange rate on a monthly basis",
      "Lock the amount on the opportunity record",
      "Opportunity amounts will always display with the latest exchange rate"
    ],
    "correctAnswer": 3,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Advanced Currency Management will allow the setting of dated exchange rates.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Opportunity amounts will use the applicable exchange rate. The amounts will not change every time the exchange rate is updated.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
      "https://help.salesforce.com/articleView?id=sf.administration_about_advanced_currency_management.htm&type=5",
	  "https://help.salesforce.com/articleView?id=sf.administration_enable_advanced_currency_management.htm&type=5"
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/2019/05/management-settings1.png",
	  "https://cdn.focusonforce.com/wp-content/uploads/2017/10/admin-org-setup-question-22.png"
	],
    "videos": []
  },
  {
    "question": "What is true regarding change sets?",
    "type": "radio",
    "options": [
      "If a change set deployment fails, the entire transaction is rolled back",
      "A change set can be deployed only after validation",
      "Change sets are always created in a sandbox organization and deployed in production",
      "If a change set deployment is successful, it can be rolled back as needed"
    ],
    "correctAnswer": 0,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Change sets are typically created in a sandbox and deployed to production, but they can be sent the other way.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Successful deployments cannot be rolled back. It is recommended but not required to validate a change set before deployment.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/articleView?id=changesets_inbound_deploy.htm&type=5#:~:text=A%20change%20set%20is,rolled%20back."
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-547-image1.png"
	],
    "videos": []
  },
  {
    "question": "An administrator has created many custom fields on the Account record for different departments. One page layout is needed for all profiles because some users occasionally need to reference fields used by other departments. Which feature could the administrator enable to assist users in quickly finding the information that is relevant to them?",
    "type": "radio",
    "options": [
      "Enable separate loading of related lists",
      "Enable lazy loading of the detail page",
      "Enable personal page layouts so users can customise the page layout",
      "Enable collapsible sections so users can collapse the sections that are not relevant to them"
    ],
    "correctAnswer": 3,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'The Enable Collapsible Sections feature allows users to expand and contract sections on a page layout. Salesforce will remember the settings for each user. Separate loading of related lists is intended to improve performance in organizations that utilize large numbers of related lists by loading them separately after primary record details are loaded and thus would not apply to this scenario.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/articleView?id=customize_ui_settings.htm&type=5"
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-143-image1.png",
	  "https://cdn.focusonforce.com/wp-content/uploads/2019/10/le-collapse-sections.png"
	],
    "videos": []
  },
  {
    "question": "A Salesforce Administrator is moving an app from the developer sandbox to their UAT environment. What is required to use change sets between two orgs?",
    "type": "checkbox",
    "options": [
      "The two orgs are affiliated with the same production org",
      "There is a deployment connection between the two orgs",
      "One of the orgs is a developer sandbox",
      "One of the orgs is a developer edition"
    ],
    "correctAnswer": [0,1],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'To use change sets between two orgs, they need to be affiliated with the same production org, and a deployment connection needs to exist between them. When using change sets, it is not required to move metadata from a developer sandbox. Change sets can be used to move metadata between partial copy sandbox, full sandbox, and production org. Developer edition orgs do not support change sets.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/HTViewHelpDoc?id=changesets.htm&language=en_US"
    ],
    "screenshots": [],
    "videos": []
  },
  {
    "question": "What does the 'Default Locale' setting determine?",
    "type": "checkbox",
    "options": [
      "Fiscal Year",
      "Name format",
      "Default Currency",
      "Display format of Addresses",
	  "Format of Dates and Times"
    ],
    "correctAnswer": [1,3,4],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'The Default Locale setting determines the format of dates, times, numbers, names, addresses, and phone numbers in Salesforce. The default currency for single currency orgs is set using the Currency Locale field, a separate field to the Default Locale.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/articleView?id=admin_supported_locales.htm&type=5",
	  "https://help.salesforce.com/articleView?id=basics_understanding_values_curr_date_phone.htm&type=5"
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/2019/07/default-locale2.png",
	  "https://cdn.focusonforce.com/wp-content/uploads/2019/07/default-locale3.png"
	],
    "videos": []
  },
  {
    "question": "Acme Appliances has a number of Knowledge articles that should be exposed on the company's customer service site. The articles cover four areas, namely, New Products, Customer Service, Resources, and Best Practices. What features need to be set up to allow the articles to be separated into their respective areas and viewed on the site?",
    "type": "checkbox",
    "options": [
      "Chatter",
      "Components",
      "Data categories",
	  "Topics"
    ],
    "correctAnswer": [2,3],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'Navigational topics need to be set up to map the Knowledge articles to data categories. These can then be viewed on the site within their respective topic areas. Topics can also be used as filters to refine global search results for articles in an Aura site.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/s/articleView?id=sf.networks_topics_navigational.htm&type=5"
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/2018/04/community-cloud-setup-119-1.png",
	  "https://cdn.focusonforce.com/wp-content/uploads/2018/04/community-cloud-setup-119-2.png"
	],
    "videos": []
  },
  {
    "question": "Service Silo recently overhauled their Case record page and have included new fields and buttons. Since only a communique was sent and no classroom training can be conducted because of the current call volume, they want their agents to still be guided with the changes to the Case record page and how to use the new layout. What is the best option to introduce these Case record changes to the agents?",
    "type": "radio",
    "options": [
      "Send an email with screenshots that detail the changes to the new Case record page",
      "Create dev org accounts for the agents and have them practice on the new Case record page there",
      "Create in-app guidance that includes instructions for the new Case record page",
	  "Create a video that shows the changes to the Case record page and have the agents watch it"
    ],
    "correctAnswer": 2,
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'With in-app guidance, supported Setup pages and record pages can come with instructions as to the steps that can be done within the page. It can highlight certain portions on the record page and could be configured to also feature images. In-app guidance can also be assigned to specific record types.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              'Although screenshots and videos can help, this would involve switching to different applications within the computer desktop.' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Distinguish and understand the administration of declarative configuration of the User Interface' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/articleView?id=000349069&type=1&mode=1"
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/question-screenshots/qms-020620210108330-image1.png"
	],
    "videos": []
  },
  {
    "question": "Which of the following are found in the Company Information page?",
    "type": "checkbox",
    "options": [
      "Total Number of Open Opportunities",
      "Licenses available",
      "Roles",
	  "Storage Used",
	  "Default Locale"
    ],
    "correctAnswer": [1,3,4],
    "justification": 
      '<p>' +
          '<span class="quiz-answer">' +
              '<em>' + 
                  'The company information page contains company, financial, and support information. It also includes the default language, timezone, and locale as well as the storage space used and the number of licenses available.\n' +
              '</em>' +
          '</span>' +
      '</p>\n' +
      '<p>' + 
          '<em>' +
              '' +
          '</em>'+ 
      '</p>\n' +
      '<p>' + 
          '<strong>Objective:</strong> Configuration and Setup<br>' + 
          '<strong>Detailed Objective:</strong> Describe the information found in the company settings' + 
      '</p>',
    "referenceLinks": [
	  "https://help.salesforce.com/articleView?id=company_information_fields.htm&type=0&language=en_US"
    ],
    "screenshots": [
	  "https://cdn.focusonforce.com/wp-content/uploads/2016/12/company-profile.png",
	  "https://cdn.focusonforce.com/wp-content/uploads/2018/06/admin-company-profile-170.png"
	],
    "videos": []
  }
];

var shuffledQuestionsData = shuffleOptionsAndQuestions(questionsData);
console.log(shuffledQuestionsData);
