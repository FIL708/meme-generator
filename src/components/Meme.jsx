export default function Meme() {
    return (
        <main className="meme">
            <form action="" className="meme--form">
                <div className="meme--inputs">
                    <input type="text" className="meme--input meme--topText"/>
                    <input type="text" className="meme--input meme--bottomText"/>
                </div>
                <button type="submit" className="meme--button">Get a new meme image</button>
            </form>
            <section className="meme--section">
                <img 
                    src="https://cdn.pixabay.com/photo/2022/08/09/16/19/sea-7375377_960_720.jpg" 
                    alt="meme" 
                    loading="lazy"
                    className="meme--image" />
                <p className="meme--text meme--topText">Some text</p>
                <p className="meme--text meme--bottomText">Some text</p>
            </section>
        </main>
    )
}