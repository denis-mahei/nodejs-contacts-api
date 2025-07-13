import { UsersCollection } from '../db/models/user.js';

export const registerUser = async (payload) =>
  await UsersCollection.create(payload);
