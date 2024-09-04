import { Link, useNavigate } from 'react-router-dom';
// import { userList } from "../list"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import axios from 'axios';


function UserList(){

  const navigate = useNavigate()
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/users")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  })

  function deleteUser(id){
        const confirm = window.confirm("Would you like to Delete?")
        if (confirm){
          axios.delete(`http://localhost:3000/users/${id}`)
          .then((res) => {
            
            navigate('/')
            alert("User deleted Successfully")
            // console.log(res.data);
       })
       .catch((err) => console.log(err));
        }
  }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>List of Users</h1>
            

            <Link to='create'
                    style={{textDecoration:"none", 
                            backgroundColor:"green", 
                            padding:"0.5rem",
                            color:"white",
                            borderRadius:"4px",
                            float:"right",
                            marginRight:"9rem",
                            marginBottom:"1rem"
                            }}
              >Create User</Link>

            <TableContainer>
             <Table sx={{ minWidth: 650 }} aria-label="caption table">
      
        <TableHead>
          <TableRow>
             <TableCell style={{fontWeight:"bold"}}>ID</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Name</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Email</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Phone Number</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Location</TableCell>
            <TableCell align="center" style={{fontWeight:"bold"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((d, i) => (
          <TableRow key={i}>
            <TableCell scope="row">{d.id}</TableCell>
            <TableCell align="center">{d.names}</TableCell>
            <TableCell align="center">{d.email}</TableCell>
            <TableCell align="center">{d.number}</TableCell>
            <TableCell align="center">{d.location}</TableCell>
            <TableCell align="center" style={{display:'flex', justifyContent:"space-evenly", margin:"0 0.1rem"}}>
              
              <Link to={`read/${d.id}`} 
                    style={{textDecoration:"none", 
                            backgroundColor:"#2e5984", 
                            padding:"0.5rem",
                            color:"white",
                            borderRadius:"4px"
                            }}
              >Read</Link>

              <Link to={`update/${d.id}`} 
                    style={{textDecoration:"none", 
                            backgroundColor:"blue", 
                            padding:"0.5rem",
                            color:"white",
                            borderRadius:"4px"
                            }}
              >Edit</Link>

              <button 
                    style={{
                            backgroundColor:"red", 
                            padding:"0.5rem",
                            color:"white",
                            borderRadius:"4px",
                            border:0,
                            cursor:"pointer"
                            }}
                    onClick={() => deleteUser(d.id)}
              >Delete</button>
              
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    )
}
export default UserList