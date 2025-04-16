Feature: API automation tests

    Scenario: Update a user and validate that the request and response body match
        Given I send a request to update user with name "mark" and job "sheriff"
        Then I should see that the request was successful
        And I should see that the request body matches the response body where possible