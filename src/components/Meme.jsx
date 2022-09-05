export default function Meme() {
    return (
        <main className="meme">
            <form action="">
                <div className="meme--inputs">
                    <input type="text" className="meme--input meme--topText"/>
                    <input type="text" className="meme--input meme--bottomText"/>
                </div>
                <button type="submit">Get a new meme image</button>
            </form>
            <img 
                src="" 
                alt="meme" 
                loading="lazy"
                className="meme--image" />
        </main>
    )
}