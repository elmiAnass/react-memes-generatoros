import React from "react";
import memes from "./Memesdata";

export default function Form (){
 let url 
   function Element ()
   {
     const MemesData = memes.data.memes
     const Random = Math.floor(Math.random() * MemesData.length)
     url = MemesData[Random].url
    
   }
  return(
      <div className="form">
        <div>
          <input 
          type="text" 
          placeholder="Top Text"
           style ={{width : "20rem", margin:"40px"}}/>

          <input 
          type="text" 
          placeholder="Buttom Text" 
          style ={{width : "20rem" ,margin:"40px"}}/><br/>

          <button className ="btn btn-danger "
          style ={{width : "50rem",margin:"12px"}}  onClick={Element}>Get New Image Memes </button>
        </div>
      </div>
 )

}