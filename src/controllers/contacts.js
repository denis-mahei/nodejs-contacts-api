import { getContactsById, getAllContacts } from '../services/contacts.js';

export const getContactsController = async (req, res) => {
  try {
    const contacts = await getAllContacts();

    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export const getContactByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await getContactsById(id);

    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found!',
      });
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${id}!`,
      data: contact,
    });
  } catch (e) {
    res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
