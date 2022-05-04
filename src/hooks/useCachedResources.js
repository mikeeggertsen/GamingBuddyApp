import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atoms/user';
import { getOwnUser } from '../requests/users';

export async function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(true);
  const setUser = useSetRecoilState(userState);

  async function loadResources() {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const res = await getOwnUser();
        setUser(res.data);
      } else {
        setUser(undefined);
      }
    } catch (error) {
      console.log('Failed using cached resources', error);
      throw error;
    } finally {
      setIsLoadingComplete(true);
    }
  }

  useEffect(() => {
    loadResources();
  }, []);

  return isLoadingComplete;
}
