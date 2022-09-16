import validator from 'validator';

export class UserValidator {
  static validate(body, toValidate: string[]) {
    const errors: string[] = [];

    if (toValidate.includes('name') && validator.isEmpty(body.name)) {
      errors.push('Name must not be empty');
    }

    if (toValidate.includes('email') && !validator.isEmail(body.email)) {
      errors.push('Invalid email address');
    }

    if (toValidate.includes('password') && validator.isEmpty(body.password)) {
      errors.push('Password must not be empty');
    }
    return errors;
  }
}
