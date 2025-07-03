import Contact from '../models/contact.js';

export const getAllContacts = async () => {
  return await Contact.find();
};

export const getContactsById = async (id) => {
  return await Contact.findById(id);
};
