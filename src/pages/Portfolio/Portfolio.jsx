import React from "react";
import image1 from "../../assets/1";
import image2 from "../../assets/2";
import image3 from "../../assets/3";
export default function Nav(){
    return(
        <>
        <div className="container ">
           <h2>PORTFOLIO COMPONENT</h2>
           <div className="images flex gap-2">
            <img src={image1}  />
            <img src={image2}  />
            <img src={image3}  />
            <img src={image1}  />
            <img src={image2}  />
            <img src={image3}  />

           </div>
        </div>

        </>
    )
}