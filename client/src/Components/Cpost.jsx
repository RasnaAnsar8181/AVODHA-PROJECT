import { useEffect, useRef, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Cpost() {
    const inputRef = useRef()
    const navigate = useNavigate()
    const [items,setItems] = useState({
      id:'',
       title:'',
       content:''
    })

  async function saveData(){
     await axios.post('http://localhost:8080/posts',{id:items.id,title:items.title,content:items.content})
     alert('Data successfully saved')
     navigate('/')
  }

  async function dataChange(e){
    const name = e.target.name
    const value = e.target.value
    setItems({...items,[name]:value})
  }

  useEffect(()=>{
      inputRef.current.focus()
  },[])

  return (
    <>
       
        <div className='maincontainer'>
            <div className='content'>
                <h3><u>ENTER THE DETAILS TO CREATE A POST</u></h3>
                    <div className='formdiv'>
                      <Form.Group >
                            <Form.Label><b>ID NUMBER ::</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "marginBottom": "20px" }} ref={inputRef}  required type="number" name='id' value={items.id} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Title Name :</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "marginBottom": "20px" }}  required type="text" name='title' value={items.title} onChange={dataChange}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label><b>Content :</b></Form.Label>
                            <Form.Control style={{ "borderBottom": "2px solid blue", "mar": "20px" }} required type="text" name='content' value={items.content} onChange={dataChange}/>
                        </Form.Group>
                        <Button className='buttons' onClick={saveData}>SAVE</Button>
                        <Button className='buttons' onClick={()=>navigate('/')}>BACK</Button>
                    </div>
                </div>
            </div>
    
    </>

  )
}

export default Cpost