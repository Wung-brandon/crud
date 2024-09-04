import './read.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ReadUser() {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  function backToHome() {
    navigate('/');
  }

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
         .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <h2 style={{ marginTop: "-2rem", marginLeft: "4rem", fontSize: "2rem" }}>User Details</h2>

        <div className="all-labels">
          <label><strong>ID:</strong> {userData.id}</label>
        </div>

        <div className="all-labels">
          <label><strong>Name:</strong> {userData.names}</label>
        </div>

        <div className="all-labels">
          <label><strong>Email:</strong> {userData.email}</label>
        </div>

        <div className="all-labels">
          <label><strong>Number:</strong> {userData.number}</label>
        </div>

        <div className="all-labels">
          <label><strong>Location:</strong> {userData.location}</label>
        </div>

        <div className="btns">
          <Link to={`/update/${id}`} className="submit-btn">
            Edit
          </Link>
          <button className="back-btn" onClick={backToHome}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}