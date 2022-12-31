import { defineFeature, loadFeature } from 'jest-cucumber';
import { PasswordValidator } from 'src/password-validator';

const feature = loadFeature('create_quiz.feature');

defineFeature(feature, test => {
  let passwordValidator = new PasswordValidator();
  let accessGranted = false;
  
  beforeEach(() => {
    passwordValidator = new PasswordValidator();
  });

  test('Entering a correct password', ({ given, when, then }) => {
    given('I have previously created a password', () => {
      passwordValidator.setPassword('1234');
    });

    when('I enter my password correctly', () => {
      accessGranted = passwordValidator.validatePassword('1234');
    });

    then('I should be granted access', () => {
      expect(accessGranted).toBe(true);
    });
  });
});

//Sources
//https://www.npmjs.com/package/jest-cucumber
//https://codesandbox.io/s/domain-driven-hexagon-ftmxr?file=/tests/user/delete-user/delete-user.e2e-spec.ts:581-592