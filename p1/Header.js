

export default function Header(){
    return (
        <div>
            <header>
                <nav className="navHeader">
                    <img src='./react-logo.png'
                    className='navImage'/>
                    <ul className="aboutHeader">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
