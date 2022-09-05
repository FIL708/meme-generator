import img from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <img 
                src={img} 
                alt="troll face"
                width="40px"
                className="header--icon" />
            <h1 className="header--title">MemeGenerator</h1>
            <h2 className="header--subtitle">React Course - Project 3</h2>
        </header>
    )
}