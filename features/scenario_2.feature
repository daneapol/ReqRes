Feature: API automation tests

    Scenario: Create a new user and validate that the creation date is today
        Given I send a request to create a new user with name "carter" and job "sportsman"
        Then I should see that the request was successful
        And I should see that the creation date is today