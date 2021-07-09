import { useEffect, useState } from 'react';

export function useTableApi(url) {
  const [data, setData] = useState([]);

  const getUsersFromServer = async () => {
    try {
      const results = await fetch(url).then((resultsData) => resultsData.json());
      setData(results);
    } catch (e) {
      console.log(e);
      setData([]);
    }
  };
  const createUserElem = async (value) => {
    await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
    });

    await getUsersFromServer();
  };

  const filterUsers = async (substr) => {
    const results = await fetch(`http://localhost:3004/users?name_like=${substr}`).then(
      (resultData) => resultData.json()
    );
    setData(results);
  };

  useEffect(() => {
    getUsersFromServer();
  }, []);

  const api = {
    getUsersFromServer,
    createUserElem,
    filterUsers,
  };

  return [data, api];
}
