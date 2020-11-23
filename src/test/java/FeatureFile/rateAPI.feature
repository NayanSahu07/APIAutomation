Feature: rateAPI

Background: 
Given User is calling Rate API "https://api.ratesapi.io/api"
When The Rate API is available 

@apiUp
Scenario: To verify Rate API is available or not 
Then Rate API should return success status code

@assertTheResponse
Scenario: Verify the ran request assert response
Then validate the assert request response

@incorrectDate
Scenario: Verify the status code on providing invalid data
Then Rate API should return fail status code

@exchangeRate
Scenario Outline: To verify Rate API response when user passes valid date and currency type 
Then User should pass the date "<dateValue>" to get exchange rate
Then Rate API should return success status code
Examples:
|dateValue|
|2010-01-12|

@PastDatRate
Scenario Outline: To verify Rate API response when user passes valid past date 
Then User should pass the valid past date "<dateValue>" to get exchange rate
Then Rate API should return success status code
Examples:
|dateValue|
|2000-01-12|
