import './update.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function UpdateUser(){
    
    // const [userData, setUserData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
// 


    const [values, setValues] = useState({
        names:"",
        email:"",
        number:"",
        location:""
    })
    function handleInputChange(e){
        const { name, value } = e.target
        // console.log("name, value", name, value)
        setValues({
            ...values,
            [name] : value
        })
    }

  
    useEffect(() => {
      axios.get(`http://localhost:3000/users/${id}`)
           .then((res) => {
          console.log(res.data);
          setValues(res.data);
        })
        .catch((err) => console.log(err));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

      
    function handleUpdate(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/users/${id}`, values)
        .then(res => {
            alert("Updated successfully")
            console.log(res.data)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            
            <form onSubmit={handleUpdate}>
                    <h2 style={{marginTop:"-2rem", marginLeft:"4rem", fontSize:"2rem"}}>Edit User</h2>

                    <div className='all-labels'>
                        <label>Name:</label>
                        <input 
                            type="text" 
                            name='names' 
                            placeholder='Enter Name'
                            onChange={handleInputChange}
                            value={values.names}
                        />
                    </div>

                    <div className='all-labels'>
                        <label htmlFor="">Email:</label>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Enter Email'
                            onChange={handleInputChange}
                            value={values.email}
                        />
                    </div>

                    <div className='all-labels'>
                        <label htmlFor="">Number:</label>
                        <input 
                            type="text" 
                            name='number'  
                            placeholder='Enter Number'
                            onChange={handleInputChange}
                            value={values.number}
                        />
                    </div>

                    <div className='all-labels'>
                        <label htmlFor="">Location:</label>
                        <input 
                            type="text" 
                            name='location' 
                            placeholder='Enter Location'
                            onChange={handleInputChange}
                            value={values.location}
                        />
                    </div>
                   
                    <div className="btns">
                        <button className='submit-btn'>Update</button>
                        <button className='back-btn' onClick={() => navigate('/')}>Back</button>
                    </div>

                </form>
        </div>
    )
}