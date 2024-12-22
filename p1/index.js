
import Header from "./Header"

function Footer(){
    return(
        
         <footer className="footerComp">
           <p>"&#169; 2024 &lt;gherghel&gt;. All rights reserved."</p>
        </footer>
        
    )
}

function Body(){
    return(
        <div>
            <h1>Reasons why I'm exited to learn React</h1>
            <ol>
                <li>Functionality</li>
                <li>Ease of use</li>
                <li>Job oportunities</li>
                <li>Coponents</li>
            </ol>
        </div>
    )
}

function RenderChallange(){
    return(
        <div className='wrapper'>
        <Header />
        <div className="mainContent">

        <Body />
        </div>

        <Footer />
        </div>
    )
}




ReactDOM.render(<RenderChallange />, document.getElementById('root'))