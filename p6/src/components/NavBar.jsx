import './navbar.css'
import airbnb from '/images/airbnb-logo.svg'


export default function NavBar(){

    return (
        <>
        <nav className='navBarCont'>
            {/* <img src='./images.airbnb-logo.svg' alt="Airbnb logo" */}
            <img src={airbnb} alt="airbnb logo" className='logo'/>
        </nav>
        </>
    )
}