import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SideEffects() {
    const [person, setPerson] = useState(null);
    const [count, setCount] = useState(1);
 
    useEffect(() => {
	  console.log('Effect ran!');
     axios
      .get(`https://swapi.info/api/people/${count}`)
      .then((response) => setPerson(response.data.name));
    }, [count]);

     console.log('App rendred!');

  return (
      <>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(count + 1)}>Get next character {count}</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
