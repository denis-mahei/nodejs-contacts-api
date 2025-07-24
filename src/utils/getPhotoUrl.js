import { saveFileToUploadDir } from './saveFileToUploadDir.js';
import { saveFileToCloudinary } from './saveFileToCloudinary.js';
import { getEnvVar } from './getEnvVar.js';

export const getPhotoUrl = async (file) => {
  if (!file) return;

  if (getEnvVar('ENABLE_CLOUDINARY') === 'true')
    return await saveFileToCloudinary(file);

  return await saveFileToUploadDir(file);
};
