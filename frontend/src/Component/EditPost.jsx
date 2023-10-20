import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./Addpost.css"
import { Heading } from '@chakra-ui/react';
import { editUserPostAction } from '../Redux/UserpostReducer/action';


export default function EditPost() {

  const dispatch=useDispatch()
  const token = useSelector((store) => store.Loginreducer.token);
  const userpost=useSelector((store) => store.UserPostReducer.AllUserpost);

  const {id}=useParams()
  const navigate = useNavigate();


  const [editFormData, setEditFormData] = useState({
    title: '',
    image: '',
    category: '',
    rating: '',
    price: '',
    
  });
  
  
  useEffect(()=>{
    const posttoEdit=userpost.find((el)=>el._id==id)
    if(posttoEdit)
    {
      setEditFormData(posttoEdit)
    }
    },[userpost,id])
  
  
  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };


  const handleUpdate=(e)=>{
    e.preventDefault()
    dispatch(editUserPostAction(token,editFormData,id))

    
  }
 
  return (

  
    <div>




  <div className="postSection">
<form action="" className='postform' onSubmit={handleUpdate}>
             <h3>Edit Post</h3>
            <input type="text" name="title"   placeholder='title' value={editFormData.title}
            onChange={handleEditFormChange} />
            <input type="text" name="image" value={editFormData.image} placeholder='image'
             onChange={handleEditFormChange}/>

        <select name="category" value={editFormData.category} onChange={handleEditFormChange} >
            <option value="">Select Category</option>
            <option value="Photography">Photography</option>
            <option value="Art">Art</option>
            <option value="Digital Art">Digital Art</option>
          
        </select>
        <input type="text" name="rating" value={editFormData.rating} placeholder='rating' 
        onChange={handleEditFormChange}/>
        <input type="text" name="price"value={editFormData.price} placeholder='price'   
        onChange={handleEditFormChange}/>
        <button type='submit'  >Edit Post</button>
        </form>

<Link to="/userpost"> <button type='submit'  >Go to My Post</button></Link>
       
   </div>     
    </div>
  )
}
