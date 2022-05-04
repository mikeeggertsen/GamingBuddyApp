import { apiGet } from './client';

export async function getOwnUser() {
  try {
    return await apiGet('/api/users/own');
  } catch (error) {
    console.log('Failed fetching own user', error);
    throw error;
  }
}
