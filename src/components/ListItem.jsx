import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ListItem = ({ produce, setInventory, allInventory }) => {
    const nav = useNavigate()
  async function handleDelete() {
    let res = await axios.delete(
      `http://localhost:3000/api/produce/${produce._id}`
    );

    if (res) {
      let copy = allInventory.filter((el) => el._id !== produce._id);

      setInventory(copy);
    }
  }

  return (
    <>
      <tr>
        <td>{produce.name}</td>
        <td>{produce.price}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
        <td>
          <button onClick={()=> nav(`/edit/${produce._id}`)}>Edit</button>
        </td>
      </tr>
    </>
  );
};
