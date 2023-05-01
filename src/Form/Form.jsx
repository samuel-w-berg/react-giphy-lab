import React, { useState } from "react";

export default function Form({liftGifName}){
    const [gifName, setGifName] = useState('')

    function handleChange(e){
        setGifName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        liftGifName(gifName)
        setGifName('');
    }

    return (
        // form for button to generate random gif
        <form onSubmit={handleSubmit}> 
            <label htmlFor="gifName">Enter a Gif Name</label>
            <input type="text" name="gifName" id="gifName" value={gifName} onChange={handleChange} />
            <button type="submit">Generate Random Gif</button>
        </form>
    )
}