Feature: API automation tests

    Scenario: Login user but without a password and validate that user cannot login
        Given I send a request to login user "user@reqres.in" but no password
        Then I should see that the user cannot login