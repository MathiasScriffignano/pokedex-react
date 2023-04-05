import React from "react";
import { useEffect } from "react";

function Pokeelem({name, number, type, image, imagehover, id, description,imgname}){




return(
    <div className="">
    <li key={id} className="card ">
        <div className="wrapper">
      <img src={image} alt={name} className="cover-image" />
      </div>
<img src={imgname}  alt={name} className="title" />
<img src={imagehover} alt="" className="character" />
    </li></div>
)
}

export default Pokeelem