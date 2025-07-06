import Contact from '../models/contact.js';

export const getAllContacts = () => Contact.find();

export const getContactsById = (id) => Contact.findById(id);
