import './card.css'
import CardHeader from './CardHeader'
import CallToAction from './CallToAction'
import About from './About'
import SocialIcons from './SocialIcons'

export default function Card(){

    return(
        <>
            <div className="fullCard">
                <img src="../public/daniel.jpeg" className="cardImage"></img>
                <CardHeader />
                <div className="callToAction">
                   <CallToAction />
                </div>
                <About />
                <SocialIcons />
            </div>
        </>
    )
}1