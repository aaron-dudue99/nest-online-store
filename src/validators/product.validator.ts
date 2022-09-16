import validator from 'validator';

export class ProductValidator {
  static imageWhitelist: string[] = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
  ];

  static validate(
    body,
    file: Express.Multer.File,
    toValidate: string[],
  ): string[] {
    const errors: string[] = [];

    if (toValidate.includes('name') && validator.isEmpty(body.name)) {
      errors.push('Product name cannot be empty');
    }

    if (toValidate.includes('description') && validator.isEmpty(body.name)) {
      errors.push('Product description cannot be empty');
    }

    if (
      toValidate.includes('price') &&
      !validator.isInt(body.price, { min: 0 })
    ) {
      errors.push('Product price cannot be negative');
    }

    if (toValidate.includes('imageCreate')) {
      if (file === undefined) {
        errors.push('You must upload a product image');
      } else if (!ProductValidator.imageWhitelist.includes(file.mimetype)) {
        errors.push('Invalid Image Format');
      }
    }

    if (toValidate.includes('imageUpdate')) {
      if (
        file !== undefined &&
        !ProductValidator.imageWhitelist.includes(file.mimetype)
      ) {
        errors.push('invalid image format');
      }
    }

    return errors;
  }
}
