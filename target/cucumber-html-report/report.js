$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/FeatureFile/rateAPI.feature");
formatter.feature({
  "name": "rateAPI",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is calling Rate API \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_is_calling_Rate_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Rate API is available",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.the_Rate_API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify Rate API is available or not",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apiUp"
    }
  ]
});
formatter.step({
  "name": "Rate API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.rate_API_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is calling Rate API \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_is_calling_Rate_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Rate API is available",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.the_Rate_API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the ran request assert response",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@assertTheResponse"
    }
  ]
});
formatter.step({
  "name": "validate the assert request response",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.validate_the_assert_request_response()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is calling Rate API \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_is_calling_Rate_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Rate API is available",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.the_Rate_API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the status code on providing invalid data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@incorrectDate"
    }
  ]
});
formatter.step({
  "name": "Rate API should return fail status code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.rate_API_should_return_fail_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify Rate API response when user passes valid date and currency type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@exchangeRate"
    }
  ]
});
formatter.step({
  "name": "User should pass the date \"\u003cdateValue\u003e\" to get exchange rate",
  "keyword": "Then "
});
formatter.step({
  "name": "Rate API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dateValue"
      ]
    },
    {
      "cells": [
        "2010-01-12"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is calling Rate API \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_is_calling_Rate_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Rate API is available",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.the_Rate_API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify Rate API response when user passes valid date and currency type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@exchangeRate"
    }
  ]
});
formatter.step({
  "name": "User should pass the date \"2010-01-12\" to get exchange rate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_should_pass_the_date_to_get_exchange_rate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Rate API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.rate_API_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To verify Rate API response when user passes valid past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PastDatRate"
    }
  ]
});
formatter.step({
  "name": "User should pass the valid past date \"\u003cdateValue\u003e\" to get exchange rate",
  "keyword": "Then "
});
formatter.step({
  "name": "Rate API should return success status code",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dateValue"
      ]
    },
    {
      "cells": [
        "2000-01-12"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is calling Rate API \"https://api.ratesapi.io/api\"",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_is_calling_Rate_API(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Rate API is available",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.the_Rate_API_is_available()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify Rate API response when user passes valid past date",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PastDatRate"
    }
  ]
});
formatter.step({
  "name": "User should pass the valid past date \"2000-01-12\" to get exchange rate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.user_should_pass_the_valid_past_date_to_get_exchange_rate(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Rate API should return success status code",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.RateStepDefination.rate_API_should_return_success_status_code()"
});
formatter.result({
  "status": "passed"
});
});