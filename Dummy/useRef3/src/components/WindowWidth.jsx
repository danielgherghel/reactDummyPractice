import { useState, useEffect } from "react"

export default function WindowWidth(){

    const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

    useEffect(() => {

        function updateWidth(){
            console.log('mounting');
            setCurrentWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWidth)

        return function(){
            console.log('cleaning');
            window.removeEventListener('resize', updateWidth)
        }



    }, [])

    return (
        <h1>Window width {window.innerWidth}</h1>
    )
}