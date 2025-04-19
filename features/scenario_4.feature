Feature: API automation tests

    Scenario Outline: Get a list of available users with delay and response time is no longer than 1 second
        Given I send a request to get the list of available users with delay parameter <delay>
        Then I should see that the response time is no longer than 1 second

    Examples:
        | delay |
        | 0     |
        | 3     |