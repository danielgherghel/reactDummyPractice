import './hero.css'


export default function Hero(){

    return(
        <div className="heroContainer">
            <img src='/images/hero.png'
            alt="hero"
            className="heroImg"
            />

            <div className="heroInfo">
                <h1>
                    Online Experiences
                </h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    )
}