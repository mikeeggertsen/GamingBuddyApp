import { apiGet, apiPost } from './client';

export async function getMatches(skip, limit) {
  try {
    const res = await apiGet(`/api/swipes/matches?skip=${skip}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log('Failed fetching matches', error);
    throw error;
  }
}

export async function swipeOnUser(otherUserId, status) {
  try {
    const res = await apiPost({ otherUserId, status }, '/api/swipes/swipe');
    return res.data;
  } catch (error) {
    console.log('Failed swiping on user', error);
    throw error;
  }
}
