import './calltoaction.css'

export default function CallToAction(){

    return(
        <div className="callContainer">
            
            <button className='btnLeft'><i className="fa fa-envelope icon"></i>Email</button>
            
            <button className='btnRight'><i className="fa fa-github icon"></i>Github</button>
        </div>
    )
}