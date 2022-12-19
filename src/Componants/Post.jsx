import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default function Post() {
    
    const [data,setdata]=useState([])
    const [title,setTitle]=useState("")
    const [ body,setBody]=useState("")
   
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(Response=>{
        console.log(Response)
        setdata(Response.data)
      }).catch(err=>console.log(err))

    },[])


    const arr= data.map((data,index)=>{
      return(
        <tr>
    <td style={{border:'1px solid black'}}>{data.id}</td>
    <td style={{border:'1px solid black'}}>{data.title}</td>
    <td style={{border:'1px solid black'}}>{data.body}</td>
  </tr>
      )
    })
    const postData=(e)=>{
      e.preventDefault();
      axios.post("https://jsonplaceholder.typicode.com/posts",{
        title,
        body
      }).then(Response =>console.log("postingdata",Response)).catch(err=>console.log(err))
    }

  return(
<div>
    <form>
    <label>TITLE</label>
    <input type="text"  value={title} onChange={(e)=>setTitle(e.target.value)}/> 
    <hr/>  
    <label>BODY</label>
    <input type="text"  value={body} onChange={(e)=>setBody(e.target.value)}/> 
    <hr/>
    <button onClick={postData}>POSTDATA</button>
     </form> 
    <table>
  <tr>
    <th style={{border:'1px solid black'}}>ID</th>
    <th style={{border:'1px solid black'}}>Title</th>
    <th style={{border:'1px solid black'}}>Body</th>
  </tr>
  {arr}
</table>
  </div>
  )
}
