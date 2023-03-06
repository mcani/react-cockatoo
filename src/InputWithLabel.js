import React, { useRef, useEffect } from "react"

function InputWithLabel({children, id, value, onInputChange}){
    const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    return (
    <>
        <label htmtFor="todoTitle">
            {children}
        </label>
        <input ref={inputRef} id="todoTitle" name="title" value={value} onChange={onInputChange}></input>
    </>   
    
    )
}

  export default InputWithLabel;