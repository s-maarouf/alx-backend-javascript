import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const pic = await uploadPhoto();
  const user = await createUser();
  let res = {};

  try {
    res = { pic, user };
  } catch (err) {
    res = { pic: null, user: null };
  }
  return res;
}
