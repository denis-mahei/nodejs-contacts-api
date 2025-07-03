import mongoose from 'mongoose';

export const initMongoConnection = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const password = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const dbName = process.env.MONGODB_DB;

    const fullUrl = `mongodb+srv://${user}:${password}@${url}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(fullUrl);

    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Mongo connection error:', error.message);
  }
};

initMongoConnection();
