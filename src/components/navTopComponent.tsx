import React from "react";
import ButtonNavLat from "./buttonNavLat";


export default function NavTopComponent(props:any){
    const links:string[] = props.links
    
    return(
        <div>
            <ul className="navLat">
                {links.map((link , i) =>{
                    return <ButtonNavLat key={i} title={link} />
                })}                
            </ul>
        </div>
    )
}

