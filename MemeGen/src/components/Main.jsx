import { useState, useEffect } from "react"

export default function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    function updateImage(){
        const randomNo = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNo].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: newMemeUrl
        }))
    }

    function handleChange(e){
        const {name, value} = e.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]:value,
        }))
    }

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
            
    },[])
    

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={updateImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}