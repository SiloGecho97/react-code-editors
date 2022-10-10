import React, { useEffect, useState } from 'react'

const ReactHook = () => {
    const [count, setCount] = useState(0)
    const [counter, setcounter] = useState(0)
    
    
    useEffect(() => {
        a().then((data)=>{
            setcounter(counter+2)
        })
        
    }, [count])

    

    const a = ()=>{
       return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(true)
            }, 1000);
        })
        
    }
    
    
    return (
        <div className="flex flex-col items-center justify-center w-full mx-0 text-4xl">
            <h2>{count}</h2>
            <h2>{counter}</h2>
            <button className=" " onClick={(e) => setCount(count + 1)}>
                Click
            </button>
        </div>
    )
}

export default ReactHook
