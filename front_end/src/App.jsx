import './App.css';
import React ,{useState} from 'react';
import axios from 'axios';
function App() {


  const [values, setValues] = useState({
    empid:'',
    fname: '',
    lname: '',
    dob: '',
    salary: '',
    designation: ''
  })
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] })
    console.log(event.target.value);
}
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    axios.post('http://localhost:8081/form', values);
    console.log("success");
  }
  return (
    
    <div className="main">

      <h1>Employee Form</h1> 
      <div id = "forms">
        <form onSubmit={handleSubmit}>
          <div className="emp_id">
            <label htmlFor="empid" >Employee ID: </label>
            <input type="text" className="empid" id="empid" onChange={handleChange} placeholder='Employee id' />
          </div>
          <div className="f_name">
            <label htmlFor="fname" >Employee First Name: </label>
            <input type="text" className="fname" id="fname" onChange={handleChange} placeholder='First Name' />
          </div>
          <div className="l_name">
            <label htmlFor="lname" >Employee Last Name: </label>
            <input type="text" className="lname" id="lname" onChange={handleChange} placeholder='Last Name' />
          </div>
          <div>
          <label htmlFor="dob">DateOfBirth: </label>
            <input type="date" id="dob" onChange={handleChange} name="dob"/><br/>
          </div> <div class="Salary">
            <label htmlFor="sal" >Employee Salary: </label>
            <input type="text" className="salary" id="salary" onChange={handleChange} placeholder='Enter Your Salary' />
          </div>
          <div className="designation_">
            <label htmlFor="designation" >Employee Designation: </label>
            <input type="text" className="designation" onChange={handleChange} id="designation" placeholder='Designation' />
          </div>
            
          <button  type="submit" class="submit">Submit</button>
        </form>
    </div>
   </div>
  );
}

export default App;
