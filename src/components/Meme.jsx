import data from "../memesData"

export default function Meme() {

    let imageUrl = data.data.memes[3].url

    const drawMemeImage = () => {
        const memesArray = data.data.memes
        let i = Math.floor(Math.random() * memesArray.length )     
        const url = memesArray[i].url
        console.log(url);
        
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
                    src={imageUrl} 
                    alt="meme" 
                    loading="lazy"
                    className="meme--image" />
                <p className="meme--text meme--topText">Some text</p>
                <p className="meme--text meme--bottomText">Some text</p>
            </section>
        </main>
    )
}