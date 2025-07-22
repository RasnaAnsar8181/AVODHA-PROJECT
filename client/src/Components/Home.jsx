import React from 'react'
const Home = () => {
  
  const design = {
    marginTop:"100px",
    height:"400px",
    backgroundColor:"rgb(83, 198, 216)",
    color:"crimson"
  }

  return (
    <div className='maincontainer'>
      <div className='rounded-3' style={design}>
        <h1 className='text-center mb-5 pt-5'>This is the Home Page</h1>
        <h1>You can <b>create</b> , <b>post</b> , <b>Edit</b> and <b>delete</b> </h1>
        <h1>posts by clicking the respective buttons given above</h1>
      </div>
    </div>
  )
}

export default Home
