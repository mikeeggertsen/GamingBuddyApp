import { apiPost } from './client';

export async function signUpUser(user) {
  try {
    const res = await apiPost(user, '/api/users/signup');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signInUser(email, password) {
  try {
    return await apiPost({ email, password }, '/api/users/signin');
  } catch (error) {
    console.log(error);
    throw error;
  }
}
