import './navbar.css'

export default function Navbar(){

    return(
        <nav className="wrapper">
            <div className="contentLeft"> 
                <img src="../public/react-logo-1.png" alt="" className="imageLogo"/>
                <h4>ReactFacts</h4>
            </div>
            <div className="projects">
                <p>React Course - Project 1</p>
            </div>
        </nav>
    )
}