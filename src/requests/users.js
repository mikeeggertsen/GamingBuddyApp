import { apiGet, apiPut } from './client';

export async function getOwnUser() {
  try {
    return await apiGet('/api/users/own');
  } catch (error) {
    console.log('Failed fetching own user', error);
    throw error;
  }
}

export async function updateUser(user) {
  try {
    return await apiPut(user, '/api/users/updateuser');
  } catch (error) {
    console.log('Failed fetching own user', error);
    throw error;
  }
}
