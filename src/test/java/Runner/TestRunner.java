package Runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/FeatureFile",
        glue = {"StepDefinition"},
        monochrome = true,
        strict = true,
        plugin={"html:target/cucumber-html-report"}
)
public class TestRunner {

}
