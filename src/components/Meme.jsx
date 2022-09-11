import { useState } from "react"
import memesData from "../memesData"

export default function Meme() {

    // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImage, setAllMemeImage] = useState(memesData)

    const drawMemeImage = () => {
        const memesArray = allMemeImage.data.memes
        let i = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[i].url   
        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))
        
    }

    return (
        <main className="meme">
            <div className="meme--form">
                <div className="meme--inputs">
                    <input 
                        type="text" 
                        className="meme--input meme--topText"
                        placeholder="Top text"
                        />
                    <input 
                        type="text" 
                        className="meme--input meme--bottomText"
                        placeholder="Bottom text"
                        />
                </div>
                <button 
                className="meme--button"
                onClick={drawMemeImage}
                >
                Get a new meme image 🖼
                </button>
            </div>
            <section className="meme--section">
                <img 
                    src={meme.randomImage}
                    alt="meme" 
                    loading="lazy"
                    className="meme--image" />
                <p className="meme--text meme--topText">Some text</p>
                <p className="meme--text meme--bottomText">Some text</p>
            </section>
        </main>
    )
}