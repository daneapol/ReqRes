Feature: API automation tests

    Scenario: Get a list of available users with delay and response time is no longer than 1 second
        Given I send a request to get the list of available users with delay parameter 3
        Then I should see that the response time is no longer than 1 second