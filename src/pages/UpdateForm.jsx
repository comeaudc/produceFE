import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`http://localhost:3000/api/produce/${id}`);

      let num = res.data.price.split('');
      num.shift();
      num = num.join('');
      res.data.price = Number(num);
      setFormData(res.data);
    }

    getData();
  }, []);

  function handleChange(e) {
    if (e.target.name == 'stocked') {
      ``;
      setFormData({ ...formData, stocked: !formData.stocked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit() {}

  return (
    <>
      <h2>AddProduce Page</h2>
      {formData ? (
        <form onSubmit={handleSubmit}>
          <label>
            {' '}
            Name:
            <input
              onChange={handleChange}
              value={formData.name}
              type='text'
              name='name'
            />
          </label>
          <br />
          <label>
            {' '}
            Price:
            <input
              onChange={handleChange}
              value={formData.price}
              type='number'
              name='price'
            />
          </label>
          <br />
          <label>
            {' '}
            In Stock:
            <input
              onChange={handleChange}
              checked={formData.stocked}
              type='checkbox'
              name='stocked'
            />
          </label>
          <br />
          <label>
            Category:
            <select
              onChange={handleChange}
              value={formData.category}
              name='category'
            >
              <option value='Vegetables'>Vegetables</option>
              <option value='Fruits'>Fruits</option>
            </select>
          </label>
          <br />
          <input type='submit' />
        </form>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}

export default UpdateForm;
