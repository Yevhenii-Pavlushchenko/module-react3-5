import { useQuery } from '@tanstack/react-query';
import { fetchPerson } from '../../types/personFetch';
import { useState } from 'react';




export default function Character() {
  const [personId, setPersonId] = useState("")


  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['person', personId],
    queryFn: () => fetchPerson(personId),
    enabled: personId !== ""
  });

  const handleSearch = (formdata: FormData) => {
    const characterId = formdata.get("id") as string;
    setPersonId(characterId);
  }

  return (
    <>
      <form action={handleSearch}>
        <input type="text" name="id" placeholder="Enter character ID" />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
}
