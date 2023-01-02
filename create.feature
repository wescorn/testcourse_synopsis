Feature: Creating a Quiz

Scenario Outline: Should not be able to create a Quiz with invalid input
    Given I am authenticated as <user_id>
    When I attempt to create a quiz with <quiz_data>
    Then I expect a specific response <code>

     Examples:
    | user_id  | quiz_data             | code  |
    |    1     | lessThan2Answers      |  422  |
    |    1     | moreThan4Answers      |  422  |
    |    1     | lessThan2Questions    |  422  |
    |    1     | moreThan10Questions   |  422  |
    |    1     | noCorrectAnswers      |  422  |