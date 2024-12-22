import './cards.css'

const mockData = [
    {
        location: "Spain",
        title: "Valencia",
        googleMapsUrl:  "https://www.google.com",
        startDate: "02/10/2018",
        endDate: "03/10/2018",
        description: 'Spain has a great history of roman aqueducts and great foods plus the people are super social and youre wondering somethimes if theire working or just socializing the whole day',
        imageUrl: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        startDate: '12 Jan 2020',
        endDate: '03 Mar 2021'
    },
    {
        location: "Japan",
        title: "Village",
        googleMapsUrl: "https://www.google.com",
        startDate: "05/04/2019",
        endDate: "20/04/2019",
        description: "Japan offers a fascinating blend of traditional and modern experiences, with bustling cities, ancient temples, and stunning natural scenery.",
        imageUrl: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        startDate: '12 Jan 2020',
        endDate: '03 Mar 2021'
    },
]

export default function Cards(){

    return (
        <>
        {mockData.map((item) => (
            <div
                key={item.location}
                className='container'>
                <div className="cardStructure">
                    <img 
                    src={item.imageUrl} 
                    alt={item.location} 
                    className='cardImage'
                    >
                        
                    </img>
                        <div className='cardInfo'>
                            <div className="header">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{item.location}</span>
                                <p><a href='www.google.com'>View on google maps</a></p>
                            </div>
                                <div className="bulkCard">
                                    <div className='cardTitle'>
                                        <h1>{item.title}</h1>
                                            <div className="timeline">
                                                {item.startDate} - {item.endDate}
                                        </div>
                                    </div>
                                    <div className='desc'>
                                        {item.description}
                                    </div>
                                </div>
                        </div>
                   
                   
                </div>
            </div>
        ))}
        </>
    )
}