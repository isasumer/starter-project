import React from "react";
import { useState } from "react";

const Item = (props) => {
    const [showImage, setShowImage] = useState(true);
    return (
            <div className="item"  onClick={() => setShowImage(!showImage)}>
            {showImage ? (
                <>
                <img id="img" src={props.category.img} alt={props.category.name}></img>
                <h2 className="item-name">{props.category.name}</h2>
                </>
                ) : (
                <ul className = "options" >
                        {props.category.options.map( (info, index) => {
                            return (
                                <li className="info" key={index}>{info}</li>
                            )
                        }
                        )}
                </ul>      
                     
                )
            }
            
        </div>
    )
}
export default Item;


