import React from "react";

export default function ButtonNavLat(props:any){
    return(
        <button className="button-navLat" key={props.key}>
            {props.title}
        </button>
    )
}