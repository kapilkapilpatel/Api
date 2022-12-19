import { useEffect,useState } from "react"


export default function Fetchdata() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((res)=>{
                console.log("fetchdata",res)
                setData(res)
            })
        })
    },[])

    const arr= data.map((data,index)=>{
     return( 
     <table ><tr>
    <td >{data.id}</td>
    <td >{data.title}</td>
    <td >{data.body}</td>
  </tr> </table>)
    })
  return (
    <div>
<table >
  <tr>
    <td style={{border:'1px solid black'}}>ID </td>
    <td style={{border:'1px solid black'}}>TITLE </td>
    <td style={{border:'1px solid black'}}>BODY</td>
  </tr>
</table>
 

    </div>
  )
}
