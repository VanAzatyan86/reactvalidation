import { useEffect, useState } from "react"

export default function Products({value,setValue}){

    const[data,setData]=useState([])
 
    useEffect(()=>{
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${value}`)
        .then(res=>res.json())
        .then(data=>setData(data.query.search))

    },[value])
 
  console.log(data);

    return(
     <div className="products">
      
         {
           
           data.map(item=>{
                return(
  
                 <div className="inform">
                    <h3>{item.title}</h3>
                    <p>{item.snippet}</p>
                 </div>
             
               )
              })
         }
     </div>
    )
}