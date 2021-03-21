import React, {useState} from 'react'
import ButtonM from "./ButtonM";

function Post({res}) {
  const [show, setShow] = useState(false);
 
  return (
    <div className="post">
      <h3>{res.title}</h3>
      <p>Author: {res.author}</p>
      

      { show 
          ? <p>{res.description}</p>
          : <ButtonM click={ () => setShow(true)} text="Show More" />
      }   

    </div>
  )
}

export default Post
