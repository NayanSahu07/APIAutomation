package Rate;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;

public class RateAPI {

	private static Response response;
	private static String jsonString;

	public static void callRateAPI(String url) {

		RestAssured.baseURI = url;
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = getResponse(request, "/latest");

	}

	public static int isURLValid() {

		return response.getStatusCode();
	}

	private static Response getResponse(RequestSpecification request, String getValue) {
		return request.get(getValue);
	}

	public static void getExchangeForSpecificDate(String dateValue) {

		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = getResponse(request, dateValue);

	}

	public static int invalidData() {
		RequestSpecification request = RestAssured.given();
		Response response = request.get("/78789798798");
		int statusCode = response.getStatusCode();
		Assert.assertEquals("Correct status code returned", statusCode, 400);
		return statusCode;
	}

	public static int assertRes() {
		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		int statusCode = response.getStatusCode();
		Assert.assertEquals("Correct status code returned", statusCode, 200);
		return statusCode;
	}

	public static int getForSpecificDate(String Date) {

		RequestSpecification request = RestAssured.given();
		request.header("Content-Type", "application/json");
		response = getResponse(request, "/latest");
		Response response = (Response) request.queryParam(Date, 2000 - 12 - 01).get();
		String jsonString = response.asString();
		System.out.println(response.getStatusCode());
		Assert.assertEquals(jsonString.contains("2000-12-01"), false);
		int statusCode = response.getStatusCode();
		return statusCode;
	}

}