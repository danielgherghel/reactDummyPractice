import './card.css'

export default function Card({
    title,
    price,
    coverImg,
    stats,
    location,
    openSpots
}){


    let openLabel
    if (openSpots === 0) {
        openLabel = "SOLD OUT"
    } else if (openSpots > 0 && location === "Online"){
        openLabel = "ONLINE"
    }


    return(
        <div className="page">
            <div className='container'>
                {openLabel && <div className='card--badge'>{openLabel}</div>}
                <img src={`/images/${coverImg}`} className="imageCard"></img>
                <div className="infoContainer">
                    <div className="ratingContainer">
                        <i>&#9733;</i>{stats.rating}
                        <span>{stats.reviewCount} - {location}</span>
                    </div>
                    <div className="desc">
                        <h3>{title}</h3>
                        <p><span>From ${price}</span> / person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}