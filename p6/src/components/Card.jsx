import './card.css'


export default function Card({
    coverImg,
    openSpots,
    price,
    title,
    location,
    stats
}){

    let badgeText
    if (openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (openSpots > 0 && location === "Online"){
        badgeText = "ONLINE"
    }


    return(
        <div className="container">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`/images/${coverImg}`} className="imageCard" />
        <div className="infoContainer">
            <div className="ratingContainer">
                <i>&#9733; </i>{stats.rating}
                <span>({stats.reviewCount}) - {location}</span>
            </div>
            <div className="desc">
            
                <h3>{title}</h3>
                <p><span>From ${price}</span> / person</p>
            </div>
        </div>
        </div>
    )
}