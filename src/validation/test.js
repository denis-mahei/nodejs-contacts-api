import { createContactSchema, updateContactSchema } from './contacts.js';

const dataToValidate = {
  name: 'Denis',
  phoneNumber: '+380991234567',
  email: 'denis@example.com',
  contactType: 'personal',
};

const result = updateContactSchema.validate(dataToValidate);

if (result.error) {
  console.error(result.error.details);
} else {
  console.log('✅ Data is valid!');
}
