import React,{ useState, useEffect} from 'react'
import  "../style/style.scss"
import ButtonM from "./ButtonM";
import MenuH from "./MenuH";
import Loader from './Loader';
import Post from './Post';
import { v4 as uuidv4 } from 'uuid';
//alternativ megoldás:  hagyma.map((res, index) => <Post key={res.title + index} res={res}/>)

function Homepage() {

  const [hagyma, setHagyma] = useState([]);
  const [load, setLoad] = useState(true);
  const [email, setEmail] = useState("");
  const [isShow, SetIsShow] = useState(true);
  const [res, setRes] = useState("");

  useEffect(() => {
    setLoad(false)

    //adatok behívása
    fetch("./data/data.json")
      .then(response => response.json())
      .then(hagyma => setHagyma (hagyma))
      .catch(error => setHagyma(null))
      .finally(() => setLoad(true))
  }, [])


  //post request
  
  function submit () {
    console.log("post-request")
    /*
    fetch("./data/data.json", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email})  //küldésnél JSON.parse
    }).then(response => setRes(true))
      .catch(err => setRes(false))
      .finally(() => setTimeout(SetIsShow(false), 5000))

      console.log(email)
      */
  }

  return (
    <div className="homepage">
      <MenuH/>
      <h1>Title</h1>
      
      {
        !load 
          ? <Loader/> 
          : hagyma
            ? hagyma.map(res => <Post key={uuidv4()} res={res}/>)
            : <div>Cant show data</div>
      }
      {
        load && isShow &&
          <form>
            <label>Email:</label>
            <input 
              type="email" 
              placeholder="Email" 
              onChange={e => setEmail(e.target.value)}>
            </input>
            <ButtonM 
              text="Subscribe" 
              dis={!(email.includes("@" && "."))} 
              click={() => submit()}  
            />
          </form>
         
      }

      {/*<form>
        <label>Email:</label>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}></input>
        <ButtonM text="Subscribe" dis={!(email.includes("@" && "."))} click={() => submit()}  />
      </form>
      */}
    </div>
  )
}

export default Homepage
