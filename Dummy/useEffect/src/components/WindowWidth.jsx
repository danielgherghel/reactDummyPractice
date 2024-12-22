import { useEffect, useState } from "react";

export default function WindowWidth(){

    const [showWidth, setShowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function setWindowWidth(){
            console.log('set u[');
            setShowWidth(window.innerWidth)
        }

        window.addEventListener('resize', setWindowWidth)

        return function(){
            console.log('clean up');
            window.removeEventListener('resize', setWindowWidth)
        }

    })

    return(

        <h1>Window width {showWidth}</h1>
    )
}