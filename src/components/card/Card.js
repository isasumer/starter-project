import React from "react";
import Item from "../item/Item"
import "./Card.css";
import { Categories } from "../../helper/data";

const Card = () => {
    return (
        <div className="card-container">
            {Categories.map((category,index) => {
                return (
                    <Item category={category} key= {index}/>
                )
            })
            } 
        </div>
    )
}

export default Card;