import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import contactsRouter from './routers/contacts.js';

const PORT = process.env.PORT || 3000;

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
      message: 'Hello World!',
    });
  });

  exp.use(contactsRouter);

  // exp.use('*', (req, res, next) => {
  //   res.status(404).json({
  //     message: 'Not found',
  //   });
  // });

  exp.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  exp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
