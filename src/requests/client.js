import { Paths } from '../constants/Paths';

export async function apiGet(url) {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(Paths.API_URL + url, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function apiPost(body, url) {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(Paths.API_URL + url, {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function apiPostFormData(formData, url) {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(Paths.API_URL + url, {
      method: 'POST',
      headers: {
        Authorization: `${token}`,
      },
      body: formData,
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function apiPut(body, url) {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(Paths.API_URL + url, {
      method: 'PUT',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function apiDelete(body, url) {
  try {
    const token = localStorage.getItem('token');
    const res = await fetch(Paths.API_URL + url, {
      method: 'DELETE',
      headers: {
        Authorization: `${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
