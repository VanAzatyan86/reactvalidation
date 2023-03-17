import { useState } from "react"

export default function Search({handlClick}){
    return(   
        <div className="search">
            <h1>Search Wikipedia</h1>
            <input type="text" onChange={handlClick} placeholder="Search"/>
        
            
        </div>
    )
}
