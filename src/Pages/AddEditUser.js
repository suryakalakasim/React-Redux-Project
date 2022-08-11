import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { createContact } from '../Redux/redux/action';
const initialState = {
  name: "",
  mobile: "",
  email: "",
  company: ""
}
function AddEditUser() {
  const [formData, setFormData] = useState(initialState)
  console.log("formData", formData)
  const { name, mobile, email, company } = formData
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {contacts}=useSelector(state=>state.data)
  console.log("addeditContact>>>",contacts)
  const { id } = useParams()
 console.log("id>>.",typeof(id))
 useEffect(()=>{
  if(id){
const singleContact=contacts.find(contact=>contact.id === Number(id));
setFormData({...singleContact})
  }
},[id])
  const formSubmit = (e) => {
    e.preventDefault()
    if (name && mobile && email && company) {
      dispatch(createContact(formData))
      setTimeout(() => navigate('/'), 500)
    }
    
  }
 
  const handelChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  return (
    <div className='my-5 text-center'>
      <p className='fs-2 fw-bold'>Add Users Details</p>
      <form onSubmit={formSubmit}>
        <div className='row g-3 '>
          <div className="form-group ">
            <input type="text" name='name' required validation="this field is requied" value={name ||""} onChange={handelChange} placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="number" name='mobile' required value={mobile || ""} onChange={handelChange} placeholder="MobileNumber" />
          </div>
          <div className="form-group">
            <input type="email" name='email' required value={email || ""} onChange={handelChange} placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" name='company' required value={company || ""} onChange={handelChange} placeholder="Company" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-sm mt-3 mx-3">Add</button>
        <Link to='/'>
          <button type="button" className="btn btn-secondary btn-sm mt-3">Back</button>
        </Link>
      </form>
    </div>
  );
}

export default AddEditUser;