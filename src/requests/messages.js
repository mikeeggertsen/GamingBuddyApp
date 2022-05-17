import { apiGet, apiPost } from './client';

export async function getAllMessages(recepient) {
  try {
    const res = await apiGet(`/api/messages?recepient=${recepient}`);
    return res.data;
  } catch (error) {
    console.log('Failed getting all messages', error);
    throw error;
  }
}

export async function sendMessage(receiverId, content) {
  try {
    const res = await apiPost({ receiverId, content }, `/api/messages`);
    return res.data;
  } catch (error) {
    console.log('Failed sending message', error);
    throw error;
  }
}
