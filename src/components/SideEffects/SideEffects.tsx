import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SideEffects() {
    const [person, setPerson] = useState(null);
    const [count, setCount] = useState(1);
 
    useEffect(() => {
        async function fetchCharacher() {
            const responce = await axios.get(`https://swapi.info/api/people/${count}`);
            setPerson(responce.data);
        }
        //!Обязательно вызвать функцию внутри эффекта, иначе она не будет работать
        fetchCharacher();
    }, [count]);

     console.log(person);

  return (
      <>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(count + 1)}>Get next character {count}</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
