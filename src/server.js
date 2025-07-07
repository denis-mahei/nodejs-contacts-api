import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { getEnvVar } from './utils/getEnvVar.js';

const PORT = getEnvVar('PORT', '3000');

export const setupServer = () => {
  const exp = express();

  exp.use(cors());
  exp.use(express.json());

  exp.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  exp.get('/', (req, res) => {
    res.json({
      message: 'Welcome to contact manager!📲',
    });
  });

  exp.use(contactsRouter);

  exp.use(notFoundHandler);

  exp.use(errorHandler);

  exp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
