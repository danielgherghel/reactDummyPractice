import './contact.css'


export default function Contact({img, name, phone, email}){

    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={img}></img>
                <h3>{name}</h3>
                <div className="info-group">
                    
                    <p><i clasName="fas fa-phone-alt"></i>{phone}</p>
                </div>
                <div className="info-group">
                    
                    <p><i className="fas fa-envelope"></i>{email}</p>
                </div>
            </div>
        </div>
    )
}