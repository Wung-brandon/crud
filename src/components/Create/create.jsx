import './create.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const navigate = useNavigate();

  function backToHome() {
    navigate('/');
  }

  const [values, setValues] = useState({
    names: '',
    email: '',
    number: '',
    location: ''
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // axios
    //   .get('http://localhost:3000/users')
    //   .then((res) => {
    //     const users = res.data;
    //     const highestId = users.reduce((maxId, user) => (user.id > maxId ? user.id : maxId), 0);
    //     const newId = highestId + 1;
    //     const newUser = { ...values, id: newId.toString() };

        axios
          .post('http://localhost:3000/users', values)
          .then((res) => {
            alert('User Created successfully');
            console.log(res.data);
            navigate('/');
          })
          .catch((err) => console.log(err));
      // })
      // .catch((err) => console.log(err));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 style={{ marginTop: '-2rem', marginLeft: '4rem', fontSize: '2rem' }}>Add a User</h2>

        <div className="all-labels">
          <label htmlFor="">Name:</label>
          <input type="text" name="names" placeholder="Enter Name" onChange={handleInputChange} />
        </div>

        <div className="all-labels">
          <label htmlFor="">Email:</label>
          <input type="email" name="email" placeholder="Enter Email" onChange={handleInputChange} />
        </div>

        <div className="all-labels">
          <label htmlFor="">Number:</label>
          <input type="text" name="number" placeholder="Enter Number" onChange={handleInputChange} />
        </div>

        <div className="all-labels">
          <label htmlFor="">Location:</label>
          <input type="text" name="location" placeholder="Enter Location" onChange={handleInputChange} />
        </div>

        <div className="btns">
          <button className="submit-btn">Submit</button>
          <button className="back-btn" onClick={backToHome}>
            Back
          </button>
        </div>
      </form>
    </>
  );
}