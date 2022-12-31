Feature: Creating a Quiz

Scenario Outline: Should not be able to create a Quiz with invalid input
    Given I am authenticated as <user_id>
    When I attempt to create a quiz with <quiz_data>
    Then I expect a specific response <code>

     Examples:
    | user_id  | quiz_data                                         | code  |
    |    1     | ../testDataResources/1_lessThan2Answers.json       |  422  |
    |    1     | ../testDataResources/2_moreThan4Answers.json       |  422  |
    |    1     | ../testDataResources/3_lessThan2Questions.json     |  422  |
    |    1     | ../testDataResources/4_moreThan10Questions.json    |  422  |
    |    1     | ../testDataResources/5_noCorrectAnswers.json       |  422  |
    |    1     | ../testDataResources/6_validQuiz.json              |  201  |