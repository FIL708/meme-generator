import { useEffect } from "react"
import { useState } from "react"

export default function Meme() {
    
    const [allMemeImage, setAllMemeImage] = useState({})
    
    useEffect(() => {
        console.log("fetch data");
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memes))
    },[])

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const drawMemeImage = () => {
        let i = Math.floor(Math.random() * allMemeImage.length)
        const url = allMemeImage[i].url   
        setMeme(prevState => ({
            ...prevState,
            randomImage: url,
        }))
    }

    const printText = (event) => {
        const {value, name} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
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
                        name="topText"
                        value={meme.topText}
                        onChange={printText}
                        />
                    <input 
                        type="text" 
                        className="meme--input meme--bottomText"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={printText}
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
                <p className="meme--text meme--topText">{meme.topText}</p>
                <p className="meme--text meme--bottomText">{meme.bottomText}</p>
            </section>
        </main>
    )
}