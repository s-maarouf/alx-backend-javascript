import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const pic = await uploadPhoto();
    const user = await createUser();
    res = { pic, user };
  } catch (err) {
    res = { pic: null, user: null };
  }
  return res;
}
