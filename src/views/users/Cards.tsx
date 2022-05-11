  
    import React from 'react'




    export default function NftCards(props) {
        return (
            
        <> 
        
        <div className="container flex flex-row  "> 
         <div className="card ">   
         
         <img src={props.img} alt="myPic" className="card-img"/>
         <div className="card__info"> 
         <span className="card-category"> {props.title}</span>
         <h3 className="card-title"> {props.name} </h3>
         <h3 className="card-email"> {props.email}</h3>
         
         
         </div>
         </div>
         </div>
        
        
        </>
        
        
        )
        
        }  
        
            
            
            