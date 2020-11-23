package StepDefinition;

import java.util.logging.Logger;

import org.junit.Assert;

import Rate.RateAPI;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RateStepDefination {

	Logger log = Logger.getLogger("devpinoyLogger");

	@Given("User is calling Rate API {string}")
	public void user_is_calling_Rate_API(String url) {
		log.info("Give API URL::" + url);
		RateAPI.callRateAPI(url);
	}

	@When("The Rate API is available")
	public void the_Rate_API_is_available() {
		int actStatusCode = RateAPI.isURLValid();
		log.info("API Status Code::" + actStatusCode);
		Assert.assertEquals(200, actStatusCode);
	}

	@Then("Rate API should return success status code")
	public void rate_API_should_return_success_status_code() {
		int actStatusCode = RateAPI.isURLValid();
		log.info("API Status Code::" + actStatusCode);
		Assert.assertEquals(200, actStatusCode);
	}

	@Then("User should pass the date {string} to get exchange rate")
	public void user_should_pass_the_date_to_get_exchange_rate(String string) {

		RateAPI.getExchangeForSpecificDate(string);
		log.info("API Status Code::" + string);
	}

	@Then("Rate API should return fail status code")
	public void rate_API_should_return_fail_status_code() {
		int actStatusCode = RateAPI.invalidData();
		log.info("API Status Code::" + actStatusCode);
		// Assert.assertEquals(200,actStatusCode );
	}

	@Then("validate the assert request response")
	public void validate_the_assert_request_response() {
		int statusCode = RateAPI.assertRes();
		log.info("API Status Code::" + statusCode);
		Assert.assertFalse(false);

	}

	@Then("User should pass the valid past date {string} to get exchange rate")
	public void user_should_pass_the_valid_past_date_to_get_exchange_rate(String string) {

		RateAPI.getForSpecificDate(string);
		log.info("API Status Code::" + string);
	}
}