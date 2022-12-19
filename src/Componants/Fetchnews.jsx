import React, {useState,useEffect} from 'react'
import axios from 'axios'

export default function Fetchnews() {
    
    const [data,setdata]=useState([])
    
   
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
  

  return(
<div>
    
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
