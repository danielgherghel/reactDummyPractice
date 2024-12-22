import { useState, useEffect } from "react"

export default function ContainerSize(){


    const [windowW, setWindowW] = useState(window.innerWidth)


    useEffect(() => {
        function setNewWindoSize(){
            setWindowW(window.innerWidth)
        }
        window.addEventListener('resize', setNewWindoSize)
        return function(){
            window.removeEventListener('resize', setNewWindoSize)
        }

    }, [])

    return (
        <h1>Window width: {windowW} px</h1>
    )
}