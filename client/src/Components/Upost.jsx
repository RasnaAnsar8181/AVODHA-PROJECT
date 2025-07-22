import { useEffect, useState} from 'react'
import axios from 'axios'
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function Update() {
    const location = useLocation()
    const [value,setValue] = useState(location.state.value)
    const [id,setId] = useState(value.id)
    const [title,setTitle] = useState(value.title)
    const [content,setContent] = useState(value.content)
    
    const navigate = useNavigate()
    
    useEffect(()=>{
      try {
        setValue(location.state.value)
      } catch (error) {
        console.log("error")
      }    
    },[location])
   
    async function saveInfo(){      
      try{
        
          await axios.put(`http://localhost:8080/posts/${location.state.value.id}`,{id:id,title:title,content:content})        
          alert("Data is successfully updated")
          navigate('/details')
        } catch (error) {
           console.log(error) ;
        } 
    }
 
  return (
    <>

    <div className='maincontainer'>
      <div className="content">    
        <h3><u>EDIT POST DETAILS</u></h3>
          <div className='formdiv'>
              <Form.Group >
                    <Form.Label><b>ID NUMBER :</b></Form.Label>
                    <Form.Control style={{ "borderBottom": "2px solid blue", "marginBottom": "20px" }} type="number" name='id' placeholder={id} onChange={(e)=>setId(e.target.value)}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label><b>Title Name :</b></Form.Label>
                    <Form.Control style={{ "borderBottom": "2px solid blue", "marginBottom": "20px" }}   type="text" name='title' placeholder={title} onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group >
                    <Form.Label><b>Content :</b></Form.Label>
                    <Form.Control style={{ "borderBottom": "2px solid blue", "mar": "20px" }}  type="text" name='content' placeholder={content} onChange={(e)=>setContent(e.target.value)}/>
                </Form.Group>
                    
                <Button className='buttons' onClick={()=>navigate('/details')}>BACK</Button>
                <Button className='buttons' onClick={saveInfo}>SAVE</Button> 
          </div>
      </div> 
    </div> 
  </>
  )
}

export default Update