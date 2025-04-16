Feature: API automation tests

    Scenario: Get a list of available users and print users with odd ID numbers
        Given I send a request to get the list of available users
        Then I should see that the request was successful
        And I print available users with odd ID numbers