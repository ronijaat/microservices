import React,{useState} from 'react'
import axios from 'axios';

const PostCreate = () => {
  const [title,setTitle] = useState("")

  const OnSubmit = async(e)=>{
    e.preventDefault();
    await axios.post("http://posts.com/posts/create",{
      title
    })
    setTitle("")
  }
  return (
    <div>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <button className='btn btn-primary' onClick={OnSubmit}>Submit</button>
        
    </div>
  )
}

export default PostCreate