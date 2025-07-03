import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import * as contactsController from './controllers/contacts.js';

export const setupServer = () => {
  const exp = express();

  const PORT = process.env.PORT || 3000;

  exp.use(cors());
  exp.use(pino());
  exp.use(express.json());

  exp.get('/contacts', contactsController.getContacts);
  exp.get('/contacts/:id', contactsController.getContact);

  exp.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  exp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
