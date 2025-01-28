import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomePage() {
  const [produce, setProduce] = useState(null);
  // Upon Loading of page,
  // get all produce AND save to state
  async function getData() {
    let res = await axios.get('http://localhost:3000/api/produce/');
    console.log(res)
    setProduce(res.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      {produce && produce.length > 0 ? (
        produce.map((el)=>{return <li>{el.name}</li>})
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
