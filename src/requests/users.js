import { apiGet, apiPut } from './client';

export async function getUsers(
  skip,
  limit,
  platform = undefined,
  game = undefined,
) {
  try {
    const queryParams = `?skip=${skip}&platform=${platform}&game=${game}&limit=${limit}`;
    const res = await apiGet('/api/users' + queryParams);
    return res.data;
  } catch (error) {
    console.log('Failed fetching all users', error);
    throw error;
  }
}

export async function getOwnUser() {
  try {
    return await apiGet('/api/users/own');
  } catch (error) {
    console.log('Failed fetching own user', error);
    throw error;
  }
}

export async function addGameToProfile(gameId) {
  try {
    return await apiPut({ game: { gameId } }, '/api/users/addgametouser');
  } catch (error) {
    console.log('Failed adding game', error);
    throw error;
  }
}

export async function addPlatformToProfile(platformId) {
  try {
    return await apiPut(
      { platform: { platformId } },
      '/api/users/addplatformtouser',
    );
  } catch (error) {
    console.log('Failed adding platform', error);
    throw error;
  }
}

export async function updateUser(user) {
  try {
    return await apiPut(user, '/api/users/updateuser');
  } catch (error) {
    console.log('Failed updating user', error);
    throw error;
  }
}
