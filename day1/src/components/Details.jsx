import React from "react";
import Card from "../components/Card";


function CardDetails(){
    
    const Data = {
        heading:"Mobile Operating System",
        items1:"Android",
        items2:"Blackberry",
        items3:"iPhone",
        items4:"Windows Phone"
    }
    
    const Data1 = {
        heading:"Mobile Manufacturers",
        items1:"Samsung",
        items2:"HTC",
        items3:"Micromax",
        items4:"Apple"
    }
    return (
        <>
        <Card {...Data}/>
        <Card {...Data1}/>
        </>
    )
}
export default CardDetails;