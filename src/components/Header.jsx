import img from "../images/troll-face.png"

export default function Header() {
    return (
        <header>
            <img 
                src={img} 
                alt="troll face"
                width="40px"
                className="header--icon" />
            <h2 className="header--title">MemeGenerator</h2>
            <h3 className="header--subtitle">React Course - Project 3</h3>
        </header>
    )
}