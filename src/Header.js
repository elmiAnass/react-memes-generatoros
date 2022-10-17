import React from "react";


export default class Header extends React.Component  { 
  render(){
    return(
        
       <div className="Header p-3" style ={{display : "flex"}}>
           <img src="https://icon-library.com/images/2018/3265179_rage-meme-black-mirror-shut-up-and-dance.png" 
           width = "80px" />
           <h4 style={{color:"white",paddingLeft:"150px"}}>  Memes Generator : </h4>
           <p className="float">React-Project</p>
       </div>
       
    )
  }
}