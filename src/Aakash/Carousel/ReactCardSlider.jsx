import React from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight ,MdBookmarkBorder,MdThumbUp,MdThumbDown} from 'react-icons/md';
import "./Slider.css";

const ReactCardSlider = (props) => {

    const slideLeft =()=>{
        var slider=document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight=()=>{
        var slider=document.getElementById("slider")
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    
    return(
       <div id="main-slider-container">
           <MdOutlineKeyboardArrowLeft size={40} className="slider-icon left" onClick={slideLeft}/>
           <div id="slider">
                {
                    props.slides.map((slider,index)=>{
                        return(
                            <div className="slider-card" key={index}>  
                                    <div className="slider-card-image" >
                                        <img src={slider.image} alt=""></img>
                                        <MdBookmarkBorder className="hovericons" size={25} id="bookmark"/>
                                        <MdThumbUp  className="hovericons" size={25} id="like"/>
                                        <MdThumbDown  className="hovericons"  size={25} id="dislike"/>
                                    </div>
                                    
                                    <div className="box">
                                        <a href= "/" className="title"><p className="slider-card-title">{slider.tittle}</p></a>
                                        
                                        <h5 className="slider-card-description"  >{slider.Description}</h5>
                                
                                        <p className="slider-card-by">{slider.by}</p>
                                    </div> 
                            </div>
                        )
                    })
                }
           </div>
           <MdOutlineKeyboardArrowRight size={40} className="slider-icon right" onClick={slideRight}/>
       </div>
    )
}


export default ReactCardSlider