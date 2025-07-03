import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

export const setupServer = () => {
  const exp = express();

  const PORT = process.env.PORT || 3000;

  exp.use(cors());
  exp.use(pino());

  exp.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  exp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
