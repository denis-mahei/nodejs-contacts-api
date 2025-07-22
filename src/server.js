import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import cookieParser from 'cookie-parser';

import router from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { UPLOAD_DIR } from './constants/index.js';

const PORT = getEnvVar('PORT', '3000');

export const setupServer = () => {
  const exp = express();

  exp.use(cors());
  exp.use(express.json());
  exp.use(cookieParser());

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

  exp.use(router);

  exp.use('/uploads', express.static(UPLOAD_DIR));

  exp.use(notFoundHandler);

  exp.use(errorHandler);

  exp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
