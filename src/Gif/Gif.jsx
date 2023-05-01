import React from "react";

export default function Gif({gif}){
    return (
        <>
            <img src={gif.url}/>
        </>
    )
}